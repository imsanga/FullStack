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

        // String literals are stored in String Pool and reused.
        // new String() always creates a new heap object.
        // == compares references, .equals() compares content.

        // s1 and s2 point to the same String Pool object because the literal "sanga",
        // already exists in the pool
        String s1 = "sanga";
        String s2 = "sanga";
        System.out.println(s1 == s2);
        System.out.println(s1.equals(s2));

        // s3 stores a reference in the stack, and the object is created in the heap
        String s3 = new String("sanga");
        String s4 = new String("sanga");
        System.out.println(s3 == s4);
        System.out.println(s3.equals(s4));

    }
}
