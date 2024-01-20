// Memento
class Memento {
  private readonly state: string

  constructor (state: string) {
    this.state = state
  }

  getState (): string {
    return this.state
  }
}

// Originator
class Originator {
  private state: string

  constructor (state: string) {
    this.state = state
  }

  setState (state: string): void {
    console.log(`Originator: Setting state to ${state}`)
    this.state = state
  }

  save (): Memento {
    return new Memento(this.state)
  }

  restore (memento: Memento): void {
    this.state = memento.getState()
    console.log(`Originator: State after restoring from Memento: ${this.state}`)
  }
}

// Caretaker
class Caretaker {
  private readonly mementos: Memento[] = []
  private readonly originator: Originator

  constructor (originator: Originator) {
    this.originator = originator
  }

  backup (): void {
    console.log('Caretaker: Saving Originator\'s state...')
    this.mementos.push(this.originator.save())
  }

  undo (): void {
    if (this.mementos.length === 0) {
      return
    }
    const memento = this.mementos.pop()
    if (memento != null) {
      console.log(`Caretaker: Restoring state to: ${memento.getState()}`)
      this.originator.restore(memento)
    }
  }
}

// Client code
const originator = new Originator('State #0')
const caretaker = new Caretaker(originator)

originator.setState('State #1')
caretaker.backup()

originator.setState('State #2')
caretaker.backup()

originator.setState('State #3')
caretaker.backup()

console.log('Client: Now, let\'s rollback!\n')
caretaker.undo()
caretaker.undo()
