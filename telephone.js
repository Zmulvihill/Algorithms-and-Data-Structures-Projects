function telephoneCheck(str) {
  const regex = /^1?[\s-]?\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}$/;
  return regex.test(str);
}


console.log(telephoneCheck("1 555-555-5555"))
console.log(telephoneCheck("555-5555"))
console.log(telephoneCheck("1 456 789 4444"))
console.log(telephoneCheck("(6054756961)"))