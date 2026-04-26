package Java.Java_Fundamentals;

public class conditionalStatements {
    public static void main(String[] args) {

        int x = 3;
        int y = 5;

        // if
        if (y > x)
            System.out.println("y > x");

        // if-else
        if (x > y)
            System.out.println("x > y");
        else
            System.out.println("x < y");

        // else if
        int score = 75;

        if (score >= 90)
            System.out.println("Pass with distinction");
        else if (score >= 75)
            System.out.println("Pass with first class");
        else if (score >= 35)
            System.out.println("Pass");
        else
            System.out.println("Fail");

        // nested if
        if (score >= 35) {
            if (score >= 90) {
                System.out.println("Pass with distinction");
            } else if (score >= 75) {
                System.out.println("Pass with first class");
            } else {
                System.out.println("Pass");
            }
        } else {
            System.out.println("Fail");
        }

        // switch
        int day = 3;

        switch (day) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            default:
                System.out.println("Invalid");
        }
    }
}
