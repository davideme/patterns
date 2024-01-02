package record;

interface Greetable {
    String name();  // Interface method matching the record's field name accessor
}

record Dog(String name) implements Greetable {}

record Person(String name) implements Greetable {}

record Bird(String color, String name) implements Greetable {}

public class Greeter {
    public static void greet(Greetable greetable) {
        System.out.println("Hello, " + greetable.name() + "!");
    }

    public static void main(String[] args) {
        Greetable dog = new Dog("Fido");
        Greetable person = new Person("Fido");
        Greetable bird = new Bird("red", "Boyd");

        Greeter.greet(person); // "Hello, Fido!"
        Greeter.greet(dog);    // "Hello, Fido!"
        Greeter.greet(bird);   // "Hello, Boyd!"
    }
}
