# Functional programming

## higher-order functions

| Language/Paradigm | Higher-order functions | Currying                |
| ----------------- | ---------------------- | ----------------------- |
| JavaScript        | ✅                     | via anonymous functions |
| Python            | ✅                     | via anonymous functions |
| Typescript        | ✅                     | via anonymous functions |
| Java              | ✅                     | via anonymous functions |
| C#                | ✅                     | via anonymous functions |
| C++               | ✅                     | via anonymous functions |
| PHP               | ✅                     | via anonymous functions |
| Go                | ✅                     | via anonymous functions |

## Pure functions

None of these languages support Pure functions


## Recursion
| Language/Paradigm | Tail recursion | folds                                      | unfolds |
| ----------------- | -------------- | ------------------------------------------ | ------- |
| JavaScript        | ❌             | .reduce() method on arrays                 | ❌      |
| Python            | ❌             | functools.reduce() function on iterables   | ❌      |
| Typescript        | ❌             | .reduce() method on arrays                 | ❌      |
| Java              | ❌             | .reduce() method on streamable collections | ❌      |
| C#                | ❌             | .Aggregate() method on collections         | ❌      |
| C++               | ✅             | std::accumulate on sequences.              | ❌      |
| PHP               | ❌             | array_reduce() on array                    | ❌      |
| Go                | ❌             | ❌                                         | ❌      |


## Type systems

They all support Product Types via Class, Record or Struct.

| Language/Paradigm | Sum types                      | Pattern Matching                  | Dependent types              |
| ----------------- | ------------------------------ | --------------------------------- | ---------------------------- |
| JavaScript        | ❌                             | ❌                                | ❌                           |
| Python            | ✅since 3.5 with typing.Union  | ✅since 3.10 with match statement | ❌                           |
| Typescript        | ✅discriminated unions         | switch-case with shared field.    | some type-level computations |
| Java              | Simulated via Sealed Interface | since Java 21                     | ❌                           |
| C#                | Simulated via Sealed Class     | since C# 9.0                      | some type-level computations |
| C++               | since C++17 with std::variant  | since C++17 with std::visit       | some type-level computations |
| PHP               | ❌                             | ❌                                | ❌                           |
| Go                | ❌                             | ❌                                | ❌                           |
