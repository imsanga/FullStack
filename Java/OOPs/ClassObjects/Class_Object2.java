package Java.OOPs.ClassObjects;

import java.util.*;

class Vote {
    void greet() {
        System.out.println("Welcome to vote for the change of TN!");
    }

    void votedFor(String voted) {
        System.out.println("U voted for " + voted);
    }
}

public class Class_Object2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Vote id1 = new Vote();
        id1.greet();

        String voted = sc.nextLine();
        id1.votedFor(voted);
    }
}