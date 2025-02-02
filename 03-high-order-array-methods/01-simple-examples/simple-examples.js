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

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */

// 0 (is optional) and it is what total starts at.
const reduceDemo = numbers.reduce((total, num) => total + num, 0)

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */

// numbers.forEach(num => console.log(num))

/**
 * find: Returns the first array element that satisfies a specified condition.
 */

const findDemo = numbers.find(num => num > 1)

/**
 * some: Checks if at least one array element satisfies a condition.
 */

const someDemo = numbers.some(num => num % 2 === 0)

/**
 * every: Checks if all array elements satisfy a condition.
 */

const everyDemo = numbers.every(num => num % 2 === 0)
