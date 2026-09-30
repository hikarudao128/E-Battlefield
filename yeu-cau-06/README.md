# Yêu cầu 06

## Hệ thống đo lường (yêu cầu 06 của đề bài)
- `SIXDO_YeuCau06_HeThongDoLuong.docx` / `.md`: báo cáo. Gồm cây KPI, nối mục tiêu đề bài với KPI, kế hoạch theo tháng (cơ sở 71, mục tiêu 110 units), dashboard mẫu, nhịp theo dõi, cách chứng minh uplift CVR 50%.
- `SIXDO_YeuCau06_Dashboard.xlsx`: dashboard có công thức. Điền sheet NhapLieu mỗi tháng, chọn tháng ở Dashboard!C3.
- `do-luong/`: script dựng lại.
  - `plan.py`: kế hoạch theo tháng từ tham số YC02.
  - `build_xlsx.py`: dựng file Excel.
  - `verify.py`: kiểm tra công thức bằng pycel.
  - `kpi_tree.html`, `dashboard_mau.html`, `render.js`: dựng 2 hình trong `do-luong/anh/`.

## Bộ prompt ChatGPT tạo hình ảnh
- `SIXDO_Prompt_HinhAnh_ChatGPT.docx` / `.md` và `mau/`: bộ prompt làm theo yêu cầu riêng, dùng cho Yêu cầu 05.
