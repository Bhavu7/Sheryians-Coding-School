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
