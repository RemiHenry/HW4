/* Tutorial 4
   Example 5 JavaScript code
*/


const getWords = () => {
  const words = [];
  let word = prompt("Enter a word:");

  while (word.toLowerCase() !== "stop") {
    words.push(word);
    word = prompt("Enter a word:");
  }
  displayWords(words);
}

const displayWords = (words) => {
  if (words.length === 0) {
    console.log("No words to display, Stop was the first word entered.");
  } else {
    console.log("You entered the following words:");
    for (const word of words) {
      console.log(word);
    }
  }
}

getWords();
