let urlDetail = new URLSearchParams(window.location.search);
let id = urlDetail.get("id");
console.log(id);

const URL = "https://63a06beb24d74f9fe837c53e.mockapi.io/users/" + id;

fetch(URL, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    _renderInfoUser(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function _renderInfoUser(user) {
  let elm = document.getElementById("info__user");
  elm.innerHTML = `
                <h1 class="form-heading">Detail page</h1>
                <div class="form-group">
                    <input type="text" class="form-input" placeholder="${"id: "+ user.id}">
                </div>
                <div class="form-group">
                    <input type="text" class="form-input" placeholder="${"Tên sách: "+ user.tensach}">
                </div>
                <div class="form-group">
                    <input type="text" class="form-input" placeholder="${"Thể loại: "+ user.theloai}" >
                </div>
                <div class="form-group">
                    <input type="text" class="form-input" placeholder="${"Nhà xuất bản: "+ user.nxb}" >
                </div>
                <div class="form-group">
                    <input type="text" class="form-input" placeholder="${"Tác giả: "+ user.tacgia}">
                </div>
                <div class="form-group">
                    <input type="text" class="form-input" placeholder="${"Năm phát hành: "+ user.namphathanh}">
                </div>   
    `;
}
