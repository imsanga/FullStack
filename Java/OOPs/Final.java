package Java.OOPs;

// final is like constant
// final variable cannot be reassigned
// final method cannot be overridden
// final class cannot be inherited

final class Dummy { // final class cannot be inherited
    final int count = 0;

    final void welcome() {
        count = 5; // final variable cannot be reassigned
        System.out.println("Hello, World! " + count);
    }
}

class Dummify extends Dummy {
    void welcome() { // final method cannot be overridden
        System.out.println("Hello, World!");
    }
}

public class Final {
    public static void main(String[] args) {
        Dummy d1 = new Dummify();
        d1.welcome();
    }
}
