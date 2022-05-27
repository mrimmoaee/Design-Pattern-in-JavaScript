class Address {
  constructor(zip, street) {
    this.zip = zip;
    this.street = street;
  }
}

class User {
  constructor(name, age, phone, address) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.address = address;
  }
}

// this is confusing what is actually setting here for undefined and also in future
// more number of field can be added to phone or age then it will be quite difficult to maintain

const user = new User("Bob", undefined, undefined, new Address("1", "Main"));

console.log(user);
