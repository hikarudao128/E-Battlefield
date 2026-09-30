// Render the SIXDO 9-image Amazon set (templates + graphics) at 2000x2000 px,
// plus one 3x3 storyboard per product.
// Run: NODE_PATH=$(npm root -g) node build-images.js
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'anh');
const AI = path.join(ROOT, 'ai-mau');

const INK = '#2B2B2B', CREAM = '#F7F3EE', LINE = '#D9D2C8', MUTED = '#8A837A';
const SERIF = "'Bitstream Charter', 'Liberation Serif', serif";
const SANS = "'Liberation Sans', 'DejaVu Sans', sans-serif";

const PRODUCTS = [
  {
    id: 'SP1', name: 'Floral Halter Jumpsuit', fabric: 'Woven cotton', accent: '#2F5DA8',
    colorway: 'Blue Floral on White', sizes: ['S', 'M', 'L', 'XL'],
    cols: ['Bust', 'Waist', 'Hip', 'Length', 'Inseam'], shape: 'jumpsuit',
    occasion: [
      ['Resort dinner', 'Sân resort lúc hoàng hôn, bàn ăn nến mờ phía sau'],
      ['Warm-weather brunch', 'Sân vườn khách sạn, hoa giấy, bàn brunch mờ phía sau'],
    ],
    layer: 'Cardigan kem, trench coat gấp, giày bệt, túi cói',
    callouts: ['Woven cotton', 'Lining: ___', 'Hand wash cold'],
    details: ['Halter neckline', 'Floral print', 'Wide leg'],
    ai: { '01': 'SP1_01_main.jpg', '02': 'SP1_02_resort.jpg', '03': 'SP1_03_brunch.jpg', '04': 'SP1_04_flatlay.jpg', '05': 'SP1_05_fabric.jpg', '06': 'SP1_06_details.jpg' },
  },
  {
    id: 'SP2', name: 'Floral Maxi Dress', fabric: 'Polyester voile', accent: '#B8862B',
    colorway: 'Mustard Yellow Floral · Blue Floral', sizes: ['S', 'M', 'L', 'XL'],
    cols: ['Bust', 'Waist', 'Length', 'Sleeve'], shape: 'maxi',
    occasion: [
      ['Fall gathering', 'Phố hàng cây đầu thu, nắng chiều, tông lạc đà và kem (màu vàng)'],
      ['Getaway', 'Boong tàu hoặc bờ biển chiều muộn, trời và biển xanh (màu xanh)'],
    ],
    layer: 'Áo khoác denim, boots da lộn màu lạc đà, túi da đeo chéo',
    callouts: ['Lightweight polyester voile', 'Sheer sleeves by design', 'Body lining: ___'],
    details: ['Tie neckline', 'Sheer sleeves', 'Tiered skirt'],
    ai: { '01': 'SP2_01_main.jpg', '02': 'SP2_02_fall.jpg', '03': 'SP2_03_cruise.jpg', '04': 'SP2_04_flatlay.jpg', '05': 'SP2_05_fabric.jpg', '06': 'SP2_06_details.jpg' },
  },
  {
    id: 'SP3', name: 'Tiered Fit and Flare Dress', fabric: 'Solid polyester', accent: '#1E1E1E',
    colorway: 'Black · Blush Pink', sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    cols: ['Bust', 'Waist', 'Length'], shape: 'dress',
    occasion: [
      ['Evening party', 'Tiệc tối trong nhà, đèn vàng ấm, gỗ tối và đồng (màu đen)'],
      ['Spring brunch', 'Bàn brunch hoa tươi, tông hồng phấn và kem (màu hồng)'],
    ],
    layer: 'Blazer lạc đà, tất mỏng đen, giày cao gót, clutch vàng',
    callouts: ['Solid polyester', 'Lining: ___', 'Opacity: ___'],
    details: ['Spaghetti straps', 'Fitted bodice', 'Tiered flared skirt'],
    ai: { '01': 'SP3_01_main.jpg', '02': 'SP3_02_party.jpg', '03': 'SP3_03_brunch.jpg', '04': 'SP3_04_flatlay.jpg', '05': 'SP3_05_fabric.jpg', '06': 'SP3_06_details.jpg' },
  },
];

// Simple garment silhouettes (line drawings) for the size chart
function silhouette(shape, color) {
  const s = `fill="none" stroke="${color}" stroke-width="6" stroke-linejoin="round" stroke-linecap="round"`;
  const arrow = (x1, y1, x2, y2) =>
    `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${MUTED}" stroke-width="3" stroke-dasharray="10 8"/>`;
  if (shape === 'jumpsuit') return `<svg viewBox="0 0 400 700" width="100%" height="100%">
    <path ${s} d="M170 40 L200 20 L230 40 L250 140 Q250 170 245 200 L260 300 L300 680 L215 680 L200 360 L185 680 L100 680 L140 300 L155 200 Q150 170 150 140 Z"/>
    <path ${s} d="M160 30 Q200 70 240 30"/>
    ${arrow(140, 150, 260, 150)}${arrow(145, 230, 255, 230)}${arrow(130, 320, 270, 320)}${arrow(320, 30, 320, 680)}${arrow(200, 370, 200, 680)}</svg>`;
  if (shape === 'maxi') return `<svg viewBox="0 0 400 700" width="100%" height="100%">
    <path ${s} d="M165 40 L235 40 L250 150 L240 230 L280 400 L310 540 L340 680 L60 680 L90 540 L120 400 L160 230 L150 150 Z"/>
    <path ${s} d="M165 45 L90 160 L70 330 L100 335 L125 180"/><path ${s} d="M235 45 L310 160 L330 330 L300 335 L275 180"/>
    <path ${s} d="M120 400 L280 400 M90 540 L310 540"/><path ${s} d="M185 40 L200 80 L215 40"/>
    ${arrow(150, 150, 250, 150)}${arrow(160, 230, 240, 230)}${arrow(360, 40, 360, 680)}${arrow(240, 60, 330, 330)}</svg>`;
  return `<svg viewBox="0 0 400 700" width="100%" height="100%">
    <path ${s} d="M165 60 L235 60 L245 170 L240 250 L280 380 L320 520 L80 520 L120 380 L160 250 L155 170 Z"/>
    <path ${s} d="M170 60 L175 10 M230 60 L225 10"/><path ${s} d="M120 380 L280 380"/>
    ${arrow(150, 150, 250, 150)}${arrow(155, 250, 245, 250)}${arrow(350, 20, 350, 520)}</svg>`;
}

const floral = (color, op = 0.18) => `<svg viewBox="0 0 200 200" width="100%" height="100%" style="opacity:${op}">
  ${[0, 60, 120, 180, 240, 300].map(a => `<ellipse cx="100" cy="60" rx="22" ry="42" fill="none" stroke="${color}" stroke-width="3" transform="rotate(${a} 100 100)"/>`).join('')}
  <circle cx="100" cy="100" r="14" fill="none" stroke="${color}" stroke-width="3"/></svg>`;

const base = (inner, bg = '#FFFFFF') => `<!doctype html><html><head><meta charset="utf-8"><style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{width:2000px;height:2000px;background:${bg};font-family:${SANS};color:${INK};overflow:hidden;position:relative}
  .serif{font-family:${SERIF}}
  .frame{position:absolute;border:4px dashed ${LINE};background:repeating-linear-gradient(45deg,#FAF8F5 0 28px,#F3EFE9 28px 56px);
    display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;color:${MUTED}}
  .frame b{display:block;font-size:54px;color:${INK};letter-spacing:4px;margin-bottom:28px}
  .frame span{display:block;font-size:40px;line-height:1.45;max-width:78%}
  .tag{position:absolute;left:60px;top:50px;font-size:34px;letter-spacing:6px;color:${MUTED}}
</style></head><body>${inner}</body></html>`;

const frame = (x, y, w, h, title, lines) =>
  `<div class="frame" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px"><b>${title}</b>${lines.map(l => `<span>${l}</span>`).join('')}</div>`;

function slot(p, n) {
  const tag = `<div class="tag">${p.id} · Ô ${n}</div>`;
  switch (n) {
    case '01':
      return base(tag + frame(300, 140, 1400, 1720, 'ẢNH CHÍNH – ẢNH THẬT',
        ['Người mẫu đứng toàn thân, nền trắng RGB 255', 'Sản phẩm chiếm ~85% chiều cao khung', 'Không chữ, không đạo cụ · Prompt 3.1']));
    case '02': case '03': {
      const [label, scene] = p.occasion[n === '02' ? 0 : 1];
      return base(tag + frame(0, 0, 2000, 2000, `BỐI CẢNH: ${label.toUpperCase()}`,
        ['Ảnh người mẫu thật mặc sản phẩm', scene, 'AI chỉ đổi nền và ánh sáng · Prompt mục 4']));
    }
    case '04':
      return base(tag + frame(120, 140, 1760, 1500, 'FLAT-LAY PHỐI LỚP',
        ['Sản phẩm trải phẳng ở giữa (ảnh thật)', 'Xung quanh: ' + p.layer, 'Prompt 3.2']) +
        `<div class="serif" style="position:absolute;left:0;right:0;bottom:120px;text-align:center;font-size:92px">Add a layer for cooler evenings</div>`, CREAM);
    case '05':
      return base(tag + frame(120, 140, 1100, 1720, 'CẬN VẢI – ẢNH MACRO THẬT', ['Thấy rõ sợi vải, đường may', 'SP2: thêm ảnh lật lót, soi độ xuyên']) +
        `<div style="position:absolute;left:1300px;top:420px;width:640px">
          <div class="serif" style="font-size:72px;margin-bottom:70px">Up close:<br>the fabric</div>
          ${p.callouts.map(c => `<div style="font-size:52px;padding:34px 0;border-top:3px solid ${LINE}">${c}</div>`).join('')}
        </div>`);
    case '06':
      return base(tag + [0, 1, 2].map(i =>
        frame(90 + i * 620, 330, 580, 1150, 'ẢNH CẬN THẬT', [p.details[i]])).join('') +
        [0, 1, 2].map(i => `<div class="serif" style="position:absolute;left:${90 + i * 620}px;top:1540px;width:580px;text-align:center;font-size:58px">${p.details[i]}</div>`).join(''));
    case '07': {
      const head = `<tr>${['Size', ...p.cols].map(c => `<th>${c}</th>`).join('')}</tr>`;
      const rows = p.sizes.map(s => `<tr><td><b>${s}</b></td>${p.cols.map(() => '<td>__</td>').join('')}</tr>`).join('');
      return base(`<style>table{border-collapse:collapse;font-size:50px;width:100%}th{font-weight:normal;color:${MUTED};font-size:40px;letter-spacing:2px;padding:26px 10px;border-bottom:4px solid ${INK}}
        td{text-align:center;padding:34px 10px;border-bottom:2px solid ${LINE}}</style>
        <div class="serif" style="position:absolute;left:120px;top:150px;font-size:96px">Size Guide <span style="font-size:60px;color:${MUTED}">(inches)</span></div>
        <div style="position:absolute;left:120px;top:560px;width:1150px"><table>${head}${rows}</table>
          <div style="font-size:44px;margin-top:70px;color:${MUTED}">Model is __ ft __ in and wears size __.</div></div>
        <div style="position:absolute;left:1370px;top:500px;width:520px;height:1150px">${silhouette(p.shape, p.accent)}</div>`);
    }
    case '08':
      return base(tag + frame(0, 0, 2000, 2000, 'ẢNH THẬT – KHÔNG DÙNG AI',
        ['Chụp dưới ánh sáng ngày, không chỉnh màu', 'Mặt trước, mặt sau và mặt bên', 'Để khách đối chiếu màu và độ dài thật']));
    case '09':
      return base(`<div style="position:absolute;left:-200px;top:-200px;width:900px;height:900px">${floral(p.accent, 0.12)}</div>
        <div style="position:absolute;right:-250px;bottom:-250px;width:1100px;height:1100px">${floral(p.accent, 0.12)}</div>
        <div style="position:absolute;left:0;right:0;top:720px;text-align:center">
          <div class="serif" style="font-size:210px;letter-spacing:40px">SIXDO</div>
          <div style="width:160px;height:4px;background:${INK};margin:70px auto"></div>
          <div class="serif" style="font-size:78px">Runway-designed florals from Vietnam</div>
          <div style="font-size:48px;color:${MUTED};margin-top:50px;letter-spacing:2px">From a brand shown at New York Fashion Week</div>
        </div>`, CREAM);
  }
}

const SLOTS = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];
const LABELS = { '01': 'Main', '02': 'Occasion 1', '03': 'Occasion 2', '04': 'Layer it', '05': 'Fabric',
  '06': 'Details', '07': 'Size chart', '08': 'True-to-life', '09': 'Brand' };

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 2000, height: 2000 } });
  for (const p of PRODUCTS) {
    const dir = path.join(OUT, p.id);
    fs.mkdirSync(dir, { recursive: true });
    for (const n of SLOTS) {
      await page.setContent(slot(p, n), { waitUntil: 'load' });
      await page.screenshot({ path: path.join(dir, `${p.id}_${n}_${LABELS[n].replace(/\W+/g, '-')}.png`) });
    }
    // Storyboard: 3x3 grid, AI samples where available, otherwise the rendered template
    const cells = SLOTS.map(n => {
      const img = p.ai[n] ? path.join(AI, p.ai[n]) : path.join(dir, `${p.id}_${n}_${LABELS[n].replace(/\W+/g, '-')}.png`);
      const src = 'data:image/' + (img.endsWith('.png') ? 'png' : 'jpeg') + ';base64,' + fs.readFileSync(img).toString('base64');
      const badge = p.ai[n] ? `<div style="position:absolute;right:10px;top:10px;background:${INK};color:#fff;font-size:22px;padding:6px 12px">Canva AI</div>` : '';
      return `<div style="position:relative;border:2px solid ${LINE};background:#fff">
        <img src="${src}" style="width:100%;height:560px;object-fit:cover;display:block">${badge}
        <div style="padding:14px 18px;font-size:30px"><b>${n}</b> · ${LABELS[n]}</div></div>`;
    }).join('');
    const board = base(`<style>body{height:auto!important}</style><div style="padding:60px 70px 70px">
      <div class="serif" style="font-size:64px">${p.id} · ${p.name}</div>
      <div style="font-size:30px;color:${MUTED};margin:14px 0 36px">${p.fabric} · ${p.colorway} · Bộ 9 ảnh listing Amazon</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:28px">${cells}</div></div>`, CREAM);
    await page.setContent(board, { waitUntil: 'load' });
    await page.screenshot({ path: path.join(OUT, `${p.id}_storyboard.png`), fullPage: true });
    await page.setViewportSize({ width: 2000, height: 2000 });
  }
  await browser.close();
  console.log('done');
})();
