package Java.OOPs.Coupling;

interface Variant {
    void carVariant();
}

interface Model {
    void carModel();
}

class Petrol implements Variant {
    @Override
    public void carVariant() {
        System.out.println("Petrol");
    }
}

class Diesel implements Variant {
    @Override
    public void carVariant() {
        System.out.println("Diesel");
    }
}

class Electric implements Variant {
    @Override
    public void carVariant() {
        System.out.println("Electric");
    }
}

class Punch implements Model {
    @Override
    public void carModel() {
        System.out.println("Punch");
    }
}

class Nexon implements Model {
    @Override
    public void carModel() {
        System.out.println("Nexon");
    }
}

class Harrier implements Model {
    @Override
    public void carModel() {
        System.out.println("Harrier");
    }
}

class Safari implements Model {
    @Override
    public void carModel() {
        System.out.println("Safari");
    }
}

class Sierra implements Model {
    @Override
    public void carModel() {
        System.out.println("Sierra");
    }
}

class Car {
    Variant vt;
    Model ml;

    Car(Variant vt, Model ml) {
        this.vt = vt;
        this.ml = ml;
    }

    void greet() {
        System.out.println("Welcome to the world of TATA cars!");
        ml.carModel();
        vt.carVariant();
    }
}

public class LooseCoupling {
    public static void main(String[] args) {
        Car customer = new Car(new Petrol(), new Safari());
        customer.greet();
    }
}