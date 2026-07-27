package fileUpload.demo.Service;

import fileUpload.demo.Dto.UserRequest;
import fileUpload.demo.Dto.UserResponse;
import fileUpload.demo.Entity.User;
import fileUpload.demo.Repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    private final UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    // create
    public UserResponse createUser(UserRequest req) {

        User user = new User();

        user.setName(req.getName());
        user.setEmail(req.getEmail());
        user.setPassword(req.getPassword());

        User savedUser = repo.save(user);

        UserResponse res = new UserResponse();

        res.setId(savedUser.getId());
        res.setName(savedUser.getName());
        res.setEmail(savedUser.getEmail());

        return res;
    }

    // read

    // read User
    public UserResponse readUser(Long Id) {

        User getUser = repo.findById(Id).orElse(null);

        if(getUser == null) return null;

        UserResponse res = new UserResponse();

        res.setId(getUser.getId());
        res.setName(getUser.getName());
        res.setEmail(getUser.getEmail());

        return res;
    }

    // read Users
    public List<UserResponse> readUsers() {
        return repo.findAll()
                .stream()
                .map(user -> {
                    UserResponse res = new UserResponse();

                    res.setId(user.getId());
                    res.setName(user.getName());
                    res.setEmail(user.getEmail());

                    return res;
                })
                .collect(Collectors.toList());
    }

    // update
    public UserResponse updateUser(Long Id, UserRequest user) {
        User existingUser = repo.findById(Id).orElse(null);

        if(existingUser == null) return null;

        existingUser.setName(user.getName());
        existingUser.setEmail(user.getEmail());
        existingUser.setPassword(user.getPassword());

        User updateUser = repo.save(existingUser);

        UserResponse res = new UserResponse();

        res.setId(updateUser.getId());
        res.setName(updateUser.getName());
        res.setEmail(updateUser.getEmail());

        return res;
    }

    // delete
    public String deleteUser(Long Id) {
        User existingUser = repo.findById(Id).orElse(null);

        if(existingUser == null) return "User not exist";

        repo.deleteById(Id);
        return "User Id " + Id  + " is deleted";
    }
}
