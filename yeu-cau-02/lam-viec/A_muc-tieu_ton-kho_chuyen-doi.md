# Yêu cầu 02 – Phần A: Mục tiêu và mô hình bán hàng (Bước 1) · Tồn kho (Bước 6) · Chuyển đổi (Bước 7)

Nhãn: ✅ đã xác nhận (đề bài hoặc nguồn công khai có link) · 🟡 giả định · 🔴 giả thuyết cần kiểm chứng.
Ngày lập: 30/09/2026. Kỳ kế hoạch: 01/10/2026 – 31/03/2027 (182 ngày) ✅.

**Một công thức cho toàn bài:** Units bán ra = Session × Unit Session %.
- Session tự nhiên = Tổng session trong Business Report − Click PPC − Click ngoài sàn (đo bằng Amazon Attribution). Không đếm một lượt truy cập hai lần.
- "CVR" trong bài = **Unit Session %** trên traffic từ Amazon (tự nhiên + PPC). Traffic ngoài sàn tính riêng vì thường chuyển đổi thấp hơn.
- "Uplift CVR 50%" = **CVR mục tiêu bằng 1,5 × CVR cơ sở** (6% → 9% nếu cơ sở là 6% 🟡), không phải cộng 50 điểm %.

---

## Bước 1. Mục tiêu và mô hình bán hàng

> **Nói đơn giản:** Nếu không làm gì, 3 listing chỉ bán được khoảng **33 units** trong 6 tháng. Kế hoạch dự kiến bán **71 units** (kịch bản cơ sở). **110 units là mục tiêu**, và chỉ đạt được khi cả CVR lẫn lượng khách tự nhiên cùng tăng mạnh. Mỗi SKU được bán theo một hướng nhu cầu, vào đúng tháng hướng đó có nhu cầu.

### 1.1 Đối chiếu sản phẩm × hướng nhu cầu

Thang điểm: 3 = khớp rõ, có bằng chứng · 2 = khớp một phần hoặc có điều kiện · 1 = yếu · 0 = không dùng. Điểm dựa trên thuộc tính trong đề bài, review do nhóm mã hóa, Google Trends Q4 index và Helium 10 (29/09/2026) của Phần 1–2 [N1].

| SKU (tồn 🟡) | (1) Dịp cụ thể: holiday, wedding guest, tiệc | (2) Phối nhiều bối cảnh: layering, versatility | (3) Chuyến đi đến nơi ấm: vacation, cruise, resort | Mùa thu: long sleeve |
|---|---|---|---|---|
| **SP1** Jumpsuit hoa, halter, không tay, cotton · 20 units | **2**. Có "dressy jumpsuits for women" 19,3K và "wedding guest jumpsuit" 1,8K. Hoa xanh lam nền trắng, không tay nên hợp tiệc ban ngày hoặc tiệc ở nơi ấm, không hợp tiệc đêm mùa đông | **1**. Jumpsuit halter khó phối lớp hơn váy. Chỉ phối được với blazer hoặc cardigan | **3**. Review duy nhất có nội dung nhắc brunch và vacation. Cotton, không tay. Vacation dress Trends Q4 = 42,9, nên đây là nhu cầu ngách | **0**. Không có tay |
| **SP2 xanh** Maxi voan hoa nhí · 20 units | **2**. "wedding guest dresses" 66,0K, "floral maxi dress" 8,3K. Bị trừ điểm vì 5/8 review lệch kỳ vọng | **2**. Phối được với áo denim hoặc boots, cần ảnh chứng minh | **3**. Voan nhẹ, hoa nhí, dáng maxi. "vacation dress" 16,5K | **2**, 🔴 chỉ khi tay dài được xác nhận. Màu xanh ít mang cảm giác mùa thu |
| **SP2 vàng** · 20 units | **2**. Như SP2 xanh | **2** | **2** | **3**, 🔴 có điều kiện. "long sleeve dress" 46,6K, Trends Q4 = 116,7, đỉnh Sep–Oct. Vàng mù tạt là màu mùa thu 🔴 |
| **SP3 đen** 2 dây, xếp tầng, trơn · 25 units | **3**. "holiday dress" Trends Q4 = 308,6, đỉnh tháng 11. Váy đen xòe hợp tiệc cuối năm | **3**. 5/8 review nhắc nhiều cách dùng, 4/8 nhắc phối lớp hoặc nhiều mùa. Màu đen dễ phối áo len cổ lọ, blazer, tất | **1** | **1**. Chỉ khi phối lớp, bản thân váy không có tay |
| **SP3 hồng** · 25 units | **2**. Valentine 14/02, Tết 06/02, Phục sinh 28/03 ✅. Dịp rơi vào Q1, chưa có volume Helium 10 | **2**. Phối cardigan được | **2**. Du lịch spring break tháng 3 🔴 | **0** |

**Điều cần xác minh trước khi dùng điểm trên (hạn 03/10):**
- SP2 tay dài hay tay lửng, mỏng hay dày, có lót không. Nếu tay không dài: bỏ hướng long sleeve, SP2 vàng chuyển sang hướng (1) wedding guest và (3) vacation.
- Đọc lại 8 review gốc của SP2 để biết lệch ở điểm nào (màu, độ xuyên, dáng, chất liệu) và thuộc màu nào.
- SP1 dài bao nhiêu (review nói về chiều dài) và độ xuyên thấu dưới ánh sáng.
- Tồn kho thật theo 22 biến thể (số 20/40/50 là giả định 🟡).

### 1.2 Mỗi SKU bán theo hướng nào, vào tháng nào

| SKU | Hướng chính | Hướng phụ | Tháng bán chính | Điều kiện |
|---|---|---|---|---|
| SP2 vàng | Mùa thu: long sleeve floral maxi | (1) wedding guest mùa thu | **10–11** | Chỉ đẩy traffic sau khi sửa ảnh và mô tả cho khớp hàng thật (mục 7.2). Nếu tay không dài thì chuyển sang (1) |
| SP3 đen | (1) Tiệc cuối năm | (2) Phối lớp đi làm hoặc đi chơi | **11–12** | Sẵn sàng sớm nhất. Review ủng hộ |
| SP1 | (3) Chuyến đi đến nơi ấm, cruise | (1) Tiệc ban ngày ở nơi ấm | **1–3** (thêm Thanksgiving/Christmas travel cuối tháng 11) | Cần ảnh bối cảnh du lịch, số đo chiều dài |
| SP2 xanh | (3) Vacation maxi | (1) Wedding guest ở nơi ấm | **1–2** | Như SP2 vàng |
| SP3 hồng | (1) Valentine, Phục sinh (Tết nếu có creator) | (2) Phối cardigan mùa xuân | **2–3** | Không phụ thuộc chiến dịch Tết |

Nhờ cách chia này, tháng nào cũng có ít nhất một SKU đang vào mùa, và ngân sách PPC có thể dồn theo từng đợt.

### 1.3 Thứ tự ưu tiên = mức phù hợp × tồn kho × lợi nhuận góp

Lợi nhuận góp/unit (trường hợp A, base cost đã gồm mọi phí): SP1 và SP2 = 51,99 − 15 = **36,99 USD**, SP3 = 25,99 − 10 = **15,99 USD** ✅ (tính từ đề). Trường hợp B, chưa gồm referral 17%: 28,15 và 11,57 USD. Thứ hạng không đổi giữa A và B.

| SKU | Phù hợp (điểm cao nhất ÷ 3) | Tồn 🟡 | Lợi nhuận góp A | Giá trị có trọng số = phù hợp × tồn × lợi nhuận | Sẵn sàng bán | **Thứ tự** |
|---|---|---|---|---|---|---|
| SP2 (2 màu) | 3/3, có điều kiện | 40 | 36,99 | **~986 USD** (nếu tính phù hợp 2/3) | Thấp: phải sửa khớp listing trước | **1**, nguồn tiền lớn nhất nhưng làm theo điều kiện |
| SP3 đen | 3/3 | 25 | 15,99 | ~400 USD | **Cao** | **2**, chạy đầu tiên từ 15/11 |
| SP1 | 3/3 cho hướng ngách (tính 2/3) | 20 | 36,99 | ~493 USD | Trung bình: chỉ có 2 review | **3**, tháng 1–3 |
| SP3 hồng | 2/3 | 25 | 15,99 | ~267 USD | Trung bình | **4**, tháng 2–3 |

**Kết luận:** SP2 nắm nhiều tiền nhất (40 units, lợi nhuận góp gấp 2,3 lần SP3). Vì vậy **việc đầu tiên là sửa listing SP2**, chưa phải chạy quảng cáo. SP3 đen có bằng chứng tốt nhất nên là SKU "chắc ăn" cho Q4. Nếu đến 15/10 SP2 chưa sửa xong ảnh và spec, đợt PPC mùa thu của SP2 bị hoãn, và tiền chuyển sang SP3 đen (quy tắc 01/10 ở mục 1.8).

### 1.4 Bốn mục tiêu

| # | Mục tiêu | Chỉ số (nguồn đo) | Mức cần đạt | Lý do chọn mức |
|---|---|---|---|---|
| 1 | Bán hàng | Units ordered, 01/10–31/03 (Business Report) | **Mục tiêu 110** · dự báo cơ sở 71 · thận trọng 49 | 110 = toàn bộ tồn kho. Hàng tặng/Vine (nếu có) trừ khỏi 110 (mục 6.5) |
| 2 | Chuyển đổi | Unit Session % trên traffic Amazon, theo ASIN con, đo theo tháng từ 01/11 | **≥ 1,5 × baseline** (9% nếu baseline 6% 🟡) | Đề yêu cầu uplift 50%. Tháng 10 là tháng sửa listing nên không tính |
| 3 | Giữ giá | Doanh thu thuần ÷ (units × giá niêm yết) | **≥ 95%** | Coupon 10% chỉ áp cho một phần units (xem phần PPC/Coupon). Không bao giờ giảm quá 15% ✅ |
| 4 | Chất lượng | Rating theo listing cha; tỷ lệ hoàn = units hoàn ÷ units bán (FBA Returns Report) | **Rating ≥ 4,3** (hoặc không giảm nếu hiện đang < 4,3); **tỷ lệ hoàn < 20%** mỗi SKU | Hàng may mặc hoàn nhiều. Riêng SP2, nếu baseline hoàn > 25% thì mục tiêu là giảm một nửa khoảng cách về 20% |

Ghi chú: hàng hoàn còn bán được sẽ quay lại kho. Vì vậy units ordered có thể cao hơn số hàng thực sự rời kho. Theo dõi thêm chỉ số "tồn còn lại" hằng tuần, không chỉ units.

### 1.5 Mô hình 3 kịch bản theo nguồn (182 ngày)

Giả định chung 🟡: baseline 3 session tự nhiên/ngày cho cả 3 listing, tức 546 session; Unit Session % cơ sở 6%; PPC 210 USD ÷ CPC 0,9 USD ≈ **233 click** (agent PPC sẽ chốt). PPC dùng cùng CVR với traffic tự nhiên. Đây là giả định trung tính: exact match có thể chuyển đổi cao hơn, auto/ASIN targeting có thể thấp hơn.

| Nguồn | Chỉ số | Thận trọng | **Cơ sở** | Mục tiêu |
|---|---|---|---|---|
| Tự nhiên | Session | 546 (3,0/ngày, +0%) | **655** (3,6/ngày, +20%) | 922 (5,1/ngày, +69%) |
| | Unit Session % | 6,0% | **7,5%** | 9,0% |
| | Units | 33 | **49** | 83 |
| PPC | Click | 233 | **233** | 233 |
| | Unit Session % | 6,0% | **7,5%** | 9,0% |
| | Units | 14 | **17** | 21 |
| Ngoài sàn (Attribution) | Click | 80 | **120** | 150 |
| | Tỷ lệ mua | 3% | **4%** | 4% |
| | Units | 2 | **5** | 6 |
| **Tổng** | Session | 859 | **1.008** | 1.305 |
| | **Units** | **49** | **71** | **110** |
| | CVR traffic Amazon | 6,0% (1,0×) | **7,5% (1,25×)** | **9,0% (1,5×)** |
| | Tỷ lệ bán hết | 45% | **65%** | 100% |

Cách đọc bảng:
- **Không làm gì:** 546 × 6% ≈ **33 units**. Kế hoạch cơ sở tạo thêm khoảng 38 units.
- **Cơ sở dùng CVR 7,5%, không phải 9%.** CVR 9% chỉ đạt được sau khi sửa listing (khoảng giữa tháng 10) và cần vài tuần để review mới xuất hiện. Nếu tính bình quân cả kỳ, CVR sẽ tăng dần từ 6% lên khoảng 9%, tức trung bình khoảng 7,5%. Kịch bản mục tiêu giả định CVR 9% gần như ngay từ đầu.
- Làm tròn: tổng units được tính trước rồi mới chia cho các nguồn (ví dụ cơ sở: 49,1 + 17,5 + 4,8 = 71,4 → 71).

### 1.6 Units theo SKU × kịch bản, và theo tháng (kịch bản cơ sở)

**Units theo SKU** (tổng mỗi cột khớp với mục 1.5):

| SKU | Tồn 🟡 | Thận trọng | **Cơ sở** | Mục tiêu | Session tự nhiên / PPC / ngoài sàn ở kịch bản cơ sở |
|---|---|---|---|---|---|
| SP1 | 20 | 11 | **16** | 20 | 150 / 50 / 40 |
| SP2 xanh | 20 | 9 | **13** | 20 | 110 / 50 / 20 |
| SP2 vàng | 20 | 10 | **13** | 20 | 120 / 50 / 20 |
| SP3 đen | 25 | 12 | **18** | 25 | 165 / 61 / 20 |
| SP3 hồng | 25 | 7 | **11** | 25 | 110 / 22 / 20 |
| **Tổng** | **110** | **49** | **71** | **110** | 655 / 233 / 120 |
| Còn lại cuối kỳ (bán tiếp Xuân/Hè 2027) | | 61 | 39 | 0 | |

**Kịch bản cơ sở theo tháng** (units; tổng hàng và tổng cột đều khớp):

| SKU | T10/26 | T11 | T12 | T1/27 | T2 | T3 | Tổng |
|---|---|---|---|---|---|---|---|
| SP1 | 1 | 2 | 1 | 5 | 4 | 3 | 16 |
| SP2 xanh | 1 | 1 | 1 | 5 | 3 | 2 | 13 |
| SP2 vàng | 5 | 4 | 2 | 1 | 0 | 1 | 13 |
| SP3 đen | 2 | 5 | 7 | 2 | 1 | 1 | 18 |
| SP3 hồng | 1 | 1 | 1 | 2 | 3 | 3 | 11 |
| **Tổng tháng** | **10** | **13** | **12** | **15** | **11** | **10** | **71** |
| Lũy kế | 10 | 23 | 35 | 50 | 61 | 71 | |

**Session theo tháng, kịch bản cơ sở** (dùng để kiểm tra theo mốc):

| Nguồn | T10 | T11 | T12 | T1 | T2 | T3 | Tổng |
|---|---|---|---|---|---|---|---|
| Tự nhiên | 95 | 120 | 120 | 115 | 100 | 105 | 655 |
| PPC (theo lịch 4 đợt tạm tính, agent PPC cập nhật) | 27 | 43 | 41 | 69 | 31 | 22 | 233 |
| Ngoài sàn | 10 | 20 | 10 | 25 | 35 | 20 | 120 |

Lịch PPC tạm tính (1 USD/ngày/chiến dịch): SP2 vàng 15/10–15/11 (50 click); SP3 đen 16/11–31/12 (61); SP1 và SP2 xanh 01/01–14/02 (50 + 50); SP3 hồng 01–20/03 (22).

**Kịch bản mục tiêu cần bao nhiêu session theo SKU** (CVR Amazon 9%, ngoài sàn 4%):

| SKU | Units | Session Amazon cần | trong đó PPC | **Tự nhiên cần** | So với cơ sở |
|---|---|---|---|---|---|
| SP1 | 20 | 200 | 50 | 150 | +0% |
| SP2 xanh | 20 | 211 | 50 | 161 | +46% |
| SP2 vàng | 20 | 211 | 50 | 161 | +34% |
| SP3 đen | 25 | 267 | 61 | 206 | +25% |
| SP3 hồng | 25 | 267 | 22 | **245** | **+123%** |
| Tổng | 110 | 1.156 | 233 | 923 | +41% |

⇒ Khoảng cách lớn nhất nằm ở **SP3 hồng**: cửa sổ bán ngắn (tháng 2–3), lợi nhuận thấp. Đây là SKU có nguy cơ tồn cuối kỳ cao nhất. Vì vậy ở mốc 15/02 có quy tắc riêng cho SKU này.

### 1.7 Organic tăng từ đâu và bao nhiêu %

**Cần tăng bao nhiêu:**
- Cơ sở: 546 → 655 session, **tăng 20%**, tức thêm khoảng **0,6 session/ngày** cho cả 3 listing.
- Mục tiêu: 546 → 922, **tăng 69%**, tức thêm khoảng **2,1 session/ngày**.
- **Phần tăng này chưa được xác nhận.** Chưa có baseline thật, và chưa biết listing đang xuất hiện ở từ khóa nào.

**Rủi ro ngược chiều:** baseline 90 ngày (tháng 7–9) có thể còn chứa traffic mùa hè. Các từ khóa "summer/beach" giảm mạnh trong Q4 (summer dress Q4 index 19,8). Vì vậy, nếu giữ nguyên listing, lượng khách tự nhiên có thể **giảm** chứ không đứng yên. Phải so baseline với 4 tuần gần nhất (xem 1.9).

| Nguồn tăng | Cơ chế | Đóng góp giả định cho +109 session của kịch bản cơ sở 🔴 | Đo bằng | Trạng thái |
|---|---|---|---|---|
| Index từ khóa mới | Title, bullet và backend có "long sleeve floral maxi", "holiday party dress", "vacation jumpsuit"… (agent Keyword) | +50 | Search Query Performance (Brand Analytics): impressions, clicks theo truy vấn | 🔴 Chưa biết listing đang ở vị trí nào |
| Tỷ lệ bấm (CTR) cao hơn | Ảnh chính rõ hơn, tên màu dễ hiểu, badge coupon | +30 | SQP: tỷ lệ click/impression | 🔴 |
| Hiệu ứng lan từ PPC | Bán được đơn trên từ khóa làm tăng thứ hạng tự nhiên | +20 | Thứ hạng tự nhiên, kiểm tra tay mỗi tuần | 🔴 Không định lượng chắc được ở 233 click |
| Traffic chéo giữa 3 SKU và tìm kiếm thương hiệu | Bảng so sánh trong A+, Brand Store, khách từ ngoài sàn quay lại tìm "SIXDO" | +10 | Brand Store insights; SQP truy vấn "sixdo" | 🔴 |
| Mùa vụ Q4 (tháng 11–12) | Lượng mua sắm chung tăng; holiday dress đỉnh tháng 11 | Không cộng riêng, đã phản ánh trong phân bổ theo tháng | So sánh cùng kỳ nếu có dữ liệu năm trước | 🟡 |

Để đạt kịch bản mục tiêu (+376 session), các nguồn trên cần mạnh gấp khoảng 3,5 lần. **Đây là lý do 110 chỉ là mục tiêu, không phải dự báo.**

### 1.8 Quy tắc ra quyết định theo mốc ngày

| Mốc | Kiểm tra | Nếu thấy | Thì làm |
|---|---|---|---|
| **01/10** (xong trước 07/10) | Baseline (1.9); spec tay SP2; review SP2 | Session tự nhiên < 2/ngày cho cả 3 listing | Chuyển sang kịch bản thận trọng. Ưu tiên PPC cho SKU lợi nhuận cao (SP2, SP1) sau khi sửa listing |
| | | Baseline CVR < 4% | Chưa chạy PPC. Dành 2 tuần đầu sửa listing (Bước 7) |
| | | SP2 chưa có ảnh thật và spec trước 15/10 | Hoãn đợt PPC SP2 mùa thu. Dời tiền sang SP3 đen (chạy sớm từ 01/11) |
| | | Tay SP2 không dài | Bỏ hướng long sleeve. SP2 vàng bán theo wedding guest và vacation |
| **15/11** | Kết thúc đợt 1 (SP2) | Lũy kế ≥ 16 units **và** CVR SP2 ≥ 1,25 × baseline | Giữ SP2 cho đợt tháng 1 |
| | | CVR SP2 < baseline, hoặc tỷ lệ hoàn SP2 > 25% | Tạm dừng PPC SP2. Đọc lý do hoàn trả, sửa ảnh và size chart trước khi chạy lại |
| **30/11** (sau Black Friday/Cyber Monday) | Lũy kế so với kế hoạch cơ sở (23) | < 16 units (dưới 70%) | Dồn phần PPC còn lại vào SP3 đen đến 20/12. Bật coupon Holiday (≤ 10%) sớm hơn |
| | | Có size SP3 đen ≤ 1 unit | Loại size đó khỏi quảng cáo (Bước 6) |
| **15/01** | Tồn SP3 hồng; creator | SP3 hồng còn ≥ 20 units **và** có creator gốc Việt nhận lời | Thêm hướng Tết (06/02) cho SP3 hồng. Nếu không thì giữ Valentine + Phục sinh |
| | | Lũy kế < 30 units (kế hoạch 42) | Chuyển mục tiêu cuối kỳ về kịch bản thận trọng. Ưu tiên giữ giá, không tăng giảm giá |
| **15/02** | Tồn theo SKU so với số còn phải bán | SKU nào còn tồn > 2 lần số dự kiến bán tháng 2–3 | Đưa SKU đó vào đợt PPC tháng 3, coupon Phục sinh (≤ 10%), bundle. Không giảm quá 15% |
| **31/03** | Tổng kết | Còn hàng | **Không xả.** Giữ giá, đổi lại listing theo mùa Xuân/Hè 2027. Kiểm tra tuổi tồn kho (Bước 6) |

### 1.9 Kế hoạch lấy baseline (tuần 01–07/10)

| Việc | Báo cáo trong Seller Central | Lấy gì | Người làm · hạn |
|---|---|---|---|
| 1 | Business Reports → Detail Page Sales and Traffic **by Child Item**, 90 ngày (02/07–30/09) **và** 28 ngày gần nhất | Sessions, Page Views, Units Ordered, **Unit Session %**, Buy Box % cho **22 ASIN con** | Phụ trách dữ liệu · 02/10 |
| 2 | Campaign Manager (nếu từng chạy quảng cáo) | Click, đơn PPC theo ASIN, để tách session tự nhiên = tổng − click PPC | 02/10 |
| 3 | Brand Analytics → **Search Query Performance** (theo ASIN, 13 tuần) | Truy vấn đang mang impressions và clicks; listing đang được index ở đâu | 03/10 |
| 4 | FBA Customer Returns + Voice of the Customer | Tỷ lệ hoàn, mã lý do (too small/large, not as described, quality) theo ASIN con | 03/10 |
| 5 | Inventory → Manage FBA Inventory / Inventory Age | Tồn theo 22 biến thể, ngày nhập kho | 01/10 |
| 6 | Trang sản phẩm (trình duyệt ẩn danh, địa chỉ Mỹ) | Giá, rating, số review hiện tại. **Cần xác minh:** ngày 30/09/2026 không mở được trang Amazon từ môi trường làm bài (proxy chặn) | 01/10 |

Quy tắc dùng baseline:
- Nếu 28 ngày gần nhất thấp hơn trung bình 90 ngày quá 30%, dùng số **28 ngày** làm baseline, vì Q4 gần với số này hơn mùa hè.
- Nếu một ASIN con có dưới 30 session trong 90 ngày, dùng CVR của **listing cha**, vì số liệu con quá ít để tin.
- Sau khi có baseline, thay số 6% và 3 session/ngày ở mục 1.5. Giữ nguyên các tỷ lệ tăng (+20% và 1,25× cho cơ sở; +69% và 1,5× cho mục tiêu), rồi tính lại units.

**Tác động tới CVR / Traffic:** Bước 1 không trực tiếp tăng CVR hay traffic. Bước này đặt thước đo (baseline, 1,5×), cho biết cần thêm bao nhiêu session (+20% ở kịch bản cơ sở, +69% ở mục tiêu), và chỉ ra SKU nào cần sửa CVR trước khi mua traffic (SP2).

---

## Bước 6. Tồn kho

> **Nói đơn giản:** 110 units chia cho 22 biến thể, trung bình 5 units mỗi biến thể. Một size hết hàng có thể làm tiền quảng cáo bị phí. Vì vậy theo dõi theo từng size mỗi tuần, chỉ quảng cáo size còn hàng, không nhập thêm và không xả hàng.

### 6.1 Theo dõi 22 biến thể

| SP | Biến thể | Tồn giả định 🟡 | Tồn trung bình/biến thể |
|---|---|---|---|
| SP1 | 1 màu × 4 size (S–XL) | 20 | 5 |
| SP2 | 2 màu × 4 size (S–XL) | 40 (xanh 20, vàng 20) | 5 |
| SP3 | 2 màu × 5 size (S–XXL) | 50 (đen 25, hồng 25) | 5 |

Mỗi thứ Hai, xuất Manage FBA Inventory vào một bảng gồm các cột: ASIN con · tồn khả dụng · tồn đang nhập lại (hàng hoàn) · units bán 7 ngày · **số tuần còn đủ hàng** = tồn ÷ units bán/tuần · tuổi tồn kho.

### 6.2 Quy tắc size sắp hết và size tồn nhiều

| Tình trạng biến thể | Hành động |
|---|---|
| **≤ 1 unit** | **Dừng quảng cáo ASIN con đó** (pause trong ad group). Không dùng size này trong ảnh "model mặc size…" nếu có size khác. Giữ nguyên listing, không xóa khỏi nhóm biến thể, để giữ review gộp |
| 0 unit | Để Amazon hiện "unavailable". Không nhập thêm hàng ✅ |
| Còn ≥ 2 lần mức trung bình của SKU (ví dụ ≥ 6 khi SKU trung bình 3) | Chọn ASIN con này làm biến thể quảng cáo chính trong Sponsored Products. Ghi rõ số đo của size trong size chart. Ưu tiên cho bundle |
| Màu bán chậm hơn màu kia > 50% sau 6 tuần | Đưa màu đó lên ảnh đầu (swatch mặc định) của listing cha, nếu hợp với dịp đang bán |

Quy tắc cho người mua:
- Không gợi ý "size up/size down" khi chưa có số đo thật. Chỉ ghi số đo inch.
- Hàng hoàn "sellable" quay lại kho. Hàng "unsellable" phải kiểm tra từng chiếc trước khi tính là mất.

### 6.3 Mốc tuổi tồn kho (271 ngày)

- Hàng quần áo được miễn phụ phí tồn kho lâu ngày ở mức 181–270 ngày. Phụ phí bắt đầu từ **ngày 271**. Phí thu vào ngày 15 hằng tháng, theo cu ft hoặc theo unit, lấy mức cao hơn. Mức thấp nhất từ 0,50 USD/cu ft ở nhóm tuổi đầu, lên tới 7,90 USD/cu ft hoặc 0,35 USD/unit từ ngày 456 🟡. Nguồn thứ cấp: [SellerMagnet](https://blog.sellermagnet.com/post/amazon-fba-storage-fees-2026/en), [Seller Essentials](https://selleressentials.com/amazon-fba-long-term-storage-fees/). Trang chính thức: [Seller Central G200684750](https://sellercentral.amazon.com/gp/help/external/G200684750), chưa mở được, cần xác minh.
- **Việc cần làm 01/10:** đọc ngày nhập kho trong Inventory Age. Ví dụ, nếu hàng nhập khoảng 03/2026 🟡 thì mốc 271 ngày rơi vào khoảng tháng 12/2026.
- Một chiếc váy khoảng 0,05–0,1 cu ft 🟡, nên phụ phí chỉ vài chục cent mỗi tháng. Con số này **nhỏ so với lợi nhuận góp 11,57–36,99 USD/unit** ⇒ **không phải lý do để giảm giá hay xả hàng**. Chỉ xét rút hàng về kho ngoài nếu lô hàng sẽ vượt 365 ngày trước khi mùa Xuân/Hè 2027 kịp bán.

### 6.4 Không nhập thêm, không xả cuối kỳ

- Không nhập thêm hàng ✅ (ràng buộc BTC).
- Không giảm quá 15%. Không dùng chữ "sale/clearance/cheap". Không dùng outlet hay liquidation.
- Hàng còn lại ngày 31/03: giữ giá, đổi listing theo mùa Xuân/Hè 2027 (vacation, wedding guest, summer). Đó là mùa gốc của sản phẩm.

### 6.5 Hàng tặng, Vine và mẫu cho creator nằm trong 110 units

| Mục đích | Tối đa | Lấy từ | Điều kiện |
|---|---|---|---|
| Vine hoặc review | **2 units SP1** (chỉ có 2 review) | Size có tồn nhiều nhất | Chỉ khi Seller Central báo phí 0 USD và đủ điều kiện. Nguồn về phí Vine chưa thống nhất 🔴 |
| Mẫu cho creator ngoài sàn | **1–2 units** (SP3 hồng hoặc SP3 đen) | Size M hoặc L có tồn nhiều nhất | Chỉ khi creator đã nhận lời (theo ngân sách ngoài sàn) |
| **Tổng tối đa** | **4 units** | | |

- Hàng tặng **không tính là units bán**. Nếu tặng 4 units, mục tiêu bán giảm từ 110 xuống **106**.
- Kịch bản cơ sở (71) và thận trọng (49) không đổi, vì vẫn còn đủ tồn.
- Không bao giờ lấy hàng tặng từ size chỉ còn ≤ 2 units.

**Tác động tới CVR / Traffic:** Tồn kho không tạo thêm traffic, nhưng giữ CVR không bị kéo xuống. Khách bấm vào quảng cáo mà size mình mặc đã hết thì gần như không mua. Dừng quảng cáo biến thể ≤ 1 unit giúp tiền PPC không đổ vào những session không thể chuyển đổi.

---

## Bước 7. Conversion: đòn bẩy chính cho mục tiêu +50% CVR

> **Nói đơn giản:** Với 300 USD, không thể mua đủ traffic để bán 110 units. Cách rẻ nhất để bán thêm là **để cùng một lượng khách mua nhiều hơn**. Khách thời trang không mua khi không chắc hàng sẽ vừa, chất liệu ra sao, và trông thế nào khi nhận được. Bước 7 xử lý đúng 3 điều đó, bắt đầu từ SP2.

### 7.1 Vì sao CVR là đòn bẩy chính: phép tính

Cùng lượng session Amazon ở kịch bản cơ sở, 888 session (655 tự nhiên + 233 PPC):

| CVR | Units từ traffic Amazon | Chênh lệch |
|---|---|---|
| 6% (baseline 🟡) | 53 | – |
| 7,5% (cơ sở) | 67 | +13 |
| **9% (1,5×)** | **80** | **+27 units**, không tốn thêm 1 USD traffic |

- Mỗi +1 điểm % CVR ≈ **+9 units** trên 888 session.
- Muốn có thêm 27 units bằng PPC ở CVR 6%, cần 27 ÷ 6% ≈ 450 click ≈ **405 USD**, vượt toàn bộ ngân sách 300 USD nội sàn.
- CVR cũng quyết định quảng cáo có lãi hay không, theo công thức ACoS = CPC ÷ (CVR × giá), với CPC 0,9:
  - SP1/SP2 (51,99): CVR 6% → ACoS 28,9%; CVR 9% → **19,2%**.
  - SP3 (25,99): CVR 6% → ACoS 57,7%; CVR 9% → **38,5%**.
  - ⇒ Với SP3, nâng CVR là điều kiện để PPC không lỗ. Ngưỡng hòa vốn do agent PPC/Tài chính chốt.

Benchmark tham khảo: các nguồn thứ cấp đưa ra khoảng CVR ngành may mặc trên Amazon rất rộng, từ 3–8% đến 9–13% hoặc 12–16%. Không có số chính thức từ Amazon. Vì vậy **bài không dùng benchmark làm mục tiêu**, chỉ dùng baseline của chính SIXDO. Nguồn: [ParahGroup](https://www.parahgroup.com/blogs/amazon-conversion-rate-benchmarks-by-category), [SellerMetrics](https://sellermetrics.app/amazon-conversion-rate/), [SalesDuo](https://salesduo.com/blog/amazon-conversion-rate-guide/) 🟡.

### 7.2 Xếp hạng đòn bẩy CVR miễn phí

Xếp theo: tác động dự kiến × độ mạnh bằng chứng × chi phí (đều gần 0 USD). Thực hiện theo thứ tự này.

| # | Đòn bẩy | Áp cho | Bằng chứng | Việc cụ thể | Tác động | Hạn |
|---|---|---|---|---|---|---|
| **1** | **Sửa mức khớp ảnh – hàng thật** | **SP2** trước, sau đó SP1 | 5/8 review SP2 lệch kỳ vọng (hình ảnh, chất liệu) [N1] | Chụp hàng thật dưới ánh sáng tự nhiên, đúng màu. Có ảnh cận tay áo, ảnh chất voan. Ghi rõ có lót hay không [ ]. Xóa ảnh nào làm hàng trông khác thật | CVR cao, **giảm hoàn trả**, giữ rating | Trước 12/10. **Điều kiện để chạy PPC SP2** |
| **2** | **Size chart bằng inch + thông tin người mẫu** | Cả 3 | 30/40 review đối thủ nhắc fit/sizing; review SP1 nhắc chiều dài | Mỗi size ghi ngực, eo, hông, dài [ ] bằng inch. Ghi "model [chiều cao] mặc size [ ]". Tải size chart riêng theo thương hiệu | CVR cao, giảm hoàn "too small/large" | 10/10 |
| **3** | **Ảnh chính + ảnh bối cảnh theo dịp** | Theo SKU và tháng (mục 1.2) | Insight: khách cần thấy món đồ hợp với dịp mình sắp mặc. Đối thủ dùng wording Fall/Vacation/Wedding Guest | Ảnh chính nền trắng đúng quy định. Ảnh 2–5: SP3 đen trong tiệc, phối lớp áo len; SP2 vàng phối boots và áo denim; SP1 trên du thuyền | Tăng CTR (traffic) và CVR | 14/10; đổi ảnh bối cảnh theo đợt |
| **4** | **Minh bạch chất liệu, độ xuyên thấu** | SP1, SP2 | 32/40 review đối thủ nhắc fabric/quality; review SP1 nhắc xuyên thấu | Ảnh vải soi sáng, ghi "sheer/semi-sheer/opaque" đúng thật. Gợi ý mặc kèm áo lót hoặc slip nếu cần | Giảm hoàn "not as described". CVR trung bình | 12/10 |
| **5** | **Video ngắn 20–30 giây** | SP2, SP3 | Chưa có số của SIXDO 🔴. Váy xếp tầng cần thấy chuyển động | Quay bằng điện thoại: xoay váy, cận vải, 2 cách phối. Tải qua Brand Registry | Trung bình | 20/10 |
| **6** | **A+ Content** (agent Listing viết) | Cả 3 | Amazon cho biết A+ cơ bản tăng doanh số tới 8% (số liệu nội bộ, không công bố phương pháp) 🟡 [LeanMedia](https://leanmedia.org/amazon-a-sales-impact-amazon-says-its-8-even-more-for-premium-a/), [Canopy](https://canopymanagement.com/making-the-grade-amazon-a-content/) | Bảng so sánh 3 SKU (dẫn traffic chéo), bảng size, chất liệu, câu chuyện thương hiệu NYFW | Trung bình, cộng traffic chéo | 20/10 |
| **7** | **Review và rating** | SP1 (2 review), sau đó SP2 | SIXDO ít review hơn benchmark [N1] | Bấm "Request a Review" cho mọi đơn sau 5–30 ngày. Vine tối đa 2 units nếu miễn phí (6.5). Trả lời review tiêu cực bằng thông tin size hoặc chất liệu | Cao nhưng **chậm** (cần có đơn trước) | Liên tục |
| **8** | **Thông tin cho trợ lý AI và câu hỏi của khách** | Cả 3 | Amazon đã đưa Q&A khỏi trang chính và thay bằng trợ lý AI (Rufus, đổi tên thành Alexa for Shopping từ 13/05/2026) 🟡 [Stackline](https://www.stackline.com/news/rufus-is-gone-what-it-means-and-what-it-doesnt), [Canopy](https://canopymanagement.com/amazon-alexa-for-shopping-sellers-guide/) | Không trông vào Q&A. Viết bullet và A+ trả lời thẳng câu hỏi thường gặp: "có xuyên không, có lót không, mặc mùa lạnh thế nào, giặt ra sao [ ]" | Trung bình | Cùng lúc với listing |
| **9** | **Giảm lý do trả hàng** | Theo mã lý do ở 1.9 | FBA Returns Report | Hoàn "too small/large" > 30% số hoàn → sửa size chart. "Not as described" → sửa ảnh (đòn bẩy 1, 4) | Tăng lợi nhuận, giữ rating | Xem lại mỗi 2 tuần |

Không xếp vào nhóm miễn phí: coupon và badge giảm giá (có phí và làm giảm doanh thu, xem phần Coupon). Coupon chỉ bật **sau** khi đòn bẩy 1–4 đã làm xong, để không giảm giá cho một listing chưa thuyết phục.

### 7.3 Đo trước/sau khi không có Manage Your Experiments

**Vấn đề về cỡ mẫu (nói thẳng):**
- Để phân biệt thống kê CVR 6% và 9% (α = 5%, power 80%), cần khoảng **1.200 session mỗi nhóm**.
- Mỗi listing SIXDO chỉ có khoảng 1–2 session/ngày.
- ⇒ Không thể chứng minh +50% bằng thống kê trên từng listing trong 6 tháng. Bài đo theo **hướng đi + chỉ báo sớm**, và đọc kết quả gộp cả kỳ.

| Cách đo | Làm thế nào | Quy tắc đọc |
|---|---|---|
| **So sánh 14 ngày trước/sau** | Mỗi lần chỉ đổi **1 nhóm yếu tố** trên một ASIN (ví dụ: ảnh SP2 ngày 12/10). So 14 ngày trước và 14 ngày sau: CVR tự nhiên = (units − units PPC − units Attribution) ÷ (session − click PPC − click Attribution) | Tăng ≥ 1,25× và không giảm session thì giữ. Giảm thì quay lại bản cũ. Ghi "chưa kết luận" nếu cả 2 kỳ đều có dưới 30 session |
| **Khảo sát ảnh chính** | Trước khi đăng, cho 20–30 phụ nữ Mỹ 25–45 tuổi (mạng lưới của nhóm, Google Form) xem ảnh SIXDO đặt trong lưới 8 ảnh đối thủ. Hỏi: "Bạn bấm ảnh nào?" và "Món này hợp dịp gì?" | Chọn ảnh có tỷ lệ được bấm cao hơn **và** người xem đoán đúng dịp ≥ 60%. Chỉ báo hướng, không phải số chuyển đổi |
| **Chỉ báo sớm hằng tuần** | Search Query Performance: tỷ lệ click, tỷ lệ thêm vào giỏ theo truy vấn. Business Report: Unit Session % | Cart add tăng trước khi units tăng. Có ích khi đơn còn quá ít |
| **Chỉ báo chất lượng** | Tỷ lệ hoàn và mã lý do; rating mới | Nếu CVR tăng nhưng hoàn "not as described" cũng tăng → listing đang hứa quá mức, phải sửa lại |
| **Đánh giá tổng kỳ** | CVR traffic Amazon 01/11–31/03 so với baseline | Đạt mục tiêu khi ≥ 1,5×. Báo cáo kèm số session để giám khảo tự đánh giá độ tin cậy |

**Tác động tới CVR / Traffic:** Đây là bước tạo ra phần lớn mức tăng CVR. Mục tiêu 6% → 9% cho thêm khoảng 27 units trên cùng 888 session, tương đương khoảng 405 USD PPC không phải chi. Ảnh chính và ảnh bối cảnh còn tăng CTR, góp khoảng +30 session tự nhiên trong kịch bản cơ sở (🔴).

---

## Nguồn

- [N1] Phần 1–2 bản mới (`phan1_2_moi.txt`): Helium 10 29/09/2026, Google Trends Q4 index, mã hóa review. Số nội bộ, chưa tái tính.
- Phụ phí tồn kho lâu ngày 2026 (nguồn thứ cấp, cần đối chiếu Seller Central): https://blog.sellermagnet.com/post/amazon-fba-storage-fees-2026/en · https://selleressentials.com/amazon-fba-long-term-storage-fees/ · https://sellercentral.amazon.com/gp/help/external/G200684750
- Benchmark CVR may mặc (khoảng rộng, không dùng làm mục tiêu): https://www.parahgroup.com/blogs/amazon-conversion-rate-benchmarks-by-category · https://sellermetrics.app/amazon-conversion-rate/ · https://salesduo.com/blog/amazon-conversion-rate-guide/
- A+ tăng doanh số tới 8% (Amazon tự công bố): https://leanmedia.org/amazon-a-sales-impact-amazon-says-its-8-even-more-for-premium-a/ · https://canopymanagement.com/making-the-grade-amazon-a-content/
- Q&A rời trang chính; Rufus đổi tên thành Alexa for Shopping (13/05/2026): https://www.stackline.com/news/rufus-is-gone-what-it-means-and-what-it-doesnt · https://canopymanagement.com/amazon-alexa-for-shopping-sellers-guide/
- Trang sản phẩm 3 ASIN: thử mở ngày 30/09/2026, bị proxy chặn → giá, rating, số review hiện tại **cần xác minh**.

---

## Số liệu bàn giao cho các phần khác

**Giả định đầu vào 🟡:** baseline 3 session tự nhiên/ngày (546 trong 182 ngày); CVR cơ sở 6%; CPC 0,9; PPC 233 click; CVR của PPC bằng CVR tự nhiên; ngoài sàn chuyển đổi 3–4%.

| Kịch bản | Tự nhiên (session · CVR · units) | PPC (click · CVR · units) | Ngoài sàn (click · CVR · units) | **Tổng units** |
|---|---|---|---|---|
| Thận trọng | 546 · 6,0% · 33 | 233 · 6,0% · 14 | 80 · 3% · 2 | **49** |
| Cơ sở | 655 · 7,5% · 49 | 233 · 7,5% · 17 | 120 · 4% · 5 | **71** |
| Mục tiêu | 922 · 9,0% · 83 | 233 · 9,0% · 21 | 150 · 4% · 6 | **110** |

**Units theo SKU:**

| SKU (giá) | Thận trọng | Cơ sở | Mục tiêu |
|---|---|---|---|
| SP1 (51,99) | 11 | 16 | 20 |
| SP2 xanh (51,99) | 9 | 13 | 20 |
| SP2 vàng (51,99) | 10 | 13 | 20 |
| SP3 đen (25,99) | 12 | 18 | 25 |
| SP3 hồng (25,99) | 7 | 11 | 25 |
| **Tổng** | **49** | **71** | **110** |
| Trong đó SP1 + SP2 (giá 51,99) / SP3 (giá 25,99) | 30 / 19 | 42 / 29 | 60 / 50 |

**Kịch bản cơ sở theo tháng (units):** T10 10 · T11 13 · T12 12 · T1 15 · T2 11 · T3 10 = 71. Chi tiết theo SKU ở mục 1.6.

**Session cơ sở theo tháng** (tự nhiên / PPC / ngoài sàn): T10 95/27/10 · T11 120/43/20 · T12 120/41/10 · T1 115/69/25 · T2 100/31/35 · T3 105/22/20.

**Phân bổ click PPC tạm tính theo SKU:** SP2 vàng 50 (15/10–15/11) · SP3 đen 61 (16/11–31/12) · SP1 50 + SP2 xanh 50 (01/01–14/02) · SP3 hồng 22 (01–20/03). Agent PPC có thể đổi lịch, nhưng giữ tổng 233.

**CVR dùng cho KPI PPC:** 6% (thận trọng), 7,5% (cơ sở), 9% (mục tiêu). ACoS ở CPC 0,9: SP1/SP2 = 28,9% / 23,1% / 19,2%; SP3 = 57,7% / 46,2% / 38,5%.

**Hàng tặng:** tối đa 4 units (2 Vine SP1 nếu miễn phí, 1–2 mẫu creator SP3). Nếu dùng hết, mục tiêu bán giảm còn 106.

**Tồn cuối kỳ giữ giá, bán tiếp Xuân/Hè 2027:** 61 (thận trọng) · 39 (cơ sở) · 0 (mục tiêu).
