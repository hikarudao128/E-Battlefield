const path=require('path');
const {chromium}=require('/opt/node22/lib/node_modules/playwright');
(async()=>{
  const dir=__dirname;
  const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
  const p=await b.newPage({viewport:{width:1600,height:1000},deviceScaleFactor:2});
  await p.goto('file://'+path.join(dir,'sixdo_keyword_overview.html'));
  await p.evaluate(()=>document.fonts.ready);
  const info=await p.evaluate(()=>({h:document.body.scrollHeight,w:document.body.scrollWidth,
    rows:[...document.querySelectorAll('table')].map(t=>t.tBodies[0].rows.length),
    bars:[...document.querySelectorAll('rect[data-v]')].map(r=>[r.dataset.v,+r.getAttribute('x'),+r.getAttribute('width')]),
    clipped:[...document.querySelectorAll('td,th')].filter(e=>e.scrollWidth>e.clientWidth).map(e=>e.textContent)}));
  console.log(JSON.stringify(info));
  await p.screenshot({path:path.join(dir,'sixdo_keyword_overview.png'),clip:{x:0,y:0,width:1600,height:1000}});
  await b.close();
})();
