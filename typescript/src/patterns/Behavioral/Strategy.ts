// Strategy as a Higher-Order Function Type
type Strategy = (num1: number, num2: number) => number

// Concrete Strategies as Functions
const operationAdd: Strategy = (num1, num2) => num1 + num2
const operationSubtract: Strategy = (num1, num2) => num1 - num2
const operationMultiply: Strategy = (num1, num2) => num1 * num2

// Context as a Function
function executeStrategy (strategy: Strategy, num1: number, num2: number): number {
  return strategy(num1, num2)
}

// Usage
console.log(`10 + 5 = ${executeStrategy(operationAdd, 10, 5)}`)
console.log(`10 - 5 = ${executeStrategy(operationSubtract, 10, 5)}`)
console.log(`10 * 5 = ${executeStrategy(operationMultiply, 10, 5)}`)
