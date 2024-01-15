const twice = <T>(f: (x: T) => T) => (x: T) => f(f(x))

const plusThree = (i: number): number => i + 3

const plusSix = twice(plusThree)

console.log(plusSix(7)) // 13
