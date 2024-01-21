interface IOperations {
  operation1: () => void
  operation2: () => void
  hook1?: () => void
  hook2?: () => void
}

class Template {
  constructor (private readonly operations: IOperations) {}

  templateMethod (): void {
    console.log('Template says: I am doing the bulk of the work')

    this.operations.operation1()

    console.log('Template says: But I let components override some operations')

    this.operations.operation2()

    this.operations.hook1?.()

    console.log('Template says: But I am doing the bulk of the work anyway')

    this.operations.hook2?.()
  }
}

// Usage
const operations1: IOperations = {
  operation1: () => console.log('Operations1: Implemented Operation1'),
  operation2: () => console.log('Operations1: Implemented Operation2'),
  hook1: () => console.log('Operations1: Overridden Hook1')
}

const operations2: IOperations = {
  operation1: () => console.log('Operations2: Implemented Operation1'),
  operation2: () => console.log('Operations2: Implemented Operation2')
  // hook1 is not overridden in operations2
}

const template1 = new Template(operations1)
template1.templateMethod()

const template2 = new Template(operations2)
template2.templateMethod()
