async function * gen (...nums: number[]): AsyncGenerator<number> {
  for (const n of nums) {
    yield n
  }
}

async function * sq (inStream: AsyncGenerator<number>): AsyncGenerator<number> {
  for await (const n of inStream) {
    yield n * n
  }
}

async function main (): Promise<void> {
  for await (const n of sq(sq(gen(2, 3, 4)))) {
    console.log(n)
  }
}

await main()

export {}
