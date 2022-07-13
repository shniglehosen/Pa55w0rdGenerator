// Assignment code here
var smallLetters = "abcdefghijklmnopqrstuvwxyz";
var largeLtters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var allNumbers = "1234567890";
var specialChars = "!@#$%^&*()";
var passwordLength = 0;



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var numberOfChar = window.prompt("Please provide how long you want password to be (between 8-128 characters)")
  passwordLength = document.getElementById("numberOfChar");
  var boolSmallLet = window.confirm("Do you want lower case characters?");
  var boolLargeLet = window.confirm("Do you want Capital Letters?");
  var boolNumbers = window.confirm("Do you want to use Numbers?");
  var boolSpecialChar = window.confirm("Do you want to use Special Characters?");

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if(passwordLength >= 8 && passwordLength <= 128){
  if(boolSmallLet === true){
    smallLetters = smallLetters.split("");
    for (let index = 0; index < smallLetters.length; index++) {
      const element = smallLetters[index];
      
    }
    
  }
}
else{
  window.confirm("You're password length did not match necesary number of characters. Please try again");
}

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
