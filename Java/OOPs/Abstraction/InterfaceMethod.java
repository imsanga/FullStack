package Java.OOPs.Abstraction;

// In interface,
// 1. All methods are public abstract by default (except default, static, and private methods).
// 2. All variables are public static final by default (constants; must be initialized).
// 3. Objects cannot be created for an interface.
// 4. Interface cannot have constructors.
// 5. A class implements an interface using the 'implements' keyword and must implement all abstract methods.
// 6. Interface supports multiple inheritance.

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
