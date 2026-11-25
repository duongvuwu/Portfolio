# Scope portfolio v1

## Mục tiêu

Dựng portfolio một trang cho **Duong Vu** (`duongvuwu`). Người xem có thể đọc phần giới thiệu, tìm dự án, xem vai trò của chủ repo, mở mã nguồn và đến kênh liên hệ. Tiếng Anh là mặc định cho giao diện. Dùng tên do chủ repo cung cấp và thông tin có nguồn trong [hồ sơ dự án](PORTFOLIO-PROFILE.md).

- [Developer Portfolios](https://github.com/emmabostian/developer-portfolios) là danh mục tham khảo.
- [Portfolio Abdul Malik](https://abdulmal1ksy3d.vercel.app/) hiện chuyển đến [mal1k.xyz](https://mal1k.xyz/). Dùng nhịp bố cục một trang, hero chữ lớn, điều hướng theo section, About dạng terminal, nhóm kỹ năng và lưới dự án để định hình trang.
- [Repo triển khai](https://github.com/duongvuwu/Portfolio) hiện dùng React 17, Create React App, React Router và React-Bootstrap. Nội dung app hiện tại phần lớn thuộc template Soumyajit. Dùng template làm mốc kỹ thuật và xác minh riêng nội dung của chủ repo.

## Bố cục và giao diện

| Phần | Nội dung và hành vi |
| --- | --- |
| Header | Wordmark `Duong Vu` về đầu trang. Menu dẫn đến `#about`, `#skills`, `#projects`, `#contact`. Khi thiếu chỗ, dùng menu gọn với nút có nhãn và trạng thái mở/đóng. |
| Hero | Một H1 đậm và rộng, hai CTA tới Projects và Contact, nền lưới có chuyển động nhẹ, hiệu ứng gõ chữ cho định hướng Full Stack. |
| About | Giới thiệu ngắn và một khối terminal trình bày handle cùng các mảng AI quan tâm. Hai cột khi đủ rộng, một cột trên mobile. |
| Skills | Nhóm Full Stack Development và Business Analysis ở mức nền tảng fresher. Full Stack gồm frontend, backend và API, cơ sở dữ liệu và triển khai. Liệt kê riêng công nghệ đã dùng trong dự án. |
| Projects | Ba dự án nổi bật và danh sách More projects gồm Software License Tracker, OpenGL Space Station và các mục còn lại. Mỗi dự án có mô tả, công nghệ, mã nguồn và vai trò khi có dữ kiện. Hiện Demo khi có đích hoạt động và được phép chia sẻ. |
| Contact và footer | Hiển thị GitHub và LinkedIn do chủ repo cung cấp. Chỉ thêm email và link CV khi được cung cấp hoặc xác nhận. Footer ngắn và có liên kết về đầu trang. |

Dùng tông đen trắng, đường viền xám và typography đậm. Hero canh giữa, dùng Unbounded cho tên hiển thị và monospace cho dòng định hướng. Giữ hình học và bố cục riêng. Các khối nội dung có thể xuất hiện nhẹ khi cuộn. Toàn bộ nội dung chính phải đọc được khi hiệu ứng bị tắt.

## Dữ liệu khởi đầu

Dùng [hồ sơ dự án](PORTFOLIO-PROFILE.md) làm nguồn cho phần giới thiệu, kỹ năng, vai trò, liên kết liên hệ và toàn bộ danh mục. Tập trung dữ liệu trang vào một module có thể chỉnh sửa. Mỗi dự án cần tên, mô tả, danh sách công nghệ và URL nguồn. Hình thức làm, vai trò cá nhân, hình ảnh, demo và số liệu có thể để trống khi thiếu dữ kiện.

## Phạm vi kỹ thuật và bàn giao

- Dùng React trong repo hiện tại và ưu tiên bản build tĩnh. Chạy `npm ci` và lệnh build trên môi trường Node phù hợp với lockfile. Nếu nền hiện tại lỗi, ghi lại lỗi và sửa ở mức nhỏ nhất để có bản build có thể lặp lại.
- Trang một tuyến với anchor nội bộ. Kiểm tra bản build dưới đường dẫn `/Portfolio/` vì GitHub Pages của repo đang lấy từ `gh-pages`. Kiểm tra đường dẫn asset, tải lại URL có hash và các URL cũ nếu có bằng chứng chúng đang được dùng.
- Cập nhật title, description, favicon và metadata phù hợp. Rà soát text, link dự án, hồ sơ, social và file CV của template trong mọi màn hình hoặc asset được phục vụ.
- Ngoài scope v1 gồm backend, đăng nhập, CMS, blog, form gửi email, đa ngôn ngữ, WebGL và tích hợp GitHub API lúc chạy. Phát hành website live là bước riêng.

## Tiêu chí nghiệm thu

- Cài dependency từ lockfile và chạy `npm run build` thành công. Chạy suite test phù hợp với app. Sửa test mẫu còn tìm `Learn React` nếu nó không kiểm tra ứng dụng mới.
- Smoke test bản build dưới `/Portfolio/`. Hero và đủ bốn section xuất hiện. Menu, hai CTA, nút về đầu trang, hash trực tiếp và mọi link dự án hoặc liên hệ hoạt động. Console và tài nguyên chính tải bình thường.
- Kiểm tra khoảng 375, 768 và 1440 px. Chữ và menu đọc được, không tràn ngang, điều hướng không che tiêu đề đích. Dùng bàn phím kiểm tra thứ tự Tab, focus, menu và CTA. Kiểm tra tương phản chữ, reduced motion, và khả năng đọc nội dung khi hiệu ứng bị tắt.
- Kiểm tra nội dung còn sót từ template, đặc biệt là metadata, social links và CV. Đối chiếu danh mục, vai trò, hình thức dự án và thông tin hồ sơ với nguồn công khai.
- Push nhánh triển khai lên repo đích, so SHA local với remote và bàn giao link nhánh, kết quả kiểm tra cùng dữ liệu cá nhân còn thiếu.
