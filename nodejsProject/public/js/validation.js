const form = document.getElementById("registrationForm");
const completedBy = document.getElementById("completed");
const witnessedBy = document.getElementById("witnessed");
const submitBtn = document.getElementById("submit");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const telephone = document.getElementById("telephone");
const gender = document.getElementById("gender");
const email = document.getElementById("email");
const regDate = document.getElementById("regDate");
const userId = document.getElementById("userId");
const nin = document.getElementById("nin");
const dateOfBirth = document.getElementById("dob");
const address = document.getElementById("address");

const min = 4;
const max = 27;

// REGULAR EXPRESSIONS
let alphabet = /^[A-Za-z]+$/;
let mobileRegex = /^([\+]){1}([0-9]){12}$/;
let idRegex = /^([A-Z]+(-[A-Z]+)(-[0-9]{4})+)$/;
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let dateRegex = /^(0?[1-31])|[\/\-]|(0?[1-12])[\/\-]\d{4}$/;

// FIRSTNAME
const validateFirstName = () => {
  if (firstName.value === "") {
    firstName.style.border = "2px solid red";
    firstName.style.background = "#f4c2c7";
  } else if (firstName.value.length >= min && firstName.value.length <= max) {
    firstName.style.border = "2px solid green";
    firstName.style.background = "#8ef4a6";
  } else if (firstName.value.match(alphabet)) {
    firstName.style.border = "2px solid green";
    firstName.style.background = "#8ef4a6";
  } else {
    firstName.style.border = "2px solid red";
    firstName.style.background = "#f4c2c7";
  }
};

// LASTNAME
const validateLastName = () => {
  if (lastName.value === "") {
    lastName.style.border = "2px solid red";
    lastName.style.background = "#f4c2c7";
  } else if (lastName.value.length >= min && lastName.value.length <= max) {
    lastName.style.border = "2px solid green";
    lastName.style.background = "#8ef4a6";
  } else if (lastName.value.match(alphabet)) {
    lastName.style.border = "2px solid green";
    lastName.style.background = "#8ef4a6";
  } else {
    lastName.style.border = "2px solid red";
    lastName.style.background = "#f4c2c7";
  }
};

// TELEPHONE
const validateTelephone = () => {
  if (telephone.value === "") {
    telephone.style.border = "2px solid red";
    telephone.style.background = "#f4c2c7";
  } else if (telephone.value.match(mobileRegex)) {
    telephone.style.border = "2px solid green";
    telephone.style.background = "#8ef4a6";
  } else {
    telephone.style.border = "2px solid red";
    telephone.style.background = "#f4c2c7";
  }
};

// uSERID
const validateUserId = () => {
  if (userId.value === "") {
    userId.style.border = "2px solid red";
    userId.style.background = "#f4c2c7";
  } else if (userId.value.match(idRegex)) {
    userId.style.border = "2px solid green";
    userId.style.background = "#8ef4a6";
  } else {
    userId.style.border = "2px solid red";
    userId.style.background = "#f4c2c7";
  }
};

// EMAIL
const validateEmail = () => {
  if (email.value === "") {
    email.style.border = "2px solid red";
    email.style.background = "#f4c2c7";
  } else if (email.value.match(emailRegex)) {
    email.style.border = "2px solid green";
    email.style.background = "#8ef4a6";
  } else {
    email.style.border = "2px solid red";
    email.style.background = "#f4c2c7";
  }
};

// REGDATE
const validateRegDate = () => {
  if (regDate.value === "") {
    regDate.style.border = "2px solid red";
    regDate.style.background = "#f4c2c7";
  } else if (regDate.value.match(dateRegex)) {
    regDate.style.border = "2px solid green";
    regDate.style.background = "#8ef4a6";
  } else {
    regDate.style.border = "2px solid red";
    regDate.style.background = "#f4c2c7";
  }
};

// DOB
const validateDob = () => {
  if (dateOfBirth.value === "") {
    dateOfBirth.style.border = "2px solid red";
    dateOfBirth.style.background = "#f4c2c7";
  } else if (dateOfBirth.value.match(dateRegex)) {
    dateOfBirth.style.border = "2px solid green";
    dateOfBirth.style.background = "#8ef4a6";
  } else {
    dateOfBirth.style.border = "2px solid red";
    dateOfBirth.style.background = "#f4c2c7";
  }
};

function validateForm() {
  return (
    validateFirstName(),
    validateLastName(),
    validateTelephone(),
    validateUserId(),
    validateEmail(),
    validateRegDate(),
    validateDob()
  );
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validateForm();
});

// checkNin()
// checkAddress()
// checkMaritalStatus()
