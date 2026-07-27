package Java.Extras.Generics;

class Common<T> {
    private T commonValue;

    public T show(T cv) {
        this.commonValue = cv;
        return commonValue;
    }
}

public class GenericClass {
    public static void main(String[] args) {
        Common<Integer> c1 = new Common<>();
        System.out.println(c1.show(123));

        Common<Boolean> c2 = new Common<>();
        System.out.println(c2.show(true));

        Common<String> c3 = new Common<>();
        System.out.println(c3.show("sanga"));
    }
}