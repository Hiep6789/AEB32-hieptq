# Frame (The <frame> tag was used in HTML 4 to define one particular window (frame) within a <frameset>.)
Khung(hay Frame) trong HTML được sử dụng để 
phân chia cửa sổ trình duyệt của bạn thành các khu vực khác nhau 
mà mỗi khu vực tải một tài liệu HTML riêng. 
Một tập hợp các Frame trong cửa sổ trình duyệt được biết đến như là một Frameset. 
Cửa sổ được chia vào các Frame theo cách tương tự như các bảng: bên trong các hàng và cột.

# Hạn chế
Thường thì một vài thiết bị nhỏ không giải quyết được các Frame này vì màn hình của nó không đủ lớn để chia thành các Frame.
Đôi khi trang web của bạn có thể hiển thị khác nhau trên các máy tính khác nhau do độ phân giải của màn hình.
Nút quay trở lại trang trước có thể không làm việc như người dùng mong muốn.
Vẫn còn có một vài trình duyệt không hỗ trợ công nghệ Frame.

# Iframe
iFrame là thành phần hay thẻ tag của một HTML element 
giúp nhúng HTML, hình ảnh, video hay trang web khác vào website của mình. 
iFrame là viết tắt của cụm từ Inline Frame và tạm dịch là khung nội tuyến. 

# Lợi ích
Nó làm cho trang Web của bạn được minh họa sinh động, sáng tạo hơn. 
Đây là yếu tố quan trọng giúp bạn giữ chân người truy cập ở lại trang Web lâu hơn, tăng tỷ lệ quay lại trang. 
Những điều này cũng góp phần giúp bạn tăng thứ hạng trang Web trên trang kết quả của các công cụ tìm kiếm.

# Hạn chế
Chỉ nên sử dụng iFrame khi thật sự cần thiết. Đừng dùng nó quá thường xuyên:
- Nếu bạn không thể đảm bảo thông tin của nội dung trích từ trang Web khác là chính xác, hợp pháp. 
- Nguy hiểm hơn nữa, các đoạn mã có thể chứa mã độc. 
Chúng không chỉ ảnh hưởng xấu đến trang của bạn, mà còn có thể gây nguy hiểm đến người dùng. 
Thông tin quan trọng có thể bị lấy cắp, Website có thể bị chuyển hướng không kiểm soát,… 
Tất cả đều có thể ảnh hưởng đến uy tín của bạn.

Khi bạn chèn nội dung của trang khác lên Website của mình, 
Google Search Bots sẽ không dẫn đến Website của bạn mà liên kết đến Link được nhúng. 
Điều này ảnh hưởng lớn đến việc SEO của bạn, dẫn khách hàng đi đến trang khác.

# Thuộc tính
src: Thuộc tính khai báo đường dẫn tới 1 trang web hoặc 1 file tài liệu nào đó.
width: Thuộc tính dùng để khai báo chiều rộng của iFrame (đơn vị là px hoặc %)
height: Thuộc tính dùng để khai báo chiều cao của iFrame (đơn vị là px hoặc %)
name: Thuộc tính này dùng để đặt tên cho frame. Nó hay được dùng khi muốn hiển thị 1 liên kết nào đó trong 1 frame có thuộc tính name
frameborder: Thuộc tính dùng để thiết lập đường viền bao quanh frame. Thuộc tính này sẽ có 2 giá trị: 0 – ẩn đường viền, 1 – hiện đường viền. Nếu không khai báo thuộc tính này thì mặc định là đường viền được hiển thị

# IFrame Security Concerns
Mô hình Cross-Site Scripting – XSS
iframe Injection
Clickjacking
Iframe Phishing

# X-Frame-Options
# Content Security Policy (CSP)