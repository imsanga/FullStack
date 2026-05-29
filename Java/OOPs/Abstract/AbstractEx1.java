package Java.OOPs.Abstract;

abstract class Dummy {
    abstract void welcome1();

    abstract void welcome2();

    void dummify() {
        System.out.println("Sanga");
    }
}

class DummyBaba extends Dummy {
    @Override
    void welcome1() {
        System.out.println("Virat");
    }

    @Override
    void welcome2() {
        System.out.println("Mahi");
    }

}

public class AbstractEx1 {
    public static void main(String[] args) {
        Dummy d1 = new DummyBaba();
        d1.dummify();
        d1.welcome1();
        d1.welcome2();
    }
}
