// // Assignment Code

function generatePassword(length, lower, upper, numeric, special) {
  let userPasswordChoice = "";
  if (length > 8 || length < 128) {
    if (lower) userPasswordChoice += "abcdefghijklmnopqrstuvwxyz";
    if (upper) userPasswordChoice += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numeric) userPasswordChoice += "0123456789";
    if (special) userPasswordChoice += "!@#$%^&*()-_=+";
    // console.log(userPasswordChoice);

    let randomPassword = "";
    for (let i = 0; i < length; i++) {
      let randomIndexNumber = Math.floor(
        Math.random() * userPasswordChoice.length
      );
      // console.log(randomIndexNumber);
      randomPassword += userPasswordChoice[randomIndexNumber];
    }
    // console.log(randomPassword);
    return randomPassword;
  }
}

// generatePassword(
//   passwordLengthChoice,
//   lowerCaseChoice,
//   upperCaseChoice,
//   numericChoice,
//   specialCharacterChoice
// );

// Write password to the #password input
function writePassword() {
  let passwordLengthChoice = parseInt(
    prompt("Enter your password length (8-128) ? ")
  );

  let lowerCaseChoice = confirm(
    "Do you want to add LowerCase in the Password ? "
  );

  let upperCaseChoice = confirm(
    "Do you want to add UpperCase in the password ?"
  );

  let numericChoice = confirm(
    "Do you want to add Numeric Number in the password ?"
  );

  let specialCharacterChoice = confirm(
    "Do you want to add Special Character in the password ?"
  );
  var password = generatePassword(
    passwordLengthChoice,
    lowerCaseChoice,
    upperCaseChoice,
    numericChoice,
    specialCharacterChoice
  );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
