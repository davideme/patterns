#include <iostream>
#include <functional>

std::function<std::function<int(int)>(int)> add = [](int a) {
    return [=](int b) { return a + b; };
};

int main() {
    auto addFive = add(5);
    std::cout << addFive(3) << std::endl;  // 8
    return 0;
}
