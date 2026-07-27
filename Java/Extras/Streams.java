package Java.Extras;

import java.util.*;
import java.util.stream.Collectors;

public class Streams {
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(1, 2, 2, 3, 4, 5);

        List<Integer> lt = list.stream()
                .filter(n -> n % 2 == 0)
                .map(n -> n * 2)
                .sorted()
                .distinct()
                .collect(Collectors.toList());

        System.out.println(lt);
    }
}