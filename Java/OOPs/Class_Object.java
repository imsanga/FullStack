package Java.OOPs;

// class - blueprint for an onject
// object - n no of object can be created from a class

class Welcome {
    void welcome(String name) {
        System.out.println("Welcome " + name + " to the world of Java!");
    }
}

public class Class_Object {
    public static void main(String[] args) {
        Welcome no1 = new Welcome();
        no1.welcome("virat");
    }
}
