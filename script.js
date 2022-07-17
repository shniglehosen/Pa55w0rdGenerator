// Assignment code here
var smallLetters = "abcdefghijklmnopqrstuvwxyz"; //add together to make longer string
var largeLtters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // variable with captial letters to add
var allNumbers = "1234567890"; //list of number to add
var specialChars = "!@#$%^&*()"; //list of special characters to add
var passArray = []; //array for the For loop



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var numberOfChar = window.prompt("Please provide how long you want password to be (between 8-128 characters)")
  if(numberOfChar < 8 || numberOfChar > 128){ //if number is less than 8 or greater than 128, give alert to user
      window.alert("You're password length did not match necesary number of characters. Please try again");
      return;
  }
  var boolSmallLet = window.confirm("Do you want lower case characters?");
  var boolLargeLet = window.confirm("Do you want Capital Letters?"); 
  var boolNumbers = window.confirm("Do you want to use Numbers?"); 
  var boolSpecialChar = window.confirm("Do you want to use Special Characters?"); 
  var possibleChoice = "";


    if(boolSmallLet === true){ //user chooses to use lower case letters in password
      possibleChoice = possibleChoice + smallLetters;
    }

    if( boolLargeLet === true){ //user chooses to use upper case letters in password
      possibleChoice = possibleChoice + largeLtters;
    }

    if(boolNumbers === true){ //user chooses to use numbers in password
      possibleChoice = possibleChoice + allNumbers;
    }

    if(boolSpecialChar === true){//user chooses to use special characters in password
      possibleChoice = possibleChoice + specialChars;
    }

    for (let index = 0; index < numberOfChar; index++) {//loops through the selected amount of characters user wants and randomly selects from list of options
      passArray.length = numberOfChar; //set array length equal to requested number of characters

      passArray[index] = possibleChoice[Math.floor(Math.random() * possibleChoice.length)] //generates a random character from possibleChoice list and adds it to array

      password = passArray.join(""); //joins array elements together to form a string
    }
    return password;
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
