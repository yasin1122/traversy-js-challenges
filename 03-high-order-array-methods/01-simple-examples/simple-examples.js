const numbers = [1, 2, 3, 4, 5]

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */

// arr = initial array, index and arr are optional here
const mapDemo = numbers.map((num, index, arr) => num + index)

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */

const filterDemo = numbers.filter(num => num % 2 !== 0)
console.log(filterDemo)

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */

// 0 is what total starts at.
const reduceDemo = numbers.reduce((total, num) => total + num, 0)
console.log(reduceDemo)

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */

/**
 * find: Returns the first array element that satisfies a specified condition.
 */

/**
 * some: Checks if at least one array element satisfies a condition.
 */

/**
 * every: Checks if all array elements satisfy a condition.
 */
