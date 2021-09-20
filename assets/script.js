// Assignment code here
var generatePassword = function() {
  // Array for each of the password criteria
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = lowercase.toUpperCase();
  const special = "!@#$%^&*(){}[]<>=-_+/?~|";
  const number = "0123456789";
  var characterSet = "";
  var finalPassword = "";
};

var passwordLength = prompt("How many characters would you like your password to contain? Enter a value between 8 and 128");

// ensure input meets the above criteria

if ((isNaN(passwordLength)) || (passwordLength < 8) || (passwordLength >128)) {
    window.alert("Please enter a number between 8 and 128");
    return;
} else {
    var confirmLower = confirm("Click OK if you'd like to include lowercase characters");
    var confirmLower = confirm("Click OK if you'd like to include uppercase characters");
    var confirmSpecial = confirm("Click OK if you'd like to include special characters");
    var confirmNumber = confirm("Click OK if you'd like to include a number");

    // Ensure valid input
    var checkInput = confirmLower + confirmUpper + confirmSpecial + confirmNumber;

    if (checkInput === false) {
      window.alert("Please select at least one of the given options");
      return finalPassword;
    } 
    
    if (confirmLower) {
      characterSet += lowercase;
    } if (confirmUpper) {
      characterSet += uppercase
    } if (confirmSpecial) {
      characterSet += special
    } if (confirmNumber) {
      characterSet += number
    }
    
    // Grab random characters from the set and generate password
    for (i = 0; i < passwordLength; i++) {
      var randomPassword = Math.floor(Math.random() * characterSet.length);
      finalPassword += characterSet[randomPassword];
    }

    return finalPassword
};




// Generate Password
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
