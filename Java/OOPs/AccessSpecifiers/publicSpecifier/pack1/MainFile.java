package Java.OOPs.AccessSpecifiers.publicSpecifier.pack1;

import Java.OOPs.AccessSpecifiers.publicSpecifier.pack2.File2;

// rules for public
// -> class must be public
// -> variables,methods must be public
// -> use import (if different package)

public class MainFile {
    public static void main(String[] args) {
        // File1 f1 = new File1();
        // System.out.println(f1.name);
        // f1.greet();

        File2 f2 = new File2();
        System.out.println(f2.name);
        f2.greet();
    }
}
