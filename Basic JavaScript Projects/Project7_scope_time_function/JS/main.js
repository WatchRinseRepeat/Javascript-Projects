var X = 5; //set a global variable

function myFunction() {
    Y = 4; //set a local variable
}
document.write(X + Y);  //Write errorneos code

function timeFunction() {  //included the else if statements into this function for practice
    var d = new Date; //get the time
    if (d.getHours() == 0) { //check if midnight
        document.getElementById("TimeCheck").innerHTML = "Good Night, it is midnight."
    }
    else if (d.getHours() < 12) { //check if in the am
        document.getElementById("TimeCheck").innerHTML = "Good Morning, it is " +
            d.getHours + "am."
    }
    else if (d.getHours() == 12) { //check if noon
        document.getElementById("TimeCheck").innerHTML = "Good Day, it is noon"
    }
    else { //is evening
        document.getElementById("TimeCheck").innerHTML = "Good Afternoon, it is " +
           (d.getHours() - 12) + "pm."
    }
   
    if (d > 12) { //write my own IF statement
        document.getElementById("TimeCheck").style.color = "red"; 
    }
}

function colorFunction() { //create function with else statement
    var choice = document.getElementById("colorInput").value; //get value in input box
    if (choice == "blue") { 
        document.getElementById("colorConfirm").innerHTML = "correct";
    }
    else {
        document.getElementById("colorConfirm").innerHTML = "incorrect";
    }
}
