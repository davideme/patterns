(() => {
  interface Greetable {
    name: string
  }

  class Dog implements Greetable {
    name: string
    constructor (name: string) {
      this.name = name
    }
  }

  class Person implements Greetable {
    name: string
    constructor (name: string) {
      this.name = name
    }
  }

  class Bird implements Greetable {
    name: string
    color: string
    constructor (color: string, name: string) {
      this.color = color
      this.name = name
    }
  }

  const dog = new Dog('Fido')
  const person = new Person('Fido')
  const bird = new Bird('red', 'Boyd')

  function greet (greetable: Greetable): void {
    console.log('Hello, ' + greetable.name + '!')
  }

  greet(person) // "Hello, Fido!"
  greet(dog) // "Hello, Fido!"
  greet(bird) // "Hello, Boyd!"
})()
