//task 1

const student = {
  firstName: 'Sophie',
  lastName: 'Kaidash',
  age: 22,
  courses: ['Math', 'English', 'Spanish'],
};

console.log(student);

//task 2

const book = {
  title: 'The Hero with a Thousand Faces',
  author: 'Joseph Campbell',
  year: 1949,
};

const { title, author } = book;

console.log(title);
console.log(author);

//task 3

const car1 = { brand: 'Ford Mustang', model: 'Fastback', year: 1967 };

const car2 = { brand: 'Chevrolet', model: 'Impala', owner: 1967 };

const car3 = { ...car1, ...car2 };

console.log(car3);

//task 4

const person = {
  firstName: 'Sophie',
  lastName: 'Kaidash',
  age: 22,
};

person.email = 'sophie.k@gmail.com';
delete person.age;
console.log(person);

//task 5

const users = [
  { name: 'Oleh', email: 'oleh.o@gmail.com', age: 34 },
  { name: 'Anna', email: 'anna.a@gmail.com', age: 41 },
  { name: 'Kira', email: 'kira.k@gmail.com', age: 29 },
];

for (let num of users) {
  console.log(num);
}

for (let { name, email, age } of users) {
  console.log(`Name:${name} Email:${email} Age:${age}`);
}
