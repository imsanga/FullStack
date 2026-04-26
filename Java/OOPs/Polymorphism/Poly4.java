package Java.OOPs.Polymorphism;

class Ride {
    void book() {
        System.out.println("Booking a ride");
    }
}

class Mini extends Ride {
    @Override
    void book() {
        System.out.println("Mini ride booked");
    }
}

class SUV extends Ride {
    @Override
    void book() {
        System.out.println("SUV ride booked");
    }
}

class Sedan extends Ride {
    @Override
    void book() {
        System.out.println("Sedan ride booked");
    }
}

public class Poly4 {
    public static void main(String[] args) {

        Ride r; // Parent reference

        r = new Mini();
        r.book();

        r = new SUV();
        r.book();

        r = new Sedan();
        r.book();
    }
}