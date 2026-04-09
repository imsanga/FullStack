package Java.OOPs.Interface;

interface Dummy {
    String name = "Rohit"; // public static final

    void welcome1(); // public abstract

    void welcome2();

    default void dummify1() {
        System.out.println("Sanga");
    }

    static void dummify2() {
        System.out.println("Santha");
    }
}

class DummyBaba implements Dummy {
    @Override
    public void welcome1() {
        System.out.println("Virat");
    }

    @Override
    public void welcome2() {
        System.out.println("Mahi");
    }

}

public class InterfaceEx1 {
    public static void main(String[] args) {
        Dummy d1 = new DummyBaba();
        d1.dummify1();
        Dummy.dummify2();
        System.out.println(Dummy.name);
        d1.welcome1();
        d1.welcome2();
    }
}
