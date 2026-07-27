package Java.OOPs.Abstraction;

interface RBI {
    int rbiRegulation = 2026;

    void rbiRegulation();
}

class SBI implements RBI {
    public void rbiRegulation() {
        System.out.println("SBI implemented all the regulation for the year " + RBI.rbiRegulation);
        System.out.println("Happy New Year " + RBI.rbiRegulation);
    }
}

class HDFC implements RBI {
    public void rbiRegulation() {
        System.out.println("HDFC implemented all the regulation for the year " + RBI.rbiRegulation);
        System.out.println("Happy New Year " + RBI.rbiRegulation);
    }
}

public class InterfaceMethod {
    public static void main(String[] args) {
        RBI sbiChennai = new SBI();
        sbiChennai.rbiRegulation();

        RBI hdfcChennai = new HDFC();
        hdfcChennai.rbiRegulation();
    }
}
