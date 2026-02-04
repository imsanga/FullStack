package Java.OOPs.Abstraction;

interface RBI {
    // RBI() { //cannnot have constructors
    // System.out.println("Implement all the regulation for the year 2026");
    // }

    int rbiRegulation = 2026; // default -> public static final

    void rbi2026Regulation(); // default -> public abstract

    // void wishes() { // interface abstract methods cannot have body (except
    // default/static)
    // System.out.println("Happy New year 2026");
    // }

}

class SBI implements RBI {
    public void rbi2026Regulation() {
        System.out.println("SBI implemented all the regulation for the year 2026");
        System.out.println("Happy New Year " + rbiRegulation);
    }
}

class HDFC implements RBI {
    public void rbi2026Regulation() {
        System.out.println("HDFC implemented all the regulation for the year 2026");
        System.out.println("Happy New Year " + rbiRegulation);
    }
}

public class InterfaceMethod {
    public static void main(String[] args) {
        RBI sbiChennai = new SBI();
        sbiChennai.rbi2026Regulation();

        RBI hdfcChennai = new HDFC();
        hdfcChennai.rbi2026Regulation();
    }
}
