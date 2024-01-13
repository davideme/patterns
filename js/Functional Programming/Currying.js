function add (a) {
  return function (b) {
    return a + b
  }
}

const addFive = add(5)
console.log(addFive(3)) // 8
