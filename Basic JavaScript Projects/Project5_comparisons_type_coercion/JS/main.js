document.write(typeof "54 "); //write the type of the value

document.write("34" + 37); //Type coercion

document.write(0 / 0); //show NaN
document.write(isNaN(5 + 5)) //show NaN is false
document.write(isNaN(0 / 0)); //show NaN is true

document.write(344e405); //show infinity
document.write(-344e563); //show -infinity

document.write(5 > 6);//display false with boolean logic
document.write(5 < 6);//display true with boolean logic

console.log(5 + 5); //math in the console
console.log(5 > 6); //display false in the console

document.write((15 - 3) == 12); //display true using == 
document.write((11 + 4) == 16); //display false using ==

A = "5"; //create variables with values for comparisons
B = 5;
C = "Five";
D = "5";

document.write(A === D);//return true where value and type match
document.write(B === C);//return false where type and value differ
document.write(A === B);//return false where type differs and value is the same
document.write(A === C);//return false where type matches by value is different

document.write(5 > 4 && 6 > 3); //Use && operator to display true and false
document.write(5 > 4 && 4 > 5);
document.write(5 > 4 || 5 < 4); //Use || operator to display true and false
document.write(5 < 4 || 4 < 5);

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10); //display false using Not (!)
}

function not_Function2() {
    document.getElementById("Not2").innerHTML = !(20 < 10); //display true using Not (!)
}