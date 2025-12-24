package Java.Java_Fundamentals;

import java.util.Scanner;

public class InputOutput {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // nextInt() consumes integer till /n or /t or space
        int x = sc.nextInt();
        System.out.println("Input -> " + x);
        System.out.println("Output by multiply * 2 -> " + (x * 2));

        // nextInt() doesn't consume /n, so we consume it using nextLine()
        sc.nextLine();

        // nextLine() consumes till /n
        String y = sc.nextLine();
        System.out.println("Input -> " + y);
        System.out.println("Output -> " + y + " kohli");

        // next() consumes consumes till /n or /t or space
        String z = sc.next();
        String a = sc.next();
        System.out.println("1 -> " + z);
        System.out.println("2 -> " + a);

        // for loop input/output
        for (int i = 0; i < 5; i++) {
            int r = sc.nextInt();
            System.out.println("Input -> " + (r * 5));
        }

        sc.close();

        // input
        // 7
        // virat
        // mahi bhai

        // output
        // Input -> 7
        // Output by multiply * 2 -> 14
        // Input -> virat
        // Output -> virat kohli
        // 1 -> mahi
        // 2 -> bhai

    }
}
