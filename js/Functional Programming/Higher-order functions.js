'use strict'

const twice = f => x => f(f(x))

const plusThree = i => i + 3

const plusSix = twice(plusThree)

console.log(plusSix(7)) // 13
