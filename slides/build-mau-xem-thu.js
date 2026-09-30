const pptxgen = require("pptxgenjs");
const path = require("path");
const OUT = "/home/user/E-Battlefield/slides/mau-xem-thu";

// ---------- Shared content (from research/SIXDO-ke-hoach-FINAL.md) ----------
const C = {
  kicker: "E-BATTLEFIELD 2026  ·  SIXDO × AMAZON US",
  title: "SIXDO trên Amazon US",
  sub: "Bán tiếp 3 sản phẩm Xuân/Hè trong mùa Thu/Đông · 10/2026 – 03/2027",
  thesis: "Khách không mua theo mùa trên lịch, mà theo nơi mặc và dịp mặc. Cùng sản phẩm, đổi bối cảnh, không xả giá.",
  stats: [
    { v: "110", l: "sản phẩm tồn kho cần bán" },
    { v: "400 USD", l: "ngân sách (300 trên / 100 ngoài Amazon)" },
    { v: "86", l: "sản phẩm, kịch bản cơ sở (78%)" },
  ],
  skus: [
    { tag: "SP1", name: "The Escape Jumpsuit", seg: "Winter Escapers: du thuyền, resort tháng 11–3", price: "51,99 USD", stock: "Tồn 20" },
    { tag: "SP2", name: "The Vacation-to-Fall Maxi", seg: "Họp mặt mùa thu, rồi chuyển sang Winter Escapers", price: "51,99 USD", stock: "Tồn 40" },
    { tag: "SP3 đen", name: "The Party Dress", seg: "Tiệc cuối năm, đám cưới, sự kiện trong nhà", price: "25,99 USD", stock: "Tồn 25" },
    { tag: "SP3 hồng", name: "The Pink Edit", seg: "Valentine 14/02 và Phục sinh 28/03", price: "25,99 USD", stock: "Tồn 25" },
  ],
  scen: {
    labels: ["Thận trọng", "Cơ sở", "Mục tiêu"],
    organic: [30, 59, 75], ppc: [16, 21, 26], ext: [2, 6, 9], total: [48, 86, 110],
  },
  scenNotes: [
    { h: "Tự nhiên là nguồn lớn nhất", b: "Cơ sở cần 4,1 session/ngày cho cả 3 listing (mục tiêu: 4,6)." },
    { h: "PPC tối đa 210 USD", b: "Mỗi chiến dịch 1 USD/ngày, tối đa 2 chiến dịch cùng lúc." },
    { h: "Ngoài Amazon có đo lường", b: "Instagram + 2 creator, mọi link đều gắn Amazon Attribution." },
  ],
  fin: {
    labels: ["Xả giá 50%", "Thận trọng (48)", "Cơ sở (86)", "Mục tiêu (110)"],
    A: [533, 707, 1580, 2062], B: [235, 388, 1009, 1348],
  },
};

function base(layoutName) {
  const p = new pptxgen();
  p.layout = "LAYOUT_16x9";
  p.author = "SIXDO team";
  p.title = "SIXDO – mẫu slide " + layoutName;
  return p;
}

// ---------- Generic slide builders, parameterised by a theme ----------
function titleSlide(p, T) {
  const s = p.addSlide();
  s.background = { color: T.darkBg };
  T.titleDeco && T.titleDeco(s, p);
  s.addText(C.kicker, { x: 0.6, y: 0.5, w: 8, h: 0.3, fontFace: T.body, fontSize: 11, bold: true, color: T.accent, charSpacing: 3, margin: 0, isTextBox: true });
  s.addText(C.title, { x: 0.6, y: 0.95, w: 8.2, h: 0.9, fontFace: T.head, fontSize: 40, bold: T.headBold, color: T.darkText, margin: 0, isTextBox: true });
  s.addText(C.sub, { x: 0.6, y: 1.85, w: 8.2, h: 0.4, fontFace: T.body, fontSize: 15, color: T.darkMuted, margin: 0, isTextBox: true });
  s.addText(C.thesis, { x: 0.6, y: 2.45, w: 7.4, h: 0.8, fontFace: T.head, fontSize: 16, italic: true, color: T.darkText, margin: 0, isTextBox: true });
  const w = 2.75, gap = 0.2;
  C.stats.forEach((st, i) => {
    const x = 0.6 + i * (w + gap);
    if (T.statBox) s.addShape(p.shapes.ROUNDED_RECTANGLE, { x, y: 3.6, w, h: 1.4, fill: { color: T.statBox, transparency: T.statBoxT || 0 }, line: { color: T.statBox, transparency: T.statBoxT || 0 }, rectRadius: 0.12 });
    const pad = T.statBox ? 0.2 : 0;
    s.addText(st.v, { x: x + pad, y: 3.7, w: w - 2 * pad, h: 0.75, fontFace: T.head, fontSize: 36, bold: true, color: T.accent, margin: 0, valign: "middle", isTextBox: true });
    s.addText(st.l, { x: x + pad, y: 4.45, w: w - 2 * pad, h: 0.45, fontFace: T.body, fontSize: 12, color: T.darkMuted, margin: 0, valign: "top", isTextBox: true });
  });
  s.addNotes("Mở đầu: luận điểm chính + 3 con số neo (110 sản phẩm, 400 USD, dự báo 86).");
}

function contentTitle(s, T, text, sub) {
  s.addText(text, { x: 0.6, y: 0.4, w: 8.8, h: 0.7, fontFace: T.head, fontSize: 30, bold: T.headBold, color: T.ink, margin: 0, isTextBox: true });
  if (sub) s.addText(sub, { x: 0.6, y: 1.08, w: 8.8, h: 0.35, fontFace: T.body, fontSize: 13, color: T.muted, margin: 0, isTextBox: true });
}

function skuSlide(p, T) {
  const s = p.addSlide();
  s.background = { color: T.lightBg };
  contentTitle(s, T, "Mỗi sản phẩm một bối cảnh mới", "Không đổi sản phẩm, chỉ đổi nơi mặc, dịp mặc và cách phối");
  const n = 4, gap = 0.25, w = (8.8 - gap * (n - 1)) / n, y = 1.75, h = 3.3;
  C.skus.forEach((k, i) => {
    const x = 0.6 + i * (w + gap);
    const fill = T.cardFill[i % T.cardFill.length];
    s.addShape(T.cardRound ? p.shapes.ROUNDED_RECTANGLE : p.shapes.RECTANGLE, {
      x, y, w, h, fill: { color: fill }, line: { color: T.cardLine || fill, width: 0.75 },
      rectRadius: T.cardRound ? 0.12 : undefined,
      shadow: T.cardShadow ? { type: "outer", color: "000000", opacity: 0.12, blur: 8, offset: 2, angle: 90 } : undefined,
    });
    const tc = T.cardText[i % T.cardText.length], tm = T.cardMuted[i % T.cardMuted.length];
    if (T.tagCircle) {
      s.addShape(p.shapes.OVAL, { x: x + 0.2, y: y + 0.22, w: 0.62, h: 0.62, fill: { color: T.tagCircle[i] }, line: { color: T.tagCircle[i] } });
      s.addText(k.tag.replace(" đen", "").replace(" hồng", ""), { x: x + 0.2, y: y + 0.22, w: 0.62, h: 0.62, fontFace: T.body, fontSize: 12, bold: true, color: "FFFFFF", align: "center", valign: "middle", margin: 0, isTextBox: true });
      s.addText(k.tag.includes(" ") ? k.tag.split(" ")[1].toUpperCase() : "", { x: x + 0.9, y: y + 0.22, w: w - 1.0, h: 0.62, fontFace: T.body, fontSize: 11, bold: true, color: tm, valign: "middle", margin: 0, isTextBox: true });
    } else {
      s.addText(k.tag.toUpperCase(), { x: x + 0.2, y: y + 0.25, w: w - 0.4, h: 0.3, fontFace: T.body, fontSize: 11, bold: true, color: T.tagColor[i % T.tagColor.length], charSpacing: 2, margin: 0, isTextBox: true });
    }
    s.addText(k.name, { x: x + 0.2, y: y + 1.0, w: w - 0.4, h: 0.75, fontFace: T.head, fontSize: 17, bold: T.headBold, italic: T.nameItalic, color: tc, valign: "top", margin: 0, isTextBox: true });
    s.addText(k.seg, { x: x + 0.2, y: y + 1.8, w: w - 0.4, h: 0.8, fontFace: T.body, fontSize: 12, color: tm, valign: "top", margin: 0, isTextBox: true });
    s.addText([
      { text: k.price, options: { bold: true, color: tc, breakLine: true } },
      { text: k.stock, options: { color: tm } },
    ], { x: x + 0.2, y: y + 2.65, w: w - 0.4, h: 0.5, fontFace: T.body, fontSize: 12, valign: "bottom", margin: 0, isTextBox: true });
  });
  s.addNotes("Vai trò từng SKU: SP1, SP2 → Winter Escapers; SP3 đen → tiệc; SP3 hồng → Valentine, Phục sinh.");
}

function scenarioSlide(p, T) {
  const s = p.addSlide();
  s.background = { color: T.lightBg };
  contentTitle(s, T, "Kịch bản cơ sở: bán 86 / 110 sản phẩm", "Số sản phẩm bán ra theo nguồn, 01/10/2026 – 31/03/2027");
  if (T.chartPanel) s.addShape(p.shapes.ROUNDED_RECTANGLE, { x: 0.6, y: 1.6, w: 5.3, h: 3.55, fill: { color: T.chartPanel }, line: { color: T.chartPanel }, rectRadius: 0.1 });
  s.addChart(p.charts.BAR, [
    { name: "Tự nhiên", labels: C.scen.labels, values: C.scen.organic },
    { name: "PPC", labels: C.scen.labels, values: C.scen.ppc },
    { name: "Ngoài Amazon", labels: C.scen.labels, values: C.scen.ext },
  ], {
    x: 0.7, y: 1.65, w: 5.1, h: 3.45, barDir: "col", barGrouping: "stacked", barGapWidthPct: 60,
    chartColors: T.chart3, showValue: true, dataLabelPosition: "ctr", dataLabelColor: "FFFFFF", dataLabelFontSize: 10, dataLabelFontFace: T.body,
    showLegend: true, legendPos: "b", legendFontSize: 10, legendFontFace: T.body, legendColor: T.muted,
    catAxisLabelColor: T.ink, catAxisLabelFontSize: 11, catAxisLabelFontFace: T.body, catAxisLineShow: false,
    valAxisHidden: true, valGridLine: { style: "none" }, catGridLine: { style: "none" },
  });
  const x = 6.25, w = 3.15;
  C.scenNotes.forEach((n, i) => {
    const y = 1.65 + i * 1.18;
    if (T.noteIcon) {
      s.addShape(p.shapes.OVAL, { x, y: y + 0.02, w: 0.4, h: 0.4, fill: { color: T.chart3[i] }, line: { color: T.chart3[i] } });
      s.addText(String(i + 1), { x, y: y + 0.02, w: 0.4, h: 0.4, fontFace: T.body, fontSize: 12, bold: true, color: "FFFFFF", align: "center", valign: "middle", margin: 0, isTextBox: true });
    } else {
      s.addShape(p.shapes.RECTANGLE, { x, y: y + 0.1, w: 0.22, h: 0.22, fill: { color: T.chart3[i] }, line: { color: T.chart3[i] } });
    }
    const tx = x + (T.noteIcon ? 0.55 : 0.4);
    s.addText(n.h, { x: tx, y, w: w - (tx - x), h: 0.42, fontFace: T.body, fontSize: 14, bold: true, color: T.ink, valign: "middle", margin: 0, isTextBox: true });
    s.addText(n.b, { x: tx, y: y + 0.45, w: w - (tx - x), h: 0.62, fontFace: T.body, fontSize: 12, color: T.muted, valign: "top", margin: 0, isTextBox: true });
  });
  s.addNotes("Câu hỏi then chốt khi pitching: khoảng 75 sản phẩm tự nhiên (kịch bản mục tiêu) đến từ đâu? Trả lời bằng baseline đo ngày 01/10.");
}

function financeSlide(p, T) {
  const s = p.addSlide();
  s.background = { color: T.lightBg };
  contentTitle(s, T, "Giữ giá vẫn lãi hơn xả hàng", "Lợi nhuận góp sau marketing (USD), 2 cách hiểu base cost");
  s.addChart(p.charts.BAR, [
    { name: "A: base cost đã gồm mọi phí", labels: C.fin.labels, values: C.fin.A },
    { name: "B: chưa gồm phí 17%", labels: C.fin.labels, values: C.fin.B },
  ], {
    x: 0.5, y: 1.55, w: 5.9, h: 3.6, barDir: "col", barGrouping: "clustered", barGapWidthPct: 70,
    chartColors: T.chart2, showValue: true, dataLabelPosition: "outEnd", dataLabelColor: T.ink, dataLabelFontSize: 10, dataLabelFontFace: T.body, dataLabelFormatCode: "#,##0",
    showLegend: true, legendPos: "b", legendFontSize: 10, legendFontFace: T.body, legendColor: T.muted,
    catAxisLabelColor: T.ink, catAxisLabelFontSize: 10, catAxisLabelFontFace: T.body, catAxisLineShow: false,
    valAxisHidden: true, valGridLine: { style: "none" }, catGridLine: { style: "none" },
  });
  const x = 6.75, w = 2.65;
  s.addShape(p.shapes.ROUNDED_RECTANGLE, { x, y: 1.65, w, h: 3.4, fill: { color: T.calloutBg }, line: { color: T.calloutBg }, rectRadius: 0.12 });
  s.addText("Kịch bản cơ sở", { x: x + 0.25, y: 1.85, w: w - 0.5, h: 0.3, fontFace: T.body, fontSize: 12, bold: true, color: T.calloutMuted, margin: 0, isTextBox: true });
  s.addText("+1.580", { x: x + 0.25, y: 2.15, w: w - 0.5, h: 0.75, fontFace: T.head, fontSize: 40, bold: true, color: T.calloutAccent, margin: 0, isTextBox: true });
  s.addText("USD (A), so với +533 USD nếu xả giá 50%", { x: x + 0.25, y: 2.9, w: w - 0.5, h: 0.55, fontFace: T.body, fontSize: 12, color: T.calloutText, margin: 0, valign: "top", isTextBox: true });
  s.addText("Ngay cả kịch bản thận trọng vẫn lãi hơn xả hàng, và còn 62 sản phẩm để bán đúng mùa Xuân/Hè 2027.", { x: x + 0.25, y: 3.6, w: w - 0.5, h: 1.25, fontFace: T.body, fontSize: 12, italic: true, color: T.calloutText, margin: 0, valign: "top", isTextBox: true });
  s.addNotes("Giả định: khuyến mãi TB 5%, dự phòng hoàn hàng 8%, marketing cố định 400 USD. Chưa tính thuế nhập khẩu, phụ phí tồn kho lâu ngày.");
}

// ---------- Themes ----------
const themes = {
  "A-runway-noir": {
    head: "Cambria", body: "Calibri", headBold: false, nameItalic: true,
    darkBg: "111111", darkText: "F4F1EA", darkMuted: "B8B2A7", accent: "C9A45C",
    lightBg: "FFFFFF", ink: "161616", muted: "5E5A55",
    cardFill: ["161616", "F4F1EA", "161616", "F4F1EA"], cardLine: "161616",
    cardText: ["F4F1EA", "161616"], cardMuted: ["B8B2A7", "5E5A55"], tagColor: ["C9A45C", "8C6D2E"],
    chart3: ["161616", "C9A45C", "9A948B"], chart2: ["161616", "C9A45C"],
    calloutBg: "161616", calloutAccent: "C9A45C", calloutText: "F4F1EA", calloutMuted: "B8B2A7",
    titleDeco: (s, p) => {
      s.addShape(p.shapes.OVAL, { x: 7.2, y: -1.2, w: 4.2, h: 4.2, fill: { color: "111111" }, line: { color: "C9A45C", width: 1 } });
      s.addShape(p.shapes.OVAL, { x: 7.8, y: -0.6, w: 3.0, h: 3.0, fill: { color: "111111" }, line: { color: "3A352C", width: 1 } });
    },
  },
  "B-winter-escape": {
    head: "Arial", body: "Arial", headBold: true, nameItalic: false,
    darkBg: "0B3C5D", darkText: "FFFFFF", darkMuted: "CFE3EA", accent: "F2A65A",
    statBox: "FFFFFF", statBoxT: 88,
    lightBg: "F3F8FA", ink: "0B3C5D", muted: "4F6B7A",
    cardFill: ["FFFFFF"], cardRound: true, cardShadow: true, cardLine: "FFFFFF",
    cardText: ["0B3C5D"], cardMuted: ["4F6B7A"],
    tagCircle: ["1D7A8C", "1D7A8C", "0B3C5D", "E86A5C"],
    chart3: ["0B3C5D", "1D7A8C", "F2A65A"], chart2: ["0B3C5D", "F2A65A"], noteIcon: true,
    chartPanel: "FFFFFF",
    calloutBg: "0B3C5D", calloutAccent: "F2A65A", calloutText: "FFFFFF", calloutMuted: "CFE3EA",
    titleDeco: (s, p) => {
      s.addShape(p.shapes.OVAL, { x: 7.6, y: -2.2, w: 4.4, h: 4.4, fill: { color: "F2A65A", transparency: 15 }, line: { color: "F2A65A", transparency: 15 } });
      s.addShape(p.shapes.OVAL, { x: 8.6, y: -0.3, w: 2.2, h: 2.2, fill: { color: "1D7A8C", transparency: 20 }, line: { color: "1D7A8C", transparency: 20 } });
    },
  },
  "C-floral-cobalt": {
    head: "Calibri", body: "Calibri", headBold: true, nameItalic: false,
    darkBg: "1F3F8A", darkText: "FFFFFF", darkMuted: "D5DEF2", accent: "F4B6C2",
    lightBg: "FFFFFF", ink: "1B1F3B", muted: "5A6078",
    cardFill: ["EEF2FB", "EEF2FB", "EEF2FB", "FCEEF1"], cardRound: true, cardLine: "FFFFFF",
    cardText: ["1B1F3B"], cardMuted: ["5A6078"],
    tagColor: ["1F3F8A", "1F3F8A", "1B1F3B", "C24D6A"],
    chart3: ["1F3F8A", "6F8FD6", "E58FA3"], chart2: ["1F3F8A", "E58FA3"],
    calloutBg: "FCEEF1", calloutAccent: "1F3F8A", calloutText: "1B1F3B", calloutMuted: "C24D6A",
    titleDeco: (s, p) => {
      // abstract "floral" cluster of petals, echoing SP1's blue floral print
      const petals = [[7.6, 0.5, 1.5, "F4B6C2"], [8.6, 1.2, 1.1, "6F8FD6"], [7.9, 1.7, 0.9, "FFFFFF"], [8.9, 0.2, 0.7, "D5DEF2"]];
      petals.forEach(([x, y, d, c]) => s.addShape(p.shapes.OVAL, { x, y, w: d, h: d, fill: { color: c, transparency: 10 }, line: { color: c, transparency: 10 } }));
    },
  },
};

(async () => {
  for (const [name, T] of Object.entries(themes)) {
    const p = base(name);
    titleSlide(p, T); skuSlide(p, T); scenarioSlide(p, T); financeSlide(p, T);
    await p.writeFile({ fileName: path.join(OUT, `mau-${name}.pptx`) });
    console.log("wrote", name);
  }
})();
