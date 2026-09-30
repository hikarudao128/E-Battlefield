// SIXDO × Amazon US – pitch deck (mẫu A · Runway Noir)
// Nội dung: research/SIXDO-ke-hoach-FINAL.md
// Ảnh: đặt vào slides/anh/ theo tên trong IMAGES bên dưới rồi chạy lại:
//   node slides/build-deck.js
const pptxgen = require("pptxgenjs");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const IMG_DIR = path.join(ROOT, "anh");
const OUT = path.join(ROOT, "SIXDO-pitch-deck.pptx");
const TEAM = process.env.TEAM || "[Tên đội]";

// ---------- Palette & type ----------
const INK = "161616", DARK = "111111", WHITE = "FFFFFF", IVORY = "F4F1EA";
const GOLD = "C9A45C", GOLD_D = "8C6D2E", MUTED = "5E5A55", LINE = "D9D4CA";
const D_TEXT = "F4F1EA", D_MUTED = "B8B2A7", D_LINE = "3A352C";
const HEAD = "Cambria", BODY = "Calibri";
const X0 = 0.6, XW = 8.8;

// ---------- Image slots ----------
const IMAGES = {
  logo: "Logo SIXDO (PNG nền trong suốt)",
  cover: "Ảnh chiến dịch / sàn diễn SIXDO (dọc)",
  runway: "Ảnh SIXDO tại NYFW hoặc Shanghai Fashion Week",
  sp1: "SP1 – Floral Woven Long Jumpsuit",
  sp2: "SP2 – Voile Floral Flared Maxi Dress",
  "sp3-den": "SP3 – Raw Flared Dress, màu đen",
  "sp3-hong": "SP3 – Raw Flared Dress, màu hồng",
  "listing-hien-tai": "Ảnh chụp màn hình listing Amazon hiện tại",
  "khach-du-thuyen": "Ảnh bối cảnh du thuyền / resort",
  "khach-tiec": "Ảnh bối cảnh tiệc trong nhà",
};
function findImg(key) {
  for (const ext of [".jpg", ".jpeg", ".png", ".webp"]) {
    const f = path.join(IMG_DIR, key + ext);
    if (fs.existsSync(f)) return f;
  }
  return null;
}
async function cropCover(file, w, h) {
  const buf = await sharp(file).resize(Math.round(w * 220), Math.round(h * 220), { fit: "cover", position: "attention" }).jpeg({ quality: 86 }).toBuffer();
  return "image/jpeg;base64," + buf.toString("base64");
}

let p;
let pageNo = 0;
const t = (s, text, o) => s.addText(text, Object.assign({ fontFace: BODY, fontSize: 11, color: INK, margin: 0, valign: "top", isTextBox: true }, o));
const rect = (s, o) => s.addShape(p.shapes.RECTANGLE, Object.assign({ line: { color: o.fill ? o.fill.color : LINE, width: 0.75 } }, o));
const rrect = (s, o) => s.addShape(p.shapes.ROUNDED_RECTANGLE, Object.assign({ rectRadius: 0.08, line: { color: o.fill.color, width: 0.75 } }, o));

async function imgSlot(s, key, x, y, w, h, dark) {
  const f = findImg(key);
  if (f) { s.addImage({ data: await cropCover(f, w, h), x, y, w, h, altText: IMAGES[key] }); return true; }
  rect(s, { x, y, w, h, fill: { color: dark ? "1E1C19" : IVORY }, line: { color: dark ? D_LINE : LINE, width: 1, dashType: "dash" } });
  t(s, "ẢNH", { x: x + 0.1, y: y + h / 2 - 0.42, w: w - 0.2, h: 0.2, fontSize: 9, bold: true, charSpacing: 3, color: GOLD, align: "center" });
  t(s, IMAGES[key], { x: x + 0.1, y: y + h / 2 - 0.2, w: w - 0.2, h: 0.4, fontSize: 10, color: dark ? D_TEXT : INK, align: "center", valign: "middle" });
  t(s, "anh/" + key + ".jpg", { x: x + 0.1, y: y + h / 2 + 0.22, w: w - 0.2, h: 0.2, fontSize: 8, color: dark ? D_MUTED : MUTED, align: "center" });
  return false;
}

function footer(s, dark) {
  pageNo++;
  t(s, "SIXDO × Amazon US  ·  Kế hoạch bán hàng xuyên mùa", { x: X0, y: 5.28, w: 5, h: 0.2, fontSize: 8, color: dark ? D_MUTED : MUTED });
  t(s, String(pageNo), { x: 8.9, y: 5.28, w: 0.5, h: 0.2, fontSize: 8, color: dark ? D_MUTED : MUTED, align: "right" });
}

function content(kicker, title, sub) {
  const s = p.addSlide();
  s.background = { color: WHITE };
  t(s, kicker, { x: X0, y: 0.32, w: XW, h: 0.22, fontSize: 9, bold: true, color: GOLD_D, charSpacing: 3 });
  t(s, title, { x: X0, y: 0.52, w: XW, h: 0.56, fontFace: HEAD, fontSize: 26, valign: "middle" });
  if (sub) t(s, sub, { x: X0, y: 1.08, w: XW, h: 0.28, fontSize: 12, color: MUTED });
  footer(s);
  return s;
}

function darkDeco(s) {
  s.addShape(p.shapes.OVAL, { x: 6.9, y: -1.4, w: 4.6, h: 4.6, fill: { color: DARK }, line: { color: GOLD, width: 1 } });
  s.addShape(p.shapes.OVAL, { x: 7.6, y: -0.7, w: 3.2, h: 3.2, fill: { color: DARK }, line: { color: D_LINE, width: 1 } });
}

async function logoOrWordmark(s, x, y) {
  const f = findImg("logo");
  if (f) {
    const m = await sharp(f).metadata();
    const h = 0.42, w = Math.min(2.4, h * m.width / m.height);
    const buf = await sharp(f).png().toBuffer();
    s.addImage({ data: "image/png;base64," + buf.toString("base64"), x, y, w, h, altText: "Logo SIXDO" });
  } else {
    t(s, "SIXDO", { x, y, w: 2.4, h: 0.42, fontFace: HEAD, fontSize: 22, color: GOLD, charSpacing: 10, valign: "middle" });
  }
}

function sectionTag(s, x, y, text, dark) {
  t(s, text, { x, y, w: 3, h: 0.2, fontSize: 9, bold: true, charSpacing: 2, color: dark ? GOLD : GOLD_D });
}

// ======================================================================
async function build() {
  p = new pptxgen();
  p.layout = "LAYOUT_16x9";
  p.author = TEAM;
  p.title = "SIXDO × Amazon US – Kế hoạch bán hàng xuyên mùa";

  // ---------- Bìa ----------
  {
    const s = p.addSlide();
    s.background = { color: DARK };
    const hasImg = !!findImg("cover");
    if (hasImg) await imgSlot(s, "cover", 5.6, 0, 4.4, 5.625, true); else darkDeco(s);
    await logoOrWordmark(s, X0, 0.5);
    t(s, "E-BATTLEFIELD 2026  ·  VÒNG 2  ·  ĐỀ ÁN", { x: X0, y: 1.25, w: 4.8, h: 0.25, fontSize: 10, bold: true, color: GOLD, charSpacing: 3 });
    t(s, "Cùng sản phẩm,\nđổi bối cảnh", { x: X0, y: 1.6, w: 4.8, h: 1.45, fontFace: HEAD, fontSize: 38, color: D_TEXT });
    t(s, "Kế hoạch bán 3 sản phẩm Xuân/Hè của SIXDO trên Amazon US trong mùa Thu/Đông, 10/2026 – 03/2027", { x: X0, y: 3.2, w: 4.6, h: 0.65, fontSize: 13, color: D_MUTED });
    t(s, "Đội thi: " + TEAM + "   ·   04/10/2026", { x: X0, y: 4.7, w: 4.8, h: 0.25, fontSize: 11, color: D_TEXT });
    s.addNotes("Mở đầu (15 giây): giới thiệu đội và luận điểm một câu: cùng sản phẩm, đổi bối cảnh, không xả giá.");
  }

  // ---------- Executive Summary ----------
  {
    const s = p.addSlide();
    s.background = { color: WHITE };
    t(s, "TÓM TẮT", { x: X0, y: 0.32, w: XW, h: 0.22, fontSize: 9, bold: true, color: GOLD_D, charSpacing: 3 });
    t(s, "Executive Summary", { x: X0, y: 0.52, w: XW, h: 0.56, fontFace: HEAD, fontSize: 26, valign: "middle" });
    rect(s, { x: X0, y: 1.3, w: XW, h: 1.05, fill: { color: INK } });
    t(s, "LUẬN ĐIỂM", { x: X0 + 0.3, y: 1.45, w: 2, h: 0.2, fontSize: 9, bold: true, charSpacing: 3, color: GOLD });
    t(s, "Khách không mua theo mùa trên lịch mà theo nơi mặc và dịp mặc. SIXDO bán lại 3 sản phẩm Xuân/Hè bằng cách đổi bối cảnh sử dụng, không đổi sản phẩm và không xả giá.", { x: X0 + 0.3, y: 1.7, w: XW - 0.6, h: 0.55, fontSize: 13, color: D_TEXT });
    const tiles = [
      ["PHÂN KHÚC CHÍNH", "Winter Escapers", "Người sống ở vùng lạnh đi du lịch vùng ấm, tháng 11–3"],
      ["HƯỚNG PHỤ", "Tiệc & sự kiện trong nhà", "Tiệc cuối năm, đám cưới; SP3 hồng cho Valentine và Phục sinh"],
      ["ĐỊNH VỊ", "Đổi bối cảnh, giữ giá", "Thông điệp: \"Runway-inspired style for your winter escape\""],
      ["NGÂN SÁCH", "400 USD", "300 trên Amazon (PPC 210) · 100 ngoài Amazon (Instagram, 2 creator)"],
      ["DỰ BÁO", "86 / 110 sản phẩm", "Kịch bản cơ sở (78%); thận trọng 48, mục tiêu 110"],
      ["TÀI CHÍNH", "+1.009 đến +1.580 USD", "Lợi nhuận góp sau marketing, so với +235 đến +533 USD nếu xả giá 50%"],
    ];
    const w = (XW - 0.4) / 3, h = 1.2;
    tiles.forEach(([l, v, d], i) => {
      const x = X0 + (i % 3) * (w + 0.2), y = 2.55 + Math.floor(i / 3) * (h + 0.18);
      rect(s, { x, y, w, h, fill: { color: IVORY } });
      t(s, l, { x: x + 0.2, y: y + 0.14, w: w - 0.4, h: 0.2, fontSize: 9, bold: true, charSpacing: 2, color: GOLD_D });
      t(s, v, { x: x + 0.2, y: y + 0.36, w: w - 0.4, h: 0.32, fontSize: 15, bold: true, valign: "middle" });
      t(s, d, { x: x + 0.2, y: y + 0.72, w: w - 0.4, h: 0.42, fontSize: 10, color: MUTED });
    });
    footer(s);
    s.addNotes("Tóm tắt (40 giây): đọc luận điểm, rồi đi nhanh qua 6 quyết định. Nhấn mạnh: kể cả kịch bản thận trọng vẫn lãi hơn xả giá.");
  }

  // ---------- Mục lục ----------
  {
    const s = p.addSlide();
    s.background = { color: WHITE };
    rect(s, { x: 0, y: 0, w: 3.4, h: 5.625, fill: { color: DARK } });
    t(s, "E-BATTLEFIELD 2026", { x: X0, y: 0.5, w: 2.6, h: 0.22, fontSize: 9, bold: true, charSpacing: 3, color: GOLD });
    t(s, "Nội dung", { x: X0, y: 2.2, w: 2.6, h: 0.8, fontFace: HEAD, fontSize: 36, color: D_TEXT });
    const items = [
      ["01", "Nghiên cứu tổng quan", "Thị trường Thu/Đông, SIXDO, sản phẩm, đối thủ, listing hiện tại"],
      ["02", "Khách hàng mục tiêu & insight", "Phân khúc, chân dung, insight có thể kiểm chứng"],
      ["03", "Kế hoạch triển khai", "Tái định vị, listing & hình ảnh, vận hành Amazon, marketing, tài chính"],
      ["04", "Kết luận & phụ lục", "Rủi ro, KPI, công cụ Amazon, giả định và nguồn"],
    ];
    items.forEach(([n, h1, d], i) => {
      const y = 0.65 + i * 1.12;
      t(s, n, { x: 3.9, y, w: 0.9, h: 0.6, fontFace: HEAD, fontSize: 32, color: GOLD, valign: "middle" });
      t(s, h1, { x: 4.85, y: y + 0.02, w: 4.5, h: 0.32, fontSize: 16, bold: true });
      t(s, d, { x: 4.85, y: y + 0.36, w: 4.5, h: 0.5, fontSize: 11, color: MUTED });
    });
    footer(s);
    s.addNotes("Mục lục (10 giây).");
  }

  // ---------- Divider helper ----------
  const divider = (num, title, items, note) => {
    const s = p.addSlide();
    s.background = { color: DARK };
    darkDeco(s);
    t(s, num, { x: X0, y: 1.0, w: 3, h: 1.3, fontFace: HEAD, fontSize: 88, color: GOLD, valign: "bottom" });
    t(s, title, { x: X0, y: 2.5, w: 7, h: 0.7, fontFace: HEAD, fontSize: 32, color: D_TEXT });
    t(s, items, { x: X0, y: 3.3, w: 7, h: 0.6, fontSize: 13, color: D_MUTED });
    footer(s, true);
    s.addNotes(note);
  };

  // ======================= PHẦN 1 =======================
  divider("01", "Nghiên cứu tổng quan", "Thị trường mùa Thu/Đông  ·  SIXDO  ·  Sản phẩm  ·  Đối thủ  ·  Listing hiện tại", "Chuyển phần (5 giây).");

  // 1.1 Bài toán
  {
    const s = content("01 · BÀI TOÁN", "110 sản phẩm hè, một mùa đông, 400 USD");
    const stats = [["110", "sản phẩm tồn kho, khoảng 5 chiếc mỗi biến thể"], ["400 USD", "ngân sách: 300 trên Amazon, 100 ngoài Amazon"], ["0", "sản phẩm mới, không đổi sản phẩm vật lý"], ["+50%", "mục tiêu tăng tỷ lệ chuyển đổi (tương đối)"]];
    const w = (XW - 0.6) / 4;
    stats.forEach(([v, l], i) => {
      const x = X0 + i * (w + 0.2);
      rect(s, { x, y: 1.35, w, h: 1.25, fill: { color: i === 0 ? INK : IVORY } });
      t(s, v, { x: x + 0.2, y: 1.45, w: w - 0.4, h: 0.6, fontFace: HEAD, fontSize: 30, color: i === 0 ? GOLD : INK, valign: "middle" });
      t(s, l, { x: x + 0.2, y: 2.07, w: w - 0.4, h: 0.45, fontSize: 10, color: i === 0 ? D_MUTED : MUTED });
    });
    t(s, "Vì sao không xả giá?", { x: X0, y: 2.85, w: XW, h: 0.3, fontFace: HEAD, fontSize: 16 });
    const rs = [
      ["Chi phí tồn kho tăng", "Quần áo bị phụ phí tồn kho lâu ngày từ ngày 271; phí lưu kho tháng 10–12 cao hơn."],
      ["Cả ngành đang xả hàng", "44% nhà bán lẻ dư hàng cuối mùa; giảm giá ảnh hưởng trung bình 40% hàng hóa."],
      ["Xả sâu làm hỏng định vị", "Đi ngược DNA \"Accessible Haute Couture\" và giá trị Brand Consistency."],
      ["Hàng còn lại vẫn có đường ra", "Bán tiếp đúng mùa Xuân/Hè 2027, không cần xả trước tháng 3."],
    ];
    rs.forEach(([h1, d], i) => {
      const x = X0 + (i % 2) * 4.5, y = 3.3 + Math.floor(i / 2) * 0.9;
      t(s, String(i + 1).padStart(2, "0"), { x, y, w: 0.45, h: 0.35, fontFace: HEAD, fontSize: 16, color: GOLD_D });
      t(s, h1, { x: x + 0.5, y, w: 3.75, h: 0.28, fontSize: 12, bold: true });
      t(s, d, { x: x + 0.5, y: y + 0.29, w: 3.75, h: 0.5, fontSize: 10.5, color: MUTED });
    });
    s.addNotes("Bài toán (30 giây). Ràng buộc của đề và 4 lý do không xả giá. Tồn kho theo SKU là giả định, chờ BTC xác nhận.");
  }

  // 1.2 Thị trường
  {
    const s = content("01 · THỊ TRƯỜNG", "Q4 là mùa mua sắm lớn nhất của thời trang");
    rect(s, { x: X0, y: 1.35, w: 3.5, h: 2.75, fill: { color: INK } });
    t(s, "24,1 tỷ USD", { x: X0 + 0.3, y: 1.6, w: 3, h: 0.8, fontFace: HEAD, fontSize: 36, color: GOLD, valign: "middle" });
    t(s, "doanh thu Q4 ngành Quần áo, Giày & Trang sức trên Amazon, khoảng 30% doanh thu cả năm", { x: X0 + 0.3, y: 2.45, w: 2.9, h: 0.75, fontSize: 12, color: D_TEXT });
    t(s, "Dự báo dựa trên dữ liệu 2024", { x: X0 + 0.3, y: 3.65, w: 2.9, h: 0.25, fontSize: 9, color: D_MUTED });
    const st = [
      ["10,7 tỷ USD", "Thời trang nữ trên Amazon trong Q4; tháng 10 và 12 là hai tháng cao nhất"],
      ["257,8 tỷ USD", "Mua sắm online mùa lễ 2025 (+6,8%), may mặc trong top 3; giảm giá đỉnh khoảng 25% (Adobe)"],
      ["45 USD", "Giá trị đơn trung bình Prime Big Deal Days 10/2025; 90% đơn dưới 100 USD"],
    ];
    st.forEach(([v, d], i) => {
      const y = 1.35 + i * 0.95;
      t(s, v, { x: 4.4, y, w: 1.9, h: 0.5, fontFace: HEAD, fontSize: 20, color: INK, valign: "middle" });
      t(s, d, { x: 6.35, y: y + 0.03, w: 3.05, h: 0.8, fontSize: 10.5, color: MUTED });
    });
    rect(s, { x: X0, y: 4.3, w: XW, h: 0.8, fill: { color: IVORY } });
    t(s, "Hệ quả cho SIXDO", { x: X0 + 0.25, y: 4.4, w: 2, h: 0.25, fontSize: 11, bold: true, color: GOLD_D });
    t(s, "Tầm giá 26–52 USD nằm đúng vùng khách mua nhiều nhất, và cũng là vùng cạnh tranh gay gắt nhất. Q4 lớn không có nghĩa váy hè tự bán được: phải đổi bối cảnh.", { x: X0 + 0.25, y: 4.65, w: XW - 0.5, h: 0.42, fontSize: 11 });
    s.addNotes("Thị trường (30 giây). Lưu ý trung thực: số Q4 không chứng minh váy hè bán tốt trong Q4, chỉ cho thấy lượng người mua đông nhất rơi vào thời gian chiến dịch.");
  }

  // 1.3 Hành vi tìm kiếm
  {
    const s = content("01 · HÀNH VI TÌM KIẾM", "Khách tìm theo chuyến đi và dịp, không theo lịch");
    const groups = [
      ["THEO CHUYẾN ĐI", "cruise outfits · resort wear · vacation jumpsuit", "SP1, SP2"],
      ["THEO DỊP", "holiday party dress · black party dress · valentines dress · easter dress", "SP3 đen, SP3 hồng"],
      ["THEO MÙA", "fall maxi dress · long sleeve maxi dress", "SP2"],
    ];
    groups.forEach(([l, k, sku], i) => {
      const y = 1.35 + i * 1.22;
      rect(s, { x: X0, y, w: 5.2, h: 1.07, fill: { color: IVORY } });
      t(s, l, { x: X0 + 0.25, y: y + 0.14, w: 3, h: 0.2, fontSize: 9, bold: true, charSpacing: 2, color: GOLD_D });
      t(s, sku, { x: X0 + 3.3, y: y + 0.12, w: 1.65, h: 0.22, fontSize: 10, bold: true, align: "right" });
      t(s, k, { x: X0 + 0.25, y: y + 0.42, w: 4.7, h: 0.55, fontSize: 12 });
    });
    const x = 6.1, w = 3.3;
    rect(s, { x, y: 1.35, w, h: 3.73, fill: { color: INK } });
    t(s, "\"resort wear dresses\" trên Google Trends", { x: x + 0.25, y: 1.5, w: w - 0.5, h: 0.4, fontSize: 10, color: D_MUTED });
    [["89", "tháng 11/2025"], ["86", "tháng 1/2025"]].forEach(([v, l], i) => {
      const xx = x + 0.25 + i * 1.45;
      t(s, v, { x: xx, y: 1.9, w: 1.3, h: 0.65, fontFace: HEAD, fontSize: 36, color: GOLD, valign: "middle" });
      t(s, l, { x: xx, y: 2.55, w: 1.3, h: 0.25, fontSize: 10, color: D_TEXT });
    });
    t(s, "Chỉ số đạt đỉnh vào mùa đông, giảm vào tháng 5–9.", { x: x + 0.25, y: 2.9, w: w - 0.5, h: 0.4, fontSize: 10.5, color: D_TEXT });
    t(s, "21,7 triệu", { x: x + 0.25, y: 3.45, w: w - 0.5, h: 0.5, fontFace: HEAD, fontSize: 26, color: GOLD, valign: "middle" });
    t(s, "hành khách du thuyền Bắc Mỹ năm 2026; cao điểm Caribbean tháng 11–3. BST Resort/Cruise cũng giao hàng tháng 11.", { x: x + 0.25, y: 3.97, w: w - 0.5, h: 0.95, fontSize: 10.5, color: D_TEXT });
    s.addNotes("Hành vi tìm kiếm (30 giây). Ba nhóm từ khóa gắn với từng SKU. Số liệu lượng tìm kiếm Amazon (Helium 10) bổ sung vào đây nếu có.");
  }

  // 1.4 SIXDO
  {
    const s = content("01 · THƯƠNG HIỆU", "SIXDO: tiêu chuẩn sàn diễn cho phụ nữ thật");
    await imgSlot(s, "runway", X0, 1.35, 3.3, 3.75);
    const x = 4.3, w = 5.1;
    t(s, "\"Runway standards. Real women. Built to scale.\"", { x, y: 1.35, w, h: 0.4, fontSize: 15, italic: true, color: INK });
    const facts = [
      ["Nhà thiết kế", "Đỗ Mạnh Cường; thương hiệu ra mắt 10/2020"],
      ["Định vị", "\"Accessible Haute Couture\": thiết kế sàn diễn ở mức giá tiếp cận được"],
      ["Trên Amazon", "Đã có Brand Store; 3 sản phẩm của đề bài đang bán tại Amazon US"],
    ];
    facts.forEach(([l, d], i) => {
      const y = 1.95 + i * 0.5;
      t(s, l, { x, y, w: 1.3, h: 0.4, fontSize: 11, bold: true, color: GOLD_D });
      t(s, d, { x: x + 1.35, y, w: w - 1.35, h: 0.45, fontSize: 11 });
    });
    t(s, "Hành trình quốc tế", { x, y: 3.55, w, h: 0.25, fontSize: 11, bold: true });
    const tl = [["2023", "Sydney"], ["SS24", "New York\nFashion Week"], ["SS25", "Shanghai\nFashion Week"], ["2025", "Rodeo Drive,\nSouth Coast Plaza"]];
    const step = w / tl.length;
    s.addShape(p.shapes.LINE, { x: x + 0.08, y: 4.02, w: step * 3, h: 0, line: { color: GOLD, width: 1 } });
    tl.forEach(([yr, place], i) => {
      const xx = x + i * step;
      s.addShape(p.shapes.OVAL, { x: xx, y: 3.94, w: 0.16, h: 0.16, fill: { color: i === 3 ? GOLD : INK }, line: { color: GOLD, width: 1 } });
      t(s, yr, { x: xx, y: 4.2, w: step - 0.1, h: 0.25, fontSize: 11, bold: true });
      t(s, place, { x: xx, y: 4.45, w: step - 0.1, h: 0.5, fontSize: 10, color: MUTED });
    });
    s.addNotes("Thương hiệu (30 giây). Uy tín sàn diễn là của thương hiệu, không khẳng định chính 3 mẫu này từng lên sàn diễn.");
  }

  // 1.5 Ba sản phẩm
  {
    const s = content("01 · SẢN PHẨM", "3 sản phẩm, 5 màu, 110 chiếc cần bán");
    const cols = [
      ["sp1", "SP1 · Jumpsuit", "Cotton · xanh trắng · S–XL", "51,99 USD · tồn 20", "+ Họa tiết resort; danh mục Jumpsuits ít đối thủ", "− Một màu, không tay, khó chọn size"],
      ["sp2", "SP2 · Maxi tay dài", "Voan · xanh, vàng · S–XL", "51,99 USD · tồn 40", "+ Tay dài, màu vàng hợp bối cảnh mùa thu", "− Voan mỏng; đắt hơn đối thủ ~70%"],
      ["sp3-den", "SP3 · Đen", "Polyester · S–XXL", "25,99 USD · tồn 25", "+ Màu đen mặc tiệc", "− Nằm trong vùng chiến giá"],
      ["sp3-hong", "SP3 · Hồng", "Polyester · S–XXL", "25,99 USD · tồn 25", "+ Hồng hợp Valentine, Phục sinh", "− Phụ thuộc vào dịp"],
    ];
    const w = (XW - 0.6) / 4;
    for (let i = 0; i < cols.length; i++) {
      const [key, n, m, pr, plus, minus] = cols[i];
      const x = X0 + i * (w + 0.2);
      await imgSlot(s, key, x, 1.3, w, 1.55);
      t(s, n, { x, y: 2.95, w, h: 0.28, fontSize: 13, bold: true });
      t(s, m, { x, y: 3.22, w, h: 0.22, fontSize: 9.5, color: MUTED });
      t(s, pr, { x, y: 3.44, w, h: 0.24, fontSize: 10.5, bold: true, color: GOLD_D });
      t(s, plus, { x, y: 3.7, w, h: 0.4, fontSize: 9.5 });
      t(s, minus, { x, y: 4.1, w, h: 0.4, fontSize: 9.5, color: MUTED });
    }
    rect(s, { x: X0, y: 4.58, w: XW, h: 0.55, fill: { color: INK } });
    t(s, [
      { text: "Lợi nhuận góp mỗi sản phẩm: ", options: { bold: true, color: GOLD } },
      { text: "SP1, SP2 28–37 USD; SP3 12–16 USD (gấp ~2,3 lần) → ưu tiên ngân sách quảng cáo cho SP1, SP2.", options: { color: D_TEXT } },
    ], { x: X0 + 0.25, y: 4.58, w: XW - 0.5, h: 0.55, fontSize: 11, valign: "middle" });
    s.addNotes("Sản phẩm (35 giây). Tồn kho theo SKU là giả định (chia đều theo biến thể). Lợi nhuận góp tính theo 2 cách hiểu base cost (đã/chưa gồm phí 17%).");
  }

  // 1.6 Đối thủ
  {
    const s = content("01 · ĐỐI THỦ", "Đối thủ rẻ hơn: SIXDO phải thắng bằng giá trị");
    const hdr = (x) => ({ text: x, options: { bold: true, color: GOLD, fill: { color: INK } } });
    const rows = [
      [hdr("SIXDO"), hdr("Đối thủ trực tiếp"), hdr("Giá"), hdr("Cách định vị trong tiêu đề")],
      ["SP2 · 51,99 USD", "PRETTYGARDEN Long Sleeve Floral Maxi", "~30 USD", "\"Fall … Wedding Guest, Cocktail, Travel Vacation\""],
      ["SP3 · 25,99 USD", "ZESICA Spaghetti Strap Ruffle Mini, Black", "tương đương", "\"2026 Summer … Party\""],
      ["SP1 · 51,99 USD", "ANRABESS, PRETTYGARDEN (Best Sellers Jumpsuits)", "thấp hơn", "Wide leg floral jumpsuit"],
    ];
    s.addTable(rows, { x: X0, y: 1.35, w: 6.0, colW: [1.25, 2.0, 0.85, 1.9], fontFace: BODY, fontSize: 10, color: INK, border: { type: "solid", pt: 0.5, color: LINE }, rowH: 0.42, valign: "middle", margin: 0.06 });
    rect(s, { x: 6.85, y: 1.35, w: 2.55, h: 1.9, fill: { color: INK } });
    t(s, "+70%", { x: 7.05, y: 1.45, w: 2.2, h: 0.75, fontFace: HEAD, fontSize: 40, color: GOLD, valign: "middle" });
    t(s, "SP2 đắt hơn PRETTYGARDEN (51,99 so với ~30 USD). Đây là rủi ro chuyển đổi lớn nhất.", { x: 7.05, y: 2.2, w: 2.2, h: 0.95, fontSize: 10.5, color: D_TEXT });
    t(s, "Các thương hiệu xử lý hàng trái mùa thế nào", { x: X0, y: 3.45, w: XW, h: 0.3, fontFace: HEAD, fontSize: 15 });
    const lessons = [
      ["ÁP DỤNG", "BST Resort/Cruise tháng 11", "Chanel, Zimmermann → \"Winter Escape Edit\""],
      ["ÁP DỤNG", "Một sản phẩm, nhiều dịp", "PRETTYGARDEN → tiêu đề nhiều dịp"],
      ["ÁP DỤNG", "Giữ họa tiết, đổi cách phối", "FARM Rio → ảnh phối lớp"],
      ["ÁP DỤNG", "Giảm giá ngắn", "Lilly Pulitzer → coupon 10%"],
      ["TRÁNH", "Giảm giá sâu", "Elise, IVY moda"],
    ];
    const w = (XW - 0.6) / 5;
    lessons.forEach(([tag, h1, d], i) => {
      const x = X0 + i * (w + 0.15), avoid = tag === "TRÁNH";
      rect(s, { x, y: 3.85, w, h: 1.25, fill: { color: avoid ? INK : IVORY } });
      t(s, tag, { x: x + 0.15, y: 3.95, w: w - 0.3, h: 0.2, fontSize: 8.5, bold: true, charSpacing: 2, color: avoid ? GOLD : GOLD_D });
      t(s, h1, { x: x + 0.15, y: 4.17, w: w - 0.3, h: 0.42, fontSize: 10.5, bold: true, color: avoid ? D_TEXT : INK });
      t(s, d, { x: x + 0.15, y: 4.6, w: w - 0.3, h: 0.45, fontSize: 9, color: avoid ? D_MUTED : MUTED });
    });
    s.addNotes("Đối thủ (35 giây). Khác biệt của SIXDO: thương hiệu từng trình diễn tại NYFW, thiết kế tay bồng/cổ buộc dây, tầng váy. Phải chứng minh vì sao đáng trả thêm ~22 USD: ảnh cận chất liệu + câu chuyện thương hiệu.");
  }

  // 1.7 Listing hiện tại
  {
    const s = content("01 · LISTING HIỆN TẠI", "Listing hiện tại vẫn đang nói về mùa hè");
    await imgSlot(s, "listing-hien-tai", X0, 1.35, 4.3, 3.75);
    const x = 5.2, w = 4.2;
    const issues = [
      ["Năm cũ và chữ \"Summer\" trong tiêu đề", "\"Spring and Summer 2025\", \"2026 … Beach and Summer Events\" khiến listing lệch khỏi tìm kiếm mùa đông."],
      ["Mã màu nội bộ \"G-\"", "Khách không hiểu; nên đổi thành Blue, Mustard Yellow, Black, Blush Pink."],
      ["Tên \"Raw\" dễ bị hiểu là \"thô\"", "Không nói gì về kiểu dáng xếp tầng, xòe."],
      ["SP3 định vị \"Work Events\"", "Chưa trúng dịp tiệc cuối năm, Valentine, Phục sinh."],
    ];
    issues.forEach(([h1, d], i) => {
      const y = 1.35 + i * 0.95;
      s.addShape(p.shapes.OVAL, { x, y, w: 0.36, h: 0.36, fill: { color: INK }, line: { color: INK } });
      t(s, String(i + 1), { x, y, w: 0.36, h: 0.36, fontSize: 11, bold: true, color: GOLD, align: "center", valign: "middle" });
      t(s, h1, { x: x + 0.5, y: y + 0.02, w: w - 0.5, h: 0.3, fontSize: 12, bold: true });
      t(s, d, { x: x + 0.5, y: y + 0.33, w: w - 0.5, h: 0.55, fontSize: 10, color: MUTED });
    });
    s.addNotes("Listing hiện tại (30 giây). Chỉ ra 4 lỗi trên ảnh chụp màn hình thật. Nhớ đối chiếu ASIN đề bài với listing quan sát được trước khi nộp.");
  }

  // ======================= PHẦN 2 =======================
  divider("02", "Khách hàng mục tiêu & insight", "Phân khúc theo nhu cầu  ·  Chân dung  ·  Insight có thể kiểm chứng", "Chuyển phần (5 giây).");

  // 2.1 Phân khúc
  {
    const s = content("02 · PHÂN KHÚC", "Phân khúc theo nơi mặc và dịp mặc", "Hai trục: nơi mặc có ấm không, và mặc vào dịp gì");
    const big = [
      ["CHÍNH", "Winter Escapers", "Người sống ở vùng lạnh đi du thuyền, nghỉ dưỡng vùng ấm tháng 11–3", "21,7 triệu hành khách du thuyền; 44% người đi du lịch mùa đông tìm nơi ấm (Allianz)", "SP1, SP2", true],
      ["PHỤ", "Tiệc & sự kiện trong nhà", "Tiệc cuối năm, đám cưới; cần váy chỉn chu đúng dress code", "Tiệc cuối năm tháng 11–12; 17% đám cưới tổ chức ở nơi xa (The Knot)", "SP3 đen, SP2", false],
    ];
    big.forEach(([tag, n, d, ev, sku, dark], i) => {
      const x = X0 + i * 2.95, w = 2.75, y = 1.55, h = 3.55;
      rect(s, { x, y, w, h, fill: { color: dark ? INK : IVORY } });
      t(s, tag, { x: x + 0.2, y: y + 0.18, w: 1.5, h: 0.2, fontSize: 9, bold: true, charSpacing: 3, color: dark ? GOLD : GOLD_D });
      t(s, sku, { x: x + 1.2, y: y + 0.16, w: w - 1.4, h: 0.22, fontSize: 10, bold: true, align: "right", color: dark ? D_TEXT : INK });
      t(s, n, { x: x + 0.2, y: y + 0.5, w: w - 0.4, h: 0.75, fontFace: HEAD, fontSize: 20, color: dark ? D_TEXT : INK });
      t(s, d, { x: x + 0.2, y: y + 1.3, w: w - 0.4, h: 0.8, fontSize: 11, color: dark ? D_TEXT : INK });
      t(s, ev, { x: x + 0.2, y: y + 2.3, w: w - 0.4, h: 1.1, fontSize: 10, color: dark ? D_MUTED : MUTED });
    });
    const x = 6.5, w = 2.9;
    t(s, "Cơ hội bổ sung", { x, y: 1.55, w, h: 0.3, fontSize: 12, bold: true });
    const extra = [
      ["Valentine & Phục sinh", "Kênh bán cho SP3 hồng (từ khóa + coupon), không cần phân khúc riêng"],
      ["Tết của người Mỹ gốc Việt", "Chỉ chạy nếu 15/01 SP3 hồng còn ≥ 10 chiếc và có creator gốc Việt"],
      ["Sun Belt", "Chỉ là góc từ khóa \"fall maxi\" cho SP2"],
      ["Văn phòng, mua sớm", "Chưa đủ bằng chứng / gộp vào Winter Escapers"],
    ];
    extra.forEach(([h1, d], i) => {
      const y = 1.95 + i * 0.8;
      t(s, h1, { x, y, w, h: 0.25, fontSize: 11, bold: true, color: GOLD_D });
      t(s, d, { x, y: y + 0.26, w, h: 0.5, fontSize: 9.5, color: MUTED });
    });
    s.addNotes("Phân khúc (35 giây). Chọn 1 chính, 1 phụ; các nhóm còn lại chỉ làm ở mức từ khóa hoặc có điều kiện, để không dàn trải 400 USD.");
  }

  // 2.2 Chân dung
  {
    const s = content("02 · CHÂN DUNG", "Hai chân dung khách hàng ưu tiên");
    const personas = [
      ["khach-du-thuyen", "Winter Escapers (chính)", [["Là ai", "Phụ nữ 28–45 tuổi ở Đông Bắc và Trung Tây Mỹ"], ["Đi đâu", "Du thuyền, nghỉ dưỡng Caribbean, Mexico, Florida"], ["Khi nào mua", "2–6 tuần trước chuyến đi"], ["Mua gì", "SP1, SP2 · từ khóa theo chuyến đi"], ["Tiếp cận", "PPC; Instagram nhắm các bang lạnh; creator du lịch"]], true],
      ["khach-tiec", "Tiệc & sự kiện (phụ)", [["Là ai", "Phụ nữ 25–45 tuổi đi tiệc cuối năm, đám cưới"], ["Nhu cầu", "Trông chỉn chu, đúng dress code"], ["Khi nào mua", "1–3 tuần trước sự kiện"], ["Mua gì", "SP3 đen, SP2 · từ khóa theo dịp"], ["Tiếp cận", "PPC; coupon Holiday Party"]], false],
    ];
    for (let i = 0; i < personas.length; i++) {
      const [key, n, rows, dark] = personas[i];
      const x = X0 + i * 4.5, w = 4.3;
      await imgSlot(s, key, x, 1.35, 1.35, 3.75, dark);
      t(s, n, { x: x + 1.55, y: 1.35, w: w - 1.55, h: 0.4, fontFace: HEAD, fontSize: 17 });
      rows.forEach(([l, d], j) => {
        const y = 1.9 + j * 0.64;
        t(s, l.toUpperCase(), { x: x + 1.55, y, w: w - 1.55, h: 0.2, fontSize: 8.5, bold: true, charSpacing: 2, color: GOLD_D });
        t(s, d, { x: x + 1.55, y: y + 0.2, w: w - 1.55, h: 0.42, fontSize: 10.5 });
      });
    }
    s.addNotes("Chân dung (30 giây).");
  }

  // 2.3 Insight
  {
    const s = content("02 · INSIGHT", "Insight: trông đặc biệt, giá hợp lý, giao kịp");
    rect(s, { x: X0, y: 1.3, w: XW, h: 0.95, fill: { color: INK } });
    t(s, "\"Mua đồ cho chuyến đi thì dễ. Khó là tìm được món trông đặc biệt trong ảnh mà giá vẫn hợp lý, và giao kịp trước ngày đi.\"", { x: X0 + 0.3, y: 1.3, w: XW - 0.6, h: 0.95, fontSize: 14, italic: true, color: D_TEXT, valign: "middle" });
    const ns = [
      ["N1", "Có nhu cầu mua đồ hè cho chuyến đi mùa đông", "Cruise Critic, Ask MetaFilter; lượng tìm \"resort wear\" đạt đỉnh tháng 11 và 1. Lưu ý: nhu cầu có thật nhưng không khan hiếm hàng.", "CÓ BẰNG CHỨNG"],
      ["N2", "Khách coi trọng vẻ khác biệt, không chỉ giá", "Mã hóa 200 đánh giá mùa 11–3 của 10 mẫu bán chạy + 5 phỏng vấn. Ủng hộ nếu \"chọn vì vẻ ngoài\" ≥ \"chọn vì giá\".", "ĐANG KIỂM CHỨNG"],
      ["N3", "Giao kịp trước chuyến đi là quan trọng", "Tỷ lệ đánh giá nhắc \"arrived in time\", \"before my trip\", \"late\".", "ĐANG KIỂM CHỨNG"],
    ];
    const w = (XW - 0.4) / 3;
    ns.forEach(([n, h1, d, st], i) => {
      const x = X0 + i * (w + 0.2);
      rect(s, { x, y: 2.45, w, h: 2.0, fill: { color: IVORY } });
      t(s, n, { x: x + 0.2, y: 2.57, w: 0.6, h: 0.35, fontFace: HEAD, fontSize: 18, color: GOLD_D });
      t(s, st, { x: x + 0.8, y: 2.62, w: w - 1.0, h: 0.22, fontSize: 8, bold: true, charSpacing: 1, align: "right", color: i === 0 ? GOLD_D : MUTED });
      t(s, h1, { x: x + 0.2, y: 2.95, w: w - 0.4, h: 0.45, fontSize: 11, bold: true });
      t(s, d, { x: x + 0.2, y: 3.42, w: w - 0.4, h: 0.98, fontSize: 9.5, color: MUTED });
    });
    t(s, [
      { text: "Nếu N2 bị phản bác ", options: { bold: true } },
      { text: "(khách chọn vì giá nhiều gấp đôi): chuyển thông điệp từ \"khác biệt\" sang \"chất liệu và giá trị\".   ", options: { color: MUTED } },
      { text: "Insight phụ: ", options: { bold: true } },
      { text: "\"Váy chỉn chu, đúng dress code, với giá không tiếc dù chỉ mặc vài lần.\"", options: { color: MUTED, italic: true } },
    ], { x: X0, y: 4.58, w: XW, h: 0.55, fontSize: 10 });
    s.addNotes("Insight (40 giây). Insight được tách thành 3 nhận định kiểm chứng được. Cập nhật kết quả mã hóa đánh giá (tỷ lệ chọn vì vẻ ngoài / vì giá) vào đây khi có.");
  }

  // ======================= PHẦN 3 =======================
  divider("03", "Kế hoạch triển khai", "Tái định vị  ·  Listing & hình ảnh  ·  Vận hành Amazon  ·  Marketing  ·  Tài chính  ·  KPI", "Chuyển phần (5 giây).");

  // 3.1 Định vị
  {
    const s = content("03 · TÁI ĐỊNH VỊ", "Cùng sản phẩm, đổi bối cảnh", "Thông điệp chính: \"Runway-inspired style for your winter escape.\"");
    const cols = [
      ["sp1", "The Escape Jumpsuit", "Boong du thuyền, bữa tối ở resort", "Cardigan lửng; trench coat ở sân bay"],
      ["sp2", "The Vacation-to-Fall Maxi", "Resort; họp mặt mùa thu", "Áo khoác denim, boot da lộn"],
      ["sp3-den", "The Party Dress", "Tiệc trong nhà ánh đèn vàng", "Blazer khoác vai, tất mỏng"],
      ["sp3-hong", "The Pink Edit", "Brunch mùa xuân, hẹn hò Valentine, Phục sinh", "Cardigan mỏng, giày bệt"],
    ];
    const w = (XW - 0.6) / 4;
    for (let i = 0; i < cols.length; i++) {
      const [key, n, ctx, sty] = cols[i];
      const x = X0 + i * (w + 0.2);
      await imgSlot(s, key, x, 1.5, w, 1.45);
      t(s, n, { x, y: 3.03, w, h: 0.3, fontFace: HEAD, fontSize: 13 });
      t(s, "BỐI CẢNH", { x, y: 3.36, w, h: 0.18, fontSize: 8, bold: true, charSpacing: 2, color: GOLD_D });
      t(s, ctx, { x, y: 3.53, w, h: 0.38, fontSize: 9.5 });
      t(s, "STYLING", { x, y: 3.92, w, h: 0.18, fontSize: 8, bold: true, charSpacing: 2, color: GOLD_D });
      t(s, sty, { x, y: 4.09, w, h: 0.38, fontSize: 9.5 });
    }
    rect(s, { x: X0, y: 4.58, w: XW, h: 0.55, fill: { color: INK } });
    t(s, [
      { text: "Rào chắn thương hiệu:  ", options: { bold: true, color: GOLD } },
      { text: "không dùng \"haute couture\" hay \"clearance\" với khách · không giảm quá 15% · không để ảnh AI sai họa tiết, độ dài · không hứa size, giao hàng khi chưa có dữ liệu", options: { color: D_TEXT } },
    ], { x: X0 + 0.25, y: 4.58, w: XW - 0.5, h: 0.55, fontSize: 10, valign: "middle" });
    s.addNotes("Tái định vị (40 giây). Thay nội dung, hình ảnh, styling, thông điệp; không thay sản phẩm. Uy tín runway luôn diễn đạt là \"from a brand shown at New York Fashion Week\".");
  }

  // 3.2 Listing trước / sau
  {
    const s = content("03 · LISTING & NỘI DUNG", "Listing mới: nói về nơi mặc và dịp mặc");
    const H = (x) => ({ text: x, options: { bold: true, color: GOLD, fill: { color: INK } } });
    const rows = [
      [H(""), H("Trước (tiêu đề quan sát được)"), H("Sau (đề xuất)")],
      [{ text: "SP1", options: { bold: true } }, "SIXDO G White Blue Floral Woven Long Jumpsuit for Women 2026 … Beach and Summer Events", "SIXDO Women's Blue Floral Cotton Halter Jumpsuit – Wide Leg Resort Wear for Cruise, Tropical Vacation & Beach Dinner"],
      [{ text: "SP2", options: { bold: true } }, "SIXDO Voile Floral Flared Maxi Dress … Garden Party and Vacation", "SIXDO Women's Long Sleeve Floral Maxi Dress – Tiered Tie-Neck Flowy Dress for Vacation, Fall Events & Wedding Guest"],
      [{ text: "SP3", options: { bold: true } }, "SIXDO Raw Flared Dress … Sleek and Versatile for Work Events and Formal Celebrations", "SIXDO Women's Spaghetti Strap Tiered Fit and Flare Dress – Party Dress for Holiday, Cocktail, Valentine's & Easter"],
    ];
    s.addTable(rows, { x: X0, y: 1.3, w: XW, colW: [0.55, 3.75, 4.5], fontFace: BODY, fontSize: 9.5, color: INK, border: { type: "solid", pt: 0.5, color: LINE }, rowH: [0.32, 0.58, 0.58, 0.58], valign: "middle", margin: 0.07 });
    const tiles = [
      ["TIÊU ĐỀ & BULLET", "Bỏ năm cũ, chữ \"Summer\", mã \"G-\"; tên màu Blue, Mustard Yellow, Black, Blush Pink. Bullet chỉ dùng thông tin kiểm chứng được (lót, số đo inch)."],
      ["A+ CONTENT (0 USD)", "Brand Story · \"Một bộ, ba dịp\" · chất liệu cận cảnh · bảng size bằng inch · so sánh 3 sản phẩm."],
      ["BRAND STORE", "3 trang theo dịp: Winter Escape (SP1, SP2) · Holiday Party (SP3 đen, SP2) · Pink Edit (SP3 hồng, tháng 2–3)."],
    ];
    const w = (XW - 0.4) / 3;
    tiles.forEach(([l, d], i) => {
      const x = X0 + i * (w + 0.2);
      rect(s, { x, y: 3.65, w, h: 1.45, fill: { color: IVORY } });
      t(s, l, { x: x + 0.2, y: 3.78, w: w - 0.4, h: 0.2, fontSize: 9, bold: true, charSpacing: 2, color: GOLD_D });
      t(s, d, { x: x + 0.2, y: 4.03, w: w - 0.4, h: 1.0, fontSize: 10 });
    });
    s.addNotes("Listing (40 giây). Kiểm tra hiệu quả: so sánh CTR và Unit Session % 14 ngày trước/sau khi đổi ảnh chính; khảo sát 20–30 người chọn giữa 2 ảnh chính trước khi đăng.");
  }

  // 3.3 Bộ 9 ảnh
  {
    const s = content("03 · HÌNH ẢNH", "Bộ 9 ảnh cho mỗi sản phẩm");
    const tiles = [
      ["Ảnh chính nền trắng", "THẬT"], ["Bối cảnh chính", "AI"], ["Phối lớp cho mùa lạnh", "AI"],
      ["Một bộ, ba dịp", "AI"], ["Chi tiết thiết kế", "THẬT"], ["Chất liệu cận cảnh", "THẬT"],
      ["Bảng size bằng inch", "INFOGRAPHIC"], ["Uy tín thương hiệu (NYFW)", "THẬT"], ["Gợi ý mua kèm", "INFOGRAPHIC"],
    ];
    const tw = 1.72, th = 1.17, g = 0.1;
    tiles.forEach(([n, tag], i) => {
      const x = X0 + (i % 3) * (tw + g), y = 1.35 + Math.floor(i / 3) * (th + g), real = tag === "THẬT";
      rect(s, { x, y, w: tw, h: th, fill: { color: real ? INK : IVORY } });
      t(s, String(i + 1), { x: x + 0.12, y: y + 0.08, w: 0.5, h: 0.4, fontFace: HEAD, fontSize: 20, color: GOLD });
      t(s, tag, { x: x + 0.6, y: y + 0.12, w: tw - 0.72, h: 0.18, fontSize: 7.5, bold: true, charSpacing: 1, align: "right", color: real ? GOLD : GOLD_D });
      t(s, n, { x: x + 0.12, y: y + 0.6, w: tw - 0.24, h: 0.5, fontSize: 10, bold: true, color: real ? D_TEXT : INK, valign: "bottom" });
    });
    const x = 6.2, w = 3.2;
    t(s, "Quy định của Amazon", { x, y: 1.35, w, h: 0.28, fontSize: 12, bold: true });
    t(s, "Ảnh chính phải là ảnh chụp thật trên nền trắng, sản phẩm chiếm ≥ 85% khung. AI chỉ dùng cho ảnh phụ và phải thể hiện đúng sản phẩm.", { x, y: 1.65, w, h: 0.85, fontSize: 10, color: MUTED });
    t(s, "Quy trình", { x, y: 2.6, w, h: 0.28, fontSize: 12, bold: true });
    const steps = ["Ảnh thật", "Người mẫu AI (Photoroom, Botika, Claid)", "Bối cảnh (Gemini, Firefly)", "Infographic (Canva)", "Kiểm tra: đúng họa tiết, màu, độ dài, độ trong của vải"];
    steps.forEach((st, i) => {
      const y = 2.93 + i * 0.43;
      s.addShape(p.shapes.OVAL, { x, y: y + 0.02, w: 0.26, h: 0.26, fill: { color: INK }, line: { color: INK } });
      t(s, String(i + 1), { x, y: y + 0.02, w: 0.26, h: 0.26, fontSize: 9, bold: true, color: GOLD, align: "center", valign: "middle" });
      t(s, st, { x: x + 0.38, y, w: w - 0.38, h: 0.4, fontSize: 10, valign: "middle" });
    });
    s.addNotes("Hình ảnh (35 giây). Mỗi sản phẩm có bộ 9 ảnh; ô đen là ảnh chụp thật, ô sáng là ảnh AI hoặc infographic. Nếu có bộ ảnh đã làm, chèn một bộ mẫu vào slide phụ lục.");
  }

  // 3.4 Mô hình kịch bản
  {
    const s = content("03 · VẬN HÀNH AMAZON", "Kịch bản cơ sở: bán 86 / 110 sản phẩm", "Số sản phẩm bán ra theo nguồn, 01/10/2026 – 31/03/2027 (182 ngày)");
    s.addChart(p.charts.BAR, [
      { name: "Tự nhiên", labels: ["Thận trọng", "Cơ sở", "Mục tiêu"], values: [30, 59, 75] },
      { name: "PPC", labels: ["Thận trọng", "Cơ sở", "Mục tiêu"], values: [16, 21, 26] },
      { name: "Ngoài Amazon", labels: ["Thận trọng", "Cơ sở", "Mục tiêu"], values: [2, 6, 9] },
    ], {
      x: 0.45, y: 1.45, w: 4.6, h: 3.7, barDir: "col", barGrouping: "stacked", barGapWidthPct: 55,
      chartColors: [INK, GOLD, "9A948B"], showValue: true, dataLabelPosition: "ctr", dataLabelColor: WHITE, dataLabelFontSize: 10, dataLabelFontFace: BODY,
      showLegend: true, legendPos: "b", legendFontSize: 10, legendFontFace: BODY, legendColor: MUTED,
      catAxisLabelColor: INK, catAxisLabelFontSize: 11, catAxisLabelFontFace: BODY, catAxisLineShow: false,
      valAxisHidden: true, valGridLine: { style: "none" }, catGridLine: { style: "none" },
    });
    const H = (x) => ({ text: x, options: { bold: true, color: GOLD, fill: { color: INK }, align: "center" } });
    const c = (x, b) => ({ text: x, options: { align: "center", bold: !!b } });
    s.addTable([
      [H("Giả định"), H("Thận trọng"), H("Cơ sở"), H("Mục tiêu")],
      ["Session tự nhiên/ngày", c("2,7"), c("4,1", 1), c("4,6")],
      ["Tỷ lệ chuyển đổi tự nhiên", c("6%"), c("8%", 1), c("9%")],
      ["Tỷ lệ chuyển đổi PPC", c("7%"), c("9%", 1), c("11%")],
      ["Tổng sản phẩm bán", c("48"), c("86", 1), c("110")],
    ], { x: 5.3, y: 1.45, w: 4.1, colW: [1.7, 0.8, 0.8, 0.8], fontFace: BODY, fontSize: 9.5, color: INK, border: { type: "solid", pt: 0.5, color: LINE }, rowH: 0.3, valign: "middle", margin: 0.05 });
    rect(s, { x: 5.3, y: 3.2, w: 4.1, h: 1.9, fill: { color: IVORY } });
    t(s, "~75 sản phẩm tự nhiên đến từ đâu?", { x: 5.5, y: 3.3, w: 3.7, h: 0.28, fontSize: 11.5, bold: true });
    t(s, [
      { text: "Xuất hiện trên từ khóa mới nhờ đổi tiêu đề", options: { bullet: true, breakLine: true } },
      { text: "Hiệu ứng lan tỏa từ PPC lên thứ hạng tự nhiên", options: { bullet: true, breakLine: true } },
      { text: "Tìm kiếm thương hiệu từ creator, Instagram", options: { bullet: true, breakLine: true } },
      { text: "Q4 là quý đông khách nhất của ngành hàng", options: { bullet: true } },
    ], { x: 5.5, y: 3.62, w: 3.7, h: 1.4, fontSize: 10, color: MUTED, paraSpaceAfter: 3 });
    s.addNotes("Mô hình (45 giây). Số sản phẩm = session × tỷ lệ chuyển đổi (Unit Session %), tách 3 nguồn để không đếm trùng. Kịch bản cơ sở chỉ cần 4,1 session tự nhiên/ngày cho cả 3 listing. Baseline đo ngày 01/10.");
  }

  // 3.5 Theo SKU
  {
    const s = content("03 · VẬN HÀNH AMAZON", "Mỗi sản phẩm có mùa bán riêng", "Dự báo kịch bản cơ sở theo SKU (tổng khớp 86 sản phẩm)");
    const rows = [
      ["SP1 Jumpsuit", 20, 16, "Tháng 1–2", "PPC đợt 3 · coupon Winter Escape · creator · Instagram", "9 / 16 / 20"],
      ["SP2 Maxi", 40, 34, "Tháng 10–11, 1–2", "PPC đợt 1 và 3 · coupon Winter Escape · mua kèm", "19 / 34 / 40"],
      ["SP3 đen", 25, 20, "Tháng 11–12", "PPC đợt 2 · coupon Holiday Party · mua kèm với SP2", "12 / 20 / 25"],
      ["SP3 hồng", 25, 16, "Tháng 2–3", "Từ khóa Valentine, Phục sinh · PPC đợt 4 · coupon Pink Edit", "8 / 16 / 25"],
    ];
    const hy = 1.5;
    [["SẢN PHẨM", X0, 1.5], ["MÙA BÁN", 2.15, 1.3], ["HOẠT ĐỘNG CHÍNH", 3.5, 3.0], ["CƠ SỞ / TỒN KHO", 6.65, 1.9], ["3 KỊCH BẢN", 8.55, 0.85]].forEach(([l, x, w]) =>
      t(s, l, { x, y: hy, w, h: 0.2, fontSize: 8.5, bold: true, charSpacing: 2, color: GOLD_D }));
    rows.forEach(([n, stock, base, season, act, sc], i) => {
      const y = 1.85 + i * 0.72;
      rect(s, { x: X0, y, w: XW, h: 0.62, fill: { color: i % 2 ? WHITE : IVORY } });
      t(s, n, { x: X0 + 0.12, y, w: 1.4, h: 0.62, fontSize: 12, bold: true, valign: "middle" });
      t(s, season, { x: 2.15, y, w: 1.3, h: 0.62, fontSize: 10, valign: "middle" });
      t(s, act, { x: 3.5, y, w: 3.0, h: 0.62, fontSize: 9.5, color: MUTED, valign: "middle" });
      const bw = 1.3, bx = 6.65;
      rect(s, { x: bx, y: y + 0.24, w: bw, h: 0.14, fill: { color: LINE } });
      rect(s, { x: bx, y: y + 0.24, w: bw * base / stock, h: 0.14, fill: { color: INK } });
      t(s, base + "/" + stock, { x: bx + bw + 0.1, y, w: 0.5, h: 0.62, fontSize: 11, bold: true, valign: "middle" });
      t(s, sc, { x: 8.55, y, w: 0.85, h: 0.62, fontSize: 9.5, color: MUTED, valign: "middle", align: "right" });
    });
    rect(s, { x: X0, y: 4.78, w: XW, h: 0.37, fill: { color: INK } });
    t(s, "TỔNG", { x: X0 + 0.12, y: 4.78, w: 1.4, h: 0.37, fontSize: 11, bold: true, color: GOLD, valign: "middle" });
    t(s, "Không nhập thêm hàng · không chi quảng cáo cho biến thể còn ≤ 1 chiếc · còn hàng sau 31/03 thì giữ giá, bán mùa Xuân/Hè 2027", { x: 2.15, y: 4.78, w: 4.4, h: 0.37, fontSize: 9, color: D_TEXT, valign: "middle" });
    t(s, "86/110", { x: 7.95, y: 4.78, w: 0.6, h: 0.37, fontSize: 11, bold: true, color: GOLD, valign: "middle" });
    t(s, "48 / 86 / 110", { x: 8.55, y: 4.78, w: 0.85, h: 0.37, fontSize: 9.5, color: D_TEXT, valign: "middle", align: "right" });
    s.addNotes("Theo SKU (30 giây). Thứ tự: thận trọng / cơ sở / mục tiêu. SP3 hồng có thể thêm ~4 sản phẩm nếu chạy thử nghiệm Tết.");
  }

  // 3.6 Lịch triển khai (Gantt)
  {
    const s = content("03 · LỊCH TRIỂN KHAI", "Lịch 6 tháng: mỗi giai đoạn một dịp");
    const gx = 2.3, gw = 7.1, start = Date.UTC(2026, 9, 1), days = 182;
    const X = (m, d) => gx + ((Date.UTC(m >= 10 ? 2026 : 2027, m - 1, d) - start) / 864e5) / days * gw;
    const months = [["T10", 10], ["T11", 11], ["T12", 12], ["T1", 1], ["T2", 2], ["T3", 3]];
    months.forEach(([l, m], i) => {
      const x1 = X(m, 1), x2 = i < 5 ? X(months[i + 1][1], 1) : gx + gw;
      if (i % 2 === 0) rect(s, { x: x1, y: 1.35, w: x2 - x1, h: 3.75, fill: { color: "FAF8F4" } });
      t(s, l, { x: x1, y: 1.38, w: x2 - x1, h: 0.22, fontSize: 9, bold: true, color: MUTED, align: "center" });
    });
    const lanes = [
      ["Giai đoạn", [[10, 5, 10, 14, "Áp dụng", 2], [10, 15, 11, 15, "Mùa thu", 1], [11, 16, 12, 31, "Tiệc cuối năm", 0], [1, 1, 2, 14, "Winter Escape", 1], [2, 15, 3, 31, "Mùa xuân", 0]]],
      ["PPC (210 USD)", [[10, 15, 11, 15, "Đợt 1 · SP2 · 45$", 0], [11, 16, 12, 31, "Đợt 2 · SP3 đen · 55$", 0], [1, 1, 2, 14, "Đợt 3 · SP1+SP2 · 90$", 0], [3, 1, 3, 20, "Đợt 4 · 20$", 0]]],
      ["Coupon SP1, SP2", [[1, 5, 2, 5, "Winter Escape −10%", 1]]],
      ["Coupon SP3", [[12, 1, 12, 20, "Holiday −10%", 1], [2, 1, 2, 14, "Valentine", 1], [3, 15, 3, 28, "Phục sinh", 1]]],
      ["Ngoài Amazon", [[10, 5, 10, 31, "Chốt creator", 2], [1, 1, 2, 14, "Instagram + nội dung creator", 1]]],
    ];
    const fills = [INK, GOLD, LINE], txt = [D_TEXT, INK, INK];
    lanes.forEach(([l, bars], i) => {
      const y = 1.7 + i * 0.58;
      t(s, l, { x: X0, y, w: 1.65, h: 0.4, fontSize: 10, bold: true, valign: "middle" });
      bars.forEach(([m1, d1, m2, d2, lab, st]) => {
        const x1 = X(m1, d1), x2 = X(m2, d2) + gw / days;
        rect(s, { x: x1, y: y + 0.04, w: x2 - x1, h: 0.32, fill: { color: fills[st] } });
        const lw = Math.max(x2 - x1, 0.9);
        t(s, lab, { x: x1 + (x2 - x1) / 2 - lw / 2, y: y + 0.04, w: lw, h: 0.32, fontSize: 8, color: txt[st], align: "center", valign: "middle", bold: st === 0 });
      });
    });
    const ms = [[10, 1, "01/10 · đo baseline"], [11, 30, "30/11 · kiểm tra 70%"], [1, 15, "15/01 · quyết định Tết"], [3, 31, "31/03 · không xả hàng"]];
    const my = 1.7 + 5 * 0.58;
    t(s, "Mốc quyết định", { x: X0, y: my, w: 1.65, h: 0.4, fontSize: 10, bold: true, valign: "middle" });
    ms.forEach(([m, d, l], i) => {
      const x = Math.min(X(m, d), gx + gw - 0.1);
      s.addShape(p.shapes.DIAMOND, { x: x - 0.09, y: my + 0.1, w: 0.18, h: 0.18, fill: { color: GOLD }, line: { color: INK, width: 0.75 } });
      t(s, l, { x: i === 3 ? x - 1.35 : x + 0.12, y: my + 0.03, w: 1.3, h: 0.3, fontSize: 8, color: INK, valign: "middle", align: i === 3 ? "right" : "left" });
    });
    s.addNotes("Lịch (40 giây). Mỗi chiến dịch PPC đặt 1 USD/ngày nên chi tối đa đúng bằng ngân sách từng đợt; tối đa 2 chiến dịch cùng lúc. Tạm dừng PPC 15–28/02.");
  }

  // 3.7 Ngân sách
  {
    const s = content("03 · NGÂN SÁCH", "400 USD: 3/4 dành cho Amazon, nơi chốt đơn");
    const labels = ["PPC", "Phí coupon", "Công cụ AI & dự phòng", "Instagram", "2 creator", "Dự phòng ngoài Amazon"];
    const vals = [210, 51, 39, 40, 45, 15];
    const cols = [INK, "4A4640", "8A857C", GOLD, "DCC08A", "EADBB8"];
    s.addChart(p.charts.DOUGHNUT, [{ name: "Ngân sách", labels, values: vals }], {
      x: X0, y: 1.3, w: 3.8, h: 3.8, holeSize: 62, chartColors: cols, showLegend: false, showValue: false, showPercent: false, showLabel: false,
      dataBorder: { pt: 1, color: WHITE },
    });
    t(s, "400 USD", { x: X0 + 0.9, y: 2.9, w: 2.0, h: 0.45, fontFace: HEAD, fontSize: 22, align: "center", valign: "middle" });
    t(s, "tổng ngân sách", { x: X0 + 0.9, y: 3.33, w: 2.0, h: 0.25, fontSize: 10, color: MUTED, align: "center" });
    const group = (x, title, total, idx) => {
      t(s, title, { x, y: 1.35, w: 2.3, h: 0.25, fontSize: 9, bold: true, charSpacing: 2, color: GOLD_D });
      t(s, total, { x, y: 1.6, w: 2.3, h: 0.5, fontFace: HEAD, fontSize: 24, valign: "middle" });
      idx.forEach((k, j) => {
        const y = 2.25 + j * 0.42;
        rect(s, { x, y: y + 0.07, w: 0.18, h: 0.18, fill: { color: cols[k] }, line: { color: cols[k] === "EADBB8" ? LINE : cols[k] } });
        t(s, labels[k], { x: x + 0.28, y, w: 1.45, h: 0.32, fontSize: 10, valign: "middle" });
        t(s, vals[k] + " USD", { x: x + 1.7, y, w: 0.6, h: 0.32, fontSize: 10, bold: true, align: "right", valign: "middle" });
      });
    };
    group(4.75, "TRÊN AMAZON", "300 USD", [0, 1, 2]);
    group(7.1, "NGOÀI AMAZON", "100 USD", [3, 4, 5]);
    rect(s, { x: 4.75, y: 3.7, w: 4.65, h: 1.4, fill: { color: IVORY } });
    t(s, [
      { text: "Mỗi chiến dịch PPC 1 USD/ngày → chi tối đa đúng 210 USD", options: { bullet: true, breakLine: true } },
      { text: "Mục tiêu ACoS ≤ 30%, dưới mức hòa vốn thấp nhất (37%)", options: { bullet: true, breakLine: true } },
      { text: "Không dùng Prime Exclusive Discount (100 USD/đợt), Lightning Deal", options: { bullet: true, breakLine: true } },
      { text: "Tiền giảm cho khách qua coupon (~136 USD) trừ vào doanh thu, không vào ngân sách", options: { bullet: true } },
    ], { x: 4.9, y: 3.8, w: 4.4, h: 1.25, fontSize: 9.5, paraSpaceAfter: 2 });
    s.addNotes("Ngân sách (30 giây). Phần lớn đòn bẩy nằm ở tỷ lệ chuyển đổi, do các công cụ miễn phí tạo ra: tiêu đề, A+, Brand Store, ảnh.");
  }

  // 3.8 Marketing & phễu
  {
    const s = content("03 · MARKETING", "Ít kênh, đo được từng bước", "Mọi link ngoài Amazon đều gắn Amazon Attribution, kể cả link trong trang link-in-bio");
    const steps = [
      ["NHẬN BIẾT", "Instagram Reels · 2 creator du lịch", "Lượt hiển thị"],
      ["CÂN NHẮC", "Brand Store \"Winter Escape\" qua link Attribution", "Click"],
      ["CHUYỂN ĐỔI", "Listing mới + coupon", "Thêm vào giỏ → bán ra"],
      ["GIỮ CHÂN", "Follow brand trên Amazon", "Người theo dõi"],
    ];
    const w = 2.3;
    steps.forEach(([l, d, m], i) => {
      const x = X0 + i * 2.17;
      s.addShape(i === 0 ? p.shapes.PENTAGON : p.shapes.CHEVRON, { x, y: 1.5, w, h: 0.62, fill: { color: i === 2 ? GOLD : INK }, line: { color: WHITE, width: 1 } });
      t(s, l, { x: x + 0.25, y: 1.5, w: w - 0.5, h: 0.62, fontSize: 10.5, bold: true, charSpacing: 2, color: i === 2 ? INK : GOLD, align: "center", valign: "middle" });
      t(s, d, { x: x + 0.1, y: 2.2, w: 2.0, h: 0.45, fontSize: 10, align: "center" });
      t(s, "Đo: " + m, { x: x + 0.1, y: 2.65, w: 2.0, h: 0.25, fontSize: 9, color: MUTED, align: "center" });
    });
    const H = (x) => ({ text: x, options: { bold: true, color: GOLD, fill: { color: INK } } });
    s.addTable([
      [H("Kênh"), H("Vai trò"), H("Ngân sách"), H("Điều kiện")],
      ["Amazon (PPC, coupon, A+, Brand Store)", "Chốt đơn", { text: "300 USD", options: { bold: true } }, "Theo lịch triển khai"],
      ["Instagram, kênh ngoài Amazon duy nhất", "Boost 1–2 Reels, phụ nữ 28–45 ở NY, NJ, MA, IL", { text: "40 USD", options: { bold: true } }, "Nhắm được vị trí và độ tuổi"],
      ["2 creator du lịch (5k–30k người theo dõi)", "Nội dung thật để dùng lại cho listing, A+", { text: "45 USD", options: { bold: true } }, "Có xác nhận bằng văn bản trước 31/10"],
    ], { x: X0, y: 3.05, w: XW, colW: [2.75, 2.95, 0.9, 2.2], fontFace: BODY, fontSize: 9.5, color: INK, border: { type: "solid", pt: 0.5, color: LINE }, rowH: 0.36, valign: "middle", margin: 0.06 });
    t(s, "Không làm trong giai đoạn này: TikTok, Google Ads, affiliate trả phí. Amazon Live: 1 buổi tùy chọn nếu có người dẫn nói tiếng Anh.", { x: X0, y: 4.62, w: XW, h: 0.45, fontSize: 9.5, color: MUTED, italic: true });
    s.addNotes("Marketing (35 giây). Chọn Instagram vì nhắm được theo bang và độ tuổi, hợp với Winter Escapers. Đăng ký Brand Referral Bonus nhưng không đưa vào dự báo.");
  }

  // 3.9 Tài chính
  {
    const s = content("03 · TÀI CHÍNH", "Giữ giá vẫn lãi hơn xả hàng", "Lợi nhuận góp sau marketing (USD), 2 cách hiểu base cost");
    s.addChart(p.charts.BAR, [
      { name: "A: base cost đã gồm mọi phí", labels: ["Xả giá 50%", "Thận trọng (48)", "Cơ sở (86)", "Mục tiêu (110)"], values: [533, 707, 1580, 2062] },
      { name: "B: chưa gồm phí 17%", labels: ["Xả giá 50%", "Thận trọng (48)", "Cơ sở (86)", "Mục tiêu (110)"], values: [235, 388, 1009, 1348] },
    ], {
      x: 0.45, y: 1.45, w: 5.95, h: 3.7, barDir: "col", barGrouping: "clustered", barGapWidthPct: 70,
      chartColors: [INK, GOLD], showValue: true, dataLabelPosition: "outEnd", dataLabelColor: INK, dataLabelFontSize: 10, dataLabelFontFace: BODY, dataLabelFormatCode: "#,##0",
      showLegend: true, legendPos: "b", legendFontSize: 10, legendFontFace: BODY, legendColor: MUTED,
      catAxisLabelColor: INK, catAxisLabelFontSize: 10, catAxisLabelFontFace: BODY, catAxisLineShow: false,
      valAxisHidden: true, valGridLine: { style: "none" }, catGridLine: { style: "none" },
    });
    const x = 6.75, w = 2.65;
    rrect(s, { x, y: 1.45, w, h: 3.65, fill: { color: INK } });
    t(s, "Kịch bản cơ sở", { x: x + 0.25, y: 1.62, w: w - 0.5, h: 0.25, fontSize: 11, bold: true, color: D_MUTED });
    t(s, "+1.580", { x: x + 0.25, y: 1.9, w: w - 0.5, h: 0.7, fontFace: HEAD, fontSize: 38, color: GOLD, valign: "middle" });
    t(s, "USD (A), so với +533 USD nếu xả giá 50%", { x: x + 0.25, y: 2.6, w: w - 0.5, h: 0.45, fontSize: 10.5, color: D_TEXT });
    t(s, "Doanh thu 3.358 USD · marketing chiếm 12% doanh thu", { x: x + 0.25, y: 3.1, w: w - 0.5, h: 0.45, fontSize: 10, color: D_MUTED });
    t(s, "Ngay cả kịch bản thận trọng vẫn lãi hơn xả hàng, và còn 62 sản phẩm để bán đúng mùa Xuân/Hè 2027.", { x: x + 0.25, y: 3.65, w: w - 0.5, h: 1.3, fontSize: 10.5, italic: true, color: D_TEXT });
    s.addNotes("Tài chính (40 giây). Giả định: khuyến mãi trung bình 5%, dự phòng hoàn hàng 8%, marketing cố định 400 USD. Chưa tính thuế nhập khẩu, cước biển (nếu base cost chưa gồm) và phụ phí tồn kho lâu ngày.");
  }

  // 3.10 KPI + quy tắc
  {
    const s = content("03 · ĐO LƯỜNG", "Đo gì, và làm gì khi lệch kế hoạch");
    const kpis = [
      ["+50%", "Unit Session %", "tăng tương đối so với baseline"], ["+20%", "CTR ảnh chính", "so sánh 14 ngày trước/sau"],
      ["≥ 10", "từ khóa trang 1", "nhóm chuyến đi và dịp"], ["≥ 4,3★", "rating", "tỷ lệ hoàn < 20%"],
      ["≥ 95%", "giá bán / giá gốc", "giữ định vị, không xả"], ["0 USD", "chi quảng cáo lãng phí", "cho biến thể đã hết hàng"],
    ];
    const w = 1.85, h = 1.12;
    kpis.forEach(([v, l, d], i) => {
      const x = X0 + (i % 2) * (w + 0.15), y = 1.35 + Math.floor(i / 2) * (h + 0.14);
      rect(s, { x, y, w, h, fill: { color: IVORY } });
      t(s, v, { x: x + 0.15, y: y + 0.08, w: w - 0.3, h: 0.45, fontFace: HEAD, fontSize: 20, color: INK, valign: "middle" });
      t(s, l, { x: x + 0.15, y: y + 0.53, w: w - 0.3, h: 0.25, fontSize: 9.5, bold: true });
      t(s, d, { x: x + 0.15, y: y + 0.78, w: w - 0.3, h: 0.25, fontSize: 8.5, color: MUTED });
    });
    const x = 4.75, w2 = 4.65;
    t(s, "Quy tắc ra quyết định", { x, y: 1.35, w: w2, h: 0.3, fontSize: 12, bold: true });
    const rules = [
      ["01/10", "Baseline tự nhiên < 2 session/ngày", "Báo BTC; dồn PPC vào SP2, SP1"],
      ["30/11", "Đạt < 70% mục tiêu cộng dồn", "Chuyển dự phòng sang PPC (trong 300 USD); bật mua kèm"],
      ["15/01", "SP3 hồng còn ≥ 10 chiếc + có creator gốc Việt", "Chạy thử nghiệm Tết; nếu không thì bỏ"],
      ["31/03", "Còn tồn kho", "Không xả: giữ giá, bán tiếp mùa Xuân/Hè 2027"],
    ];
    s.addShape(p.shapes.LINE, { x: x + 0.09, y: 1.85, w: 0, h: 2.95, line: { color: GOLD, width: 1 } });
    rules.forEach(([d, sig, act], i) => {
      const y = 1.75 + i * 0.85;
      s.addShape(p.shapes.OVAL, { x, y: y + 0.03, w: 0.18, h: 0.18, fill: { color: INK }, line: { color: GOLD, width: 1 } });
      t(s, d, { x: x + 0.35, y, w: 0.7, h: 0.25, fontSize: 11, bold: true, color: GOLD_D });
      t(s, sig, { x: x + 1.05, y, w: w2 - 1.05, h: 0.28, fontSize: 10.5, bold: true });
      t(s, "→ " + act, { x: x + 1.05, y: y + 0.29, w: w2 - 1.05, h: 0.45, fontSize: 10, color: MUTED });
    });
    s.addNotes("Đo lường (35 giây). Nguồn dữ liệu: Business Report, Search Query Performance, Brand Analytics, Amazon Attribution, Voice of the Customer.");
  }

  // 3.11 Rủi ro
  {
    const s = content("04 · RỦI RO", "Rủi ro và phương án dự phòng");
    const H = (x) => ({ text: x, options: { bold: true, color: GOLD, fill: { color: INK } } });
    const b = (x) => ({ text: x, options: { bold: true } });
    s.addTable([
      [H("Rủi ro"), H("Dấu hiệu"), H("Phương án")],
      [b("SP2 đắt hơn đối thủ ~70%"), "Kết quả mã hóa đánh giá: khách chọn vì giá nhiều gấp đôi", "Chuyển thông điệp sang chất liệu và giá trị; tăng ảnh cận chất liệu, câu chuyện thương hiệu"],
      [b("Traffic tự nhiên thấp"), "Baseline 01/10 < 2 session/ngày", "Kịch bản thận trọng là khả năng cao; dồn PPC vào SP1, SP2 (biên lợi nhuận cao)"],
      [b("Creator không nhận lời"), "Chưa có xác nhận bằng văn bản trước 31/10", "Giữ 45 USD trong ngân sách ngoài Amazon để boost nội dung của thương hiệu"],
      [b("Tồn kho mỏng (~5 chiếc/biến thể)"), "Biến thể còn ≤ 1 chiếc", "Dừng quảng cáo biến thể đó; đẩy màu, size còn nhiều"],
      [b("Không bán hết đến 31/03"), "Còn tồn kho cuối chiến dịch", "Không xả giá; bán tiếp đúng mùa Xuân/Hè 2027"],
      [b("Ảnh AI sai sản phẩm"), "Họa tiết, màu, độ dài khác ảnh thật", "Checklist trước khi đăng; ảnh chính luôn là ảnh thật"],
    ], { x: X0, y: 1.35, w: XW, colW: [2.4, 2.9, 3.5], fontFace: BODY, fontSize: 10, color: INK, border: { type: "solid", pt: 0.5, color: LINE }, rowH: 0.5, valign: "middle", margin: 0.07 });
    s.addNotes("Rủi ro (30 giây).");
  }

  // ---------- Kết luận ----------
  {
    const s = p.addSlide();
    s.background = { color: DARK };
    if (findImg("cover")) await imgSlot(s, "cover", 6.4, 0, 3.6, 5.625, true); else darkDeco(s);
    t(s, "KẾT LUẬN", { x: X0, y: 0.6, w: 5, h: 0.25, fontSize: 10, bold: true, charSpacing: 3, color: GOLD });
    t(s, "Cùng sản phẩm.\nĐổi bối cảnh.\nKhông xả giá.", { x: X0, y: 0.95, w: 5.6, h: 1.9, fontFace: HEAD, fontSize: 32, color: D_TEXT });
    const st = [["86/110", "sản phẩm bán ra, kịch bản cơ sở"], ["+1.580", "USD lợi nhuận góp (A), gấp ~3 lần xả giá"], ["400", "USD, đo được từng bước bằng Attribution"]];
    st.forEach(([v, l], i) => {
      const x = X0 + i * 1.9;
      t(s, v, { x, y: 3.35, w: 1.8, h: 0.6, fontFace: HEAD, fontSize: 28, color: GOLD, valign: "middle" });
      t(s, l, { x, y: 3.97, w: 1.7, h: 0.6, fontSize: 10, color: D_MUTED });
    });
    footer(s, true);
    s.addNotes("Kết luận (20 giây). Nhắc lại luận điểm và 3 con số.");
  }

  // ---------- Cảm ơn ----------
  {
    const s = p.addSlide();
    s.background = { color: DARK };
    if (findImg("cover")) await imgSlot(s, "cover", 5.6, 0, 4.4, 5.625, true); else darkDeco(s);
    await logoOrWordmark(s, X0, 0.5);
    t(s, "Cảm ơn\nBan Giám khảo", { x: X0, y: 1.6, w: 5, h: 1.5, fontFace: HEAD, fontSize: 38, color: D_TEXT });
    t(s, "Chúng tôi sẵn sàng cho phần hỏi đáp.", { x: X0, y: 3.25, w: 5, h: 0.35, fontSize: 14, color: D_MUTED });
    t(s, "Đội thi: " + TEAM, { x: X0, y: 4.7, w: 5, h: 0.25, fontSize: 11, color: D_TEXT });
    s.addNotes("Cảm ơn.");
  }

  // ---------- Phụ lục ----------
  {
    const s = content("PHỤ LỤC A", "Công cụ Amazon: điều kiện và quyết định");
    const H = (x) => ({ text: x, options: { bold: true, color: GOLD, fill: { color: INK } } });
    const b = (x) => ({ text: x, options: { bold: true } });
    s.addTable([
      [H("Công cụ"), H("Điều kiện / chi phí"), H("Quyết định")],
      [b("A+ Content, Brand Store"), "Brand Registry (đã có Store)", "Dùng"],
      [b("Coupon"), "5 USD/đợt + 2,5% doanh số dùng coupon", "4 đợt, tổng phí ≈ 51 USD"],
      [b("Amazon Attribution"), "Công cụ đo lường, miễn phí", "Gắn cho mọi link ngoài Amazon"],
      [b("Brand Referral Bonus"), "Đăng ký riêng; chỉ tính doanh số qua Attribution", "Đăng ký, không đưa vào dự báo"],
      [b("Virtual Bundle"), "Brand Registry, hàng FBA", "Nếu không đủ điều kiện: \"Mua 2 giảm 10%\""],
      [b("Manage Your Experiments"), "Chỉ mở cho ASIN có traffic cao", "Thay bằng so sánh trước/sau + khảo sát ảnh"],
      [b("Prime Exclusive Discount"), "100 USD mỗi đợt", "Không dùng"],
      [b("Amazon Posts"), "Đã ngừng từ 31/07/2025", "Bỏ"],
      [b("Vine"), "Nguồn chưa thống nhất; tốn hàng", "Chỉ dùng nếu < 3 đánh giá và BTC cho lấy hàng"],
    ], { x: X0, y: 1.3, w: XW, colW: [2.4, 3.4, 3.0], fontFace: BODY, fontSize: 9.5, color: INK, border: { type: "solid", pt: 0.5, color: LINE }, rowH: 0.36, valign: "middle", margin: 0.06 });
    s.addNotes("Phụ lục A: dùng khi Ban Giám khảo hỏi về công cụ Amazon.");
  }
  {
    const s = content("PHỤ LỤC B", "Giả định, câu hỏi gửi BTC và nguồn");
    const col = (x, title, items) => {
      t(s, title, { x, y: 1.3, w: 4.2, h: 0.28, fontSize: 12, bold: true });
      t(s, items.map((it, i) => ({ text: it, options: { bullet: true, breakLine: i < items.length - 1 } })), { x, y: 1.65, w: 4.2, h: 3.45, fontSize: 9.5, color: MUTED, paraSpaceAfter: 3 });
    };
    col(X0, "Giả định chính", [
      "Tồn kho chia theo biến thể: SP1 20, SP2 40, SP3 đen 25, SP3 hồng 25",
      "Base cost tính 2 cách: đã gồm mọi phí (A) / chưa gồm phí giới thiệu 17% (B)",
      "Dự phòng hoàn hàng 8% giá bán (tỷ lệ hoàn ~20% × chi phí ~40% mỗi đơn hoàn)",
      "CPC khoảng 0,9 USD → ~233 session PPC",
      "Khuyến mãi trung bình 5%; marketing cố định 400 USD",
      "Chưa tính thuế nhập khẩu, cước biển, phụ phí tồn kho lâu ngày",
      "Câu hỏi gửi BTC: tồn kho theo SKU/màu/size; session 90 ngày; base cost gồm phí chưa; điều chuyển ngân sách",
    ]);
    col(5.2, "Nguồn chính", [
      "Amazon Ads: Attribution, Posts (đã ngừng), FAQ ngân sách",
      "Sell on Amazon: Manage Your Experiments; SP-API report fields",
      "Adobe Holiday Shopping 2025; dữ liệu Prime Big Deal Days 10/2025",
      "Google Trends (qua Accio): \"resort wear dresses\"",
      "Allianz (du lịch mùa đông); The Knot (đám cưới ở nơi xa)",
      "Cruise Critic, Ask MetaFilter, Life Well Cruised (insight)",
      "Tiêu đề listing đối thủ quan sát ngày 30/09/2026 (PRETTYGARDEN, ZESICA)",
    ]);
    s.addNotes("Phụ lục B. Danh sách nguồn đầy đủ có trong tài liệu kế hoạch.");
  }

  await p.writeFile({ fileName: OUT });
  const missing = Object.keys(IMAGES).filter((k) => !findImg(k));
  console.log("wrote", OUT, "| slides:", pageNo + 2, "| thiếu ảnh:", missing.join(", ") || "không");
}

build().catch((e) => { console.error(e); process.exit(1); });
