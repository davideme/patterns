class CarBuilder {
  color: string = ''
  wheels: number = 0

  setColor (color: string): CarBuilder {
    this.color = color
    return this
  }

  setWheels (wheels: number): CarBuilder {
    this.wheels = wheels
    return this
  }

  build (): Car {
    return new Car(this)
  }
}

class Car {
  private readonly color: string
  private readonly wheels: number

  constructor (builder: CarBuilder) {
    this.color = builder.color
    this.wheels = builder.wheels
  }

  getDescription (): string {
    return `Car: ${this.color} color, ${this.wheels} wheels`
  }
}

// Usage
const car = new CarBuilder()
  .setColor('red')
  .setWheels(4)
  .build()

console.log(car.getDescription())
