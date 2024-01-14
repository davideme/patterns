import { expect, test } from 'vitest'
import { pipeline } from './pipeline'

test('pipeline 2, 3, 4 to equal 16, 81, 256', async () => {
  expect(await pipeline(2, 3, 4)).toStrictEqual(([16, 81, 256]))
})
