import java.util.function.Function;

public class Main {
    public static void main(String[] args) {
        Function<Integer, Integer> plusThree = i -> i + 3;
        Function<Integer, Integer> plusSix = twice(plusThree);
        System.out.println(plusSix.apply(7));  // 13
    }

    public static <T> Function<T, T> twice(Function<T, T> f) {
        return x -> f.apply(f.apply(x));
    }
}
