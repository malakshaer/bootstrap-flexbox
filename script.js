const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const form = document.getElementById("form");
const submit = document.getElementById("submit");
const message = document.getElementById("textarea");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput();
});

function checkInput() {
  const nameValue = fullName.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const messageValue = message.value.trim();

  if (nameValue === "" || nameValue == null) {
    setErrorFor(fullName, "name can not be blank");
  } else if (nameValue.length < 5) {
    setErrorFor(fullName, "full name must be more than five character");
  } else {
    setSuccessFor(fullName);
  }
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else if (!"^[A-Za-z0-9_-]*3@^[A-Za-z.]*5".test(email)) {
    setErrorFor(
      email,
      "email must have three character before @ and five after"
    );
  } else {
    setSuccessFor(email);
  }

  if (phoneValue === "" || phoneValue == null) {
    setErrorFor(phone, "phone can not be blank");
  } else if (!"^+[0-9]*3/[0-9]*8".test(phone)) {
    setErrorFor(
      phone,
      "phone must start with code +961 form example and must have 8 digit after"
    );
  } else {
    setSuccessFor(phone);
  }

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
  small.innerText = message;
}

function setSuccessFor(input) {
  const inputContainer = input.parentElement;
  inputContainer.className = "input-container success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
