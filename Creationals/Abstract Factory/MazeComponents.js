export class Maze {
    constructor() {
        this.rooms = {};
    }

    addRoom(room) {
        this.rooms[room.roomNo] = room;
    }

    getRoomByNumber(roomNo) {
        return this.rooms[roomNo];
    }
}

export class Wall {
    // Wall-specific implementation
}

export class Room {
    constructor(roomNo) {
        this.roomNo = roomNo;
        this.sides = { north: null, south: null, east: null, west: null };
    }

    setSide(direction, mapSite) {
        this.sides[direction] = mapSite;
    }
}

export class Door {
    constructor(room1, room2) {
        this.room1 = room1;
        this.room2 = room2;
        // Door-specific implementation
    }
}

export const Direction = {
    NORTH: 'north',
    SOUTH: 'south',
    EAST: 'east',
    WEST: 'west'
};
