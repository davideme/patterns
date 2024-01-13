export class Maze {
  constructor () {
    this.rooms = {}
  }

  addRoom (room) {
    this.rooms[room.roomNo] = room
  }

  getRoomByNumber (roomNo) {
    return this.rooms[roomNo]
  }
}
