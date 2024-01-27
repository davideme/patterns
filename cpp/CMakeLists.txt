cmake_minimum_required(VERSION 3.27)
project(c__)

set(CMAKE_CXX_STANDARD 17)

add_library(c__ STATIC library.cpp
        library.cpp
        "Typing discipline/Currying/main.cpp"
        "Typing discipline/High-order function/main.cpp"
        "Typing discipline/SumTypes/main.cpp"
        "Typing discipline/Tail Recursion/main.cpp")
