const form = document.getElementById("regform");
const dateOfBirth = document.getElementById("dob");
let regexVar = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;

const validateDob = () => {
  // capture input value
  let birthday = dob.value;
  // test input value with regex
  let regexVarTest = regexVar.test(birthday);
  // re-format the string birthday replace it with regex pattern
  let userBirthDate = new Date(birthday.replace(regexVar, "$3-$2-$1"));
  // get the current year
  let currentYear = new Date().getFullYear();
  // calculate age limits
  let cutOff18 = new Date();
  cutOff18.setFullYear(currentYear - 18);
  let cutOff65 = new Date();
  cutOff65.setFullYear(currentYear - 65);

  if (!regexVarTest) {
    // make sure input is valid first
    dobErrMsg.innerHTML = "enter date of birth as dd/mm/yyyy";
  } else if (isNaN(userBirthDate)) {
    dobErrMsg.innerHTML = "date of birth is invalid";
    dob.style.borderColor = "red";
  } else if (userBirthDate > cutOff18) {
    dobErrMsg.innerHTML = "you have to be older than 18";
    dob.style.borderColor = "red";
  } else if (userBirthDate < cutOff65) {
    dobErrMsg.innerHTML = "you have to be younger than 65";
    dob.style.borderColor = "red";
  } else {
    dobErrMsg.innerHTML = "success";
    dob.style.borderColor = "green";
    return;
  }
  return userBirthDate;
};

function validateForm() {
  return validateDob();
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validateForm();
});
