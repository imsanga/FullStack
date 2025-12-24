package Java.Java_Fundamentals;

public class Arrays {
    public static void main(String[] args) {
        // 1d array
        int[] arr = { 1, 2, 3, 4, 5 };

        System.out.println(arr[0]);
        for (int i = 0; i < arr.length; i++)
            System.out.println(arr[i]);
        for (int i : arr)
            System.out.println(i);

        // 2d array
        int[][] arr2d = { { 1 }, { 1, 2 }, { 1, 2, 3 } };

        for (int i = 0; i < arr2d.length; i++) {
            for (int j = 0; j < arr2d[i].length; j++) {
                System.out.print(arr2d[i][j]);
            }
            System.out.println();
        }

        for (int[] i : arr2d) {
            for (int j : i) {
                System.out.print(j);
            }
            System.out.println();
        }
    }
}
