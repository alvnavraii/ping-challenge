const form = document.getElementById("form");
const email = document.getElementById("email");
const button = document.getElementById("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  evaluateEmail();
});
function evaluateEmail() {
  const emailValue = email.value.trim();
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (emailValue === "") {
    setError(email, "Email cannot be empty");
  } else if (!emailPattern.test(emailValue)) {
    setError(email, "Please provide a valid email address");
  } else {
    setSuccess(email);
  }
}

function setError(input, message) {
  const screenSize = window.innerWidth;
  let small = null;
  const formControl = input.parentElement;
  formControl.className = "form-control error";

  if (screenSize > 768) {
    small = document.getElementsByClassName("error-desktop")[0];
  } else {
    small = formControl.querySelector("small");
  }
  if (small) {
    small.style.display = "block";
    small.innerText = message;
    small.style.color = "red";
  }
  input.style.borderColor = "red";
}

function setSuccess(input) {
  const screenSize = window.innerWidth;
  let small = null;
  const formControl = input.parentElement;
  formControl.className = "form-control success";

  if (screenSize > 768) {
    small = document.getElementsByClassName("error-desktop")[0];
  } else {
    small = formControl.querySelector("small");
  }

  if (small) {
    small.innerText = "";
    small.style.display = "none";
    input.style.borderColor = "green";
  }
}
