package Java.Java_Fundamentals;

public class TypeCasting {
    public static void main(String[] args) {
        // implicit - no loss in conversion
        int x = 10;
        double y = x;
        System.out.println(y);

        // explicit - loss in conversion
        double z = 10.78787;
        // int a = z; -> loss in conversion from double to int
        int a = (int) z;
        System.out.println(a);

    }
}
