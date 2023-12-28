const loginBtn = document.getElementById("loginBtn");
const loginEmailInput = document.getElementById("loginEmailInput");
const loginPasswordInput = document.getElementById("loginPasswordInput");
const allInputRequired = document.querySelector(".allInputRequired");
const signName = document.getElementById("signName");
const singEmail = document.getElementById("singEmail");
const signPassword = document.getElementById("signPassword");
const signBtn = document.getElementById("signBtn");
const alert = document.querySelector(".alert");
const welcomeMsg = document.getElementById("welcomeMsg");
const done = document.querySelector(".done");
const notFound = document.querySelector(".notFound");
let users = [];
let curEmail;
localStorage.getItem("users") != null &&
  (users = JSON.parse(localStorage.getItem("users")));

// localStorage.clear();
//loginPage
function login() {
  if (loginEmailInput.value != "" || loginPasswordInput.value != "") {
    curEmail = loginEmailInput.value;
    curPassword = loginPasswordInput.value;
    localStorage.setItem("curEmail", JSON.stringify(curEmail));
    notFound.classList.remove("d-none");
    allInputRequired.classList.add("d-none");
    users.some((user) => {
      if (user.email == curEmail && user.password == curPassword) {
        window.location.href = "welcome.html";
      }
    });
  } else {
    allInputRequired.classList.remove("d-none");
    notFound.classList.add("d-none");
  }
}
//sing-up-Page
function signUp(e) {
  e.preventDefault();
  if (
    signName.value != "" &&
    singEmail.value != "" &&
    signPassword.value != ""
  ) {
    let user = {
      name: signName.value,
      email: singEmail.value,
      password: signPassword.value,
    };
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    done.classList.remove("d-none");
    alert.classList.add("d-none");
  } else {
    alert.classList.remove("d-none");
  }
}
//welcomePage
localStorage.getItem("curEmail") != null &&
  (welcomeMsg.innerHTML = `welcome : ${JSON.parse(
    localStorage.getItem("curEmail")
  )}`);
function logout() {
  window.location.href = "index.html";
}
