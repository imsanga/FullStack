package Java.OOPs.Abstraction;

abstract class RBI {
    RBI() {
        System.out.println("Implement all the regulation for the year 2026");
    }

    abstract void rbi2026Regulation();

    void wishes() {
        System.out.println("Happy New year 2026");
    }

}

class SBI extends RBI {
    void rbi2026Regulation() {
        System.out.println("SBI implemented all the regulation for the year 2026");
    }
}

class HDFC extends RBI {
    void rbi2026Regulation() {
        System.out.println("HDFC implemented all the regulation for the year 2026");
    }
}

public class AbstractMethod {
    public static void main(String[] args) {
        RBI sbiChennai = new SBI();
        sbiChennai.rbi2026Regulation();
        sbiChennai.wishes();

        RBI hdfcChennai = new HDFC();
        hdfcChennai.rbi2026Regulation();
        hdfcChennai.wishes();
    }
}
