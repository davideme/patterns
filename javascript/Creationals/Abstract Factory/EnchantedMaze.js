import { RoomMixin } from './Room.js'
import { Maze } from './Maze.js'

export class EnchantedMazeFactory {
  makeMaze () {
    return new Maze()
  }

  makeWall () {
    return new EnchantedWall()
  }

  makeRoom (roomNo) {
    const spell = this.castSpell()
    return new EnchantedRoom(roomNo, spell)
  }

  makeDoor (room1, room2) {
    return new EnchantedDoor(room1, room2)
  }

  castSpell () {
    // Return a magical spell for the enchanted room
    return 'Alohomora'
  }
}

class EnchantedRoom {
  constructor (roomNo, spell) {
    this.roomNo = roomNo
    this.spell = spell
    Object.assign(this, RoomMixin)
    // Additional enchanted room-specific implementation
  }
}

class EnchantedDoor {
}

class EnchantedWall {
  // Additional enchanted wall-specific implementation
}
