package Java.OOPs.Coupling;

// Tight Coupling
class PaymentMethod {
    void upi() {
        System.out.println("Paid through upi");
    }

    void bankTransfer() {
        System.out.println("Paid through bankTransfer");
    }

    void creditCard() {
        System.out.println("Paid through creditCard");
    }
}

class Payment {
    PaymentMethod md = new PaymentMethod();

    void paymentMethod(String payment) {
        switch (payment) {
            case "upi":
                md.upi();
                break;
            case "bankTransfer":
                md.bankTransfer();
                break;
            case "creditCard":
                md.creditCard();
                break;
            default:
                System.out.println("Choose any of this: upi, bankTransfer, creditCard");
        }
    }
}

public class TightCoupling {
    public static void main(String[] args) {

        Payment user1 = new Payment();
        user1.paymentMethod("upi");
        user1.paymentMethod("dummy");
    }
}