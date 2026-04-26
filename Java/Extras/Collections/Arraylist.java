package Java.Extras.Collections;

// List is an interface
// ArrayList is a class that implements List
// It stores elements in indexed order

import java.util.*;

public class Arraylist {
    public static void main(String[] args) {
        // dynamic array
        ArrayList<Integer> arrlist = new ArrayList<>();
        // List<Integer> arrlist = new ArrayList<>();

        // create
        arrlist.add(10);
        arrlist.add(20);
        arrlist.add(30);
        for (int i : arrlist)
            System.out.println(i);

        // read
        System.out.println(arrlist.get(2));

        // update
        arrlist.set(2, 40);
        System.out.println(arrlist.get(2));

        // delete
        arrlist.remove(2);
        for (int i : arrlist)
            System.out.println(i);

        // size of arrlist
        System.out.println(arrlist.size());

        // for loop iteration
        for (int i = 0; i < arrlist.size(); i++) {
            System.out.println(arrlist.get(i));
        }
    }
}
