#include <iostream>
#include <string>

// Interface equivalent in C++
class IGreetable {
public:
    virtual std::string GetName() const = 0;
    virtual ~IGreetable() = default; // Virtual destructor for proper cleanup
};

// Dog class implementing the IGreetable interface
class Dog : public IGreetable {
private:
    std::string name;

public:
    Dog(const std::string& name) : name(name) {}

    std::string GetName() const override {
        return name;
    }
};

// Person class implementing the IGreetable interface
class Person : public IGreetable {
private:
    std::string name;

public:
    Person(const std::string& name) : name(name) {}

    std::string GetName() const override {
        return name;
    }
};

// Bird class implementing the IGreetable interface
class Bird : public IGreetable {
private:
    std::string color;
    std::string name;

public:
    Bird(const std::string& color, const std::string& name) : color(color), name(name) {}

    std::string GetName() const override {
        return name;
    }
};

// Greeter class with a static greet function
class Greeter {
public:
    static void Greet(const IGreetable& greetable) {
        std::cout << "Hello, " << greetable.GetName() << "!" << std::endl;
    }
};

// Main function to demonstrate the functionality
int main() {
    Dog dog("Fido");
    Person person("Fido");
    Bird bird("red", "Boyd");

    Greeter::Greet(person);
    Greeter::Greet(dog);
    Greeter::Greet(bird);

    return 0;
}
