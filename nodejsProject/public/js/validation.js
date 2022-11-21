const form = document.getElementById("registrationForm");
const completedBy = document.getElementById("completed");
const witnessedBy = document.getElementById("witnessed");
const submitBtn = document.getElementById("submit");
const fullname = document.getElementById("fullname");
const gender = document.getElementById("gender");
const email = document.getElementById("email");
const regDate = document.getElementById("regdate");
const userId = document.getElementById("userid");
const nin = document.getElementById("nin");
const dateOfBirth = document.getElementById("dob");
const address = document.getElementById("address");

const min = 4;
const max = 27;

// REGULAR EXPRESSIONS
// let alphabet = /^[A-Za-z]+$/;
// let mobileRegex = /^([\+]){1}([0-9]){12}$/;
// let idRegex = /^([A-Z]+(-[A-Z]+)(-[0-9]{4})+)$/;
// let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// let dateRegex = /^(0?[1-31])|[\/\-]|(0?[1-12])[\/\-]\d{4}$/;
// let dateRegex2 = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
// let useridregex = /(^[A-Z]{2}[0-9]{8}[A-Z]{4})/

// FIRSTNAME
const validateName = () => {
  if (fullname.value === "") {
    fullname.style.border = "2px solid red";
    fullname.style.background = "#f4c2c7";
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

// USERID
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
    validateName(),
    
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
