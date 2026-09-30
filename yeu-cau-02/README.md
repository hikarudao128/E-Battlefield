# Yêu cầu 02 – Chiến lược kinh doanh trên Amazon (SIXDO)

- `SIXDO_YeuCau02_ChienLuocAmazon.docx`: bản nộp, cùng định dạng với bản Phần 1–2.
- `SIXDO_YeuCau02_ChienLuocAmazon.md`: bản nguồn để sửa tiếp.
- `SIXDO_YeuCau02_Bullet_LamRo.docx` / `.md`: mục 3.2: bullet gốc (ảnh chụp trong `lam-viec/anh-bullet-goc/`), phân tích bullet đối thủ, 5 bullet tối ưu mỗi sản phẩm. Sinh lại bằng `python lam-viec/build_bullet.py`.

## Thư mục `lam-viec/`
Các file này là kết quả của các subagent:

- `BRIEF.md`: khung dữ kiện và quy tắc dùng chung.
- `A_…`: mục tiêu, mô hình 3 kịch bản, chuyển đổi, tồn kho.
- `B_…`: từ khóa, listing, A+.
- `C_…` và `C_model.py`: PPC, coupon, tài chính, ngân sách. Units và giả định traffic nằm ở khối tham số đầu file.
- `D_nhat-ky-phan-bien.md`: nhật ký phản biện.

## Khi có số thật
1. Sửa khối tham số trong `C_model.py`, rồi chạy lại.
2. Cập nhật các bảng trong bản `.md`.
3. Xuất lại file Word: `python lam-viec/md2docx.py SIXDO_YeuCau02_ChienLuocAmazon.md SIXDO_YeuCau02_ChienLuocAmazon.docx`

`md2docx.py` cần thư mục `dx/`, là file Phần 1–2 đã giải nén.
