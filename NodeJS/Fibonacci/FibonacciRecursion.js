/**
 * @description   Fibonacci Sequence With Recursion
 * @example       0, 1, 1, 2, 3, 5, 8, ...
 * @param         (int) val 
 * @returns       (int)
 */
const FibonacciRecursion = val => {
  if (val === 0) return 0
  if (val === 1) return 1
  return FibonacciRecursion(val - 1) + FibonacciRecursion(val - 2)
}

// Test Values //
console.log(FibonacciRecursion(0)) // 0
console.log(FibonacciRecursion(1)) // 1
console.log(FibonacciRecursion(2)) // 1
console.log(FibonacciRecursion(3)) // 2
console.log(FibonacciRecursion(4)) // 3
console.log(FibonacciRecursion(5)) // 5