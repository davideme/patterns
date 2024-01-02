package main

import (
	"github.com/davideme/patterns/typing/entities"
	"github.com/davideme/patterns/typing/greeting"
)

func main() {
	dog := entities.Dog{Name: "Fido"}
	person := entities.Person{Name: "Fido"}
	bird := entities.Bird{Name: "Boyd", Color: "red"}

	greeting.Greeter(dog)
	greeting.Greeter(person)
	greeting.Greeter(bird)
}
