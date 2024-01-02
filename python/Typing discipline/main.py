class Dog:
    def __init__(self, name):
        self.name = name

class Person:
    def __init__(self, name):
        # self.name = name
        pass

class Bird:
    def __init__(self, color, name):
        self.color = color
        self.name = name

dog = Dog("Fido")
person = Person("Fido")
bird = Bird("red", "Boyd")

class Greeter:
    @staticmethod
    def greet(greetable):
        if hasattr(greetable, 'name'):
            print("Hello, " + greetable.name + "!")
        else:
            print("Hello, unknown entity!")

Greeter.greet(person)
Greeter.greet(dog)
Greeter.greet(bird)
