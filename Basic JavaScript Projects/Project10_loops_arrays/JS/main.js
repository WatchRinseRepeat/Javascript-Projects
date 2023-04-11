//while loop
function Call_Loop() {
    var x = 1; //starting point
    let timing;
    
    function write() {
        document.getElementById("Loop").innerHTML = x++;//write the number and increment
        clearTimeout(timing); 
    }
    while (x < 11) { //count to 10
        timing = setTimeout(write(), 1000); //wait a second between 
    }; //for somereason the timing doesn't work. I've put in an email asking for 
        //some guidence.
};

//Length property challenge
function stringCounter() {
    let x = document.getElementById("str").value; //utilize the let keyword
    document.getElementById("strLength").innerHTML = "The length is " + x.length; //provide the length of the string
};

//For Loops
var Turtles = ["Leonardo", "Michelagelo", "Raphael", "Donatelo"]; //create array of turtles
var writeText = ""; //what will be output
var i; //iteration count

function for_Loop() {
    for (i = 0; i < Turtles.length; i++) {
        writeText += Turtles[i] + "<br>"; //add this turtle and a line break
    }
    document.getElementById("List_of_Turtles").innerHTML = writeText; //write out the list
};

//Arrays
function array_Function() {
    var numIn = Number(document.getElementById("arrayIndex").value); //retrieve the input
    var index = numIn - 1; //set the index value
    
    if (numIn <= Turtles.length && numIn > 0) {
        var turtle = Turtles[index]; //find the turtle in the array
        document.getElementById("Array").innerHTML = turtle +
            " is turtle number " + numIn + "."; //write out the repsonse
    };
    
};

//Const keyword
const VG_Console = { //create object
    Manufacturer: "Nintendo", Color: "purple", Name: "GameCube"
};

function constant_function() { //write out the info of the object
    document.getElementById("Constant").innerHTML = "The " + VG_Console.Manufacturer + " " +
        VG_Console.Name + " was " + VG_Console.Color + ".";
};

function constant_function_2() { //change and add value
    VG_Console.MediaType = "disc";
    VG_Console.Color = "black";

    document.getElementById("Constant2").innerHTML = "The " + VG_Console.Manufacturer + " " +
        VG_Console.Name + " was later " + VG_Console.Color + " and ran games on a " +
        VG_Console.MediaType + ".";
    document.getElementById("constantbtn").onclick = ""; //write out the new information
};

//Let keyword
let tractor = {
    make: "John Deer",
    model: "4R",
    year: 2023,
    color: "green",
    description: function () { //return a description of the tractor
        return "The tractor is a " + this.make + " " + this.year + " " + this.model +".";
    }
}

function letFunction() { //call the object method to get the description
    document.getElementById("letKey").innerHTML = tractor.description();
}