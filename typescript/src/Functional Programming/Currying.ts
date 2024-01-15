(() => {
  function add (a: number): (number) => number {
    return function (b: number): number {
      return a + b
    }
  }

  const addFive = add(5)
  console.log(addFive(3)) // 8
})()
