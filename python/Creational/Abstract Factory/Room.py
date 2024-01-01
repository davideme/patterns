from Direction import Direction

class Room:
    def __init__(self, room_no):
        self.room_no = room_no
        self.sides = {'north': None, 'south': None, 'east': None, 'west': None}

    def set_side(self, direction, map_site):
        self.sides[direction] = map_site
