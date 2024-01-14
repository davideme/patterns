async function * gen (...nums) {
  for (const n of nums) {
    yield n
  }
}

async function * sq (inStream) {
  for await (const n of inStream) {
    yield n * n
  }
}

export async function pipeline (...nums) {
  const results = []
  for await (const n of sq(sq(gen(...nums)))) {
    results.push(n)
  }
  return results
}
