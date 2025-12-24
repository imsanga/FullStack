package Java.Java_Fundamentals;

import java.util.*;

public class ArrayListBasics {
    public static void main(String[] args) {
        // dynamic array
        ArrayList<Integer> arrlist = new ArrayList<>();

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

        // normal for loop iteration
        for (int i = 0; i < arrlist.size(); i++) {
            System.out.println(arrlist.get(i));
        }
    }
}
