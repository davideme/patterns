# Popular Imperative Programming Languages

Imperative programming is a programming paradigm that uses statements to change a program's state. This section categorizes popular[^popular1][^popular2][^popular3] imperative programming languages based on their support for Object-oriented programming (OOP), Functional programming, and Concurrent computing.

| Language                 | [Robustness][robustness] | [Effectiveness][effectiveness] |
| ------------------------ | ------------------------ | ------------------------------ |
| [JavaScript][javascript] | Moderate                 | High                           |
| [Python][python]         | High                     | High                           |
| [TypeScript][typescript] | High                     | High                           |
| [Java][java]             | High                     | Moderate                       |
| C#                       | High                     | High                           |
| C++                      | Moderate                 | Moderate                       |
| PHP                      | Moderate                 | Moderate                       |
| C                        | Low                      | Low                            |
| Go                       | High                     | High                           |

## Robustness

See [^software_bug]

### Bug Prevention

#### Typing System and Avoid Typographical Errors
- 👍 **Static Typing** enforces type consistency at compile time. This system helps catch typographical errors early in the development cycle by ensuring that variables and functions adhere to declared types, leading to a more robust and error-resistant codebase. The compiler performs extensive checks for syntax, type correctness, and other potential issues, significantly reducing the risk of typographical errors causing runtime errors.
- 👎 **Dynamic Typing** determines types at runtime, which provides flexibility in coding but increases the risk of typographical errors. These languages rely on runtime checks, which means that errors, including those from typographical mistakes, are detected when the code is executed. This can lead to runtime exceptions if variable names or functions are incorrectly spelled.

| Language   | Typing System |
| ---------- | ------------- |
| JavaScript | Dynamic       |
| Python     | Dynamic       |
| TypeScript | Static        |
| Java       | Static        |
| C#         | Static        |
| C++        | Static        |
| PHP        | Dynamic       |
| C          | Static        |
| Go         | Static        |

#### Testing

##### Unit testing

##### Test-driven development (TDD)

#### Programming language support


| Language   | Strong Typing | Memory Safety | Bounds Checking         | Null Safety | Concurrency Primitives |
| ---------- | ------------- | ------------- | ----------------------- | ----------- | ---------------------- |
| JavaScript | No            | Yes           | Runtime                 | No          | Limited                |
| Python     | No            | Yes           | Runtime                 | No          | Yes                    |
| TypeScript | Yes           | Yes           | Runtime                 | Yes**       | Limited                |
| Java       | Yes           | Yes           | Runtime                 | Yes***      | Yes                    |
| C#         | Yes           | Yes           | Runtime                 | Yes***      | Yes                    |
| C++        | Yes           | No            | Runtime                 | No          | No                     |
| PHP        | No            | Yes           | Runtime                 | No          | Yes                    |
| C          | Yes           | No            | Not standardly enforced | No          | No                     |
| Go         | Yes           | Yes           | Runtime                 | No          | Yes                    |
  
- **Strong Typing:**
 - Prevents implicit conversions between incompatible types, reducing runtime errors due to unexpected type coercions.

- **Memory Safety:**
  - Languages with built-in automatic memory management like garbage collection, ownership or automatic reference counting (ARC)that helps prevent common memory safety issues. C++ and C do not have built-in automatic memory management, making them prone to memory safety issues without careful management(like using smart pointers).

- **Bounds Checking:**
- Bounds checking is a crucial safety mechanism that prevents programs from accessing memory outside the allocated bounds of an array or similar data structures. This feature is essential for avoiding buffer overflows, a common source of security vulnerabilities and program crashes. Runtime checking will prevent buffer overflows but not automtically prevent crashes, this will work of the developer, or using language that have compile time checks like Rust. C does not provide built-in bounds checking, relying on manual checks by the developer or third-party tools for any form of bounds checking.
  
- **Null Safety:**
  - TypeScript (Yes**): TypeScript incorporates null safety features like optional chaining (`?.`) and nullish coalescing (`??`), enhancing safety around `null` and `undefined`. However, these are compile-time checks.
  - Java and C# (Yes***): Both languages have introduced features to address null safety, such as nullable reference types in C# 8.0 and Optional in Java, but require explicit adoption in code.
  
- **Concurrency Primitives:**
  - "Limited" in JavaScript and TypeScript refers to the event loop model and async/await syntax, which are not traditional concurrency models but can handle asynchronous operations. Python, Java, C#, PHP, and Go offer more explicit concurrency support through various constructs like threads, async/await, goroutines, etc.



### Bug Types

#### Resourcing

##### Uninitialized Variables

| Language   | Uninitialized Variables |
| ---------- | ----------------------- |
| JavaScript | Forbidden               |
| Python     | Forbidden               |
| TypeScript | Forbidden               |
| Java       | Forbidden               |
| C#         | Forbidden               |
| C++        | Allowed                 |
| PHP        | Forbidden               |
| C          | Allowed                 |
| Go         | Forbidden               |

  - **Languages Marked "Forbidden"**: For these languages, variables are either automatically initialized to a default value (e.g., `0` for integers, `false` for booleans, `null`/`nil` for object references) or the language requires explicit initialization at the point of declaration. This behavior prevents the use of uninitialized variables, thereby avoiding undefined behavior related to such use.
  
  - **Languages Marked "Allowed" (C and C++)**: These languages allow variables, especially local variables within functions, to be declared without being initialized. Using these uninitialized variables can result in undefined behavior, as their initial values are indeterminate and can contain any bit pattern.


##### Resource leaks

| Language   | Resource Management Mechanism                                                    |
| ---------- | -------------------------------------------------------------------------------- |
| JavaScript | Manual management                                                                |
| Python     | `with` statement for context management                                          |
| TypeScript | Manual management                                                                |
| Java       | `try-with-resources` for automatic resource management                           |
| C#         | `IDisposable` interface with `using` statement for automatic resource management |
| C++        | RAII (Resource Acquisition Is Initialization) for automatic resource management  |
| PHP        | Manual management                                                                |
| C          | Manual management                                                                |
| Go         | `defer` statement for scheduling cleanup operations                              |


[^software_bug]: https://en.wikipedia.org/wiki/Software_bug

## Effectiveness

### Flexibility and Generality
The ability to use the language in a wide variety of programming paradigms and domains. A highly expressive language can elegantly solve problems across different areas without needing to resort to awkward or verbose constructs.

| Language/Paradigm | [Object-oriented programming][oop] | [Functional programming][functional] | Concurrent computing |
| ----------------- | ---------------------------------- | ------------------------------------ | -------------------- |
| JavaScript        | Yes [^ecma-overview]               | Yes [^2]                             | Partial [^3]         |
| Python            | Yes [^4]                           | Yes [^5]                             | Yes [^6]             |
| TypeScript        | Yes [^7]                           | Yes [^typescript-for-functional]     | Partial [^3]         |
| Java              | Yes [^9]                           | Yes [^10]                            | Yes [^11]            |
| C#                | Yes [^12]                          | Yes [^13]                            | Yes [^14]            |
| C++               | Yes [^15]                          | Yes [^16]                            | Yes [^17]            |
| PHP               | Yes [^18]                          | Yes [^19]                            | Partial [^3]         |
| C                 | No [^20]                           | No [^21]                             | Partial [^3]         |
| Go                | Yes [^22]                          | Yes [^23]                            | Yes [^24]            |
| Kotlin            | Yes                                | Yes                                  | Yes                  |

[^ecma-overview]: [ECMAScript® 2023 Language Specification: Overview](https://262.ecma-international.org/14.0/#sec-overview)
[^typescript-for-functional]: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html

### Power of Abstractions
The capability to define and use complex abstractions that accurately model real-world or conceptual entities. This includes features like higher-order functions, generics, and metaprogramming.

### Language Features
Specific constructs provided by the language that contribute to its expressiveness, such as pattern matching, type inference, functional programming constructs, and concise error handling mechanisms.

#### Typing Discipline

The typing discipline of a programming language pertains to the rules used by a compiler to associate a type with a value. The following table compares the typing disciplines of various imperative programming languages, based on technical documentation and scholarly articles.

| Language/Typing | Duck/Nominative/Structural      | Manifest/Inferred           |
| --------------- | ------------------------------- | --------------------------- |
| JavaScript      | Duck [^27]                      | Inferred [^28]              |
| Python          | Duck [^31]                      | Inferred [^32]              |
| TypeScript      | Duck and Structural [^35]       | Manifest and Inferred [^36] |
| Java            | Nominative [^39]                | Manifest [^40]              |
| C#              | Nominative [^43]                | Partially Inferred [^44]    |
| C++             | Nominative [^47]                | Partially Inferred [^48]    |
| PHP             | Nominative [^51]                | Inferred [^52]              |
| C               | Nominative [^55]                | Manifest [^56]              |
| Go              | Nominative and Structural [^59] | Inferred [^60]              |



#### Features

| Language   | Error Handling | Collection Manipulation | Composition with delegation                         |
| ---------- | -------------- | ----------------------- | --------------------------------------------------- |
| JavaScript | Exception      | Yes                     | mixins and traits                                   |
| Python     | Exception      | Yes                     | mixins                                              |
| TypeScript | Exception      | Yes                     | mixins                                              |
| Java       | Exception      | Yes                     | interfaces default methods[^java-interface-default] |
| C#         | Exception      | Yes                     | default interface methods[^C#-interface-default]    |
| C++        | Exception      | Yes                     | mixins using template                               |
| PHP        | Exception      | No                      | traits                                              |
| C          | No             | Yes                     | No                                                  |
| Go         | Error          | Yes                     | Embedding                                           |

[^java-interface-default]: https://docs.oracle.com/javase/tutorial/java/IandI/defaultmethods.html
[^C#-interface-default]: https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/proposals/csharp-8.0/default-interface-methods


# Popular Declarative Programming Languages

Declarative programming is a paradigm that expresses the logic of a computation without describing its control flow. Common examples of declarative programming languages include HTML, CSS, and SQL, as noted in various technical references.

- HTML [^61]
- CSS [^62]
- SQL [^63]

---

Footnotes and References:

[^popular1]: [Stack Overflow 2023 Developer Survey: Most popular technologies by Professional Developers](https://survey.stackoverflow.co/2023/#most-popular-technologies-language-prof)
[^popular2]: [Github The state of the Octoverse 2023: The most popular programming languages](https://github.blog/2023-11-08-the-state-of-open-source-and-ai/#the-most-popular-programming-languages)
[^popular3]: [TIOBE Index](https://www.tiobe.com/tiobe-index/)

[javascript]: ./javascript/README.md
[python]: ./python/README.md
[typescript]: ./typescript/README.md
[java]: ./java/README.md

[robustness]: #robustness
[effectiveness]: #effectiveness


[oop]: ./ObjectOriented.md
[functional]: ./FunctionalProgramming.md
