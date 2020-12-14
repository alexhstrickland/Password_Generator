// Prompts for criteria
var length = prompt("Please type a numerical value between 8 and 128 for the password length:");

// If statement to validate password length is between 8 and 128
if (length <8 || length > 128) {
  alert("The passcode length must be between 8 and 128. Please refresh page and start over!");
}

console.log(length);

var lowercase = confirm("Would you like the password to include lowercase characters?");

var uppercase = confirm("Would you like the password to include uppercase characters?");

var numeric = confirm("Would you like the password to include numeric characters?");

var specialCharacters = confirm("Would you like the password to include special characters?");

// Code to validate that user selected criteria
if ((lowercase === false) && (uppercase === false) && (numeric === false) && (specialCharacters === false)) {
  alert("You have not selected any criteria. Please refresh and start over!");
}

// Creation of blank character variable
var characters = ""

// Character types
var lower = "abcdefghijklmnopqrstuvwxyz"

var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var num = "0123456789"

var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// If statements to add selected criteria to characters
if (lowercase === true) {
  characters += lower;
}

if (uppercase === true) {
  characters += upper;
}

if (numeric === true) {
  characters += num;
}

if (specialCharacters === true) {
  characters += special;
}

console.log(characters);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate Password
function generatePassword() {
  var result = "";
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
