#include <iostream>
#include <memory>
#include <variant>

class Empty {};

class Node;

using LinkedList = std::variant<std::shared_ptr<Node>, Empty>;

class Node {
public:
    int value;
    LinkedList next;

    Node(int val, LinkedList nxt) : value(val), next(nxt) {}
};

void processList(const LinkedList& list) {
    std::visit([](auto&& arg) {
        using T = std::decay_t<decltype(arg)>;
        if constexpr (std::is_same_v<T, std::shared_ptr<Node>>) {
            std::cout << "Node with value: " << arg->value << std::endl;
            processList(arg->next);
        } else {
            std::cout << "End of list" << std::endl;
        }
    }, list);
}

int main() {
    LinkedList myList = std::make_shared<Node>(1, std::make_shared<Node>(2, std::make_shared<Node>(3, Empty())));
    processList(myList);
    return 0;
}
