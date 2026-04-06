package Java.Java_Fundamentals;

import java.util.Scanner;

public class loops {
    public static void main(String[] args) {
        // when to use for & while loop?
        // for loop when you know the number of iterations.
        // while loop when you don’t know the number of iterations in advance

        // for loop (print 1 to 10)
        for (int x = 1; x <= 10; x++) {
            System.out.println(x);
        }

        // while loop
        int i = 1;

        while (i <= 10) {
            System.out.println(i);
            i++;
        }

        // while loop (not knowing no of itr in adv)
        Scanner sc = new Scanner(System.in);
        int num = -1;

        while (num != 0) {
            System.out.println(num);
            num = sc.nextInt();
        }

        sc.close();

        // do-while loop
        do {
            System.out.println(i);
            i++;
        } while (i <= 10);

        // break & continue statement
        for (int y = 1; y <= 10; y++) {
            if (y == 8) {
                continue; // skips the current iteration
            } else if (y == 9) {
                System.out.println(y);
                break; // breaks out of the loop
            }
            System.out.println(y);
        }
    }
}
