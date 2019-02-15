function countBs(word) {
  let counter = word.length - 1;
  let BsCounter = 0;
  for (let i = 0; i < counter; i++) {
    if (word[i] == "B") {
      BsCounter++
    }

  }
  return BsCounter;
}

function countChar(word, character) {
  let counter = word.length;
  let charCounter = 0;
  for (let i = 0; i < counter; i++) {
    if (word[i] == character) {
      charCounter++
    }
  }
  return charCounter
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
