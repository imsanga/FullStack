package Java.OOPs.Interface;

interface Dummy {
    void show();

    static void dummify() {
        System.out.println("Dummify");
    }
}

class Dummy2 implements Dummy {
    @Override
    public void show() {
        System.out.println("Dummy2");
    }

}

public class InterfaceEx2 {
    public static void main(String[] args) {
        Dummy2 dy1 = new Dummy2();
        dy1.show();
        Dummy.dummify();
        // dy1.dummify(); // static method cannot be inherited from interface
    }

}
