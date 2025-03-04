// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we will use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  firstItem(items, item => console.log(`I love my ${item}!`));
  // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    console.log(`this ${article} is worth a million dollars!`);
  };

  firstItem(items, logExorbitantPrice);
  // "this Pencil is worth a million dollars!"
*/

function testCB(param) {
  console.log('passed through callback');
  return param;
}

function getLength(arr, cb) {
	// getLength passes the length of the array into the callback.
	return cb(arr.length);
}
console.log('getLength:', getLength(items, testCB));

function last(arr, cb) {
	// last passes the last item of the array into the callback.
	return cb(arr[arr.length - 1]);
}
console.log('last:', last(items, testCB));

function sumNums(x, y, cb) {
	// sumNums adds two numbers (x, y) and passes the result to the callback.
	return cb(x + y);
}
console.log('sumNums:', sumNums(2, 3, testCB));

function multiplyNums(x, y, cb) {
	// multiplyNums multiplies two numbers and passes the result to the callback.
	return cb(x * y);
}
console.log('multiplyNums:', multiplyNums(2, 3, testCB));

function contains(item, list, cb) {
	// contains checks if an item is present inside of the given array/list.
	// Pass true to the callback if it is, otherwise pass false.
	//list.find((listItem) => listItem === item) === item
	return cb(list.includes(item));
}
console.log('contains:', contains('Pencil', items, testCB));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
	// removeDuplicates removes all duplicate values from the given array.
	// Pass the duplicate free array to the callback function.
	// Do not mutate the original array.
	// can't use unique.push(arrItem)
	return cb(array.reduce((unique, arrItem) => unique.includes(arrItem) ? unique : [...unique, arrItem], []));
}
console.log('removeDuplicates:', removeDuplicates([1, 1, 2, 2, 3, 3, 3], testCB));





// STRETCH IIFE - Immediately Invoked Function Expression 
// test
const globalNumbers = [9,8,7,6,5,4,3,2,1];
(function() {
  globalNumbers.sort();
})();
console.log('globalNumbers were changed by an IIFE: ', globalNumbers);