# Scope portfolio v1

## Mục tiêu

Dựng portfolio một trang cho `duongvuwu`. Người xem có thể đọc phần giới thiệu, tìm dự án nổi bật, mở mã nguồn và đến kênh liên hệ. Tiếng Anh là mặc định cho giao diện. Dùng `duongvuwu` làm tên hiển thị nếu chủ repo chưa cung cấp tên đầy đủ và cách viết mong muốn.

- [Developer Portfolios](https://github.com/emmabostian/developer-portfolios) là danh mục tham khảo.
- [Portfolio Abdul Malik](https://abdulmal1ksy3d.vercel.app/) hiện chuyển đến [mal1k.xyz](https://mal1k.xyz/). Dùng nhịp bố cục một trang, hero chữ lớn, điều hướng theo section, About dạng terminal, nhóm kỹ năng và lưới dự án để định hình trang.
- [Repo triển khai](https://github.com/duongvuwu/Portfolio) hiện dùng React 17, Create React App, React Router và React-Bootstrap. Nội dung app hiện tại phần lớn thuộc template Soumyajit. Dùng template làm mốc kỹ thuật và xác minh riêng nội dung của chủ repo.

## Bố cục và giao diện

| Phần | Nội dung và hành vi |
| --- | --- |
| Header | Wordmark `duongvuwu` về đầu trang. Menu dẫn đến `#about`, `#skills`, `#projects`, `#contact`. Khi thiếu chỗ, dùng menu gọn với nút có nhãn và trạng thái mở/đóng. |
| Hero | Một H1 lớn, canh trái trên desktop, dòng mô tả dựa trên nhóm dự án đã xác minh, hai CTA tới Projects và Contact. Nền lưới CSS mờ có thể dùng làm chi tiết trang trí. |
| About | Giới thiệu ngắn và một khối terminal tĩnh trình bày handle cùng các chủ đề thể hiện qua dự án. Hai cột khi đủ rộng, một cột trên mobile. |
| Skills | Nhóm công nghệ có bằng chứng trong dự án. Ví dụ Python và LangGraph, C++ và OpenGL, FFmpeg. |
| Projects | Ba dự án có nguồn bên dưới. Mỗi card có tên, mô tả ngắn, công nghệ và liên kết mã nguồn. Chỉ hiện Demo khi có đích hoạt động và được phép chia sẻ. Hiện CTA cả trên thiết bị cảm ứng. |
| Contact và footer | Mặc định hiển thị GitHub của chủ repo. Chỉ thêm email, LinkedIn và link CV khi được cung cấp hoặc xác nhận. Footer ngắn và có liên kết về đầu trang. |

Dùng nền than xanh đậm, chữ trắng ngà, một màu nhấn xanh ngọc và đường viền nhẹ. Heading sans đậm, body dễ đọc, monospace dùng cho terminal và nhãn kỹ thuật. Giữ hero canh trái và lấy dự án thật làm trọng tâm hình ảnh để tạo nhận diện riêng. Card có thể dùng typography và bố cục làm điểm nhấn khi thiếu ảnh dự án đã xác minh. Toàn bộ nội dung chính phải đọc được khi hiệu ứng bị tắt.

## Dữ liệu khởi đầu

| Dự án | Mô tả dựa trên README công khai | Nguồn |
| --- | --- | --- |
| ITeach | Backend MVP dùng LangGraph để tổ chức vòng lặp học bằng cách giải thích lại. Bản hiện tại đánh giá câu trả lời theo rubric bằng heuristic. | [ITeach](https://github.com/duongvuwu/ITeach) |
| OpenGL Space Station | Mô phỏng trạm không gian tương tác với hai chế độ camera, di chuyển trong không gian 3D và chiếu sáng Phong. | [OpenGL-SpaceStation](https://github.com/duongvuwu/OpenGL-SpaceStation) |
| Word-by-Word Video Supercut | Demo Phase 1 dùng Python và FFmpeg để ghép các đoạn từ theo manifest và timestamp. | [Word-by-Word Video Supercut](https://github.com/duongvuwu/word-by-word-video-supercut-demo) |

GitHub đã xác minh là [duongvuwu](https://github.com/duongvuwu). Tập trung dữ liệu trang vào một module có thể chỉnh sửa. Mỗi dự án cần tên, mô tả, danh sách công nghệ và URL nguồn. Hình ảnh, demo, vai trò cá nhân và số liệu là tuỳ chọn. Mô tả dự án theo những gì repo thể hiện khi chưa xác minh đóng góp của từng thành viên.

## Phạm vi kỹ thuật và bàn giao

- Dùng React trong repo hiện tại và ưu tiên bản build tĩnh. Chạy `npm ci` và lệnh build trên môi trường Node phù hợp với lockfile. Nếu nền hiện tại lỗi, ghi lại lỗi và sửa ở mức nhỏ nhất để có bản build có thể lặp lại.
- Trang một tuyến với anchor nội bộ. Kiểm tra bản build dưới đường dẫn `/Portfolio/` vì GitHub Pages của repo đang lấy từ `gh-pages`. Kiểm tra đường dẫn asset, tải lại URL có hash và các URL cũ nếu có bằng chứng chúng đang được dùng.
- Cập nhật title, description, favicon và metadata phù hợp. Rà soát text, link dự án, hồ sơ, social và file CV của template trong mọi màn hình hoặc asset được phục vụ.
- Ngoài scope v1 gồm backend, đăng nhập, CMS, blog, form gửi email, đa ngôn ngữ, WebGL và tích hợp GitHub API lúc chạy. Phát hành website live là bước riêng.

## Tiêu chí nghiệm thu

- Cài dependency từ lockfile và chạy `npm run build` thành công. Chạy suite test phù hợp với app. Sửa test mẫu còn tìm `Learn React` nếu nó không kiểm tra ứng dụng mới.
- Smoke test bản build dưới `/Portfolio/`. Hero và đủ bốn section xuất hiện. Menu, hai CTA, nút về đầu trang, hash trực tiếp và mọi link dự án hoặc liên hệ hoạt động. Console và tài nguyên chính tải bình thường.
- Kiểm tra khoảng 375, 768 và 1440 px. Chữ và menu đọc được, không tràn ngang, điều hướng không che tiêu đề đích. Dùng bàn phím kiểm tra thứ tự Tab, focus, menu và CTA. Kiểm tra tương phản chữ, reduced motion, và khả năng đọc nội dung khi hiệu ứng bị tắt.
- Kiểm tra nội dung còn sót từ template, đặc biệt là metadata, social links và CV. Xác nhận dữ liệu công khai khớp với nguồn.
- Push nhánh triển khai lên repo đích, so SHA local với remote và bàn giao link nhánh, kết quả kiểm tra cùng dữ liệu cá nhân còn thiếu.
