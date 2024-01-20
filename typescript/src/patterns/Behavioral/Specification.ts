interface Specification<T> {
  isSatisfiedBy: (item: T) => boolean
}

class User {
  constructor (public age: number) {}
}

class AgeSpecification implements Specification<User> {
  constructor (private readonly minAge: number) {}

  isSatisfiedBy (user: User): boolean {
    return user.age >= this.minAge
  }
}

// Usage
const ageSpec = new AgeSpecification(18)
const user = new User(20)
console.log(ageSpec.isSatisfiedBy(user)) // true if user is 18 or older
