class Maze:
    def __init__(self):
        self.rooms = {}

    def add_room(self, room):
        self.rooms[room.room_no] = room

    def get_room_by_number(self, room_no):
        return self.rooms.get(room_no)
