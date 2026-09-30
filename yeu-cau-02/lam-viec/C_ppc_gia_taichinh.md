# YC02 – Phần C: PPC · Giá, Coupon, Bundle · Tài chính · Phân bổ 300 USD, lịch, KPI

> Mọi con số trong phần này được tính bằng `out/C_model.py`. Units và giả định traffic nằm ở khối tham số đầu file, lấy từ `out/A_muc-tieu_ton-kho_chuyen-doi.md` (mục "Số liệu bàn giao"). Nếu mô hình đơn hàng đổi số, chỉ cần sửa khối tham số, chạy lại script rồi thay các bảng.
>
> Nhãn: ✅ đã xác nhận (đề bài hoặc nguồn có link) · 🟡 giả định · 🔴 giả thuyết cần kiểm chứng.

**Units dùng trong phần này** (SP1 / SP2 xanh / SP2 vàng / SP3 đen / SP3 hồng):

| Kịch bản | Units theo SKU | Tổng | Tồn cuối kỳ (giữ giá) |
|---|---|---|---|
| Thận trọng | 11 / 9 / 10 / 12 / 7 | **49** | 61 |
| Cơ sở | 16 / 13 / 13 / 18 / 11 | **71** | 39 |
| Mục tiêu | 20 / 20 / 20 / 25 / 25 | **110** | 0 |

110 là mục tiêu, không phải dự báo.

**Giả định traffic (của A):**
- CVR PPC bằng CVR tự nhiên: 6% / 7,5% / 9%.
- PPC 233 click.
- Click ngoài sàn 80 / 120 / 150, chuyển đổi 3% / 4% / 4%.
- Tối đa 4 units hàng tặng, không tính là units bán.

**Công thức dùng thống nhất:**
- Units = Session × Unit Session %
- ACoS = CPC ÷ (CVR × giá)
- ACoS hòa vốn = (lợi nhuận góp − dự phòng hoàn 8% giá) ÷ giá
- CPC hòa vốn = ACoS hòa vốn × CVR × giá

Bước 8 (unit economics) được trình bày trước vì mọi quyết định PPC và coupon đều phải so với ACoS hòa vốn.

---

## Bước 8. Tài chính

**Nói đơn giản:**
- Mỗi chiếc SP1/SP2 còn lãi 24–33 USD sau phí và dự phòng hoàn hàng, nên chịu được quảng cáo.
- Mỗi chiếc SP3 chỉ còn 9–14 USD, nên **quảng cáo SP3 ở CPC 0,90 là lỗ**.
- Cả 3 kịch bản đều lãi hơn xả giá 50%. Riêng kịch bản thận trọng còn giữ lại được 61 chiếc nguyên giá để bán tiếp mùa Xuân/Hè 2027.

### 8.1. Unit economics theo SKU

SP1, SP2 xanh và SP2 vàng có cùng giá và base cost. SP3 đen và SP3 hồng cũng vậy.

Đề bài ghi base cost = "FOB/EXW + phí nền tảng/FBA", nhưng không rõ đã gồm referral 17% chưa. Vì vậy tính 3 trường hợp:
- **A:** base cost đã gồm mọi phí.
- **B:** base cost chưa gồm referral 17%.
- **C (chỉ để kiểm tra sức chịu):** như B, và base cost cũng chưa gồm phí FBA. Nếu C đúng thì FOB ngầm định chỉ khoảng 9 USD (SP1/SP2) và 5 USD (SP3). Cần hỏi lại BTC.

| USD / unit | SP1 · SP2 xanh · SP2 vàng | SP3 đen · SP3 hồng |
|---|---|---|
| Giá bán ✅ | 51,99 | 25,99 |
| Base cost ✅ | −15,00 | −10,00 |
| **A. Lợi nhuận góp** | **36,99** | **15,99** |
| Referral 17% ✅ (chỉ ở B, C) | −8,84 | −4,42 |
| **B. Lợi nhuận góp** | **28,15** | **11,57** |
| Phí FBA 2026 quần áo, ước tính 🟡 (chỉ ở C) | −6,00 | −5,00 |
| C. Lợi nhuận góp | 22,15 | 6,57 |
| Dự phòng hoàn 8% giá 🟡 | −4,16 | −2,08 |
| Lợi nhuận góp sau dự phòng hoàn – A / B / C | 32,83 / 23,99 / 17,99 | 13,91 / 9,49 / 4,49 |
| **ACoS hòa vốn – A** | **63,1%** | **53,5%** |
| **ACoS hòa vốn – B** | **46,1%** | **36,5%** |
| ACoS hòa vốn – C | 34,6% | 17,3% |
| ACoS hòa vốn khi có coupon 10% – A / B | 59,9% / 42,9% | 49,2% / 32,2% |
| **CPC hòa vốn B** @CVR 6% / 7,5% / 9% | **1,44 / 1,80 / 2,16** | **0,57 / 0,71 / 0,85** |
| CPC hòa vốn A @CVR 6% / 7,5% / 9% | 1,97 / 2,46 / 2,95 | 0,83 / 1,04 / 1,25 |

**Phí FBA 🟡:**
- Năm 2026, quần áo có biểu phí riêng, cao hơn hàng thường khoảng 0,20–0,55 USD. Phí chia theo 3 mức giá (dưới 10, 10–50, trên 50 USD). Từ 17/04/2026 cộng thêm phụ phí nhiên liệu 3,5%.
- Ví dụ công khai: một món quần áo large standard 1,5 lb, giá 10–50 USD, trả phí 6,04 USD.
- Ước tính cho SIXDO: SP1/SP2 (maxi, jumpsuit, khoảng 1–1,5 lb khi đóng gói) là 6,00 USD. SP3 (váy 2 dây, dưới 1 lb) là 5,00 USD.
- SP1/SP2 giá 51,99 USD thuộc mức "trên 50 USD", nên phí thực tế có thể thấp hơn.
- **Phải lấy số chính xác bằng Fee Preview hoặc Revenue Calculator cho từng ASIN con.**
- Nguồn: [ShipBob 2026](https://www.shipbob.com/blog/amazon-fba-fees/) · [AMZ Prep 2026](https://amzprep.com/amazon-fba-fees/) · [Seller Central – 2026 US FBA fee changes](https://sellercentral.amazon.com/help/hub/reference/external/GABBX6GZPA8MSZGW?locale=en-US).

### 8.2. Ba kịch bản × trường hợp A/B

**Giả định:**
- Coupon 10% theo đợt ở Bước 5.
- Tỷ lệ units bán trong đợt coupon 🟡 (suy từ units theo tháng của A): SP1 30%, SP2 xanh 40%, SP2 vàng 10%, SP3 đen 20%, SP3 hồng 40%.
- Dự phòng hoàn 8% giá thực thu.
- Marketing **400 USD cố định** (300 nội sàn + 100 ngoại sàn, đã gồm phí coupon), tính đủ ở cả 3 kịch bản.

| USD | Thận trọng (49) | **Cơ sở (71)** | Mục tiêu (110) |
|---|---|---|---|
| Doanh thu theo giá niêm yết | 2.054 | 2.937 | 4.419 |
| Tiền giảm coupon cho khách | −55 | −78 | −122 |
| **Doanh thu thực** | **1.999** | **2.859** | **4.297** |
| Giá bán trung bình / giá niêm yết | 97,3% | 97,3% | 97,2% |
| Lợi nhuận góp trước marketing – A | 1.199 | 1.711 | 2.553 |
| Lợi nhuận góp trước marketing – B | 859 | 1.224 | 1.823 |
| Marketing cố định (gồm phí coupon) | −400 | −400 | −400 |
| **Lợi nhuận góp sau marketing – A** | **+799** | **+1.311** | **+2.153** |
| **Lợi nhuận góp sau marketing – B** | **+459** | **+824** | **+1.423** |
| Kiểm tra sức chịu – C (trừ thêm FBA) | +184 | +427 | +813 |
| Tổng chi marketing / doanh thu thực | 20,0% | 14,0% | 9,3% |
| Units còn lại, bán tiếp Xuân/Hè 2027 (giữ giá) | 61 | 39 | 0 |

### 8.3. So với xả giá 50% toàn bộ 110 units

Giả định cho phương án xả giá: marketing 100 USD. SP3 bán 13 USD nên chịu referral 5%.

| USD | Xả giá 50% (110 units) | Kế hoạch – thận trọng | Kế hoạch – cơ sở |
|---|---|---|---|
| Doanh thu | 2.209 | 1.999 | 2.859 |
| Lợi nhuận góp sau marketing – A | +533 | +799 | +1.311 |
| Lợi nhuận góp sau marketing – B | +235 | +459 | +824 |
| Lợi nhuận góp sau marketing – C | −375 | +184 | +427 |
| Units còn lại | 0 | 61 | 39 |

- Kịch bản cơ sở lãi gấp **2,46 lần (A)** và **3,51 lần (B)** so với xả giá.
- Kịch bản thận trọng lãi gấp 1,50 lần (A) và 1,95 lần (B), và vẫn còn 61 chiếc giữ nguyên giá.
- Xả giá còn vi phạm ràng buộc giảm tối đa 15%, nên chỉ dùng làm mốc so sánh.

**Chưa tính:**
1. Thuế nhập khẩu và cước tới kho FBA (nếu base cost chưa gồm).
2. Phí lưu kho FBA hằng tháng (tháng 10–12 cao hơn) và phụ phí tồn kho lâu ngày của quần áo (từ ngày 271).
3. Phí xử lý hoàn hàng thực tế: mới có dự phòng 8%.
4. Brand Referral Bonus (không đưa vào dự báo).
5. Hàng tặng: tối đa 4 units (2 SP1 + 2 SP3), khoảng 50 USD theo base cost. Nếu tặng hết thì mục tiêu bán chỉ còn 106.
6. Công lao động của nhóm.
7. Doanh thu phụ thuộc giả định tồn kho 20/20/20/25/25.

**Tác động tới CVR / Traffic:** Unit economics đặt **trần chi cho mỗi click**. SP1/SP2 chịu được CPC tới 1,44 USD ngay cả ở CVR thấp nhất (6%, trường hợp B). SP3 chỉ chịu được 0,57 USD. Vì vậy traffic trả phí được dồn vào SP1/SP2. SP3 được đẩy bằng coupon theo dịp, tức là tác động vào CVR, thay vì mua click.

---

## Bước 4. PPC (chỉ Sponsored Products)

**Nói đơn giản:**
- Quảng cáo chạy 4 đợt, mỗi đợt tập trung vào một sản phẩm đang vào mùa, **không bao giờ quá 2 chiến dịch cùng lúc**.
- Tổng vẫn là **233 click** như mô hình đơn hàng.
- SP1/SP2 chạy ở CPC 0,90 và có lãi rõ.
- **SP3 ở CPC 0,90 thì lỗ** (ACoS 38,5–57,7% so với mức hòa vốn 36,5%). Vì vậy SP3 chỉ chạy với **trần bid 0,55 USD**. Cách này tiết kiệm 29 USD, và số tiền đó được giữ lại thành "PPC bổ sung có điều kiện" cho SP1/SP2.

### 4.1. Lịch PPC theo đợt

Chi tối đa = số chiến dịch × USD/ngày × số ngày. Ngân sách ngày tối thiểu 1 USD ✅. Mọi chiến dịch dùng bid **Dynamic – down only**.

| Đợt | Thời gian | SKU | Chiến dịch (loại) | Số chiến dịch × USD/ngày × số ngày | Chi tối đa (USD) | CPC | Click |
|---|---|---|---|---|---|---|---|
| 1 – Mùa thu | 15/10–15/11 | SP2 vàng | Auto 15–27/10 (tìm từ khóa) + Exact "long sleeve / fall maxi" 15/10–15/11 | 1 × 1 × 13 + 1 × 1 × 32 | **45** | 0,90 | 50,0 |
| 2 – Tiệc cuối năm | 16/11–19/12 | SP3 đen | 1 chiến dịch: Product targeting (ASIN váy tiệc 30–45 USD) + Exact dài, **bid ≤ 0,55** | 1 × 1 × 34 | **34** | 0,55 | 61,8 |
| 3 – Chuyến đi nơi ấm | 01/01–14/02 | SP1, SP2 xanh | SP1 Auto 01–14/01, sau đó SP1 Exact 15/01–14/02; SP2 xanh Exact "vacation / resort / cruise" 01/01–14/02 | 1 × 1 × 14 + 1 × 1 × 31 + 1 × 1 × 45 | **90** | 0,90 | 100,0 |
| 4 – Phục sinh | 01–12/03 | SP3 hồng | 1 chiến dịch: Product targeting + Exact dài ("pink easter dress"…), **bid ≤ 0,55** | 1 × 1 × 12 | **12** | 0,55 | 21,8 |
| **Tổng cố định** | | | **Tối đa 2 chiến dịch cùng lúc** (script kiểm tra theo từng ngày) | | **181** | | **233,6** |
| PPC bổ sung có điều kiện | Mở 15/11 hoặc 15/01 | SP1/SP2 | Tăng USD/ngày của chiến dịch Exact **đang chạy**, không mở chiến dịch mới | | tối đa **29** | 0,90 | tối đa +32 |

**So với lịch tạm tính của A:**
- Click theo SKU vẫn đúng: SP2 vàng 50 · SP3 đen 61,8 · SP1 50 · SP2 xanh 50 · SP3 hồng 21,8.
- Có 2 thay đổi. SP3 đen dừng PPC ngày 19/12 (thay vì 31/12) để chạy coupon 20–31/12. SP3 hồng chạy PPC 01–12/03 (thay vì 01–20/03) để chạy coupon Phục sinh 13–28/03.
- Click PPC theo tháng của phần này: 33 / 44 / 35 / 69 / 31 / 22. A dùng 27 / 43 / 41 / 69 / 31 / 22. Tổng như nhau, units ngầm định vẫn là 71,4.

**Các khoảng không chạy PPC:**
- 01–14/10: đang áp dụng listing mới.
- 20–31/12: SP3 đen chạy coupon.
- 15–28/02: nghỉ giữa hai đợt.
- 13–31/03: SP3 hồng chạy coupon.

**Quy tắc chồng lịch:** SP3 không bao giờ chạy PPC và coupon cùng ngày, vì ACoS hòa vốn B khi có coupon chỉ còn 32,2%. SP1/SP2 thì có chạy PPC trong đợt coupon Getaway: ACoS ở giá sau coupon là 32,1% (CVR 6%), vẫn thấp hơn mức hòa vốn 42,9%.

### 4.2. Click, units và ACoS dự kiến so với ACoS hòa vốn

- CPC 0,90 🟡. Benchmark quần áo 2026 là 0,72 USD ([Ad Badger](https://www.adbadger.com/blog/amazon-advertising-stats/)) đến 0,85–0,95 USD ([Keywords.am](https://keywords.am/blog/amazon-cpc-benchmarks/)).
- CVR PPC lấy bằng CVR của từng kịch bản (6% / 7,5% / 9%), đúng giả định của A.

| SKU | Chi PPC | CPC | Click | Units @6 / 7,5 / 9% | ACoS @6 / 7,5 / 9% | Hòa vốn A | Hòa vốn B |
|---|---|---|---|---|---|---|---|
| SP1 | 45 | 0,90 | 50,0 | 3,0 / 3,8 / 4,5 | 28,9% / 23,1% / 19,2% | 63,1% | 46,1% |
| SP2 xanh | 45 | 0,90 | 50,0 | 3,0 / 3,8 / 4,5 | 28,9% / 23,1% / 19,2% | 63,1% | 46,1% |
| SP2 vàng | 45 | 0,90 | 50,0 | 3,0 / 3,8 / 4,5 | 28,9% / 23,1% / 19,2% | 63,1% | 46,1% |
| SP3 đen | 34 | 0,55 | 61,8 | 3,7 / 4,6 / 5,6 | 35,3% / 28,2% / 23,5% | 53,5% | 36,5% |
| SP3 hồng | 12 | 0,55 | 21,8 | 1,3 / 1,6 / 2,0 | 35,3% / 28,2% / 23,5% | 53,5% | 36,5% |
| **Tổng** | **181** | | **233,6** | **14,0 / 17,5 / 21,0** | | | |

Units từ PPC (14 / 17,5 / 21) khớp với 14 / 17 / 21 trong mô hình của A. PPC chỉ chiếm khoảng 1/4 số units. Phần còn lại đến từ session tự nhiên và CVR.

### 4.3. Nói thẳng về SP3 (25,99 USD)

| | CVR 6% | CVR 7,5% | CVR 9% |
|---|---|---|---|
| ACoS SP3 ở CPC 0,90 (như lịch tạm tính) | **57,7%** | **46,2%** | **38,5%** |
| Lãi/unit – A, sau PPC, CPC 0,90 | −1,09 | +1,91 | +3,91 |
| **Lãi/unit – B, sau PPC, CPC 0,90** | **−5,51** | **−2,51** | **−0,51** |
| ACoS SP3 ở trần bid 0,55 | 35,3% | 28,2% | 23,5% |
| Lãi/unit – B, sau PPC, bid 0,55 | +0,33 | +2,16 | +3,38 |
| Lãi/unit – C, sau PPC, bid 0,55 | −4,67 | −2,84 | −1,62 |
| *So sánh: SP1/SP2, lãi/unit – B, sau PPC, CPC 0,90* | *+8,99* | *+11,99* | *+13,99* |

**Kết luận:** Ở CPC 0,90, SP3 lỗ ở cả 3 mức CVR trong trường hợp B, và lỗ cả trong trường hợp A khi CVR 6%.

**Quyết định cho SP3:**
1. **Không chạy từ khóa rộng** ("black dress", "party dress", "pink dress").
2. Chỉ chạy Product targeting nhắm ASIN váy tiệc/váy hồng giá **30–45 USD**, để SP3 trông rẻ hơn ngay trên trang đối thủ, cùng vài Exact dài. **Trần bid 0,55** (CPC hòa vốn B ở CVR 6% là 0,57).
3. Nếu ở bid 0,55 mà không có impression: nhận ít click hơn, **không tăng bid**. SP3 khi đó chủ yếu dựa vào coupon theo dịp và bán kèm (Bước 5).
4. **Điểm dừng:** sau 40 click, nếu ACoS > 36,5% thì dừng PPC SP3 và chuyển tiền còn lại vào dự phòng.
5. Nếu BTC xác nhận trường hợp C (base cost chưa gồm cả referral lẫn FBA), **SP3 không chạy PPC**. 46 USD của SP3 chuyển sang SP1/SP2.

### 4.4. Quy tắc tối ưu hằng tuần (mỗi thứ Hai, khoảng 30 phút)

Số liệu PPC có độ trễ attribution khoảng 7 ngày, nên quyết định dựa trên dữ liệu **7 ngày trở lên**.

| Việc | Ngưỡng | Hành động |
|---|---|---|
| Harvest Auto → Exact | Search term có ≥ 1 đơn **và** ACoS ≤ hòa vốn B | Thêm vào Exact (bid = CPC thực tế); thêm **negative exact** vào Auto |
| Negative | ≥ 15 click, 0 đơn (≈ 13,5 USD với SP1/SP2, ≈ 8 USD với SP3) | Negative exact. Từ không liên quan (kids, men, coat, sweater, maternity…) thì negative phrase ngay |
| Giảm bid | ACoS 14 ngày > hòa vốn B | −15% bid |
| Tăng bid | ACoS < 50% hòa vốn B **và** < 150 impression/tuần | +10% bid. SP1/SP2 không vượt 1,44; SP3 không vượt 0,55 |
| CTR thấp | CTR quảng cáo < 0,2% sau 7 ngày | Không tăng bid. Kiểm tra ảnh chính, giá, độ khớp từ khóa |
| Hết size | ASIN con còn ≤ 1 unit | **Tạm dừng quảng cáo ASIN con đó**; loại khỏi coupon/bundle |
| Cuối đợt | Ngày cuối đợt | Ghi 5 search term ra đơn tốt nhất vào bảng từ khóa cho đợt sau |

**Tác động tới CVR / Traffic:**
- **Traffic:** PPC mang lại 233 click trả phí (khoảng 23% trong 1.008 lượt truy cập của kịch bản cơ sở), tập trung vào từ khóa dịp mới (fall, holiday party, vacation, Easter).
- **Traffic tự nhiên:** search term report cho biết từ khóa nào thật sự ra đơn, để đưa vào title/bullet. Đây là cách tăng traffic tự nhiên có kiểm chứng.
- **CVR:** negative keyword và việc dừng biến thể hết size giúp CVR của quảng cáo không bị kéo xuống.

---

## Bước 5. Giá, Coupon, Bundle

**Nói đơn giản:** Giữ nguyên giá niêm yết. Mỗi dịp chạy một coupon 10%, có tên gắn với dịp đó, không bao giờ gọi là "sale". Chi phí coupon gồm 2 phần khác nhau:
- **Phí trả Amazon:** trừ vào 300 USD.
- **Tiền giảm cho khách:** làm giảm doanh thu.

### 5.1. Giá

- **Giá niêm yết giữ nguyên:** 51,99 USD (SP1, SP2) và 25,99 USD (SP3).
- **Coupon đề xuất 10%**, trần 15%.
- Mức 10% đủ để hiện nhãn coupon xanh trên trang kết quả tìm kiếm, giúp tăng CTR. Với SP2, mức này thu hẹp một phần khoảng cách giá với các maxi hoa khoảng 30 USD.

### 5.2. Coupon theo dịp

Phí ✅: **5 USD/coupon + 2,5% doanh số có dùng coupon** (áp dụng từ 06/2025, vẫn hiệu lực năm 2026). Một coupon có thể gắn nhiều ASIN. Nguồn: [SupplyKick](https://www.supplykick.com/blog/amazon-coupons-marketing-features) · [Seller Labs](https://www.sellerlabs.com/blog/amazon-coupon-fee-changes-2025/).

**Kịch bản cơ sở:**

| Đợt coupon 10% | Thời gian | SKU (units dùng coupon) | Units | Doanh số coupon | **Phí Amazon** (trừ vào 300) | **Tiền giảm cho khách** |
|---|---|---|---|---|---|---|
| Holiday Party | 20–31/12 | SP3 đen 4 | 4 | 93,56 | 7,34 | 10,40 |
| Warm-Weather Getaway | 05/01–05/02 | SP1 5 · SP2 xanh 5 · SP2 vàng 1 | 11 | 514,70 | 17,87 | 57,19 |
| Pink Edit – Valentine | 01–14/02 | SP3 hồng 2 | 2 | 46,78 | 6,17 | 5,20 |
| Pink Edit – Easter | 13–28/03 | SP3 hồng 2 | 2 | 46,78 | 6,17 | 5,20 |
| **Tổng cơ sở** | | | **19** | | **37,55** | **77,98** |

**Hai kịch bản còn lại:**

| Kịch bản | Units dùng coupon | Phí Amazon | Tiền giảm cho khách |
|---|---|---|---|
| Thận trọng | 13 | 32,28 | 54,59 |
| Mục tiêu | 31 | 47,49 | 122,17 |

- Phí coupon ở cả 3 kịch bản đều nằm trong **trần 50 USD**.
- Tên hiển thị gắn với dịp, ví dụ "Holiday Party Edit – save 10%", "Getaway Ready". Không dùng "sale" hay "clearance".
- **Không dùng:**
  - Prime Exclusive Discount: khoảng 100 USD mỗi đợt.
  - Lightning Deal: khoảng 70 USD mỗi ngày.
  - Coupon Black Friday riêng: xem câu hỏi phản biện số 3.

### 5.3. Bundle

**Phương án 1: Virtual Bundle** (ASIN bundle riêng, gồm 2–5 sản phẩm)
- **Điều kiện ✅:** cần Brand Registry (SIXDO đã có Brand Store) và tất cả thành phần phải có tồn kho FBA ở tình trạng mới. Nguồn: [My Amazon Guy](https://myamazonguy.com/fba/what-is-a-virtual-bundle-and-how-do-they-work-on-amazon/) · [Seller Essentials](https://selleressentials.com/amazon-virtual-bundles-guide/).
- **Chưa rõ 🔴:** các nguồn mâu thuẫn về việc ASIN bundle có chạy Sponsored Products được hay không.
- **Đề xuất:** tạo tối đa 2 bundle, **chỉ cho size còn nhiều hàng** (dựa trên báo cáo tồn kho ngày 05/10):
  - **"Getaway Duo":** SP1 + SP2 xanh cùng size, giá 93,58 USD (giảm 10%).
  - **"Two-Occasion Set":** SP3 đen + SP3 hồng, giá 46,78 USD (giảm 10%).
- Không đưa bundle vào PPC cho đến khi xác nhận được trong Seller Central.

**Phương án 2 (dự phòng): "Mua 2 giảm 10%"** (Percentage Off promotion)
- **Điều kiện:** từ 09/2025, promotion không dùng mã yêu cầu mua tối thiểu 2 units ([LandingCube](https://landingcube.com/amazon-seller-promotions/)).
- **Phí 🟡:** chưa thấy biểu phí coupon áp cho loại này. Cần xác minh trong Seller Central.
- **Đề xuất:** dùng nếu không tạo được Virtual Bundle. Không cho cộng dồn với coupon.

**Units bán qua bundle:**
- Được tính vào units của từng SKU, và giả định đã nằm trong tỷ lệ units giảm 10% ở mục 8.2.
- Mỗi 10 units SP1/SP2 bán qua bundle ngoài đợt coupon làm doanh thu giảm thêm 52 USD.

### 5.4. Giá sàn theo SKU

| USD | SP1 / SP2 | SP3 |
|---|---|---|
| Giá niêm yết (giữ nguyên) | 51,99 | 25,99 |
| Giá khi có coupon 10% | 46,79 | 23,39 |
| **Giá sàn chính sách (giảm tối đa 15%)** | **44,19** | **22,09** |
| Lợi nhuận góp sau dự phòng hoàn tại giá sàn – A / B | 25,66 / 18,14 | 10,32 / 6,57 |
| Giá hòa vốn tuyệt đối (chưa tính quảng cáo) – A / B | 16,30 / 20,00 | 10,87 / 13,33 |

- Giá sàn áp dụng là **giá sàn chính sách**. Đặt giá này làm "Minimum price" trong Seller Central để tránh nhập nhầm giá.
- Hàng chưa bán hết giữ nguyên giá, bán tiếp mùa Xuân/Hè 2027.

**Tác động tới CVR / Traffic:**
- **CVR:** coupon 10% gắn dịp tạo lý do mua ngay đúng lúc nhu cầu lên cao. Bundle và "Mua 2 giảm 10%" tăng số units trên mỗi đơn, mà Unit Session % tính theo units.
- **Traffic:** nhãn coupon trên trang kết quả tìm kiếm tăng CTR.
- **Giá:** giá bán trung bình vẫn giữ ở mức khoảng **97% giá niêm yết**.

---

## Bước 9. Phân bổ 300 USD, lịch triển khai, KPI

**Nói đơn giản:** 300 USD chia làm 5 phần:
- 181 USD PPC chạy cố định.
- 29 USD PPC bổ sung, chỉ mở khi quảng cáo đang có lãi.
- 50 USD phí coupon.
- 20 USD làm lại A+ bằng công cụ AI.
- 20 USD dự phòng.

Tiền dồn vào tháng 10 (mùa thu) và tháng 1 (chuyến đi nơi ấm). Mỗi tháng có bảng KPI để biết đang đi đúng hay lệch.

### 9.1. Phân bổ 300 USD nội sàn

| Hạng mục | USD | % | Ghi chú |
|---|---|---|---|
| PPC Sponsored Products (cố định) | 181 | 60,3% | 233,6 click, Bước 4 |
| PPC bổ sung có điều kiện | 29 | 9,7% | Chỉ SP1/SP2. Cộng với phần cố định bằng đúng 210 USD như giả định của A |
| Phí coupon (trần) | 50 | 16,7% | Dự kiến 32,28 / 37,55 / 47,49 theo 3 kịch bản |
| Làm lại A+ & công cụ AI | 20 | 6,7% | A+, Brand Story, Brand Store miễn phí khi có Brand Registry. 20 USD cho 1 tháng công cụ AI tạo/chỉnh ảnh 🟡 |
| Dự phòng | 20 | 6,7% | |
| **Tổng** | **300** | **100%** | |

**Theo tháng (kịch bản cơ sở):**

| USD | 10/2026 | 11/2026 | 12/2026 | 01/2027 | 02/2027 | 03/2027 | Chưa gán tháng | **Tổng** |
|---|---|---|---|---|---|---|---|---|
| PPC cố định | 30,00 | 30,00 | 19,00 | 62,00 | 28,00 | 12,00 | 0,00 | **181,00** |
| PPC bổ sung có điều kiện | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 | 29,00 | **29,00** |
| Phí coupon | 0,00 | 0,00 | 7,34 | 15,08 | 8,96 | 6,17 | 12,45 (phần trần chưa dùng) | **50,00** |
| A+ & công cụ AI | 20,00 | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 | **20,00** |
| Dự phòng | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 | 0,00 | 20,00 | **20,00** |
| **Tổng** | **50,00** | **30,00** | **26,34** | **77,08** | **36,96** | **18,17** | **61,45** | **300,00** |

Phí của đợt Getaway (05/01–05/02) được chia cho tháng 1 và tháng 2 theo số ngày.

**Quy tắc mở phần chưa gán tháng:**
- **15/11:** nếu SP2 vàng Exact có ACoS ≤ 25% và tiêu hết ngân sách ngày ≥ 5 ngày/tuần → mở tối đa 10 USD PPC bổ sung để kéo dài SP2 Exact tới 25/11 (Thanksgiving).
- **15/01:** nếu SP1/SP2 có ACoS ≤ 30% → mở tối đa 19 USD PPC bổ sung, tăng Exact từ 1,00 lên khoảng 1,50 USD/ngày.
- Phí coupon vượt dự kiến (bán tốt hơn) → lấy từ phần trần coupon chưa dùng trước, sau đó mới lấy dự phòng.
- Mọi lần điều chuyển phải giữ **tối đa 2 chiến dịch cùng lúc** và không vượt 300 USD.

**100 USD ngoại sàn** (chi tiết thuộc yêu cầu khác). Phần Amazon chỉ cần 3 việc:
1. Tạo **tag Amazon Attribution** (miễn phí) cho mọi link ngoài Amazon: Instagram, link-in-bio, creator.
2. Đăng ký **Brand Referral Bonus**, nhưng không đưa vào dự báo.
3. Trừ click ngoài sàn (120 ở kịch bản cơ sở) khỏi session tự nhiên để không đếm trùng.

### 9.2. Lịch A – Hoàn thiện bài thi (30/09–04/10/2026)

| Ngày | Việc | Đầu ra |
|---|---|---|
| 30/09 | Chốt units (A); chạy `C_model.py` | Bảng tài chính, PPC, coupon (84/84 phép kiểm tra đạt) |
| 01/10 | Nếu có quyền Seller Central: Fee Preview (FBA thật) và đối chiếu ASIN con. Điền số Helium 10 cho từ khóa Exact và ASIN mục tiêu cho SP3 | Cập nhật `FBA_EST`, danh sách Exact/ASIN |
| 02/10 | Ghép Phần C với listing, A+, từ khóa | Bản YC02 đầy đủ |
| 03/10 | Rà soát kiểu giám khảo, chạy lại script | Bản cuối |
| 04/10, trước 20:00 | Nộp bài | |

### 9.3. Lịch B – Vận hành (01/10/2026–31/03/2027)

| Giai đoạn | Thời gian | PPC | Coupon / Bundle | Mốc quyết định |
|---|---|---|---|---|
| 0. Baseline + áp dụng listing | 01–14/10 (áp dụng listing 05–14/10) | Không chạy | Tạo 2 Virtual Bundle (hoặc "Mua 2 giảm 10%") | 01/10: xuất Business Report 90 ngày (baseline) và tồn kho 22 biến thể. Chỉ bật PPC khi A+ đã được duyệt |
| 1. Mùa thu | 15/10–15/11 | Đợt 1 (SP2 vàng) | – | 15/11: theo quy tắc của A (lũy kế ≥ 16 units và CVR SP2 ≥ 1,25 × baseline); cân nhắc mở PPC bổ sung |
| 2. Tiệc cuối năm | 16/11–31/12 | Đợt 2 (SP3 đen, tới 19/12) | Holiday Party 20–31/12 | Sau 40 click SP3 đen: ACoS > 36,5% → dừng |
| 3. Chuyến đi nơi ấm | 01/01–14/02 | Đợt 3 (SP1, SP2 xanh) | Getaway 05/01–05/02; Valentine 01–14/02 | 15/01: mở PPC bổ sung nếu ACoS ≤ 30% |
| 4. Mùa xuân | 15/02–31/03 | Đợt 4 (SP3 hồng, 01–12/03) | Easter 13–28/03 | 15/02: quy tắc riêng cho SP3 hồng (A). 31/03: tổng kết; units còn lại giữ giá cho Xuân/Hè 2027 |

### 9.4. KPI theo tháng (kịch bản cơ sở)

- Unit Session % cơ sở giả định 6% 🟡, lấy baseline thật ngày 01/10.
- CVR đo từ 01/11: cơ sở 7,5% (= 1,25 × baseline), mục tiêu 9% (= 1,5 × baseline).
- Session tự nhiên và click ngoài sàn lấy từ A. Click PPC theo lịch ở Bước 4.

| Tháng | Units | Session tự nhiên | Click PPC | Click ngoài sàn | Unit Session % (cơ sở → mục tiêu) | CTR QC 🟡 | ACoS dự kiến (CVR 6–9%) | Giá bán TB / niêm yết | % units từ từ khóa dịp mới 🟡 | Rating | Tỷ lệ hoàn |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 10/2026 | 10 | 95 | 33 | 10 | ghi nhận baseline | ≥ 0,30% | 19–29% | ≥ 95% | ≥ 20% | ≥ 4,3 | < 20% |
| 11/2026 | 13 | 120 | 44 | 20 | 7,5% → 9% | ≥ 0,35% | 21–32% | ≥ 95% | ≥ 30% | ≥ 4,3 | < 20% |
| 12/2026 | 12 | 120 | 35 | 10 | 7,5% → 9% | ≥ 0,35% | 24–35% | ≥ 95% | ≥ 40% | ≥ 4,3 | < 20% |
| 01/2027 | 15 | 115 | 69 | 25 | 7,5% → 9% | ≥ 0,35% | 19–29% | ≥ 95% | ≥ 40% | ≥ 4,3 | < 20% |
| 02/2027 | 11 | 100 | 31 | 35 | 7,5% → 9% | ≥ 0,35% | 19–29% | ≥ 95% | ≥ 50% | ≥ 4,3 | < 20% |
| 03/2027 | 10 | 105 | 22 | 20 | 7,5% → 9% | ≥ 0,35% | 24–35% | ≥ 95% | ≥ 50% | ≥ 4,3 | < 20% |
| **Tổng** | **71** | **655** | **234** | **120** | | | Trần = hòa vốn B theo SKU | 97,3% (mô hình) | | | |

- **Kiểm tra units:** (655 + 233,6) × 7,5% + 120 × 4% = **71,4**, khớp 71.
- **Nguồn đo:**
  - Session và Unit Session %: Business Report theo ASIN con.
  - CTR và ACoS: Advertising Console.
  - % units từ từ khóa dịp mới: Search Query Performance (Brand Analytics) và search term report.
  - Tỷ lệ hoàn: FBA Customer Returns.
- Dự phòng hoàn 8% giá là **chi phí** trong tài chính, không phải tỷ lệ hoàn. KPI tỷ lệ hoàn < 20% theo đúng ngưỡng của A.

### 9.5. Ba rủi ro lớn nhất và phương án dự phòng

**1. CVR không tăng.** Listing vẫn lệch kỳ vọng, nhất là SP2: 5/8 review lệch về hình ảnh và chất liệu.
- **Dấu hiệu:** CVR SP2 < baseline vào 15/11, hoặc tỷ lệ hoàn SP2 > 25%.
- **Dự phòng:** dừng PPC SP2 và sửa ảnh thật, size chart, mô tả chất liệu trước. Không mở PPC bổ sung. Hạ dự báo về kịch bản thận trọng (49 units, vẫn lãi +459 USD ở trường hợp B).

**2. CPC Q4 cao hơn 0,90** (Black Friday, tiệc cuối năm).
- **Dấu hiệu:** CPC trung bình 7 ngày > 1,20 (SP1/SP2), hoặc SP3 không có impression ở bid 0,55.
- **Dự phòng:** ngân sách ngày cố định nên chi không vượt, chỉ nhận ít click hơn. Giữ trần bid theo CPC hòa vốn B (1,44 / 0,55). SP3: bỏ PPC và chạy coupon Holiday Party sớm hơn (từ 01/12).

**3. Hết size bán chạy hoặc tồn lệch màu** (khoảng 5 units mỗi biến thể; SP3 hồng cần tăng 123% session tự nhiên mới đạt mục tiêu).
- **Dấu hiệu:** biến thể còn ≤ 1 unit; SP3 hồng tới 15/02 bán < 4 units.
- **Dự phòng:** dừng quảng cáo ASIN con hết hàng, đẩy size còn nhiều bằng bundle. SP3 hồng dồn vào Valentine và Easter, không giảm quá 10–15%. Units còn lại giữ giá cho Xuân/Hè 2027.

### 9.6. Bảng tự kiểm tra (tính bằng `C_model.py`, không tính nhẩm) – 84/84 ĐẠT

| # | Phép kiểm tra | Kết quả | Chi tiết |
|---|---|---|---|
| 1 | Units SKU = tổng, thận trọng | ĐẠT | 11 + 9 + 10 + 12 + 7 = 49 |
| 2 | Units SKU = tổng, cơ sở | ĐẠT | 16 + 13 + 13 + 18 + 11 = 71 |
| 3 | Units SKU = tổng, mục tiêu | ĐẠT | 20 + 20 + 20 + 25 + 25 = 110 |
| 4 | Units SKU ≤ tồn kho; tồn cuối kỳ = 110 − units | ĐẠT | 61 / 39 / 0 |
| 5 | Mô hình nguồn (tự nhiên + PPC + ngoài sàn) ≈ tổng | ĐẠT | 49,1 / 71,4 / 110,0 |
| 6 | Units tháng theo SKU cộng = units SKU, và = tổng tháng | ĐẠT | 10 + 13 + 12 + 15 + 11 + 10 = 71 |
| 7 | Tối đa 2 chiến dịch cùng lúc (kiểm tra từng ngày) | ĐẠT | Tối đa = 2 |
| 8 | Tổng PPC cố định = phân bổ | ĐẠT | 45 + 34 + 90 + 12 = 181 |
| 9 | PPC cố định + bổ sung = 210 (như A) | ĐẠT | 181 + 29 = 210 |
| 10 | Click theo SKU khớp A (sai số ≤ 1) | ĐẠT | 50 / 50 / 50 / 61,8 / 21,8; tổng 233,6 |
| 11 | PPC theo tháng cộng = tổng | ĐẠT | 30 + 30 + 19 + 62 + 28 + 12 = 181 |
| 12 | ACoS @CVR 6% ≤ hòa vốn B – SP1/SP2 | ĐẠT | 28,9% ≤ 46,1% |
| 13 | ACoS @CVR 6% ≤ hòa vốn B – SP3 (bid 0,55) | ĐẠT | 35,3% ≤ 36,5% (sát ngưỡng → có điểm dừng) |
| 14 | ACoS ngày có coupon ≤ hòa vốn B sau coupon (SP1, SP2 xanh) | ĐẠT | 32,1% ≤ 42,9% |
| 15 | Units PPC ≤ units SKU (3 kịch bản × 5 SKU) | ĐẠT | Ví dụ SP2 xanh thận trọng 3,0 ≤ 9 |
| 16 | Phí coupon ≤ trần 50 | ĐẠT | 32,28 / 37,55 / 47,49 |
| 17 | Units coupon ≤ units SKU (3 × 5) | ĐẠT | Ví dụ SP3 hồng mục tiêu 10 ≤ 25 |
| 18 | SP3 không chạy PPC và coupon cùng ngày | ĐẠT | 0 ngày chồng (đen và hồng) |
| 19 | Coupon ≤ 15% | ĐẠT | 10% |
| 20 | Kế hoạch **thận trọng** vẫn lãi hơn xả giá (A, B) | ĐẠT | 799 > 533; 459 > 235 |
| 21 | 5 hạng mục cộng = 300 | ĐẠT | 181 + 29 + 50 + 20 + 20 = 300 |
| 22 | Bảng tháng cộng = 300 | ĐẠT | 50,00 + 30,00 + 26,34 + 77,08 + 36,96 + 18,17 + 61,45 = 300,00 |
| 23 | Units ngầm định theo lịch PPC mới ≈ 71 | ĐẠT | 71,4 |
| 24 | CVR mục tiêu = 1,5 × baseline | ĐẠT | 9,0% = 1,5 × 6,0% |

**Cảnh báo, không nằm trong danh sách ĐẠT:**
- Nếu vẫn giữ CPC 0,90 cho SP3 như lịch tạm tính, SP3 **không đạt** ACoS hòa vốn B ở cả 3 mức CVR (57,7 / 46,2 / 38,5% so với 36,5%).
- Ở trường hợp C, SP3 lỗ ngay cả với bid 0,55. Khi đó áp dụng mục 4.3, điểm 5.

### 9.7. Năm câu hỏi phản biện giám khảo có thể hỏi (phần Amazon)

**1. "1 USD/ngày thì đủ dữ liệu để tối ưu không?"**
Mỗi chiến dịch có khoảng 1,1 click/ngày (SP3 khoảng 1,8), tức 14–62 click mỗi chiến dịch. Mức này đủ cho quy tắc đơn giản (negative ở 15 click, harvest khi có ≥ 1 đơn), nhưng không đủ để tối ưu bid chi tiết. Vì vậy kế hoạch chỉ chạy 2 chiến dịch cùng lúc, có ngưỡng bằng số, và không dùng Broad, Phrase hay Sponsored Brands.

**2. "SP3 giá 25,99 USD chạy PPC có lỗ không?"**
Có, nếu CPC là 0,90: ACoS 38,5–57,7% cao hơn mức hòa vốn B 36,5%, lỗ 0,51–5,51 USD/unit. Vì vậy SP3 chỉ chạy nhắm ASIN với trần bid 0,55 (ACoS 23,5–35,3%) và có điểm dừng. Nếu base cost chưa gồm FBA thì không chạy PPC SP3.

**3. "Sao không chạy coupon Black Friday/Cyber Monday?"**
Trang kết quả dịp BFCM đầy deal sâu, coupon 10% khó nổi bật mà vẫn tốn 5 USD + 2,5%. Dịp đó dùng PPC SP3 đen (nhắm ASIN). Coupon SP3 đen để dành cho 20–31/12, khi khách mua đồ dự tiệc sát ngày. Nếu dữ liệu tháng 11 cho thấy cần, có thể dùng 20 USD dự phòng cho một coupon BFCM.

**4. "PPC chỉ ra 14–21 units, vậy 71 units còn lại đến từ đâu?"**
Khoảng 49 units đến từ 655 session tự nhiên × 7,5%, và 5 units từ ngoài sàn. Mức tăng session tự nhiên **chưa được xác nhận** 🔴. Các mốc 01/10, 15/11 và 15/02 dùng để kiểm tra. Nếu không đạt thì hạ về kịch bản thận trọng (49 units), vẫn lãi +459 USD ở trường hợp B.

**5. "Base cost có thể chưa gồm phí FBA. Kết luận có đổi không?"**
Kiểm tra sức chịu (C, trừ thêm 5–6 USD FBA/unit): kế hoạch vẫn lãi +184 / +427 / +813 USD, còn xả giá lỗ 375 USD. Kết luận "không xả giá" giữ nguyên. Chỉ thay đổi một điều: bỏ PPC cho SP3.

**Tác động tới CVR / Traffic:**
- **Tiền:** 260 USD (PPC cố định, PPC bổ sung, phí coupon) đi thẳng vào traffic đúng dịp và lý do mua ngay. 20 USD A+ tác động vào CVR qua ảnh thật, size chart và chất liệu.
- **Đo lường:** KPI Unit Session % theo ASIN con buộc mọi đồng chi phải đi kèm cải thiện CVR (6% → 7,5% cơ sở, → 9% mục tiêu). Chỉ số "% units từ từ khóa dịp mới" đo trực tiếp việc tái định vị có kéo được traffic mùa Thu/Đông hay không.

---

## Nguồn

- CPC quần áo 2026: [Ad Badger](https://www.adbadger.com/blog/amazon-advertising-stats/) · [Keywords.am](https://keywords.am/blog/amazon-cpc-benchmarks/)
- Phí coupon 5 USD + 2,5%: [SupplyKick](https://www.supplykick.com/blog/amazon-coupons-marketing-features) · [Seller Labs](https://www.sellerlabs.com/blog/amazon-coupon-fee-changes-2025/)
- Phí FBA 2026 (quần áo; phụ phí nhiên liệu 3,5% từ 17/04/2026): [ShipBob](https://www.shipbob.com/blog/amazon-fba-fees/) · [AMZ Prep](https://amzprep.com/amazon-fba-fees/) · [Seller Central – 2026 US FBA fulfillment fee changes](https://sellercentral.amazon.com/help/hub/reference/external/GABBX6GZPA8MSZGW?locale=en-US)
- Virtual Bundle: [My Amazon Guy](https://myamazonguy.com/fba/what-is-a-virtual-bundle-and-how-do-they-work-on-amazon/) · [Seller Essentials](https://selleressentials.com/amazon-virtual-bundles-guide/)
- Percentage Off (mua tối thiểu 2 units từ 09/2025): [LandingCube](https://landingcube.com/amazon-seller-promotions/)
- Referral 17%, ngân sách ngày tối thiểu 1 USD, Attribution, phụ phí tồn kho từ ngày 271: BRIEF mục 5.
- Units, session, CVR: `out/A_muc-tieu_ton-kho_chuyen-doi.md`.
