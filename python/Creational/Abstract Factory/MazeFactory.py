from abc import ABC, abstractmethod

class MazeFactory(ABC):
    @abstractmethod
    def make_maze(self):
        pass

    @abstractmethod
    def make_wall(self):
        pass

    @abstractmethod
    def make_room(self, room_no):
        pass

    @abstractmethod
    def make_door(self, room1, room2):
        pass
