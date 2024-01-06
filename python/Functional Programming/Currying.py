def add(a):
    def add_to(b):
        return a + b
    return add_to

add_five = add(5)
print(add_five(3))  # 8
