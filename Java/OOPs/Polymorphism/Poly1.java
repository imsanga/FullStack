package Java.OOPs.Polymorphism;

class AccountHolderDetails {
    boolean seniorCitizen;
    String name;
    int interestRate;

    // Method overloading
    public void setDetails(String name) {
        this.name = name;
        this.seniorCitizen = false;
    }

    public void setDetails(String name, boolean seniorCitizen) {
        this.name = name;
        this.seniorCitizen = seniorCitizen;
    }

    public void interestRate() {
        this.interestRate = 6;
    }

    public void displayAccountDetails() {
        System.out.println("Account Details");
        System.out.println("Name: " + name);
        System.out.println("Senior Citizen: " + seniorCitizen);
        System.out.println("Interest Rate: " + interestRate);
    }
}

class FixedDepositSBI extends AccountHolderDetails {
    @Override
    public void interestRate() {
        if (seniorCitizen) {
            interestRate = 8;
        } else {
            interestRate = 7;
        }
    }
}

public class Poly1 {
    public static void main(String[] args) {

        AccountHolderDetails acc1 = new AccountHolderDetails();
        acc1.setDetails("Vijaya", true); // compiletimepoly
        acc1.interestRate();
        acc1.displayAccountDetails();

        AccountHolderDetails acc2 = new FixedDepositSBI(); // runtimepoly
        acc2.setDetails("Santha");
        acc2.interestRate();
        acc2.displayAccountDetails();
    }
}
