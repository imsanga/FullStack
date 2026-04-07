package Java.OOPs.AccessSpecifiers.protectedSpecifier.pack1;

import Java.OOPs.AccessSpecifiers.protectedSpecifier.pack2.File2;

// rules for protected specifier
// -- we can access it in same class
// -- other class in same package
// -- classes in other package - via inheritance with child reference

// other class in same package
// public class MainFile {
//     public static void main(String[] args) {
//         File1 f1 = new File1();
//         System.out.println(f1.name);
//         f1.greet();
//     }
// }

// classes in other package - via inheritance with child reference
public class MainFile extends File2 {
    public static void main(String[] args) {

        MainFile mf = new MainFile();
        System.out.println(mf.name);
        mf.greet();

    }
}
