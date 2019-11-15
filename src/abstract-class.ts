/* abstract class jest swego rodzaju podłożem pod klasę */

interface CanAuthenticate {
  login(): boolean;
}

abstract class User {
  name = "bobo";
}

export class AuthenticatedUser extends User implements CanAuthenticate {
  password: string;

  login(): boolean {
    console.log(`Username ${this.name}, password: ${this.password}`);

    return false;
  }
}

const f1 = new AuthenticatedUser();
// f1.name = 'bob'
f1.password = "sdfsdf";
f1.login();
console.log(f1.name);
