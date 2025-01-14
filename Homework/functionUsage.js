//task 1

function handleNum(number, callbackEven, callbackOdd) {
  if (number % 2 === 0) {
    callbackEven();
  } else {
    callbackOdd();
  }
}

function callbackEven() {
  console.log('number is even');
}
function callbackOdd() {
  console.log('number is odd');
}

handleNum(4, callbackEven, callbackOdd);
handleNum(9, callbackEven, callbackOdd);

//task 2

function number(num) {
  if (num <= 0) {
    console.log('End of function');
    return;
  }
  console.log(num);
  return number(num - 1);
}

number(5);

//task 3

function divide(numerator, denominator) {
  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error('Arguments must be numbers!');
  }
  if (denominator === 0) {
    throw new Error('Division by zero is impossible!');
  }
  return numerator / denominator;
}

try {
  console.log('Result:', divide(10, 2));
} catch (error) {
  console.log('We found the error: ', error.message);
} finally {
  console.log('Work completed');
}

try {
  console.log('Result:', divide(10, 0));
} catch (error) {
  console.log('We found the error: ', error.message);
} finally {
  console.log('Work completed');
}

try {
  console.log('Result:', divide(10, '2'));
} catch (error) {
  console.log('We found the error: ', error.message);
} finally {
  console.log('Work completed');
}

try {
  console.log('Result:', divide('10', 5));
} catch (error) {
  console.log('We found the error: ', error.message);
} finally {
  console.log('Work completed');
}
