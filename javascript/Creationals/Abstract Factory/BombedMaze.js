import { RoomMixin } from './Room.js'
import { Maze } from './Maze.js'

export class BombedMazeFactory {
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

class BombedRoom {
  constructor (roomNo) {
    this.roomNo = roomNo
    Object.assign(this, RoomMixin)
    // Additional Bombed room-specific implementation
  }
}

class BombedDoor {
}

class BombedWall {
  // Additional Bombed wall-specific implementation
}
