package Java.Extras.Collections;

// Map is an interface
// HashMap is a class that implements Map
// Stores data in key-value pairs
// Keys are unique, values can be duplicated
// Not part of the Collection interface
// Each key maps to only one value
// If you add the same key again, the value gets replaced
// Order is not guaranteed

import java.util.*;

public class Hashmap {
    public static void main(String[] args) {
        Map<Integer, String> l1 = new HashMap<>();

        // create
        l1.put(1, "Sanga");
        l1.put(2, "Santha");
        l1.put(3, "dummy");
        l1.put(3, "Nattu");

        // read
        System.out.println(l1.get(3));

        // check key
        System.out.println(l1.containsKey(3));

        // remove Key
        l1.remove(3);

        // size of map
        System.out.println(l1.size());

        // iterate with keys
        for (int x : l1.keySet())
            System.out.println(x);

        // iterate with values
        for (String x : l1.values())
            System.out.println(x);

        // iterate with entrySet
        for (Map.Entry<Integer, String> x : l1.entrySet())
            System.out.println(x.getKey() + " " + x.getValue());

    }
}