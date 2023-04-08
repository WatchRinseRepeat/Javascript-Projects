function calcMath() {
    var num1 = 5, num2 = 6; //define numbers to be evaluated
    var addition = num1 + num2; //addition of the numbers
    var subtraction = num2 - num1;    //subtraction of the numbers
    var multiplication = num1 * num2; //multiplication of the numbers
    var division = num1 / num2;//division of the numbers
    var manyOps = num2 * num1 - num2 / num1 + num2; //many operations
    var remainder = num2 % num1; //show a remainder
    var negative = -division; //make a negative
    var randNum = Math.random() * 100; //Random number 1-100
    var mathObj = Math.PI; //set var to value of pi

    var para1 = document.getElementById("Math"); //grab the element by id
    var para2 = document.getElementById("Math2");
    var para3 = document.getElementById("Math3");
    var para4 = document.getElementById("Math4");
    var para5 = document.getElementById("Math5");
    var para6 = document.getElementById("Math6");
    var para7 = document.getElementById("Math7");
    var para8 = document.getElementById("Math8");

    para1.innerHTML = num1 + " + " + num2 + " = " + addition + " and " +
        num2 + " - " + num1 + " = " + subtraction; //set the innerhtml to the added results
    para2.innerHTML = "Multiply 5 and 6 for " + multiplication +
        ". Divide 5 by 6 for " + division + "."; //use the division and multiplication
    para3.innerHTML = "Many operations: " + manyOps + "."; // Do lots of math
    para4.innerHTML = "Dividing 6 by 5 leaves a remainder of " + remainder + "."; //show a remainder
    para5.innerHTML = "The negative of the division result above is " + negative + "." //display a negative

    para6.innerHTML = "Increment of " + num1++ + " is " + num1 + " and decrement of " + num2-- + " is " +
        num2 + "."; //show incrementation and decrementation
    para7.innerHTML = "This is a random number between 0 and 100: " + randNum + ".";//display a random number
    para8.innerHTML = mathObj + " is pi."; //display value of pi
} 