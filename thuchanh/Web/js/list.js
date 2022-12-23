const URL = "https://63a06beb24d74f9fe837c53e.mockapi.io/api/v1/users";

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

// (users : Array<object>) => void
function _renderUI(users) {
  let elmBody = document.getElementById("tbody__user");

  function formatRow(user) {
    return `
    <tr onclick="handleClickRow(${user.id})">
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.city}</td>
      <td>${user.avatar}</td>
      <th>
        <button class="btn btn-success onclick="gotoDetail(${user.id})">Detail</button>
        <button class="btn btn-danger onclick="gotoDelete(${user.id})">Delete</button>
      </th>
    </tr>
    `;
  }

  let bodyTable = "";

  for (let index = 0; index < users.length; index++) {
    bodyTable += formatRow(users[index]);
  }

  elmBody.innerHTML = bodyTable;
}

function handleClickRow(userId) {
  console.log("handleClickRow", userId);
  window.location.href = `./detail.html?id=${userId}`;
}
// function gotoDetail(userId) {
//   console.log(userId);
// }
// function gotoDelete(userId) {
//   console.log(userId);
// }


function deleteUser(userId) {
  console.log('deleteUser');
  let user_Delete = URL + '/' + userId ;
  fetch(user_Delete, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      // dam bao users no co data
      getListUser()
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
