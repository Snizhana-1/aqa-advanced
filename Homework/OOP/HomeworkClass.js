// task 3

class Book {
  constructor(name, author, year) {
    this._name = name;
    this._author = author;
    this._year = year;
  }
  get name() {
    return this._name;
  }
  get author() {
    return this._author;
  }
  get year() {
    return this._year;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      console.log('Please enter the string type');
    }
  }

  set author(value) {
    if (typeof value === 'string') {
      this._author = value;
    } else {
      console.log('Please enter the string type');
    }
  }

  set year(value) {
    if (Number.isInteger(value) && value > 0) {
      this._year = value;
    } else {
      console.log('Year must be a positive integer.');
    }
  }

  printInfo() {
    console.log(`${this.name}, ${this.author}, ${this.year}`);
  }
}

const book1 = new Book('The Old Man and The Sea', 'Hemingway', 1952);
book1.printInfo();
book1.name = 'New Name';
book1.printInfo();

const book2 = new Book('Robinson Krusoe', 'Daniel Defoe', 1719);
book2.printInfo();

class EBook extends Book {
  constructor(name, author, year, fileFormat) {
    super(name, author, year);
    this._fileFormat = fileFormat;
  }
  get fileFormat() {
    return this._fileFormat;
  }
  set fileFormat(value) {
    if (typeof value === 'string') {
      this._fileFormat = value;
    } else {
      console.log('Please enter the string type');
    }
  }

  printInfo() {
    console.log(
      `${this.name}, ${this.author}, ${this.year}, ${this.fileFormat}`,
    );
  }
}

const book3 = new EBook('The Little Prince', 'de Saint-Exupery', 1943, 'txt');
book3.printInfo();
book3.fileFormat = 'pdf';
book3.printInfo();
