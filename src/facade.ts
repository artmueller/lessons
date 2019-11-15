/* fasada zamyka trudną logikę w jednej klasie wystawiając prostą funkcję/metodę na zewnątrz */

class UsersService {
  save(user: any) {
    // ...
  }
}
class PasswordEncoder {
  encode(pass: string) {
    // ...
  }
}
class LoggingService {
  log(message: string) {
    // ..
  }
}

interface UserCrationRequest {
  username: string;
  password: string;
}

class UserCreationFacade {
  constructor(
    private usersService: UsersService,
    private loggingService: LoggingService,
    private encoder: PasswordEncoder
  ) {}

  createUser(creationRequest: UserCrationRequest) {
    this.loggingService.log("Creating user: " + creationRequest.username);

    this.usersService.save({
      name: creationRequest.username,
      password: this.encoder.encode(creationRequest.password)
    });

    this.loggingService.log("Created user: " + creationRequest.username);
  }
}

///////////////////////////
const userCreationFacade = new UserCreationFacade(
  new UsersService(),
  new LoggingService(),
  new PasswordEncoder()
);

const user = userCreationFacade.createUser({
  username: "bob",
  password: "password"
});
