import { expect, test } from 'vitest'
import { EnchantedMazeFactory } from './EnchantedMaze.js'
import { BombedMazeFactory } from './BombedMaze.js'
import { Maze } from './Maze.js'
import { Direction } from './Direction.js'

test('create an EnchantedMaze', async () => {
  const myEnchantedMaze = createMaze(new EnchantedMazeFactory())

  expect(myEnchantedMaze).to.be.instanceOf(Maze)
  expect(myEnchantedMaze.rooms).to.have.lengthOf(2)
})

test('create an BombedMaze', async () => {
  const myBombedMaze = createMaze(new BombedMazeFactory())

  expect(myBombedMaze).to.be.instanceOf(Maze)
  expect(myBombedMaze.rooms).to.have.lengthOf(2)
})

function createMaze (factory) {
  const aMaze = factory.makeMaze()
  const r1 = factory.makeRoom(0)
  const r2 = factory.makeRoom(1)
  const theDoor = factory.makeDoor(r1, r2)

  aMaze.addRoom(r1)
  aMaze.addRoom(r2)

  r1.setSide(Direction.NORTH, factory.makeWall())
  r1.setSide(Direction.EAST, theDoor)
  r1.setSide(Direction.SOUTH, factory.makeWall())
  r1.setSide(Direction.WEST, factory.makeWall())

  r2.setSide(Direction.NORTH, factory.makeWall())
  r2.setSide(Direction.EAST, factory.makeWall())
  r2.setSide(Direction.SOUTH, factory.makeWall())
  r2.setSide(Direction.WEST, theDoor)

  return aMaze
}
