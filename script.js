function squareDigits(num) {
  let str = num.toString();
  let digits = str.split("");
  let squaredDigits = digits.map((digit) => Math.pow(parseInt(digit), 2));
  return parseInt(squaredDigits.join(""));
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function digitMagic(num) {
  let squaredDigits = squareDigits(num);
  let reversedString = reverseString(squaredDigits.toString());
  let reversedNum = parseInt(reversedString);
  return reversedNum;
}

// Get user input using prompt
const input = prompt("Enter a number:");

// Check if input is a valid number
if (isNaN(input)) {
  alert("Please enter a valid number.");
} else {
  let num = parseInt(input);
  let result = digitMagic(num);
  alert(`The result is: ${result}`);
}
