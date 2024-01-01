from MazeFactory import MazeFactory
from Maze import Maze
from Room import Room
from Door import Door
from Wall import Wall

class BombedMazeFactory(MazeFactory):
    def make_maze(self):
        return Maze()

    def make_wall(self):
        return BombedWall()

    def make_room(self, room_no):
        return BombedRoom(room_no)

    def make_door(self, room1, room2):
        return BombedDoor(room1, room2)


class BombedRoom(Room):
    def __init__(self, room_no):
        super().__init__(room_no)
        # Additional Bombed room-specific implementation


class BombedDoor(Door):
    def __init__(self, room1, room2):
        super().__init__(room1, room2)
        # Additional Bombed door-specific implementation


class BombedWall(Wall):
    pass
    # Additional Bombed wall-specific implementation
