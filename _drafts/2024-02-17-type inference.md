To focus on showcasing the capabilities of type inference in function and lambda declaration, I'll create an example where a higher-order function is defined that takes a function as an argument and applies it to a list of integers. This example will emphasize how each language handles type inference in the context of function and lambda expressions.

### 1. **C#** (less concise due to explicit delegate or lambda parameter types in certain contexts):
```csharp
List<int> ApplyFunction(List<int> list, Func<int, int> func) => list.Select(func).ToList();
var result = ApplyFunction(new List<int> {1, 2, 3, 4}, x => x * 2);
Console.WriteLine(string.Join(", ", result));
```

### 2. **Go** (limited type inference in function declarations, verbose for higher-order functions):
Go does not support type inference in the way other languages do for function types, and higher-order functions are less idiomatic:
```go
package main

import (
	"fmt"
)

func ApplyFunction(list []int, f func(int) int) []int {
	var result []int
	for _, value := range list {
		result = append(result, f(value))
	}
	return result
}

func main() {
	result := ApplyFunction([]int{1, 2, 3, 4}, func(x int) int { return x * 2 })
	fmt.Println(result)
}
```

### 3. **Rust**:
```rust
fn apply_function<F>(list: Vec<i32>, func: F) -> Vec<i32>
where F: Fn(i32) -> i32 {
    list.into_iter().map(func).collect()
}

fn main() {
    let result = apply_function(vec![1, 2, 3, 4], |x| x * 2);
    println!("{:?}", result);
}
```

### 4. **Swift**:
```swift
func applyFunction(_ list: [Int], _ function: (Int) -> Int) -> [Int] {
    return list.map(function)
}

let result = applyFunction([1, 2, 3, 4]) { $0 * 2 }
print(result)
```

### 5. **Kotlin**:
```kotlin
fun applyFunction(list: List<Int>, function: (Int) -> Int): List<Int> = list.map(function)

val result = applyFunction(listOf(1, 2, 3, 4)) { it * 2 }
println(result)
```

### 6. **TypeScript**:
```typescript
const applyFunction = (list: number[], func: (x: number) => number): number[] => list.map(func);
const result = applyFunction([1, 2, 3, 4], x => x * 2);
console.log(result);
```

### 7. **Python** (most concise with implicit type inference and first-class functions):
```python
def apply_function(list, func):
    return [func(x) for x in list]

result = apply_function([1, 2, 3, 4], lambda x: x * 2)
print(result)
```

In these examples, the focus is on how type inference facilitates the definition of higher-order functions and the use of lambdas. Languages like Python, TypeScript, and Kotlin demonstrate concise syntax and strong type inference capabilities, making them particularly elegant for such constructs. C# and Go, while supporting these patterns, tend to be more verbose, especially when it comes to explicitly declaring types for function parameters and return types. Rust and Swift offer a balance, providing strong type inference capabilities with a slightly more verbose syntax compared to the most concise languages in this list.


To focus on showcasing type inference through variable declarations, function return types, generics, and passing a lambda as a function parameter, let's create a tailored example for each language. The Rust example will be designed first to highlight these features, followed by adaptations for C# and Go, considering the unique capabilities and syntax of each language.

### Rust Example

```rust
fn map_values<F, T, U>(values: Vec<T>, mut func: F) -> Vec<U>
where
    F: FnMut(T) -> U,
{
    values.into_iter().map(|x| func(x)).collect()
}

fn main() {
    let integers = vec![1, 2, 3, 4, 5];
    let strings: Vec<_> = map_values(integers, |x| x.to_string());
    println!("{:?}", strings);
}
```

In this Rust example, `map_values` is a generic function that takes a `Vec<T>`, a lambda that converts each `T` to `U`, and returns a `Vec<U>`. Rust's type inference system automatically deduces the types of `T` and `U` based on the function's usage in `main`. The `Vec<_>` syntax infers the element type of the vector from the context.

### C# Adaptation

```csharp
using System;
using System.Collections.Generic;
using System.Linq;

class Program {
    static List<U> MapValues<T, U>(List<T> values, Func<T, U> func) {
        return values.Select(x => func(x)).ToList();
    }

    static void Main() {
        var integers = new List<int> { 1, 2, 3, 4, 5 };
        var strings = MapValues(integers, x => x.ToString());
        Console.WriteLine(string.Join(", ", strings));
    }
}
```

C# utilizes generics and delegates to achieve a similar outcome. The `MapValues` function is generic and accepts a list of type `T`, along with a `Func<T, U>` representing the lambda function. C#'s type inference deduces the types of `T` and `U` from the usage in `Main`. The `var` keyword infers the variable types.

### Go Adaptation

Go's type system is less expressive with generics (introduced in Go 1.18), and handling functions as parameters is more verbose than in Rust or C#. However, Go can still implement a similar pattern using its interface{} type for generics and function types for lambdas:

```go
package main

import (
	"fmt"
	"strconv"
)

func MapValues[T any, U any](values []T, funcParam func(T) U) []U {
	var result []U
	for _, v := range values {
		result = append(result, funcParam(v))
	}
	return result
}

func main() {
	integers := []int{1, 2, 3, 4, 5}
	strings := MapValues(integers, func(i int) string {
		return strconv.Itoa(i)
	})
	fmt.Println(strings)
}
```

In this Go example, `MapValues` is a generic function that converts a slice of type `T` to a slice of type `U` using a provided function. The example utilizes Go's new type parameters (generics) syntax introduced in Go 1.18. The lambda function is passed as a parameter to `MapValues`, demonstrating how Go can work with higher-order functions, albeit with a more verbose syntax compared to Rust and C#.

Each example demonstrates the language's approach to type inference, generics, and functional programming concepts, tailored to its syntax and type system. Rust and C# provide more concise syntax for these patterns, thanks to their advanced type inference capabilities, while Go's recent introduction of generics still offers a powerful, albeit more verbose, way to achieve similar functionality.