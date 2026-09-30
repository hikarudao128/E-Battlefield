import openpyxl, shutil, random
from pycel import ExcelCompiler
src='../SIXDO_YeuCau06_Dashboard.xlsx'; t='/tmp/claude-0/-home-user-E-Battlefield/7eab49a9-51ee-5643-93da-96f35848f6cb/scratchpad/test_dash.xlsx'
wb=openpyxl.load_workbook(src); nl=wb['NhapLieu']
random.seed(1)
# điền T10–T12 cho 5 SKU
for r in range(5,20):
    u=random.randint(1,4); sess=random.randint(20,40)
    vals={'C':1500,'D':8,'E':sess,'F':6,'G':2,'H':u,'I':u*40.0,'J':6,'K':30,'L':0 if r%3 else 1,'M':0,'N':4.4,'O':1,'P':u}
    for k,v in vals.items(): nl[f'{k}{r}']=v
wb.save(t)
xl=ExcelCompiler(filename=t)
errs=0
for sh in ['KeHoach','Dashboard','NhapLieu']:
    ws=wb[sh]
    for row in ws.iter_rows():
        for c in row:
            if isinstance(c.value,str) and c.value.startswith('='):
                try:
                    v=xl.evaluate(f'{sh}!{c.coordinate}')
                    if isinstance(v,str) and v.startswith('#'): errs+=1; print('ERR',sh,c.coordinate,v,c.value[:80])
                except Exception as e:
                    errs+=1; print('EXC',sh,c.coordinate,str(e)[:100],c.value[:80])
print('errors',errs)
for a in ['KeHoach!I12','KeHoach!C12','KeHoach!H14','KeHoach!I16','Dashboard!D3','Dashboard!C6','Dashboard!D6','Dashboard!E6','Dashboard!F6','Dashboard!C8','Dashboard!D8','Dashboard!C10','Dashboard!D10','Dashboard!C11','Dashboard!E21','Dashboard!J21','Dashboard!E25','Dashboard!J25','Dashboard!E26','Dashboard!E30','Dashboard!J30','Dashboard!E33','Dashboard!I21']:
    print(a, xl.evaluate(a))
