const URL = "https://63a06beb24d74f9fe837c53e.mockapi.io/api/v1/users";

getListUser();

// (users : Array<object>) => void
function _renderUI(users) {
  let elmBody = document.getElementById("tbody__user");

  function formatRow(user) {
    return `
    <tr>
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.city}</td>
      <td>${user.avatar}</td>
      <td>
        <button class="btn btn-success" onclick="goToDetail(${user.id})">Detail</button>
        <button class="btn btn-info" onclick="handleEdit(${user.id})">Edit</button>
        <button class="btn btn-danger" onclick="deleteUser(${user.id})">Delete</button>
      </td>
    </tr>
    `;
  }

  let bodyTable = "";

  for (let index = 0; index < users.length; index++) {
    bodyTable += formatRow(users[index]);
  }

  elmBody.innerHTML = bodyTable;
}

function getListUser() {
  fetch(URL, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      // dam bao users no co data
      _renderUI(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function goToDetail(userId) {
  console.log("goToDetail", userId);
  window.location.href = `./detail.html?id=${userId}`;
}

function deleteUser(userId) {
  console.log("deleteUser");
  let user_delete = URL + "/" + userId;
  fetch(user_delete, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      getListUser();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function handleEdit(userId) {
  console.log("handleEdit", userId);
  window.location.href = `./form.html?id=${userId}`;
}
