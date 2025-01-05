// task 5

class Book  {
 constructor(name,author,year) {
    this.name=name;
    this.author=author;
    this.year=year;
 }
 printInfo(){
    console.log(`${this.name} , ${this.author} , ${this.year}`);
 }
}

class EBook extends Book{
constructor(name,author,year,fileFormat){
    super(name,author,year);
    this.fileFormat=fileFormat;
}

  printInfo(){
    console.log(`${this.name},${this.author},${this.year},${this.fileFormat}`);
  }

  static staticEBook(bookFromClassBook,fileFormat){ 
  if(bookFromClassBook instanceof Book && typeof fileFormat==='string'){
     return new EBook (bookFromClassBook.name,bookFromClassBook.author,bookFromClassBook.year,fileFormat);
  } else {
    console.log("Wrong arguments");
  }
  }
}


const book1=new Book("The Old Man and The Sea","Hemingway",1952);
book1.printInfo();

const ebook1=EBook.staticEBook(book1,"pdf");
console.log(ebook1);




