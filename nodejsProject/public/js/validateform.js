const form = document.registrationForm.registrationForm;
const submitBtn = document.registrationForm.submit;
const fullname = document.registrationForm.fullname;
const gender = document.registrationForm.gender;
const mstatus = document.registrationForm.mstatus;
const email = document.registrationForm.email;
const userId = document.registrationForm.userid;
const nin = document.registrationForm.nin;
const phone = document.registrationForm.phone;
const dateOfBirth = document.registrationForm.dob;
const userRole = document.registrationForm.role;
const userDivision = document.registrationForm.division;
const userParish = document.registrationForm.parish;
const passwordOne = document.registrationForm.password1;
const passwordTwo = document.registrationForm.password2;

let regDate = document.getElementById("regdate");
regDate.textContent = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
});

const fnregex = /^[a-zA-Z_ ]*$/;
const phoneregex = /^([\+]){1}([0-9]){12}$/;
const dobregex = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
const emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const parishregex = /^[A-Za-z]+$/;
const userninregex = /(^[A-Z]{2}[0-9]{8}[A-Z]{4})/;
const useridregex = /^[A-Z]{2}(-{1})([A-Z]{3,15})(-{1})[0-9]{4}/;

const validateFullName = () => {
  if (fullname.value != "") {
    fullname.classlist.add = "input-valid";
  } else if (fullname.value.match(fnregex)) {
    fullname.classlist.add = "input-valid";
  } else {
    fullname.classlist.add = "input-invalid";
    fullname.focus();
  }
};

const validatePhone = () => {
  if (phone.value != "") {
    phone.classlist.add = "input-valid";
  } else if (phone.value.match(phoneregex)) {
    phone.classlist.add = "input-valid";
  } else {
    phone.classlist.add = "input-invalid";
    phone.focus();
  }
};

const validateGender = () => {
  if (gender.value != "") {
    gender.classlist.add = "input-valid";
  } else {
    gender.classlist.add = "input-invalid";
    gender.focus();
  }
};

const validateMstatus = () => {
  if (mstatus.value != "") {
    mstatus.classlist.add = "input-valid";
  } else {
    mstatus.classlist.add = "input-invalid";
    mstatus.focus();
  }
};

const validateDob = () => {
  // capture input value
  let bday = dateOfBirth.value;
  // test captured input value against dobregex
  let dobregexTest = dobregex.test(bday);
  // reformulate bday string and replace it with dobregex pattern
  let userBday = new Date(bday.replace(dobregex, "$3-$2-$1"));
  // getting the current year
  let currentYear = new Date().getFullYear();
  // setting age limits
  let lower = new Date();
  lower.setFullYear(currentYear - 18);
  let higher = new Date();
  higher.setFullYear(currentYear - 65);

  if (!dobregexTest) {
    dateOfBirth.classlist.add = "input-invalid";
    dateOfBirth.focus();
  } else if (isNaN(userBday)) {
    dateOfBirth.classlist.add = "input-invalid";
    dateOfBirth.focus();
  } else if (userBday < lower) {
    dateOfBirth.classlist.add = "input-invalid";
    dateOfBirth.focus();
  } else if (userBday < higher) {
    dateOfBirth.classlist.add = "input-invalid";
    dateOfBirth.focus();
  } else {
    dateOfBirth.classlist.add = "input-valid";
  }
  return userBday;
};

const validateEmail = () => {
  if (email.value != "") {
    email.classlist.add = "input-valid";
  } else if (email.value.match(emailregex)) {
    email.classlist.add = "input-valid";
  } else {
    email.classlist.add = "input-invalid";
    email.focus();
  }
};

const validateNin = () => {
  if (nin.value != "") {
    nin.classlist.add = "input-valid";
  } else if (nin.value.match(userninregex)) {
    nin.classlist.add = "input-valid";
  } else {
    nin.classlist.add = "input-invalid";
    nin.focus();
  }
};

const validateRole = () => {
  if (userRole.value != "") {
    userRole.classlist.add = "input-valid";
  } else {
    userRole.classlist.add = "input-invalid";
    userRole.focus();
  }
};

const validateDivision = () => {
  if (userDivision.value != "") {
    userDivision.classlist.add = "input-valid";
  } else {
    userDivision.classlist.add = "input-invalid";
    userDivision.focus();
  }
};

const validateParish = () => {
  if (userParish.value != "") {
    userParish.classlist.add = "input-valid";
  } else if (userParish.value.match(parishregex)) {
    userParish.classlist.add = "input-valid";
  } else {
    userParish.classlist.add = "input-invalid";
    userParish.focus();
  }
};

const validateUserid = () => {
  if (userId.value != "") {
    userId.classlist.add = "input-valid";
  } else if (userId.value.match(useridregex)) {
    userId.classlist.add = "input-valid";
  } else {
    userId.classlist.add = "input-invalid";
    userId.focus();
  }
};

const validatePasswords = () => {
  if (passwordOne.value != "" && passwordTwo.value != "") {
    passwordOne.classlist.add = "input-valid";
    passwordTwo.classlist.add = "input-valid";
  } else if (passwordTwo.value === passwordOne.value) {
    passwordTwo.classlist.add = "input-valid";
  } else {
    passwordOne.classlist.add = "input-valid";
    passwordTwo.classlist.add = "input-valid";
    passwordOne.focus();
    passwordTwo.focus();
    passwordOne.setAttribute('title', 'Please include at least 1 uppercase character, 1 lowercase character and 1 number.')
    passwordTwo.setAttribute('title', 'Please include at least 1 uppercase character, 1 lowercase character and 1 number.')
  }
};

const validateForm = () => {
  return (validateFullName(), validatePhone(), validateGender(),validateMstatus(), validateDob(), validateEmail(), validateNin(), validateRole(), validateDivision(), validateParish(), validateUserid(), validatePasswords());
};

form.addEventListener("submit", () => {
  validateForm();
});
