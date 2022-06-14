const add = function(a, b) {
	return (a+b);
};

const subtract = function (a, b) {
	return (a - b);	
};

const sum = function (a) {
	let b = 0;
	for (let i = 0; i < a.length; i++) {
		b += a[i];
	}
	return b;
};

const multiply = function(array) {
	let a = 0;

	a = array[0];
	for (let i = 0; i < (array.length-1); i++) {
		a = a * array[i + 1];
	}
	return a;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function (a) {
	if (a == 0) return 1;
	let x = 1;
	for (let i = a; i > 0; i--) {
		x = x * i;
    }
	return x;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
