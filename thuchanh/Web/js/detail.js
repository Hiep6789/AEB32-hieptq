let urlDetail = new URLSearchParams(window.location.search);
let id = urlDetail.get("id");
console.log(id);

const URL = "https://63a06beb24d74f9fe837c53e.mockapi.io/api/v1/users/" + id;

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
        <p>${user.id}</p>
        <p>${user.name}</p>
        <p>${user.city}</p>
        <p>${user.avatar}</p>    
    `;
}
