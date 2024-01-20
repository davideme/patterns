// Interface for client classes
interface Movable {
  setPosition: (x: number, y: number) => void
  getPosition: () => { x: number, y: number }
}

// Servant class
class MovementServant {
  moveTo (movable: Movable, x: number, y: number): void {
    movable.setPosition(x, y)
  }

  // Other methods can be added to facilitate different functionalities
}

// Client class
class Circle implements Movable {
  private position = { x: 0, y: 0 }

  setPosition (x: number, y: number): void {
    this.position = { x, y }
  }

  getPosition (): { x: number, y: number } {
    return this.position
  }
}

// Usage
const circle = new Circle()
const servant = new MovementServant()

// Using servant to change the state of circle
servant.moveTo(circle, 5, 10)
console.log(circle.getPosition())
