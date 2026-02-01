package Java.Java_Fundamentals;

public class Operators {
    public static void main(String[] args) {
        // Arthimetic -> -,+,/,*,%
        int data1 = 5;
        int data2 = 12;
        System.out.println(data1 + data2);
        System.out.println(data1 - data2);
        System.out.println(data1 * data2);
        System.out.println(data1 % data2);

        double data3 = 5;
        double data4 = 12;
        System.out.println(data3 / data4);

        // unary -> +,-,++,--,!
        int unaryOp1 = 5;
        int unaryOp2 = +unaryOp1; // 1 * unaryOp1
        System.out.println(unaryOp2); // 5
        unaryOp2 = -unaryOp1; // -1 * unaryOp1
        System.out.println(unaryOp2); // -5

        boolean unaryOp3 = true;
        System.out.println(!unaryOp3); // false
        System.out.println(!!unaryOp3); // true

        unaryOp1 = 5;
        System.out.println(unaryOp1++); // 5
        System.out.println(unaryOp1); // 6
        System.out.println(++unaryOp1); // 7
        System.out.println(unaryOp1); // 7

        // relational -> ==, !=, >, <, >=, <= --> returns boolean
        int relation1 = 10;
        int relation2 = 5;
        System.out.println(relation1 == relation2); // false
        System.out.println(relation1 != relation2); // true
        System.out.println(relation1 > relation2); // true
        System.out.println(relation1 < relation2); // false
        System.out.println(relation1 >= relation2); // true
        System.out.println(relation1 == relation2); // false

        // logical -> &&, || --> returns boolean
        int logical1 = 10;
        int logical2 = 5;
        System.out.println(logical1 == 10 && logical2 == 7); // false
        System.out.println(logical1 == 10 && logical2 == 5); // true
        System.out.println(logical1 == 10 || logical2 == 7); // true
        System.out.println(logical1 == 5 || logical2 == 7); // false

        // assignment -> =, +=, -=, *=, /=, %=
        System.out.println(logical1 += logical2); // logical1 = logical1 + logical2 => 15

        // ternary -> condition ? trueStatement : falseStatement
        System.out.println(logical1 > logical2 ? "sanga" : "dhoni"); // sanga
    }
}
