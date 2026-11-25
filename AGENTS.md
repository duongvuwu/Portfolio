# Hướng dẫn cho agent

Repo đích là `duongvuwu/Portfolio`. Đọc [scope v1](docs/PORTFOLIO-SCOPE.md) và [hồ sơ dự án](docs/PORTFOLIO-PROFILE.md) trước khi sửa app. [Prompt triển khai](docs/ORCHESTRATOR-PROMPT.md) là đầu vào cho orchestrator ở giai đoạn tiếp theo.

## Vai trò

| Vai trò | Trách nhiệm | Bàn giao |
| --- | --- | --- |
| Orchestrator | Kiểm tra repo, phân việc, tích hợp thay đổi, xử lý lỗi và push nhánh triển khai | Commit, link GitHub và kết quả kiểm tra |
| Content | Đọc repo công khai, xác minh từng mô tả, soạn nội dung tiếng Anh và xác định dữ liệu còn thiếu | Nội dung kèm nguồn và các trường có thể ẩn |
| Design | Chuyển bố cục tham khảo thành hướng thiết kế riêng cho mobile và desktop | Bố cục section, trạng thái tương tác và quy tắc responsive |
| Frontend | Tích hợp dữ liệu, dựng giao diện, cập nhật metadata, dọn nội dung template đang được app sử dụng | App chạy local và bản build tĩnh |
| QA | Đọc diff và kiểm tra bản tích hợp trên trình duyệt | Lỗi có cách tái hiện, kết quả từng kiểm tra và các giới hạn xác minh |

Content và Design có thể làm song song. Frontend tiếp nhận cả hai đầu ra. QA kiểm tra bản đã tích hợp và chạy lại phần bị ảnh hưởng sau khi sửa. Orchestrator phân quyền ghi theo file hoặc worktree. Khi chỉ có một agent, thực hiện tuần tự theo các vai trò trên.

## Quy tắc

- Kiểm tra `git status`, `git remote -v` và nhánh hiện tại trước khi làm. Giữ các thay đổi của chủ repo và commit đúng phạm vi của nhiệm vụ.
- Dùng tài khoản và dự án có nguồn công khai đã kiểm tra. Chỉ ghi đóng góp cá nhân, chức danh, thành tích, email, LinkedIn hoặc CV khi có bằng chứng phù hợp hoặc chủ repo cung cấp. Ẩn trường tuỳ chọn còn thiếu.
- Dùng tài liệu phân công và lịch sử commit để ghi vai trò. Chỉ dùng nhãn `Solo project` khi chủ repo xác nhận. Với dự án có một người đứng tên commit công khai, có thể dùng nhãn `Personal project` nếu phù hợp với bằng chứng.
- Dùng bố cục tham khảo để định hướng. Tự viết nội dung và tạo thiết kế riêng. Ghi credit trong README nếu tái sử dụng mã hoặc tài sản của template hiện tại.
- Ưu tiên stack hiện có, HTML ngữ nghĩa và CSS. Chỉ thay công cụ build khi trở ngại được xác minh và cần xử lý để hoàn thành scope.
- Render nội dung chính ngay khi trang tải. Các liên kết và thao tác điều hướng phải dùng được bằng bàn phím và cảm ứng. Tôn trọng `prefers-reduced-motion`.
- Chỉ đưa vào commit nội dung phù hợp với repo công khai. Xem staged diff để loại bỏ bí mật, dữ liệu riêng tư và file sinh ra ngoài phạm vi.
- Push nhánh thực hiện tới `duongvuwu/Portfolio` sau QA. Merge vào `master`, force-push và phát hành live qua `gh-pages` cần chỉ đạo riêng của chủ repo.
