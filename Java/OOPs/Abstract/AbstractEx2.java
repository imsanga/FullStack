abstract class Employee {

    // Instance variable (need not be initialized)
    String name;

    // Static variable
    static String company = "OpenAI";

    // Constructor
    Employee(String name) {
        this.name = name;
        System.out.println("Employee constructor called");
    }

    // Abstract method (no body)
    abstract void work();

    // Concrete method
    void display() {
        System.out.println("Name: " + name);
    }

    // Static method
    static void companyInfo() {
        System.out.println("Company: " + company);
    }

    // Final method
    final void attendance() {
        System.out.println("Attendance marked");
    }
}

// Abstract class extending another abstract class
abstract class Developer extends Employee {

    Developer(String name) {
        super(name);
    }

    // Still abstract, so no need to implement work()
    abstract void codingLanguage();
}

// First concrete subclass
class JavaDeveloper extends Developer {

    JavaDeveloper(String name) {
        super(name);
    }

    // Implementing inherited abstract method
    @Override
    void work() {
        System.out.println("Developing software");
    }

    // Implementing Developer's abstract method
    @Override
    void codingLanguage() {
        System.out.println("Coding in Java");
    }

    // Optional override of concrete method
    @Override
    void display() {
        System.out.println("Java Developer: " + name);
    }
}

public class AbstractEx2 {
    public static void main(String[] args) {

        // Employee e = new Employee("Rohit"); // Not allowed

        Employee emp = new JavaDeveloper("Rohit");

        emp.display();
        emp.work();

        Employee.companyInfo();

        emp.attendance();
    }
}