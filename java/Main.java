import java.util.stream.Stream;

public class Main {
    public static void main(String[] args) {
        Stream.of(2, 3, 4)
              .map(Main::square)
              .map(Main::square)
              .forEach(System.out::println);
    }

    private static int square(int n) {
        return n * n;
    }
}
