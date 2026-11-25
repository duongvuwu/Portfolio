# Prompt triển khai portfolio

Bạn là Orchestrator triển khai portfolio v1 cho Duong Wuu (`duongvuwu`) trong repo `https://github.com/duongvuwu/Portfolio`. Checkout nhánh `portfolio/base` để đọc `AGENTS.md`, `docs/PORTFOLIO-SCOPE.md` và `docs/PORTFOLIO-PROFILE.md`. Kiểm tra trạng thái repo và tạo nhánh `portfolio/v1` từ base nếu nhánh triển khai chưa có. Nếu nhánh đã có, kiểm tra lịch sử và tích hợp bản hồ sơ mới mà vẫn giữ các thay đổi đang dở.

Triển khai website chạy được từ đầu đến cuối. Dùng repo hiện tại làm điểm xuất phát. Tham khảo danh mục `https://github.com/emmabostian/developer-portfolios` và bố cục `https://abdulmal1ksy3d.vercel.app/`. Tạo giao diện riêng theo scope với Hero, About, Skills, Projects và Contact. Ưu tiên bản build tĩnh tương thích với đường dẫn `/Portfolio/`.

1. Phân việc Content và Design song song nếu runtime hỗ trợ. Content dùng hồ sơ dự án để soạn nội dung tiếng Anh cho năm dự án nổi bật và các mục còn lại, ghi cụ thể vai trò và hình thức làm khi có nguồn. Dùng Duong Wuu làm tên hiển thị. Chỉ ghi nhãn solo khi chủ repo xác nhận. Ẩn liên hệ, CV, số liệu và vai trò chưa xác minh. Design chốt bố cục mobile và desktop, menu, CTA và trạng thái focus.
2. Giao Frontend tích hợp các đầu ra, tập trung dữ liệu vào một nơi, dựng giao diện và metadata, thay nội dung cá nhân của template bằng dữ liệu chủ repo. Duy trì khả năng dùng bàn phím, cảm ứng và reduced motion.
3. Giao QA kiểm tra bản tích hợp theo tiêu chí trong scope. Chạy install, build, test và kiểm tra trình duyệt desktop, tablet, mobile cùng hash và asset dưới `/Portfolio/`. Tái hiện lỗi, sửa và kiểm tra lại. Khi một công cụ thiếu, thực hiện kiểm tra tương đương nếu có và báo phần còn hạn chế.
4. Orchestrator review diff và staged files, commit thay đổi, xác minh `origin` trỏ đúng `duongvuwu/Portfolio`, push nhánh `portfolio/v1` và đối chiếu SHA trên remote. Dừng ở nhánh triển khai. Merge vào `master` hoặc phát hành qua `gh-pages` cần yêu cầu riêng.

Sử dụng agent và worktree theo khả năng của runtime. Giữ một người chịu trách nhiệm cho mỗi nhóm file đang chỉnh sửa. Nếu runtime chỉ có một agent, hoàn thành các vai trò tuần tự. Tự xử lý lỗi có thể khắc phục và tiếp tục qua các phần có đủ dữ kiện.

Khi bàn giao, đưa link nhánh GitHub, commit SHA, tóm tắt tính năng đã làm, kết quả kiểm tra thực tế và những chi tiết hồ sơ còn cần chủ repo cung cấp.
