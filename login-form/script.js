const email = document.getElementById("email");
const user = document.getElementById("user");

const lock = document.getElementById("lock");
const password = document.getElementById("password");
const a = document.getElementById("a");

email.addEventListener("keydown", validition);
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

function validition() {
  const pattern = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
  if (email.value.match(pattern)) {
    user.style.color = "green";
  } else {
    user.style.color = "red";
  }
}
