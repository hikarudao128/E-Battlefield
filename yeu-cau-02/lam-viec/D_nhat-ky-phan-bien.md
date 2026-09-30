# Nhật ký phản biện YC02 (bản D, 30/09/2026)

Cách kiểm: chạy lại `out/C_model.py` (84/84 DAT) và tự tính lại bằng Python các bảng units, session, ACoS, hòa vốn, coupon, tài chính, phân bổ 300 USD, số ký tự title và số byte backend. Bản gốc trước khi sửa được lưu ở `YC02_draft.bak.md`.

## A. Các lỗi đã sửa trong `YC02_draft.md`

| # | Vấn đề | Vị trí | Cách sửa / nguồn |
|---|---|---|---|
| 1 | Viết "233 click = 210 USD ÷ 0,90", nhưng lịch PPC thực tế là 181 USD cố định cho 233,6 click (SP3 bid 0,55). Hai con số chỉ trùng nhau ngẫu nhiên. Giám khảo có thể hỏi 29 USD bổ sung đã nằm trong dự báo chưa | Kết luận chính; mục 1.6 | Ghi rõ: 233,6 click đến từ 181 USD theo lịch mục 5.2. 29 USD bổ sung không tính vào dự báo. Nói rõ cách làm tròn 233/234 |
| 2 | Mốc 30/11 bật coupon SP3 đen từ 01/12, trong khi PPC SP3 đen chạy đến 19/12. Điều này trái quy tắc "SP3 không chạy PPC và coupon cùng ngày" | Mục 1.9 | Khi bật coupon sớm thì dừng PPC SP3 đen cùng ngày. 19 USD còn lại chuyển sang tăng ngân sách ngày của chiến dịch Exact tháng 1 |
| 3 | Mốc 15/10 vừa chuyển 45 USD sang tháng 1, vừa bật SP3 đen sớm từ 01/11 (thêm 15 USD). Tổng thành 60 USD, vượt 45 | Mục 1.9 | Tách: 15 USD cho SP3 đen từ 01/11–15/11, 30 USD tăng ngân sách ngày tháng 1. Không mở chiến dịch thứ ba |
| 4 | "PPC chỉ bật sau khi A+ được duyệt", nhưng A+ gửi 07/10 có thể mất 7 ngày làm việc (tức khoảng 16/10), còn PPC bắt đầu 15/10 | Mục 5.2 | PPC bật 15/10 khi title, ảnh thật và size chart đã lên; không chờ A+ |
| 5 | Các nguồn tăng session cộng lại là 110, nhưng mức tăng cần là 109. Viết "mạnh gấp 3,5 lần", đúng ra 376/110 = 3,4 lần | Mục 1.8 | Đổi +10 thành +9; đổi 3,5 thành 3,4 |
| 6 | Bảng 1.2 có 4 cột nhu cầu, trông như 4 phân khúc. Điều này lệch với 3 hướng nhu cầu của Phần 1–2 | Mục 1.2 | Đặt tên cột Hướng 1/2/3; long sleeve là nhánh mùa thu của Hướng 2 |
| 7 | Nói quá: "Khách Q4–Q1 không gõ summer dress". Dữ liệu chỉ cho thấy Q4 index 19,8 so với mức nền của chính từ đó | Tóm tắt mục 2 | Viết lại: mức quan tâm còn khoảng 1/5 mức nền; khách "có thể" tìm theo dịp |
| 8 | Quy tắc điểm từ khóa "≤ 6 chỉ đặt ở backend/auto" trái với bảng: wedding guest dresses, casual dresses, fall dresses (6 điểm) vẫn đặt ở HL/bullet. "long sleeve dress" 16 điểm nhưng chỉ chạy auto | Mục 2.3 | Sửa quy tắc: ≤ 6 không chạy exact, chỉ lên HL/bullet khi R = 2. Thêm ngoại lệ cho long sleeve dress |
| 9 | "pink easter dress" có trong exact đợt 4 nhưng thiếu trong bảng từ khóa | Mục 2.2 | Thêm dòng vào bảng |
| 10 | Backend SP1 lặp "shower" 2 lần, tốn byte | Mục 2.7 | Gộp thành "bridal baby shower": 221 → 214 byte (đã đếm lại bằng `len(s.encode('utf-8'))`) |
| 11 | Title SP2 phương án B có "Flowy" trùng với "flowy" ở backend, trái quy tắc chính bài đặt ra | Mục 2.7 | Thêm điều chỉnh: dùng phương án B thì bỏ "flowy" khỏi backend |
| 12 | Claim (a): title 75 ký tự + Item Highlights 125 ký tự từ 27/07/2026. **Đúng.** Có thêm các chi tiết: áp dụng dần đến hết 2026; AI của Amazon tự viết lại; chủ thương hiệu có 14 ngày để xem lại | Mục 3.1; nguồn [7] | Bỏ nhãn [KC], bổ sung các chi tiết trên. Nguồn: Seller Forums t/145b6d0f…; zonguru, zentail, canopymanagement (nguồn thứ cấp). Trang Amazon bị chặn nên chưa đọc trực tiếp |
| 13 | Claim (b): Q&A và Rufus. Câu "Q&A bị bỏ và thay bằng AI" nói quá: Q&A vẫn còn nhưng bị chuyển xuống trang phụ. Rufus đổi tên thành **Alexa for Shopping** tại Mỹ từ 13/05/2026 là **đúng** theo nhiều nguồn thứ cấp | Mục 3.3; mục 4.2 dòng 8; nguồn [10] | Viết lại: Q&A "không còn nổi bật"; gọi tên Alexa for Shopping. Nguồn: amalytix, canopymanagement, stackline (nguồn thứ cấp) |
| 14 | Claim (c): phí coupon 5 USD + 2,5%. **Đúng**, áp dụng từ 06/2025 | Mục 6.2; nguồn [16] | Ghi mốc thời gian và nhãn nguồn thứ cấp. Nguồn: supplykick, myamazonguy, sellerlabs. Chưa xác nhận $5 tính theo lần chạy hay theo ngày, nên cần kiểm tra khi tạo coupon |
| 15 | Claim (d): A+ cấm thông tin theo thời điểm và tên ngày lễ. **Có nguồn thứ cấp ủng hộ**; chưa đọc được bản gốc của Amazon | Mục 3.6; nguồn [11] | Bổ sung "now, latest" và ghi rõ là nguồn thứ cấp (blazontek, greenonion) |
| 16 | Claim (e): ngân sách ngày tối thiểu của Sponsored Products là 1 USD. **Đúng.** Nhưng đây là ngân sách **bình quân**: một ngày có thể chi hơn, chỉ có trần theo tháng. Bài chưa nói điều này | Mục 5.2; thêm nguồn [21] | Thêm câu giải thích; nguồn: Amazon Ads budget guide, sellermetrics |
| 17 | Claim (f): phụ phí tồn kho lâu ngày cho quần áo từ ngày 271. **Đúng** cho 2026 (mức 181–270 ngày miễn cho quần áo; từ ngày 271 khoảng 5,45 USD/cu ft). Có nguồn nói "quần áo miễn hoàn toàn", nên các nguồn chưa thống nhất. Câu "vài chục cent" chưa có số. Bài cũng thiếu rủi ro: hàng nhập đầu mùa Xuân/Hè có thể qua mốc 271 ngày ngay trong kỳ | Mục 7.3; nguồn [19] | Thêm mức phí, đổi thành 0,3–0,6 USD/unit/tháng, thêm cảnh báo. Nguồn: goatconsulting, sellermagnet (nguồn thứ cấp) |
| 18 | Claim (g): Percentage Off tối thiểu 2 units. **Đúng** với khuyến mãi không có claim code, từ 02/09/2025 | Mục 6.3; nguồn [18] | Ghi rõ điều kiện và ngày. Nguồn: Seller Forums t/9fc22adb…, channelmax |
| 19 | Claim (h): Amazon Posts ngừng hoạt động. **Đúng**: ngừng hẳn 31/07/2025. Bài không dùng Posts nên không cần sửa | – | Nguồn: advertising.amazon.com/solutions/products/posts; ppc.land |
| 20 | Bảng KPI 9.4 và mục 1.5 lặp lại danh sách "năm chỉ số" | Cuối mục 9.4 | Rút gọn còn 1 câu |
| 21 | Bảng tự kiểm tra chưa có các quy tắc điều chuyển và phép cộng click | Mục 10.2 | Thêm 3 dòng kiểm tra |

## B. Đã kiểm, không có lỗi

| # | Phép kiểm | Kết quả |
|---|---|---|
| 1 | Units theo SKU 49/71/110; bảng tháng theo cả hàng và cột = 71; lũy kế | Khớp |
| 2 | Mô hình nguồn: 49,1 / 71,4 / 110,0; theo SKU (ví dụ SP1: 200 × 7,5% + 40 × 4% = 16,6) | Khớp |
| 3 | Bảng session để đạt mục tiêu: tổng tự nhiên = 922; tỷ lệ +46% / +34% / +24% / +123% | Khớp |
| 4 | 181 + 29 + 50 + 20 + 20 = 300; bảng tháng = 300,00; tỷ trọng | Khớp |
| 5 | Click = chi ÷ CPC: 50 / 61,8 / 100 / 21,8; ACoS = CPC ÷ (CVR × giá); ACoS và CPC hòa vốn A/B | Khớp |
| 6 | Tối đa 2 chiến dịch mỗi ngày, kể cả khi mở PPC bổ sung 16–25/11 | Khớp |
| 7 | Coupon: 32,28 / 37,55 / 47,49 USD; tiền giảm 54,59 / 77,98 / 122,17 USD | Khớp |
| 8 | Tài chính A/B/C × 3 kịch bản; xả giá +533 / +235 / −375; bội số 2,46 lần và 3,51 lần | Khớp |
| 9 | Cỡ mẫu phân biệt 6% và 9%: khoảng 1.209 session mỗi nhóm | Khớp với "khoảng 1.200" |
| 10 | Số ký tự title và Item Highlights (67/72/66/56; 104/93/106/106); byte backend (SP2 203, SP3 204); bullet ≤ 249 ký tự | Khớp |
| 11 | Ngày lễ: Thanksgiving 26/11/2026, Tết 06/02/2027, Phục sinh 28/03/2027 | Khớp |

## C. Đề xuất rút gọn (chưa làm, nhóm quyết)
- Mục 10.3 (câu hỏi giám khảo) lặp lại nhiều ý ở mục 5.4 và 8.3. Có thể giữ 3 câu.
- Mục 9.3 (nguồn lực) có thể gộp thành 1 dòng trong bảng 9.2.
- Bảng 2.5 và Phụ lục B cùng liệt kê dữ liệu lấy 01–03/10. Có thể bỏ bảng 2.5, chỉ giữ một câu dẫn sang Phụ lục B.
