function convertToRoman(num) {
    const sym = {
      'M': 1000,
      'CM' : 900,
      'D'	: 500,
      'CD' : 400,
      'C' :	100,
      'XC' : 90,
      'L' :	50,
      'XL' :	40,
      'X' :	10,
      'IX' :	9,
      'V' :	5,
      'IV' :	4,
      'I' :	1,
    }
  
    
    let result = '';// Initialize an empty string `result` to store the roman numeral
  
    
    for (const key in sym) {// Convert the number to a roman numeral
      while (num >= sym[key]) {// Check if the current key represents a number that can be subtracted from the remaining `num`
        result += key;// Add the corresponding roman numeral to the `result` string
        num -= sym[key];// Subtract the corresponding value from `num`
      }
    }
  
    return result;// Return the computed roman numeral
  };
  console.log(convertToRoman(2))
  console.log(convertToRoman(1984))
  console.log(convertToRoman(1988))
  console.log(convertToRoman(3999))