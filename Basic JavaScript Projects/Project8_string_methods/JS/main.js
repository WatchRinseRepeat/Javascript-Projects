function concatFunction() { //concotenate two strings
    var s1 = "This ia ", s2 = "a string."; //declare variables
    var sC = s1.concat(s2); //call the concat method
    document.getElementById("stringP").innerHTML = sC; //edit the p element
}

function slicer() {
    var string1 = "Mary had a little lamb, little lamb, little lamb."; //declare variable with string
    var stringSlice = string1.slice(11, 18); //sliec the string
    document.getElementById("toSlice").innerHTML = stringSlice; //edit p element
}

function upperator() { //call the toUpperCase method on string
    var string1 = document.getElementById("upperInput").value; //get the value of the text box
    var upperstring = string1.toUpperCase(); //Convert to uppercase
    document.getElementById("toUpper").innerHTML = upperstring; //edit p element
}

function doSearch() { //function to search a string
    var string1 = "This is the example text."; //give text to search 
    var target = "e"; //give target
    var result = string1.search(target); //search the string
    document.getElementById("searchResult").innerHTML = "The target (" +
        target + ") can be found at place " + result + ".";
} 

function numberToString() { //function to report a number as string
    var mathStr = 34.3 * 5; //create a number.
    document.getElementById("toStr").innerHTML ="This is now a string: " + mathStr.toString(); //report as string
}

function beExact() { //function to show precision down to 4.
    var X = Math.PI;
    document.getElementById("showExact").innerHTML = X.toPrecision(4);
}

function beFixed() { //function to show fixed number of spaces to 4.
    var X = Math.PI;
    document.getElementById("showFixed").innerHTML = X.toFixed(4);
}

function showValue() { //function to show the value of a variable.
    var words = "Hello, World!";
    var result = words.valueOf();
    document.getElementById("showVal").innerHTML = result;
}