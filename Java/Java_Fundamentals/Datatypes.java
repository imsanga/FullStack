package Java.Java_Fundamentals;

public class Datatypes {
    public static void main(String[] args) {
        // 1 byte => 8 bits

        // -128 to 127 - 1byte
        byte a = 34;
        System.out.println("byte -> " + a);

        // -32,768 to 32767 - 2byte
        short b = 34;
        System.out.println("short -> " + b);

        // -2^31 to 2^31 - 1 - 4byte
        // it can store upto 10^9
        int c = 3456;
        System.out.println("int -> " + c);

        // -2^63 to 2^63 - 1 - 8byte
        // it can store upto 10^18
        long d = 345787876;
        System.out.println("long -> " + d);

        // 4byte
        // 6 - 7 decimal digits of precision
        // default it takes as double , so declare f at end
        float e = 45.67f;
        // float e = (float) 45.67;
        System.out.println("float -> " + e);

        // 8byte
        // upto 15 decimal digits of precision
        double f = 45.675559798908989;
        System.out.println("double -> " + f);

        // 2byte
        char g = 'r';
        System.out.println("char -> " + g);

        boolean h = true;
        System.out.println("boolean -> " + h);
    }
}
