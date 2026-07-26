package Java.OOPs.Coupling;

// Loose Coupling
interface PaymentMethod {
    void paymentMethod();
}

class UPI implements PaymentMethod {
    public void paymentMethod() {
        System.out.println("Paid through upi");
    }
}

class BankTransfer implements PaymentMethod {
    public void paymentMethod() {
        System.out.println("Paid through bankTransfer");
    }
}

class CreditCard implements PaymentMethod {
    public void paymentMethod() {
        System.out.println("Paid through creditCard");
    }
}

public class LooseCoupling {
    public static void main(String[] args) {

        PaymentMethod user;

        user = new CreditCard();
        user.paymentMethod();

        user = new BankTransfer();
        user.paymentMethod();
    }
}