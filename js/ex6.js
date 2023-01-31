/* Tutorial 4
   Example 6 JavaScript code
*/

const getWord = () => {
  const word = prompt("Enter a word:");
  return word;
}

const countVowels = (word) => {
  let count = 0;
  for (const letter of word) {
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "y") {
      count++;
    }
  }
  return count;
}

const isPalindrome = (word) => {
  const reverseWord = word.split("").reverse().join("");
  if (word.toLowerCase() === reverseWord.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

const word = getWord();
const vowels = countVowels(word);
const palindrome = isPalindrome(word);

if (palindrome) {
  console.log(`${word} contains ${vowels} vowels and is a palindrome`);
}
else {
  console.log(`${word} contains ${vowels} vowels and is not a palindrome`);
}
