function calcMath() {
    var num1 = 5, num2 = 6; //define numbers to be evaluated
    var addition = num1 + num2; //addition of the numbers
    var subtraction = num2 - num1;    //subtraction of the numbers
    var para1 = document.getElementById("Math"); //grab the element by id

    para1.innerHTML = num1 + " + " + num2 + " = " + addition + " and " +
        num2 + " - " + num1 + " = " + subtraction; //set the innerhtml to the added results
} 

function calcMath2() {
    var num1 = 5, num2 = 6; //define numbers to be evaluated
    var multiplication = num1 * num2; //multiplication of the numbers
    var division = num1 / num2;//division of the numbers
    var para2 = document.getElementById("Math2");

    para2.innerHTML = "Multiply 5 and 6 for " + multiplication +
        ". Divide 5 by 6 for " + division + "."; //use the division and multiplication
}

function calcMath3() {
    var num1 = 5, num2 = 6; //define numbers to be evaluated
    var manyOps = num2 * num1 - num2 / num1 + num2; //many operations
    var para3 = document.getElementById("Math3");

    para3.innerHTML = "Many operations: " + manyOps + "."; // Do lots of math
}

function calcMath4() {
    var num1 = 5, num2 = 6; //define numbers to be evaluated
    var remainder = num2 % num1; //show a remainder
    var para4 = document.getElementById("Math4");

    para4.innerHTML = "Dividing 6 by 5 leaves a remainder of " + remainder + "."; //show a remainder
}

function calcMath5() {
    var num1 = 5, num2 = 6; //define numbers to be evaluated
    var division = num1 / num2;//division of the numbers
    var negative = -division; //make a negative
    var para5 = document.getElementById("Math5");

    para5.innerHTML = "The negative of the division result above is " + negative + "." //display a negative
}

function calcMath6() {
    var num1 = 5, num2 = 6; //define numbers to be evaluated
    var para6 = document.getElementById("Math6");

    para6.innerHTML = "Increment of " + num1++ + " is " + num1 + " and decrement of " + num2-- + " is " +
        num2 + "."; //show incrementation and decrementation
}

function calcMath7() {
    var randNum = Math.random() * 100; //Random number 1-100
    var para7 = document.getElementById("Math7");

    para7.innerHTML = "This is a random number between 0 and 100: " + randNum + ".";//display a random number
}

function calcMath8() {
    var mathObj = Math.PI; //set var to value of pi
    var para8 = document.getElementById("Math8");

    para8.innerHTML = mathObj + " is pi."; //display value of pi    
}