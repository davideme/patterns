// Higher-order function as Command
type Command = () => void

// Concrete Commands
const simpleCommand = (payload: string): Command => {
  return () => {
    console.log(`Simple Command: See, I can do simple things like printing (${payload})`)
  }
}

const complexCommand = (receiver: IReceiver, a: string, b: string): Command => {
  return () => {
    console.log('Complex Command: Complex stuff should be done by a receiver object.')
    receiver.doSomething(a)
    receiver.doSomethingElse(b)
  }
}

// Receiver
interface IReceiver {
  doSomething: (a: string) => void
  doSomethingElse: (b: string) => void
}

class Receiver implements IReceiver {
  doSomething (a: string): void {
    console.log(`Receiver: Working on (${a}.)`)
  }

  doSomethingElse (b: string): void {
    console.log(`Receiver: Also working on (${b}.)`)
  }
}

// Invoker
class Invoker {
  private onStart: Command | undefined
  private onFinish: Command | undefined

  setOnStart (command: Command): void {
    this.onStart = command
  }

  setOnFinish (command: Command): void {
    this.onFinish = command
  }

  doSomethingImportant (): void {
    console.log('Invoker: Does anybody want something done before I begin?')
    this.onStart?.()

    console.log('Invoker: ...doing something really important...')

    console.log('Invoker: Does anybody want something done after I finish?')
    this.onFinish?.()
  }
}

// Client code
const invoker = new Invoker()
const receiver = new Receiver()
invoker.setOnStart(simpleCommand('Say Hi!'))
invoker.setOnFinish(complexCommand(receiver, 'Send email', 'Save report'))

invoker.doSomethingImportant()
