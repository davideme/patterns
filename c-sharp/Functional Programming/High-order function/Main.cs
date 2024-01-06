using System;

class Program
{
    static void Main()
    {
        Func<int, int> plusThree = i => i + 3;
        Func<int, int> plusSix = Twice(plusThree);
        Console.WriteLine(plusSix(7));  // 13
    }

    static Func<T, T> Twice<T>(Func<T, T> f)
    {
        return x => f(f(x));
    }
}
