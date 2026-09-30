"""Sinh file SIXDO_YeuCau02_Bullet_LamRo.md, tự đếm ký tự từng bullet.
Chạy: python lam-viec/build_bullet.py (từ thư mục yeu-cau-02)."""
import os, re

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, '..', 'SIXDO_YeuCau02_Bullet_LamRo.md')

# Bullet đang có trên Amazon (tái dựng từ kết quả tìm kiếm ngày 30/09/2026, chưa phải nguyên văn [KC])
CUR = {
'SP1': ('B0GRGWVHWC', [
 ("Thiết kế", "Cổ yếm, không tay, hoa trắng xanh; \"polished, all-in-one look without the guesswork of outfit coordination\"", "Giữ", "Ý \"một món là xong bộ\" rất tốt, đưa vào bullet 2"),
 ("Dịp dùng", "Office wear, casual outings, travel, dinners, social events", "Sửa", "Quá chung, không có dịp nào nổi bật. Bỏ \"office wear\" (cổ yếm, không tay khó mặc đi làm mùa lạnh); thêm vacation, cruise, resort dinner, brunch"),
 ("Mùa", "\"Breezy construction … ideal for warm summer days\"", "Sửa", "Gắn với mùa hè, trái mùa Q4. Đổi thành \"warm-weather plans\" và cách phối lớp"),
 ("Chất liệu", "\"Breathable, durable … smooth, maintains its structure after washing\"; thuộc tính: Cotton (một nguồn ghi rayon pha cotton)", "Sửa", "Giữ ý thoáng, giữ form; thêm thành phần theo nhãn, độ xuyên, kiểu mặc pull-on"),
 ("Size, giặt", "Không có số đo trong bullet; thuộc tính: Hand Wash Only, pull-on", "Thêm", "Thêm bullet size bằng inch và bullet giặt"),
]),
'SP2': ('B0FDKS69GR', [
 ("Dáng", "\"Beautifully flowing silhouette … gentle flare from the waist creates a flattering shape\"", "Giữ", "Mô tả dáng tốt, đưa vào bullet 1"),
 ("Dịp dùng", "Brunch, casual outing, weekend getaway; \"ideal warm-weather companion for the summer season\"", "Sửa", "Giữ brunch, getaway; bỏ \"summer season\"; thêm fall gatherings, wedding guest"),
 ("Chất liệu", "\"Lightweight, durable fabric … fresh and comfortable\"; thuộc tính: 100% Polyester, zipper", "Sửa", "Không nhắc tay voan xuyên và lót, đúng điểm 5/8 review phàn nàn. Bullet 3 phải trả lời thẳng"),
 ("Size", "Bảng size S (4–6), M (8–10), L (12–14), XL (16–18), XXL (20–22), có ngực, eo, hông", "Giữ", "Đưa quy đổi size số vào bullet 4"),
 ("Giặt", "Thuộc tính: Hand Wash Only", "Thêm", "Chưa có bullet giặt"),
]),
'SP3': ('B0FDKRBQVZ', [
 ("Dịp dùng", "\"Sleek and versatile for work events and formal celebrations\"; \"transitions from casual outings to more formal occasions\"", "Giữ, sửa", "Giữ ý đi làm → đi tiệc; nêu dịp cụ thể theo màu (tiệc cuối năm / Valentine, Phục sinh)"),
 ("Chất liệu", "\"Durable fabric ideal for fall and winter weather\"; \"softer and more breathable after a few washes\"", "Bỏ", "Váy polyester không tay, hở lưng: \"ideal for winter\" là claim chưa kiểm chứng, dễ gây review xấu. \"Mềm hơn sau vài lần giặt\" cũng không chứng minh được"),
 ("Dáng", "Thuộc tính: A-line, high waist, sleeveless, backless, pull-on", "Thêm", "Chưa có trong bullet. Đưa vào bullet 1 và 3"),
 ("Size", "S: bust 29.3\", waist 26.6\", length 44.5\"", "Giữ, kiểm tra", "Ngực 29.3\" là nhỏ so với size S Mỹ, có thể là số đo trải phẳng hoặc số đo vải. Đo lại trước khi đăng"),
 ("Giặt", "Bullet: máy giặt được, khuyên giặt tay, không chất tẩy mạnh, không sấy; thuộc tính: Hand Wash Only", "Sửa", "Hai chỗ mâu thuẫn. Chép đúng nhãn giặt rồi sửa cả bullet lẫn thuộc tính"),
]),
}

# (số, bullet tiếng Anh, nghĩa tiếng Việt, ô cần điền)
SP = {
'SP1': ('SP1 – Floral Halter Jumpsuit (51,99 USD)', [
 (1, "MADE FOR WARM-WEATHER PLANS – A halter, sleeveless floral jumpsuit for vacations, cruises, travel days, resort dinners and brunch. Add a cropped cardigan or denim jacket when the evening turns cool.",
  "Jumpsuit hoa cổ yếm, không tay cho kỳ nghỉ, du thuyền, ngày di chuyển, bữa tối ở resort và brunch. Buổi tối trời mát thì khoác thêm cardigan ngắn hoặc áo denim.",
  "Không có ô trống"),
 (2, "FROM A RUNWAY DESIGN HOUSE – SIXDO is a Vietnamese brand whose collections have been shown at New York Fashion Week. This jumpsuit gives a polished all-in-one look with no pieces to coordinate.",
  "SIXDO là thương hiệu Việt Nam từng trình diễn tại New York Fashion Week. Jumpsuit cho một bộ trang phục chỉn chu chỉ trong một món, không phải phối đồ.",
  "Không có ô trống"),
 (3, "BREATHABLE WOVEN FABRIC – [100% cotton / rayon-cotton blend], per the care label. Smooth and breathable, it keeps its shape after washing. Pull-on style, no zip. In bright light: [not / slightly] see-through.",
  "Vải dệt thoáng khí: [100% cotton / rayon pha cotton] theo nhãn. Mặt vải mịn, thoáng, giữ form sau khi giặt. Mặc kiểu chui, không khóa kéo. Dưới ánh sáng mạnh: [không / hơi] xuyên.",
  "Thành phần theo nhãn · độ xuyên"),
 (4, "FIND YOUR SIZE IN INCHES – S: bust [ ]\", waist [ ]\", hip [ ]\", inseam [ ]\" · M · L · XL: [ ]. Pull-on waist, so check the hip measurement. Model is [ ] and wears size [ ].",
  "Chọn size theo inch: ngực, eo, hông, dài ống trong cho từng size. Cạp chui nên cần xem số đo hông. Chiều cao và size người mẫu.",
  "Số đo × size · dải size thật · người mẫu"),
 (5, "CARE – Hand wash only in cold water, hang dry. Do not bleach or tumble dry.",
  "Chỉ giặt tay nước lạnh, phơi treo. Không tẩy, không sấy.",
  "Đối chiếu nhãn giặt"),
]),
'SP2': ('SP2 – Floral Maxi Dress (100% polyester voile, 51,99 USD)', [
 (1, "ONE DRESS FOR FALL EVENTS AND TRIPS – A floral maxi with a gentle flare from the waist for fall gatherings, daytime weddings as a guest, brunch and getaways to warmer places. Layer with a [denim jacket / knit cardigan] on cool days.",
  "Váy maxi hoa xòe nhẹ từ eo cho buổi họp mặt mùa thu, dự đám cưới ban ngày, brunch và chuyến đi đến nơi ấm. Ngày mát thì phối [áo denim / cardigan len].",
  "Chọn áo khoác phối, khớp ảnh ô 4"),
 (2, "FROM A RUNWAY DESIGN HOUSE – SIXDO is a Vietnamese brand whose collections have been shown at New York Fashion Week. Details you can see in the photos: sheer voile sleeves and a flowing flared skirt[, tie neck].",
  "Thương hiệu từng trình diễn tại NYFW. Chi tiết thấy trong ảnh: tay voan mỏng, chân váy xòe bay[, cổ buộc dây].",
  "Chỉ giữ \"tie neck\" nếu hàng thật có"),
 (3, "IS IT SHEER? – The sleeves are sheer voile by design. The bodice and skirt are [fully lined / lined to the knee / unlined]. 100% polyester voile: light and breathable, not a warm winter fabric. Zip closure.",
  "Váy có xuyên không? Tay voan xuyên là do thiết kế. Thân và chân váy [lót toàn bộ / lót đến gối / không lót]. Voan 100% polyester: nhẹ, thoáng, không phải vải giữ ấm. Có khóa kéo.",
  "Mức lót"),
 (4, "FIND YOUR SIZE IN INCHES – S (4–6), M (8–10), L (12–14), XL (16–18), XXL (20–22). Bust, waist, hip and length for each size are in the size chart image. Model is [ ] and wears [ ].",
  "Quy đổi size chữ sang size số Mỹ S–XXL. Số đo ngực, eo, hông, dài váy xem trong ảnh bảng size. Chiều cao và size người mẫu.",
  "Người mẫu · thêm dài váy vào bảng size"),
 (5, "CARE – Hand wash only in cold water, hang dry. [Steam or low iron]. Do not bleach or tumble dry.",
  "Chỉ giặt tay nước lạnh, phơi treo. [Hấp hoặc là nhiệt thấp]. Không tẩy, không sấy.",
  "Cách là theo nhãn"),
]),
'SP3': ('SP3 – A-Line Flared Dress (100% polyester, 25,99 USD)', [
 (1, "DRESS IT UP OR LAYER IT – A sleeveless, high-waist A-line dress with an open back for holiday parties, cocktail hour, New Year's Eve and work events. Add a blazer, cardigan or tights when it is cold.",
  "(Màu đen) Váy chữ A không tay, cạp cao, hở lưng cho tiệc cuối năm, cocktail, Giao thừa và sự kiện công ty. Trời lạnh thì thêm blazer, cardigan hoặc tất.",
  "Dùng cho ASIN con màu đen"),
 ('1b', "DRESS IT UP OR LAYER IT – A sleeveless, high-waist A-line dress with an open back for Valentine's Day, Easter brunch, bridal showers and birthdays. Add a denim jacket or cardigan when it is cool.",
  "(Màu hồng) Như trên, cho Valentine, brunch Phục sinh, tiệc chia tay độc thân của cô dâu và sinh nhật. Trời mát thì thêm áo denim hoặc cardigan.",
  "Dùng cho ASIN con màu hồng"),
 (2, "FROM A RUNWAY DESIGN HOUSE – SIXDO is a Vietnamese brand whose collections have been shown at New York Fashion Week. This style moves easily from the office to an evening event, at an everyday price.",
  "Thương hiệu từng trình diễn tại NYFW. Mẫu này chuyển dễ dàng từ văn phòng sang buổi tối, với mức giá dùng hằng ngày.",
  "Không có ô trống"),
 (3, "SOLID POLYESTER, CLEAR FACTS – 100% polyester, [lined / unlined], [opaque / slightly see-through in Blush Pink]. Pull-on style with no zip. Open back.",
  "Polyester trơn, thông tin rõ: 100% polyester, [có lót / không lót], [không xuyên / màu hồng hơi xuyên]. Mặc kiểu chui, không khóa. Hở lưng.",
  "Lót · độ xuyên (thử riêng màu hồng)"),
 (4, "FIND YOUR SIZE IN INCHES – S: bust [29.3]\", waist [26.6]\", length [44.5]\" · M · L · XL · XXL: [ ]. Model is [ ] and wears [ ].",
  "Số đo inch cho S–XXL. Số của size S lấy từ listing hiện tại, cần đo lại. Chiều cao và size người mẫu.",
  "Đo lại size S · điền M–XXL · người mẫu"),
 (5, "CARE – Hand wash recommended in cold water. Use a mild detergent; do not bleach or tumble dry. Hang dry.",
  "Khuyên giặt tay nước lạnh, dùng chất giặt nhẹ, không tẩy, không sấy. Phơi treo.",
  "Chép đúng nhãn giặt; sửa thuộc tính cho khớp"),
]),
}

def filled_len(s):
    # Ước tính độ dài sau khi điền: phương án dài nhất trong [a / b], ô số [ ] tính 3 ký tự
    def pick(m):
        opts = [o.strip() for o in m.group(1).split('/')]
        return max(opts, key=len) if any(opts) else 'xxx'
    return len(re.sub(r'\[([^\]]*)\]', pick, s))

rows = {}
for k, (_, bl) in SP.items():
    rows[k] = [(n, en, vi, fill, filled_len(en)) for n, en, vi, fill in bl]
maxlen = max(r[4] for v in rows.values() for r in v)
assert maxlen <= 250, maxlen

def sku_section(k, num):
    title, _ = SP[k]
    asin, cur = CUR[k]
    out = [f'## {num} {title}', f'### {num}.1 Bullet hiện tại (ASIN {asin}) và hướng sửa']
    out.append('| Nội dung | Đang ghi trên Amazon | Quyết định | Lý do |')
    out.append('|---|---|---|---|')
    for t, now, dec, why in cur:
        out.append(f'| {t} | {now} | **{dec}** | {why} |')
    out.append(f'### {num}.2 Bullet sau khi sửa')
    out.append('| # | Bullet đăng lên Amazon (tiếng Anh) | Nghĩa tiếng Việt | Cần điền / kiểm tra | Ký tự* |')
    out.append('|---|---|---|---|---|')
    for n, en, vi, fill, L in rows[k]:
        out.append(f'| {n} | `{en}` | {vi} | {fill} | {L} |')
    return '\n'.join(out)

md = f"""# Chỉnh sửa bullet listing – Yêu cầu 02
SIXDO trên Amazon US – 5 bullet cho mỗi sản phẩm, sửa từ bullet đang có
Tài liệu đi kèm Yêu cầu 02, mục 3.2  |  Đối chiếu bullet hiện tại, giữ ý tốt, sửa ý sai mùa, bổ sung thông tin khách cần

### Kết luận chính
File này không viết lại từ đầu. Mỗi sản phẩm đi theo 3 bước: đọc bullet đang có trên Amazon → quyết định giữ, sửa hay bỏ từng ý → viết 5 bullet mới.

Ba vấn đề chung của bullet hiện tại:
- **Bán theo mùa hè.** SP1 ghi "ideal for warm summer days", SP2 ghi "warm-weather companion for the summer season". Ở Q4 khách không tìm "summer dress" (YC02 mục 2).
- **Thiếu điều khách hỏi nhiều nhất.** Không bullet nào ghi lót, độ xuyên hay số đo inch, trong khi 32/40 review đối thủ nhắc chất liệu và 30/40 nhắc size [N1]. SP2 có 5/8 review lệch kỳ vọng.
- **Có claim chưa kiểm chứng hoặc mâu thuẫn.** SP3 ghi "ideal for fall and winter weather" cho váy không tay, hở lưng. SP3 bullet ghi "machine wash" nhưng thuộc tính ghi "Hand Wash Only".

Những ý tốt được giữ lại: "all-in-one look" của SP1, "gentle flare from the waist" của SP2, "từ văn phòng đến sự kiện" của SP3, và bảng quy đổi size số của SP2.

Dữ kiện mới lấy từ listing, đã đưa vào bullet:
- SP1: mặc kiểu chui (pull-on), chỉ giặt tay.
- SP2: 100% polyester, khóa kéo, 5 size S–XXL.
- SP3: 100% polyester, dáng chữ A cạp cao, hở lưng, mặc kiểu chui.

Tất cả bullet mới đều dưới 250 ký tự sau khi điền (dài nhất {maxlen} ký tự).

**Giới hạn:** môi trường làm bài bị chặn truy cập Amazon. Nội dung bullet hiện tại được tái dựng từ kết quả tìm kiếm ngày 30/09/2026 [1]–[3], không phải bản chép nguyên văn [KC]. Trước khi đăng, mở Seller Central (Edit listing) để đối chiếu lại.

## 1 Vai trò của từng bullet
| Bullet | Câu hỏi của khách | Nội dung | Bullet hiện tại đã có chưa |
|---|---|---|---|
| 1 Dịp dùng | "Mặc vào dịp nào?" | Dịp, nơi mặc, cách phối lớp khi trời lạnh | Có, nhưng gắn mùa hè hoặc quá chung |
| 2 Thương hiệu | "SIXDO là ai, sao giá cao hơn?" | SIXDO từng trình diễn tại NYFW; chi tiết thấy được | Chưa có |
| 3 Chất liệu | "Vải gì, có xuyên, có lót không?" | Thành phần, lót, độ xuyên, kiểu mặc | Chỉ có tính từ chung ("lightweight, durable") |
| 4 Size | "Tôi mặc size nào?" | Số đo inch, người mẫu | Chỉ có trong bảng size, không có trong bullet |
| 5 Giặt | "Giặt thế nào?" | Chép theo nhãn | Chỉ SP3 có, và mâu thuẫn với thuộc tính |

Bullet còn được trợ lý **Alexa for Shopping** (trước là Rufus) đọc để trả lời khách, vì phần Q&A không còn nổi bật [4] [KC]. Bullet ghi rõ "có lót", "hơi xuyên" thì trợ lý trả lời đúng.

{sku_section('SP1', 2)}

{sku_section('SP2', 3)}

Lưu ý riêng cho SP2: bullet 3 mở bằng câu hỏi "IS IT SHEER?" vì đây đúng là điều khách phàn nàn. Nếu tay áo không đủ dài, không dùng "long sleeve" ở bất kỳ đâu (title phương án B).

{sku_section('SP3', 4)}

Lưu ý riêng cho SP3: nếu Seller Central chỉ cho một bộ bullet ở ASIN cha, dùng câu gộp cho bullet 1: `for holiday parties, New Year's Eve, Valentine's Day and Easter brunch`.

*Ký tự: ước tính sau khi điền, lấy phương án dài nhất trong mỗi [ ], mỗi ô số tính 3 ký tự.

## 5 Ảnh hưởng tới title và thuộc tính
Dữ kiện trên listing hiện tại làm lộ ra vài chỗ phải sửa ngoài bullet:

| SKU | Chỗ cần sửa | Việc cần làm |
|---|---|---|
| SP1 | Thuộc tính độ dài ghi "Midi" cho một jumpsuit dài | Đổi thành độ dài thật (Ankle hoặc Full length) |
| SP1 | Title mới có chữ "Cotton" | Nếu nhãn ghi rayon pha cotton, bỏ "Cotton" khỏi title: `SIXDO Women's Floral Halter Jumpsuit, Sleeveless Wide Leg Long Jumpsuit` |
| SP2 | Bảng size có 5 size (S–XXL), bản nháp cũ chỉ ghi đến XL | Size chart ô 7 (YC05) và bullet 4 dùng đủ 5 size |
| SP3 | Thuộc tính ghi A-line, high waist, backless; title mới ghi "Spaghetti Strap Tiered" | Kiểm tra hàng thật. Nếu không có dây mảnh và tầng váy, dùng: `SIXDO Women's Sleeveless A-Line Flared Dress, High Waist Open Back Dress` |
| SP3 | Cách giặt: bullet "machine wash", thuộc tính "Hand Wash Only" | Chép theo nhãn rồi sửa cả hai |
| SP3 | Size S: ngực 29.3" | Đo lại; nếu là số đo trải phẳng thì ghi rõ hoặc nhân đôi |

## 6 Cách điền các ô [ ]
Đo trên hàng tồn thật, hạn 03/10 (YC02, Phụ lục B).

| Ô cần điền | Cách làm | Chọn phương án |
|---|---|---|
| Thành phần | Đọc nhãn trong áo | Ghi đúng nhãn |
| Lót | Lật mặt trong, xem lót đến đâu | `fully lined` / `lined to the knee` / `unlined` |
| Độ xuyên | Chụp trên người mẫu dưới nắng, hoặc soi vải lên đèn điện thoại cách 10 cm | Không thấy bóng tay: `not see-through`. Thấy mờ: `slightly see-through` |
| Số đo inch | Đo trên người mẫu vừa size hoặc trải phẳng × 2. Dài: từ đỉnh vai đến gấu. Inseam: từ đáy đũng đến gấu | Làm tròn 0,5 inch; 1 inch = 2,54 cm |
| Người mẫu | Chiều cao feet-inch, size đang mặc | Vd. `Model is 5'7" and wears size S` |
| Giặt, là | Chép nhãn giặt | Không tự thêm "machine washable" |

## 7 Những từ không dùng
| Không dùng | Có trong bullet hiện tại? | Thay bằng |
|---|---|---|
| ideal for summer days / summer season | SP1, SP2 | Dịp cụ thể và cách phối lớp |
| ideal for fall and winter weather | SP3 | "Add a blazer, cardigan or tights when it is cold" |
| softer and more breathable after a few washes | SP3 | Bỏ; không chứng minh được |
| lightweight, durable (đứng một mình) | SP1, SP2 | Thành phần, lót, độ xuyên cụ thể |
| true to size, non-see-through, warm | Không | Số đo inch, kết quả thử thật |
| haute couture, "this dress walked the runway" | Không | `collections have been shown at New York Fashion Week` |
| sale, giá, tên đối thủ | Không | Coupon theo dịp (YC02 mục 6) |

## 8 Kiểm tra trước khi đăng
- [ ] Đã đối chiếu bullet hiện tại nguyên văn trong Seller Central.
- [ ] Không còn ô [ ] nào.
- [ ] Số đo bullet 4 khớp size chart ô 7 (YC05); độ xuyên, lót bullet 3 khớp ảnh ô 5 và ô 8.
- [ ] Thuộc tính (chất liệu, cách giặt, độ dài, kiểu cổ) khớp bullet.
- [ ] SP3: mỗi màu đúng bản bullet 1 của mình; title khớp dáng thật.
- [ ] Mỗi bullet dưới 250 ký tự; không có ký tự đặc biệt như ! $ ? {{ }}.

## Nguồn
[N1] SIXDO – Phần 1–2: mã hóa 40 review đối thủ và 8 review SP2; ASIN 3 sản phẩm.
[N2] SIXDO – Yêu cầu 02, mục 2 (từ khóa) và mục 3 (listing).
[1] SP1 – SIXDO White Blue Floral Woven Long Jumpsuit: https://www.amazon.com/SIXDO-Floral-Jumpsuit-Feminine-Breezy/dp/B0GRGWHHKL
[2] SP2 – SIXDO Voile Floral Flared Maxi Dress: https://us.amazon.com/SIXDO-Floral-Feminine-Sheer-Sleeve-Vacation/dp/B0H6JXKRWV
[3] SP3 – SIXDO Raw Flared Dress: https://www.amazon.com/SIXDO-Flared-Versatile-Events-Celebrations/dp/B0FKMSCPV8
[4] Alexa for Shopping và Q&A (nguồn thứ cấp): https://www.stackline.com/news/rufus-is-gone-what-it-means-and-what-it-doesnt
"""
open(OUT, 'w').write(md)
print('ok, max len', maxlen)
