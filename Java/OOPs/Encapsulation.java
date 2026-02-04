package Java.OOPs;

class AccountHolderDetails {

    private String name;
    private int accountNo;

    // Setter methods
    public void setName(String name) {
        this.name = name;
    }

    public void setAccountNo(int accountNo) {
        this.accountNo = accountNo;
    }

    // Getter methods
    public String getName() {
        return name;
    }

    public int getAccountNo() {
        return accountNo;
    }
}

public class Encapsulation {
    public static void main(String[] args) {

        AccountHolderDetails accHolder1 = new AccountHolderDetails();
        accHolder1.setName("Sangameshwaran");
        accHolder1.setAccountNo(12345);

        System.out.println("Account Holder Details");
        System.out.println("Name: " + accHolder1.getName());
        System.out.println("Account Number: " + accHolder1.getAccountNo());
    }
}
