
// Assigns an empty string value to charNumber and allPassCharacters.
var generateBtn = document.querySelector("#generate");
var charNumberInput = "";
var allPassCharacters = "";

// Assigns constants to character variables.
const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberCharacters = "0123456789";
const specialCharacters = " !'()*+,-./:;<=>?@[]^_`{|}~";

// Function that gathers the information.
function writePassword() {

  // Ensures the minimum and maximux character length requirements are met. 
  while (charNumberInput < 8 | charNumberInput > 128 | isNaN(charNumberInput)) {
    charNumberInput = prompt("Please choose your desired character length. Must be a number between 8 and 128.");
    charNumberInput = parseInt(charNumberInput);
    if (charNumberInput < 8 | charNumberInput > 128) {
      alert("Ooops! You must type a valid number! Try again!");
    }
    if (isNaN(charNumberInput)) {
      alert("Whoopsie! That's not a number! Try again!");
    }
  }
  // Alerts user to their choice of character length.
  alert("Great! You chose " + charNumberInput + " characters.");

  // Ensures at lease one of the following is true.
  while ([lowercaseInput, uppercaseInput, numbersInput, specialCharInput] !== true) {
    alert("You must choose to include AT LEAST ONE from the following: lowercase, uppercase, numbers, and special characters.");
    
    // Lowercase confirm and alert.
    var lowercaseInput = confirm("Should I include LOWERCASE characters?");
      if (lowercaseInput === true) {
        allPassCharacters += lowercaseCharacters;
        alert("Great choice! Your password WILL include lowercase characters!")
      }
      else {
        alert("Whatever. No lowercase characters for you!")
      }
      
    // Uppercase confirm and alert.
    var uppercaseInput = confirm("Should I include UPPERCASE characters?");
      if (uppercaseInput === true) {
        allPassCharacters += uppercaseCharacters;
        alert("Wise decision! Your password WILL include uppercase characters!")
      }
      else {
        alert("Have it your way. No uppercase characters today.")
      }
      
    // Numbers confirm and alert.
    var numbersInput = confirm("Shall I include numbers?");
      if (numbersInput === true) {
        allPassCharacters += numberCharacters;
        alert("Brilliant! Your password WILL include numbers!")
      }
      else {
        alert("What, are you daft? No numbers will be included.")
      }
   
    // Special Character confirm and alert.
    var specialCharInput = confirm("How about special characters?");
      if (specialCharInput === true) {
        allPassCharacters += specialCharacters;
        alert("Amazeballs! Your password WILL include special characters!")
      }
      else {
        alert("Do you even know what you want? No special characters, I guess.")
      }
      if (lowercaseInput !== true && uppercaseInput !== true && numbersInput !== true && specialCharInput !== true) {
      alert("Your choices did not meet the criteria! Did you even read the instructions?");
      }
      else {
        break;
      }
    }

  alert("Great! Click 'ok' to reveal your brand new password!");

  // Write password to the #password input
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// This function takes the special characters selected and randomizes them with the chosen character length.
function generatePassword() {

  // Establishes an empty string variable. 
  var result = "";

  for (var i = 0; i < charNumberInput; i++) {
    var randomize = Math.floor(Math.random() * allPassCharacters.length);
    result += allPassCharacters.charAt(randomize);
    console.log(result);
    console.log(result.length);
  }
  return (result);
} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
