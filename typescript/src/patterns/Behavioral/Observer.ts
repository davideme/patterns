// Observer as a higher-order function type with generics
type Observer<T> = (subject: T) => void;

// Concrete Subject
class ConcreteSubject {
  public state: number = 0;
  private observers: Observer<ConcreteSubject>[] = [];

  attach(observer: Observer<ConcreteSubject>): void {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
    }
  }

  detach(observer: Observer<ConcreteSubject>): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex !== -1) {
      this.observers.splice(observerIndex, 1);
    }
  }

  notify(): void {
    for (const observer of this.observers) {
      observer(this);
    }
  }

  someBusinessLogic(): void {
    this.state = Math.floor(Math.random() * (10 + 1));
    this.notify();
  }
}

// Concrete Observers as functions
const concreteObserverA: Observer<ConcreteSubject> = (subject) => {
  if (subject.state < 3) {
    console.log('ConcreteObserverA: Reacted to the event.');
  }
};

const concreteObserverB: Observer<ConcreteSubject> = (subject) => {
  if (subject.state === 0 || subject.state >= 2) {
    console.log('ConcreteObserverB: Reacted to the event.');
  }
};

// Client code
const subject = new ConcreteSubject();

subject.attach(concreteObserverA);
subject.attach(concreteObserverB);

subject.someBusinessLogic();
subject.someBusinessLogic();

subject.detach(concreteObserverB);

subject.someBusinessLogic();
