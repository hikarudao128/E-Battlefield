const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  for (const [f, o] of [['kpi_tree.html', 'anh/cay_kpi.png'], ['dashboard_mau.html', 'anh/dashboard_mau.png']]) {
    const p = await b.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1.5 });
    await p.goto('file://' + __dirname + '/' + f); await p.waitForTimeout(300);
    const h = await p.evaluate(() => document.querySelector('.wrap').getBoundingClientRect().height);
    await p.setViewportSize({ width: 1600, height: Math.ceil(h) });
    await p.screenshot({ path: o, fullPage: true });
  }
  await b.close();
})();
