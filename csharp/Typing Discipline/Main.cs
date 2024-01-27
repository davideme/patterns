public interface IGreetable
{
    string Name { get; }
}

public record Dog(string Name) : IGreetable;

public record Person(string Name) : IGreetable;

public record Bird(string Color, string Name) : IGreetable;

public class Greeter
{
    public static void Greet(IGreetable greetable)
    {
        Console.WriteLine($"Hello, {greetable.Name}!");
    }

    public static void Main(string[] args)
    {
        IGreetable dog = new Dog("Fido");
        IGreetable person = new Person("Fido");
        IGreetable bird = new Bird("red", "Boyd");

        Greeter.Greet(person); // "Hello, Fido!"
        Greeter.Greet(dog);    // "Hello, Fido!"
        Greeter.Greet(bird);   // "Hello, Boyd!"
    }
}
