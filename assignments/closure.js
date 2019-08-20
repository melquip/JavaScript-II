// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function even() {
	return numbers.filter((num) => num % 2 === 0);
}
const closureTest = even();
console.log('closureTest:', closureTest);

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
	// IMPLEMENTATION OF counterMaker:
	// 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
	// 2- Declare a function `counter`. It should increment and return `count`.
	//      NOTE: This `counter` function, being nested inside `counterMaker`,
	//      "closes over" the `count` variable. It can "see" it in the parent scope!
	// 3- Return the `counter` function.
	let count = 0;
	let limit = 5; // challenge 3
	function counter() {
		count++;
		if (count > limit) { // challenge 3
			count = 1;
			console.log('counter was reset for going over the limit of ' + limit);
		}
		console.log('Counter changed to:', count);
		return count;
	}
	return counter;
};
// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2
const myCounter = counterMaker();
myCounter(); // 1
myCounter(); // 2
myCounter(); // 3
myCounter(); // 4
myCounter(); // 5
myCounter(); // 6 -> 1

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
	// Return an object that has two methods called `increment` and `decrement`.
	// `increment` should increment a counter variable in closure scope and return it.
	// `decrement` should decrement the counter variable and return it.
	let counter = 0;
	return {
		increment: function () {
			counter++;
			console.log('counterFactory incremented:', counter);
			return counter;
		},
		decrement: function () {
			counter--;
			console.log('counterFactory decremented:', counter);
			return counter;
		},
	};
};

const myCounterFactory = counterFactory();
myCounterFactory.increment();
myCounterFactory.decrement();
myCounterFactory.increment();
myCounterFactory.increment();
myCounterFactory.decrement();