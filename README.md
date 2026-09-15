# TOEIC 700+ Study Tracker

Ứng dụng web tĩnh để theo dõi lộ trình TOEIC 24 tuần. Không cần backend hoặc tài khoản. Giao diện và toàn bộ lộ trình có thể chuyển giữa English / Tiếng Việt.

## Chạy trên máy local

- Windows: double-click `start-local.bat`, đợi khoảng 2 giây; app sẽ mở tại `http://127.0.0.1:8080`.
- macOS/Linux: chạy `./start-local.sh`.
- Giữ cửa sổ server đang chạy trong lúc dùng app. Nếu trình duyệt không tự mở, truy cập `http://127.0.0.1:8080`.

Mỗi buổi có phần Reading bám theo đúng chủ điểm và Part trong lộ trình. Listening là tracker cho tài liệu tự chọn nhưng vẫn bám đúng Part và số câu của từng buổi trong Excel: chỉ hiện Part được giao, hiển thị rõ Target cần làm, buổi mock Listening đầy đủ mới hiện Parts 1–4, còn buổi ôn điểm yếu chung sẽ yêu cầu chọn đúng một Part. Các mục ghi theo số bộ/đoạn Part 3–4 được hiển thị kèm số câu tương ứng (3 câu/bộ). Có thể nhập nguồn đề, kết quả, nguyên nhân sai và ghi chú. Câu Reading làm sai được tự động đưa vào Sổ lỗi sai; lỗi từ tài liệu ngoài có thể ghi nhanh ngay trong buổi học.

Tab **24-week plan / Lộ trình 24 tuần** tự cuộn tới buổi đầu tiên chưa hoàn thành và đánh dấu đó là **Today / Hôm nay**. Giao diện dùng bảng màu **Fresh Sky Contrast**: nền sáng, chữ navy, xanh đậm cho hành động chính và mint làm điểm nhấn để tươi nhưng không chói.

Reading v4 được rà theo lộ trình của toàn bộ 96 buổi, không ưu tiên riêng một buổi. Buổi học một chủ điểm chỉ hỏi chủ điểm đó ở Part 5/6; buổi ôn tập chỉ dùng ngữ pháp đã giới thiệu; checkpoint và mock mới tổng hợp rộng. Phần giải thích sau khi chấm hiển thị chủ điểm câu hỏi. Part 7 đi theo kỹ năng đọc được giao, bao gồm bài đơn, paraphrase, đọc tài liệu kép/ba và chèn câu/từ tham chiếu.

Ngân hàng có 492 câu Part 5 tự biên soạn, 42 đoạn Part 6 hoàn chỉnh và 36 bộ đọc Part 7 (không phải đề ETS chính thức). Mỗi đoạn Part 6 có đủ 4 chỗ trống và 4 câu hỏi. Câu hỏi có ngữ cảnh và cấu trúc khác nhau, không tạo câu mới bằng cách chỉ đổi tên người. Không lặp câu Part 5 hoặc đoạn văn trong cùng một buổi; câu cũ có thể xuất hiện lại ở các buổi ôn tổng hợp. Tuần 1–4 ưu tiên câu nền tảng; độ khó tăng dần qua các giai đoạn, dựa trên kiến thức đã học. Khi nâng phiên bản Reading, đáp án của lần làm cũ không bị ghép vào bộ câu mới; nhật ký, tiến độ và sổ lỗi vẫn được giữ nguyên. Listening và các chức năng tracking không thay đổi.

Trong **Today’s scope / Phạm vi hôm nay**, bấm vào ô số bên trái từng mục để đánh dấu hoàn thành hoặc mở lại. Nút **Mark all done / Đánh dấu tất cả** hoàn thành nhanh toàn bộ 5 mục; trạng thái được lưu riêng cho từng buổi. Thời gian đã lưu của từng buổi được hiển thị trong **24-week plan** và ngay trong khung timer của buổi đó.

Focus Timer tự lặp **25 phút tập trung → 5 phút nghỉ → lượt tập trung tiếp theo**, cho đến khi bấm **Finish / Hoàn thành**. Có âm báo khi chuyển từ học sang nghỉ và từ nghỉ sang học. **Pause / Resume** dùng được ở cả hai pha; **Skip break / Bỏ qua lượt nghỉ** chuyển sớm sang lượt học tiếp theo. Tổng phút học hiển thị riêng và không cộng thời gian nghỉ. F5 giữ đúng pha, số lượt, thời gian còn lại và tổng thời gian học; timer đang chạy vẫn tiếp tục theo thời gian thực khi tab bị ẩn. Nếu rời máy, hãy Pause. Âm báo cần trình duyệt cho phép phát âm thanh và có thể không phát khi trang bị đóng hoặc hệ điều hành đình chỉ trình duyệt. Settings có **Focus minutes** và **Break minutes**; thời lượng mới áp dụng cho timer mới. Stopwatch vẫn hoạt động như trước.

Trong Vocabulary, collocation luôn hiển thị trên flashcard. Khi thêm từ, chỉ cần nhập **Word / phrase** rồi bấm **Auto-fill** (hoặc bấm **Add flashcard** ngay): app lấy IPA thật từ mục Pronunciation của Wiktionary, dùng Datamuse cho nghĩa/từ loại, và điền ví dụ/collocation từ dữ liệu TOEIC có sẵn khi có. App không hiển thị ARPAbet dưới nhãn IPA. Nếu không lấy được IPA thật, trường IPA được để trống hoặc dùng dữ liệu offline đã kiểm tra.

## Deploy lên Vercel

1. Upload thư mục này lên GitHub.
2. Trong Vercel, chọn **Add New → Project** và import repository.
3. Chọn **Framework Preset: Other**.
4. Đặt **Output Directory** là `dist` và deploy.

Dữ liệu được lưu trong IndexedDB của trình duyệt. Dùng **Settings → Export backup** hoặc **Cài đặt → Xuất backup** để chuyển dữ liệu sang máy khác hoặc tránh mất dữ liệu khi xóa browser data.
