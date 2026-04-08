package Java.OOPs.Static;

class Parent {
    static void show() {
        System.out.println("Parent");
    }
}

class Child extends Parent {
    static void show() {
        System.out.println("Child");
    }
}

// hiding - based on refrence it executes not by object
public class Hiding {
    public static void main(String[] args) {
        Parent pObj = new Child();
        pObj.show(); // o/p - Parent
    }

}
