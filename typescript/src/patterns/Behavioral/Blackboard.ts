class Blackboard {
  private data: Record<string, any> = {}

  setData (key: string, value: any): void {
    this.data[key] = value
  }

  getData (key: string): Record<string, any> {
    return this.data[key]
  }
}

// Knowledge Source as a higher-order function type
type KnowledgeSource = (blackboard: Blackboard) => void

// Concrete Knowledge Sources as functions
const expert1: KnowledgeSource = (blackboard: Blackboard): void => {
  console.log('Expert1 updating blackboard')
  blackboard.setData('expert1Data', 'dataFromExpert1')
}

const expert2: KnowledgeSource = (blackboard: Blackboard): void => {
  console.log('Expert2 updating blackboard')
  blackboard.setData('expert2Data', 'dataFromExpert2')
}

// Control
class Controller {
  private readonly blackboard = new Blackboard()
  private readonly experts: KnowledgeSource[] = [expert1, expert2]

  execute (): void {
    this.experts.forEach(expert => expert(this.blackboard))
    console.log('Final Blackboard Data:', this.blackboard)
  }
}

// Example usage
const controller = new Controller()
controller.execute()
