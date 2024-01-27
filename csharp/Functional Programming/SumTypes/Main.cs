public abstract record LinkedList();

public sealed record Node(int Value, LinkedList Next) : LinkedList;

public sealed record Empty() : LinkedList;

public class Program {
    public static void ProcessList(LinkedList list) {
        switch (list) {
            case Node node:
                Console.WriteLine($"Node with value: {node.Value}");
                ProcessList(node.Next);
                break;
            case Empty:
                Console.WriteLine("End of list");
                break;
        }
    }

    public static void Main() {
        LinkedList myList = new Node(1, new Node(2, new Node(3, new Empty())));
        ProcessList(myList);
    }
}
