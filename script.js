// String Manipulation Functions

// Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Count Characters
function countCharacters(str) {
  return str.length;
}

// Capitalize Words
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Array Functions

// Find Maximum and Minimum
function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

// Sum of Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Filter Array
function filterArray(arr, condition) {
  return arr.filter(condition);
}

// Mathematical Functions

// Factorial
function factorial(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}

// Prime Number Check
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Fibonacci Sequence
function generateFibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}

// Function Calls with Examples

// String Manipulation Examples
console.log(reverseString("hello")); // Output: "olleh"
console.log(countCharacters("hello world")); // Output: 11
console.log(capitalizeWords("hello world")); // Output: "Hello World"

// Array Functions Examples
const sampleArray = [3, 7, 1, 9, 5];

console.log(findMax(sampleArray)); // Output: 9
console.log(findMin(sampleArray)); // Output: 1
console.log(sumArray(sampleArray)); // Output: 25
console.log(filterArray(sampleArray, (num) => num > 5)); // Output: [7, 9]

// Mathematical Functions Examples
console.log(factorial(5)); // Output: 120
console.log(isPrime(7)); // Output: true
console.log(generateFibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]
