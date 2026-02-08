// Objects

let user = {
  name: "Bhavesh",
  age: 21,
  gender: "male",
};

// Classes
// Classes returns new objects everytime
// Constructor - a function which is called automatically when instance is created using class

class SmartPhone {
  constructor() {
    this.Brand = "SamSung";
    this.Series = "S";
    this.Model = "S26";
    this.Price = 135000;
  }
}

let Phone1 = new SmartPhone();

// Class with Constructor
class SmartPhone1 {
  constructor(brand, series, model, price) {
    this.Brand = brand;
    this.Series = series;
    this.Model = model;
    this.Price = price;
  }
}

let Phone2 = new SmartPhone1("Samsung", "S", "S25", 115000);

// Book Class Example
// Value of this is decided when it is being called
class Book {
  constructor(bName, bAuthor, bPrice, bColor) {
    this.bookName = bName;
    this.bookAuthor = bAuthor;
    this.bookPrice = bPrice;
    this.color = bColor;
  }
}

// Prototype - Shared Memory
Book.prototype.nextPage = function () {
  console.log("Page Changed To Next!");
};
Book.prototype.pauseReadingBook = function () {
  console.log("Book Paused!");
};
Book.prototype.previousPage = function () {
  console.log("Page Changed To Previous!");
};

let book = new Book(
  "The Power Of Your SubConcious Mind",
  "Dr. Joseph Murphy",
  1.5 + "$",
  "OffWhite",
);

// Class Expression

let Food = class {
  name = "Paneer";
  price = 1 + "$";
};

let Paneer = new Food();

// Hoisting

// let Paneer1 = new Food1();

// let Food1 = class {
//   name = "Paneer";
//   price = 1 + "$";
// };

// Inheritance

class Animal {
  constructor() {
    this.hands = 2;
    this.legs = 2;
  }

  eat() {}
  breathe() {}
}

class kekda extends Animal {
  constructor() {
    super();
    this.hands = 0;
    this.legs = 8;
  }

  bite() {}
}

let k1 = new kekda();

// Getter & Setter Methods

class Person {
  constructor() {
    // (_age)treated as a private variable
    this._age = 21;
  }

  // Getter Method
  get age() {
    return this._age;
  }

  // Setter Method - needs 1 parameter
  set newAge(val) {
    if (val < 0) {
      console.error("Age Must Be Above 0!");
      return;
    }
    // if doesn't return anything, it'll retun something
    this._age = val;
    // returning newAge
    return this._age;
  }
}

let P = new Person();

P.newAge = 22;

// Solving Questions

// Q1
let user1 = {
  name: "In Person",
  email: "user@user.user",
  login: function () {
    console.log("User Logged In!");
  },
};

user1.login();

// Q2
class Users {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  login() {
    console.log(`${this.name}Logged In!`);
  }
}

let User1Login = new Users("harsh", "harsh@harsh.com");
let User2Login = new Users("het", "het@het.com");
let User3Login = new Users("meet", "meet@meet.com");
// let users = [User1Login, User2Login, User3Login];

// users.forEach((user) => user.login());

// Q3

let Product = {
  name: "Keyboard",
  price: 1200,
  discountedPrice: function () {
    return this.price - 120;
  },
};

console.log(Product.discountedPrice());

// Q4

class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  drive() {
    return this.brand + " - " + this.speed;
  }
}

let car1 = new Car("BMW", 250);
let car2 = new Car("Bugatti", 380);

// Q5
