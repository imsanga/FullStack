package Java.OOPs.Coupling;

class Variant {
    void Petrol() {
        System.out.println("Petrol");
    }

    void Diesel() {
        System.out.println("Diesel");
    }

    void Electric() {
        System.out.println("Electric");
    }
}

class Model {
    void Punch() {
        System.out.println("Punch");
    }

    void Nexon() {
        System.out.println("Nexon");
    }

    void Harrier() {
        System.out.println("Harrier");
    }

    void Safari() {
        System.out.println("Safari");
    }

    void Sierra() {
        System.out.println("Sierra");
    }
}

class Car {
    Variant customerVariant = new Variant();
    Model customerModel = new Model();

    void greet() {
        System.out.println("Welcome to the world of TATA cars!");
        customerModel.Punch();
        customerVariant.Petrol();
    }
}

public class TightCoupling {
    public static void main(String[] args) {
        Car customer = new Car();
        customer.greet();
    }
}