function isPalindrome(word) {
  let firstPair = undefined
  let secondPair = undefined

  if(word.charAt(0) === word.charAt(word.length - 1)){
    firstPair = true;
  }else{
    firstPair = false;
  }

  if(word.charAt(1) === word.charAt(word.length - 2)){
    secondPair = true;
  }else{
    secondPair = false;
  }

  if(firstPair === true && secondPair === true){
    return true
  }else{
    return false
  }
}

/* 
itterate over each letter in the word
if the first character matches the last character return true, then move to the next two
if more than 1 come back true it is a palindrome 

*/

/*
  the functions compares each letter and its corresponding pair, a five letter word would be 0 - 4, 1 - 3
  if more than one of these comparisions came back true the function returned true

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome('level'));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome('robbie'));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome('a'));
}

module.exports = isPalindrome;
