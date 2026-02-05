package Java.Extras.Collections;

// Set is an interface
// HashSet is a class that implements Set
// It stores elements in random order
// duplicates not allowed

import java.util.*;

public class Hashset {
    public static void main(String[] args) {
        Set<Integer> l1 = new HashSet<>();

        // create
        l1.add(10);
        l1.add(20);
        l1.add(30);
        for (int x : l1)
            System.out.println(x);

        // check existence
        System.out.println(l1.contains(10));

        // remove element
        l1.remove(10);
        for (int x : l1)
            System.out.println(x);

        // check if empty
        System.out.println(l1.isEmpty());

        // size of set
        System.out.println(l1.size());

    }
}