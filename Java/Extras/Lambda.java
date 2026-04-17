package Java.Extras;

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