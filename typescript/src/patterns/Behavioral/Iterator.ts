function* createArrayIterator<T>(collection: T[]): Generator<T, void, undefined> {
    for (let item of collection) {
        yield item;
    }
}

// Usage
const numbers = [1, 2, 3, 4, 5]
const iterator = createArrayIterator(numbers)

for (let value of iterator) {
    console.log(value);
}
