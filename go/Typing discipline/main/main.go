package main

import (
	"fmt"
)

// Greetable is an interface that requires a GetName method
type Greetable interface {
	GetName() string
}

// Dog struct with a Name field
type Dog struct {
	Name string
}

// GetName returns the name of the Dog
func (d Dog) GetName() string {
	return d.Name
}

// Person struct with a Name field
type Person struct {
	Name string
}

// GetName returns the name of the Person
func (p Person) GetName() string {
	return p.Name
}

// Bird struct with Name and Color fields
type Bird struct {
	Name  string
	Color string
}

// GetName returns the name of the Bird
func (b Bird) GetName() string {
	return b.Name
}

// Greeter greets a Greetable
func Greeter(g Greetable) {
	fmt.Println("Hello, " + g.GetName() + "!")
}

func main() {
	dog := Dog{Name: "Fido"}
	person := Person{Name: "Fido"}
	bird := Bird{Name: "Boyd", Color: "red"}

	Greeter(dog)
	Greeter(person)
	Greeter(bird)
}
