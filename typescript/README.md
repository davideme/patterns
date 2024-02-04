# TypeScript

## Robustness

### Bug Prevention

#### Typing System and Typographical Error Prevention

- 👍 **Static Typing** enforces type consistency at compile time. This system helps catch typographical errors early in the development cycle by ensuring that variables and functions adhere to declared types, leading to a more robust and error-resistant codebase. The compiler performs extensive checks for syntax, type correctness, and other potential issues, significantly reducing the risk of typographical errors causing runtime errors.

| Typing System |
| ------------- |
| Static        |

#### Programming language support

Presents a comparative overview of language features such as strong typing, memory safety, bounds checking, null safety, and concurrency primitives.

| Strong Typing | Memory Safety | Bounds Checking | Null Safety | Concurrency Primitives |
| ------------- | ------------- | --------------- | ----------- | ---------------------- |
| Yes           | Yes           | Runtime         | Yes**       | Limited                |

- **Strong Typing:**
  - Prevents implicit conversions between incompatible types, reducing runtime errors due to unexpected type coercions.

- **Memory Safety:**
  - Languages with built-in automatic memory management like garbage collection, ownership or automatic reference counting (ARC) that helps prevent common memory safety issues.

- **Bounds Checking:**
  - Bounds checking prevents programs from accessing memory outside the allocated bounds of an array or similar data structures, essential for avoiding buffer overflows.

- **Null Safety:**
  - TypeScript incorporates null safety features like optional chaining (`?.`) and nullish coalescing (`??`), enhancing safety around `null` and `undefined`. However, these are compile-time checks.

- **Concurrency Primitives:**
  - "Limited" in TypeScript refers to the event loop model and async/await syntax, which are not traditional concurrency models but can handle asynchronous operations.

#### Resourcing

##### Uninitialized Variables

| Uninitialized Variables |
| ----------------------- |
| Forbidden               |

  - **Languages Marked "Forbidden"**: Variables are either automatically initialized to a default value or the language requires explicit initialization at the point of declaration, preventing the use of uninitialized variables.

##### Resource leaks

| Language   | Resource Management Mechanism |
| ---------- | ----------------------------- |
| TypeScript | Manual management             |

## Effectiveness

### Flexibility and Generality

| [Object-oriented programming][oop] | [Functional programming][functional] | Concurrent computing |
| ---------------------------------- | ------------------------------------ | -------------------- |
| Yes [^7]                           | Yes [^typescript-for-functional]     | Partial [^3]         |

### Language Features

#### Typing Discipline

| Duck/Nominative/Structural | Manifest/Inferred           |
| -------------------------- | --------------------------- |
| Duck and Structural [^35]  | Manifest and Inferred [^36] |

#### Features

| Error Handling | List comprehension | Composition with delegation |
| -------------- | ------------------ | --------------------------- |
| Exception      | Yes                | mixins                      |

##### List comprehension

```typescript
const ns = Array.from({length: 100}, (_, i) => i)
                .filter(x => x * x > 3)
                .map(x => x * 2);
```

---

Footnotes and References:

[^typescript-for-functional]: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html

[oop]: ./ObjectOriented.md
[functional]: ./FunctionalProgramming.md
