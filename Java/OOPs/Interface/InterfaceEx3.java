package Java.OOPs.Interface;

interface IPL {
    String iplSeason = "2026"; // public static final

    void rcb(); // public abstract

    // static & default methods can have body
    static void csk() { // public static
        System.out.println("CSK won ipl season " + iplSeason);
    }

    default void mi() { // public default
        System.out.println("MI won ipl season " + iplSeason);
    }
}

class Qualifiers implements IPL {
    @Override
    public void rcb() { // override method should be public
        System.out.println("RCB won ipl season " + IPL.iplSeason);
    }
}

public class InterfaceEx3 {
    public static void main(String[] args) {
        IPL q1 = new Qualifiers();
        q1.rcb();

        // static methods inside interface can be accessed by calling interface directly
        IPL.csk();

        // static methods inside interface cannot be accesed via inheritance
        // q1.csk();

        // default methods inside interface can be accesed via inheritance
        q1.mi();
    }
}