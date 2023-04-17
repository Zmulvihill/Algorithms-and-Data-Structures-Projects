function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  // Define the alphabet as a string of uppercase letters
  let answer = "";  // Initialize an empty string to hold the decoded message
  for (let i = 0; i < str.length; i++) { // Loop through each character in the input string
    if (alphabet.indexOf(str[i]) >= 13) { // If the current character is in the second half of the alphabet
      answer += alphabet[alphabet.indexOf(str[i]) - 13];  // Shift the character back 13 places and add it to the answer string
    } else if (alphabet.indexOf(str[i]) < 13 && alphabet.indexOf(str[i]) > -1) { // Otherwise, if the current character is in the first half of the alphabet
      answer += alphabet[alphabet.indexOf(str[i]) + 13];  // Shift the character forward 13 places and add it to the answer string
    } else {  // Otherwise, if the current character is not a letter
      answer += str[i]; // Add the character to the answer string unchanged
    }
  }
  return answer;  // Return the decoded message
}

console.log(rot13("SERR PBQR PNZC"))
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))
console.log(rot13("SERR YBIR?"))