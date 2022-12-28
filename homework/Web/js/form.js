const URL_USER = "https://63a06beb24d74f9fe837c53e.mockapi.io/users";

let urlDetail = new URLSearchParams(window.location.search);
let id = urlDetail.get("id");

if (id) {
  getUser();
}

function getUser() {
  fetch(`${URL_USER}/${id}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let elmTensach = document.getElementById("inputTensach");
      let elmTheloai = document.getElementById("inputTheloai");
      let elmNxb = document.getElementById("inputNxb");
      let elmTacgia = document.getElementById("inputTacgia");
      let elmNamphathanh = document.getElementById("inputNamphathanh");
      elmTensach.value = data.tensach;
      elmTheloai.value = data.theloai;
      elmNxb.value = data.nxb;
      elmTacgia.value = data.tacgia;
      elmNamphathanh.value = data.namphathanh;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function handleSubmit() {
  let elmTensach = document.getElementById("inputTensach");
  let elmTheloai = document.getElementById("inputTheloai");
  let elmNxb = document.getElementById("inputNxb");
  let elmTacgia = document.getElementById("inputTacgia");
  let elmNamphathanh = document.getElementById("inputNamphathanh");

  let user = {
    tensach: elmTensach.value,
    theloai: elmTheloai.value,
    nxb: elmNxb.value,
    tacgia: elmTacgia.value,
    namphathanh: elmNamphathanh.value,
  };
  
  if (id) {
    updateUser(user);
  } else {
    postUser(user);
  }

}

function postUser(user) {
  console.log("postUser");
  fetch(URL_USER, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function updateUser(user) {
  fetch(`${URL_USER}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
