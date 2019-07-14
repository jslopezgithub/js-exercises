// Write a function that replaces an element in an array
// The function must:
// - get the index of the first item matching `valueToReplace`
// - insert `newValue` at that index
// - NOT change the original array
// - return a new array with the replacement value inserted

function replace(arr, valueToReplace, newValue) {
  /*
  var newArray = [...arr];

  var index = arr.indexOf(valueToReplace);
  if (index != -1) {
    newArray[index] = newValue;
  }

  return newArray; // complete this statement
  */
  numbers.splice(numbers.indexOf(valueToReplace), 1, newValue);
  return numbers; // complete this statement

}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var numbers = [1, 3, 3];
var names = ["Irina", "Ashleigh", "Mozafar"];

var newNumbers = replace(numbers, 3, 2);
<<<<<<< HEAD
var newNames = replace(numbers, "Ashleigh", "Rares");
=======
var newNames = replace(names, "Ashleigh", "Rares");
>>>>>>> master

console.log(numbers);
console.log(newNumbers);
console.log(names);
console.log(newNames);

/* 
  EXPECTED RESULT
  ---------------
  [1, 3, 3]
  [1, 2, 3]
  [Irina, Ashleigh, Mozafar]
  [Irina, Rares, Mozafar]
*/
