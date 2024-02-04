# Go

## Robustness

The [robustness][^software_bug] of a programming language can be influenced by its approach to error prevention and handling.

### Bug Prevention

### Typing System and Typographical Error Prevention

- 👍 **Static Typing**
  - Go uses static typing, enforcing type consistency at compile time. This helps catch typographical and type-related errors early in the development cycle, leading to a more robust and error-resistant codebase. The Go compiler performs extensive checks for syntax, type correctness, and other potential issues.

| Language | Typing System |
| -------- | ------------- |
| Go       | Static        |

### Programming Language Support

Go is highlighted for its support in several areas critical to software robustness and development efficiency:

| Language | Strong Typing | Memory Safety | Bounds Checking | Null Safety | Concurrency Primitives |
| -------- | ------------- | ------------- | --------------- | ----------- | ---------------------- |
| Go       | Yes           | Yes           | Runtime         | No          | Yes                    |

- **Strong Typing:** Prevents implicit conversions between incompatible types in Go, reducing runtime errors due to unexpected type coercions.
- **Memory Safety:** Go features built-in automatic memory management, such as garbage collection, to help prevent common memory safety issues.
- **Bounds Checking:** Go performs bounds checking at runtime to prevent buffer overflows, a common source of security vulnerabilities.
- **Concurrency Primitives:** Go offers rich support for concurrency through goroutines and channels, making concurrent programming more accessible and safer.

### Bug Types

#### Resourcing

| Language | Uninitialized Variables |
| -------- | ----------------------- |
| Go       | Forbidden               |

  - In Go, variables are automatically initialized to a zero value of their type if not explicitly initialized, preventing the use of uninitialized variables.

#### Resource Leaks

| Language | Resource Management Mechanism                       |
| -------- | --------------------------------------------------- |
| Go       | `defer` statement for scheduling cleanup operations |

  - The `defer` statement in Go is used to ensure that cleanup operations are performed, such as closing files or releasing resources, thereby helping to prevent resource leaks.

## Effectiveness

Evaluates languages based on their versatility in various programming paradigms.

### Language Features

Go is recognized for its approach to error handling, collection manipulation, and composition with delegation:

| Language | Error Handling | List comprehension | Composition with delegation |
| -------- | -------------- | ------------------ | --------------------------- |
| Go       | Error          | No                | Embedding                   |

##### List comprehension

```go
package main

import "fmt"

func main() {
    var ns []int // Create a slice to store the result

    // Generate numbers, filter, and map
    for x := 0; x < 100; x++ {
        if x*x > 3 {
            ns = append(ns, x*2)
        }
    }

    fmt.Println(ns)
}
```

- **Error Handling:** Go prefers explicit error handling over exceptions, encouraging developers to deal with errors as part of the normal control flow.
- **Collection Manipulation:** Go provides built-in support for manipulating slices and maps, which are fundamental for working with collections.
- **Composition with Delegation:** Go uses a composition model through embedding, allowing one struct to include another as a means of extending its functionality.

This summary extracts the segments directly relevant to Go, providing a focused overview of Go's features and advantages in the context of software robustness, error prevention, and programming language support.