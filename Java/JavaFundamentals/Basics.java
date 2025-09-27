package Java.JavaFundamentals;

import java.util.*;

public class Basics {
    public static void main(String[] args) {
        // hello world
        System.out.println("Sanga, welcome to the world of Java!");

        /***** datatype *****/

        // -128 to 127 -> 8bits -> 1byte
        byte num1 = 100;
        System.out.println(num1);

        // -32768 to 32767 - 16bits - 2byte
        short num2 = 100;
        System.out.println(num2);

        // -2^31 to -2^31 -1 -> 32bits -> 4byte -> less than 10^9
        int num3 = 100;
        System.out.println(num3);

        // -2^63 to -2^63 -1 -> 64bits -> 8byte -> above 10^9
        long num4 = 100;
        System.out.println(num4);

        // 6to7 decimal precision -> 32bits -> 4byte
        float num5 = 100.09f;
        System.out.println(num5);

        // upto 15 decimal precision -> 64bits -> 8byte
        double num6 = 100.67868998878;
        System.out.println(num6);

        // char - 2byte in java
        char ch = 'a';
        System.out.println(ch);

        // boolean - 1byte
        boolean fl = true;
        System.out.println(fl);

        /***** operators *****/
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
        System.out.println(++unaryOp1); // 6
        System.out.println(unaryOp1); // 6

        // relational -> ==, !=, >, <, >=, <= -> returns boolean
        int relation1 = 10;
        int relation2 = 5;
        System.out.println(relation1 == relation2); // false
        System.out.println(relation1 != relation2); // true
        System.out.println(relation1 > relation2); // true
        System.out.println(relation1 < relation2); // false
        System.out.println(relation1 >= relation2); // true
        System.out.println(relation1 == relation2); // false

        // logical -> &&, ||
        int logical1 = 10;
        int logical2 = 5;
        System.out.println(logical1 == 10 && logical2 == 7); // false
        System.out.println(logical1 == 10 && logical2 == 5); // true
        System.out.println(logical1 == 10 || logical2 == 7); // true
        System.out.println(logical1 == 5 || logical2 == 7); // false

        // asignment -> +=, -=, *=, /=, %=
        System.out.println(logical1 += logical2); // 15

        // ternary -> condition ? trueStat : falseStam
        System.out.println(logical1 > logical2 ? "sanga" : "dhoni"); // sanga

    }
}
