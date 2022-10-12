// const form = document.querySelector('form')
const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const submit = document.querySelector("#submit");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const telephone = document.querySelector("#phone-number");
// min and max char values
const min = 3;
const max = 25;

// prevent form refresh
// function handleForm(event) { event.preventDefault();}
// form.addEventListener('submit', handleForm)

// check first name
const checkFirstName = () => {
  let f_name = firstName.value;
  // regex for small and full caps letters
  let alphabet = /^[A-Za-z]+$/;

  // check if empty and if matchecs regex
  if (f_name.match(alphabet) && f_name != "") {
    telephone.focus();
    return true;
  } else {
    firstName.style.border = "2px solid red";
  }
};

// check last name
const checkLastName = () => {
  let l_name = lastName.value;
  // regex for small and full caps letters
  let alphabet = /^[A-Za-z]+$/;

  // check if empty and if matchecs regex
  if (l_name.match(alphabet) && l_name != "") {
    telephone.focus();
    return true;
  } else {
    lastName.style.border = "2px solid red";
  }
};

// check phone number
const checkTelephone = () => {
  let p_number = telephone.value;
  // regex for numbers
  let numbers = /^[0-9]+$/;

  // check if empty and if matches regex
  if (p_number.match(numbers) && p_number != "") {
    email.focus();
    return true;
  } else {
    telephone.style.border = "2px solid red";
  }
};

// check email
const checkEmail = () => {
  let e_mail = email.value;
  // regex for email
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // check if emtpy and if matches regex
  if (e_mail.match(emailRegex) && e_mail != "") {
    password.focus();
    return true;
  } else {
    email.style.border = "2px solid red";
  }
};

// checking password
const checkPassword = () => {
  let p_word = password.value;
  // let c_password = confirmPassword.value

  // check if input is empty
  if (p_word == "") {
    password.style.border = "2px solid red";
  }
  console.log(p_word);
};

// confirming password
const checkConfirmPassword = () => {
  let c_password = confirmPassword.value;
  let p_word = password.value;

  // check if input is empty
  if (c_password == "") {
    confirmPassword.style.border = "2px solid red";
  }
  // check if emails dont match
  if (c_password != p_word) {
    password.style.border = "2px solid red";
    confirmPassword.style.border = "2px solid red";
  }
  console.log(c_password);
};
