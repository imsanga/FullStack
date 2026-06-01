import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class ControllerBasics {

    // get request
    @GetMapping("/greet")
    String helloWorld1() {
        return "Hello World!";
    }

    @GetMapping("/getUser")
    String getUser() {
        return "Sanga";
    }

    // post request(creates data) & path variable
    // http://localhost:8080/api/v1/sanga
    @PostMapping("/{getUserDetails}")
    String getUserDetails(@PathVariable String getUserDetails) {
        return "userName: " + getUserDetails;
    }

    // http://localhost:8080/api/v1/createUser1?userName=sanga
    @PostMapping("/createUser1")
    String createUserDetails1(@RequestParam String userName) {
        return "userName: " + userName;
    }

    // http://localhost:8080/api/v1/createUser2?userName=sanga&password=dummy
    @PostMapping("/createUser2")
    String createUserDetails2(@RequestParam String userName, @RequestParam String password) {
        return "userName: " + userName + ", password: " + password;
    }

    // http://localhost:8080/api/v1/createUser3?instaName=sanga&instaPassword=dummy
    @PostMapping("/createUser3")
    String createUserDetails3(@RequestParam("instaName") String userName,
            @RequestParam("instaPassword") String password) {
        return "userName: " + userName + ", password: " + password;
    }

    // http://localhost:8080/api/v1/createUser4
    // json format
    // {
    // "userName": "sanga",
    // "password": "dummy"
    // }
    @PostMapping("/createUser4")
    String createUserDetails4(@RequestBody String body) {
        return body;
    }

    // put - updates entirely
    @PutMapping("/greet")
    String updateUserDetails() {
        return "Hello World!";
    }

    // delete - deletes data
    @DeleteMapping("/greet")
    String deleteUserDetails() {
        return "Hello World!";
    }
}