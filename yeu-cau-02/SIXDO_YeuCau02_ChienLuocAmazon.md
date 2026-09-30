# Chiến lược kinh doanh SIXDO trên Amazon US
Yêu cầu 02 – Amazon Operations & Commercial
Tái đóng gói và vận hành 3 sản phẩm Xuân/Hè  |  01/10/2026 – 31/03/2027 (182 ngày)

### Kết luận chính
SIXDO không cần sản phẩm mới hay giảm giá sâu. Kế hoạch dựa trên hai việc:
- Bán theo dịp mặc và nơi mặc, thay vì theo mùa trên lịch.
- Làm listing khớp với hàng thật, để khách tin món đồ vừa, có chất liệu tốt và trông đúng như ảnh.

Các điểm chính:
- **CVR là đòn bẩy chính.** PPC 181 USD chỉ mua được khoảng 234 click, tức 14–21 units. Nâng tỷ lệ mua (Unit Session %) từ 6% lên 9% trên cùng lượng khách cho thêm khoảng 27 units. Mua số units đó bằng quảng cáo sẽ tốn khoảng 405 USD.
- **Mục tiêu 110 units.** Dự báo cơ sở là 71 units, kịch bản thận trọng 49 units. Cả ba kịch bản đều lãi hơn xả giá 50%. Hàng còn lại giữ giá để bán mùa Xuân/Hè 2027.
- **Mỗi SKU có một tháng bán chính:**
  - SP2 vàng, tháng 10–11: mùa thu.
  - SP3 đen, tháng 11–12: tiệc cuối năm.
  - SP1 và SP2 xanh, tháng 1–2: chuyến đi đến nơi ấm.
  - SP3 hồng, tháng 2–3: Valentine và Phục sinh.
- **SP2 phải sửa listing trước khi chạy quảng cáo**, vì 5/8 review lệch kỳ vọng.
- **SP3 chỉ chạy quảng cáo nhắm ASIN, bid tối đa 0,55 USD**, vì ở CPC 0,90 USD thì lỗ.
- **Phân bổ 300 USD:** PPC 181 + PPC bổ sung có điều kiện 29 + phí coupon tối đa 50 + công cụ A+ 20 + dự phòng 20.

Nhãn số liệu:
- **[XN]:** đã xác nhận.
- **[GĐ]:** giả định, sẽ thay bằng số thật.
- **[KC]:** cần kiểm chứng.

Chưa có Business Report, tồn kho theo biến thể và file Helium 10 đầy đủ. Mô hình được dựng để khi có số thật chỉ cần tính lại, không phải đổi logic (xem Phụ lục B). Bài giữ nguyên các nguyên tắc dữ liệu của Phần 1–2.

## 1 Mục tiêu và mô hình bán hàng

### 1.1 Định nghĩa và mục tiêu
- **Units = Session × Unit Session %.**
- **Session tự nhiên = tổng session − click PPC − click ngoài sàn.** Click ngoài sàn đo bằng Amazon Attribution.
- **"Uplift CVR 50%" = CVR mục tiêu gấp 1,5 lần CVR cơ sở** (6% [GĐ] lên 9%), không phải cộng thêm 50 điểm %.

| Mục tiêu | Chỉ số | Mức cần đạt |
|---|---|---|
| Bán hàng | Units ordered 01/10–31/03 | Mục tiêu 110 · dự báo 71 · thận trọng 49 |
| Chuyển đổi | Unit Session % theo ASIN con, từ 01/11 | ≥ 1,5 lần baseline |
| Giữ giá | Doanh thu thực ÷ (units × giá niêm yết) | ≥ 95%; không giảm quá 15% |
| Chất lượng | Rating; tỷ lệ hoàn | Rating ≥ 4,3; hoàn < 20% |

### 1.2 Mỗi SKU bán cho nhu cầu nào
Bằng chứng lấy từ Helium 10, Google Trends Q4 index và review trong Phần 1–2 [N1]. Thứ tự ưu tiên xét theo mức phù hợp × tồn kho × lợi nhuận góp.

| SKU (tồn [GĐ]) | Nhu cầu chính | Bằng chứng | Tháng | Ưu tiên |
|---|---|---|---|---|
| SP2 vàng (20) | Mùa thu, long sleeve; phụ: wedding guest | long sleeve dress 46,6K, đỉnh Sep–Oct | 10–11 | 1. Chỉ đẩy traffic sau khi sửa listing. Nếu tay áo không dài thì bỏ hướng long sleeve |
| SP3 đen (25) | Tiệc cuối năm, phối lớp | holiday dress Q4 index 308,6; 5/8 review nhắc nhiều cách dùng | 11–12 | 2. Bằng chứng tốt nhất |
| SP1 jumpsuit (20) | Chuyến đi đến nơi ấm, brunch | Review nhắc vacation; dressy jumpsuits 19,3K | 1–3 | 3. Nhu cầu ngách, chỉ có 2 review |
| SP2 xanh (20) | Vacation maxi, wedding guest ở nơi ấm | vacation dress 16,5K; không phải đỉnh Q4 | 1–2 | Như SP2 vàng |
| SP3 hồng (25) | Valentine, Phục sinh (Tết chỉ khi có creator) | Ngày lễ [XN]; chưa có volume | 2–3 | 4. Rủi ro tồn cuối kỳ cao nhất |

### 1.3 Ba kịch bản
Giả định [GĐ]:
- 3 session tự nhiên/ngày, tức 546 session trong 182 ngày.
- CVR cơ sở 6%.
- PPC 234 click, dùng cùng CVR với traffic tự nhiên.

| Nguồn | Thận trọng | Cơ sở | Mục tiêu |
|---|---|---|---|
| Tự nhiên: session · CVR · units | 546 · 6% · 33 | 655 (+20%) · 7,5% · 49 | 922 (+69%) · 9% · 83 |
| PPC: click · CVR · units | 233 · 6% · 14 | 233 · 7,5% · 17 | 233 · 9% · 21 |
| Ngoài sàn: click · tỷ lệ mua · units | 80 · 3% · 2 | 120 · 4% · 5 | 150 · 4% · 6 |
| Tổng units | 49 | 71 | 110 |
| SP1 / SP2 xanh / SP2 vàng / SP3 đen / SP3 hồng | 11/9/10/12/7 | 16/13/13/18/11 | 20/20/20/25/25 |
| Còn lại, giữ giá | 61 | 39 | 0 |

- **Vì sao cơ sở dùng CVR 7,5%:** listing mới chỉ xong vào giữa tháng 10, nên CVR bình quân cả kỳ chỉ tăng dần lên 9%.
- **Organic tăng từ đâu:** session tự nhiên phải tăng 20% (cơ sở) hoặc 69% (mục tiêu). Mức tăng này chưa được xác nhận [KC]. Các nguồn giả định:
  - Index từ khóa mới: +50 session.
  - CTR cao hơn nhờ ảnh chính và nhãn coupon: +30.
  - Lan tỏa từ PPC: +20.
  - Traffic chéo qua A+ và Brand Store: +9.
- **Rủi ro ngược chiều:** "summer dress" chỉ có Q4 index 19,8. Nếu giữ listing cũ, traffic tự nhiên có thể giảm.
- **SP3 hồng khó đạt mục tiêu nhất:** cần tăng 123% session tự nhiên.

### 1.4 Quy tắc ra quyết định
| Mốc | Nếu thấy | Thì làm |
|---|---|---|
| 01–07/10 | Session tự nhiên < 2/ngày hoặc CVR baseline < 4% | Chuyển sang kịch bản thận trọng; ưu tiên đòn bẩy CVR trước PPC |
| 15/10 | SP2 chưa có ảnh thật và thông số | Hoãn PPC SP2: 15 USD bật SP3 đen từ 01/11, 30 USD dồn sang tháng 1 |
| 15/11 | CVR SP2 < baseline hoặc tỷ lệ hoàn > 25% | Dừng PPC SP2, sửa ảnh và size chart. Nếu tốt (ACoS ≤ 25%) thì mở thêm tối đa 10 USD đến 25/11 |
| 30/11 | Lũy kế < 16 units | Bật coupon Holiday Party từ 01/12 và dừng PPC SP3 đen cùng ngày; 19 USD dồn sang tháng 1 |
| 15/01 | SP1/SP2 có ACoS ≤ 30% | Mở tối đa 19 USD PPC bổ sung. Nếu lũy kế < 30 units thì hạ về kịch bản thận trọng |
| 15/02 | SKU còn tồn > 2 lần số dự kiến bán | Đưa vào đợt tháng 3, coupon Phục sinh, bundle |
| 31/03 | Còn hàng | Không xả. Giữ giá cho mùa Xuân/Hè 2027 |

## 2 Từ khóa và SEO theo search intent
> Tóm tắt: Trong Q4, khách không tìm "summer dress". Họ tìm theo dịp ("holiday dress"), theo cách mặc ("long sleeve dress") hoặc theo chuyến đi ("vacation dress"). Listing được index cho các từ này sẽ có traffic mới.

| Intent | SKU | Cao điểm [N1] | Cách dùng |
|---|---|---|---|
| Dịp cụ thể | SP3 đen, SP3 hồng, SP1 | holiday dress đỉnh tháng 11; Valentine, Phục sinh | PPC theo từng dịp |
| Phối nhiều bối cảnh, mùa thu | SP2, SP3 | long sleeve dress đỉnh Sep–Oct | SP2 tháng 10–11 |
| Chuyến đi đến nơi ấm | SP1, SP2 | vacation dress không đỉnh Q4; mùa đặt vé du thuyền tháng 1–3 [1] | Ở Q4 chỉ đưa vào nội dung; PPC dồn sang tháng 1–2 |

Vị trí đặt: T = title · HL = Item Highlights · Ex = PPC exact · Au = PPC auto. "H10" là từ khóa chưa có số, sẽ điền ngày 03/10.

| SKU | Từ khóa chính (volume H10) và vị trí | Từ khóa phụ (H10) |
|---|---|---|
| SP1 | dressy jumpsuits for women 19,3K (T, Ex) · wedding guest jumpsuit 1,8K (HL, Ex) · jumpsuits for women 157,1K (T, Au) | vacation jumpsuit, wide leg floral jumpsuit, cruise outfits, resort wear |
| SP2 | floral maxi dress 8,3K (T, Ex) · vacation dress 16,5K (HL, Ex từ tháng 1) · long sleeve dress 46,6K (T, Au, nếu tay dài) · fall dresses for women 564,9K (HL "fall events", Au, không chạy exact vì quá rộng) | long sleeve floral maxi dress, tiered maxi dress, fall wedding guest dress |
| SP3 đen | holiday dress 1,7K, snapshot trước mùa đỉnh (HL, Ex) · casual dresses for women 91,6K (Au) | holiday party dress, black cocktail dress |
| SP3 hồng | – | valentines day dress, easter dress for women, pink easter dress |

**Chọn từ khóa theo điểm:** Điểm = độ phù hợp × lượng tìm kiếm × cạnh tranh × CPC, mỗi yếu tố 1–3.
- ≥ 16 điểm: đặt ở title và chạy exact.
- 8–15 điểm: đặt ở Item Highlights, chạy exact đúng đợt.
- ≤ 6 điểm: để ở backend hoặc PPC auto.

Với 110 units, một từ nhỏ nhưng khớp đúng dịp có giá trị hơn một từ lớn nhưng rộng.

**Negative keywords** (phrase):
- Giá rẻ: clearance, cheap, sale.
- Người mặc: kids, men, maternity, plus size.
- Loại khác: romper, shorts, set, sweater, knit, sequin, bodycon.
- Trái mùa: winter coat; exact "summer dress".
- Theo SKU: "long sleeve" cho SP1/SP3, "black" cho SP1/SP2, "floral" cho SP3.

**Backend search terms** (≤ 249 byte, không lặp từ trong title, không tên thương hiệu [2]):

| SKU | Backend search terms | Byte |
|---|---|---|
| SP1 | `dressy one piece palazzo pants tropical beach caribbean hawaii mexico honeymoon getaway trip destination spring summer rehearsal bridal baby shower birthday date night flowy loose breathable boho chinoiserie easter` | 214 |
| SP2 | `flowy boho ruffle modest church bridesmaid garden party baby shower family photos thanksgiving autumn outfit cruise resort beach destination honeymoon getaway puff cottagecore prairie mustard yellow blue` | 203 |
| SP3 | `lbd little skater swing ruffle aline sundress slip cami sleeveless date night birthday graduation homecoming church work office layering christmas nye valentines semi formal wedding guest rehearsal dinner` | 204 |

## 3 Listing, A+ Content và Brand Store
> Tóm tắt: Title và ảnh chính cho khách biết ngay món đồ hợp dịp nào. Bullet, ảnh cận và size chart trả lời hai chủ đề được nhắc nhiều nhất trong review đối thủ: chất liệu (32/40) và size (30/40). Chỉ ghi điều kiểm chứng được.

### 3.1 Title
Quy định title:
- **Item Name tối đa 75 ký tự và Item Highlights tối đa 125 ký tự**, áp dụng từ 27/07/2026 [3]. Cả ba title hiện tại đều vượt 75 ký tự nên có thể bị Amazon tự viết lại.
- **Quy tắc nội bộ:**
  - Bỏ năm, chữ "Summer" và mã "G".
  - Đổi tên "Raw" (tiếng Anh gợi nghĩa thô).
  - Không dùng "haute couture": thuật ngữ này được bảo hộ tại Pháp và chỉ dùng làm định vị nội bộ.

| SKU | Trước (ký tự) | Item Name mới | Item Highlights mới |
|---|---|---|---|
| SP1 | SIXDO G White Blue Floral Woven Long Jumpsuit for Women 2026, Feminine Breezy Jumpsuit for Beach and Summer Events (114) | `SIXDO Women's Floral Halter Jumpsuit, Wide Leg Cotton Long Jumpsuit` (67) | `Blue and white print, sleeveless; for vacation, cruise, resort dinners, brunch and wedding guest outfits` |
| SP2 | SIXDO Voile Floral Flared Maxi Dress for Women 2026, Feminine Sheer-Sleeve Dress for Garden Party and Vacation (110) | A (tay dài): `SIXDO Women's Long Sleeve Floral Maxi Dress, Tie Neck Tiered Voile Dress` (72)<br>B: `SIXDO Women's Floral Maxi Dress, Tie Neck Tiered Flowy Voile Dress` (66) | `Lightweight polyester voile, ditsy print; for fall events, wedding guest, vacation and travel` |
| SP3 | SIXDO Raw Flared Dress for Women, Sleek and Versatile for Work Events and Formal Celebrations (93) | `SIXDO Women's Spaghetti Strap Tiered Fit and Flare Dress` (56) | Đen: `Solid black polyester; for holiday parties, cocktail hour, New Year's Eve; layer with a blazer or cardigan`<br>Hồng: `Solid blush pink polyester; for Valentine's Day, Easter, bridal showers, brunch; layer with a denim jacket` |

### 3.2 Bullet
Bản đầy đủ 5 bullet của từng sản phẩm, sửa từ bullet đang có trên Amazon, nằm ở file riêng *SIXDO_YeuCau02_Bullet_LamRo*. Thứ tự: dịp dùng → thương hiệu → chất liệu → size (inch) → cách giặt. Phần [ ] là số liệu thật, phải điền trước khi đăng. Không claim "true to size", "warm" hay "non-see-through" khi chưa kiểm chứng.

Bullet 2 dùng chung cho cả ba sản phẩm: `FROM A RUNWAY DESIGN HOUSE – SIXDO is a Vietnamese fashion brand whose collections have been shown at New York Fashion Week.` Đây là thành tích của thương hiệu, không phải của từng mẫu.

| Bullet | SP1 (cotton, theo nhãn) | SP2 (100% polyester voile) | SP3 (100% polyester) |
|---|---|---|---|
| 1. Dịp | `MADE FOR WARM-WEATHER PLANS – For vacations, cruises, travel days, resort dinners and brunch.` | `ONE DRESS FOR FALL EVENTS AND TRIPS – A gentle flare from the waist; for fall gatherings, daytime weddings as a guest, brunch and getaways.` | `DRESS IT UP OR LAYER IT – Sleeveless high-waist A-line, open back; for [holiday parties, New Year's Eve / Valentine's Day, Easter brunch]. Add a blazer or tights when it's cold.` |
| 3. Chất liệu | `BREATHABLE WOVEN FABRIC – [cotton / rayon-cotton blend] per label. Pull-on, no zip. [Not / slightly] see-through.` | `IS IT SHEER? – Sleeves are sheer voile by design. Body: [lined / unlined]. 100% polyester voile, not a warm winter fabric. Zip closure.` | `SOLID POLYESTER, CLEAR FACTS – 100% polyester, [lined / unlined], [opaque / slightly see-through]. Pull-on, open back.` |
| 4–5. Size, giặt | `FIND YOUR SIZE IN INCHES – bust, waist, hip, inseam [ ]; model wears [ ].` · `CARE – Hand wash only.` | `FIND YOUR SIZE IN INCHES – S (4–6) to XXL (20–22); chart in images.` · `CARE – Hand wash only.` | `FIND YOUR SIZE IN INCHES – S–XXL [ ].` · `CARE – Hand wash recommended.` |

Hai lưu ý:
- **SP2 đắt hơn khoảng 70%** so với maxi hoa của PRETTYGARDEN (khoảng 30 USD). Lý do đáng tiền phải được chứng minh bằng ảnh macro vải, ảnh lật lót, ảnh cận tay bồng và dây cổ, và video 15–30 giây, không bằng tính từ.
- **Q&A không còn nổi bật trên trang sản phẩm.** Khách hỏi qua trợ lý Alexa for Shopping (trước là Rufus) [4], nên bullet phải trả lời thẳng câu "có xuyên không, có lót không".

### 3.3 Ảnh, A+ và Brand Store
**Chín ảnh cho mỗi sản phẩm** [5]. Tất cả chụp từ hàng tồn thật dưới ánh sáng ngày. AI chỉ dùng để tạo nền, không vẽ lại sản phẩm.

| Ô | Nội dung | Mục đích |
|---|---|---|
| 1 | Ảnh chính: người mẫu đứng, nền trắng | CTR |
| 2–4 | Hai bối cảnh theo dịp; một ảnh phối lớp với cardigan và giày kín mũi | Tin là hợp dịp, mặc được mùa này |
| 5–6 | Cận vải (SP2 có thêm ảnh lật lót, soi độ xuyên); chi tiết cổ, dây, tầng váy | Giảm hoàn hàng, thấy đáng tiền |
| 7–8 | Size chart bằng inch; ảnh không chỉnh sửa, mặt trước, sau và bên | Giảm hoàn do size hoặc lệch ảnh |
| 9 | Thương hiệu NYFW; video ở ô video | Tin thương hiệu |

**A+ Basic, 5 module** (miễn phí, gửi trước 07/10) [6]:
- Image Header "One piece, many occasions."
- Three Images & Text: 3 dịp cho mỗi SKU.
- Specs Detail: chất liệu và lót.
- Tech Specs: size chart dạng chữ.
- Comparison Chart: so sánh 3 SKU, để dẫn khách sang SKU khác khi hết size.

A+ không nhắc giá, đối thủ hay tên ngày lễ. Tên ngày lễ chỉ đặt ở title và bullet.

**Brand Story:** "SIXDO – runway-designed florals from Vietnam."

**Brand Store theo dịp:** Party Season, Layer It, Warm-Weather Getaways, Spring Occasions, Size & Fabric Guide. Mọi link ngoài sàn đều gắn Amazon Attribution.

## 4 Conversion: đòn bẩy cho mục tiêu +50% CVR
> Tóm tắt: Khách thời trang không mua khi chưa chắc món đồ vừa, chất liệu ra sao và trông thế nào khi nhận. Giải quyết ba điều này, bắt đầu từ SP2, là cách rẻ nhất để bán thêm.

CVR quyết định cả số units lẫn việc PPC có lãi hay không:
- Trên 888 session Amazon, CVR 6% cho 53 units; CVR 9% cho 80 units.
- ACoS = CPC ÷ (CVR × giá). Khi CVR tăng từ 6% lên 9%:
  - ACoS của SP1/SP2 giảm từ 28,9% xuống 19,2%.
  - ACoS của SP3 giảm từ 57,7% xuống 38,5%.
- Benchmark ngành dao động 3–16% [7], nên bài lấy baseline của chính SIXDO làm mốc.

| # | Đòn bẩy (miễn phí) | Bằng chứng | Hạn |
|---|---|---|---|
| 1 | Sửa ảnh cho khớp hàng thật (SP2 trước) | 5/8 review SP2 lệch kỳ vọng [N1] | 12/10, điều kiện để chạy PPC SP2 |
| 2 | Size chart bằng inch, thông tin người mẫu | 30/40 review đối thủ nhắc size | 10/10 |
| 3 | Ghi rõ chất liệu, lót, độ xuyên thấu | 32/40 review nhắc chất liệu | 12/10 |
| 4 | Ảnh bối cảnh theo dịp, đổi theo từng đợt | Insight Phần 2 | 14/10 |
| 5 | Video và A+ | A+ có thể tăng doanh số tới 8% [8] | 07–20/10 |
| 6 | Xin review; Vine 2 units SP1 nếu miễn phí | SIXDO ít review hơn đối thủ | Liên tục |
| 7 | Đọc lý do hoàn hàng: do size thì sửa size chart, do không đúng mô tả thì sửa ảnh | FBA Returns | Mỗi 2 tuần |

Coupon chỉ bật sau khi làm xong đòn bẩy 1–4.

**Cách đo.** Mỗi listing chỉ có 1–2 session/ngày, trong khi kiểm định thống kê cần khoảng 1.200 session mỗi nhóm. Vì vậy không kiểm định trên từng listing, mà đo theo cách sau:
- So sánh 14 ngày trước và sau mỗi thay đổi, đối chiếu với một ASIN đối chứng.
- Khảo sát ảnh chính với 20–30 khách mục tiêu.
- Theo dõi add-to-cart rate trong Search Query Performance.
- Đánh giá CVR tổng kỳ so với baseline.

## 5 PPC
> Tóm tắt: Chỉ dùng Sponsored Products, chạy 4 đợt theo dịp và không quá 2 chiến dịch cùng lúc. Search term report cho biết từ nào ra đơn để đưa vào listing.

| USD mỗi unit | SP1 · SP2 | SP3 |
|---|---|---|
| Giá bán [XN] | 51,99 | 25,99 |
| Lợi nhuận góp sau dự phòng hoàn 8%, A / B | 32,83 / 23,99 | 13,91 / 9,49 |
| ACoS hòa vốn A / B | 63,1% / 46,1% | 53,5% / 36,5% |
| CPC hòa vốn B tại CVR 6% | 1,44 | 0,57 |

A và B là hai cách hiểu base cost (mục 8). CPC ngành quần áo khoảng 0,72–0,95 USD [9]; bài dùng 0,90 USD [GĐ].

Mỗi chiến dịch chi 1 USD/ngày, mức tối thiểu của Sponsored Products [10].

| Đợt | Thời gian | SKU | Chiến dịch | Chi | Click |
|---|---|---|---|---|---|
| 1 Mùa thu | 15/10–15/11 | SP2 vàng | Auto 15–27/10; Exact: floral maxi dress, tiered maxi dress, fall wedding guest dress | 45 | 50 |
| 2 Tiệc cuối năm | 16/11–19/12 | SP3 đen | Nhắm ASIN váy 30–45 USD và exact dài; bid ≤ 0,55 | 34 | 62 |
| 3 Chuyến đi | 01/01–14/02 | SP1, SP2 xanh | SP1 Auto rồi Exact từ 15/01; SP2 xanh Exact (vacation dress, cruise outfits) | 90 | 100 |
| 4 Phục sinh | 01–12/03 | SP3 hồng | Nhắm ASIN và exact "easter dress"; bid ≤ 0,55 | 12 | 22 |
| Tổng | | | Tối đa 2 chiến dịch cùng lúc | 181 | 234 |
| Bổ sung | 15/11 hoặc 15/01 | SP1, SP2 | Tăng ngân sách ngày của chiến dịch đang chạy | tối đa 29 | |

- **Kết quả dự kiến:** 14–21 units từ PPC. ACoS của SP1/SP2 là 19–29%, của SP3 là 24–35%, đều dưới mức hòa vốn B.
- **Các khoảng không chạy PPC:**
  - 01–14/10: đang sửa listing.
  - 15–28/02: nghỉ giữa hai đợt.
  - 20–31/12 và 13–31/03: SP3 chạy coupon. SP3 không bao giờ chạy PPC và coupon cùng ngày, vì khi có coupon, ACoS hòa vốn của SP3 chỉ còn 32,2%.
- **Riêng SP3:** không chạy từ khóa rộng; nhắm ASIN đắt hơn để SP3 trông rẻ hơn ngay trên trang đối thủ. Sau 40 click, nếu ACoS vượt 36,5% thì dừng. Nếu base cost chưa gồm phí FBA thì SP3 không chạy PPC.
- **Tối ưu hằng tuần** (dựa trên dữ liệu từ 7 ngày trở lên):
  - Search term có ≥ 1 đơn: chuyển sang Exact.
  - ≥ 15 click mà 0 đơn: thêm negative.
  - ACoS vượt hòa vốn: giảm bid 15%.
  - Biến thể còn ≤ 1 unit: dừng quảng cáo biến thể đó.

## 6 Giá, coupon và bundle
> Tóm tắt: Giữ nguyên giá niêm yết. Mỗi dịp chạy một coupon 10% có tên theo dịp, không bao giờ gọi là "sale". Giá bán trung bình giữ ở khoảng 97% giá niêm yết.

- **Giá:** giữ 51,99 USD và 25,99 USD. Giá sàn chính sách (giảm tối đa 15%) là 44,19 USD và 22,09 USD, đặt làm "Minimum price" trong Seller Central.
- **Phí coupon:** 5 USD mỗi coupon cộng 2,5% doanh số có dùng coupon [11]. Phí này trừ vào 300 USD; tiền giảm cho khách thì làm giảm doanh thu.

| Coupon 10% | Thời gian | SKU (units, kịch bản cơ sở) | Phí Amazon | Tiền giảm cho khách |
|---|---|---|---|---|
| Holiday Party Edit | 20–31/12 | SP3 đen (4) | 7,34 | 10,40 |
| Getaway Ready | 05/01–05/02 | SP1 (5), SP2 xanh (5), SP2 vàng (1) | 17,87 | 57,19 |
| Pink Edit – Valentine | 01–14/02 | SP3 hồng (2) | 6,17 | 5,20 |
| Pink Edit – Easter | 13–28/03 | SP3 hồng (2) | 6,17 | 5,20 |
| Tổng | | 19 units | 37,55 | 77,98 |

- **Phí coupon theo kịch bản:** 32 USD (thận trọng) và 47 USD (mục tiêu), đều dưới trần 50 USD.
- **Không dùng:**
  - Prime Exclusive Discount (khoảng 100 USD mỗi đợt).
  - Lightning Deal (khoảng 70 USD mỗi ngày).
  - Coupon Black Friday, vì dịp này deal quá sâu nên coupon 10% khó nổi bật.
- **Bundle:** Virtual Bundle cần Brand Registry và hàng FBA [12]. Tạo 2 bộ, chỉ cho size còn nhiều hàng:
  - Getaway Duo (SP1 + SP2 xanh): 93,58 USD.
  - Two-Occasion Set (SP3 đen + hồng): 46,78 USD.
- **Phương án dự phòng:** "Mua 2 giảm 10%" bằng Percentage Off, loại khuyến mãi bắt buộc mua tối thiểu 2 units từ 09/2025 [13].

## 7 Tồn kho
- **Quy mô:** 110 units chia cho 22 biến thể, trung bình khoảng 5 units mỗi biến thể. Mỗi thứ Hai xuất báo cáo tồn theo ASIN con: tồn khả dụng, units bán trong 7 ngày, số tuần còn hàng, tuổi tồn kho.
- **Biến thể còn ≤ 1 unit:** dừng quảng cáo biến thể đó, nhưng giữ trong nhóm biến thể để không mất review.
- **Biến thể tồn nhiều:** làm biến thể quảng cáo chính và ưu tiên cho bundle.
- **Không nhập thêm, không xả hàng.** Phụ phí tồn kho quần áo tính từ ngày 271, chỉ khoảng 0,3–0,6 USD mỗi unit mỗi tháng [14], nên không phải lý do để giảm giá.
- **Hàng tặng tối đa 4 units** (2 units SP1 cho Vine, 1–2 units SP3 cho creator), trừ khỏi mục tiêu 110.

## 8 Tài chính
Đề bài ghi base cost là "FOB/EXW + phí nền tảng/FBA", nhưng chưa rõ gồm những phí nào. Bài tính 3 trường hợp:
- **A:** base cost đã gồm mọi phí. Lợi nhuận góp mỗi unit: 36,99 USD (SP1/SP2) và 15,99 USD (SP3).
- **B:** chưa gồm referral 17%. Lợi nhuận góp: 28,15 và 11,57 USD.
- **C:** chưa gồm cả phí FBA ước tính 6 và 5 USD [GĐ] [15]. Lợi nhuận góp: 22,15 và 6,57 USD.

Marketing tính cố định 400 USD, dự phòng hoàn hàng 8%.

| USD | Thận trọng (49) | Cơ sở (71) | Mục tiêu (110) | Xả giá 50% (110) |
|---|---|---|---|---|
| Doanh thu thực | 1.999 | 2.859 | 4.297 | 2.209 |
| Lợi nhuận góp sau marketing – A | +799 | +1.311 | +2.153 | +533 |
| Lợi nhuận góp sau marketing – B | +459 | +824 | +1.423 | +235 |
| Lợi nhuận góp sau marketing – C | +184 | +427 | +813 | −375 |
| Units còn lại, giữ giá | 61 | 39 | 0 | 0 |

- Kịch bản cơ sở lãi gấp 2,5 lần (A) đến 3,5 lần (B) so với xả giá. Xả giá 50% còn vi phạm ràng buộc giảm tối đa 15%.
- Chưa tính: thuế nhập khẩu, phí lưu kho, phí hoàn thực tế.

## 9 Ngân sách, lịch và KPI

| USD | T10 | T11 | T12 | T1 | T2 | T3 | Chưa gán | Tổng |
|---|---|---|---|---|---|---|---|---|
| PPC cố định | 30 | 30 | 19 | 62 | 28 | 12 | – | 181 |
| PPC bổ sung | – | – | – | – | – | – | 29 | 29 |
| Phí coupon (trần) | – | – | 7,34 | 15,08 | 8,96 | 6,17 | 12,45 | 50 |
| A+ và công cụ AI | 20 | – | – | – | – | – | – | 20 |
| Dự phòng | – | – | – | – | – | – | 20 | 20 |
| Tổng | 50 | 30 | 26,34 | 77,08 | 36,96 | 18,17 | 61,45 | 300 |

- **Phần "chưa gán"** chỉ mở theo quy tắc ở mục 1.4.
- **100 USD ngoài sàn:** chỉ cần gắn Amazon Attribution và trừ số click này khỏi session tự nhiên.

| Giai đoạn | Việc chính | Units | Unit Session % | ACoS |
|---|---|---|---|---|
| 01–14/10 Áp dụng | Lấy baseline; đăng title, bullet, ảnh thật, size chart; gửi A+ trước 07/10 | 10 (T10) | Ghi nhận baseline | – |
| 15/10–15/11 Mùa thu | PPC SP2 vàng; Store: Layer It | 13 (T11) | 7,5% → 9% | 21–32% |
| 16/11–31/12 Tiệc | PPC SP3 đen đến 19/12; coupon Holiday Party | 12 (T12) | 7,5% → 9% | 24–35% |
| 01/01–14/02 Chuyến đi | PPC SP1, SP2 xanh; coupon Getaway, Valentine | 15 (T1) + 11 (T2) | 7,5% → 9% | 19–29% |
| 15/02–31/03 Mùa xuân | PPC SP3 hồng; coupon Easter | 10 (T3) | 7,5% → 9% | 24–35% |

- **KPI giữ cố định mỗi tháng:** giá bán trung bình ≥ 95% niêm yết, rating ≥ 4,3, tỷ lệ hoàn < 20%, tỷ lệ units từ từ khóa dịp mới tăng từ 20% lên 50%.
- **Nguồn lực:** khoảng 25 giờ trong tháng 10, sau đó 2–3 giờ mỗi tuần.

## 10 Rủi ro và phản biện
| Rủi ro | Dấu hiệu | Dự phòng |
|---|---|---|
| CVR không tăng, nhất là SP2 | CVR SP2 < baseline vào 15/11, hoặc tỷ lệ hoàn > 25% | Dừng PPC SP2, sửa listing. Hạ về kịch bản thận trọng, vẫn lãi +459 USD (trường hợp B) |
| CPC Q4 cao hơn 0,90 USD | CPC 7 ngày > 1,20 USD | Ngân sách ngày cố định nên không chi vượt; SP3 bỏ PPC, bật coupon sớm |
| Hết size, tồn lệch màu | Biến thể còn ≤ 1 unit; SP3 hồng bán < 4 units tính đến 15/02 | Dừng quảng cáo biến thể hết hàng; đẩy size còn nhiều bằng bundle; giữ giá |

**Tự kiểm tra.** Mọi phép tính đều chạy bằng script, và các phép kiểm tra sau đều đạt:
- Units theo SKU cộng bằng tổng.
- Không ngày nào có quá 2 chiến dịch.
- Ngân sách cộng đúng 300 USD.
- ACoS tại CVR 6% ≤ mức hòa vốn B.
- SP3 không chạy PPC và coupon cùng ngày.
- Kịch bản thận trọng vẫn lãi hơn xả giá.

**Câu hỏi giám khảo có thể hỏi.**
- *"PPC chỉ tạo 14–21 units, phần còn lại đến từ đâu?"* Khoảng 49 units đến từ session tự nhiên. Mức tăng này chưa được xác nhận, nên được kiểm tra ở các mốc 07/10, 15/11, 15/01. Nếu không đạt thì hạ về 49 units, và kế hoạch vẫn lãi.
- *"Làm sao chứng minh CVR tăng 50% khi traffic nhỏ?"* Đo tổng kỳ so với baseline, kèm ASIN đối chứng và chỉ báo sớm. Không kiểm định thống kê trên từng listing.

## Phụ lục A Câu hỏi gửi BTC
1. "Uplift CVR 50%" là tăng tương đối (1,5 lần) hay tuyệt đối? CVR cơ sở là bao nhiêu?
2. Base cost đã gồm referral 17% và phí FBA chưa?
3. 110 units chia theo SKU, màu và size thế nào?
4. Hàng tặng và phí coupon có tính vào 110 units và 400 USD không?

## Phụ lục B Dữ liệu phải lấy trước khi nộp
| Dữ liệu | Nguồn | Hạn |
|---|---|---|
| Sessions, Unit Session % theo 22 ASIN con (90 và 28 ngày) | Business Report by Child Item | 02/10 |
| Tồn theo biến thể, ngày nhập kho; phí FBA thật | Manage FBA Inventory; Fee Preview | 01/10 |
| Giá, rating, số review hiện tại | Trang sản phẩm | 01/10 |
| Volume, CPC, số review top 10 của các từ khóa | Helium 10 Cerebro, Magnet | 02/10 |
| Truy vấn có impression; vị trí của SIXDO | Search Query Performance; tìm thủ công | 03/10 |
| Tỷ lệ hoàn và lý do | FBA Customer Returns | 03/10 |
| Tay áo, lót, độ xuyên, số đo inch | Đo hàng thật | 03/10 |
| Thông báo title 75 ký tự, phí coupon | Seller Central (chụp màn hình) | 03/10 |

## Nguồn
[N1] SIXDO – Bối cảnh thị trường và cơ sở lựa chọn sản phẩm (Phần 1–2): Helium 10 29/09/2026, Google Trends Q4 index, mã hóa review.
[N2] Đề bài và slide Product Portfolio của BTC.
[1] Wave season: https://www.royalcaribbean.com/guides/what-is-wave-season-best-time-to-find-cruise-deals
[2] Backend 249 byte: https://www.sellersprite.com/en/blog/Amazon-Backend-Search-Terms-The-2026-Complete-Checklist
[3] Title 75 ký tự và Item Highlights: https://sellercentral.amazon.com/seller-forums/discussions/t/145b6d0f-999c-4555-896c-c694bda2e470 ; https://www.zonguru.com/blog/amazon-75-character-title-limit
[4] Alexa for Shopping và Q&A (nguồn thứ cấp): https://www.stackline.com/news/rufus-is-gone-what-it-means-and-what-it-doesnt
[5] Ảnh thời trang: https://m.media-amazon.com/images/G/01/SPIS/Fashion_Apparel_Imaging_Guidelines_Spring_2021.pdf
[6] Quy định A+: https://blazontek.com/amazon-a-content-guidelines-you-must-follow-in-2026/
[7] Benchmark CVR: https://www.parahgroup.com/blogs/amazon-conversion-rate-benchmarks-by-category
[8] Tác động của A+: https://leanmedia.org/amazon-a-sales-impact-amazon-says-its-8-even-more-for-premium-a/
[9] CPC quần áo 2026: https://www.adbadger.com/blog/amazon-advertising-stats/
[10] Ngân sách Sponsored Products: https://advertising.amazon.com/library/guides/sponsored-products-budget-best-practices
[11] Phí coupon (nguồn thứ cấp): https://www.supplykick.com/blog/amazon-coupons-marketing-features
[12] Virtual Bundle: https://myamazonguy.com/fba/what-is-a-virtual-bundle-and-how-do-they-work-on-amazon/
[13] Percentage Off: https://www.channelmax.net/article/amazon-updates-percentage-off-promotions-without-claim-codes
[14] Phụ phí tồn kho lâu ngày: https://sellercentral.amazon.com/gp/help/external/G200684750
[15] Phí FBA 2026: https://sellercentral.amazon.com/help/hub/reference/external/GABBX6GZPA8MSZGW
