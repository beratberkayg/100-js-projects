const email = document.getElementById("email").value;
const password = document.getElementById("password");
const user = document.getElementById("user");
const lock = document.getElementById("lock");

function validition() {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.match(pattern)) {
    user.style.color = "green";
  } else {
    user.style.color = "red";
  }
}
