package Java.OOPs.AccessSpecifiers.privateSpecifier;

// A private member can be accessed only inside the same class where it is defined

class Dummy {
    private String name = "Sanga";

    private void greet() {
        System.out.println(name + " welcome to java!");
    }

    void dummy() {
        greet();
    }
}

public class Private {
    public static void main(String[] args) {
        Dummy d1 = new Dummy();
        d1.dummy();
    }
}
