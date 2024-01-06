"use strict";

const twice = f => x => f(f(x));

const plusThree = i => i + 3;

const plusSix = twice(plusThree);

console.log(g(7)); // 13
