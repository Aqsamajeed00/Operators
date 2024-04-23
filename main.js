"use strict";
//ARTHIMATIC  OPERATORS
let numberOfFaculty = 4;
let numberOfManagement = 3;
let numberOfAbsentFaculty = 2;
console.log(numberOfFaculty + numberOfManagement - numberOfAbsentFaculty);
let numberOfTotalFaculty = numberOfFaculty
    * 21;
console.log(numberOfTotalFaculty);
let totalNumberOfKgs = 20;
console.log(totalNumberOfKgs / numberOfTotalFaculty);
// UNARY OPERATORS 
let num1 = 5;
++num1; //6
++num1; //7
++num1; //8
++num1; //9
++num1; //10
console.log(num1);
let num2 = 5;
--num2; //4
++num2; //5 
--num2; //4
++num2; //5
--num2; //4
console.log(num2);
let num2 = 5;
--num2;
--num2;
--num2;
--num2;
--num2;
--num2;
console.log(num2);
let i = 10;
let result = ++i + ++i + 6 + --i - 2;
console.log(result);
let WeightInKg = 70; // 70kg
let heightInMeters = 1.75; //1.75m
let bmi = WeightInKg / (heightInMeters * heightInMeters);
console.log(`your BMI is ${bmi}`);
let firstname = 'Noor';
let lastname = 'shaikh';
let fullname = (`${firstname} ${lastname}`);
console.log(fullname);
let firstName = "Noor";
let age = 23;
console.log("my name is: " + " " + firstName + " " + "and my age is: " + age);
console.log(`my name is: ${firstName} and my age is: ${age}`);
//ASSIGNMENT OPERATORS 
let num1 = 2;
num1 += 4; //6 num1 = num2+4
console.log(num1);
let num3 = 6;
num3 -= 3;
console.log(num3);
//COMPARISON OPERATORS 
5 == 2;
is;
false;
5 != 2;
is;
true;
5 < 2;
is;
false;
5 > 2;
is;
true;
let num1 = 5;
let num2 = 2;
console.log(num1 == num2);
let num5 = 2;
let num6 = 2;
console.log(num5 == num6);
let num8 = 2;
let num9 = 9;
console.log(num8 != num9);
let num33 = 2;
let num44 = 9;
console.log(num33 > num44);
let num77 = 9;
let num88 = 9;
console.log(num77 > num88);
5 > 5;
let num08 = 9;
let num09 = 9;
console.log(num08 >= num09);
let num78 = 9;
let num79 = 99;
console.log(num78 >= num79);
let num11 = "5";
let num22 = 5;
console.log(num11 == num22);
let num00 = "5";
let num80 = 5;
console.log(num00 === num80);
let a = 5;
let b = 10;
console.log(a <= b); //answer true 
let c = 51;
let d = 20;
console.log(a >= b); // answer true 
let num1 = 5;
let num2 = 56;
console.log(num1 / num2);
let num1 = 4546;
let num2 = 7876;
console.log(num1 + num2);
let num1 = 76;
let num2 = 523;
console.log(num1 * num2);
let num1 = 606;
let num2 = 68;
console.log(num1 + num2);
//unary opertors 
let num1 = 5;
++num1;
6;
++num1;
7;
++num1;
8;
++num1;
9;
++num1;
10;
console.log(num1);
let i = 10;
let result = ++i + ++i + 6 + --i - 2;
console.log(result);
//comparison operators
let num9 = 76;
let num8 = 523;
console.log(num9 * num8);
let a = 51;
let b = 20;
console.log(a >= b);
let num33 = 2;
let num44 = 9;
console.log(num33 > num44);
// LOGICAL OPERATOR
let budget = 600000;
let haveGirl = true;
// // false && true
console.log(budget >= 1000000 && haveGirl == true);
let budget = 1000000;
let haveGirl = true;
console.log(budget >= 1000000 && haveGirl == true);
let budget = 1000000;
let haveGirl;
console.log(haveGirl);
let budget = 1000000;
let haveGirl;
console.log(budget);
console.log(haveGirl);
let result = budget >= 1000000 && haveGirl == true;
console.log(result);
let haveDegree = "yes";
let isAqsasStd = "no";
// true || false
console.log(haveDegree == "yes" || isAqsasStd == "yes");
// == compare krne k liye use hota = assign krne k liye use hota
// !ka sign apky jo bhi answer ata h usko ulta krdeta h 
let num1 = 10;
let result = !(num1 > 10);
console.log(result);
let num1 = 10;
let result = (num1 > 10);
console.log(result);
let num1 = 10;
let result = !(num1 > 10);
console.log(result);
let num1 = 20;
let result = (num1 < 23);
console.log(result);
let isRainning = false;
if (isRainning) {
    console.log("Wear a raincoat");
    //()is bracket ky undr jobhi cheez hogi wo true hogi
}
else {
    console.log("Wear a sunglasses");
}
//multipulses condition!
let weather = "cloudy";
if (weather == "rainning") {
    console.log("Wear a raincoat");
}
else if (weather == "cloudy") {
    console.log("Wear a light jacket");
}
else {
    console.log("Wear a sunglasses");
}
//isHungry condition hy false/true  ? if wala kaam krrha hy 
let myAge = 18;
let snack = myAge >= 18 ? "you are allowed" : "you are not allowed";
console.log(snack);
