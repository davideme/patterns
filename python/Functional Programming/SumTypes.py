from dataclasses import dataclass

@dataclass
class Node:
    value: int
    next: 'LinkedList'

@dataclass
class Empty:
    pass

# Using the union operator to define the LinkedList type
LinkedList = Node | Empty

def process_list(lst: LinkedList):
    match lst:
        case Node(value, next):
            print(f"Node with value: {value}")
            process_list(next)
        case Empty():
            print("End of list")

my_list = Node(1, Node(2, Node(3, Empty())))
process_list(my_list)
