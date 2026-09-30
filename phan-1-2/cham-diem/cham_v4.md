# CHẤM BẢN v4 – Phần 1–2 SIXDO (bổ sung SellerSprite)

Đối tượng: `src/phan1_2_v4.txt`. So với v3 (34,5/42). Ngày chấm 30/09/2026.
Đối chiếu số với ảnh gốc `bs/part00–06.png`. Cột tháng được đo pixel (trục 0–500K = 203 px, sai số đọc khoảng ±3K mỗi cột).

## 1. Đối chiếu số SellerSprite với ảnh gốc

### 1a. Doanh số theo tháng (part01, "Market Sales Trends")

| Tháng | Đo từ ảnh | Tháng | Đo từ ảnh |
|---|---|---|---|
| 2024-11 / 12 | 268K / 266K | 2025-07 / 08 / 09 | 172K / 187K / 209K |
| 2025-01 | 131K | 2025-10 / 11 / 12 | 352K / 318K / 411K |
| 2026-01 / 02 / 03 | 251K / 227K / 281K | 2026-04 / 05 / 06 | 335K / 369K / 342K |
| 2026-07 / 08 | 254K / 335K | 30 ngày gần nhất | 387K |

| Số trong bài | Ảnh gốc | Kết luận |
|---|---|---|
| Q3/2025 khoảng 577K | khoảng 569K | Hơi cao (+1,5%), vẫn trong sai số đọc. Nên ghi "khoảng 570 nghìn" |
| Q4/2025 khoảng 1,09 triệu | khoảng 1,08 triệu | Đúng |
| Q4 gấp 1,9 lần Q3 | 1,90 | Đúng. Tiêu đề 1.1.2 "gấp đôi" là làm tròn lên |
| Tháng 12 khoảng 415K, là đỉnh | khoảng 411K | Đúng |
| Tháng 10 +67% so với tháng 9 | 352/209 = +68% | Đúng |
| Q1/2026 khoảng 768K, bằng 70% Q4, cao hơn Q3 33% | khoảng 759K; 70%; +33% | Số đúng, nhưng phép so Q1 với Q3 bị survivorship (xem 2) |
| Tháng 1 giảm 39% so với tháng 12 | 251/411 = −39% | Đúng |
| Mùa lễ 2024 khoảng 270K/tháng | 268K, 266K | Đúng |
| "Nhịp 2 hồi lại từ tháng 3, trùng với Valentine" | Tháng 2 là đáy của Q1 (227K) | **Đọc quá**: Valentine không tạo bước tăng thấy được |

### 1b. Các chỉ số khác

| Chỉ số trong bài | Ảnh gốc | Kết luận |
|---|---|---|
| Giá TB 40,05 USD | $40,05 (part00) | Đúng |
| 10–50 USD khoảng 75% doanh số | 21,6 + 11,4 + 22,1 + 20,1 = 75,2% (part06) | Đúng |
| 50–60 USD: 11 SP, khoảng 5% | 11 SP, khoảng 5,0% | Đúng |
| 20–30 USD: khoảng 11,5% | 18 SP, khoảng 11,4% | Số đúng, nhưng **diễn giải sai**: "SP3 nằm trong vùng giá bán chạy". 20–30 USD là **đáy** giữa hai đỉnh 10–20 (21,6%) và 30–40 (22,1%). Doanh số bình quân mỗi SP chỉ khoảng 0,63%, thấp thứ hai trong 8 vùng giá |
| "SP1, SP2 ở vùng giá ít người mua" | Trên 70 USD: 6 SP, khoảng 11% doanh số (bình quân mỗi SP cao nhất, khoảng 1,85%) | **Đọc quá**: giá cao không phải rào cản. Chỉ riêng vùng 50–60 bán yếu |
| 41/100 có trên 500 đánh giá, khoảng 75% doanh số | 41 SP; đường tỷ trọng khoảng 75% (part05) | Đúng |
| 13 SP có 1–50 đánh giá, khoảng 3% | 13 SP; khoảng 3% | Đúng. Nhưng số này cũng cho thấy listing ít review vẫn lọt top, nên câu "Review là rào cản lớn nhất" nói hơi mạnh |
| Rating TB 4,3; không SP dưới 3,5; 96/100 từ 4,0 | 4,3; 0 SP dưới 3,5; 4 SP ở 3,5–4,0 | Đúng |
| 83% SP có A+ và video; 90,9% doanh số | 83%; 90,86% (part03) | Đúng |
| SP mới: 95,7% có A+ và video; 98,1% doanh số | 95,65%; 98,11% | Đúng |
| SP mới: 23, giá 36,77, rating 4,3, bán 1.477/tháng | 23; $36,77; 4,3; 1.477 | Đúng. Bài **bỏ sót** "Avg. Ratings of New Products 1718/140/6": SP mới trong top có trung bình khoảng 1.718 đánh giá (nhiều khả năng là biến thể con thừa hưởng review của parent) |
| 67/100 SP ra mắt 2025–2026 | 32 + 35 = 67 (part05) | Đúng |
| Top 10 thương hiệu 60,7%; dẫn đầu Gloria Vanderbilt, PRETTYGARDEN, Zeagoo | 60,7%; đúng thứ tự (part02) | Đúng |
| Amazon tự bán khoảng 25% | Seller Amazon khoảng 25%; biểu đồ FBA/AMZ: AMZ khoảng 26% doanh số | Đúng |
| 87% SP dùng FBA | FBA khoảng 87% ASIN, nhưng chỉ khoảng 74% doanh số | Đúng. Nên ghi thêm "74% doanh số" |

Kết luận: không có số bịa. Một số hơi lệch (577K). Có **3 chỗ đọc quá mức** (vùng giá 20–30, vùng giá trên 50, Valentine) và **2 chỗ suy diễn nhân quả** từ dữ liệu chỉ có nhóm sống sót (A+ "bắt buộc"; "listing mới vẫn vào được top nếu có A+, video, điểm 4,3").

## 2. Diễn giải

1. **Danh mục không được ghi trong báo cáo.** Ảnh chỉ ghi "Market: Best Seller". Bài gọi đó là "Best Seller thời trang nữ". Thành phần của danh sách cho thấy phạm vi rộng hơn váy: Gloria Vanderbilt (quần jeans), Kendra Scott (trang sức), Calvin Klein; từ khóa kèm theo là maxi skirt và trench coat; trọng lượng TB 4,28 pound. Nhiều khả năng đây là Women (Clothing, Shoes & Jewelry) nói chung. Các chuẩn về giá, review, A+ vì vậy là chuẩn của **thời trang nữ nói chung**, không phải chuẩn của váy. Cần ghi rõ ở Hình 1, 1.2.3 và Phụ lục.
2. **Survivorship.** Bài đã có câu lưu ý ("các tháng cũ bị đánh giá thấp… chỉ so các tháng gần nhau"), nhưng vẫn tự vi phạm ở ba chỗ:
   (a) Tóm tắt và 1.1.2 so Q1/2026 với Q3/2025, hai mốc cách nhau 6 tháng.
   (b) Tiêu đề 1.1.2 "Q1 vẫn cao hơn Q3".
   (c) Bài không nhắc rằng Q2/2026 đạt khoảng 1,05 triệu, gần bằng Q4/2025. Chỉ riêng biểu đồ này thì không chứng minh được Q4 là quý lớn nhất. Hình dạng tăng dần là dấu hiệu rõ của survivorship. Mức tăng tháng 10 so với tháng 9 và mức giảm tháng 1 so với tháng 12 (tháng liền kề) đáng tin hơn.
   Chữ "doanh số thật" cũng nói quá, vì đây là số ước tính của công cụ. Nên gọi là "doanh số ước tính".
3. **Số hình, số mục và tham chiếu chéo.** Hình 1 (SellerSprite), Hình 2 (Google Trends) và Hình 3 (Helium 10) đánh số đúng thứ tự. Các mục 1.1.1–1.1.5 liên tục. Tham chiếu "mục 1.1.5", "mục 1.1.2", "mục 1.1.4" (11 từ khóa, đếm khớp) và "ma trận ở mục 2.1" đều đúng. Không còn chữ "Hình" nào trỏ sai. Nhãn "Dữ liệu nhóm" cho SellerSprite là hợp lý. Các sửa N1–N6 đã vào bài: Gen Z 57%, 4/5 điểm đến Allianz, bỏ 21% Valentine, dòng độ nhạy, ô SP1 "1/2 review nhắc độ xuyên", 5,9 triệu (AAA).

## 3. Bảng điểm

| Mục | v3 | v4 | Lý do |
|---|---|---|---|
| 1.1 | 8,5 | **9,0 / 10** | Có thêm sales trend trên Amazon theo tháng (đúng tiêu chí barem), số đọc chính xác và có lưu ý survivorship. Trừ: danh mục bị gán là "thời trang nữ" khi báo cáo không ghi; so Q1 với Q3 trái với chính lưu ý của bài; bỏ qua Q2/2026 ngang Q4; câu Valentine đọc quá; vẫn chưa có Q1 index và volume biến thể mùa lễ |
| 1.2 | 8,0 | **8,5 / 10** | Bảng chuẩn Best Seller cho SIXDO một mốc so sánh định lượng (giá, review, A+, FBA, tập trung). Dòng độ nhạy và ô SP1 đã sửa. Trừ: "SP3 nằm trong vùng giá bán chạy" sai với dữ liệu; A+ "bắt buộc" và "listing mới vào được top" là suy diễn nhân quả; chuẩn này của thời trang nữ nói chung chứ không của váy; đối thủ vẫn chỉ 1 mẫu mỗi SKU, chưa có BSR/rating |
| 2.1 | 8,0 | **8,5 / 10** | Đã sửa N1, N2, N5; logic tuổi nhất quán. Còn: ma trận chưa sửa hết (#23); chưa có mức nhạy giá; 27% người lớn nhân với 21,7 triệu tổng khách (gồm cả trẻ em) nên 5,9 triệu hơi cao |
| 2.2 | 10,0 | **10,5 / 12** | Đã sửa N3 và N4; câu rào cản đúng số. Còn: chưa có trích review nguyên văn; ngưỡng kiểm chứng chưa chạy; Motivation không có bằng chứng |
| **Tổng** | 34,5 | **36,5 / 42** | +2,0. Phần tăng đến từ việc sửa N1–N6 và dữ liệu SellerSprite. Chỉ cần sửa diễn giải là lấy thêm được khoảng 0,5–0,75 điểm |

## 4. Năm sửa câu chữ đề xuất

| # | Vị trí | Câu hiện tại | Câu đề xuất |
|---|---|---|---|
| 1 | 1.2.3, bảng chuẩn Best Seller, dòng Giá, cột Hàm ý | "SP3 nằm trong vùng giá bán chạy. SP1, SP2 ở vùng giá ít người mua, nên phải có lý do đáng tiền rõ ràng" | "Vùng 20–30 USD có 18 sản phẩm nhưng chỉ khoảng 11% doanh số, thấp hơn hai vùng kề bên (10–20 và 30–40 USD). Giá 25,99 USD không tự tạo lợi thế, nên SP3 vẫn phải thắng bằng thiết kế. Vùng 50–60 USD bán yếu (11 sản phẩm, 5%), nhưng vùng trên 70 USD có 6 sản phẩm chiếm khoảng 11%. SP1, SP2 cần lý do đáng tiền, không cần hạ giá." |
| 2 | Chú thích Hình 1; tiêu đề bảng 1.2.3; Phụ lục SellerSprite | "100 sản phẩm đang nằm trong Best Seller thời trang nữ Amazon US" | "100 sản phẩm top Best Seller Amazon US theo phiên xuất SellerSprite. Báo cáo không ghi danh mục; các thương hiệu dẫn đầu (Gloria Vanderbilt, Kendra Scott, Calvin Klein) cho thấy đây là thời trang nữ nói chung, không riêng váy." |
| 3 | Tóm tắt điều hành; tiêu đề 1.1.2; dòng Q1/2026 | "…và Q1/2026 vẫn cao hơn Q3 khoảng 33%" / "Q1 vẫn cao hơn Q3" | "…gấp khoảng 1,9 lần trong Q4/2025 so với Q3 và tăng khoảng 68% ngay từ tháng 10. Sau lễ, Q1/2026 còn khoảng 70% Q4." Tiêu đề: "Doanh số ước tính trên Amazon: Q4 gấp gần 2 lần Q3, Q1 còn khoảng 70% Q4". Bỏ phép so Q1 với Q3, vì chỉ số sản phẩm đang ở top làm các tháng cũ thấp hơn thực tế (Q2/2026 cũng đạt khoảng 1,05 triệu). |
| 4 | 1.1.2, So what, câu Nhịp 2 | "Nhịp 2 (tháng 1–3) giảm sau lễ rồi hồi lại từ tháng 3, trùng với Valentine, spring break và Phục sinh." | "Nhịp 2 (tháng 1–3) chạm đáy ở tháng 2 (khoảng 227 nghìn) rồi hồi lại ở tháng 3 (khoảng 281 nghìn), trùng spring break và Phục sinh. Valentine không tạo bước tăng thấy được trên toàn danh mục, nên chỉ là cửa sổ ngách cho SP3 hồng." |
| 5 | 1.2.3, dòng A+ và dòng Sản phẩm mới, cột Hàm ý | "A+ và video là điều kiện bắt buộc, không phải điểm cộng" / "Listing mới vẫn vào được top nếu có A+, video và điểm từ 4,3" | "A+ và video là chuẩn tối thiểu của nhóm dẫn đầu; thiếu chúng thì SIXDO lép vế ngay từ đầu." / "23 sản phẩm mới đang ở top, gần như đều có A+ và video. Nhưng nhóm này có trung bình khoảng 1.718 đánh giá (nhiều khả năng thừa hưởng review từ parent), nên đây là đặc điểm của nhóm đã thành công, không phải công thức bảo đảm vào top." |

Sửa nhỏ thêm: Q3 "khoảng 577 nghìn" → "khoảng 570 nghìn"; FBA thêm "(khoảng 74% doanh số)"; đổi "doanh số thật" → "doanh số ước tính" (Tóm tắt, 1.1.2).
