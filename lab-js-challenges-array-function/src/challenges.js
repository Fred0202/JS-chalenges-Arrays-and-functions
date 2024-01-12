// Iteration 1 | Count Repetition
function howManyTimes(wordArray, findWord) {
  const occurrencesArray = wordArray.filter(word => word === findWord);
  return occurrencesArray.length;
}

// Example usage:
const wordsArray = [
"machine",
"matter",
"subset",
"trouble",
"starting",
"matter",
"eating",
"matter",
"truth",
"disobedience",
"matter"
];

const findWord = "matter";
const occurrences = howManyTimes(wordsArray, findWord);

console.log(`The word "${findWord}" appears ${occurrences} times in the array.`);





// Iteration 2 | Number Sequence
function createSequence(n) {
  return Array.from({ length: n + 1 }, function(_,index) {
      return index;
  });
}
  const sequence = createSequence(7);
  console.log(sequence);



// Iteration 3 | Multiply for Each
function multiplyBy(hardMath, multiplier) {
  const resultArray = [];
  hardMath.forEach(function(number) {
      resultArray.push(number * multiplier);
});
  return resultArray;
}

const hardMath = [1, 2, 5, 10, 13, 50];
const multipliedArray = multiplyBy(hardMath, 3);
console.log(multipliedArray);



// Iteration 4 | Filter Out
function filterOut(original, toRemove) {
  return original.filter(function(word) {
      return !toRemove.includes(word);
  });
}
const originalArray = ["cat", "dog", "fish", "bird", "cat", "fish"];
const toRemoveArray = ["cat", "dog"];
const filterArray = filterOut(originalArray, toRemoveArray);
console.log(filterArray);



// Iteration 5 | Unique Arrays
function uniquifyArray(words) {
  const uniqueArray = [];
  words.forEach(function(word) {
      if (uniqueArray.indexOf(word) === -1) {
          uniqueArray.push(word);
      }
  });
  return uniqueArray;
}
  const doubleWords = [
  "crab",
  "poison",
  "contagious",
  "poison",
  "simple",
  "sharp",
  "simple"
];
  const uniqueWords = uniquifyArray(doubleWords);
  console.log(uniqueWords);



// Bonus: Iteration 6 | Product of Adjacent Numbers
function greatestProduct(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  let maxProduct = 0;

  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
