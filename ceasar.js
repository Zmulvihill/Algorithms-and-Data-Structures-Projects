function rot13(inputString) {
  // Initialize an empty string to hold the decoded output
  let decodedString = '';
  // Loop over each character in the input string
  for (let i = 0; i < inputString.length; i++) {
    // Get the current character
    let character = inputString.charAt(i);
    // Check if the character is an alphabetic character using a regular expression
    if (character.match(/[A-Za-z]/)) {
      // Get the character code for the current character
      let charCode = inputString.charCodeAt(i);
      // If the character is uppercase, apply the ROT13 cipher by shifting the character code by 13 positions
      if (character === character.toUpperCase()) {
        decodedString += String.fromCharCode((charCode - 65 + 13) % 26 + 65);
      } 
      // If the character is lowercase, apply the ROT13 cipher by shifting the character code by 13 positions
      else {
        decodedString += String.fromCharCode((charCode - 97 + 13) % 26 + 97);
      }
    } 
    // If the character is not an alphabetic character, simply add it to the decoded output
    else {
      decodedString += character;
    }
  }
  // Return the decoded output string
  return decodedString;
}
  
  console.log(rot13("SERR PBQR PNZC"));