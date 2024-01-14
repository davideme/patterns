import { EnchantedMazeFactory } from './EnchantedMaze.js'
import { Direction } from './Direction.js'
import { BombedMazeFactory } from './BombedMaze.js'

function createMaze (factory) {
  const aMaze = factory.makeMaze()
  const r1 = factory.makeRoom(1)
  const r2 = factory.makeRoom(2)
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

const enchantedMazeFactory = new EnchantedMazeFactory()
const myEnchantedMaze = createMaze(enchantedMazeFactory)

console.log(myEnchantedMaze)

const bombedMazeFactory = new BombedMazeFactory()
const myBombedMaze = createMaze(bombedMazeFactory)

console.log(myBombedMaze)
