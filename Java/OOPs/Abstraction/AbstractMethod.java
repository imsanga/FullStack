package Java.OOPs.Abstraction;

abstract class RBI {
    static int rbiRegulation = 2026;

    abstract void rbiRegulation();
}

class SBI extends RBI {
    public void rbiRegulation() {
        System.out.println("SBI implemented all the regulation for the year " + RBI.rbiRegulation);
        System.out.println("Happy New Year " + RBI.rbiRegulation);
    }
}

class HDFC extends RBI {
    public void rbiRegulation() {
        System.out.println("HDFC implemented all the regulation for the year " + RBI.rbiRegulation);
        System.out.println("Happy New Year " + RBI.rbiRegulation);
    }
}

public class AbstractMethod {
    public static void main(String[] args) {
        RBI sbiChennai = new SBI();
        sbiChennai.rbiRegulation();

        RBI hdfcChennai = new HDFC();
        hdfcChennai.rbiRegulation();
    }
}
