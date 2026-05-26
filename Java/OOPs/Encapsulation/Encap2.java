class Aadhaar {
    private String aadharNo = "1234 5678 1234";
    private String phno, otp;

    public void setPhno(String phno) {
        this.phno = phno;
    }

    public void setOtp(String otp) {
        this.otp = otp;
    }

    public String getAadhar() {
        if (!phno.isEmpty() && phno.length() == 10 && !otp.isEmpty() && otp.length() == 6)
            return "aadharNo" + " -> " + aadharNo;
        else
            return "entered phone number or otp is incorrect";
    }
}

public class Encap2 {
    public static void main(String[] args) {
        Aadhaar sample = new Aadhaar();
        sample.setPhno("1234567890");
        sample.setOtp("123456");
        String op = sample.getAadhar();
        System.out.println(op);

        Aadhaar sample2 = new Aadhaar();
        sample2.setPhno("1234567890266");
        sample2.setOtp("1234562666");
        String op2 = sample2.getAadhar();
        System.out.println(op2);
    }
}