package fileUpload.demo.Mapper;

import fileUpload.demo.Dto.UserRequest;
import fileUpload.demo.Dto.UserResponse;
import fileUpload.demo.Entity.User;

public class UserMapper {

    public static User toEntity(UserRequest req) {

        User user = new User();

        user.setName(req.getName());
        user.setEmail(req.getEmail());
        user.setPassword(req.getPassword());

        return user;
    }

    public static UserResponse toResponse(User user) {

        UserResponse res = new UserResponse();

        res.setId(user.getId());
        res.setName(user.getName());
        res.setEmail(user.getEmail());

        return res;
    }
}
