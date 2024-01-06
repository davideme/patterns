package main

import "fmt"

func twice(f func(int) int) func(int) int {
    return func(x int) int {
        return f(f(x))
    }
}

func plusThree(i int) int {
    return i + 3
}

func main() {
    plusSix := twice(plusThree)
    fmt.Println(plusSix(7))  // 13
}
