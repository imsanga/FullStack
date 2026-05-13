import java.util.Scanner;

public class IOsnippet {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        sc.nextLine();

        for (int i = 0; i < n; i++) {
            String name = sc.next();
            int age = sc.nextInt();
            sc.nextLine();
            String city = sc.nextLine();
            System.out.println(name + "-" + age + "-" + city);
        }

        String last = sc.nextLine();
        System.out.println("FINAL: " + last);
        sc.close();
    }
}

// input
// 2
// Virat 36
// Delhi
// Rohit 38
// Mumbai
// King Kohli

// output
// Virat-36-Delhi
// Rohit-38-Mumbai
// FINAL: King Kohli