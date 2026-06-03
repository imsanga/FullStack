package fileUpload.demo.Service;

import fileUpload.demo.Entity.User;
import fileUpload.demo.Repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    // create
    public User createUser(User user) {
        return repo.save(user);
    }

    // read

    // read User
    public User readUser(Long Id) {
        return repo.findById(Id).orElse(null);
    }

    // read Users
    public List<User> readUsers() {
        return repo.findAll();
    }

    // update
    public User updateUser(Long Id, User user) {
        User existingUser = repo.findById(Id).orElse(null);

        if(existingUser == null) return null;

        existingUser.setName(user.getName());
        existingUser.setEmail(user.getEmail());

        return repo.save(existingUser);
    }

    // delete
    public String deleteUser(Long Id) {
        User existingUser = repo.findById(Id).orElse(null);

        if(existingUser == null) return "User not exist";

        repo.deleteById(Id);
        return "User Id " + Id  + " is deleted";
    }
}
