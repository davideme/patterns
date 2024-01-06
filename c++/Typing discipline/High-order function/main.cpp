#include <iostream>
#include <functional>

template<typename T>
std::function<T(T)> twice(std::function<T(T)> f) {
    return [=](T x) { return f(f(x)); };
}

int plusThree(int i) {
    return i + 3;
}

int main() {
    auto plusSix = twice<int>(plusThree);
    std::cout << plusSix(7) << std::endl;  // 13
    return 0;
}
