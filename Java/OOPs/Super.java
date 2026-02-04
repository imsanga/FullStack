package Java.OOPs;

class Dummy {
    String name = "Rohit";

    Dummy() {
        System.out.println("Sanga");
    }

    void dummify1() {
        System.out.println("Santha");
    }
}

class DummyBaba extends Dummy {
    DummyBaba() {
        super();
    }

    void dummify2() {
        System.out.println(super.name);
        super.dummify1();
    }
}

public class Super {
    public static void main(String[] args) {
        DummyBaba d1 = new DummyBaba();
        d1.dummify2();
    }
}