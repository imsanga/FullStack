import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v2")
public class ControllerDummy {

    @Autowired
    ServiceDummy service;

    @GetMapping("/greet")
    public String greet() {
        return service.getDetails();
    }
}
