document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

//sigleton
class FooService {
  private static instance = new FooService();
  private constructor() {}

  static getInstance() {
    return this.instance;
  }
}

const fooService = FooService.getInstance(); /// end singleton

// difference between this and className
class User {
  static email = "assad@asds";
  constructor(private name) {}

  getName() {
    return this.name;
  }

  getEmail() {
    return User.email;
  }
}

const user1 = new User("bob");
const user2 = new User("alice");

console.log(user1.getName()); // 'bob'
console.log(user2.getName()); // 'alice'

console.log(user1.getEmail()); //'assad@asds'
console.log(user2.getEmail()); //'assad@asds'
User.email = "dsfsdf";
console.log(user2.getEmail()); //'dsfsdf'
console.log(user1.getEmail()); //'dsfsdf'

//end of difference between this and className

const sdfsd = {
  foo: "qwew"
};

foo(sdfsd);

console.log(sdfsd);

function foo(obiekt: any) {
  obiekt.foo = "cvxcvxcvxcv";
}
