<?php

interface Greetable {
    public function getName(): string;
}

class Dog implements Greetable {
    private string $name;

    public function __construct(string $name) {
        $this->name = $name;
    }

    public function getName(): string {
        return $this->name;
    }
}

class Person implements Greetable {
    private string $name;

    public function __construct(string $name) {
        $this->name = $name;
    }

    public function getName(): string {
        return $this->name;
    }
}

class Bird implements Greetable {
    private string $name;
    private string $color;

    public function __construct(string $color, string $name) {
        $this->color = $color;
        $this->name = $name;
    }

    public function getName(): string {
        return $this->name;
    }
}

class Greeter {
    public static function greet(Greetable $greetable): void {
        echo "Hello, " . $greetable->getName() . "!" . PHP_EOL;
    }
}

$dog = new Dog("Fido");
$person = new Person("Fido");
$bird = new Bird("red", "Boyd");

Greeter::greet($person); // "Hello, Fido!"
Greeter::greet($dog);    // "Hello, Fido!"
Greeter::greet($bird);   // "Hello, Boyd!"
