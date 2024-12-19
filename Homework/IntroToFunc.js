//task1

function rectangleDeclaration (width , height) {
   let rectangleArea=width*height;
   return console.log("The area of the rectangle=",rectangleArea);
}

rectangleDeclaration(5,10);

const rectangleExpression=function(width , height) {
    let rectangleArea=width*height;
    return console.log("The area of the rectangle=",rectangleArea);
}

rectangleExpression(6,11);

const rectangleArrowFunc=(width , height)=>{
    let rectangleArea=width*height;
    return console.log("The area of the rectangle=",rectangleArea);
}

rectangleArrowFunc(7,12);

//task2

function isPersonAdult(age) {
  age>=18? console.log (true) : console.log(false);
  return age;
}

isPersonAdult(25);

isPersonAdult(15);

//task3

function checkOrder (available , ordered ) {
   if (available < ordered) {
    console.log ( " Your order is too large, we dont have enough goods " );
    return;
   }

   if (ordered === 0) {
    console.log ( " Your order is empty " );
    return;
   }

    console.log ( " Your order is accepted " );
   
}

checkOrder(0,60);

checkOrder(60,60);

checkOrder(60,0);
