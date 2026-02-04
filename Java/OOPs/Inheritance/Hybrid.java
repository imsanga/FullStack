package Java.OOPs.Inheritance;

// Hybrid Inheritance - combination of more than one type of inheritance

interface Dummy1 {
    void dummify1();
}

interface Dummy2 {
    void dummify2();
}

// multiple inheritance
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

// multilevel inheritance
class Joker extends DummyBaba {
    void dummify3() {
        System.out.println("Nattu");
    }
}

public class Hybrid {
    public static void main(String[] args) {
        Joker d1 = new Joker();
        d1.dummify1();
        d1.dummify2();
        d1.dummify3();
    }
}
