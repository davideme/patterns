using System;
using System.Collections.Generic;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        await foreach (var n in Sq(Sq(Gen(2, 3, 4))))
        {
            Console.WriteLine(n); // Will print 16 then 81
        }
    }

    static async IAsyncEnumerable<int> Gen(params int[] nums)
    {
        foreach (var n in nums)
        {
            yield return n;
        }
    }

    static async IAsyncEnumerable<int> Sq(IAsyncEnumerable<int> inStream)
    {
        await foreach (var n in inStream)
        {
            yield return n * n;
        }
    }
}
