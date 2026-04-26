package Java.Java_Fundamentals;

import java.util.Scanner;

public class InputOutput {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // nextInt() reads the integer and stops at whitespace (space, \n, or \t)
        // skips whitespace
        int x = sc.nextInt();
        System.out.println("Input -> " + x);
        System.out.println("Output by multiply * 2 -> " + (x * 2));

        // nextInt() doesn't consume \n, so we consume it using nextLine()
        sc.nextLine();

        // nextLine() reads a full line and consumes \n and doesn't skips the whitespace
        String y = sc.nextLine();
        System.out.println("Input -> " + y);
        System.out.println("Output -> " + y + " kohli");

        // next() reads and stops at whitespace (space, \n, or \t) and skips whitespace
        String z = sc.next();
        String a = sc.next();
        System.out.println("1 -> " + z);
        System.out.println("2 -> " + a);

        // for loop input/output
        for (int i = 0; i < 5; i++) {
            int r = sc.nextInt();
            System.out.println("Input -> " + (r * 5));
        }

        // close the scanner
        sc.close();
    }
}

// Notes

// next(), nextInt(), nextDouble(), nextFloat()
// -> skip leading whitespace
// -> reads given data
// -> stop when they encounter whitespace (space, tab, newline)
// -> the next call skips the whitespace
// -> leaves (\n) in buffer when enter is clicked

// nextLine()
// -> reads the entire line (including spaces and tabs)
// -> stops only when it encounters newline (\n) and consumes (\n)