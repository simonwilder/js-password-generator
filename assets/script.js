// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Global Variables
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var special = "!@#$%^&*(){}[]<>=-_+/?~|";
var number = "0123456789";

// Create Password Function

var generatePassword = function() {

  var characterSet = "";
  var finalPassword = "";

  var passwordLength = prompt(
    "How long would you like your password to be? Please pick a number between 8 and 128"
  ); 

  if(isNaN(passwordLength) || (passwordLength < 8) || (passwordLength > 128)) {
    window.alert("Invalid answer, please pick a number between 8 and 128");
    return;
  } 
  else {
    var confirmLower = confirm("Select OK if you'd like to include lowercase characters");
    var confirmUpper = confirm("Select OK if you'd like to include uppercase characters");
    var confirmSpecial = confirm("Select OK if you'd like to include special characters");
    var confirmNumber = confirm("Select OK if you'd like to include numbers");
  }

  if (confirmLower) {
    characterSet = characterSet.concat(lowercase);
  } if(confirmUpper) {
    characterSet = characterSet.concat(uppercase);
  } if(confirmSpecial) {
    characterSet = characterSet.concat(special)
  } if(confirmNumber) {
    characterSet = characterSet.concat(number);
  }

  console.log("character set = " + characterSet)

  if(characterSet.length ===0) {
    window.alert("Please select one of the available character options!");
    return;
  }
  
  for(var i =0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    var random = characterSet.charAt(randomIndex);
    finalPassword = finalPassword.concat(random)

  }

return finalPassword;

};

// Write Password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);