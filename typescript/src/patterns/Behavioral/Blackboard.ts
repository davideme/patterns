// Blackboard
class Blackboard {
  private data: Record<string, any> = {}

  setData (key: string, value: any): void {
    this.data[key] = value
  }

  getData (key: string): Record<string, any> {
    return this.data[key]
  }
}

// Knowledge Source Interface
interface KnowledgeSource {
  update: (blackboard: Blackboard) => void
}

// Experts implementing the KnowledgeSource interface
class Expert1 {
  update (blackboard: Blackboard): void {
    console.log('Expert1 updating blackboard')
    blackboard.setData('expert1Data', 'dataFromExpert1')
  }
}

class Expert2 {
  update (blackboard: Blackboard): void {
    console.log('Expert2 updating blackboard')
    blackboard.setData('expert2Data', 'dataFromExpert2')
  }
}

// Control
class Controller {
  private readonly blackboard = new Blackboard()
  private readonly experts: KnowledgeSource[] = [new Expert1(), new Expert2()]

  execute (): void {
    this.experts.forEach(expert => expert.update(this.blackboard))
    console.log('Final Blackboard Data:', this.blackboard)
  }
}

// Example usage
const controller = new Controller()
controller.execute()
