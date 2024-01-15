// Expression as a higher-order function type
type Expression = (context: string) => boolean

// Terminal Expression
const terminalExpression = (literal: string): Expression => {
  return (context: string): boolean => context.includes(literal)
}

// Nonterminal Expression
const orExpression = (expr1: Expression, expr2: Expression): Expression => {
  return (context: string): boolean => expr1(context) || expr2(context)
}

// Usage
const isProgrammingLanguage = orExpression(
  terminalExpression('TypeScript'),
  terminalExpression('JavaScript')
)

const context = 'I love TypeScript'
console.log(`Does the context mention a programming language? ${isProgrammingLanguage(context) ? 'yes' : 'no'}`)
