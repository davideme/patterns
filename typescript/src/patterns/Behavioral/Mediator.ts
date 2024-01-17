// Mediator as a higher-order function
type Mediator = (sender: object, event: string) => void

// Concrete Mediator function
function createMediator (component1: Component1, component2: Component2): Mediator {
  return (_: object, event: string) => {
    if (event === 'A') {
      console.log('Mediator reacts on A and triggers following operations:')
      component2.doC()
    }
    if (event === 'D') {
      console.log('Mediator reacts on D and triggers following operations:')
      component1.doB()
      component2.doC()
    }
  }
}

// Concrete Components
class Component1 {
  protected mediator: Mediator | null

  constructor (mediator: Mediator | null = null) {
    this.mediator = mediator
  }

  setMediator (mediator: Mediator): void {
    this.mediator = mediator
  }

  doA (): void {
    console.log('Component 1 does A.')
    this.mediator?.(this, 'A')
  }

  doB (): void {
    console.log('Component 1 does B.')
  }
}

class Component2 {
  protected mediator: Mediator | null

  constructor (mediator: Mediator | null = null) {
    this.mediator = mediator
  }

  setMediator (mediator: Mediator): void {
    this.mediator = mediator
  }

  doC (): void {
    console.log('Component 2 does C.')
  }

  doD (): void {
    console.log('Component 2 does D.')
    this.mediator?.(this, 'D')
  }
}

// Client code
const c1 = new Component1()
const c2 = new Component2()
const mediator = createMediator(c1, c2)

c1.setMediator(mediator)
c2.setMediator(mediator)

console.log('Client triggers operation A.')
c1.doA()

console.log('Client triggers operation D.')
c2.doD()
