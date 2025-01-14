//task 1

const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 0) {
    zeroCount += 1;
  }

  if (numbers[i] > 0) {
    positiveCount += 1;
  }

  if (numbers[i] < 0) {
    negativeCount += 1;
  }
}

console.log('Amound of positive numbers:', positiveCount);
console.log('Amound of negative numbers:', negativeCount);
console.log('Amound of zero numbers:', zeroCount);

//task 2

const initialArr = [1, 2, 3, 4, 5];
const nextArr = initialArr.map((element, index) => element * index);
console.log('New array:', nextArr);

//task 3

const notReducedArray = [10, 20, 30, 40, 50];
const reducedArray = notReducedArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log('Sum of array=', reducedArray);

//task 4

const notFilteredNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = notFilteredNumbers.filter((number) => number % 2 === 0);
console.log('An array has next even numbers:', filteredNumbers);

//task 5

const firstArray = [' Value ', ' in ', ' first ', ' array '];
const secondArray = [' and ', ' this ', ' one ', ' is ', ' the ', ' second '];
const twoArrays = firstArray.concat(secondArray);
console.log('Concat 2 arrays: ', twoArrays);

//task 6

const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const newNumbersList = [].concat(numbersList);
newNumbersList.sort((a, b) => a - b);
console.log('An old list:', numbersList);
console.log('A new list:', newNumbersList);
