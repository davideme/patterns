using System;

class Program
{
    static void Main()
    {
        Func<int, Func<int, int>> add = a => b => a + b;
        var addFive = add(5);
        Console.WriteLine(addFive(3));  // 8
    }
}
