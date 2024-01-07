public sealed interface LinkedList permits Node, Empty {}

public record Node(int value, LinkedList next) implements LinkedList {}

public final class Empty implements LinkedList {}

public class Main {
    public static void processList(LinkedList list) {
        switch (list) {
            case Node node -> {
                System.out.println("Node with value: " + node.value());
                processList(node.next());
            }
            case Empty empty -> System.out.println("End of list");
        }
    }

    public static void main(String[] args) {
        LinkedList myList = new Node(1, new Node(2, new Node(3, new Empty())));
        processList(myList);
    }
}
