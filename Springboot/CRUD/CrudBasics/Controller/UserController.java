package fileUpload.demo.Controller;

import fileUpload.demo.Entity.User;
import fileUpload.demo.Service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return service.createUser(user);
    }

    @GetMapping("/{Id}")
    public User readUser(@PathVariable Long Id) {
        return service.readUser(Id);
    }

    @GetMapping
    public List<User> readUsers() {
        return service.readUsers();
    }

    @PutMapping("/{Id}")
    public User updateUser(@PathVariable Long Id, @RequestBody User user) {
        return service.updateUser(Id, user);
    }

    // delete
    @DeleteMapping("/{Id}")
    public String deleteUser(@PathVariable Long Id) {
        return service.deleteUser(Id);
    }
}
