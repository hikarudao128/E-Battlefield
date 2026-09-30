import subprocess, math, wave, struct
import numpy as np
from PIL import Image, ImageDraw, ImageFont

FPS = 30
W, H = 1920, 1080
VX, VY, VW, VH = 160, 36, 1600, 900          # slide viewport
INK = (28, 34, 48); ROSE = (184, 84, 106); PINK = (232, 183, 192); WHITE = (255, 255, 255); STONE = (160, 164, 172)
FS = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
FB = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FSER = "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf"
f_cap = ImageFont.truetype(FS, 29); f_lab = ImageFont.truetype(FB, 22); f_lab2 = ImageFont.truetype(FS, 18)

slides = [Image.open(f"/tmp/sxd/hi{i}.png").convert("RGB") for i in range(1, 5)]
SW, SH = slides[0].size
PPI = SW / 13.333
FULL = (0, 0, 13.333, 7.5)

SHOTS = {
 0: ("01 · WHY", "Reframe", [
   (FULL, "Bài toán: bán tiếp bộ sưu tập Xuân/Hè của SIXDO trên Amazon Mỹ trong mùa Thu/Đông, mà không thay đổi sản phẩm."),
   ((0.3, 1.7, 3.2, 3.45), "Ràng buộc: 110 sản phẩm, 182 ngày, chỉ 300 USD ngân sách Amazon và không được sửa sản phẩm vật lý."),
   ((3.4, 1.7, 5.4, 3.3), "Không bán “đồ mùa đông”. Chuyển từ bán theo mùa sang bán theo dịp: du lịch, du thuyền, đám cưới, tiệc lễ, hẹn hò, Valentine."),
   ((8.8, 1.7, 4.25, 3.3), "Mỗi ASIN một vai trò: SP1 cho du lịch, SP2 là Hero cho đám cưới và tiệc lễ, SP3 là mức giá vào cửa – đen cho Q4, hồng cho Q1."),
   ((0.3, 4.9, 12.73, 2.1), "North Star: tăng 50% tương đối Unit Session %, đồng thời bán ít nhất 90% tồn kho – tức 99 trên 110 sản phẩm."),
 ]),
 1: ("02 · WHAT", "Conversion engine", [
   (FULL, "Nguyên tắc: thắng ở tỷ lệ chuyển đổi trước, rồi mới trả tiền mua traffic."),
   ((0.3, 1.7, 12.73, 2.7), "Hành trình mua gồm 4 bước: từ khóa → listing → gallery & A+ → đặt hàng. Mỗi bước gắn với một chỉ số của Amazon."),
   ((0.3, 4.1, 8.6, 2.2), "Title nói sản phẩm là gì; bullet nói mặc vào dịp nào. Mỗi ASIN gắn với một nhóm từ khóa theo dịp riêng."),
   ((8.9, 4.1, 4.15, 2.2), "Chỉ nói sự thật về sản phẩm: không gọi là đồ giữ ấm, không ghi SP2 có lót, giữ nguyên “Hand Wash Only” cho SP1."),
   ((0.3, 6.25, 12.73, 0.8), "Khớp đúng ý định tìm kiếm + giảm băn khoăn khi mua = Unit Session % cao hơn."),
 ]),
 2: ("03 · HOW", "Commercial engine", [
   (FULL, "Với 300 USD, chúng tôi mua ý định mua hàng – không mua độ phủ."),
   ((0.3, 1.7, 3.9, 4.1), "Ngân sách: 210 USD Sponsored Products + 45 USD A+ & gallery + 45 USD coupon = đúng 300 USD."),
   ((4.2, 1.7, 4.85, 4.1), "210 USD PPC chia cho 6 chiến dịch, khoảng 1,15 USD/ngày. Ưu tiên ban đầu SP2/SP3/SP1 = 45/35/20, phân bổ lại sau 14 ngày."),
   ((9.0, 1.7, 4.05, 3.9), "Sau giá vốn và phí 17%: còn 28,15 USD và 11,57 USD trước FBA. Từ đó ra trần CPC: 0,94 USD và 0,35 USD mỗi click."),
   ((0.3, 5.75, 12.73, 1.35), "Coupon 5% có mục tiêu, tối đa 45 USD. Không làm bundle vật lý – bán chéo bằng bảng so sánh A+ và Brand Store."),
 ]),
 3: ("04 · CONTROL", "Roadmap & KPI", [
   (FULL, "Vận hành 182 ngày như một hệ thống Test – Learn – Scale – Exit."),
   ((0.3, 1.15, 12.73, 1.6), "5 giai đoạn: Rebuild, Learn, Holiday Push, Q1 Shift và Exit – cộng lại đúng 182 ngày."),
   ((0.3, 2.75, 7.1, 3.0), "Đường tiêu thụ mục tiêu: 28 sản phẩm cuối tháng 11 → 50 → 72 → 88 → 99 sản phẩm vào 31/3."),
   ((7.4, 2.75, 5.65, 3.0), "North Star: Unit Session % = baseline × 1,5. Ví dụ minh họa: 6% thành 9%, không phải 56%."),
   ((0.3, 5.7, 12.73, 1.0), "Mỗi tuần đọc cùng một bộ tín hiệu và áp dụng 5 quy tắc If → Then."),
 ]),
}

def ease(t): return t * t * (3 - 2 * t)

def fit(rect, pad=0.12):
    x, y, w, h = rect
    x, y, w, h = x - pad, y - pad, w + 2 * pad, h + 2 * pad
    # expand to viewport aspect (letterbox-free where possible)
    a = VW / VH
    if w / h < a: nw = h * a; x -= (nw - w) / 2; w = nw
    else: nh = w / a; y -= (nh - h) / 2; h = nh
    # clamp inside slide when it fits
    if w <= 13.333: x = min(max(x, 0), 13.333 - w)
    if h <= 7.5: y = min(max(y, 0), 7.5 - h)
    return (x, y, w, h)

PADIN = 2.0
def padded(im):
    p = int(PADIN * PPI); c = Image.new("RGB", (im.width + 2 * p, im.height + 2 * p), WHITE); c.paste(im, (p, p)); return c
def view(img, rect):
    x, y, w, h = rect
    x += PADIN; y += PADIN
    box = (x * PPI, y * PPI, min((x + w) * PPI, img.width), min((y + h) * PPI, img.height))
    return img.resize((VW, VH), Image.BICUBIC, box=box)

def wrap(draw, text, font, maxw):
    words, lines, cur = text.split(), [], ""
    for wd in words:
        t = (cur + " " + wd).strip()
        if draw.textlength(t, font=font) <= maxw: cur = t
        else: lines.append(cur); cur = wd
    lines.append(cur); return lines

def chrome(vimg, label, sub, caption, progress, alpha=1.0):
    fr = Image.new("RGB", (W, H), INK)
    fr.paste(vimg, (VX, VY))
    d = ImageDraw.Draw(fr)
    d.rectangle([VX, VY + VH + 8, VX + VW, VY + VH + 11], fill=(55, 62, 78))
    d.rectangle([VX, VY + VH + 8, VX + int(VW * progress), VY + VH + 11], fill=ROSE)
    d.text((VX, VY + VH + 34), label, font=f_lab, fill=PINK)
    d.text((VX, VY + VH + 64), sub, font=f_lab2, fill=STONE)
    if caption:
        col = tuple(int(INK[i] + (WHITE[i] - INK[i]) * alpha) for i in range(3))
        lines = wrap(d, caption, f_cap, VW - 270)
        y0 = VY + VH + 30 if len(lines) > 1 else VY + VH + 48
        for i, ln in enumerate(lines[:2]):
            d.text((VX + 270, y0 + i * 40), ln, font=f_cap, fill=col)
    return fr

def card(lines_spec):
    fr = Image.new("RGB", (W, H), INK); d = ImageDraw.Draw(fr)
    for txt, font, color, y in lines_spec:
        tw = d.textlength(txt, font=font); d.text(((W - tw) / 2, y), txt, font=font, fill=color)
    return fr

ff = subprocess.Popen(["ffmpeg", "-y", "-loglevel", "error", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}", "-r", str(FPS), "-i", "-",
                       "-c:v", "libx264", "-preset", "medium", "-crf", "18", "-pix_fmt", "yuv420p", "/tmp/sxd/video_noaudio.mp4"], stdin=subprocess.PIPE)
nframes = 0
def emit(img, n=1):
    global nframes
    b = img.tobytes()
    for _ in range(n): ff.stdin.write(b)
    nframes += n

def fade(a, b, secs):
    n = int(secs * FPS)
    for i in range(n): emit(Image.blend(a, b, ease((i + 1) / n)))

def hold_secs(text): return max(4.2, min(8.0, len(text.split()) / 2.6))

# total shot count for progress
allshots = [(k, s) for k in SHOTS for s in SHOTS[k][2]]
TOTAL = len(allshots)

# ---- intro
f_big = ImageFont.truetype(FSER, 64); f_mid = ImageFont.truetype(FS, 34); f_sm = ImageFont.truetype(FS, 24); f_tag = ImageFont.truetype(FB, 22)
intro = card([("SIXDO × AMAZON US", f_tag, PINK, 330), ("Repackage the Occasion,", f_big, WHITE, 390), ("Not the Product", f_big, WHITE, 470),
              ("Yêu cầu 02 – Chiến lược kinh doanh trên Amazon", f_mid, STONE, 590), ("Q4/2026 – Q1/2027 · 01/10/2026 → 31/03/2027 · 182 ngày", f_sm, STONE, 650)])
black = Image.new("RGB", (W, H), (0, 0, 0))
fade(black, intro, 1.0); emit(intro, int(3.5 * FPS))

prev_frame = intro
idx = 0
for k in range(4):
    label, sub, shots = SHOTS[k]
    img = padded(slides[k])
    rects = [fit(r, 0 if r == FULL else 0.12) if r != FULL else FULL for r, _ in shots]
    first = chrome(view(img, FULL), label, sub, None, idx / TOTAL)
    fade(prev_frame, first, 0.9)
    cur = FULL
    for j, ((r, cap), tgt) in enumerate(zip(shots, rects)):
        idx += 1
        prog = idx / TOTAL
        # move camera
        if tgt != cur:
            n = int(1.1 * FPS)
            for i in range(n):
                t = ease((i + 1) / n)
                rr = tuple(cur[q] + (tgt[q] - cur[q]) * t for q in range(4))
                emit(chrome(view(img, rr), label, sub, None, prog))
            cur = tgt
        v = view(img, cur)
        n_in = int(0.4 * FPS)
        for i in range(n_in): emit(chrome(v, label, sub, cap, prog, (i + 1) / n_in))
        emit(chrome(v, label, sub, cap, prog), int(hold_secs(cap) * FPS))
    # return to full view before leaving slide
    n = int(1.0 * FPS)
    for i in range(n):
        t = ease((i + 1) / n)
        rr = tuple(cur[q] + (FULL[q] - cur[q]) * t for q in range(4))
        emit(chrome(view(img, rr), label, sub, None, idx / TOTAL))
    last = chrome(view(img, FULL), label, sub, None, idx / TOTAL)
    emit(last, int(0.8 * FPS))
    prev_frame = last

# ---- outro
f_q = ImageFont.truetype(FSER, 46)
outro = card([("KEY TAKEAWAY", f_tag, PINK, 330),
              ("SIXDO does not need more traffic first —", f_q, WHITE, 390),
              ("it needs more qualified traffic", f_q, WHITE, 455),
              ("converting against the right occasion.", f_q, WHITE, 520),
              ("SIXDO không cần thêm traffic trước – mà cần traffic đúng người, chuyển đổi đúng dịp.", f_sm, STONE, 630)])
fade(prev_frame, outro, 1.0); emit(outro, int(5 * FPS)); fade(outro, black, 1.2)
ff.stdin.close(); ff.wait()
dur = nframes / FPS
print("frames", nframes, "secs", round(dur, 1))

# ---- soft ambient pad (Am – F – C – G), generated locally
sr = 44100
N = int((dur + 0.5) * sr)
t = np.arange(N) / sr
chords = [[220.0, 261.63, 329.63], [174.61, 220.0, 261.63], [261.63, 329.63, 392.0], [196.0, 246.94, 293.66]]
seg = 6.0
audio = np.zeros(N)
for ci in range(int(dur / seg) + 2):
    ch = chords[ci % 4]
    s0 = int(ci * seg * sr); s1 = min(N, int((ci + 1) * seg * sr + 1.5 * sr))
    if s0 >= N: break
    tt = t[s0:s1] - ci * seg
    env = np.minimum(1, tt / 1.5) * np.clip((seg + 1.5 - tt) / 1.5, 0, 1)
    for fq in ch:
        for fq2, a in ((fq, 1.0), (fq / 2, 0.6), (fq * 2, 0.15)):
            audio[s0:s1] += a * env * np.sin(2 * np.pi * fq2 * tt + 0.3 * np.sin(2 * np.pi * 0.2 * tt))
audio /= np.max(np.abs(audio))
fade_n = int(2.5 * sr)
audio[:fade_n] *= np.linspace(0, 1, fade_n); audio[-fade_n:] *= np.linspace(1, 0, fade_n)
audio *= 0.16
pcm = (audio * 32767).astype(np.int16)
with wave.open("/tmp/sxd/pad.wav", "wb") as w:
    w.setnchannels(1); w.setsampwidth(2); w.setframerate(sr); w.writeframes(pcm.tobytes())
subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", "/tmp/sxd/video_noaudio.mp4", "-i", "/tmp/sxd/pad.wav",
                "-af", "lowpass=f=1800", "-c:v", "copy", "-c:a", "aac", "-b:a", "128k", "-shortest", "/tmp/sxd/SIXDO-YC02-video.mp4"], check=True)
print("done")
