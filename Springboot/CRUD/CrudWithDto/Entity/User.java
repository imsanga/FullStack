package fileUpload.demo.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "dummy2")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    private String name;
    private String email;
    private Integer password;

}
