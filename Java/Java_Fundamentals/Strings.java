package Java.Java_Fundamentals;

public class Strings {
    public static void main(String[] args) {
        String name = "Sangameshwaran Natarajan";
        System.out.println("name -> " + name);
        System.out.println("stringLength -> " + name.length());

        // it includes from begin to end
        System.out.println("substring 1 -> " + name.substring(1));

        // it includes from begin and doesn't includes end
        System.out.println("substring 2 -> " + name.substring(0, 24));

        System.out.println("charAt -> " + name.charAt(1));

        // string concatenation
        String firstName = "Sangameshwaran";
        String lastName = "Natarajan";
        System.out.println("concat -> " + firstName + " " + lastName);

        // equals - it compares the content inside
        String x = "virat";
        String y = "virat";
        System.out.println("isEquals 1 -> " + (x == y));
        System.out.println("isEquals 2 -> " + x.equals(y));

    }
}
