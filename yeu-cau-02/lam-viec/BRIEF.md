# BRIEF CHUNG – YÊU CẦU 02: Chiến lược kinh doanh trên Amazon (SIXDO, Amazon US)

Thư mục làm việc: `/tmp/claude-0/-home-user-E-Battlefield/7eab49a9-51ee-5643-93da-96f35848f6cb/scratchpad`
(dưới đây gọi là `$S`). Nguồn tham khảo nằm trong `$S/src/`. Đầu ra ghi vào `$S/out/`.

Hôm nay: 30/09/2026. Hạn nộp bài thi: 20:00 ngày 04/10/2026.

## 1. Đề Yêu cầu 02 (mục "Amazon Operations & Commercial", 25 điểm trong barem)
Đề xuất cách **tái đóng gói và vận hành** danh mục Xuân/Hè trên Amazon để **duy trì doanh số trong mùa Thu/Đông mà không thay đổi sản phẩm vật lý**. Kế hoạch có thể gồm **Listing, Title, Bullet, A+ Content, Keyword/SEO, PPC, Coupon/Bundle, Pricing, Inventory và Conversion**, dựa trên **search intent** và **tình huống sử dụng mới**.

Mục tiêu kinh doanh của đề: "Uplift CVR 50%" → cách hiểu của bài: **CVR mục tiêu = 1,5 × CVR cơ sở** (Unit Session %), KHÔNG phải +50 điểm %. Chưa có CVR cơ sở thật → nêu giả định và cách lấy baseline.

## 2. Ràng buộc cứng (BTC)
- Thời gian: 01/10/2026 – 31/03/2027 (182 ngày, Q4/2026–Q1/2027).
- Không ra sản phẩm mới, không đổi sản phẩm vật lý. Không nhập thêm hàng.
- Giữ định vị "Accessible Haute Couture" (định vị NỘI BỘ; "haute couture" là thuật ngữ được bảo hộ ở Pháp → không dùng chữ này trong listing; dùng "runway-designed", "from a brand shown at New York Fashion Week" – thành tích của THƯƠNG HIỆU, không phải của từng mẫu).
- Không giảm giá sâu; không dùng "sale/clearance/cheap"; giảm tối đa 15%.
- Tồn kho: 110 units tổng 3 sản phẩm.
- Ngân sách: **300 USD nội sàn** (Amazon PPC, làm lại A+ Content, Coupon/Bundle) + **100 USD ngoại sàn** (Meta, Google, TikTok, Affiliate, KOL). Yêu cầu 02 chủ yếu dùng 300 USD nội sàn; 100 USD ngoại sàn chỉ nhắc khi liên quan (Amazon Attribution).

## 3. Ba sản phẩm (dữ kiện đề bài)
| | SP1 | SP2 | SP3 |
|---|---|---|---|
| ASIN | B0GRGWVHWC | B0FDKS69GR | B0FDKRBQVZ |
| Tên | Floral Woven Long Jumpsuit | Voile Floral Flared Maxi Dress | Raw Flared Dress |
| Kiểu (theo ảnh slide) | Cổ yếm halter, không tay, ống rộng, hoa xanh lam nền trắng | Maxi voan, tay dài bồng (phải xác nhận spec tay), cổ buộc dây, xếp tầng, hoa nhí | 2 dây, chân váy xếp tầng xòe, trơn màu |
| Chất liệu | Cotton (giặt tay) | Polyester voile (chưa rõ lót) | Polyester |
| Màu · Size | Xanh-trắng · S–XL (4 biến thể) | Xanh, Vàng · S–XL (8) | Hồng, Đen · S–XXL (10) |
| Giá bán | 51,99 USD | 51,99 USD | 25,99 USD |
| Base cost | 15 USD | 15 USD | 10 USD |
| Tồn kho GIẢ ĐỊNH 🟡 | 20 | 40 (Xanh 20, Vàng 20) | 50 (Đen 25, Hồng 25) |
- 22 biến thể, ~5 units/biến thể → rủi ro hết size cao.
- Base cost "FOB/EXW + phí nền tảng/FBA" – chưa rõ đã gồm referral 17% chưa → tính 2 trường hợp A (đã gồm mọi phí) và B (chưa gồm referral 17%).
- SIXDO đã có Brand Store trên Amazon (tức đã có Brand Registry).
- Tiêu đề hiện tại quan sát được (có thể là ASIN con khác, cần xác minh):
  - SP1: "SIXDO G White Blue Floral Woven Long Jumpsuit for Women 2026, Feminine Breezy Jumpsuit for Beach and Summer Events"
  - SP2: "SIXDO Voile Floral Flared Maxi Dress for Women 2026, Feminine Sheer-Sleeve Dress for Garden Party and Vacation"
  - SP3: "SIXDO Raw Flared Dress for Women, Sleek and Versatile for Work Events and Formal Celebrations"

## 4. Kết luận của Phần 1–2 (bản MỚI, bắt buộc bám theo) – toàn văn ở `$S/src/phan1_2_moi.txt`
- Ba HƯỚNG NHU CẦU cần kiểm chứng (không phải phân khúc đã xác nhận): (1) **trang phục cho dịp cụ thể** (holiday, wedding guest, tiệc); (2) **trang phục phối dùng nhiều bối cảnh** (layering, versatility); (3) **trang phục cho chuyến đi** đến nơi ấm (vacation, cruise, resort). Không dùng lại 4 phân khúc cũ "Winter Escapers/Sun Belt/Tết Diaspora" như đã chốt; có thể nhắc như ví dụ tình huống.
- Helium 10 exact-keyword volume (nhóm ghi 29/09/2026, cần đối chiếu file gốc): fall dresses for women 564,9K; jumpsuits for women 157,1K; casual dresses for women 91,6K; wedding guest dresses 66,0K; summer dress 55,0K; long sleeve dress 46,6K; dressy jumpsuits for women 19,3K; vacation dress 16,5K; floral maxi dress 8,3K; wedding guest jumpsuit 1,8K; holiday dress 1,7K (snapshot trước mùa đỉnh). Không cộng volume các truy vấn chồng lấn.
- Google Trends Q4 index (nhóm tự tính, mức nền năm = 100, chỉ so với chính nó): summer dress 19,8; long sleeve dress 116,7; holiday dress 308,6; wedding guest dresses 49,8; jumpsuits for women 78,0; vacation dress 42,9. Summer dress đỉnh May–Jun; holiday dress đỉnh Nov; long sleeve dress đỉnh Sep–Oct.
- Review: SP1 chỉ 2 review (1 nhắc brunch & vacation; 1 nêu chiều dài, độ xuyên thấu, giá). SP2: 5/8 review có tín hiệu lệch kỳ vọng (hình ảnh, chất liệu) → **ưu tiên sửa mức khớp listing–hàng thật TRƯỚC khi mở rộng traffic**. SP3: 5/8 review nói nhiều cách dùng, 4/8 nói phối lớp/nhiều mùa. 40 review đối thủ: 30 nhắc fit/sizing, 32 fabric/quality, 27 comfort; 15/40 occasion, 11/40 versatility, 6/40 travel.
- Cạnh tranh: mẫu 13 từ khóa, 531 listing trang 1 (28–29/09/2026). SIXDO ít review hơn benchmark. Jumpsuit SIXDO giá nằm giữa benchmark; maxi đắt hơn một số mẫu (PRETTYGARDEN long sleeve floral maxi ~30 USD). Đối thủ dùng wording Fall, Vacation, Wedding Guest; một số có coupon/deal.
- Insight làm việc: "Tôi cần một món đồ phù hợp với dịp mình sắp mặc và muốn biết rõ nó sẽ vừa, có chất liệu và trông như thế nào khi nhận được."
- Mục 7 Phần 1–2: trình tự phần tiếp theo = xác minh dữ liệu & đối chiếu SP×nhu cầu → chọn hướng theo mức phù hợp, tồn kho, lợi nhuận đóng góp → thông điệp, ảnh, listing/A+, từ khóa → PPC/kênh ngoài theo ngân sách.

## 5. Dữ kiện phí/công cụ Amazon 2026 đã được kiểm tra ở session trước (dùng lại, có thể xác minh thêm bằng web)
Referral quần áo >20 USD: 17% (15–20: 10%; ≤15: 5%). CPC quần áo ~0,72–0,95 USD (dùng ~0,9). Ngân sách ngày tối thiểu Sponsored Products 1 USD. Coupon: 5 USD/đợt + 2,5% doanh số dùng coupon. Prime Exclusive Discount ~100 USD/đợt (không dùng). Lightning Deal ~70 USD/ngày (không dùng). Amazon Posts ngừng 31/07/2025. Manage Your Experiments cần traffic cao (không trông vào). A+, Brand Store, Brand Story miễn phí khi có Brand Registry. Virtual Bundle cần Brand Registry + FBA. Vine/Creator Connections: nguồn không thống nhất → không để kế hoạch phụ thuộc. Amazon Attribution miễn phí. Phụ phí tồn kho lâu ngày quần áo từ ngày 271. Tết 06/02/2027; Valentine 14/02; Phục sinh 28/03/2027; Thanksgiving 26/11/2026; Black Friday 27/11; Cyber Monday 30/11.

## 6. Bài học từ 2 lần chấm thử bản cũ (64 → 73/100) – BẮT BUỘC
1. Một công thức thống nhất: Units = Session × Unit Session %. Session tự nhiên = tổng − click PPC − click ngoài sàn (không đếm trùng).
2. 3 kịch bản (thận trọng / cơ sở / mục tiêu); 110 là MỤC TIÊU, không phải dự báo. Tổng theo SKU = tổng chung.
3. Trả lời thẳng: organic tăng từ đâu, bao nhiêu %, và phần nào chưa được xác nhận.
4. Có baseline + quy tắc ra quyết định theo mốc ngày (nếu thấy X thì làm Y).
5. PPC đơn giản: chỉ Sponsored Products, ≤ 2 chiến dịch chạy cùng lúc, dồn theo đợt/dịp; ngân sách = số chiến dịch × USD/ngày × số ngày, cộng không vượt phần PPC.
6. Tách phí coupon (trừ vào 300 USD) khỏi tiền giảm cho khách (giảm doanh thu).
7. KPI khớp toán học: ACoS = CPC ÷ (CVR × giá bán); ACoS hòa vốn = (lợi nhuận góp − dự phòng hoàn 8% giá) ÷ giá.
8. Không claim chưa kiểm chứng trong bullet; dùng [ ] cho số đo, lót, cách giặt.
9. Không dùng công cụ đã ngừng/không đủ điều kiện.
10. Không giảm > 15%. Hàng chưa bán hết giữ giá, bán tiếp mùa Xuân/Hè 2027.
11. Không bịa search volume. Chỉ dùng số Helium 10 ở mục 4; từ khóa mới chưa có số thì ghi "điền từ Helium 10".
12. Lịch hoàn thiện bài thi (trước 04/10) tách khỏi lịch vận hành chiến dịch.

## 7. Quy ước trình bày
- Viết tiếng Việt, câu ngắn, rõ ràng. Title/bullet/A+/keyword viết tiếng Anh chuẩn Amazon US.
- Mọi con số gắn nhãn: ✅ đã xác nhận (đề bài/nguồn công khai có link) · 🟡 giả định · 🔴 giả thuyết cần kiểm chứng.
- Ghi nguồn (link) cho mọi dữ kiện lấy từ web.
- Không dùng emoji trang trí ngoài 3 nhãn trên.

## 8. Tài liệu tham khảo trong `$S/src/`
- `phan1_2_moi.txt` – Phần 1–2 bản mới (nguồn chuẩn cho lập luận).
- `gracious_SIXDO-ke-hoach-FINAL.md` (dòng 256–595: bản YC02 cũ, 73/100 – dùng làm nền, sửa cho khớp Phần 1–2 mới).
- `gracious_nhat-ky-ra-soat.md` – nhận xét chấm thử.
- `practical_yeu-cau-02-chien-luoc-amazon.md` – dàn ý 9 bước chi tiết cho YC02.
- `practical_phan-tich-de-bai.md` – phân tích đề, ngân sách.
- `gracious_product-portfolio-analysis.md` – phân tích 3 SP, unit economics.
- `optimistic_yeu-cau-02-amazon-strategy-4-slides.md` – bản slide YC02 khác.
- `affectionate_partshark-strategy-review.md` – các lỗi tư duy giám khảo hay bắt.
