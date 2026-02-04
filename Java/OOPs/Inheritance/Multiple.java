package Java.OOPs.Inheritance;

// Multiple Inheritance - class can inherit more than one base class

interface Dummy1 {
    void dummify1();
}

interface Dummy2 {
    void dummify2();
}

class DummyBaba implements Dummy1, Dummy2 {
    @Override
    public void dummify1() {
        System.out.println("Sanga");
    }

    @Override
    public void dummify2() {
        System.out.println("Santha");
    }
}

public class Multiple {
    public static void main(String[] args) {
        DummyBaba d1 = new DummyBaba();
        d1.dummify1();
        d1.dummify2();
    }
}
