const lock = document.getElementById("lock");
const password = document.getElementById("password");
const a = document.getElementById("a");

a.addEventListener("click", flock);

function flock() {
  if (password.type == "password") {
    password.type = "text";
    lock.classList.replace("fa-lock", "fa-lock-open");
  } else {
    password.type = "password";
    lock.classList.replace("fa-lock-open", "fa-lock");
  }
}
