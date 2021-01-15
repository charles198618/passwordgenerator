// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // console.log("hello")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var symbols = ["!", "'", '"', "?", "+", ">", "=", "*"]
var numbers = [1, 2, 3 ,4 ,5 ,6 ,7 , 8, 9, 0]
var lowerCase = "qwertyuiopasdfghjklzxcvbnm"
var lowerCaseArr = lowerCase.split("");
var upperCaseArr = lowerCase.toUpperCase().split("");

// console.log(upperCaseArr)
function generatePassword() {
  var characterLength = prompt("How many characters would you like in your password? (8-128)")
  while (characterLength <8 || characterLength > 128){
    characterLength = prompt("Incorrect character Length. Please give me a number from 8 to 128")
  }

  var confirmLower = confirm("Would you like to include lower case characters?");
  var confirmUpper = confirm("Would you like to include upper case characters?");
  var confirmNumbers = confirm("Would you like to include number characters?");
  var confirmSymbols = confirm("Would you like to include symbols?");

  var passwordParams = []
  if(confirmLower == true){
    passwordParams = passwordParams.concat(lowerCaseArr)
  }
  if(confirmUpper == true){
    passwordParams = passwordParams.concat(upperCaseArr)
  }
  if(confirmNumbers){
    passwordParams = passwordParams.concat(numbers)
  }
  if(confirmSymbols){
    passwordParams = passwordParams.concat(symbols)
  }

  var finalWord = ""
  for(i=0; i<characterLength ;i++){
    var randomNumber = Math.floor(Math.random()*passwordParams.length)
    finalWord += passwordParams[randomNumber]
  }
  // console.log(passwordParams)
  return finalWord
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
