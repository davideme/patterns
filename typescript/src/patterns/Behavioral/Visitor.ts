// Generic Visitor Action Function Type
type VisitorAction<T> = (element: T) => void

// Concrete Elements
class ConcreteElementA {
  operationA (): void {
    console.log('ConcreteElementA operationA')
  }
}

class ConcreteElementB {
  operationB (): void {
    console.log('ConcreteElementB operationB')
  }
}

// Using the generic VisitorAction
const visitConcreteElementA: VisitorAction<ConcreteElementA> = (element) => {
  console.log('Visiting ConcreteElementA')
  element.operationA()
}

const visitConcreteElementB: VisitorAction<ConcreteElementB> = (element) => {
  console.log('Visiting ConcreteElementB')
  element.operationB()
}

// Usage
const elementA = new ConcreteElementA()
const elementB = new ConcreteElementB()

// Apply visitor actions to elements
visitConcreteElementA(elementA)
visitConcreteElementB(elementB)

function applyVisitor<T> (element: T, action: VisitorAction<T>): void {
  action(element)
}

// Usage with the applyVisitor function
applyVisitor(elementA, visitConcreteElementA)
applyVisitor(elementB, visitConcreteElementB)
