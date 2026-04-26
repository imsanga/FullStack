package Java.OOPs.Static;

// static means class-level. Static variables and methods belong to the class, not to objects.
// They are created once when the class is loaded and shared across all objects.
// Creating objects does not create new copies of static members.

// static variable → can be reassigned (unless declared final)
// static method → cannot be overridden, only hidden
// Hiding means both Parent and Child have static methods with the same name, and which one runs depends on the reference type.
// static class → only nested (inner) classes can be static

class Dummy {
    static int count = 0;

    static void welcome() {
        count++;
        System.out.println("Hello, World! " + count);
        System.out.println("*****");
    }
}

public class Static {
    public static void main(String[] args) {
        Dummy.welcome();
        System.out.println(Dummy.count);
        System.out.println("*****");
        Dummy d1 = new Dummy();
        d1.welcome(); // don't create objects for accessing static variables/methods
    }
}
