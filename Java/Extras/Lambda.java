package Java.Extras;

// lambda - A lambda expression is a concise way to represent an anonymous implementation of a functional interface.

// Without Lambda:
// Create anonymous class
// Override method
// Write full structure

// With Lambda:
// Java already knows method name (sum)
// You just give logic
// No class, no method writing

interface Add {
    int sum(int a, int b);
}

// without lambda
// public class Lambda {
// public static void main(String[] args) {

// Add obj = new Add() {
// public int sum(int a, int b) {
// return a + b;
// }
// };

// System.out.println(obj.sum(2, 3));
// }
// }

// with lambda
public class Lambda {
    public static void main(String[] args) {

        Add obj = (a, b) -> a + b;

        System.out.println(obj.sum(2, 3));
    }
}