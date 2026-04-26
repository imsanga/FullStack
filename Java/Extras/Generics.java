package Java.Extras;

// Generics provide type safety by checking data types at compile time.

import java.util.*;

class User {
    String name;
    int age;

    User(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

public class Generics {
    public static void main(String[] args) {

        List<User> u1 = new ArrayList<>();

        u1.add(new User("Sanga", 25));
        u1.add(new User("Santha", 48));
        u1.add(new User("Nattu", 55));

        for (User x : u1)
            System.out.println(x.name + " " + x.age);

        System.out.println(u1.get(0).name);

        String s = u1.get(1).name;
        System.out.println(s);

        User us = u1.get(1);
        System.out.println(us.age);
    }
}