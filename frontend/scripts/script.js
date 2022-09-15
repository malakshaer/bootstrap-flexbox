const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const form = document.getElementById("form");
const submit = document.getElementById("submit");
const message = document.getElementById("textarea");
const inputContainer = document.getElementsByClassName("input-container");

submit.addEventListener("click", (e) => {
  e.preventDefault();

  checkInput();
});

function checkInput() {
  const nameValue = fullName.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const messageValue = message.value.trim();

  //name
  if (nameValue.length < 5) {
    setErrorFor(fullName, "full name must be more than five character");
  } else {
    setSuccessFor(fullName);
  }
  //email
  if (
    emailValue.include("@") &&
    emailValue.split("@")[0].length > 2 &&
    email.value.split("@")[1].length > 4
  ) {
    setSuccessFor(email);
  } else {
    setErrorFor(email, "Email is not valid");
  }

  //phone number
  if (
    phoneValue.length < 12 &&
    phoneValue.slice(0, 4) == "^+[0-9]*3" &&
    phoneValue.slice(4, 5) == "^[0-9]"
  ) {
    setSuccessFor(phone);
  } else {
    setErrorFor(phone, "Phone number is not valid");
  }

  //text message
  if (messageValue.length < 99) {
    setErrorFor(message, "message must be min 100 in length");
  } else {
    setSuccessFor(message);
  }
}

function setErrorFor(input, message) {
  const inputContainer = input.parentElement;
  const small = inputContainer.querySelector("#small");

  inputContainer.className = "input-container error";
  small.style.display = "block";
  small.innerHTML = message;
}

function setSuccessFor(input) {
  const inputContainer = input.parentElement;
  inputContainer.className = "input-container success";
}
