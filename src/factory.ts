/* factory (fabryka) - tworzenie obiektów które są wstępnie lub całkowicie wypełnione */
class Whatever {
  constructor(private name: string, private type: string) {}
}

class Whatever2 {
  constructor(private emailPrefix: string, private emailSuffix: string) {}
}

class WhateverFactory {
  createWhatever(name: string) {
    return new Whatever(name, "type1");
  }
}
class UserFactory {
  createUsermail(emailPrefix: string) {
    return new Whatever2(emailPrefix, "@gmail.com");
  }
}

const whateverFactory = new WhateverFactory();
const w1 = whateverFactory.createWhatever("name 1");
console.log(w1);

const userFactory = new UserFactory();
const w2 = userFactory.createUsermail("arturm");

console.log(w2); //arturm@gmail.com

/////////////////////
class UserFactory2 {
  constructor(private emailSuffix: string) {} // private lub public z automatu tworzy pole emailsuffix

  createUsermail(emailPrefix: string) {
    return new Whatever2(emailPrefix, this.emailSuffix);
  }
}
const userFactory2 = new UserFactory2("@gmail.com");
const user123 = userFactory2.createUsermail("arti");
