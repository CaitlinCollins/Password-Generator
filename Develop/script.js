// Assignment Code
var generateBtn = document.querySelector("#generate");

function requirements () {

// Assigns an empty string value to charNumber.
var charNumber = ""


//Ensures the minimum and maximux requirements are met. 
  while (charNumber < 8 || charNumber > 128) {
    // Prompts an input for desired character length.
    charNumber = prompt("Please choose your desired character length. Must be a number between 8 and 128.");
    //Ensures charNumber is an integer. 
    charNumber = parseInt(charNumber);
    //Remind user of the parameters.
    alert("Ooops! Try again! You must choose a valid number!"); //// This isn't working!!!!!!!
  }
  // Alerts user to their choice of character length.
  alert("Great! You chose " + charNumber + " characters.");


  //Need code to ensure at least one of these is true. 
  

//   while (lowercase === false && uppercase === false && numbers === false && specialChar === false) {
//     alert("You must choose to include at least one from the following: lowercase, uppercase, numbers, and special characters.");

//     //Lowercase prompt and comfirm.
//     var lowercase = confirm("Include lowercase?");
//       if (lowercase === true) {
//       alert("Password WILL include lowercase characters.");
//       }
//       else {
//       alert("Password WILL NOT include lowercase characters.");
//       }

//     //Uppercase prompt and confirm.
//     var uppercase = confirm("Include uppercase?");
//       if (uppercase === true) {
//       alert("Password WILL include uppercase characters.");
//       }
//       else {
//       alert("Password WILL NOT include uppercase characters.");
//       }

//     var numbers = confirm("Include numbers?");
//     if (numbers === true) {
//       alert("Password WILL include numbers.");
//       }
//       else {
//       alert("Password WILL NOT include numbers.");
//       }

//     var specialChar = confirm("Include special characters?");
//     if (specialChar === true) {
//       alert("Password WILL include special characters.");
//       }
//       else {
//       alert("Password WILL NOT include special characters.");
//       }

//       alert("Your choices did not meet the criteria!");
//     }

//     alert("Great! Click 'ok' to reveal your new password!");

      
// //   return [charNumber, lowercase, uppercase, numbers, specialChar];
// // }


// // // Write password to the #password input
// // function writePassword() {
// //   var password = generatePassword();
// //   var passwordText = document.querySelector("#password");

// //   passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
