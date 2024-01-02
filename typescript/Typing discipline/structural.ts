(() => {

    interface Greetable {
        name: string;
    }

    class Dog {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
    }

    class Person {
        // name: string;
        constructor(name: string) {
            // this.name = name;
        }
    }

    class Bird {
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

    // Greeter.greet(person); Argument of type 'Person' is not assignable to parameter of type 'Greetable'.  Property 'name' is missing in type 'Person' but required in type 'Greetable'.ts(2345)
    Greeter.greet(dog);    // "Hello, Fido!"
    Greeter.greet(bird);   // "Hello, Boyd!"    
})();