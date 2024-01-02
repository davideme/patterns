package greeting

import "fmt"

type Namer interface {
	GetName() string
}

func Greeter(g Namer) {
	fmt.Println("Hello, " + g.GetName() + "!")
}
