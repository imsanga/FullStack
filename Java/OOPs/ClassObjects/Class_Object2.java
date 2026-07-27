package Java.OOPs.ClassObjects;

import java.util.Scanner;

class Vote {
    void greet() {
        System.out.println("Welcome to vote for the change of TN!");
        System.out.println("Choose whom to vote from below");
        System.out.println("DMK");
        System.out.println("ADMK");
        System.out.println("NTK");
        System.out.println("TVK");
        System.out.print("Enter the party for whom u want to vote: ");

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

        sc.close();
    }
}