//function type before es6
function multiply1(num1, num2){
    result = num1 + num2;
    return result;
}
var input = multiply1(5, 6);
console.log(input);


//type single function after es6
const multiply2 = num => num * 2;

var result2 = multiply2( 13);
console.log(result2);


//type single function after es6
const multiply3 = (num1, num2) => (num1 + num2);

var result3 = multiply3( 13, 12);
console.log(result3);

function myName(nam5, nam6){
    let namResult = nam5 + nam6;
    return namResult;
}
let newNames = myName(15, 100);
console.log(newNames);


let multiLine = () => 51;
let multiLineResult = multiLine(0);
console.log("Multi Line result", multiLineResult);

let multiply81 = (x, y) => {
    let positive = x + y;
    let negative = x - y;
    let result = positive * negative;
    return result;
} 
let myResult81 = multiply81( 15, 5);
console.log( "Next level", myResult81);



//function without 2nd value no:1
function myName1(nam5, nam6){
    if (nam6 == undefined);
    nam6 = 0;

    let namResult = nam5 + nam6;
    return namResult;
}
let newNames1 = myName1(15);
console.log(newNames1);


//function without 2nd value no:1
function myName2(nam7, nam8){
    nam8 = nam8|| 0;

    let namResult1 = nam7 + nam8;
    return namResult1;
}
let newNames2 = myName2(155);
console.log(newNames2);

//array and number value's output process simple

let firstClass = "Sakib Ali khan";
let lastClass = "Salman Ali khan";
let totalClass = firstClass + " and "+ lastClass + " they are two class captains are vary good."
console.log(totalClass);

//now the different way

let firstLaptop = "Toshiba";
let lastLaptop = "HP";
let totalLaptop = `${firstLaptop} and ${lastLaptop} are very good laptop.`;
console.log(totalLaptop);