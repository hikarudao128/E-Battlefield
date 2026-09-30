"""Kế hoạch theo tháng cho hệ thống đo lường (YC06), tính từ tham số Yêu cầu 02.
Units = session Amazon × Unit Session % + click ngoài sàn × CVR ngoài sàn."""
import json
MONTHS = ['T10', 'T11', 'T12', 'T1', 'T2', 'T3']
STOCK = 110
BASELINE = 0.06                                   # [GĐ] YC02
PPC_CLICK = [33.3, 44.0, 34.5, 68.9, 31.1, 21.8]  # từ lịch PPC YC02 (bảng 4.1)
PPC_SPEND = [30, 30, 19, 62, 28, 12]              # YC02 mục 9
ORG = {'co_so': [95, 120, 120, 115, 100, 105]}    # YC02, tổng 655
ORG['muc_tieu'] = [round(x * 922 / 655) for x in ORG['co_so']]
OFF = {'co_so': [10, 20, 10, 25, 35, 20]}         # tổng 120
OFF['muc_tieu'] = [12, 25, 12, 31, 45, 25]        # tổng 150
CVR = {'co_so': [0.06, 0.065, 0.075, 0.075, 0.085, 0.09],   # tăng dần, bình quân ≈ 7,5%
       'muc_tieu': [0.09] * 6}
CVR_OFF = 0.04
SHARE_SP12 = [0.70, 0.54, 0.33, 0.73, 0.64, 0.60]  # tỷ trọng units SP1/SP2 theo tháng (YC02, mô hình A)
P12, P3 = 51.99, 25.99

def run(sc):
    rows, cum = [], 0
    for i, m in enumerate(MONTHS):
        org = ORG[sc][i]; ppc = PPC_CLICK[i]; off = OFF[sc][i]
        amz = org + ppc
        u = amz * CVR[sc][i] + off * CVR_OFF
        rows.append(dict(m=m, org=org, ppc=ppc, off=off, sess=amz + off, cvr=CVR[sc][i], units_raw=u))
    # làm tròn giữ đúng tổng
    tot = round(sum(r['units_raw'] for r in rows))
    fl = [int(r['units_raw']) for r in rows]
    rem = tot - sum(fl)
    order = sorted(range(6), key=lambda i: -(rows[i]['units_raw'] - fl[i]))
    for i in order[:rem]: fl[i] += 1
    for r, u in zip(rows, fl):
        cum += u
        i = MONTHS.index(r['m'])
        rev = u * (SHARE_SP12[i] * P12 + (1 - SHARE_SP12[i]) * P3)
        r.update(units=u, cum=cum, st=cum / STOCK, rev=rev, spend=PPC_SPEND[i])
    return rows, tot

out = {}
for sc in ('co_so', 'muc_tieu'):
    rows, tot = run(sc)
    out[sc] = rows
    print(sc, tot, [r['units'] for r in rows], [round(r['st']*100) for r in rows],
          round(sum(r['rev'] for r in rows)), round(sum(r['sess'] for r in rows)))
json.dump(out, open('plan.json', 'w'), ensure_ascii=False, indent=1)
