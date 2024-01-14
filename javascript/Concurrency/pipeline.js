async function * gen (...nums) {
  for (const n of nums) {
    yield n
  }
}

function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}


async function * sq (inStream) {
  for await (const n of inStream) {
    yield n * n
  }
}

export async function pipeline(...nums) {
  let results = []
  for await (const n of sq(sq(gen(...nums)))) {
    results.push(n)
  }
  return results
}
