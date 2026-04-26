package Java.OOPs.Inheritance;

// Multilevel Inheritance - class inherits from derived class

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

class GrandSon extends Son {
    void granddSon() {
        System.out.println("GrandSon Networth: 30k");
    }
}

public class Multilevel {
    public static void main(String[] args) {
        GrandSon d1 = new GrandSon();
        d1.father();
        d1.son();
        d1.granddSon();
    }
}