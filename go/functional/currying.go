package main

import "fmt"

func add(a int) func(int) int {
	return func(b int) int {
		return a + b
	}
}

func main() {
	addFive := add(5)
	fmt.Println(addFive(3)) // 8
}
