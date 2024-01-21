interface IBlackboard {
  setData: (key: string, value: any) => void
  getData: (key: string) => any
}

class Blackboard implements IBlackboard {
  private data: Record<string, any> = {}

  setData (key: string, value: any): void {
    this.data[key] = value
  }

  getData (key: string): any {
    return this.data[key]
  }
}

// Knowledge Source as a higher-order function type
type KnowledgeSource = (blackboard: IBlackboard) => void

// Concrete Knowledge Sources as functions
const expert1: KnowledgeSource = (blackboard: IBlackboard): void => {
  console.log('Expert1 updating blackboard')
  blackboard.setData('expert1Data', 'dataFromExpert1')
}

const expert2: KnowledgeSource = (blackboard: IBlackboard): void => {
  console.log('Expert2 updating blackboard')
  blackboard.setData('expert2Data', 'dataFromExpert2')
}

// Control
const controller = (blackboard: IBlackboard, experts: KnowledgeSource[]): void => {
  experts.forEach(expert => expert(blackboard))
  console.log('Final Blackboard Data:', blackboard)
}

// Example usage
controller(new Blackboard(), [expert1, expert2])
