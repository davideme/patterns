export const RoomMixin = {
  sides: { north: null, south: null, east: null, west: null },
  setSide (direction, mapSite) {
    this.sides[direction] = mapSite
  }
}
