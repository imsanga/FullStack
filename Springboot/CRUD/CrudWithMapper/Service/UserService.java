package fileUpload.demo.Service;

import fileUpload.demo.Dto.UserRequest;
import fileUpload.demo.Dto.UserResponse;
import fileUpload.demo.Entity.User;
import fileUpload.demo.Mapper.UserMapper;
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

        User savedUser = UserMapper.toEntity(req);
        User getUser = repo.save(savedUser);
        return UserMapper.toResponse(getUser);

    }

    // read

    // read User
    public UserResponse readUser(Long Id) {

        User getUser = repo.findById(Id).orElse(null);

        if(getUser == null) return null;

        return UserMapper.toResponse(getUser);
    }

    // read Users
    public List<UserResponse> readUsers() {
        return repo.findAll()
                .stream()
                .map(user -> UserMapper.toResponse(user))
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

        return UserMapper.toResponse(updateUser);
    }

    // delete
    public String deleteUser(Long Id) {
        User existingUser = repo.findById(Id).orElse(null);

        if(existingUser == null) return "User not exist";

        repo.deleteById(Id);
        return "User Id " + Id  + " is deleted";
    }
}
