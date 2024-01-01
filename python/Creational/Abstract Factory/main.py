from EnchantedMaze import EnchantedMazeFactory
from BombedMaze import BombedMazeFactory
from Direction import Direction

def create_maze(factory):
    a_maze = factory.make_maze()
    r1 = factory.make_room(1)
    r2 = factory.make_room(2)
    the_door = factory.make_door(r1, r2)

    a_maze.add_room(r1)
    a_maze.add_room(r2)

    r1.set_side(Direction['NORTH'], factory.make_wall())
    r1.set_side(Direction['EAST'], the_door)
    r1.set_side(Direction['SOUTH'], factory.make_wall())
    r1.set_side(Direction['WEST'], factory.make_wall())

    r2.set_side(Direction['NORTH'], factory.make_wall())
    r2.set_side(Direction['EAST'], factory.make_wall())
    r2.set_side(Direction['SOUTH'], factory.make_wall())
    r2.set_side(Direction['WEST'], the_door)

    return a_maze

enchanted_maze_factory = EnchantedMazeFactory()
my_enchanted_maze = create_maze(enchanted_maze_factory)

print(my_enchanted_maze);


bombed_maze_factory = BombedMazeFactory()
my_bombed_maze = create_maze(bombed_maze_factory)

print(my_bombed_maze);
