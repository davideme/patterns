// Handler Interface
interface Handler {
  setNext: (handler: Handler) => Handler
  handle: (request: string) => string | null
}

// Concrete Handlers
class ConcreteHandlerA implements Handler {
  private nextHandler: Handler | null = null

  setNext (handler: Handler): Handler {
    this.nextHandler = handler
    return handler
  }

  handle (request: string): string | null {
    if (request === 'A') {
      return `Handler A: I'll handle the ${request}.`
    }
    return this.nextHandler?.handle(request) ?? null
  }
}

class ConcreteHandlerB implements Handler {
  private nextHandler: Handler | null = null

  setNext (handler: Handler): Handler {
    this.nextHandler = handler
    return handler
  }

  handle (request: string): string | null {
    if (request === 'B') {
      return `Handler B: I'll handle the ${request}.`
    }
    return this.nextHandler?.handle(request) ?? null
  }
}

// Client code
function clientCode (handler: Handler): void {
  const requests = ['A', 'B', 'C']

  for (const request of requests) {
    console.log(`Client: Who wants to handle a ${request}?`)

    const result = handler.handle(request)

    if (result != null) {
      console.log(`  ${result}`)
    } else {
      console.log(`  ${request} was left untouched.`)
    }
  }
}

// Usage
const handler1 = new ConcreteHandlerA()
const handler2 = new ConcreteHandlerB()

handler1.setNext(handler2)

clientCode(handler1)
