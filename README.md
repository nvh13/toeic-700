# TOEIC 700+ Study Tracker

Ứng dụng web tĩnh để theo dõi lộ trình TOEIC 24 tuần. Không cần backend hoặc tài khoản. Giao diện và toàn bộ lộ trình có thể chuyển giữa English / Tiếng Việt.

## Chạy trên máy local

- Windows: double-click `start-local.bat`, đợi khoảng 2 giây; app sẽ mở tại `http://127.0.0.1:8080`.
- macOS/Linux: chạy `./start-local.sh`.
- Giữ cửa sổ server đang chạy trong lúc dùng app. Nếu trình duyệt không tự mở, truy cập `http://127.0.0.1:8080`.

Mỗi buổi có phần Reading bám theo đúng chủ điểm và Part trong lộ trình. Listening là tracker cho tài liệu tự chọn nhưng vẫn bám đúng Part và số câu của từng buổi trong Excel: chỉ hiện Part được giao, hiển thị rõ Target cần làm, buổi mock Listening đầy đủ mới hiện Parts 1–4, còn buổi ôn điểm yếu chung sẽ yêu cầu chọn đúng một Part. Các mục ghi theo số bộ/đoạn Part 3–4 được hiển thị kèm số câu tương ứng (3 câu/bộ). Có thể nhập nguồn đề, kết quả, nguyên nhân sai và ghi chú. Câu Reading làm sai được tự động đưa vào Sổ lỗi sai; lỗi từ tài liệu ngoài có thể ghi nhanh ngay trong buổi học.

Tab **24-week plan / Lộ trình 24 tuần** tự cuộn tới buổi đầu tiên chưa hoàn thành và đánh dấu đó là **Today / Hôm nay**. Giao diện dùng bảng màu **Fresh Sky Contrast**: nền sáng, chữ navy, xanh đậm cho hành động chính và mint làm điểm nhấn để tươi nhưng không chói.

Reading dùng ngân hàng câu hỏi v2 do ứng dụng tạo riêng theo phong cách TOEIC nâng cao (không phải câu hỏi ETS chính thức): Part 5 có ngữ cảnh công việc và bẫy ngữ pháp/từ loại; Part 6 kiểm tra cả ngữ pháp lẫn mạch văn; Part 7 có paraphrase, suy luận, tính toán và tài liệu kép. Mỗi buổi không lặp lại cùng một câu Part 5 hay cùng một passage. Riêng Tuần 3 · Buổi 12 có 15 câu verb system hoàn toàn khác nhau. Khi nội dung Reading được nâng phiên bản, đáp án của lần làm cũ không bị ghép nhầm vào bộ câu mới; nhật ký, tiến độ và sổ lỗi vẫn được giữ nguyên.

Trong **Today’s scope / Phạm vi hôm nay**, bấm vào ô số bên trái từng mục để đánh dấu hoàn thành hoặc mở lại. Nút **Mark all done / Đánh dấu tất cả** hoàn thành nhanh toàn bộ 5 mục; trạng thái được lưu riêng cho từng buổi. Khi Focus Timer đếm về 0, app phát một chuỗi âm báo ngắn và vẫn tự ghi thời gian đã tập trung.

Trong Vocabulary, collocation luôn hiển thị trên flashcard. Khi thêm từ, chỉ cần nhập **Word / phrase** rồi bấm **Auto-fill** (hoặc bấm **Add flashcard** ngay): app lấy IPA thật từ mục Pronunciation của Wiktionary, dùng Datamuse cho nghĩa/từ loại, và điền ví dụ/collocation từ dữ liệu TOEIC có sẵn khi có. App không hiển thị ARPAbet dưới nhãn IPA. Nếu không lấy được IPA thật, trường IPA được để trống hoặc dùng dữ liệu offline đã kiểm tra.

## Deploy lên Vercel

1. Upload thư mục này lên GitHub.
2. Trong Vercel, chọn **Add New → Project** và import repository.
3. Chọn **Framework Preset: Other**.
4. Đặt **Output Directory** là `dist` và deploy.

Dữ liệu được lưu trong IndexedDB của trình duyệt. Dùng **Settings → Export backup** hoặc **Cài đặt → Xuất backup** để chuyển dữ liệu sang máy khác hoặc tránh mất dữ liệu khi xóa browser data.
