
const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");
const submit = document.querySelector("button");

const nameMessage = document.querySelector("#nameMessage");
const emailMessage = document.querySelector("#emailMessage");
const subjectMessage = document.querySelector("#subjectMessage");
const messageContent = document.querySelector("#messageContent");
const successMessage = document.querySelector("#success");

// email validation function
function emailValidator(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
// form validation function
form.onsubmit = (event) => {
  event.preventDefault();
  var valid = true;

  if (nameInput.value.trim().length == 0) {
    nameMessage.innerHTML = "Name is required";
    valid = false;
  } else if (nameInput.value.trim().length < 5){
    nameMessage.innerHTML = "Name must be at least 5 characters long";
    alid = false;
  } else {
    nameMessage.innerHTML ="";
  }

  if (subjectInput.value.trim().length == 0) {
    subjectMessage.innerHTML = "Subject is required";
    valid = false;
  } else if (subjectInput.value.trim().length < 15) {
    subjectMessage.innerHTML = "subject must be at least 15 characters long ";
    valid = false;
  } else {
    subjectMessage.innerHTML = "";
  }

  if (messageInput.value.trim().length == 0) {
    messageContent.innerHTML = "Message is required";
    valid = false;
  } else if (messageInput.value.trim().length < 25) {
    messageContent.innerHTML = "Message must be at least 25 character long";
    valid = false;
  } else {
    messageContent.innerHTML = "";
  }

  if (emailInput.value.trim().length == 0) {
    emailMessage.innerHTML = "Email is required";
    valid = false;
  } else if (emailValidator(emailInput.value.trim()) === false) {
    emailMessage.innerHTML = "Email is not valid";
    valid = false;
  } else {
    emailMessage.innerHTML = "";
  }

  if (valid === true) {
    successMessage.innerHTML =
      "Thank you for contacting us, we'll be in touch as soon as possible";
  } else {
    successMessage.innerHTML = "";
  }
};

