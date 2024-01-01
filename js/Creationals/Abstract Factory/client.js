import { EnchantedMazeFactory } from './EnchantedMaze.js';
import { Direction } from './Direction.js';

function createMaze(factory) {
    let aMaze = factory.makeMaze();
    let r1 = factory.makeRoom(1);
    let r2 = factory.makeRoom(2);
    let theDoor = factory.makeDoor(r1, r2);

    aMaze.addRoom(r1);
    aMaze.addRoom(r2);

    r1.setSide(Direction.NORTH, factory.makeWall());
    r1.setSide(Direction.EAST, theDoor);
    r1.setSide(Direction.SOUTH, factory.makeWall());
    r1.setSide(Direction.WEST, factory.makeWall());

    r2.setSide(Direction.NORTH, factory.makeWall());
    r2.setSide(Direction.EAST, factory.makeWall());
    r2.setSide(Direction.SOUTH, factory.makeWall());
    r2.setSide(Direction.WEST, theDoor);

    return aMaze;
}


const enchantedMazeFactory = new EnchantedMazeFactory();
const myEnchantedMaze = createMaze(enchantedMazeFactory);

console.log(myEnchantedMaze);