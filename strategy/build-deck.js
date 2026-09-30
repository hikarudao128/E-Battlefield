const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.333 x 7.5
pres.title = "SIXDO – Amazon US Strategy (Yêu cầu 02)";

// Palette
const INK = "1C2230", ROSE = "B8546A", STONE = "6B6F76", BLUSH = "F6E9EC",
  MIST = "F3F3F5", LINE = "D9DADF", AMBER = "C98A1B", AMBERT = "FBF3E4",
  BLUE = "4F6D8C", BLUET = "E9EEF3", CHAR = "2B2B2B", PINK = "E8B7C0", WHITE = "FFFFFF",
  GREEN = "3F7D5A";
const HF = "Cambria", BF = "Calibri";
const M = 0.45, W = 13.333, CW = W - 2 * M;

function txt(s, text, o) {
  s.addText(text, Object.assign({ isTextBox: true, fontFace: BF, fontSize: 11, color: INK, margin: 0, valign: "top" }, o));
}
function box(s, x, y, w, h, fill, o = {}) {
  s.addShape(o.round ? pres.shapes.ROUNDED_RECTANGLE : pres.shapes.RECTANGLE,
    Object.assign({ x, y, w, h, fill: { color: fill }, line: o.line ? { color: o.line, width: o.lw || 1, dashType: o.dash || "solid" } : { type: "none" } },
      o.round ? { rectRadius: o.round } : {}));
}
function frame(s, idx, headline, sub) {
  s.background = { color: WHITE };
  const parts = ["WHY", "WHAT", "HOW", "CONTROL"];
  const runs = [];
  parts.forEach((p, i) => {
    runs.push({ text: p, options: { bold: i === idx, color: i === idx ? ROSE : "A3A6AC" } });
    if (i < 3) runs.push({ text: "  ·  ", options: { color: "A3A6AC" } });
  });
  txt(s, runs, { x: M, y: 0.22, w: 5, h: 0.25, fontSize: 9, charSpacing: 2 });
  txt(s, `SIXDO × AMAZON US  |  YÊU CẦU 02  |  ${idx + 1} / 4`, { x: W - M - 5, y: 0.22, w: 5, h: 0.25, fontSize: 9, color: "A3A6AC", align: "right", charSpacing: 1 });
  txt(s, headline, { x: M, y: 0.5, w: CW, h: 0.85, fontFace: HF, fontSize: 23, bold: true, valign: "middle" });
  if (sub) txt(s, sub, { x: M, y: 1.36, w: CW, h: 0.3, fontSize: 12.5, italic: true, color: STONE });
}
function takeaway(s, y, text, h = 0.52, fs = 13.5) {
  box(s, M, y, CW, h, INK, { round: 0.06 });
  txt(s, text, { x: M + 0.25, y, w: CW - 0.5, h, fontSize: fs, color: WHITE, bold: true, valign: "middle", fontFace: HF });
}
function foot(s, text, y = 7.08) {
  txt(s, text, { x: M, y, w: CW, h: 0.3, fontSize: 8, color: STONE, italic: true });
}
function tag(s, x, y, w, text, color) {
  box(s, x, y, w, 0.22, WHITE, { round: 0.05, line: color, lw: 0.75 });
  txt(s, text, { x, y, w, h: 0.22, fontSize: 7.5, color, bold: true, align: "center", valign: "middle" });
}

// ============ SLIDE 1 — WHY ============
{
  const s = pres.addSlide();
  frame(s, 0, "Repackage the Occasion, Not the Product: SP2 anchors Q4–Q1 demand while SP1 and SP3 capture travel and party long-tails",
    "110 Spring/Summer units · 182 days · $300 onsite · zero physical changes → sell to occasions that still buy in winter.");

  // LEFT: challenge tiles
  txt(s, "THE CHALLENGE", { x: M, y: 1.82, w: 2.8, h: 0.22, fontSize: 9, bold: true, color: STONE, charSpacing: 2 });
  const tiles = [["110", "seasonal units across 3 ASINs"], ["182", "days · Oct 1, 2026 → Mar 31, 2027"],
    ["$300", "Amazon onsite budget (≈ $1.65/day)"], ["0", "physical product changes allowed"]];
  tiles.forEach((t, i) => {
    const y = 2.1 + i * 0.64;
    box(s, M, y, 2.85, 0.56, MIST, { round: 0.05 });
    txt(s, t[0], { x: M + 0.12, y, w: 0.95, h: 0.56, fontSize: 22, bold: true, color: ROSE, valign: "middle" });
    txt(s, t[1], { x: M + 1.08, y, w: 1.7, h: 0.56, fontSize: 9.5, color: INK, valign: "middle" });
  });

  // CENTER: transformation
  const cx = 3.55;
  txt(s, "THE REFRAME", { x: cx, y: 1.82, w: 3, h: 0.22, fontSize: 9, bold: true, color: STONE, charSpacing: 2 });
  box(s, cx, 2.1, 2.05, 0.95, MIST, { round: 0.06, line: LINE });
  txt(s, [{ text: "Spring/Summer product", options: { bold: true, fontSize: 12, color: STONE, breakLine: true } },
    { text: "sold by season → “out of season” in Q4", options: { fontSize: 9, color: STONE } }],
    { x: cx + 0.12, y: 2.1, w: 1.85, h: 0.95, valign: "middle" });
  s.addShape(pres.shapes.RIGHT_ARROW, { x: cx + 2.15, y: 2.4, w: 0.55, h: 0.35, fill: { color: ROSE }, line: { type: "none" } });
  box(s, cx + 2.8, 2.1, 2.35, 0.95, ROSE, { round: 0.06 });
  txt(s, [{ text: "Occasion-led demand", options: { bold: true, fontSize: 13, color: WHITE, breakLine: true } },
    { text: "sold by why she needs it now", options: { fontSize: 9, color: WHITE } }],
    { x: cx + 2.92, y: 2.1, w: 2.15, h: 0.95, valign: "middle" });

  const chipRow = (label, sub, chips, y, fill, col) => {
    txt(s, [{ text: label, options: { bold: true, color: INK, fontSize: 10, breakLine: true } }, { text: sub, options: { color: STONE, fontSize: 8 } }],
      { x: cx, y, w: 0.6, h: 0.62, valign: "middle" });
    let x = cx + 0.65;
    chips.forEach(c => {
      const w = c[1];
      box(s, x, y + 0.08, w, 0.46, fill, { round: 0.2 });
      txt(s, c[0], { x, y: y + 0.08, w, h: 0.46, fontSize: 8.5, color: col, bold: true, align: "center", valign: "middle" });
      x += w + 0.08;
    });
  };
  chipRow("Q4", "Oct–Dec", [["Resort & Cruise", 0.9], ["Fall/Winter Wedding Guest", 1.2], ["Holiday Dinner / Brunch", 1.15], ["Party / Date Night", 1.0]], 3.2, BLUSH, ROSE);
  chipRow("Q1", "Jan–Mar", [["Valentine’s Day", 1.2], ["Early-Spring & Winter-Sun Travel", 2.1], ["Date Night", 1.0]], 3.85, BLUET, BLUE);

  box(s, cx, 4.52, 5.15, 0.36, AMBERT, { round: 0.05, line: AMBER, lw: 0.75 });
  txt(s, [{ text: "✕  NOT “winter clothing”  ", options: { bold: true, color: AMBER } },
    { text: "— no warm / thermal / cold-weather claims", options: { color: INK } }],
    { x: cx + 0.12, y: 4.52, w: 5.0, h: 0.36, fontSize: 9.5, valign: "middle" });

  // RIGHT: portfolio table
  const rx = 8.95, rw = W - M - rx;
  txt(s, "PORTFOLIO ROLES", { x: rx, y: 1.82, w: 3, h: 0.22, fontSize: 9, bold: true, color: STONE, charSpacing: 2 });
  const hd = { bold: true, color: WHITE, fill: { color: INK }, fontSize: 8.5 };
  const rows = [
    [{ text: "ASIN", options: hd }, { text: "Price", options: hd }, { text: "Role", options: hd }, { text: "Primary intent", options: hd }],
    ["SP1 · B0GRGWVHWC\nFloral Halter Jumpsuit", "$51.99", "Travel", "Resort · cruise · holiday travel"],
    [{ text: "SP2 · B0FDKS69GR\nFloral L/S Maxi Dress", options: { bold: true, color: ROSE, fill: { color: BLUSH } } },
      { text: "$51.99", options: { bold: true, fill: { color: BLUSH } } },
      { text: "HERO", options: { bold: true, color: ROSE, fill: { color: BLUSH } } },
      { text: "Fall wedding guest · holiday brunch/dinner", options: { fill: { color: BLUSH } } }],
    ["SP3 · B0FDKRBQVZ\nRaw Tiered Flared Dress", "$25.99", "Entry price", "Black: party/date (Q4) · Pink: Valentine/vacation (Q1)"],
  ];
  s.addTable(rows, { x: rx, y: 2.1, w: rw, colW: [1.33, 0.62, 0.62, rw - 2.57], fontFace: BF, fontSize: 8.5, color: INK,
    border: { type: "solid", pt: 0.5, color: LINE }, valign: "middle", margin: 0.05, rowH: [0.28, 0.66, 0.66, 0.78] });

  // BOTTOM: role cards
  const cards = [
    { k: "SP1 · TRAVEL", c: BLUE, t: BLUET, h: "“Pack it for the sun.”", b: "Halter · wide-leg · cotton · Hand Wash Only", w: "Win: cruise / resort searches, Nov–Mar" },
    { k: "SP2 · HERO", c: ROSE, t: BLUSH, h: "“The long-sleeve floral guest look.”", b: "Long puff sleeves · tie neck · tiered maxi", w: "Win: wedding guest + holiday dining · 45% initial PPC priority" },
    { k: "SP3 · ENTRY PRICE", c: CHAR, t: MIST, h: "“One dress, two seasons.”", b: "Black → Q4 party / date night · Pink → Q1 Valentine", w: "Win: lowest price point, impulse occasion" },
  ];
  const cw = (CW - 0.5) / 3;
  cards.forEach((c, i) => {
    const x = M + i * (cw + 0.25), y = 5.05;
    box(s, x, y, cw, 1.2, c.t, { round: 0.06, line: i === 1 ? ROSE : undefined, lw: 1.5 });
    s.addShape(pres.shapes.OVAL, { x: x + 0.18, y: y + 0.18, w: 0.3, h: 0.3, fill: { color: c.c }, line: { type: "none" } });
    txt(s, c.k, { x: x + 0.58, y: y + 0.16, w: cw - 0.7, h: 0.34, fontSize: 11, bold: true, color: c.c, valign: "middle", charSpacing: 1 });
    txt(s, [{ text: c.h, options: { italic: true, fontFace: HF, fontSize: 11, breakLine: true } },
      { text: c.b, options: { fontSize: 9, color: STONE, breakLine: true } },
      { text: c.w, options: { fontSize: 9, bold: true } }], { x: x + 0.18, y: y + 0.52, w: cw - 0.36, h: 0.64 });
  });

  takeaway(s, 6.43, "North Star:  +50% relative Unit Session % uplift (Baseline × 1.5) while selling ≥90% of inventory (99 of 110 units).", 0.52, 12.5);
  foot(s, "Baseline = Unit Session % over the 30 days ending Sep 30, 2026 (Business Reports). All targets are management targets, not historical data. Occasion demand to be validated via Helium 10 / Search Query Performance.");
  s.addNotes("Chúng tôi không cố thuyết phục khách mua đồ hè cho mùa đông. Chúng tôi tìm những dịp trong mùa đông vẫn cần đúng những bộ đồ này, và giao cho mỗi ASIN một nhiệm vụ riêng, với SP2 là mũi nhọn.");
}

// ============ SLIDE 2 — WHAT ============
{
  const s = pres.addSlide();
  frame(s, 1, "Win Conversion Before Buying Traffic: Rebuild Every PDP Around a High-Intent Occasion",
    "Title = Product Identity · Bullets = Occasion · A+ = Conversion + Education — no keyword stuffing.");

  const steps = [
    { n: "① SEARCH INTENT", m: "Impressions → CTR", items: [["Core: ", "floral maxi dress women"], ["Attribute: ", "long sleeve · halter · wide leg · tiered"], ["Occasion long-tail: ", "fall wedding guest dress · cruise outfits women · valentines dress women"]] },
    { n: "② LISTING", m: "CTR → Sessions", items: [["Title: ", "Brand + type + key attribute + color"], ["Bullets: ", "Silhouette → Fabric → Occasion → Styling → Fit/Care"], ["Product truth: ", "only verified attributes"]] },
    { n: "③ GALLERY / A+", m: "Sessions → Consider", items: [["Gallery (6): ", "Main · Occasion · Fit & Size · Fabric · Layering · Occasion matrix"], ["A+ (5): ", "Brand story · Seasonless Occasion Dressing · Features · Size/Fit · 3-ASIN comparison"], ["Layering: ", "alone · + cardigan · + blazer (styling pieces not included)"]] },
    { n: "④ PURCHASE", m: "Unit Session %", items: [["Fit confidence: ", "US size chart S–XL / S–XXL"], ["Availability: ", "FBA / Prime stock by child SKU"], ["Offer: ", "targeted 5% coupon (Slide 3)"]] },
  ];
  const sw = (CW - 0.3) / 4;
  const fills = ["E4E5E9", "C9CBD2", "8C909B", INK];
  steps.forEach((st, i) => {
    const x = M + i * (sw + 0.1), y = 1.82;
    s.addShape(i === 0 ? pres.shapes.PENTAGON : pres.shapes.CHEVRON, { x, y, w: sw + 0.1, h: 0.55, fill: { color: fills[i] }, line: { type: "none" } });
    const tc = i >= 2 ? WHITE : INK;
    txt(s, [{ text: st.n, options: { bold: true, fontSize: 11, color: tc, breakLine: true } }, { text: st.m, options: { fontSize: 8, color: tc } }],
      { x: x + (i === 0 ? 0.15 : 0.35), y, w: sw - 0.4, h: 0.55, valign: "middle" });
    const runs = [];
    st.items.forEach((it, j) => {
      runs.push({ text: it[0], options: { bold: true, color: i === 0 && j === 2 ? ROSE : INK } });
      runs.push({ text: it[1], options: { color: INK, breakLine: j < 2, paraSpaceAfter: 3 } });
    });
    box(s, x, y + 0.65, sw, 1.42, i === 0 ? BLUSH : MIST, { round: 0.05 });
    txt(s, runs, { x: x + 0.12, y: y + 0.72, w: sw - 0.24, h: 1.3, fontSize: 9 });
  });

  // ASIN table
  const hd = { bold: true, color: WHITE, fill: { color: INK }, fontSize: 9 };
  const rows = [
    [{ text: "ASIN", options: hd }, { text: "Search intent (priority keywords)", options: hd }, { text: "New title (identity)", options: hd }, { text: "Bullet 3 — occasion message", options: hd }],
    [{ text: "SP1\nTravel", options: { bold: true, color: BLUE } }, "resort jumpsuit women · cruise outfits women · vacation jumpsuit women",
      "SIXDO Women's Floral Halter Wide-Leg Jumpsuit, Cotton, Blue/White", "“Made for winter-sun escapes: cruise decks, resort dinners, holiday travel.” Care: Hand Wash Only"],
    [{ text: "SP2\nHERO", options: { bold: true, color: ROSE, fill: { color: BLUSH } } }, { text: "fall wedding guest dress · long sleeve floral maxi dress · holiday brunch dress", options: { fill: { color: BLUSH } } },
      { text: "SIXDO Women's Floral Long-Sleeve Tiered Maxi Dress, Blue or Yellow", options: { fill: { color: BLUSH } } },
      { text: "“Long puff sleeves and a tiered maxi skirt for fall weddings, holiday brunch and indoor dinners.”", options: { fill: { color: BLUSH } } }],
    [{ text: "SP3\nEntry", options: { bold: true, color: CHAR } }, "black date night dress · holiday party dress black · pink date night dress · valentines dress women",
      "SIXDO Women's Spaghetti-Strap Tiered Flared Dress, Pink or Black", "“Black for holiday parties and date nights; Pink for Valentine’s Day and vacation.”"],
  ];
  s.addTable(rows, { x: M, y: 4.2, w: 8.35, colW: [0.62, 2.35, 2.45, 2.93], fontFace: BF, fontSize: 8.5, color: INK,
    border: { type: "solid", pt: 0.5, color: LINE }, valign: "middle", margin: 0.05, rowH: [0.26, 0.52, 0.52, 0.52] });

  // DO NOT CLAIM
  const rx = 9.05, rw = W - M - rx;
  box(s, rx, 4.2, rw, 1.25, AMBERT, { round: 0.05, line: AMBER, lw: 1 });
  txt(s, [{ text: "DO NOT CLAIM", options: { bold: true, color: AMBER, fontSize: 10.5, breakLine: true, charSpacing: 1 } },
    { text: "✕  “Warm”, “winter”, “thermal”, “cold-weather” (all ASINs)", options: { breakLine: true } },
    { text: "✕  “Lined” on SP2 — lining not confirmed", options: { breakLine: true } },
    { text: "✕  Unverified fabric properties (stretch, wrinkle-free…)", options: { breakLine: true } },
    { text: "✓  SP1 keeps “Hand Wash Only”", options: { bold: true, color: GREEN } }],
    { x: rx + 0.14, y: 4.27, w: rw - 0.25, h: 1.15, fontSize: 9, paraSpaceAfter: 2 });

  // Gallery strip
  const g = ["Main", "Occasion", "Fit & Size", "Fabric", "Layering", "Matrix"];
  const gw = (rw - 0.25) / 6;
  g.forEach((t, i) => {
    const x = rx + i * (gw + 0.05);
    box(s, x, 5.55, gw, 0.42, i === 0 ? INK : MIST, { round: 0.04, line: LINE, lw: 0.5 });
    txt(s, `${i + 1}\n${t}`, { x, y: 5.55, w: gw, h: 0.42, fontSize: 7, align: "center", valign: "middle", color: i === 0 ? WHITE : INK, bold: true });
  });
  txt(s, "Reuse existing assets — resize, layout, typography. No new photoshoot.", { x: rx, y: 6.0, w: rw, h: 0.22, fontSize: 8, italic: true, color: STONE });

  // equation
  box(s, M, 6.35, CW, 0.62, INK, { round: 0.06 });
  txt(s, [
    { text: "Better Intent Match", options: { bold: true, color: WHITE } }, { text: " (keyword ↔ listing)", options: { color: "C9CBD2", fontSize: 10 } },
    { text: "   +   ", options: { color: PINK, bold: true } },
    { text: "Lower Purchase Uncertainty", options: { bold: true, color: WHITE } }, { text: " (fit · fabric · truth)", options: { color: "C9CBD2", fontSize: 10 } },
    { text: "   =   ", options: { color: PINK, bold: true } },
    { text: "Higher Unit Session %", options: { bold: true, color: PINK } }],
    { x: M + 0.25, y: 6.35, w: CW - 0.5, h: 0.62, fontSize: 12.5, fontFace: HF, align: "center", valign: "middle" });
  foot(s, "Keyword priority and search volume to be validated via Helium 10 (Cerebro/Magnet) and Brand Analytics → Search Query Performance before launch; no volumes shown because none are provided.");
  s.addNotes("Với $1.15/ngày cho PPC, một click không chuyển đổi là một click lãng phí. Vì vậy chúng tôi sửa trang sản phẩm trước: đúng dịp, đúng sự thật, đủ thông tin size. Sau đó mới trả tiền cho traffic.");
}

// ============ SLIDE 3 — HOW ============
{
  const s = pres.addSlide();
  frame(s, 2, "Concentrate a $300 Budget on High-Intent Traffic, Not Reach: Every Click Must Clear a CPC Ceiling",
    "$210 PPC + $45 creative + $45 coupon = $300. No permanent markdown at launch.");

  // LEFT donut
  txt(s, "ONSITE BUDGET · $300", { x: M, y: 1.82, w: 3.6, h: 0.22, fontSize: 9, bold: true, color: STONE, charSpacing: 2 });
  s.addChart(pres.charts.DOUGHNUT, [{ name: "Budget", labels: ["Sponsored Products", "A+ / Gallery", "Coupon"], values: [210, 45, 45] }], {
    x: M, y: 2.02, w: 3.6, h: 2.45, holeSize: 62, chartColors: [INK, "9A9DA5", ROSE],
    showLegend: false, showValue: false, showPercent: false, showTitle: false, dataBorder: { pt: 1.5, color: WHITE } });
  txt(s, [{ text: "$300", options: { bold: true, fontSize: 22, color: INK, breakLine: true } }, { text: "100%", options: { fontSize: 9, color: STONE } }],
    { x: M + 1.1, y: 2.85, w: 1.4, h: 0.8, align: "center", valign: "middle" });
  const leg = [[INK, "Sponsored Products", "$210 · 70%"], ["9A9DA5", "A+ / Gallery adaptation", "$45 · 15%"], [ROSE, "Coupon (all-in cap)", "$45 · 15%"]];
  leg.forEach((l, i) => {
    const y = 4.52 + i * 0.26;
    box(s, M, y + 0.05, 0.14, 0.14, l[0]);
    txt(s, l[1], { x: M + 0.22, y, w: 2.1, h: 0.24, fontSize: 9.5, valign: "middle" });
    txt(s, l[2], { x: M + 2.3, y, w: 1.3, h: 0.24, fontSize: 9.5, bold: true, color: l[0] === "9A9DA5" ? STONE : l[0], align: "right", valign: "middle" });
  });
  txt(s, "External $100 is separate — not in the $300. Track influencer/social traffic with Amazon Attribution.",
    { x: M, y: 5.32, w: 3.6, h: 0.4, fontSize: 8, italic: true, color: STONE });

  // CENTER PPC bar
  const cx = 4.35, cw = 4.55;
  txt(s, "PPC PLAN · $210 ≈ $1.15/DAY", { x: cx, y: 1.82, w: cw, h: 0.22, fontSize: 9, bold: true, color: STONE, charSpacing: 2 });
  s.addChart(pres.charts.BAR, [{ name: "Budget $", labels: ["Auto Discovery (3 ASINs)", "Manual Exact/Phrase – SP2", "Manual Exact/Phrase – SP3", "Manual Exact/Phrase – SP1", "Product Targeting", "Winner Reserve / Seasonal Pulse"], values: [45, 45, 35, 25, 30, 30] }], {
    x: cx - 0.05, y: 2.0, w: cw + 0.1, h: 2.05, barDir: "bar", catAxisOrientation: "maxMin", barGapWidthPct: 45,
    chartColors: [INK, ROSE, CHAR, BLUE, "9A9DA5", "C9CBD2"], varyColors: true,
    showValue: true, dataLabelPosition: "outEnd", dataLabelFormatCode: "$0", dataLabelFontSize: 9, dataLabelColor: INK, dataLabelFontBold: true,
    catAxisLabelFontSize: 8.5, catAxisLabelColor: INK, catAxisLabelFontFace: BF, valAxisHidden: true, valAxisMaxVal: 55,
    valGridLine: { style: "none" }, catGridLine: { style: "none" }, showLegend: false, catAxisLineShow: false });
  txt(s, "45 + 45 + 35 + 25 + 30 + 30 = $210", { x: cx, y: 4.05, w: cw, h: 0.22, fontSize: 9, bold: true, color: ROSE, align: "right" });

  // priority bar
  txt(s, "Initial ASIN priority", { x: cx, y: 4.32, w: 2, h: 0.2, fontSize: 8.5, bold: true, color: STONE });
  const pr = [["SP2 45%", 0.45, ROSE], ["SP3 35%", 0.35, CHAR], ["SP1 20%", 0.20, BLUE]];
  let px = cx;
  pr.forEach(p => { const w = cw * p[1]; box(s, px, 4.55, w, 0.3, p[2]); txt(s, p[0], { x: px, y: 4.55, w, h: 0.3, fontSize: 9, bold: true, color: WHITE, align: "center", valign: "middle" }); px += w; });
  txt(s, "Reallocate after Day 14 on CVR & orders — not a fixed split.", { x: cx, y: 4.88, w: cw, h: 0.2, fontSize: 8.5, italic: true, color: ROSE, bold: true });
  txt(s, [
    { text: "Weekly: ", options: { bold: true } }, { text: "order → harvest to Exact · irrelevant → negative · high spend, 0 sales → pause/cut bid · higher-CVR ASIN → more budget. ", options: {} },
    { text: "✕ No generic heads (“women dress”, “maxi dress”, “women jumpsuit”).", options: { bold: true, color: AMBER } }],
    { x: cx, y: 5.12, w: cw, h: 0.6, fontSize: 8.5 });

  // RIGHT profitability
  const rx = 9.15, rw = W - M - rx;
  txt(s, "UNIT ECONOMICS GUARDRAIL", { x: rx, y: 1.82, w: rw, h: 0.22, fontSize: 9, bold: true, color: STONE, charSpacing: 2 });
  const hd = { bold: true, color: WHITE, fill: { color: INK }, fontSize: 9, align: "right" };
  const R = (a, b, c, o = {}) => [{ text: a, options: Object.assign({ align: "left" }, o) }, { text: b, options: Object.assign({ align: "right" }, o) }, { text: c, options: Object.assign({ align: "right" }, o) }];
  const hi = { bold: true, color: ROSE, fill: { color: BLUSH } };
  s.addTable([
    [{ text: "", options: hd }, { text: "SP1 / SP2", options: hd }, { text: "SP3", options: hd }],
    R("Price", "$51.99", "$25.99"),
    R("– Base cost", "$15.00", "$10.00"),
    R("– Referral fee 17%*", "$8.84", "$4.42"),
    R("= Pre-FBA contribution", "$28.15", "$11.57", { bold: true }),
    R("ACOS guardrail", "≤ 20%", "≤ 15%", { bold: true }),
    R("CPC ceiling @ 9% CVR", "$0.94", "$0.35", hi),
  ], { x: rx, y: 2.08, w: rw, colW: [1.85, 0.99, rw - 2.84], fontFace: BF, fontSize: 9.5, color: INK,
    border: { type: "solid", pt: 0.5, color: LINE }, valign: "middle", margin: 0.06, rowH: 0.3 });
  txt(s, "CPC ceiling = Price × CVR × ACOS target", { x: rx, y: 4.25, w: rw, h: 0.2, fontSize: 8.5, bold: true, color: INK });
  box(s, rx, 4.5, rw, 0.55, BLUSH, { round: 0.05 });
  txt(s, "SP3 affords only ~$0.35/click → exact long-tail only.", { x: rx + 0.12, y: 4.5, w: rw - 0.24, h: 0.55, fontSize: 10, bold: true, color: ROSE, valign: "middle" });
  txt(s, "*Case assumption. Contribution ≠ net profit: excludes FBA, storage, returns, ads, other fees. Not a break-even ACOS (FBA/returns data unavailable). 9% CVR is illustrative — recompute on real baseline.",
    { x: rx, y: 5.12, w: rw, h: 0.62, fontSize: 7.5, italic: true, color: STONE });

  // strip coupon / bundle
  const hw = (CW - 0.25) / 2;
  box(s, M, 5.82, hw, 0.9, MIST, { round: 0.05 });
  txt(s, [{ text: "COUPON  5%  ", options: { bold: true, color: ROSE, fontSize: 10.5 } },
    { text: "SP2 ≈ $2.60/unit · SP3 ≈ $1.30/unit · capped at $45 (≤ ~17 SP2 or ~34 SP3 redemptions before Amazon fees)", options: { bold: true, breakLine: true } },
    { text: "Nov–Dec: SP2 + SP3 Black · Jan–Feb: SP2 + SP3 Pink · SP1 only if high traffic + low CVR. List prices stay $51.99 / $51.99 / $25.99.", options: {} }],
    { x: M + 0.15, y: 5.87, w: hw - 0.3, h: 0.82, fontSize: 9, valign: "middle" });
  box(s, M + hw + 0.25, 5.82, hw, 0.9, MIST, { round: 0.05 });
  txt(s, [{ text: "BUNDLE  ✕ physical  ", options: { bold: true, color: INK, fontSize: 10.5 } },
    { text: "3 items are substitute outfits; size/color depth unknown.", options: { bold: true, breakLine: true } },
    { text: "Use A+ comparison chart + Brand Store cross-sell. Test a Virtual Bundle only if inventory, basket data and economics all support it.", options: {} }],
    { x: M + hw + 0.4, y: 5.87, w: hw - 0.3, h: 0.82, fontSize: 9, valign: "middle" });

  takeaway(s, 6.83, "$300 cannot buy reach — so we buy intent: every click under the CPC ceiling, every coupon targeted.", 0.42, 13);
  s.addNotes("$300 không đủ để mua độ phủ, nên chúng tôi mua ý định mua hàng. Mỗi đô la PPC chỉ được tiêu dưới trần CPC do ACOS guardrail đặt ra. Coupon được dùng có mục tiêu, không dùng để giảm giá đại trà. Tỷ trọng 45/35/20 là ưu tiên ban đầu; các pool dùng chung (Auto, Product Targeting, Reserve) co giãn để đạt tỷ trọng này và được phân bổ lại sau Day 14.");
}

// ============ SLIDE 4 — CONTROL ============
{
  const s = pres.addSlide();
  frame(s, 3, "Run the 182-Day Campaign as a Test–Learn–Scale–Exit System, Steered by Unit Session % and Weeks of Cover");

  const phases = [
    ["① REBUILD", "Oct 1–14", 14, "Lock baseline · titles, bullets, SEO · gallery + A+ · PPC setup"],
    ["② LEARN", "Oct 15–Nov 15", 32, "Search-term mining · negatives · harvest Exact · validate Hero · Day-14 reallocation"],
    ["③ HOLIDAY PUSH", "Nov 16–Dec 31", 46, "SP2 wedding/dinner/brunch · SP3 Black party/date · SP1 travel/cruise · coupon on"],
    ["④ Q1 SHIFT", "Jan 1–Feb 14", 45, "Swap SP3 to Pink · Valentine + travel intent · date night"],
    ["⑤ EXIT", "Feb 15–Mar 31", 45, "Stop discovery · keep winning keywords · push high Weeks-of-Cover SKUs · hit ≥90%"],
  ];
  const pf = ["E4E5E9", "C9CBD2", ROSE, "8C909B", INK];
  const per = (CW - 0.2) / 182;
  let x = M;
  phases.forEach((p, i) => {
    const w = p[2] * per;
    const tc = i === 0 || i === 1 ? INK : WHITE;
    box(s, x, 1.45, w, 0.55, pf[i]);
    txt(s, [{ text: p[0], options: { bold: true, fontSize: i === 0 ? 8.5 : 10.5, color: tc, breakLine: true } }, { text: `${p[1]} · ${p[2]}d`, options: { fontSize: i === 0 ? 6.5 : 8, color: tc } }],
      { x: x + 0.06, y: 1.45, w: w - 0.1, h: 0.55, valign: "middle" });
    txt(s, p[3], { x: x + 0.04, y: 2.05, w: w - 0.1, h: 0.62, fontSize: i === 0 ? 7 : 8.5, color: INK });
    x += w + 0.05;
  });
  txt(s, "14 + 32 + 46 + 45 + 45 = 182 days", { x: W - M - 3, y: 1.22, w: 3, h: 0.2, fontSize: 8, color: STONE, italic: true, align: "right" });

  // depletion chart
  txt(s, "INVENTORY DEPLETION · cumulative units sold (management target)", { x: M, y: 2.78, w: 7, h: 0.22, fontSize: 9, bold: true, color: STONE, charSpacing: 1 });
  const labs = ["Oct 1", "Nov 30", "Dec 31", "Jan 31", "Feb 28", "Mar 31"];
  s.addChart(pres.charts.LINE, [
    { name: "Target sold", labels: labs, values: [0, 28, 50, 72, 88, 99] },
    { name: "90% target (99)", labels: labs, values: [99, 99, 99, 99, 99, 99] },
    { name: "Total stock (110)", labels: labs, values: [110, 110, 110, 110, 110, 110] },
  ], {
    x: M - 0.05, y: 2.98, w: 6.9, h: 2.25, chartColors: [ROSE, INK, "C9CBD2"], lineSize: 2.25, lineDataSymbol: "circle", lineDataSymbolSize: 7,
    lineDash: ["solid", "dash", "sysDot"],
    valAxisMinVal: 0, valAxisMaxVal: 120, valAxisMajorUnit: 30, valAxisLabelFontSize: 8, valAxisLabelColor: STONE,
    catAxisLabelFontSize: 8.5, catAxisLabelColor: INK, valGridLine: { color: "ECECEF", size: 0.5 }, catGridLine: { style: "none" },
    showLegend: true, legendPos: "b", legendFontSize: 8, legendColor: STONE, showValue: false });
  // point labels as text above chart points (series 1 only)
  txt(s, "25% · 28   →   45% · 50   →   65% · 72   →   80% · 88   →   90% · 99", { x: M, y: 5.24, w: 6.8, h: 0.22, fontSize: 9, bold: true, color: ROSE, align: "center" });
  txt(s, "Avg pace 99 ÷ 182 = 0.54 units/day ≈ 3.8/week ≈ 16.5/month · managed by child SKU (size × color), no per-ASIN split assumed",
    { x: M, y: 5.46, w: 6.8, h: 0.22, fontSize: 8, italic: true, color: STONE, align: "center" });

  // KPI cards right
  const kx = 7.55, kw = W - M - kx;
  txt(s, "KPI DASHBOARD", { x: kx, y: 2.78, w: kw, h: 0.22, fontSize: 9, bold: true, color: STONE, charSpacing: 2 });
  const kc = [
    ["NORTH STAR", "×1.5", "Unit Session % (Units ÷ Sessions)", "Illustrative: 6% → 9%, not 56%"],
    ["INVENTORY", "≥90%", "Sell-through", "99 of 110 units by Mar 31"],
    ["SPEND", "≤$300", "Amazon onsite total", "PPC ≤ $210"],
  ];
  const kcw = (kw - 0.3) / 3;
  kc.forEach((k, i) => {
    const xx = kx + i * (kcw + 0.15);
    box(s, xx, 3.02, kcw, 1.6, i === 0 ? BLUSH : MIST, { round: 0.06, line: i === 0 ? ROSE : undefined });
    txt(s, k[0], { x: xx + 0.12, y: 3.08, w: kcw - 0.24, h: 0.22, fontSize: 8.5, bold: true, color: STONE, charSpacing: 1 });
    txt(s, k[1], { x: xx + 0.12, y: 3.3, w: kcw - 0.24, h: 0.55, fontSize: 26, bold: true, color: ROSE, valign: "middle" });
    txt(s, [{ text: k[2], options: { bold: true, breakLine: true } }, { text: k[3], options: { color: STONE, italic: i === 0 } }],
      { x: xx + 0.12, y: 3.88, w: kcw - 0.2, h: 0.72, fontSize: 8.5 });
  });
  box(s, kx, 4.72, kw, 0.96, WHITE, { round: 0.05, line: LINE });
  txt(s, [{ text: "Weekly signals:  ", options: { bold: true } },
    { text: "Sessions · CTR · CVR · Orders · ACOS · Weeks of Cover · Returns", options: { bold: true, color: ROSE, breakLine: true } },
    { text: "Weeks of Cover = Sellable inventory ÷ Avg weekly unit sales", options: { breakLine: true } },
    { text: "Sources: Business Reports (by child ASIN) · Search Term Report · Campaign Manager · FBA Inventory · Returns", options: { color: STONE, italic: true, fontSize: 8 } }],
    { x: kx + 0.12, y: 4.76, w: kw - 0.24, h: 0.9, fontSize: 9, valign: "middle", paraSpaceAfter: 2 });

  // decision rules
  txt(s, "DECISION RULES · IF → THEN", { x: M, y: 5.78, w: 5, h: 0.2, fontSize: 9, bold: true, color: STONE, charSpacing: 2 });
  const rules = [
    [GREEN, "Low traffic + high CVR", "Scale PPC on proven exact terms"],
    [AMBER, "High traffic + low CVR", "Fix PDP: intent, images, price/coupon"],
    ["A33A3A", "High spend + no order", "Negative / pause"],
    ["A33A3A", "Popular size running low", "Cut PPC on that child SKU"],
    [AMBER, "CVR up + returns up", "Fix expectations: size chart, fabric copy"],
  ];
  const rw = (CW - 0.4) / 5;
  rules.forEach((r, i) => {
    const xx = M + i * (rw + 0.1);
    box(s, xx, 6.0, rw, 0.62, MIST, { round: 0.05 });
    s.addShape(pres.shapes.OVAL, { x: xx + 0.1, y: 6.08, w: 0.12, h: 0.12, fill: { color: r[0] }, line: { type: "none" } });
    txt(s, [{ text: r[1], options: { bold: true, breakLine: true } }, { text: "→ " + r[2], options: { color: INK } }],
      { x: xx + 0.28, y: 6.03, w: rw - 0.35, h: 0.56, fontSize: 8.5, valign: "middle" });
  });

  takeaway(s, 6.72, "SIXDO does not need more traffic first — it needs more qualified traffic converting against the right occasion.", 0.46);
  foot(s, "Diagnostics: Low CTR → keyword / main image / title mismatch · High CTR + low CVR → PDP / search-intent mismatch · Overstocked SKU → listing → targeted traffic → coupon last.", 7.2);
  s.addNotes("Kế hoạch này tự điều chỉnh theo dữ liệu: tuần nào cũng đọc cùng một bộ tín hiệu và áp cùng 5 quy tắc. Nhờ vậy một team nhỏ vẫn giữ được đường tiêu thụ 99/110 và mục tiêu CVR ×1.5 trong 182 ngày. Đường tiêu thụ là management target; tồn kho quản lý theo child SKU.");
}

pres.writeFile({ fileName: process.argv[2] || "deck.pptx" }).then(f => console.log("wrote", f));
