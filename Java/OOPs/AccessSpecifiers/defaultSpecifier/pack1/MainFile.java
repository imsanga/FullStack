package Java.OOPs.AccessSpecifiers.defaultSpecifier.pack1;

// import Java.OOPs.AccessSpecifiers.defaultSpecifier.pack2.File2;

// rules for default specifier
// -- we can access it in same class
// -- other class in same package
// -- classes in other package - not allowed

public class MainFile {
    public static void main(String[] args) {
        File1 f1 = new File1();
        System.out.println(f1.name);
        f1.greet();

        // classes in other package - not allowed
        // File2 f2 = new File2();
        // System.out.println(f2.name);
        // f2.greet();
    }
}
