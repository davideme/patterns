class Dog {
    constructor(name) {
        this.name = name;
    }
}

class Person {
    constructor(name) {
        // this.name = name;
    }
}

class Bird {
    constructor(color, name) {
        this.color = color;
        this.name = name;
    }
}

const dog = new Dog("Fido");
const person = new Person("Fido");
const bird = new Bird("red", "Boyd");

class Greeter {
    static greet(greetable) {
        console.log("Hello, " + greetable.name + "!");
    }
}

Greeter.greet(person);
Greeter.greet(dog);
Greeter.greet(bird);