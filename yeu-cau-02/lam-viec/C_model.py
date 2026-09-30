# -*- coding: utf-8 -*-
"""
SIXDO - YC02 - Buoc 4/5/8/9: PPC, coupon, unit economics, tai chinh, phan bo 300 USD, KPI, tu kiem tra.
Chay: python3 C_model.py  -> in ra toan bo bang (markdown) + bang tu kiem tra.
Khi so units thay doi: chi sua khoi THAM SO ben duoi roi chay lai.
Nhan: tat ca gia dinh (🟡) nam trong khoi tham so.
"""
from datetime import date, timedelta
from collections import OrderedDict, defaultdict

# =====================================================================
# 1. THAM SO UNITS (nguon: out/A_muc-tieu_ton-kho_chuyen-doi.md, "So lieu ban giao")
# =====================================================================
SKUS = ["SP1", "SP2_xanh", "SP2_vang", "SP3_den", "SP3_hong"]
UNITS = {
    "Than trong": {"SP1": 11, "SP2_xanh": 9,  "SP2_vang": 10, "SP3_den": 12, "SP3_hong": 7},
    "Co so":      {"SP1": 16, "SP2_xanh": 13, "SP2_vang": 13, "SP3_den": 18, "SP3_hong": 11},
    "Muc tieu":   {"SP1": 20, "SP2_xanh": 20, "SP2_vang": 20, "SP3_den": 25, "SP3_hong": 25},
}
TOTALS = {"Than trong": 49, "Co so": 71, "Muc tieu": 110}
LEFT_A = {"Than trong": 61, "Co so": 39, "Muc tieu": 0}     # ton cuoi ky theo agent A
STOCK = {"SP1": 20, "SP2_xanh": 20, "SP2_vang": 20, "SP3_den": 25, "SP3_hong": 25}  # 🟡
GIFTS_MAX = 4   # hang tang toi da (Vine/creator), khong tinh la units ban

MONTHS = ["10/2026", "11/2026", "12/2026", "01/2027", "02/2027", "03/2027"]
MONTHLY_BASE = {   # units co so theo thang, tu agent A muc 1.6
    "SP1":      [1, 2, 1, 5, 4, 3],
    "SP2_xanh": [1, 1, 1, 5, 3, 2],
    "SP2_vang": [5, 4, 2, 1, 0, 1],
    "SP3_den":  [2, 5, 7, 2, 1, 1],
    "SP3_hong": [1, 1, 1, 2, 3, 3],
}
MONTH_TOTALS_A = [10, 13, 12, 15, 11, 10]
ORGANIC_SESS_A = [95, 120, 120, 115, 100, 105]   # session tu nhien co so theo thang (A)
OFFSITE_CLICK_A = [10, 20, 10, 25, 35, 20]       # click ngoai san co so theo thang (A)
CVR_SCEN = {"Than trong": 0.06, "Co so": 0.075, "Muc tieu": 0.09}   # CVR Amazon = CVR PPC (A)
CVR_OFF = {"Than trong": 0.03, "Co so": 0.04, "Muc tieu": 0.04}
OFF_CLICKS = {"Than trong": 80, "Co so": 120, "Muc tieu": 150}
ORG_SESS = {"Than trong": 546, "Co so": 655, "Muc tieu": 922}
PPC_CLICKS_A = {"SP1": 50, "SP2_xanh": 50, "SP2_vang": 50, "SP3_den": 61, "SP3_hong": 22}  # tong 233
CVR_BASELINE = 0.06

# =====================================================================
# 2. THAM SO GIA / CHI PHI
# =====================================================================
PRICE = {k: (25.99 if k.startswith("SP3") else 51.99) for k in SKUS}        # ✅
BASE_COST = {k: (10.0 if k.startswith("SP3") else 15.0) for k in SKUS}      # ✅
REFERRAL = 0.17        # ✅
RETURN_PROV = 0.08     # 🟡
FBA_EST = {k: (5.00 if k.startswith("SP3") else 6.00) for k in SKUS}        # 🟡 chi dung cho case C
MARKETING_FIXED = 400.0
CLEARANCE_MKT = 100.0

# =====================================================================
# 3. PPC
# =====================================================================
CPC = 0.90             # 🟡 SP1/SP2
CPC_SP3_CAP = 0.55     # 🟡 tran bid SP3 = CPC hoa von B o CVR 6% (0,57) lam tron xuong
CVR_PPC = {"6%": 0.06, "7,5%": 0.075, "9%": 0.09}
CAMPAIGNS = [
    ("1", "SP2vang-Auto-Fall",        "SP2_vang", "Auto (down only)",               1.00, date(2026,10,15), date(2026,10,27)),
    ("1", "SP2vang-Exact-Fall",       "SP2_vang", "Exact",                          1.00, date(2026,10,15), date(2026,11,15)),
    ("2", "SP3den-PT+Exact-Party",    "SP3_den",  "Product targeting + Exact dai, bid<=0,55", 1.00, date(2026,11,16), date(2026,12,19)),
    ("3", "SP1-Auto-Travel",          "SP1",      "Auto (down only)",               1.00, date(2027,1,1),   date(2027,1,14)),
    ("3", "SP1-Exact-Travel",         "SP1",      "Exact",                          1.00, date(2027,1,15),  date(2027,2,14)),
    ("3", "SP2xanh-Exact-Travel",     "SP2_xanh", "Exact",                          1.00, date(2027,1,1),   date(2027,2,14)),
    ("4", "SP3hong-PT+Exact-Easter",  "SP3_hong", "Product targeting + Exact dai, bid<=0,55", 1.00, date(2027,3,1), date(2027,3,12)),
]
MAX_CONCURRENT = 2

# =====================================================================
# 4. COUPON
# =====================================================================
COUPON_PCT = 0.10
COUPON_FIXED = 5.0     # ✅
COUPON_VAR = 0.025     # ✅
COUPON_SHARE = {"SP1": 0.30, "SP2_xanh": 0.40, "SP2_vang": 0.10, "SP3_den": 0.20, "SP3_hong": 0.40}  # 🟡
COUPONS = [
    ("Holiday Party",         ["SP3_den"],                     date(2026,12,20), date(2026,12,31)),
    ("Warm-Weather Getaway",  ["SP1", "SP2_xanh", "SP2_vang"], date(2027,1,5),   date(2027,2,5)),
    ("Pink Edit - Valentine", ["SP3_hong"],                    date(2027,2,1),   date(2027,2,14)),
    ("Pink Edit - Easter",    ["SP3_hong"],                    date(2027,3,13),  date(2027,3,28)),
]
HONG_SPLIT = 0.5

# =====================================================================
# 5. PHAN BO 300 USD
# =====================================================================
ALLOC = OrderedDict([("PPC Sponsored Products (co dinh)", 181.0),
                     ("PPC bo sung co dieu kien (SP1/SP2)", 29.0),
                     ("Phi coupon (tran)", 50.0),
                     ("A+ lam lai & cong cu AI", 20.0),
                     ("Du phong", 20.0)])
IN_BUDGET = 300.0
AI_MONTH = "10/2026"

# =====================================================================
# HAM TIEN ICH
# =====================================================================
def f(x, d=2):
    s = f"{x:,.{d}f}"
    return s.replace(",", "X").replace(".", ",").replace("X", ".")
def pct(x, d=1): return f(100*x, d) + "%"
def sg(x, d=0): return ("+" if x >= 0 else "") + f(x, d)
def days(a, b): return (b - a).days + 1
def month_key(d): return f"{d.month:02d}/{d.year}"
def daterange(a, b):
    d = a
    while d <= b:
        yield d; d += timedelta(days=1)
checks = []
def check(name, ok, detail=""):
    checks.append((name, "DAT" if ok else "LOI", detail))
def ref_rate(p): return 0.17 if p > 20 else (0.10 if p > 15 else 0.05)
def contrib_before_returns(sku, case, p):
    m = p - BASE_COST[sku]
    if case in ("B", "C"): m -= REFERRAL * p
    if case == "C": m -= FBA_EST[sku]
    return m
def unit_margin(sku, case, p):
    return contrib_before_returns(sku, case, p) - RETURN_PROV * p
def be_acos(sku, case, p=None):
    p = p or PRICE[sku]
    return unit_margin(sku, case, p) / p
def cpc_of(sku): return CPC_SP3_CAP if sku.startswith("SP3") else CPC

out = []; P = out.append
PPC_ALLOC = ALLOC["PPC Sponsored Products (co dinh)"]

# ---------------- 0. KIEM TRA UNITS ----------------
for sc, u in UNITS.items():
    s_ = sum(u.values())
    check(f"Units theo SKU = tong ({sc})", s_ == TOTALS[sc], f"{'+'.join(str(u[k]) for k in SKUS)} = {s_} / {TOTALS[sc]}")
    over = [k for k in SKUS if u[k] > STOCK[k]]
    check(f"Units SKU <= ton kho ({sc})", not over, "vuot: " + ",".join(over) if over else "ok")
    check(f"Ton cuoi ky = 110 - units ({sc})", sum(STOCK.values()) - s_ == LEFT_A[sc], f"{sum(STOCK.values()) - s_} / {LEFT_A[sc]}")
    # mo hinh nguon cua A: tu nhien + PPC + ngoai san
    implied = (ORG_SESS[sc] + sum(PPC_CLICKS_A.values())) * CVR_SCEN[sc] + OFF_CLICKS[sc] * CVR_OFF[sc]
    check(f"Mo hinh nguon A ~ tong units ({sc})", abs(implied - TOTALS[sc]) <= 1.5, f"{f(implied,1)} ~ {TOTALS[sc]}")
for k in SKUS:
    check(f"Units thang co so cong = units SKU ({k})", sum(MONTHLY_BASE[k]) == UNITS["Co so"][k], f"{sum(MONTHLY_BASE[k])} / {UNITS['Co so'][k]}")
for i, m in enumerate(MONTHS):
    check(f"Units thang co so theo SKU cong = tong thang A ({m})", sum(MONTHLY_BASE[k][i] for k in SKUS) == MONTH_TOTALS_A[i], f"{sum(MONTHLY_BASE[k][i] for k in SKUS)} / {MONTH_TOTALS_A[i]}")
check("Ton kho = 110", sum(STOCK.values()) == 110, str(sum(STOCK.values())))

# ---------------- 8.1 UNIT ECONOMICS ----------------
P("### Bang 8.1 - Unit economics (SP1 = SP2 xanh = SP2 vang; SP3 den = SP3 hong)\n")
P("| USD / unit | SP1/SP2 | SP3 |"); P("|---|---|---|")
rows = [("Gia ban", lambda k: PRICE[k]), ("Base cost", lambda k: -BASE_COST[k]),
 ("A. LN gop", lambda k: contrib_before_returns(k,"A",PRICE[k])), ("Referral 17%", lambda k: -REFERRAL*PRICE[k]),
 ("B. LN gop", lambda k: contrib_before_returns(k,"B",PRICE[k])), ("FBA uoc tinh (C)", lambda k: -FBA_EST[k]),
 ("C. LN gop", lambda k: contrib_before_returns(k,"C",PRICE[k])), ("Du phong hoan 8%", lambda k: -RETURN_PROV*PRICE[k]),
 ("LN sau hoan A", lambda k: unit_margin(k,"A",PRICE[k])), ("LN sau hoan B", lambda k: unit_margin(k,"B",PRICE[k])),
 ("LN sau hoan C", lambda k: unit_margin(k,"C",PRICE[k]))]
for n, fn in rows: P(f"| {n} | {f(fn('SP1'))} | {f(fn('SP3_den'))} |")
for c in "ABC": P(f"| ACoS hoa von {c} | {pct(be_acos('SP1',c))} | {pct(be_acos('SP3_den',c))} |")
for c in "AB": P(f"| ACoS hoa von {c} ngay coupon 10% | {pct(be_acos('SP1',c,PRICE['SP1']*(1-COUPON_PCT)))} | {pct(be_acos('SP3_den',c,PRICE['SP3_den']*(1-COUPON_PCT)))} |")
for lvl, cv in CVR_PPC.items():
    P(f"| CPC hoa von B @CVR {lvl} | {f(be_acos('SP1','B')*cv*PRICE['SP1'])} | {f(be_acos('SP3_den','B')*cv*PRICE['SP3_den'])} |")
    P(f"| CPC hoa von A @CVR {lvl} | {f(be_acos('SP1','A')*cv*PRICE['SP1'])} | {f(be_acos('SP3_den','A')*cv*PRICE['SP3_den'])} |")
P("")
P("### Bang 5.4 - Gia san\n"); P("| USD | SP1/SP2 | SP3 |"); P("|---|---|---|")
P(f"| Gia niem yet | {f(PRICE['SP1'])} | {f(PRICE['SP3_den'])} |")
P(f"| Gia coupon 10% | {f(PRICE['SP1']*0.9)} | {f(PRICE['SP3_den']*0.9)} |")
P(f"| Gia san chinh sach 85% | {f(PRICE['SP1']*0.85)} | {f(PRICE['SP3_den']*0.85)} |")
for c in "AB":
    P(f"| LN sau hoan tai gia san - {c} | {f(unit_margin('SP1',c,PRICE['SP1']*0.85))} | {f(unit_margin('SP3_den',c,PRICE['SP3_den']*0.85))} |")
for c in "AB":
    r = 0 if c == "A" else REFERRAL
    P(f"| Gia hoa von tuyet doi - {c} | {f(BASE_COST['SP1']/(1-r-RETURN_PROV))} | {f(BASE_COST['SP3_den']/(1-r-RETURN_PROV))} |")
P("")

# ---------------- 4. PPC ----------------
P("### Bang 4.1 - Lich PPC\n")
P("| Dot | Chien dich | SKU | Loai | USD/ngay | Thoi gian | Ngay | Chi toi da | CPC | Click |")
P("|---|---|---|---|---|---|---|---|---|---|")
tot_spend = tot_click = 0
spend_sku = defaultdict(float); click_sku = defaultdict(float); wave_spend = defaultdict(float)
spend_month = defaultdict(float); click_month = defaultdict(float)
click_month_sku = defaultdict(lambda: defaultdict(float)); active = defaultdict(list)
for w, name, sku, typ, usd, a, b in CAMPAIGNS:
    n = days(a, b); sp = usd*n; cl = sp/cpc_of(sku)
    tot_spend += sp; tot_click += cl; spend_sku[sku] += sp; click_sku[sku] += cl; wave_spend[w] += sp
    for d in daterange(a, b):
        active[d].append(name); spend_month[month_key(d)] += usd
        click_month[month_key(d)] += usd/cpc_of(sku); click_month_sku[month_key(d)][sku] += usd/cpc_of(sku)
    P(f"| {w} | {name} | {sku} | {typ} | {f(usd)} | {a:%d/%m}-{b:%d/%m} | {n} | {f(sp)} | {f(cpc_of(sku))} | {f(cl,1)} |")
P(f"| Tong | | | | | | | {f(tot_spend)} | | {f(tot_click,1)} |\n")
for w in sorted(wave_spend): P(f"- Dot {w}: {f(wave_spend[w])} USD")
P("")
check("PPC: toi da 2 chien dich cung luc", max(len(v) for v in active.values()) <= MAX_CONCURRENT, f"max = {max(len(v) for v in active.values())}")
check("PPC: tong chi = phan bo PPC co dinh", abs(tot_spend - PPC_ALLOC) < 1e-6, f"{f(tot_spend)} / {f(PPC_ALLOC)}")
check("PPC: tong click ~ 233 (A)", abs(tot_click - sum(PPC_CLICKS_A.values())) <= 1.0, f"{f(tot_click,1)} / {sum(PPC_CLICKS_A.values())}")
for k in SKUS:
    check(f"PPC: click SKU khop A ({k})", abs(click_sku[k] - PPC_CLICKS_A[k]) <= 1.0, f"{f(click_sku[k],1)} / {PPC_CLICKS_A[k]}")
check("PPC: tong theo thang = tong chien dich", abs(sum(spend_month.values()) - tot_spend) < 1e-6, f(sum(spend_month.values())))
check("PPC max (co dinh + bo sung) = 210 nhu A", abs(PPC_ALLOC + ALLOC["PPC bo sung co dieu kien (SP1/SP2)"] - 210) < 1e-9, f(PPC_ALLOC + ALLOC["PPC bo sung co dieu kien (SP1/SP2)"]))

P("### Bang 4.2 - ACoS du kien vs hoa von\n")
P("| SKU | Chi | CPC | Click | Units @6/7,5/9% | ACoS @6/7,5/9% | Hoa von A | Hoa von B |")
P("|---|---|---|---|---|---|---|---|")
tu = {l: 0 for l in CVR_PPC}
for k in SKUS:
    cp = cpc_of(k); cl = click_sku[k]
    us = [cl*cv for cv in CVR_PPC.values()]
    for l, cv in CVR_PPC.items(): tu[l] += cl*cv
    ac = [cp/(cv*PRICE[k]) for cv in CVR_PPC.values()]
    P(f"| {k} | {f(spend_sku[k])} | {f(cp)} | {f(cl,1)} | {' / '.join(f(x,1) for x in us)} | {' / '.join(pct(x) for x in ac)} | {pct(be_acos(k,'A'))} | {pct(be_acos(k,'B'))} |")
    check(f"ACoS @CVR 6% <= hoa von B ({k})", ac[0] <= be_acos(k,'B'), f"{pct(ac[0])} vs {pct(be_acos(k,'B'))}")
    for sc in UNITS:
        check(f"Units PPC @CVR kich ban <= units SKU ({k}, {sc})", cl*CVR_SCEN[sc] <= UNITS[sc][k], f"{f(cl*CVR_SCEN[sc],1)} <= {UNITS[sc][k]}")
P(f"| Tong | {f(tot_spend)} | | {f(tot_click,1)} | {' / '.join(f(v,1) for v in tu.values())} | | | |\n")

P("### Bang 4.3 - SP3: noi thang\n")
P("| | CVR 6% | CVR 7,5% | CVR 9% |"); P("|---|---|---|---|")
P("| ACoS SP3 @CPC 0,90 | " + " | ".join(pct(CPC/(cv*PRICE['SP3_den'])) for cv in CVR_PPC.values()) + " |")
P(f"| ACoS SP3 @tran bid {f(CPC_SP3_CAP)} | " + " | ".join(pct(CPC_SP3_CAP/(cv*PRICE['SP3_den'])) for cv in CVR_PPC.values()) + " |")
for c in "ABC":
    P(f"| LN/unit {c} sau PPC @CPC 0,90 | " + " | ".join(f(unit_margin('SP3_den',c,PRICE['SP3_den']) - CPC/cv) for cv in CVR_PPC.values()) + " |")
    P(f"| LN/unit {c} sau PPC @CPC {f(CPC_SP3_CAP)} | " + " | ".join(f(unit_margin('SP3_den',c,PRICE['SP3_den']) - CPC_SP3_CAP/cv) for cv in CVR_PPC.values()) + " |")
P("| LN/unit SP1/SP2 B sau PPC @CPC 0,90 | " + " | ".join(f(unit_margin('SP1','B',PRICE['SP1']) - CPC/cv) for cv in CVR_PPC.values()) + " |")
P("| ACoS SP1/SP2 @CPC 0,90 | " + " | ".join(pct(CPC/(cv*PRICE['SP1'])) for cv in CVR_PPC.values()) + " |")
P("")

# ---------------- 5. COUPON ----------------
def coupon_units(sc):
    u = UNITS[sc]; cu = {k: round(u[k]*COUPON_SHARE[k]) for k in SKUS}
    hv = round(cu["SP3_hong"]*HONG_SPLIT)
    res = OrderedDict()
    res["Holiday Party"] = {"SP3_den": cu["SP3_den"]}
    res["Warm-Weather Getaway"] = {"SP1": cu["SP1"], "SP2_xanh": cu["SP2_xanh"], "SP2_vang": cu["SP2_vang"]}
    res["Pink Edit - Valentine"] = {"SP3_hong": hv}
    res["Pink Edit - Easter"] = {"SP3_hong": cu["SP3_hong"] - hv}
    return res
def coupon_money(sc):
    r = OrderedDict()
    for name, d in coupon_units(sc).items():
        sales = sum(n*PRICE[k]*(1-COUPON_PCT) for k, n in d.items())
        disc = sum(n*PRICE[k]*COUPON_PCT for k, n in d.items())
        r[name] = (d, sales, COUPON_FIXED + COUPON_VAR*sales, disc)
    return r
for sc in UNITS:
    cm = coupon_money(sc)
    P(f"### Bang 5.2 - Coupon - {sc}\n")
    P("| Dot | Thoi gian | SKU | Units | Doanh so coupon | Phi Amazon | Tien giam cho khach |"); P("|---|---|---|---|---|---|---|")
    tf = td = tn = 0
    for (name, skus, a, b), (nm, (d, sales, fee, disc)) in zip(COUPONS, cm.items()):
        tf += fee; td += disc; tn += sum(d.values())
        P(f"| {name} | {a:%d/%m}-{b:%d/%m} | {', '.join(f'{k} {n}' for k,n in d.items())} | {sum(d.values())} | {f(sales)} | {f(fee)} | {f(disc)} |")
    P(f"| Tong | | | {tn} | | {f(tf)} | {f(td)} |\n")
    check(f"Phi coupon <= tran ({sc})", tf <= ALLOC["Phi coupon (tran)"] + 1e-9, f"{f(tf)} <= {f(ALLOC['Phi coupon (tran)'])}")
    for k in SKUS:
        used = sum(d.get(k, 0) for (d, *_) in cm.values())
        check(f"Units coupon <= units SKU ({k}, {sc})", used <= UNITS[sc][k], f"{used} <= {UNITS[sc][k]}")
for sku in ["SP3_den", "SP3_hong"]:
    pd_ = {d for (_, _, s_, _, _, a, b) in CAMPAIGNS if s_ == sku for d in daterange(a, b)}
    cd_ = {d for (_, sk, a, b) in COUPONS if sku in sk for d in daterange(a, b)}
    check(f"SP3 khong PPC + coupon cung ngay ({sku})", not (pd_ & cd_), f"{len(pd_ & cd_)} ngay chong")
for sku in ["SP1", "SP2_xanh"]:
    pc = PRICE[sku]*(1-COUPON_PCT); a_ = CPC/(0.06*pc); b_ = be_acos(sku, "B", pc)
    check(f"ACoS ngay coupon @CVR 6% <= hoa von B sau coupon ({sku})", a_ <= b_, f"{pct(a_)} vs {pct(b_)}")
check("Coupon <= 15%", COUPON_PCT <= 0.15, pct(COUPON_PCT, 0))

# ---------------- 8.2 TAI CHINH ----------------
def finance(sc, case):
    u = UNITS[sc]; cm = coupon_money(sc); cu = defaultdict(int)
    for (d, *_) in cm.values():
        for k, n in d.items(): cu[k] += n
    gross = sum(u[k]*PRICE[k] for k in SKUS); disc = sum(x[3] for x in cm.values()); rev = gross - disc
    contrib = sum((u[k]-cu[k])*unit_margin(k, case, PRICE[k]) + cu[k]*unit_margin(k, case, PRICE[k]*(1-COUPON_PCT)) for k in SKUS)
    return dict(gross=gross, disc=disc, rev=rev, contrib=contrib, after=contrib - MARKETING_FIXED,
                ratio=MARKETING_FIXED/rev, left=sum(STOCK.values()) - sum(u.values()), avg=rev/gross)
def clearance(case):
    c = rev = 0
    for k in SKUS:
        p = PRICE[k]*0.5; n = STOCK[k]; rev += n*p
        m = p - BASE_COST[k] - RETURN_PROV*p
        if case in ("B", "C"): m -= ref_rate(p)*p
        if case == "C": m -= FBA_EST[k]
        c += n*m
    return rev, c - CLEARANCE_MKT
F = {(sc, c): finance(sc, c) for sc in UNITS for c in "ABC"}
SC = list(UNITS)
P("### Bang 8.2 - Tai chinh\n")
P("| USD | " + " | ".join(f"{sc} ({TOTALS[sc]})" for sc in SC) + " |"); P("|---|---|---|---|")
P("| Doanh thu gia niem yet | " + " | ".join(f(F[(sc,'A')]['gross'],0) for sc in SC) + " |")
P("| Tien giam coupon | " + " | ".join('-'+f(F[(sc,'A')]['disc'],0) for sc in SC) + " |")
P("| Doanh thu thuc | " + " | ".join(f(F[(sc,'A')]['rev'],0) for sc in SC) + " |")
P("| Gia TB / niem yet | " + " | ".join(pct(F[(sc,'A')]['avg']) for sc in SC) + " |")
for c in "AB": P(f"| LN gop truoc marketing {c} | " + " | ".join(f(F[(sc,c)]['contrib'],0) for sc in SC) + " |")
for c in "ABC": P(f"| LN gop sau marketing {c} | " + " | ".join(sg(F[(sc,c)]['after']) for sc in SC) + " |")
P("| Marketing / doanh thu thuc | " + " | ".join(pct(F[(sc,'A')]['ratio']) for sc in SC) + " |")
P("| Units con lai | " + " | ".join(str(F[(sc,'A')]['left']) for sc in SC) + " |")
gift_cost = 2*BASE_COST["SP1"] + 2*BASE_COST["SP3_den"]
P(f"\nChi phi hang tang toi da {GIFTS_MAX} units (2 SP1 + 2 SP3, theo base cost): {f(gift_cost)} USD\n")
cr = {c: clearance(c) for c in "ABC"}
P("### Bang 8.3 - So voi xa gia 50%\n")
P("| USD | Xa gia | Than trong | Co so |"); P("|---|---|---|---|")
P(f"| Doanh thu | {f(cr['A'][0],0)} | {f(F[('Than trong','A')]['rev'],0)} | {f(F[('Co so','A')]['rev'],0)} |")
for c in "ABC":
    P(f"| LN sau marketing {c} | {sg(cr[c][1])} | {sg(F[('Than trong',c)]['after'])} | {sg(F[('Co so',c)]['after'])} |")
for c in "AB":
    P(f"| Boi so co so / xa gia {c} | | {f(F[('Than trong',c)]['after']/cr[c][1],2)}x | {f(F[('Co so',c)]['after']/cr[c][1],2)}x |")
    check(f"Ke hoach than trong > xa gia ({c})", F[('Than trong',c)]['after'] > cr[c][1], f"{f(F[('Than trong',c)]['after'],0)} vs {f(cr[c][1],0)}")
P("")

# ---------------- 9.1 PHAN BO 300 ----------------
check("Phan bo 300: hang muc cong = 300", abs(sum(ALLOC.values()) - IN_BUDGET) < 1e-9, f(sum(ALLOC.values())))
cmb = coupon_money("Co so"); fee_month = defaultdict(float)
for (name, sk, a, b), (nm, (d, sales, fee, disc)) in zip(COUPONS, cmb.items()):
    for dd in daterange(a, b): fee_month[month_key(dd)] += fee/days(a, b)
headroom = ALLOC["Phi coupon (tran)"] - sum(fee_month.values())
P("### Bang 9.1 - 300 USD theo thang (co so)\n")
P("| USD | " + " | ".join(MONTHS) + " | Chua gan thang | Tong |"); P("|---|" + "---|"*(len(MONTHS)+2))
rp = [spend_month.get(m, 0) for m in MONTHS]; rf = [fee_month.get(m, 0) for m in MONTHS]
ra = [ALLOC["A+ lam lai & cong cu AI"] if m == AI_MONTH else 0 for m in MONTHS]
extra = ALLOC["PPC bo sung co dieu kien (SP1/SP2)"]
P("| PPC co dinh | " + " | ".join(f(x) for x in rp) + f" | 0,00 | {f(sum(rp))} |")
P("| PPC bo sung co dieu kien | " + " | ".join("0,00" for _ in MONTHS) + f" | {f(extra)} | {f(extra)} |")
P("| Phi coupon | " + " | ".join(f(x) for x in rf) + f" | {f(headroom)} | {f(ALLOC['Phi coupon (tran)'])} |")
P("| A+ & AI | " + " | ".join(f(x) for x in ra) + f" | 0,00 | {f(sum(ra))} |")
P("| Du phong | " + " | ".join("0,00" for _ in MONTHS) + f" | {f(ALLOC['Du phong'])} | {f(ALLOC['Du phong'])} |")
col = [rp[i]+rf[i]+ra[i] for i in range(len(MONTHS))]; un = extra + headroom + ALLOC["Du phong"]
grand = sum(col) + un
P("| Tong | " + " | ".join(f(x) for x in col) + f" | {f(un)} | {f(grand)} |\n")
check("Bang thang: tong = 300", abs(grand - IN_BUDGET) < 1e-6, f(grand))

# ---------------- 9.2 KPI ----------------
P("### Bang 9.2 - KPI theo thang (co so)\n")
P("| Thang | Units A | Session tu nhien A | Click PPC (C) | Click PPC (A) | Click ngoai san A | Units ngam dinh @7,5%/4% | Chi PPC | ACoS @6-9% |")
P("|---|---|---|---|---|---|---|---|---|")
A_PPC_MONTH = [27, 43, 41, 69, 31, 22]
ti = 0
for i, m in enumerate(MONTHS):
    cl = click_month.get(m, 0); sp = spend_month.get(m, 0)
    implied = (ORGANIC_SESS_A[i] + cl)*CVR_SCEN["Co so"] + OFFSITE_CLICK_A[i]*CVR_OFF["Co so"]; ti += implied
    if cl:
        hi = sum(click_month_sku[m][k]*0.09*PRICE[k] for k in SKUS); lo = sum(click_month_sku[m][k]*0.06*PRICE[k] for k in SKUS)
        ac = f"{pct(sp/hi,0)}-{pct(sp/lo,0)}"
    else: ac = "-"
    P(f"| {m} | {MONTH_TOTALS_A[i]} | {ORGANIC_SESS_A[i]} | {f(cl,1)} | {A_PPC_MONTH[i]} | {OFFSITE_CLICK_A[i]} | {f(implied,1)} | {f(sp)} | {ac} |")
P(f"| Tong | {sum(MONTH_TOTALS_A)} | {sum(ORGANIC_SESS_A)} | {f(tot_click,1)} | {sum(A_PPC_MONTH)} | {sum(OFFSITE_CLICK_A)} | {f(ti,1)} | {f(tot_spend)} | |\n")
check("KPI: tong units thang = 71", sum(MONTH_TOTALS_A) == TOTALS["Co so"], str(sum(MONTH_TOTALS_A)))
check("KPI: units ngam dinh theo lich PPC cua C ~ 71", abs(ti - TOTALS["Co so"]) <= 1.5, f(ti,1))
check("Muc tieu CVR = 1,5 x baseline", abs(CVR_SCEN["Muc tieu"] - 1.5*CVR_BASELINE) < 1e-9, f"{pct(CVR_SCEN['Muc tieu'])} = 1,5 x {pct(CVR_BASELINE)}")

# ---------------- TU KIEM TRA ----------------
P("### Bang tu kiem tra\n"); P("| # | Kiem tra | KQ | Chi tiet |"); P("|---|---|---|---|")
for i, (n, r, d) in enumerate(checks, 1): P(f"| {i} | {n} | {r} | {d} |")
P(f"\nTong: {sum(1 for c in checks if c[1]=='DAT')}/{len(checks)} DAT")
print("\n".join(out))
