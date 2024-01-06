import java.util.function.Function;

public class Main {
    public static void main(String[] args) {
        Function<Integer, Function<Integer, Integer>> add = a -> b -> a + b;
        Function<Integer, Integer> addFive = add.apply(5);
        System.out.println(addFive.apply(3));  // 8
    }
}
