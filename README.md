# TOEIC 700+ Study Tracker

Ứng dụng web tĩnh để theo dõi lộ trình TOEIC 24 tuần. Không cần backend hoặc tài khoản. Giao diện và toàn bộ lộ trình có thể chuyển giữa English / Tiếng Việt.

## Chạy trên máy local

- Windows: double-click `start-local.bat`, đợi khoảng 2 giây; app sẽ mở tại `http://127.0.0.1:8080`.
- macOS/Linux: chạy `./start-local.sh`.
- Giữ cửa sổ server đang chạy trong lúc dùng app. Nếu trình duyệt không tự mở, truy cập `http://127.0.0.1:8080`.

Mỗi buổi có phần Reading bám theo đúng chủ điểm và Part trong lộ trình. Listening là tracker cho tài liệu tự chọn nhưng vẫn bám đúng Part của từng buổi: chỉ hiện Part được giao, buổi mock Listening đầy đủ mới hiện Parts 1–4, còn buổi ôn điểm yếu chung sẽ yêu cầu chọn đúng một Part. Có thể nhập nguồn đề, kết quả, nguyên nhân sai và ghi chú. Câu Reading làm sai được tự động đưa vào Sổ lỗi sai; lỗi từ tài liệu ngoài có thể ghi nhanh ngay trong buổi học.

Trong Vocabulary, collocation luôn hiển thị trên flashcard. Khi thêm từ, chỉ cần nhập **Word / phrase** rồi bấm **Auto-fill** (hoặc bấm **Add flashcard** ngay): app lấy IPA thật từ mục Pronunciation của Wiktionary, dùng Datamuse cho nghĩa/từ loại, và điền ví dụ/collocation từ dữ liệu TOEIC có sẵn khi có. App không hiển thị ARPAbet dưới nhãn IPA. Nếu không lấy được IPA thật, trường IPA được để trống hoặc dùng dữ liệu offline đã kiểm tra.

## Deploy lên Vercel

1. Upload thư mục này lên GitHub.
2. Trong Vercel, chọn **Add New → Project** và import repository.
3. Chọn **Framework Preset: Other**.
4. Đặt **Output Directory** là `dist` và deploy.

Dữ liệu được lưu trong IndexedDB của trình duyệt. Dùng **Settings → Export backup** hoặc **Cài đặt → Xuất backup** để chuyển dữ liệu sang máy khác hoặc tránh mất dữ liệu khi xóa browser data.
