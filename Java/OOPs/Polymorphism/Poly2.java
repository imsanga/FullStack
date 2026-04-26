package Java.OOPs.Polymorphism;

class StockExchange {
    void message(String stockName, int price, int units) {
        System.out.println("U bought " + stockName + " stock, " + units + " units @price " + price + " in Groww");
    }

    void message(String name) {
        System.out.println("Welcome " + name + ", to Groww App");
    }
}

class FestiveWelcome extends StockExchange {
    @Override
    void message(String stockName, int price, int units) {
        System.out.println("*** Festive offer u get 1% cashback on how much amount trading today ***");
        System.out.println("U bought " + stockName + " stock, " + units + " units @price " + price + " in Groww");
    }
}

public class Poly2 {
    public static void main(String[] args) {
        // compile time polymorphism
        StockExchange user1 = new StockExchange();
        user1.message("Sanga");
        user1.message("ITC", 325, 5);

        // run time polymorphism
        StockExchange user2 = new FestiveWelcome();
        user2.message("Sanga");
        user2.message("ITC", 325, 5);
    }
}
