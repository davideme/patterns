# Popular Imperative Programming Languages

Imperative programming is a programming paradigm that uses statements to change a program's state. This section categorizes popular[^popular1][^popular2][^popular3] imperative programming languages based on their support for Object-oriented programming (OOP), Functional programming, and Concurrent computing.

## Paradigm

| Language/Paradigm        | [Object-oriented programming][oop] | [Functional programming][functional] | Concurrent computing |
| ------------------------ | ---------------------------------- | ------------------------------------ | -------------------- |
| [JavaScript][javascript] | Yes [^ecma-overview]               | Yes [^2]                             | Partial [^3]         |
| Python                   | Yes [^4]                           | Yes [^5]                             | Yes [^6]             |
| [TypeScript][typescript] | Yes [^7]                           | Yes [^typescript-for-functional]     | Partial [^3]         |
| Java                     | Yes [^9]                           | Yes [^10]                            | Yes [^11]            |
| C#                       | Yes [^12]                          | Yes [^13]                            | Yes [^14]            |
| C++                      | Yes [^15]                          | Yes [^16]                            | Yes [^17]            |
| PHP                      | Yes [^18]                          | Yes [^19]                            | Partial [^3]         |
| C                        | No [^20]                           | No [^21]                             | Partial [^3]         |
| Go                       | Yes [^22]                          | Yes [^23]                            | Yes [^24]            |
| Kotlin                   | Yes                                | Yes                                  |                      |

[^ecma-overview]: [ECMAScript® 2023 Language Specification: Overview](https://262.ecma-international.org/14.0/#sec-overview)
[^typescript-for-functional]https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html

## Typing Discipline

The typing discipline of a programming language pertains to the rules used by a compiler to associate a type with a value. The following table compares the typing disciplines of various imperative programming languages, based on technical documentation and scholarly articles.

| Language/Typing | Static/Dynamic | Strong/Weak  | Duck/Nominative/Structural      | Manifest/Inferred           |
| --------------- | -------------- | ------------ | ------------------------------- | --------------------------- |
| JavaScript      | Dynamic [^25]  | Weak [^26]   | Duck [^27]                      | Inferred [^28]              |
| Python          | Dynamic [^29]  | Strong [^30] | Duck [^31]                      | Inferred [^32]              |
| TypeScript      | Static [^33]   | Strong [^34] | Duck and Structural [^35]       | Manifest and Inferred [^36] |
| Java            | Static [^37]   | Strong [^38] | Nominative [^39]                | Manifest [^40]              |
| C#              | Static [^41]   | Strong [^42] | Nominative [^43]                | Partially Inferred [^44]    |
| C++             | Static [^45]   | Strong [^46] | Nominative [^47]                | Partially Inferred [^48]    |
| PHP             | Dynamic [^49]  | Weak [^50]   | Nominative [^51]                | Inferred [^52]              |
| C               | Static [^53]   | Weak [^54]   | Nominative [^55]                | Manifest [^56]              |
| Go              | Static [^57]   | Strong [^58] | Nominative and Structural [^59] | Inferred [^60]              |

## Features

| Language   | Non-nullable Types | Error Handling | Collection Manipulation | Resources Releasing | Composition with delegation                         |
| ---------- | ------------------ | -------------- | ----------------------- | ------------------- | --------------------------------------------------- |
| JavaScript | No                 | Exception      | Yes                     | N/A                 | mixins and traits                                   |
| Python     | No                 | Exception      | Yes                     | No                  | mixins                                              |
| TypeScript | Yes                | Exception      | Yes                     | N/A                 | mixins                                              |
| Java       | Yes*               | Exception      | Yes                     | Yes                 | interfaces default methods[^java-interface-default] |
| C#         | Yes                | Exception      | Yes                     | Yes                 | default interface methods[^C#-interface-default]    |
| C++        | No                 | Exception      | Yes                     | Yes                 | mixins using template                               |
| PHP        | No                 | Exception      | No                      | No                  | traits                                              |
| C          | N/A                | No             | Yes                     | Yes                 | No                                                  |
| Go         | No                 | Error          | Yes                     | Yes                 | Embedding                                           |

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
[typescript]: ./typescript/README.md

[oop]: ./ObjectOriented.md
[functional]: ./FunctionalProgramming.md
