package Java.OOPs;

//Inheritance - a subclass is derived from a base class, where subclass can access all the data members and methods of base class except those declared as private

class Grandfather {
    int grandfatherAsset = 5;
}

class Father extends Grandfather {
    int fatherAsset = 10;
}

class Son extends Father {
    int sonAsset = 15;
}

public class Inheritance {
    public static void main(String[] args) {
        Son son = new Son();
        System.out.println("Son generational wealth");
        System.out.println("GrandFather wealth: " + son.grandfatherAsset);
        System.out.println("Father wealth: " + son.fatherAsset);
        System.out.println("Son wealth: " + son.sonAsset);
        System.out.println("Total generational wealth: " + (son.grandfatherAsset + son.fatherAsset));
        System.out.println("Son Networth: " + (son.grandfatherAsset + son.fatherAsset + son.sonAsset));

    }
}
