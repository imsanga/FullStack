package fileUpload.demo.Controller;

import fileUpload.demo.Dto.UserRequest;
import fileUpload.demo.Dto.UserResponse;
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
    public UserResponse createUser(@RequestBody UserRequest user) {
        return service.createUser(user);
    }

    @GetMapping("/{Id}")
    public UserResponse readUser(@PathVariable Long Id) {
        return service.readUser(Id);
    }

    @GetMapping
    public List<UserResponse> readUsers() {
        return service.readUsers();
    }

    @PutMapping("/{Id}")
    public UserResponse updateUser(@PathVariable Long Id, @RequestBody UserRequest user) {
        return service.updateUser(Id, user);
    }

    // delete
    @DeleteMapping("/{Id}")
    public String deleteUser(@PathVariable Long Id) {
        return service.deleteUser(Id);
    }
}

