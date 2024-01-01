export class Room {
    constructor(roomNo) {
        this.roomNo = roomNo;
        this.sides = { north: null, south: null, east: null, west: null };
    }

    setSide(direction, mapSite) {
        this.sides[direction] = mapSite;
    }
}
