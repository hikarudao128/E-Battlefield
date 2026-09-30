# Phần 3 – Kế hoạch triển khai (55 điểm)
### SIXDO trên Amazon US: bán hết 110 sản phẩm Xuân/Hè trong mùa Thu/Đông mà không làm sai lệch định vị

_Theo barem: Amazon Operations & Commercial (25 điểm), Product Repositioning (10 điểm), Marketing trong và ngoài Amazon (10 điểm), Dùng AI tạo sinh làm bộ hình cho 3 sản phẩm (5 điểm). Cập nhật 30/09/2026. Dựa trên [Phần 1 – Nghiên cứu tổng quan](part1-nghien-cuu-tong-quan.md) và [Phần 2 – Khách hàng mục tiêu & Insight](target-customer-insight.md)._

---

## 0. Giả định đầu vào

> ⚠️ Đề bài chưa nêu rõ 3 sản phẩm cụ thể. Kế hoạch dùng 3 sản phẩm **đại diện cho danh mục Xuân/Hè của SIXDO** (xem Phần 1, mục 1.2.A). Khi có dữ liệu thật, chỉ cần thay tên, giá, số lượng; khung kế hoạch giữ nguyên.

| Mã | Sản phẩm (giả định) | Giá bán Amazon | Số lượng tồn | Phân khúc chính (Phần 2) |
|---|---|---|---|---|
| **P1** | Váy maxi voan 2 dây in hoa hồng | 119 USD | 45 | 🅐 Winter Escapers, 🅒 Destination Guests, 🅕 Early Planners |
| **P2** | Váy midi lụa họa tiết hoa hồng | 99 USD | 40 | 🅒 Holiday Guests, 🅑 Sun Belt, 🅓 Tết (bản màu đỏ/hồng) |
| **P3** | Sơ mi voan trắng xếp ly cổ | 69 USD | 25 | 🅔 Indoor Layerers, 🅑 Sun Belt; bán kèm P1, P2 |
| | **Tổng** | | **110** | |

Các giả định khác:
- **110 sản phẩm đang nằm trong kho FBA ở Mỹ**, và listing đã tồn tại từ mùa Xuân/Hè. Vì vậy việc chính là **định vị lại listing đang có**, không phải tạo listing mới.
- **SIXDO có (hoặc đăng ký kịp) Amazon Brand Registry.** Đây là điều kiện bắt buộc để dùng A+ Content, Brand Store, Sponsored Brands, Virtual Bundles, Vine, thử nghiệm A/B và Brand Referral Bonus. Nếu chưa có, đăng ký qua **Amazon IP Accelerator** để được Brand Registry trong vài tuần, khi đơn nhãn hiệu còn đang chờ duyệt.
- Hàng mẫu dùng cho Vine và KOL **gửi riêng từ kho Việt Nam**, để toàn bộ 110 sản phẩm trong FBA dành cho bán.

---

## 1. Amazon Operations & Commercial (25 điểm)

### 1.1 Mục tiêu và bài toán ngược từ 110 sản phẩm

**Mục tiêu:** bán hết 110 sản phẩm từ 01/10/2026 đến 31/03/2027 (26 tuần), giữ giá niêm yết và định vị thương hiệu.

**Phân bổ số lượng bán theo tháng**, bám theo lịch dịp mua ở Phần 2 và đỉnh tìm kiếm ở Phần 1:

| Tháng | P1 Maxi | P2 Midi | P3 Sơ mi | Tổng | Dịp chính |
|---|---|---|---|---|---|
| 10/2026 | 3 | 4 | 3 | 10 | Chạy lại listing; đám cưới mùa thu; mặc thêm lớp |
| 11/2026 | 8 | 10 | 4 | 22 | Black Friday/Cyber Monday; bắt đầu mùa du thuyền; tiệc cuối năm |
| 12/2026 | 9 | 12 | 4 | 25 | Tiệc Giáng sinh, giao thừa; du lịch nghỉ đông |
| 01/2027 | 12 | 6 | 5 | 23 | **Cao điểm du thuyền**; đám cưới ở nơi xa; đặt chuyến spring break |
| 02/2027 | 7 | 6 | 5 | 18 | **Tết (06/02)**, Valentine (14/02) |
| 03/2027 | 6 | 2 | 4 | 12 | Spring break, Lễ Phục sinh (28/03) |
| **Tổng** | **45** | **40** | **25** | **110** | |

**Tính ngược lượng truy cập cần có:**
- Tỷ lệ chuyển đổi (CVR) trung bình của ngành quần áo trên Amazon là khoảng **8,6%**. Listing mới, ít đánh giá nên lấy mục tiêu thận trọng là **6%**.
- 110 đơn ÷ 6% ≈ **1.830 lượt truy cập** trong 6 tháng, tức khoảng **10 lượt/ngày**. Đây là mức khả thi.
- Chia theo nguồn:

| Nguồn | Tỷ trọng số đơn | Số đơn | Cách tính |
|---|---|---|---|
| Quảng cáo PPC trên Amazon | 50% | 55 | CVR quảng cáo 5% → cần khoảng 1.100 lượt click × CPC khoảng 1,2 USD ≈ **1.300–1.400 USD** |
| Tự nhiên (organic) | 30% | 33 | Nhờ tối ưu từ khóa, đánh giá, Brand Store |
| Ngoài Amazon (Meta, TikTok, KOL, Pinterest, Google) | 20% | 22 | Gắn link Amazon Attribution, được hoàn khoảng 10% qua Brand Referral Bonus |

_CPC trung bình của nhóm quần áo khoảng 0,85–0,95 USD. Kế hoạch lấy 1,2 USD vì Q4 cạnh tranh cao hơn và nhóm từ khóa váy dự tiệc, resort đắt hơn trung bình._

### 1.2 Listing và Keyword/SEO

**Nguyên tắc:**
1. **Viết theo dịp và cách dùng, không theo mùa.** Bỏ chữ "summer" khỏi đầu tiêu đề, thay bằng dịp mặc (resort, cruise, wedding guest, holiday party, layering). Theo Phần 1, đây là cách PRETTYGARDEN đang làm.
2. **Tiêu đề giữ ổn định cả mùa, chứa từ khóa của nhiều dịp.** Đổi tiêu đề liên tục có thể làm mất thứ hạng. Thứ thay đổi theo từng giai đoạn là **thứ tự ảnh, nội dung A+, trang Brand Store và ngân sách PPC** (xem lịch ở mục 1.7).
3. **Viết để trợ lý AI của Amazon hiểu được.** Trợ lý mua sắm AI của Amazon (Rufus, từ 13/05/2026 đổi thành *Alexa for Shopping*) có mặt trong **38% phiên mua sắm dịp Black Friday 2025**. Trợ lý này đọc listing như một tập hợp các "tuyên bố" và đối chiếu với đánh giá và phần hỏi đáp. Vì vậy bullet cần trả lời thẳng các câu hỏi kiểu *"Mặc váy này vào mùa đông được không?"*, *"Có hợp đám cưới ở biển không?"*.

**Tiêu đề đề xuất** (từ khóa chính nằm trong khoảng 80 ký tự đầu, là phần hiển thị trên điện thoại):

| SP | Tiêu đề |
|---|---|
| P1 | `SIXDO Women's Rose Print Chiffon Maxi Dress – Flowy Resort Wear for Cruise, Beach Vacation & Destination Wedding Guest` |
| P2 | `SIXDO Women's Silk Floral Midi Dress – Elegant Rose Print Cocktail Dress for Holiday Party, Wedding Guest & Fall Layering` |
| P3 | `SIXDO Women's White Chiffon Blouse – Hand-Pleated Collar Elegant Work Top for Layering Under Blazer or Cardigan` |

**Khung 5 bullet** (ví dụ cho P1):
1. **Dịp mặc:** *WINTER ESCAPE READY – Designed for cruise nights, tropical vacations and beach weddings. Pack it for your December–March getaway.*
2. **Câu chuyện nhà thiết kế:** *DESIGNER-MADE – By Vietnamese designer Do Manh Cuong, shown at New York Fashion Week. Signature rose print you won't see on every deck.*
3. **Chất liệu và cách mặc lớp:** *BREATHABLE CHIFFON, LAYER-FRIENDLY – Light for 75°F sunshine; add a denim jacket or pashmina for air-conditioned dinners or cool evenings.*
4. **Size và độ vừa:** *TRUE US SIZING – XS–XL with inch measurements; model is 5'8" wearing S. See size chart to avoid returns.*
5. **Chăm sóc và giao hàng:** *PRIME DELIVERY & EASY CARE – Arrives before your trip; hand wash cold; packs without heavy creasing.*

**Bộ từ khóa theo nhóm ý định** (① theo mùa, ② theo dịp, ③ theo chuyến đi, như ở Phần 1):

| SP | Từ khóa chính (tiêu đề, bullet, PPC exact) | Từ khóa phụ (backend search terms, tối đa 249 byte) |
|---|---|---|
| P1 | ③ cruise dresses for women, resort wear for women, vacation maxi dress, beach wedding guest dress; ② destination wedding guest dress | tropical vacation outfit, caribbean cruise outfit, honeymoon dress, spring break dress, floral chiffon maxi, flowy long dress elegant |
| P2 | ② wedding guest dress, cocktail dress for women, holiday party dress, christmas party dress; ① fall midi dress | new years eve dress, semi formal dress, rehearsal dinner dress, lunar new year dress, red floral midi, valentines dress, church dress elegant |
| P3 | ① white blouse for women work, chiffon blouse, blouse for layering; ② business casual top | office blouse elegant, pleated collar top, top under blazer, dressy blouse, travel blouse wrinkle resistant |

**Kiểm chứng trước khi chốt:** đối chiếu lượng tìm kiếm thực trong Amazon Brand Analytics (Top Search Terms) hoặc SellerSprite/Helium 10. Loại bỏ những từ khóa có lượng tìm kiếm thấp hoặc toàn đối thủ giá dưới 30 USD.

### 1.3 A+ Content, Brand Store và nội dung chuyển đổi

**A+ Content (Premium A+ nếu đủ điều kiện)** cho cả 3 sản phẩm, gồm 5 mô-đun:
1. **Brand Story (dạng băng chuyền):** NTK Đỗ Mạnh Cường, câu chuyện 6 người con, ảnh trình diễn thật tại NYFW và Rodeo Drive. Đây là bằng chứng cho định vị "thiết kế thật", không phải hàng chợ.
2. **"One dress, three winters"**: cùng một sản phẩm phối cho 3 dịp (Resort / Party / Layered). Đây là mô-đun then chốt của phần định vị lại sản phẩm (mục 2).
3. **Chất liệu:** ảnh cận lụa và voan, độ rủ, độ thoáng.
4. **Bảng size US:** đo bằng inch, có chiều cao và size của người mẫu.
5. **Bảng so sánh chéo:** P1, P2, P3 và gợi ý mua bộ (bundle).

_Chữ nằm trong ảnh thì AI của Amazon không đọc được, nên mỗi mô-đun cần có phần chữ mô tả và alt text._

**Brand Store:** 4 trang tương ứng 4 "Edit":
- *Winter Escape Edit* (🅐)
- *Holiday & Wedding Guest* (🅒)
- *Layer It* (🅑 🅔)
- *Tết & Valentine Edit* (🅓, mở từ 15/01)

Trang chủ Brand Store đổi ảnh bìa theo từng giai đoạn.

**Các yếu tố nâng tỷ lệ chuyển đổi:**

| Yếu tố | Việc cần làm | Lý do |
|---|---|---|
| Đánh giá | Đăng ký **Amazon Vine**: tối đa 2 đánh giá/ASIN cha là miễn phí, 10 đánh giá là 75 USD. Hàng mẫu gửi riêng từ Việt Nam. Bật "Request a Review" cho mọi đơn | Listing chưa có đánh giá thì khó thuyết phục khách trả 99–119 USD |
| Video | Mỗi sản phẩm 1 video 15–30 giây: người mẫu chuyển động, lộ độ bay của voan | Váy voan cần thấy được chuyển động |
| Size và đổi trả | Bảng size có inch; ghi chú "true to size / size down"; theo dõi lý do hoàn hàng hằng tuần | Phí hoàn hàng áp cho mọi đơn quần áo bị trả |
| Hỏi đáp | Soạn sẵn 8–10 câu hỏi thường gặp (mùa đông, dress code, độ xuyên thấu, nhăn khi mang theo vali) và đưa câu trả lời vào bullet/A+ | Giúp AI của Amazon trả lời đúng cho khách |
| Thử nghiệm A/B | Dùng **Manage Your Experiments** cho ảnh chính và A+ của P1, là sản phẩm có lượng truy cập cao nhất | Chọn phương án dựa trên số liệu. Lưu ý: lượng truy cập thấp thì thử nghiệm cần chạy lâu hơn |

### 1.4 Quảng cáo PPC

**Cấu trúc chiến dịch:**

| Chiến dịch | Kiểu nhắm | Nội dung | Ngân sách (% PPC) |
|---|---|---|---|
| **SP – Exact theo dịp** | Từ khóa exact | Từ khóa chính ở mục 1.2, tách chiến dịch theo sản phẩm và nhóm ý định | 40% |
| **SP – Khám phá** | Phrase/Broad + Auto (bid thấp) | Tìm từ khóa mới; chuyển từ khóa ra đơn sang Exact mỗi tuần | 15% |
| **SP – Nhắm sản phẩm đối thủ** | Nhắm ASIN và danh mục | ASIN váy của Adrianna Papell, Eliza J, Maggy London, Free People; danh mục Women's Dresses giá 70–150 USD, rating ≤ 4,2 sao | 20% |
| **Sponsored Brands (+ Video)** | Từ khóa theo chủ đề | Tiêu đề: *"Summer, found in winter – Vietnamese designer, NYFW-shown"*; dẫn về trang Edit trong Brand Store | 15% (bật khi mỗi sản phẩm có ≥ 5 đánh giá) |
| **Sponsored Display** | Nhắm lại người đã xem | Người đã xem hoặc thêm vào giỏ trong 30 ngày | 10% |

**Quy tắc vận hành:**
- **Từ khóa phủ định:** cheap, under 20, kids, girls, sweater, wool, plus size (nếu không có size lớn), costume.
- **Điều chỉnh ngân sách theo giai đoạn:**
  - Tháng 11–12: dồn ngân sách cho P2 (tiệc).
  - Tháng 1: dồn ngân sách cho P1 (du thuyền).
  - Tháng 2: bật nhóm từ khóa Tết, Valentine.
- **Mục tiêu:** ACoS ≤ 30% (trung vị của ngành quần áo khoảng 42%, còn 30% đã được xem là rất tốt); TACoS ≤ 15%.
- **Ngân sách:** khoảng 1.400 USD trong 6 tháng, dao động theo mùa từ 5 đến 12 USD/ngày.

### 1.5 Giá, Coupon và Bundle

**Nguyên tắc: giữ giá niêm yết. Chỉ giảm có thời hạn, có mục đích, không giảm sâu kéo dài** (bài học từ Lilly Pulitzer và các thương hiệu Việt ở Phần 1).

| Công cụ | Khi nào | Mức | Chi phí |
|---|---|---|---|
| **Prime Exclusive Discount** | Black Friday đến Cyber Monday (27–30/11/2026) | 15% | Hiện chưa thu phí _(kiểm tra lại trong Seller Central)_ |
| **Coupon** | Tết, Valentine (01–14/02/2027), chỉ áp cho P2 bản đỏ/hồng | 10% | 5 USD/coupon + 2,5% doanh số dùng coupon (trần 2.000 USD) |
| **Brand Tailored Promotions** | Tháng 1–3, gửi riêng cho người theo dõi thương hiệu và người bỏ giỏ | 10% | Nhắm đúng người đã quan tâm, không giảm giá công khai |
| **Virtual Bundle** (cần Brand Registry) | Cả mùa | "Winter Escape Capsule" P1 + P3 (−10%); "Party & Layer" P2 + P3 (−10%) | Không phí riêng; giúp P3, sản phẩm có sức kéo thấp nhất, bán theo P1, P2 |
| **Lightning Deal** | **Không dùng** (chỉ cân nhắc cho size lẻ cuối tháng 3) | – | 70 USD/ngày + 1% doanh số; đơn trung bình trong các đợt deal chỉ khoảng 45 USD, không hợp tầm giá SIXDO |

**Không dùng các thông điệp:** "clearance", "end of season sale", "last chance". Thay bằng "Winter Escape Edit", "Holiday Edit", "Spring Preview".

### 1.6 Quản lý tồn kho

| Việc | Chi tiết |
|---|---|
| **Kiểm kê tồn kho theo size (tuần đầu tiên)** | Xuất báo cáo FBA Inventory: số lượng theo từng size và màu, và **ngày nhập kho**. Size nào dư nhiều thì ưu tiên trong bundle và Brand Tailored Promotions |
| **Phụ phí tồn kho lâu ngày** | Hàng quần áo bị tính phụ phí từ **ngày 271**. Nếu hàng nhập kho FBA khoảng tháng 3–4/2026 thì **tháng 12/2026 đến tháng 1/2027 bắt đầu bị tính**. Những lô đó cần ưu tiên đẩy trong Q4 |
| **Phí lưu kho mùa cao điểm** | Tháng 10–12 phí lưu kho cao hơn. 110 sản phẩm quần áo chiếm ít thể tích nên không đáng lo, nhưng vẫn cần theo dõi |
| **Không nhập thêm hàng** | Mục tiêu là bán hết hàng tồn. Hàng mẫu cho Vine và KOL gửi riêng |
| **Điều kiện ngắt** | 01/03/2027: nếu còn hơn 20 sản phẩm thì kích hoạt kế hoạch dự phòng (mục 1.8) |

### 1.7 Lịch triển khai

| Giai đoạn | Thời gian | Trọng tâm | Việc chính |
|---|---|---|---|
| **0. Chuẩn bị** | 01–14/10/2026 | Nền tảng | Kiểm tra Brand Registry; kiểm kê tồn kho; chụp ảnh thật và làm bộ ảnh AI (mục 4); viết lại listing; làm A+ và Brand Store; đăng ký Vine; gửi hàng mẫu cho KOL |
| **1. Layer It & Fall Wedding** | 15/10–15/11 | P2, P3; 🅑 🅒 🅔 | Bật PPC; ảnh phối blazer và boot lên vị trí số 2; nội dung KOL đợt 1 |
| **2. Holiday & Escape** | 16/11–31/12 | P2 → P1; 🅒 🅐 | Prime Exclusive Discount dịp BFCM; ảnh tiệc lên đầu; nhắc hạn giao Prime trước Giáng sinh; bật Sponsored Brands |
| **3. Winter Escape** | 01–31/01/2027 | P1; 🅐 🅒 | Dồn ngân sách cho P1; chạy Meta, Pinterest nhắm các bang lạnh; nội dung "cruise outfit" |
| **4. Tết & Valentine** | 01–20/02 | P2 bản đỏ/hồng; 🅓 | Coupon 10%; Meta/TikTok nhắm San Jose, Orange County, Houston; KOL gốc Việt |
| **5. Spring Preview** | 21/02–31/03 | P1, P3; 🅕 🅐 | Đổi góc listing sang "Spring Preview", giữ giá đầy đủ; đẩy bundle; xử lý size lẻ |

### 1.8 KPI và kế hoạch dự phòng

**Bảng KPI theo dõi hằng tuần:**

| Chỉ số | Mục tiêu |
|---|---|
| Số đơn cộng dồn so với kế hoạch tháng (mục 1.1) | ≥ 90% |
| CVR (Business Report) | ≥ 6% |
| ACoS / TACoS | ≤ 30% / ≤ 15% |
| Đánh giá | ≥ 4,3 sao; ≥ 5 đánh giá/ASIN trước 15/11 |
| Tỷ lệ hoàn hàng | < 20% |
| Doanh số từ ngoài Amazon (Amazon Attribution) | ≥ 20% số đơn |

**Kế hoạch dự phòng:**

| Tín hiệu | Hành động |
|---|---|
| Bán thấp hơn kế hoạch 20% trong 2 tuần liên tiếp | Tăng bid cho từ khóa exact đang ra đơn; thêm coupon 10% có thời hạn; đẩy bundle |
| CTR tốt nhưng CVR thấp | Vấn đề nằm ở listing: đổi ảnh chính (A/B), xem lại giá và bảng size |
| Tỷ lệ hoàn hàng trên 25% ở một size | Sửa bảng size và ghi chú "size up/down"; tạm giảm quảng cáo cho size đó |
| Bán vượt kế hoạch | Giảm khuyến mãi, giữ giá đầy đủ |
| Còn hơn 20 sản phẩm vào 01/03 | Tăng Brand Tailored Promotions cho người theo dõi; Lightning Deal cho size lẻ; phương án cuối là chuyển sang kênh outlet hoặc Amazon Outlet, **không xả công khai trên listing chính** |

### 1.9 Hiệu quả tài chính: so sánh với phương án xả hàng

Hàng đã sản xuất nên giá vốn là **chi phí chìm**. Thước đo đúng là **số tiền thu về ròng** và **tài sản thương hiệu còn lại**.

| | **Kế hoạch này** | Xả giá 50% | Thanh lý (FBA Liquidations) |
|---|---|---|---|
| Doanh thu | ≈ 10.150 USD (giá đầy đủ trừ khoảng 8% khuyến mãi trung bình) | ≈ 5.500 USD | Ước tính chỉ 5–10% giá bán |
| Phí Amazon (phí giới thiệu 17%, FBA, dự phòng hoàn hàng) | ≈ −2.800 USD | ≈ −1.850 USD | – |
| Marketing (mục 3.3) | ≈ −2.900 USD (được hoàn khoảng 200 USD qua Brand Referral Bonus) | ≈ −500 USD | – |
| **Tiền thu về ròng** | **≈ 4.650 USD** | ≈ 3.150 USD | ≈ 500–1.000 USD |
| **Tài sản còn lại** | Đánh giá tốt, người theo dõi thương hiệu, từ khóa, bộ ảnh, dữ liệu khách hàng cho mùa sau | Đánh giá từ khách săn sale; khách quen chờ giảm giá | Không có |

_Số liệu là ước tính minh họa với giả định phí FBA 4,5–5,8 USD/đơn. Cần thay bằng số thật từ Seller Central._

---

## 2. Product Repositioning (10 điểm)

### 2.1 Nguyên tắc: "Cùng sản phẩm, đổi bối cảnh"

Không thay đổi sản phẩm vật lý. Chỉ thay 4 yếu tố:

| Yếu tố | Trước (Xuân/Hè ở Việt Nam) | Sau (Thu/Đông trên Amazon US) |
|---|---|---|
| **Content** | "Váy hè, dạo phố, đi biển" | Theo dịp: resort, du thuyền, khách mời đám cưới, tiệc cuối năm, mặc thêm lớp, Tết |
| **Hình ảnh** | Nắng, phố, nền sáng | 3 bối cảnh: du thuyền/resort lúc hoàng hôn, tiệc trong nhà ánh đèn vàng, phố mùa thu (blazer, boot) |
| **Styling** | Mặc riêng, sandal | Phối lớp: blazer lạc đà, cardigan cashmere, trench coat, boot cao cổ, tất mỏng, khăn pashmina, clutch |
| **Thông điệp** | "Nhẹ nhàng, mát mẻ" | **"Always in Bloom"**: hoa hồng SIXDO nở quanh năm, chỉ cần đổi nơi bạn mặc |

### 2.2 Định vị lại từng sản phẩm

| | P1 – Maxi voan hoa hồng | P2 – Midi lụa hoa hồng | P3 – Sơ mi voan trắng |
|---|---|---|---|
| **Định vị mới** | *"Your Winter Escape Dress"*: tủ đồ cho chuyến trốn đông | *"The Dress They'll Ask About"*: váy khách mời, váy tiệc trông như đồ thiết kế | *"The Layer That Makes the Look"*: món mặc bên trong cho mọi bộ đồ công sở |
| **Insight dựa vào** | 🅐 "Tôi cần phiên bản nghỉ dưỡng của chính mình" | 🅒 "Váy khiến người khác hỏi mua ở đâu" | 🅔 "Cởi áo khoác ra tôi vẫn là mình" |
| **Ảnh chủ đạo** | Boong du thuyền lúc hoàng hôn; đám cưới trên biển | Tiệc Giáng sinh ánh đèn vàng; khách mời đám cưới; bản đỏ cho Tết | Dưới blazer navy ở văn phòng; đi cùng P1 trong vali |
| **Cách phối mùa đông** | Áo khoác denim hoặc khăn pashmina cho bữa tối có máy lạnh; trench coat ở sân bay | Blazer lạc đà + boot cao cổ + tất mỏng (🅑 🅔); khăn lông giả cho tiệc ngoài trời | Blazer, cardigan, quần ống rộng; áo len cổ V mặc ngoài |
| **Giai đoạn đẩy mạnh** | Tháng 1 và tháng 3 | Tháng 11–12 và tháng 2 | Cả mùa (qua bundle) |

### 2.3 Rào chắn thương hiệu: không làm sai lệch định vị

| Nên | Không nên |
|---|---|
| Giữ họa tiết hoa hồng và tính thanh lịch, nữ tính làm trung tâm | Gắn thêm yếu tố Giáng sinh rẻ tiền (ông già Noel, tuần lộc) |
| Dùng tư liệu NYFW, Rodeo Drive, câu chuyện NTK | Dùng chữ "clearance", "sale", "last chance" trên listing |
| Giảm giá có thời hạn, có mục đích | Giảm giá công khai trên 30% hoặc kéo dài |
| Người mẫu đa dạng (có người châu Á, nhiều dáng người), đúng với sản phẩm thật | Dùng ảnh AI làm sai màu, sai họa tiết |
| Giá khớp tầm "designer look, accessible price" (69–119 USD) | Hạ giá để cạnh tranh với nhóm hàng dưới 50 USD |

---

## 3. Marketing trong và ngoài Amazon (10 điểm)

### 3.1 Vai trò và thứ tự ưu tiên các kênh

Amazon là **nơi chốt đơn**. Các kênh bên ngoài có nhiệm vụ **tạo nhu cầu theo dịp và nhắm theo vị trí**, việc mà quảng cáo trên Amazon không làm được (Sponsored Products không nhắm được theo bang). Mọi link ra ngoài đều gắn **Amazon Attribution** để đo hiệu quả và nhận **Brand Referral Bonus khoảng 10%**.

| Ưu tiên | Kênh | Vai trò trong phễu | Phân khúc | Cách làm | Ngân sách |
|---|---|---|---|---|---|
| **1** | **Amazon** (PPC, Brand Store, Posts, Vine, Brand Tailored Promotions) | Chốt đơn, giữ chân | Tất cả | Mục 1.3–1.5; Amazon Posts miễn phí, đăng 2–3 bài/tuần theo từng Edit | 1.400 USD |
| **2** | **Meta** (Facebook, Instagram) | Nhận biết, cân nhắc; nhắm vị trí | 🅐 (bang lạnh, sở thích du thuyền), 🅑 (Sun Belt), 🅓 (người Việt ở CA, TX) | Reels và ảnh kiểu "One dress, three winters"; nhắm lại người đã tương tác; dẫn về Brand Store | 500 USD |
| **3** | **KOL / Creator** (micro, 10k–100k người theo dõi) | Tạo niềm tin, nội dung thật | 🅐 creator du lịch/du thuyền; 🅒 creator phong cách tuổi 30+; 🅓 creator gốc Việt | 6–8 creator; tặng sản phẩm (gửi từ Việt Nam), trả hoa hồng 10–15% qua link Attribution; được phép dùng lại nội dung cho quảng cáo | 300 USD (hàng mẫu và vận chuyển) + hoa hồng |
| **4** | **TikTok** | Nhận biết, lan tỏa | 🅐 (#cruiseoutfits), 🅒 (#GRWM holiday party), 🅓 (#tetoutfit) | Spark Ads đẩy video của KOL; không mở TikTok Shop riêng để tránh chia nhỏ tồn kho | 300 USD |
| **5** | **Pinterest** | Lên kế hoạch chuyến đi | 🅐 🅕 | Pin các Edit "Cruise capsule", "Spring break outfits"; người dùng Pinterest lên kế hoạch từ sớm | 150 USD |
| **6** | **Google** | Bắt nhu cầu tìm kiếm thương hiệu | Người đã biết SIXDO qua NYFW, báo chí | Search ads cho từ khóa thương hiệu ("SIXDO", "Do Manh Cuong dress") dẫn về Amazon | 150 USD |
| **7** | **Affiliate** (blog du lịch, newsletter thời trang) | Nội dung bền, tìm kiếm tự nhiên | 🅐 🅒 🅕 | Đưa sản phẩm vào bài "What to pack for a Caribbean cruise", "Wedding guest dresses"; trả hoa hồng theo link Attribution | Theo hoa hồng |

**Chưa dùng Amazon Creator Connections:** chương trình này yêu cầu ngân sách tối thiểu 5.000 USD, quá lớn so với 110 sản phẩm. Để dành cho giai đoạn mở rộng.

### 3.2 Hành trình khách hàng qua các kênh

```
NHẬN BIẾT               CÂN NHẮC                     CHUYỂN ĐỔI                 GIỮ CHÂN
TikTok, KOL, Reels  →   Meta retarget, Pinterest, →  Amazon PPC, Brand Store, → Follow brand, Posts,
(nội dung theo dịp)     Google (tìm "SIXDO")         A+, Vine, Coupon/Bundle    Brand Tailored Promotions
```

### 3.3 Tổng ngân sách marketing

| Hạng mục | USD |
|---|---|
| Amazon PPC | 1.400 |
| Meta | 500 |
| TikTok Spark Ads | 300 |
| KOL (hàng mẫu, vận chuyển) | 300 |
| Pinterest + Google | 300 |
| Vine (10 đánh giá cho P1, 2 đánh giá miễn phí cho P2, P3) | 75 |
| Công cụ AI tạo ảnh và video (mục 4) | 25 |
| **Tổng** | **≈ 2.900** (khoảng 28% doanh thu dự kiến; một phần được hoàn qua Brand Referral Bonus) |

Tỷ lệ này cao hơn mức bình thường vì đây là **giai đoạn ra mắt thương hiệu trên Amazon**. Đánh giá, người theo dõi và bộ nội dung tạo ra sẽ được dùng tiếp cho các mùa sau.

---

## 4. Dùng AI tạo sinh làm bộ hình cho 3 sản phẩm (5 điểm)

### 4.1 Quy định của Amazon cần tuân thủ

- **Ảnh chính (main image) phải là ảnh chụp thật** của sản phẩm thật: người mẫu đứng hoặc ghost mannequin, nền trắng tuyệt đối (RGB 255, 255, 255), sản phẩm chiếm ≥ 85% khung hình. **Không dùng ảnh do AI tạo hoàn toàn, ảnh 3D hay mockup làm ảnh chính.**
- **Ảnh phụ được dùng AI**: tạo hoặc thay nền, chỉnh ánh sáng, dựng bối cảnh lifestyle quanh sản phẩm thật.
- Người bán chịu trách nhiệm: ảnh phải **thể hiện đúng sản phẩm** được giao, đúng màu, đúng họa tiết, đúng độ dài.

### 4.2 Quy trình 6 bước

| Bước | Việc | Công cụ gợi ý |
|---|---|---|
| 1. Ảnh gốc thật | Chụp ghost mannequin, flat-lay, cận chất liệu; dùng lại ảnh lookbook có người mẫu của SIXDO cho ảnh chính | Máy ảnh hoặc điện thoại, hộp đèn |
| 2. Ảnh mặc trên người mẫu AI (ảnh phụ) | Đưa ảnh flat-lay hoặc ghost mannequin vào công cụ virtual model; chọn người mẫu đa dạng (có người châu Á, nhiều dáng người) | Botika, Photoroom Virtual Model, Claid, WearView |
| 3. Bối cảnh lifestyle | Ghép sản phẩm vào các bối cảnh theo phân khúc (prompt ở mục 4.3) | Google Gemini (tạo và chỉnh ảnh), Adobe Firefly; công cụ tạo ảnh trong Amazon Ads cho ảnh quảng cáo Sponsored Brands |
| 4. Infographic và A+ | Bảng size, "One dress, three winters", chất liệu, Brand Story | Canva |
| 5. Video 15–30 giây | Chuyển ảnh thành video chuyển động (voan bay, xoay người) | Google Veo, Kling, Runway |
| 6. Kiểm tra chất lượng và thử A/B | Kiểm theo checklist mục 4.4; thử ảnh bối cảnh ở vị trí số 2 bằng Manage Your Experiments | Amazon Manage Your Experiments |

**Chi phí:** công cụ AI khoảng 0,10–1,10 USD/ảnh, so với 5.000–15.000 USD cho một buổi chụp truyền thống. Làm 3 sản phẩm × khoảng 9 ảnh cùng các bản thử chỉ tốn vài chục USD.

### 4.3 Bộ hình cho mỗi sản phẩm (9 ảnh + 1 video)

| # | Loại ảnh | Nguồn | P1 – Maxi | P2 – Midi | P3 – Sơ mi |
|---|---|---|---|---|---|
| 1 | Ảnh chính, nền trắng | **Ảnh thật** | Người mẫu đứng, toàn thân | Người mẫu đứng, toàn thân | Người mẫu đứng hoặc ghost mannequin |
| 2 | Bối cảnh chính theo phân khúc | AI | Boong du thuyền lúc hoàng hôn | Tiệc cuối năm ánh đèn vàng | Văn phòng, mặc dưới blazer navy |
| 3 | Bối cảnh phụ | AI | Khách mời đám cưới trên biển | Phố mùa thu, phối blazer lạc đà + boot | Phối cardigan + quần ống rộng |
| 4 | "One dress, three winters" | AI + Canva | Resort / Bữa tối với khăn choàng / Sân bay với trench coat | Tiệc / Mặc lớp / Tết (bản đỏ) | Công sở / Du lịch / Bữa tối |
| 5 | Mặt sau và chi tiết | Ảnh thật | Dây vai, lưng váy | Cổ áo, đường may | Ly cổ thủ công |
| 6 | Cận chất liệu | Ảnh thật | Độ trong và độ rủ của voan | Độ bóng của lụa | Độ mỏng của voan |
| 7 | Bảng size US | Canva | Inch, chiều cao người mẫu | Inch | Inch |
| 8 | Brand Story | Ảnh thật (NYFW) | Runway NYFW, NTK Đỗ Mạnh Cường | Như P1 | Như P1 |
| 9 | Gợi ý bundle | AI + Canva | P1 + P3 "Winter Escape Capsule" | P2 + P3 "Party & Layer" | P3 đi với P1, P2 |
| 🎬 | Video 15–30 giây | AI từ ảnh thật | Voan bay trong gió biển | Xoay người ở tiệc | Khoác, cởi blazer |

**Ví dụ prompt** (tiếng Anh, luôn dùng kèm ảnh sản phẩm thật làm ảnh tham chiếu):

- **P1 – Du thuyền:** *"Place the exact dress from the reference image, keep the rose print, colors and length unchanged, on an Asian-American woman in her 30s standing on a cruise ship deck at golden hour, Caribbean sea behind, a light pashmina over one arm, natural candid pose, editorial fashion photography, 50mm, soft warm light."*
- **P2 – Phối lớp mùa thu:** *"Same silk rose-print midi dress from the reference, unchanged print and color, styled with a camel wool blazer, sheer black tights and knee-high brown leather boots, woman walking on a tree-lined city street with autumn leaves, overcast soft light, realistic fashion editorial."*
- **P2 – Tết (bản đỏ):** *"Same red rose-print midi dress from the reference, woman at a modern Lunar New Year family gathering, peach blossom branches and red lanterns softly blurred in the background, elegant, warm, joyful, realistic photography."*
- **P3 – Văn phòng:** *"Same white chiffon blouse with hand-pleated collar from the reference, collar details unchanged, worn under a tailored navy blazer with wide-leg trousers, modern bright office, confident woman, clean natural light."*

### 4.4 Checklist kiểm tra ảnh AI

- [ ] Họa tiết hoa hồng giữ đúng kích thước, vị trí, màu (so với ảnh thật)
- [ ] Độ dài váy, dáng cổ, dây vai, chi tiết ly không bị thay đổi
- [ ] Tay, ngón tay, khuôn mặt tự nhiên; không có chữ hoặc logo lạ
- [ ] Độ trong và độ rủ của chất liệu đúng thực tế (tránh làm voan trông dày hơn)
- [ ] Ảnh chính là ảnh thật, nền trắng tuyệt đối, sản phẩm chiếm ≥ 85% khung hình
- [ ] Người mẫu đa dạng, phù hợp phân khúc
- [ ] Lưu ảnh gốc và prompt để đối chiếu khi Amazon yêu cầu

---

## 5. Tóm tắt Phần 3

| Barem | Điểm | Nội dung chính |
|---|---|---|
| Amazon Operations & Commercial | 25 | Mục tiêu 110 sản phẩm chia theo tháng và theo sản phẩm; tính ngược cần khoảng 1.830 lượt truy cập; listing và từ khóa theo dịp; A+ và Brand Store; PPC 5 lớp với ACoS ≤ 30%; giữ giá, khuyến mãi có thời hạn, bundle; quản lý tồn kho (phụ phí từ ngày 271); KPI và dự phòng; tiền thu về khoảng 4.650 USD so với 3.150 USD nếu xả 50% |
| Product Repositioning | 10 | "Cùng sản phẩm, đổi bối cảnh"; thông điệp **"Always in Bloom"**; định vị riêng cho từng sản phẩm; rào chắn thương hiệu |
| Marketing trong và ngoài Amazon | 10 | Amazon chốt đơn; Meta, KOL, TikTok, Pinterest, Google, Affiliate tạo nhu cầu theo dịp và vị trí; Amazon Attribution và Brand Referral Bonus; ngân sách khoảng 2.900 USD |
| AI tạo sinh | 5 | Quy trình 6 bước; ảnh chính là ảnh thật, ảnh phụ dùng AI; 9 ảnh + 1 video cho mỗi sản phẩm; prompt mẫu; checklist kiểm tra |

---

## Nguồn
- [SupplyKick – Amazon Coupons 2026: How they work & what they cost](https://www.supplykick.com/blog/amazon-coupons-marketing-features)
- [Novadata – Amazon coupon fee cap $2,000](https://novadata.io/resources/news/amazon-coupon-fee-cap)
- [Blue Wheel – Amazon changing fee structure for coupons & deals](https://www.bluewheelmedia.com/marketplace-updates/amazon-new-fees-coupons-deals)
- [My Amazon Guy – Amazon Vine program 2026](https://myamazonguy.com/reviews/amazon-vine-on-seller-central/)
- [BellaVix – Amazon Vine program costs in 2026](https://www.bellavix.com/amazon-vine-program-costs-in-2026-what-sellers-and-vendors-need-to-know/)
- [CatalogX – Amazon apparel image requirements 2026](https://catalogx.app/blog/amazon-apparel-photo-requirements-model)
- [Green Onion – Are AI-generated product images allowed on Amazon? (2026)](https://greenonion.ai/blog/ai-generated-product-images-allowed-amazon)
- [BrandShots – AI images on Amazon listings: what's allowed in 2026](https://www.brandshots.app/blog/ai-images-amazon-listings-2026-policy)
- [SellerMetrics – Amazon Brand Referral Bonus 2026](https://sellermetrics.app/amazon-brand-referral/)
- [Novadata – Brand Referral Bonus & external traffic 2026](https://novadata.io/resources/news/amazon-brand-referral-bonus-external-traffic-2026)
- [Autron – Amazon PPC benchmarks by category 2026](https://autron.ai/benchmark/amazon-ppc-benchmarks-by-category-2026)
- [Sequence Commerce – Amazon Ads CPC & conversion benchmarks 2026](https://sequencecommerce.com/amazon-advertising-benchmarks/)
- [Netpeak – 100 statistics on Amazon marketing for fashion brands](https://netpeak.us/blog/from-generic-to-iconic-100-statistics-on-amazon-marketing-for-fashion-brands/)
- [Perpetua – Alexa for Shopping (Amazon Rufus) guide 2026](https://perpetua.io/blog-alexa-for-shopping-amazon-rufus-the-complete-guide-for-brands-and-sellers/)
- [Amalytix – Alexa for Shopping (formerly Rufus) 2026](https://www.amalytix.com/en/knowledge/ai/amazon-rufus-guide-2026/)
- [Inventory Hero – Amazon aged-inventory surcharge 2026](https://www.inventoryhero.ai/guides/amazon-aged-inventory-surcharge-2026)
- [SalesDuo – Amazon Creator Connections 2026](https://salesduo.com/blog/amazon-creator-connections-for-brands/)
- [Claid – AI fashion photoshoot generators 2026](https://claid.ai/blog/article/ai-fashion-photoshoot-generators)
- [Photoroom – AI virtual model](https://www.photoroom.com/tools/virtual-model)
- [WearView – Best AI on-model photography tools 2026](https://www.wearview.co/blog/best-ai-on-model-photography-tools)
- [Acadia – Prime Big Deal Days 2025 results](https://acadia.io/prime-big-deal-days-2025-results)
