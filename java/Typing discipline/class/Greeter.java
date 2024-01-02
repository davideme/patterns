interface Greetable {
    String getName();
}

class Dog implements Greetable {
    private String name;

    public Dog(String name) {
        this.name = name;
    }

    @Override
    public String getName() {
        return name;
    }
}

class Person implements Greetable {
    private String name;

    public Person(String name) {
        this.name = name;
    }

    @Override
    public String getName() {
        return name;
    }
}

class Bird implements Greetable {
    private String name;
    private String color;

    public Bird(String color, String name) {
        this.color = color;
        this.name = name;
    }

    @Override
    public String getName() {
        return name;
    }
}

public class Greeter {
    public static void greet(Greetable greetable) {
        System.out.println("Hello, " + greetable.getName() + "!");
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
