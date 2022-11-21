const registrationForm = document.getElementById("registrationForm");
const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

// let todaysDate = document.getElementById("regdate");
// todaysDate.textContent = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // using constraint API
  isValid = registrationForm.checkValidity();
  // style main message for an error
  if (!isValid) {
    message.textContent = "Please fill out all fields.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    
  }
  // check to see if passwords match
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = "rgb(66, 243, 12)";
    password2El.style.borderColor = "rgb(66, 243, 12)";
  } else {
    passwordsMatch = false;
    message.textContent = "Make sure passwords match.";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    password1El.style.borderColor = "red";
    password2El.style.borderColor = "red";
    
  }
  // if form is valid and passwords match
  if (isValid && passwordsMatch) {
    messageContainer.classList.remove("hidden");
    message.textContent = "Successfully Registered!";
    message.style.color = "rgb(66, 243, 12)";
    messageContainer.style.borderColor = "rgb(66, 243, 12)";
  }
}

function processFormData(e) {
  e.preventDefault();
  // validates form
  validateForm();
}

// Event listener
registrationForm.addEventListener("submit", processFormData);