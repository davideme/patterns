import { MazeFactory } from './MazeFactory.js'
import { Door } from './Door.js'
import { Room } from './Room.js'
import { Wall } from './Wall.js'
import { Maze } from './Maze.js'

export class EnchantedMazeFactory extends MazeFactory {
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

class EnchantedRoom extends Room {
  constructor (roomNo, spell) {
    super(roomNo)
    this.spell = spell
    // Additional enchanted room-specific implementation
  }
}

class EnchantedDoor extends Door {
}

class EnchantedWall extends Wall {
  // Additional enchanted wall-specific implementation
}
