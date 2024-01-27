#include <iostream>

// Tail recursive factorial function
unsigned long long factorial_tail_recursive(unsigned long long n, unsigned long long accumulator = 1) {
    if (n == 0) {
        return accumulator;
    } else {
        return factorial_tail_recursive(n - 1, n * accumulator);
    }
}

int main() {
    unsigned long long number = 10;
    std::cout << "Factorial of " << number << " is " << factorial_tail_recursive(number) << std::endl;
    return 0;
}
