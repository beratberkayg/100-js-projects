const body = document.querySelector("body");
const toggle = document.getElementById("toggleDark");

function darkMode() {
  body.classList.toggle("dark");
  if (body.classList.contains("dark") == true) {
    toggle.classList.replace("fa-moon", "fa-sun");
  } else {
    toggle.classList.replace("fa-sun", "fa-moon");
  }
}
