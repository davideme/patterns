// Memento
class Memento {
    private state: string;

    constructor(state: string) {
        this.state = state;
    }

    getState(): string {
        return this.state;
    }
}

// Originator
class Originator {
    private state: string;

    constructor(state: string) {
        this.state = state
    }

    setState(state: string) {
        console.log(`Originator: Setting state to ${state}`);
        this.state = state;
    }

    save(): Memento {
        return new Memento(this.state);
    }

    restore(memento: Memento | undefined) {
        if (memento) {
            this.state = memento.getState();
            console.log(`Originator: State after restoring from Memento: ${this.state}`);
        }
    }
}

// Caretaker
class Caretaker {
    private mementos: Memento[] = [];
    private originator: Originator;

    constructor(originator: Originator) {
        this.originator = originator;
    }

    backup() {
        console.log(`Caretaker: Saving Originator's state...`);
        this.mementos.push(this.originator.save());
    }

    undo() {
        if (!this.mementos.length) {
            return;
        }
        const memento = this.mementos.pop();
        console.log(`Caretaker: Restoring state to: ${memento?.getState()}`);
        this.originator.restore(memento);
    }
}

// Client code
const originator = new Originator("State #0");
const caretaker = new Caretaker(originator);

originator.setState('State #1');
caretaker.backup();

originator.setState('State #2');
caretaker.backup();

originator.setState('State #3');
caretaker.backup();

console.log('Client: Now, let\'s rollback!\n');
caretaker.undo();
caretaker.undo();
