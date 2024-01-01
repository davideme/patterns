export class MazeFactory {
    makeMaze() {
        throw new Error("This method is abstract and must be implemented");
    }

    makeWall() {
        throw new Error("This method is abstract and must be implemented");
    }

    makeRoom(roomNo) {
        throw new Error("This method is abstract and must be implemented");
    }

    makeDoor(room1, room2) {
        throw new Error("This method is abstract and must be implemented");
    }
}
