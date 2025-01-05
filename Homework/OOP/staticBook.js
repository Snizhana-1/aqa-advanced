// task 4

class Book  {
 constructor(name,author,year) {
    this.name=name;
    this.author=author;
    this.year=year;
 }

 static theOldestBook(books){
    return books.reduce((oldest,current)=>current.year<oldest.year?current:oldest);
 }
 printInfo(){
    console.log(`${this.name} , ${this.author} , ${this.year}`);
 }
}
const book1=new Book("The Old Man and The Sea","Hemingway",1952);
book1.printInfo();


const book2=new Book("Robinson Krusoe","Daniel Defoe",1719);
book2.printInfo();


class EBook extends Book{
constructor(name,author,year,fileFormat){
    super(name,author,year);
    this.fileFormat=fileFormat;
}
  printInfo(){
    console.log(`${this.name},${this.author},${this.year},${this.fileFormat}`);
  }
}

const book3=new EBook("The Little Prince" ,"de Saint-Exupery", 1943, "txt");
book3.printInfo();


const booksArray=[book1,book2,book3];
const oldestBook=Book.theOldestBook(booksArray);
console.log("The oldest book is: ",);
oldestBook.printInfo();


