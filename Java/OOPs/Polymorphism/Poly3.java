package Java.OOPs.Polymorphism;

class Dummy {
    public void dummy1(int a, int b) {
        System.out.println("dummy1 -> " + a + " " + b);
    }

    public void dummy1(int a, int b, int c) {
        System.out.println("dummy1 -> " + a + " " + b + " " + c);
    }

}

class Dummy2 extends Dummy {
    @Override
    public void dummy1(int a, int b, int c) {
        System.out.println("dummy2 -> " + a + " " + b + " " + c);
    }
}

public class Poly3 {
    public static void main(String[] args) {
        Dummy dy1 = new Dummy2();
        dy1.dummy1(1, 2);
        dy1.dummy1(1, 2, 3);
    }
}