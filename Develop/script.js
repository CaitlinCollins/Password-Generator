// Assignment Code
var generateBtn = document.querySelector("#generate");

function requirements () {

  // Assigns an empty string value to charNumber.
  var charNumber = "";
 


  //Ensures the minimum and maximux requirements are met. 
  while (charNumber < 8 | charNumber > 128 | isNaN(charNumber)) {
    charNumber = prompt("Please choose your desired character length. Must be a number between 8 and 128.");
    charNumber = parseInt(charNumber);
    if (charNumber < 8 | charNumber > 128) {
      alert("Ooops! You must type a valid number! Try again!");
    }
    if (isNaN(charNumber)) {
      alert("Whoopsie! That's not a number! Try again!");
    }
  }
  // Alerts user to their choice of character length.
  alert("Great! You chose " + charNumber + " characters.");



  //Need code to ensure at least one of these is true. 

  while ([lowercase, uppercase, numbers, specialChar] !== true) {
    alert("You must choose to include AT LEAST ONE from the following: lowercase, uppercase, numbers, and special characters.");
    
    //Lowercase prompt and comfirm.
    var lowercase = confirm("Should I include LOWERCASE characters?");
      
    //Uppercase prompt and confirm.
    var uppercase = confirm("Should I include UPPERCASE characters?");
      

    //Numbers prompt and confirm.
    var numbers = confirm("Shall I include numbers?");
   

    //Special Character prompt and confirm.
     var specialChar = confirm("How about special characters?");
    
      if ([lowercase, uppercase, numbers, specialChar] === false) {
      alert("Your choices did not meet the criteria! Did you even read the instructions?");
      }
      else {
        break;
      }
    }


    alert("Great!")
   

    // alert("You're on your way! Click 'ok' to reveal your brand new password!");

      
// //   return [charNumber, lowercase, uppercase, numbers, specialChar];
// // }


// // // Write password to the #password input
// // function writePassword() {
// //   var password = generatePassword();
// //   var passwordText = document.querySelector("#password");

// //   passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
