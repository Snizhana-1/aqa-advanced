//task1 if-else

const averageGrade = 85;

if (averageGrade<60) {
   console.log("unsatisfied");
} else if ( averageGrade>= 60 && averageGrade <= 70){
    console.log("satisfied");
} else if ( averageGrade>= 71 && averageGrade <= 80){
    console.log("good");
} else if ( averageGrade>= 81 && averageGrade <= 90){
    console.log("very good");
} else if ( averageGrade>= 91 && averageGrade <= 100){
    console.log("excellent");
} else {
    console.log("Invalid evaluation value");
}

//task2 switch-case

const gradeRange=Math.floor(averageGrade/10);

switch (gradeRange) {

    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("unsatisfied");
        break;

    case 6:
        console.log("satisfied");
        break;

    case 7:
        console.log("good");
        break;

    case 8:
        console.log("very good");
        break;

    case 9:
    case 10:
        console.log("excellent");
        break;

    default:
        console.log("Invalid evaluation value");

}

//task3.1 for

const number = 3;

for (let i=1;i<=10;i++) {
    console.log (`FOR ${number}*${i} = ` , number*i);
}

//task3.2 while 

let count = 1;
while (count<=10) {
    console.log(`WHILE ${number}*${count} = `,number*count);
    count++;
}   