"""Sinh file SIXDO_YeuCau02_Bullet_LamRo.md: bullet gốc, phân tích đối thủ, bullet tối ưu.
Tự đếm ký tự từng bullet. Chạy từ thư mục yeu-cau-02: python lam-viec/build_bullet.py"""
import os, re

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, '..', 'SIXDO_YeuCau02_Bullet_LamRo.md')

# ---------- Bullet gốc, chép nguyên văn từ ảnh chụp trang Amazon ngày 30/09/2026 ----------
GOC_SP1 = [
 ("FEATURES", "The SIXDO jumpsuit is designed for women who want a polished, all-in-one look without the guesswork of outfit coordination. Suitable for office wear, casual outings, travel, dinners, and social events, this jumpsuit offers a refined yet relaxed style that works across many occasions. Its breezy construction also makes it an ideal choice for warm summer days."),
 ("EVERYDAY WEAR FABRIC", "Made from breathable, durable fabric, this jumpsuit is comfortable for extended wear throughout the day. The material feels smooth, maintains its structure after washing, and is easy to care for - making it a dependable everyday staple. Its lightweight construction also makes it a natural choice as a summer jumpsuit for women."),
 ("VERSATILE STYLE JUMPSUIT", "This jumpsuit transitions smoothly from daytime casual to evening dressy. Pair it with sneakers or flats for everyday errands, or elevate the look with heels and accessories for a dinner out or social event. The clean, structured silhouette works equally well for women who prefer a relaxed fit or a more tailored look."),
 ("CARE INSTRUCTIONS FOR THIS JUMPSUIT", "It can machine wash, but hand-washing is recommended for better durability. Do not use strong detergents or tumble dry. Proper care will help preserve the color, shape, and quality of your jumpsuit for long-term wear."),
 ("DIVERSE STYLE COLLECTION", "SIXDO's products are elegantly designed with a diverse range of styles, making them suitable for many occasions. Here are some jumpsuit styles you can choose from: woven long jumpsuit, sleeveless jumpsuit, floral jumpsuit, wide-leg jumpsuit, casual jumpsuit for women, dressy jumpsuit, summer jumpsuit, work jumpsuit, vacation jumpsuit. With this variety, you'll always find the ideal jumpsuit that fits your style and occasion!"),
]
GOC_SP23 = [
 ("FEATURES", "The SIXDO dress is perfect for both casual and formal events, such as family photoshoots, shopping, parties, and beach outings. it's easy to wear and style, making it a versatile choice for women."),
 ("SOFT TO THE TOUCH DRESS", "Crafted from durable fabric, this women's midi autumn dress is ideal for fall and winter weather. It becomes softer and more breathable after a few washes, ensuring maximum comfort throughout the day. The quality of this dress ensures that you'll feel as good as you look."),
 ("VERSATILE STYLE DRESS", "This dress easily transitions from casual outings to more formal occasions, making it a must-have addition to your wardrobe of dressy sundresses. Its adaptability allows you to style this dress for various events, ensuring you're always ready for anything."),
 ("CARE INSTRUCTIONS FOR THIS DRESS", "It can machine wash, but you should hand-wash this dress for better durability. Do not use any strong detergent or tumble dry. Proper care of your dress will keep it looking fresh and beautiful for seasons to come."),
 ("(không có tiêu đề)", "SIXDO's products are elegantly designed with a diverse range of styles, making them perfect for various occasions. Here are some types of dresses you can choose from: midi dress, work dress, maxi dress, midi dress, floral dress, neutral dress, flowy women's dress, neutral midi dress, boho maxi dress, midi fall winter dress, sundress for wedding, summer midi dresses, dresses spring, fall dresses, and sundresses midi. With this variety, you'll always find the perfect outfit for any occasion!"),
]

# (bullet gốc số mấy, trả lời câu hỏi nào, quyết định, lý do)
DANHGIA = {
'SP1': [
 (1, "Mặc dịp nào?", "Giữ ý, sửa dịp", "\"All-in-one look without the guesswork\" là ý mạnh nhất, giữ. Bỏ \"office wear\" và \"warm summer days\": trái mùa Q4, không khớp dáng cổ yếm hở vai"),
 (2, "Vải gì?", "Viết lại", "Chỉ có tính từ (breathable, durable, smooth), không có thành phần, lót, độ xuyên. Câu cuối lặp \"summer jumpsuit\""),
 (3, "Phối thế nào?", "Giữ, gộp vào bullet 1", "Cách phối sneakers/flats ban ngày, heels buổi tối là cụ thể và hữu ích"),
 (4, "Giặt thế nào?", "Giữ, rút gọn", "Nội dung đúng; câu cuối (\"Proper care will…\") không thêm thông tin"),
 (5, "(không trả lời câu nào)", "Bỏ", "Danh sách từ khóa, có \"summer jumpsuit\", \"work jumpsuit\". Chuyển từ khóa sang backend search terms (YC02 mục 2)"),
],
'SP23': [
 (1, "Mặc dịp nào?", "Viết lại theo từng SKU", "Dùng chung cho SP2 và SP3. \"Beach outings\", \"family photoshoots\" không phải dịp của Q4, không có từ khóa dịp (holiday, wedding guest, fall)"),
 (2, "Vải gì?", "Bỏ, thay bằng dữ kiện", "Gọi cả hai là \"midi autumn dress… ideal for fall and winter\": sai với SP3 (dây mảnh) và SP2 (tay voan xuyên). \"Softer after a few washes\" không chứng minh được. Đây là loại claim tạo ra review lệch kỳ vọng (5/8 review SP2)"),
 (3, "Có nhiều dịp không?", "Bỏ", "Không có thông tin cụ thể; trùng ý bullet 1"),
 (4, "Giặt thế nào?", "Giữ, rút gọn", "Nội dung đúng"),
 (5, "(không trả lời câu nào)", "Bỏ", "Danh sách từ khóa lặp (\"midi dress\" 2 lần), có \"summer\", \"sundress\". Chuyển sang backend"),
],
}

# ---------- Đối thủ (từ kết quả tìm kiếm ngày 30/09/2026, bản tóm tắt, chưa phải nguyên văn [KC]) ----------
DOITHU = [
 ("PRETTYGARDEN – maxi hoa tay dài, tầng (~30 USD) [1]", "SP2", "100% polyester; \"fully lined\" với lớp lưới xuyên bên ngoài; thân chun nhún, cổ tròn, cạp cao, váy tầng; S = US 4–6 … XXL = US 20; giặt máy; wedding guest, cocktail, travel", "Nói rõ lót ngay trong bullet; quy đổi size số Mỹ; chi tiết giúp vừa người (thân chun)"),
 ("ZESICA – maxi dây mảnh, tầng [2]", "SP3", "100% viscose; \"fully lined\", 2 túi hai bên; dây buộc chỉnh được; lưng chun nhún; S = US 4–6 … XXL = 20–22; giặt máy", "Tính năng dùng được (túi, dây chỉnh) được viết thành lợi ích"),
 ("GRECERELLE – maxi tay dài [3]", "SP2", "95% rayon, 5% spandex; eo chun, dáng suông; túi; dịp: work, church, family gatherings, vacations, holiday events, wedding guest; giặt máy", "Danh sách dịp viết thành câu tự nhiên, vẫn chứa từ khóa"),
 ("ANRABESS – jumpsuit ống rộng [4]", "SP1", "100% rayon mềm; lưng nhún co giãn; dây buộc eo; S–XL", "Chi tiết co giãn trả lời nỗi lo vừa người của jumpsuit"),
 ("PRETTYGARDEN – jumpsuit ống rộng [5]", "SP1", "Thành phần % cụ thể (polyester, viscose, elastane); túi; pull-on; brunch, beach, travel, weddings, birthday", "Thành phần % đặt ngay đầu"),
 ("Lamilus, Senllen – váy dây mảnh, tầng [6]", "SP3", "\"Not see-through\"; \"opaque weave, no see-through in light colors\"", "Trả lời thẳng câu \"có xuyên không\""),
]

# ---------- Bullet tối ưu ----------
# (số, bullet tiếng Anh, nghĩa tiếng Việt, cần điền / kiểm tra)
SP = {
'SP1': ('SP1 – Floral Halter Jumpsuit (B0GRGWVHWC, 51,99 USD)', [
 (1, "WARM-WEATHER PLANS, DAY TO NIGHT: A halter floral jumpsuit for vacations, cruises, resort dinners, brunch and travel days. Wear flats by day and heels at night; add a cropped cardigan when evenings turn cool.",
  "Jumpsuit hoa cổ yếm cho kỳ nghỉ, du thuyền, bữa tối ở resort, brunch, ngày di chuyển. Ban ngày đi giày bệt, buổi tối đi cao gót; tối trời mát khoác cardigan ngắn.",
  "Không có ô trống"),
 (2, "BREATHABLE WOVEN FABRIC: [100% cotton / rayon-cotton blend], per the care label. Smooth and breathable, it keeps its shape after washing. [Unlined / lined bodice]; in bright light it is [not / slightly] see-through. Pull-on, no zip.",
  "Vải dệt thoáng: thành phần theo nhãn. Mịn, thoáng, giữ form sau khi giặt. [Không lót / lót thân trên]; dưới ánh sáng mạnh [không / hơi] xuyên. Mặc kiểu chui, không khóa.",
  "Thành phần · lót · độ xuyên"),
 (3, "ONE PIECE, COMPLETE LOOK: Blue and white florals with a border print at the hem, and wide legs that move as you walk. No pieces to match. Designed by SIXDO, a Vietnamese brand shown at New York Fashion Week.",
  "Một món là đủ bộ: hoa xanh trắng, viền họa tiết ở gấu, ống rộng bay khi bước. Không cần phối. Thiết kế của SIXDO, thương hiệu Việt Nam từng trình diễn tại NYFW.",
  "Không có ô trống"),
 (4, "FIND YOUR SIZE: [S (US 4–6), M (8–10), L (12–14), XL (16–18)]. Bust, waist, hip and inseam in inches are in the size chart image. Pull-on waist, so choose by hip. Model is [ ] and wears [ ].",
  "Quy đổi size chữ sang size số Mỹ. Số đo inch trong ảnh bảng size. Cạp chui nên chọn theo vòng hông. Chiều cao và size người mẫu.",
  "Dải size thật · người mẫu"),
 (5, "EASY CARE: Machine wash cold on gentle, or hand wash for the longest wear. Use a mild detergent; no bleach, no tumble dry. Hang dry.",
  "Giặt máy nước lạnh chế độ nhẹ, hoặc giặt tay để bền nhất. Chất giặt nhẹ, không tẩy, không sấy. Phơi treo.",
  "Đối chiếu nhãn giặt"),
]),
'SP2': ('SP2 – Long Sleeve Floral Maxi Dress (B0FDKS69GR, 51,99 USD)', [
 (1, "FALL EVENTS AND WARM GETAWAYS: A long-sleeve floral dress for fall gatherings, Thanksgiving dinner, daytime weddings as a guest and trips somewhere warm. Layer a denim jacket or knit cardigan on cool days.",
  "Váy hoa tay dài cho họp mặt mùa thu, bữa tối Lễ Tạ ơn, dự đám cưới ban ngày và chuyến đi đến nơi ấm. Ngày mát khoác áo denim hoặc cardigan len.",
  "Không có ô trống"),
 (2, "IS IT SHEER? The sleeves are sheer voile by design. The body is [fully lined / lined to the knee], so the dress is [not see-through]. 100% polyester voile: light and breathable, not a heavy winter fabric.",
  "Có xuyên không? Tay voan xuyên là do thiết kế. Thân váy [lót toàn bộ / lót đến gối] nên [không xuyên]. Voan 100% polyester: nhẹ, thoáng, không phải vải dày mùa đông.",
  "Mức lót · kết quả thử xuyên"),
 (3, "RUNWAY DETAILS YOU CAN SEE: Balloon sleeves with fitted cuffs, a tie neck, a drawstring waist and a tiered skirt that swings as you walk. Designed by SIXDO, a Vietnamese brand shown at New York Fashion Week.",
  "Chi tiết thấy được: tay bồng bo gấu, cổ buộc dây, eo dây rút, chân váy tầng bay khi bước. Thiết kế của SIXDO, từng trình diễn tại NYFW.",
  "Không có ô trống"),
 (4, "FIND YOUR SIZE: S (US 4–6), M (8–10), L (12–14), XL (16–18), XXL (20–22). The drawstring waist adjusts for a closer fit. Inch measurements are in the size chart image. Model is [ ] and wears [ ].",
  "Quy đổi size số Mỹ S–XXL. Eo dây rút chỉnh được cho vừa hơn. Số đo inch trong ảnh bảng size. Chiều cao và size người mẫu.",
  "Người mẫu"),
 (5, "EASY CARE: Hand wash cold for best results, or machine wash cold on gentle in a laundry bag. No bleach, no tumble dry. Hang dry and steam to refresh the voile.",
  "Giặt tay nước lạnh là tốt nhất, hoặc giặt máy nhẹ trong túi giặt. Không tẩy, không sấy. Phơi treo, hấp để voan phẳng lại.",
  "Đối chiếu nhãn giặt"),
]),
'SP3': ('SP3 – Spaghetti Strap Tiered Dress (B0FDKRBQVZ, 25,99 USD)', [
 (1, "HOLIDAY PARTIES TO NEW YEAR'S EVE: A black spaghetti-strap dress with a fitted bodice and tiered skirt for holiday parties, cocktail hour, work events and New Year's Eve. Add a blazer and sheer tights when it is cold.",
  "(Màu đen) Váy dây mảnh, thân ôm, chân váy tầng cho tiệc cuối năm, cocktail, sự kiện công ty, Giao thừa. Trời lạnh thêm blazer và tất mỏng.",
  "Dùng cho ASIN con màu đen"),
 ('1b', "VALENTINE'S DAY TO EASTER: A blush pink spaghetti-strap dress with a fitted bodice and tiered skirt for Valentine's dinners, Easter brunch, bridal showers and birthdays. Add a denim jacket when it is cool.",
  "(Màu hồng) Như trên, cho bữa tối Valentine, brunch Phục sinh, tiệc chia tay độc thân của cô dâu, sinh nhật. Trời mát thêm áo denim.",
  "Dùng cho ASIN con màu hồng"),
 (2, "SOLID FABRIC, CLEAR FACTS: 100% polyester, [lined bodice / fully lined]. [Opaque; not see-through in black or pink]. Straps: [adjustable / fixed]. Pull-on style, no zip.",
  "Vải trơn, thông tin rõ: 100% polyester, [lót thân trên / lót toàn bộ]. [Không xuyên ở cả màu đen và hồng]. Dây vai [chỉnh được / cố định]. Mặc kiểu chui, không khóa.",
  "Lót · thử xuyên màu hồng · dây vai"),
 (3, "DESIGNED BY SIXDO: Clean lines, a fitted bodice and a [two]-tier skirt with fullness that moves. SIXDO is a Vietnamese brand whose collections have been shown at New York Fashion Week, here at an everyday price.",
  "Đường nét gọn, thân ôm, chân váy [2] tầng bồng và bay. SIXDO là thương hiệu Việt Nam từng trình diễn tại NYFW, mẫu này ở mức giá dùng hằng ngày.",
  "Số tầng váy"),
 (4, "FIND YOUR SIZE: [S (US 4–6) to XXL (20–22)]. The bodice is fitted, so choose by bust; the skirt is roomy. Inch measurements are in the size chart image. Model is [ ] and wears [ ].",
  "Quy đổi size số Mỹ. Thân trên ôm nên chọn theo vòng ngực; chân váy rộng. Số đo inch trong ảnh bảng size. Chiều cao và size người mẫu.",
  "Dải size thật · người mẫu · đo lại size S"),
 (5, "EASY CARE: Machine wash cold on gentle, or hand wash for the longest wear. Use a mild detergent; no bleach, no tumble dry. Hang dry.",
  "Giặt máy nước lạnh chế độ nhẹ, hoặc giặt tay để bền nhất. Chất giặt nhẹ, không tẩy, không sấy. Phơi treo.",
  "Đối chiếu nhãn giặt"),
]),
}

def filled_len(s):
    # Độ dài ước tính sau khi điền: phương án dài nhất trong [a / b], ô số trống tính 3 ký tự
    def pick(m):
        opts = [o.strip() for o in m.group(1).split('/')]
        return max(opts, key=len) if any(opts) else 'xxx'
    return len(re.sub(r'\[([^\]]*)\]', pick, s))

rows = {k: [(n, en, vi, f, filled_len(en)) for n, en, vi, f in bl] for k, (_, bl) in SP.items()}
maxlen = max(r[4] for v in rows.values() for r in v)
minlen = min(r[4] for v in rows.values() for r in v)
assert maxlen <= 250, maxlen
goc_len = [len(f'{h}: {t}') for h, t in GOC_SP1 + GOC_SP23]

def goc_table(goc, dg):
    out = ['| # | Bullet gốc (nguyên văn) | Ký tự | Trả lời câu hỏi | Quyết định | Lý do |', '|---|---|---|---|---|---|']
    for i, ((h, t), (_, q, d, why)) in enumerate(zip(goc, dg), 1):
        out.append(f'| {i} | **{h}**: {t} | {len(h) + 2 + len(t)} | {q} | **{d}** | {why} |')
    return '\n'.join(out)

def new_table(k):
    out = ['| # | Bullet mới (tiếng Anh) | Nghĩa tiếng Việt | Cần điền / kiểm tra | Ký tự* |', '|---|---|---|---|---|']
    for n, en, vi, f, L in rows[k]:
        out.append(f'| {n} | `{en}` | {vi} | {f} | {L} |')
    return '\n'.join(out)

doithu = '\n'.join(f'| {a} | {b} | {c} | {d} |' for a, b, c, d in DOITHU)

md = f"""# Bullet listing tối ưu – Yêu cầu 02
SIXDO trên Amazon US – sửa từ bullet gốc, có đối chiếu đối thủ
Tài liệu đi kèm Yêu cầu 02, mục 3.2  |  Bullet gốc chép từ trang Amazon ngày 30/09/2026

### Kết luận chính
Bullet hiện tại của SIXDO có 4 vấn đề:
- **SP2 và SP3 dùng chung y hệt 5 bullet**, trong khi đây là hai mẫu khác hẳn: một váy tay dài, một váy dây mảnh. Cả hai đều bị gọi là "midi autumn dress… ideal for fall and winter weather".
- **Không bullet nào ghi thành phần vải, lót, độ xuyên hay size.** Đây lại là hai chủ đề khách nhắc nhiều nhất: chất liệu 32/40 review, size 30/40 review [N1].
- **Bullet 5 là danh sách từ khóa**, có cả "summer jumpsuit", "sundress", và "midi dress" lặp 2 lần. Bullet này không cho khách thông tin gì.
- **Bán theo mùa hè hoặc hứa quá mức:** "warm summer days", "summer jumpsuit", "ideal for fall and winter weather", "softer after a few washes".

Đối thủ giá 30 USD viết khác:
- Ghi dữ kiện trước: thành phần %, "fully lined", quy đổi size số Mỹ, túi, dây chỉnh được, eo chun.
- Viết dịp dùng thành câu tự nhiên nhưng vẫn chứa từ khóa.

Điều gần như không đối thủ nào có là câu chuyện thiết kế. Với giá cao hơn khoảng 70%, đây là lợi thế SIXDO phải dùng.

**Phương án:** mỗi bullet trả lời một câu hỏi, theo thứ tự:
1. Dịp dùng.
2. Vải, lót, độ xuyên.
3. Chi tiết thiết kế và thương hiệu.
4. Size.
5. Cách giặt.

Viết đủ dữ kiện như đối thủ, cộng thêm thương hiệu và câu trả lời thẳng về độ xuyên. Mỗi SKU có bộ bullet riêng; SP3 có bullet 1 riêng cho từng màu. Bullet mới dài {minlen}–{maxlen} ký tự, ngắn hơn bullet gốc ({min(goc_len)}–{max(goc_len)} ký tự) nhưng nhiều thông tin hơn.

## 1 Bullet gốc: đánh giá từng câu
Bullet gốc chép nguyên văn từ trang sản phẩm (ảnh chụp ở Phụ lục).

### 1.1 SP1 – B0GRGWVHWC
{goc_table(GOC_SP1, DANHGIA['SP1'])}

### 1.2 SP2 – B0FDKS69GR và SP3 – B0FDKRBQVZ (dùng chung 5 bullet)
{goc_table(GOC_SP23, DANHGIA['SP23'])}

**Dữ kiện mới từ ảnh sản phẩm, phải dùng trong bullet:**
- SP1: cổ yếm, ống rộng, gấu có viền họa tiết.
- SP2: tay dài bồng bằng voan, bo gấu tay, cổ buộc dây, eo dây rút, chân váy tầng. Thuộc tính khóa ghi "Drawstring".
- SP3: dây mảnh, thân ôm, chân váy tầng dài, có bản đen và hồng.

## 2 Đối thủ viết bullet thế nào
Nguồn: kết quả tìm kiếm các mẫu tương đương của các thương hiệu đối thủ nêu trong Phần 1–2 [1]–[6]. Nội dung là bản tóm tắt, chưa phải nguyên văn [KC].

| Đối thủ, mẫu | So với | Bullet có gì | Điểm đáng học |
|---|---|---|---|
{doithu}

**Sáu cách đối thủ làm mà SIXDO chưa làm:**
1. **Thành phần % và lót ở bullet 1–2.** SIXDO chỉ viết "durable fabric".
2. **Quy đổi size số Mỹ** (S = US 4–6 …) ngay trong bullet. SIXDO không có dòng size nào.
3. **Chi tiết giúp vừa người:** thân chun, eo chun, dây chỉnh, lưng nhún. SIXDO có eo dây rút (SP2) nhưng không nhắc.
4. **Trả lời thẳng "có xuyên không"** (Lamilus, Senllen). Đây đúng là điểm review SP2 phàn nàn.
5. **Dịp dùng viết thành câu,** vd. Grecerelle: work, church, family gatherings, holiday events, wedding guest. Từ khóa vẫn được index mà không thành danh sách.
6. **Mỗi mẫu một bộ bullet riêng.**

**Không nên học theo đối thủ:**
- Nhồi năm và mùa ("2026 Summer") vào bullet.
- Dùng tính từ không chứng minh được ("premium", "skin-friendly").
- Cạnh tranh bằng giá.

SIXDO cần thắng bằng hai thứ đối thủ không có: **câu chuyện thiết kế** (NYFW, chi tiết thấy được trên ảnh) và **sự trung thực về chất liệu**.

## 3 Nguyên tắc viết bullet tối ưu
| Nguyên tắc | Cách làm | Căn cứ |
|---|---|---|
| Một bullet, một câu hỏi | Tiêu đề in hoa là câu trả lời, vd. "IS IT SHEER?", "FIND YOUR SIZE" | Khách lướt nhanh, trên điện thoại thường chỉ thấy vài bullet đầu |
| Dịp trước, vải thứ hai | Bullet 1 là dịp Q4 (search intent); bullet 2 là vải, lót, độ xuyên | Q4 khách tìm theo dịp (YC02 mục 2); chất liệu là chủ đề số 1 trong review |
| Dữ kiện bằng đối thủ | Thành phần %, lót, quy đổi size Mỹ, cách mặc (pull-on, dây rút), cách giặt | Mức tối thiểu khách đã quen khi so với PRETTYGARDEN, ZESICA |
| Khác biệt hơn đối thủ | Chi tiết thiết kế nhìn thấy trên ảnh + NYFW ở bullet 3 | Lý do đáng tiền cho mức giá cao hơn khoảng 70% |
| Không hứa quá | Không ghi "warm", "winter", "true to size", "non-see-through" khi chưa thử | Hứa quá tạo review lệch kỳ vọng như SP2 |
| Từ khóa trong câu, không thành danh sách | Dịp và kiểu dáng viết thành câu; từ khóa còn lại để ở backend | YC02 mục 2: backend search terms |
| Riêng từng SKU và màu | SP2, SP3 tách bộ; SP3 bullet 1 riêng cho đen và hồng | SP3 đen bán tháng 11–12, hồng bán tháng 2–3 |
| Độ dài vừa phải | 150–250 ký tự mỗi bullet | Đủ ý mà vẫn đọc hết trên điện thoại |

## 4 Bullet tối ưu cho từng sản phẩm
Tiêu đề in hoa theo kiểu bullet gốc ("TIÊU ĐỀ: nội dung"). Phần trong [ ] phải điền hoặc kiểm tra trên hàng thật trước khi đăng.

### 4.1 {SP['SP1'][0]}
{new_table('SP1')}

### 4.2 {SP['SP2'][0]}
{new_table('SP2')}

Ảnh xác nhận tay dài, nên title SP2 dùng phương án A (có "Long Sleeve"). Thuộc tính khóa sửa từ "Zipper" (nếu có) thành "Drawstring" cho khớp listing.

### 4.3 {SP['SP3'][0]}
{new_table('SP3')}

Nếu Seller Central chỉ cho một bộ bullet ở ASIN cha, bullet 1 dùng câu gộp: `for holiday parties, New Year's Eve, Valentine's Day and Easter brunch`.

*Ký tự: ước tính sau khi điền, lấy phương án dài nhất trong mỗi [ ], ô số trống tính 3 ký tự.

## 5 So sánh trước và sau
| Tiêu chí | Bullet gốc | Bullet mới |
|---|---|---|
| Riêng cho từng SKU | SP2 = SP3 | 3 bộ riêng; SP3 thêm bản theo màu |
| Dịp Q4 (holiday, fall, wedding guest, getaway) | Không có; có "summer", "beach outings" | Có ở bullet 1 của mọi SKU |
| Thành phần, lót, độ xuyên | Không có | Bullet 2 |
| Size | Không có | Bullet 4: quy đổi size Mỹ, cách chọn size, người mẫu |
| Thương hiệu, lý do đáng tiền | Chỉ "elegantly designed" | Bullet 3: chi tiết thấy được + NYFW |
| Claim chưa kiểm chứng | "Ideal for fall and winter", "softer after washes" | Không có |
| Danh sách từ khóa | Bullet 5 | Bỏ; từ khóa ở câu và backend |

## 6 Những việc đi kèm
| Việc | Chi tiết |
|---|---|
| Backend search terms | Đưa các từ hữu ích trong bullet 5 cũ (wide-leg jumpsuit, dressy jumpsuit, vacation jumpsuit, boho maxi dress…) vào backend (YC02 mục 2); bỏ "summer", "sundress" |
| Title | SP2 dùng phương án A (có Long Sleeve). SP3 giữ "Spaghetti Strap Tiered" vì ảnh xác nhận |
| Thuộc tính | Cách giặt khớp bullet 5; SP2 khóa "Drawstring"; độ dài theo số đo thật |
| Ảnh | Bullet 2 khớp ảnh ô 5 (cận vải, lật lót) và ô 8 (ảnh thật); bullet 4 khớp size chart ô 7 (YC05) |
| Đo hàng thật (03/10) | Thành phần theo nhãn, lót, thử xuyên (nhất là SP3 hồng), dải size, số đo inch, chiều cao và size người mẫu |

## 7 Kiểm tra trước khi đăng
- [ ] Không còn ô [ ] nào; mọi dữ kiện khớp nhãn và hàng thật.
- [ ] SP2 và SP3 có bộ bullet riêng; SP3 mỗi màu đúng bullet 1.
- [ ] Không còn "summer", "winter", "sundress" trong bullet.
- [ ] Bullet 4 khớp size chart ô 7; bullet 2 khớp ảnh ô 5 và ô 8.
- [ ] Thuộc tính (chất liệu, giặt, khóa, độ dài) khớp bullet.
- [ ] Mỗi bullet dưới 250 ký tự; không có ký tự đặc biệt như ! $ ? {{ }}.

## Phụ lục Ảnh chụp bullet gốc
![SP1 – B0GRGWVHWC, 30/09/2026](lam-viec/anh-bullet-goc/SP1_B0GRGWVHWC.png)

![SP2 – B0FDKS69GR, 30/09/2026](lam-viec/anh-bullet-goc/SP2_B0FDKS69GR.png)

![SP3 – B0FDKRBQVZ, 30/09/2026](lam-viec/anh-bullet-goc/SP3_B0FDKRBQVZ.png)

## Nguồn
[N1] SIXDO – Phần 1–2: mã hóa 40 review đối thủ và 8 review SP2; danh sách đối thủ; ASIN 3 sản phẩm.
[N2] SIXDO – Yêu cầu 02, mục 2 (từ khóa) và mục 3 (listing).
[1] PRETTYGARDEN long sleeve floral tiered maxi: https://www.amazon.com/dp/B0D3LPGLJL ; https://us.amazon.com/PRETTYGARDEN-Womens-Dresses-Sleeve-Smocked/dp/B0D45JDT9W
[2] ZESICA spaghetti strap maxi: https://www.amazon.com/ZESICA-Womens-Summer-Spaghetti-Square/dp/B0CCPHM671
[3] GRECERELLE long sleeve maxi: https://www.amazon.com/GRECERELLE-Womens-Dresses-Vacation-Outfits/dp/B0D76KN8ML
[4] ANRABESS wide leg jumpsuit: https://www.amazon.com/Anrabess-Womens-Sleeveless-Wide-Leg-Jumpsuit/dp/B0GS6LTYPH ; https://www.today.com/shop/anrabess-wide-leg-jumpsuit-amazon-review-rcna145477
[5] PRETTYGARDEN jumpsuit: https://www.amazon.com/PRETTYGARDEN-Jumpsuits-Sleeveless-Crewneck-Vacation/dp/B0DK54122D
[6] Lamilus tiered maxi: https://www.amazon.com/Lamilus-Sundresses-Dresses-Sleeveless-Spaghetti/dp/B09YMPCY7H ; Senllen linen maxi: https://www.amazon.com/Senllen-Adjustable-Spaghetti-Contrast-Backless/dp/B0D1CLJ27T
"""
open(OUT, 'w').write(md)
print('ok, new', minlen, maxlen, '| goc', min(goc_len), max(goc_len))
