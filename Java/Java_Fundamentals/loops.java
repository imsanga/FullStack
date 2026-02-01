package Java.Java_Fundamentals;

public class loops {
    public static void main(String[] args) {
        // when to use for & while loop?
        // for loop when you know the number of iterations.
        // while loop when you don’t know the number of iterations in advance.

        // for loop
        for (int x = 1; x <= 10; x++) {
            System.out.println(x);
        }

        // while loop
        int i = 1;

        while (i <= 10) {
            System.out.println(i);
            i++;
        }

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
