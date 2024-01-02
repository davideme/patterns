(() => {

    interface Greetable {
        name: string;
    }

    class Dog implements Greetable {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
    }

    class Person implements Greetable {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
    }

    class Bird implements Greetable {
        name: string;
        color: string;
        constructor(color: string, name: string) {
            this.color = color;
            this.name = name;
        }
    }

    const dog = new Dog("Fido");
    const person = new Person("Fido");
    const bird = new Bird("red", "Boyd");

    class Greeter {
        static greet(greetable: Greetable) {
            console.log("Hello, " + greetable.name + "!");
        }
    }

    Greeter.greet(person); // "Hello, Fido!"
    Greeter.greet(dog);    // "Hello, Fido!"
    Greeter.greet(bird);   // "Hello, Boyd!"    
})();