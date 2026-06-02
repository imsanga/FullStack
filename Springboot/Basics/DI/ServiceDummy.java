import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServiceDummy {
    @Autowired
    RepositoryDummy repo;

    String getDetails() {
        return repo.greet;
    }
}
