function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

// Example usage:
console.log(minMax([1, 2, 3, 4, 5])); // Outputs: [1, 5]
console.log(minMax([2334454, 5])); // Outputs: [5, 2334454]
console.log(minMax([1])); // Outputs: [1, 1]
console.log(minMax([])); // Outputs: [Infinity, -Infinity]
console.log(minMax([1, 2, 3, 4, 5, -1])); // Outputs: [-1, 5]

function sumOfCubes(arr) {
    return arr.reduce((sum, num) => sum + Math.pow(num, 3), 0);
}

// Example usage:
console.log(sumOfCubes([1, 5, 9])); // Outputs: 855
console.log(sumOfCubes([3, 4, 5])); // Outputs: 216
console.log(sumOfCubes([2]));       // Outputs: 8
console.log(sumOfCubes([]));        // Outputs: 0
console.log(sumOfCubes([0]));       // Outputs: 0
function sumOfCubes(arr) {
    return arr.reduce((sum, num) => sum + Math.pow(num, 3), 0);
}
function filterArray(arr) {
    return arr.filter(item => typeof item === "number" && item >= 0);
}

// Testing the function:
console.log(filterArray([1, "hello", 5, -2, "world", 0])); // Outputs: [1, 5, 0]
console.log(filterArray([100, "JavaScript", 42]));        // Outputs: [100, 42]
console.log(filterArray(["apple", "banana", "cherry"]));  // Outputs: []