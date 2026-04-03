package Java.OOPs;

public class Functions {
    static void dummy1() {
        System.out.println("Dummy1 called");
    }

    // with arguments, parameters
    static void dummy2(String name, int age) {
        System.out.println("Dummy2 called " + name + " of age " + age);
    }

    // with return
    static String dummy3(int monthlyIncome) {
        return "Dummy3 yearly income is " + (monthlyIncome * 12);
    }

    public static void main(String[] args) {
        dummy1();
        dummy2("Sanga", 25);
        System.out.println(dummy3(50400));
    }

}