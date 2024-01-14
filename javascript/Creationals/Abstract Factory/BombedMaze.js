import { MazeFactory } from './MazeFactory.js'
import { Door } from './Door.js'
import { Room } from './Room.js'
import { Wall } from './Wall.js'
import { Maze } from './Maze.js'

export class BombedMazeFactory extends MazeFactory {
  makeMaze () {
    return new Maze()
  }

  makeWall () {
    return new BombedWall()
  }

  makeRoom (roomNo) {
    return new BombedRoom(roomNo)
  }

  makeDoor (room1, room2) {
    return new BombedDoor(room1, room2)
  }
}

class BombedRoom extends Room {
  constructor (roomNo, spell) {
    super(roomNo)
    // Additional Bombed room-specific implementation
  }
}

class BombedDoor extends Door {
}

class BombedWall extends Wall {
  // Additional Bombed wall-specific implementation
}
