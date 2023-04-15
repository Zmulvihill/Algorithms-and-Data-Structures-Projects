function palindrome(str) {
    // remove non-alphanumeric characters and convert to lower case
    let filteredStr = str.toLowerCase().replace(/[^0-9a-z]/g, '');
    // reverse the filtered string
    let reversedStr = filteredStr.split('').reverse().join('');
    // check if the filtered string is the same as the reversed string
    return filteredStr === reversedStr;
    }
    
    console.log(palindrome("eye"))
    console.log(palindrome("race car"))
    console.log(palindrome("A man, a plan, a canal. Panama"))
    console.log(palindrome("five|\_/|four"))
    console.log(palindrome("My age is 0, 0 si ega ym."))