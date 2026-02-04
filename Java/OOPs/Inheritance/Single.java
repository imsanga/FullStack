package Java.OOPs.Inheritance;

// single inheritance - class is inherited from a base class

class Father {
    void father() {
        System.out.println("Father Networth: 10k");
    }
}

class Son extends Father {
    void son() {
        System.out.println("Son Networth: 20k");
    }
}

public class Single {
    public static void main(String[] args) {
        Son d1 = new Son();
        d1.father();
        d1.son();
    }
}