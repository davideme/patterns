// State Interface
interface State {
  doAction: (context: Context) => void
}

// Concrete States
class StartState implements State {
  doAction (context: Context): void {
    console.log('Player is in start state')
    context.setState(this)
  }

  toString (): string {
    return 'Start State'
  }
}

class StopState implements State {
  doAction (context: Context): void {
    console.log('Player is in stop state')
    context.setState(this)
  }

  toString (): string {
    return 'Stop State'
  }
}

// Context
class Context {
  private state: State | null

  constructor () {
    this.state = null
  }

  setState (state: State): void {
    this.state = state
  }

  getState (): State | null {
    return this.state
  }
}

// Usage
function main (): void {
  const context = new Context()

  const startState = new StartState()
  startState.doAction(context)

  console.log(context.getState()?.toString())

  const stopState = new StopState()
  stopState.doAction(context)

  console.log(context.getState()?.toString())
}
main()
