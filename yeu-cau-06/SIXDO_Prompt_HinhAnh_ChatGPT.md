# Bộ prompt ChatGPT tạo hình ảnh cho SIXDO
Bộ 9 ảnh listing Amazon, A+ Content và banner Brand Store cho 3 sản phẩm
Dùng với ChatGPT (tạo ảnh bằng GPT-4o / GPT Image)  |  Bám theo Yêu cầu 02 và 03

### Cách dùng
- **Luôn tải ảnh thật lên trước khi dán prompt.** Mọi prompt đều lấy ảnh sản phẩm thật làm gốc. AI chỉ được đổi nền, ánh sáng và đặt thêm đồ phối xung quanh; không được vẽ lại họa tiết, màu, độ dài hay dáng. Đây là nguyên tắc "ảnh khớp hàng thật" của Yêu cầu 02 và 03.
- **Người mẫu phải là người thật trong ảnh gốc.** Theo phản biện ở Yêu cầu 03, từ 07/2026 ảnh có người do AI tạo phải gắn nhãn metadata [KC]. Vì vậy các prompt giữ nguyên người mẫu, chỉ đổi bối cảnh.
- **Mỗi ảnh một cuộc chat mới**, để ChatGPT không mang chi tiết của ảnh trước sang ảnh sau.
- **Dán theo thứ tự:** khối 1 (quy tắc chung) → khối 2 (mô tả sản phẩm) → prompt của ô ảnh.
- **Kích thước:**
  - Ảnh listing: yêu cầu hình vuông 1024×1024, sau đó upscale lên 2000×2000 px (Amazon cần ≥ 1000 px để phóng to).
  - Banner A+ và Brand Store: yêu cầu khổ ngang 1536×1024, sau đó cắt theo kích thước ở mục 6.
- **Chữ trên ảnh:** ChatGPT viết chữ khá tốt nhưng vẫn có thể sai chính tả. Kiểm tra từng chữ; nếu sai, xuất ảnh không chữ rồi thêm chữ bằng Canva.
- **Kiểm tra trước khi dùng:** chạy checklist ở mục 7 cho từng ảnh.

| Ô ảnh | Nội dung | Làm bằng |
|---|---|---|
| 1 MAIN | Ảnh chính nền trắng | Ảnh thật; ChatGPT chỉ tách nền (prompt 3.1) |
| 2–3 OCCASION | Hai bối cảnh theo dịp | Ảnh thật + nền do ChatGPT tạo (prompt 4) |
| 4 LAYER IT | Phối lớp mùa lạnh | Flat-lay: ảnh trải phẳng của sản phẩm + đồ phối do ChatGPT thêm xung quanh (prompt 3.2) |
| 5 FABRIC | Cận vải, độ xuyên, lớp lót | Ảnh macro thật + chú thích (prompt 3.3) |
| 6 DETAILS | Chi tiết thiết kế | Ghép 3 ảnh cận thật + chú thích (prompt 3.4) |
| 7 SIZE CHART | Bảng số đo inch | ChatGPT dựng đồ họa, số đo điền từ hàng thật (prompt 3.5) |
| 8 TRUE-TO-LIFE | Ảnh không chỉnh | **Không dùng AI**: ảnh chụp ánh sáng ngày, giữ nguyên |
| 9 BRAND | Thương hiệu NYFW | Ảnh runway có quyền dùng + chữ (prompt 3.6) |

## 1 Khối quy tắc chung
Dán khối này ở đầu mọi prompt dùng ảnh thật.

```
You are editing a real product photo for an Amazon US fashion listing.
Use the uploaded photo as the exact reference and keep the garment 100% unchanged:
same print, same colors, same neckline, straps, sleeves, length, fit, drape,
fabric texture and level of transparency. Do not add or remove any garment detail.
Keep the model's face, body, skin tone, hair and pose exactly as in the photo.
Only change what the task below asks for (background, lighting, surrounding props).
Photorealistic, natural true-to-life colors, soft realistic shadows, sharp focus on the garment.
No logos, no watermarks, no brand names except where the task gives exact text.
Output: square 1:1, high resolution.
```

## 2 Khối mô tả sản phẩm
Dán khối của đúng SKU ngay sau khối 1. Chỗ trong [ ] điền theo hàng thật.

**SP1 – Floral Halter Jumpsuit**
```
Garment: SIXDO women's halter-neck wide-leg long jumpsuit, woven cotton,
blue floral print on white, sleeveless. Lining: [yes/no].
```

**SP2 – Floral Maxi Dress (xanh hoặc vàng)**
```
Garment: SIXDO women's tiered floral maxi dress in lightweight polyester voile,
tie neckline, sheer [long/puff] sleeves, [Blue Floral / Mustard Yellow Floral] colorway.
Body lining: [lined/unlined]. Keep the sleeve sheerness exactly as in the photo.
```

**SP3 – Tiered Fit and Flare Dress (đen hoặc hồng)**
```
Garment: SIXDO women's spaghetti-strap fitted-bodice dress with a tiered flared skirt,
solid polyester, [Black / Blush Pink]. Keep the exact hem length shown in the photo.
```

## 3 Prompt dùng chung cho mọi SKU

### 3.1 Ô 1 – Ảnh chính nền trắng
Tải lên ảnh người mẫu đứng, thấy toàn thân. Nếu ChatGPT làm thay đổi sản phẩm, hãy tách nền bằng Photoroom hoặc remove.bg thay vì dùng ChatGPT.

```
[Khối 1] [Khối 2]
Task: Replace the background with pure white (RGB 255,255,255), seamless, no gradient, no floor line.
Keep only a very soft natural contact shadow under the feet.
The model stands full-length, centered; the garment and model fill about 85% of the frame height.
No text, no props, no graphics, no badges.
```

### 3.2 Ô 4 – Layer It (flat-lay phối lớp)
Tải lên ảnh sản phẩm trải phẳng, chụp từ trên xuống, trên nền trơn.

```
[Khối 1] [Khối 2]
Task: Create a styled top-down flat-lay for cooler weather. Keep the garment exactly as photographed,
in the center, same size and shape. Around it, arrange these real-looking items without overlapping the garment:
[SP1: cropped cream cardigan, light trench coat folded, flat ballet shoes, small straw bag]
[SP2: light-wash denim jacket, suede ankle boots in camel, leather crossbody bag]
[SP3 Black: camel blazer, sheer black tights, black heeled pumps, small gold clutch]
[SP3 Pink: cream knit cardigan, light-wash denim jacket, nude flats]
Background: warm off-white linen texture. Soft window daylight from the top left.
Add one line of clean sans-serif text at the bottom: "Add a layer for cooler evenings".
Check the spelling of the text exactly.
```

### 3.3 Ô 5 – Cận vải và độ xuyên
Tải lên ảnh macro vải thật. Với SP2, tải thêm ảnh lật lớp lót hoặc ảnh vải soi dưới ánh sáng.

```
[Khối 1] [Khối 2]
Task: Build a clean fabric information image from the uploaded close-up photo(s).
Keep the fabric photo(s) unchanged and large. Add small, thin-line callouts in sans-serif text:
[SP1: "Woven cotton" · "Lining: ___" · "Hand wash cold"]
[SP2: "Lightweight polyester voile" · "Sheer sleeves by design" · "Body lining: ___"]
[SP3: "Solid polyester" · "Lining: ___" · "Opacity: ___"]
White background, generous spacing, max 3 callouts. Spell the text exactly as given.
```

### 3.4 Ô 6 – Chi tiết thiết kế
Tải lên 3 ảnh cận thật: cổ, dây hoặc tay áo, tầng váy hoặc ống quần.

```
[Khối 1] [Khối 2]
Task: Arrange the three uploaded close-up photos as a clean 3-panel collage on white,
each panel unchanged and sharp. Under each panel add one short label:
[SP1: "Halter neckline" · "Floral print" · "Wide leg"]
[SP2: "Tie neckline" · "Sheer [puff] sleeves" · "Tiered skirt"]
[SP3: "Spaghetti straps" · "Fitted bodice" · "Tiered flared skirt"]
Thin sans-serif font, dark gray text. Spell the labels exactly.
```

### 3.5 Ô 7 – Size chart bằng inch
Điền số đo thật trước khi dán. Nếu ChatGPT viết sai số, dựng bảng này bằng Canva.

```
Create a clean, minimal size chart graphic for an Amazon fashion listing, square 1:1, white background.
Title at top: "Size Guide (inches)".
Table with columns: Size | Bust | Waist | [Hip / Length] | [Inseam / Sleeve]
Rows exactly:
S | __ | __ | __ | __
M | __ | __ | __ | __
L | __ | __ | __ | __
XL | __ | __ | __ | __
[XXL | __ | __ | __ | __   (SP3 only)]
Below the table: "Model is __ ft __ in and wears size __."
On the right, a simple line drawing of the garment silhouette with arrows showing where each measurement is taken.
Font: clean sans-serif, dark gray. Every number must be written exactly as given.
```

### 3.6 Ô 9 – Thương hiệu
Chỉ dùng ảnh runway mà SIXDO có quyền sử dụng. Không gán thành tích NYFW cho mẫu sản phẩm này.

```
Task: Create a brand card from the uploaded SIXDO runway photo. Keep the photo unchanged,
slightly darken the lower third for readability. Add text in elegant serif font, white:
Line 1: "SIXDO"
Line 2: "Runway-designed florals from Vietnam"
Line 3 (smaller): "From a brand shown at New York Fashion Week"
Square 1:1. Spell every word exactly.
```

## 4 Ô 2–3: bối cảnh theo dịp cho từng SKU
Tải lên ảnh người mẫu thật mặc sản phẩm, rồi dán **[Khối 1] [Khối 2]** và prompt bên dưới. Mỗi SKU có 2 bối cảnh, lấy từ moodboard của Yêu cầu 03.

### 4.1 SP1 – Warm-Weather Getaway
**Ô 2 – Resort dinner**
```
Task: Place the model on an open-air resort terrace at sunset by the sea.
Warm golden-hour light matching the direction of light on the model. Soft palette: white, sand, ocean blue.
Background slightly blurred (shallow depth of field). A dinner table with candles far in the background.
No other people in focus. No text.
```

**Ô 3 – Brunch ở nơi ấm, destination wedding**
```
Task: Place the model in a bright garden courtyard of a warm-weather hotel at late morning,
white stone walls, bougainvillea, a brunch table in the soft-focus background.
Natural daylight, fresh and airy. No other people in focus. No text.
```

### 4.2 SP2 vàng – Layer It (mùa thu)
**Ô 2 – Họp mặt mùa thu**
```
Task: Place the model on a quiet tree-lined street in early autumn afternoon light,
warm but not orange-filtered; background tones camel, cream and soft green, gently blurred.
No pumpkins, no Halloween props, no heavy fall leaves. No text.
```

**Ô 3 – Wedding guest ban ngày**
```
Task: Place the model at an elegant daytime garden wedding venue: white chairs and floral arch
softly blurred in the background, overcast soft light. No bride or groom visible. No text.
```

### 4.3 SP2 xanh – chuyến đi
**Ô 2 – Chuyến đi đến nơi ấm**
```
Task: Place the model on the wooden deck of a cruise ship or a waterfront boardwalk at late afternoon,
calm blue sea and sky in soft focus, gentle warm light. No text.
```

**Ô 3 – Garden wedding ở nơi ấm**
```
Task: Place the model in a lush tropical garden with white stone paths and palm shade,
soft natural daylight, a wedding decor arch far in the blurred background. No text.
```

### 4.4 SP3 đen – Party Season
**Ô 2 – Tiệc tối trong nhà**
```
Task: Place the model in an elegant indoor evening party: warm amber lights, softly blurred bokeh,
dark wood and brass details, a champagne glass on a side table in the background.
Refined and minimal. No Santa, no reindeer, no tinsel, no Christmas sweater motifs. No text.
```

**Ô 3 – Phối lớp đi làm, đi chơi**
```
Task: Place the model in a modern city café interior on a cool day, large windows,
soft daylight, neutral tones (black, camel, gray). Keep the garment unchanged.
No text.
```
Ghi chú: ảnh phối blazer ở ô 3 cần chụp thật với blazer. Prompt trên chỉ đổi nền.

### 4.5 SP3 hồng – Spring Occasions
**Ô 2 – Brunch mùa xuân**
```
Task: Place the model at a bright spring brunch setting: a table with fresh pastel flowers
and pastries softly blurred behind, cream and blush palette, gentle morning daylight.
No cartoon hearts, no Easter bunnies. No text.
```

**Ô 3 – Hẹn hò buổi tối, bridal shower**
```
Task: Place the model in a softly lit restaurant or tea room in the early evening,
warm candle-like light, blush and cream tones, elegant and understated. No text.
```

## 5 Nếu chưa có ảnh người mẫu thật
Phương án tạm, chỉ dùng cho **ảnh phụ** và khi đã xác nhận quy định gắn nhãn ảnh AI trong Seller Central [KC]. Tải lên ảnh sản phẩm trải phẳng hoặc trên ma-nơ-canh.

```
[Khối 2]
Task: Show this exact garment worn by a photorealistic adult woman model, age 28–40,
[choose: East Asian / Black / White / Latina], US size [S/M], standing naturally, full length.
The garment must match the uploaded product photo exactly: print scale and placement, colors,
neckline, sleeves, hem length and transparency. Do not invent details.
Setting: [paste one scene from section 4]. Square 1:1. No text.
```
Sau khi tạo, đặt ảnh AI cạnh ảnh gốc và so từng chi tiết: kích thước hoa, vị trí tầng váy, độ dài.

## 6 A+ Content và banner Brand Store
A+ không được ghi tên ngày lễ hay giá (Yêu cầu 02 và 03). Tạo ảnh khổ ngang 1536×1024, rồi cắt theo kích thước module:
- A+ header: 970×600.
- Ảnh trong module 3 ảnh: 300×300.
- Brand Store hero: 3000×600, có thể ghép hoặc mở rộng nền.

**A+ header – "One piece, many occasions"**
Tải lên 3 ảnh thật của cùng một SKU ở 3 bối cảnh.
```
[Khối 1] [Khối 2]
Task: Combine the three uploaded photos of the same garment into one wide banner, three equal vertical panels,
thin white gutters, each photo unchanged. Leave clean space at the top for text:
"One piece, many occasions." in elegant serif, dark gray. Landscape 1536x1024. Spell exactly.
```

**Brand Store banners (đổi theo đợt bán)**
```
Task: Create a wide lifestyle banner from the uploaded photo, extending the background naturally
to a wide landscape format without changing the model or garment. Leave empty space on the [left/right]
for text in elegant serif: "[BANNER TEXT]". Landscape 1536x1024.
```
Chữ trên banner theo từng đợt:
- 15/10: "Layer it. Wear it again."
- 16/11: "Dressed for the party season."
- 02/01: "Pack it for somewhere warm."
- 01/02: "For the moments that matter."

## 7 Checklist kiểm tra từng ảnh
| Kiểm tra | Đạt khi |
|---|---|
| Họa tiết | Kích thước, mật độ và vị trí hoa giống ảnh gốc |
| Màu | So cạnh ảnh gốc chụp ánh sáng ngày: không lệch tông |
| Dáng và độ dài | Cổ, dây, tay, tầng váy, gấu váy, ống quần đúng như thật |
| Độ xuyên | Không làm vải trông dày hơn hoặc kín hơn thực tế |
| Người mẫu | Mặt, dáng, tay chân tự nhiên; không thừa ngón, không méo |
| Chữ | Đúng chính tả từng chữ; ảnh chính không có chữ |
| Bối cảnh | Không có logo lạ, người khác rõ mặt, đạo cụ lễ hội rẻ tiền |
| Kích thước | ≥ 1000 px (nên 2000 px), đúng tỷ lệ của ô |
| Quy định | Ảnh chính nền trắng, sản phẩm chiếm khoảng 85%; ảnh AI có người được gắn nhãn nếu Amazon yêu cầu |

Ảnh không đạt một dòng nào thì tạo lại hoặc dùng ảnh thật. Theo Yêu cầu 02, 5/8 review của SP2 lệch kỳ vọng về hình ảnh, nên một ảnh đẹp nhưng sai sự thật sẽ làm tăng hoàn hàng.
