package Java.OOPs;

// A constructor initializes an object and can enforce rules at the time of object creation.
// The constructor runs during object creation, at runtime.

class Welcome {
    String name;
    int age;

    Welcome(String nm, int age) {
        if (age <= 18)
            throw new IllegalArgumentException("Age must be greater than 18");
        this.age = age;
        name = nm;
    }

    void welcome() {
        System.out.println("Welcome " + name + " " + age + " to the world of Java!");
    }
}

public class Constructor {
    public static void main(String[] args) {
        Welcome no1 = new Welcome("virat", 20);
        no1.welcome();
    }
}
