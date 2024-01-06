def twice(f):
    return lambda x: f(f(x))

def plus_three(i):
    return i + 3

plus_six = twice(plus_three)

print(plus_six(7))  # 13
