"""Convert a restricted Markdown file into a .docx that reuses the styles,
header and footer of the Part 1-2 Word file (same look).

Supported: '# ' Title, '## ' Heading1, '### ' Heading2, '#### ' Heading3,
paragraphs, '- ' bullets, '1. ' numbered, '> ' callout, '| table |',
'---pagebreak---', **bold**, *italic*, `code` (rendered as Consolas).
Usage: python md2docx.py in.md out.docx "HEADER TEXT"
"""
import re, sys, shutil, os, zipfile, html

SRC = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'dx')
PAGE_W = 12240 - 1080 * 2  # usable width in DXA

def esc(t):
    return html.escape(t, quote=False)

def runs(text, size=None, bold_default=False):
    out = []
    # tokens: **bold**, *italic*, `code`
    pat = re.compile(r'(\*\*.+?\*\*|`[^`]+`|(?<![\w*])\*[^*\s][^*]*?\*(?![\w*]))')
    pos = 0
    for m in pat.finditer(text):
        if m.start() > pos:
            out.append((text[pos:m.start()], 'n'))
        tok = m.group(0)
        if tok.startswith('**'):
            out.append((tok[2:-2], 'b'))
        elif tok.startswith('`'):
            out.append((tok[1:-1], 'c'))
        else:
            out.append((tok[1:-1], 'i'))
        pos = m.end()
    if pos < len(text):
        out.append((text[pos:], 'n'))
    xml = []
    for t, k in out:
        if not t:
            continue
        rpr = ''
        if k == 'b' or bold_default:
            rpr += '<w:b/>'
        elif size:
            rpr += '<w:b w:val="0"/>'
        if k == 'i':
            rpr += '<w:i/>'
        if k == 'c':
            rpr += '<w:rFonts w:ascii="Consolas" w:hAnsi="Consolas" w:cs="Consolas"/>'
        if size:
            rpr += f'<w:sz w:val="{size}"/>'
        rpr = f'<w:rPr>{rpr}</w:rPr>' if rpr else ''
        xml.append(f'<w:r>{rpr}<w:t xml:space="preserve">{esc(t)}</w:t></w:r>')
    return ''.join(xml)

def para(text, style=None, extra_ppr=''):
    ppr = (f'<w:pStyle w:val="{style}"/>' if style else '') + extra_ppr
    ppr = f'<w:pPr>{ppr}</w:pPr>' if ppr else ''
    return f'<w:p>{ppr}{runs(text)}</w:p>'

BORDER = ('<w:tcBorders>' + ''.join(
    f'<w:{s} w:val="single" w:sz="4" w:color="D9D9D9"/>' for s in ('top', 'left', 'bottom', 'right')) + '</w:tcBorders>')

def table(rows):
    ncol = max(len(r) for r in rows)
    rows = [r + [''] * (ncol - len(r)) for r in rows]
    # column widths proportional to content length (clamped)
    lens = [max(min(len(r[i]), 60) for r in rows) + 6 for i in range(ncol)]
    tot = sum(lens)
    widths = [int(PAGE_W * l / tot) for l in lens]
    widths[-1] = PAGE_W - sum(widths[:-1])
    size = 18 if ncol <= 4 else 16
    g = ''.join(f'<w:gridCol w:w="{w}"/>' for w in widths)
    x = [f'<w:tbl><w:tblPr><w:tblW w:type="dxa" w:w="{PAGE_W}"/><w:tblLayout w:type="fixed"/>'
         '<w:tblLook w:firstColumn="1" w:firstRow="1" w:lastColumn="0" w:lastRow="0" w:noHBand="0" w:noVBand="1" w:val="04A0"/>'
         f'</w:tblPr><w:tblGrid>{g}</w:tblGrid>']
    for ri, r in enumerate(rows):
        hdr = ri == 0
        fill = 'E7EDF3' if hdr else ('FFFFFF' if ri % 2 else 'F6F7F8')
        trpr = '<w:trPr><w:cantSplit/><w:tblHeader/></w:trPr>' if hdr else '<w:trPr><w:cantSplit/></w:trPr>'
        x.append(f'<w:tr>{trpr}')
        for ci, c in enumerate(r):
            parts = [p.strip() for p in re.split(r'<br\s*/?>', c)] or ['']
            ps = ''.join(f'<w:p><w:pPr><w:spacing w:after="60" w:before="60"/></w:pPr>{runs(p, size=size, bold_default=hdr)}</w:p>' for p in parts)
            x.append(f'<w:tc><w:tcPr><w:tcW w:type="dxa" w:w="{widths[ci]}"/>{BORDER}<w:shd w:val="clear" w:color="auto" w:fill="{fill}"/></w:tcPr>{ps}</w:tc>')
        x.append('</w:tr>')
    x.append('</w:tbl>')
    x.append('<w:p><w:pPr><w:spacing w:after="0"/></w:pPr></w:p>')
    return ''.join(x)

def callout(text):
    ppr = ('<w:pBdr><w:left w:val="single" w:sz="18" w:space="8" w:color="7A8FA6"/></w:pBdr>'
           '<w:shd w:val="clear" w:color="auto" w:fill="F6F7F8"/><w:ind w:left="200" w:right="200"/>')
    return para(text, extra_ppr=ppr)

def convert(md):
    body = []
    lines = md.split('\n')
    i = 0
    while i < len(lines):
        ln = lines[i].rstrip()
        if not ln.strip():
            i += 1; continue
        if ln.strip() == '---pagebreak---':
            body.append('<w:p><w:r><w:br w:type="page"/></w:r></w:p>'); i += 1; continue
        if ln.startswith('|'):
            rows = []
            while i < len(lines) and lines[i].startswith('|'):
                cells = [c.strip() for c in lines[i].strip().strip('|').split('|')]
                if not all(re.fullmatch(r':?-{2,}:?', c) for c in cells):
                    rows.append(cells)
                i += 1
            body.append(table(rows)); continue
        m = re.match(r'(#{1,4}) (.*)', ln)
        if m:
            st = {1: 'Title', 2: 'Heading1', 3: 'Heading2', 4: 'Heading3'}[len(m.group(1))]
            sp = {'Heading1': '<w:spacing w:before="280" w:after="60"/>', 'Heading2': '<w:spacing w:before="160" w:after="40"/>'}.get(st, '')
            body.append(para(m.group(2), st, sp)); i += 1
            if st == 'Title':
                # subtitle lines directly under the title: one paragraph with line breaks
                sub = []
                while i < len(lines) and lines[i].strip():
                    sub.append(runs(lines[i].strip())); i += 1
                if sub:
                    body.append('<w:p>' + '<w:r><w:br/></w:r>'.join(sub) + '</w:p>')
            continue
        if ln.startswith('> '):
            body.append(callout(ln[2:])); i += 1; continue
        m = re.match(r'(\s*)[-*] (.*)', ln)
        if m:
            st = 'ListBullet2' if len(m.group(1)) >= 2 else 'ListBullet'
            body.append(para(m.group(2), st)); i += 1; continue
        m = re.match(r'\s*\d+\. (.*)', ln)
        if m:
            n = re.match(r'\s*(\d+)\.', ln).group(1)
            body.append(para(f'{n}. ' + m.group(1), extra_ppr='<w:ind w:left="360" w:hanging="360"/>')); i += 1; continue
        # plain paragraph: join following non-special lines
        buf = [ln.strip()]
        i += 1
        while i < len(lines) and lines[i].strip() and not re.match(r'(#|\||> |\s*[-*] |\s*\d+\. |---pagebreak---)', lines[i]):
            buf.append(lines[i].strip()); i += 1
        body.append(para(' '.join(buf)))
    return ''.join(body)

def main(inp, out, header):
    md = open(inp, encoding='utf8').read()
    tmp = out + '.dir'
    if os.path.exists(tmp):
        shutil.rmtree(tmp)
    shutil.copytree(SRC, tmp)
    doc = open(os.path.join(tmp, 'word/document.xml'), encoding='utf8').read()
    start = doc.index('<w:body>') + len('<w:body>')
    sect = doc.rindex('<w:sectPr')
    doc = doc[:start] + convert(md) + doc[sect:]
    open(os.path.join(tmp, 'word/document.xml'), 'w', encoding='utf8').write(doc)
    hp = os.path.join(tmp, 'word/header1.xml')
    h = open(hp, encoding='utf8').read()
    h = re.sub(r'(<w:t[^>]*>)[^<]*SIXDO[^<]*(</w:t>)', lambda m: m.group(1) + esc(header) + m.group(2), h, count=1)
    open(hp, 'w', encoding='utf8').write(h)
    if os.path.exists(out):
        os.remove(out)
    with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as z:
        # [Content_Types].xml first
        z.write(os.path.join(tmp, '[Content_Types].xml'), '[Content_Types].xml')
        for root, _, files in os.walk(tmp):
            for f in files:
                p = os.path.join(root, f)
                a = os.path.relpath(p, tmp)
                if a != '[Content_Types].xml':
                    z.write(p, a)
    shutil.rmtree(tmp)

if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2], sys.argv[3] if len(sys.argv) > 3 else 'SIXDO | YÊU CẦU 02 | AMAZON US')
