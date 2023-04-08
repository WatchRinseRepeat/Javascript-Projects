//function that has two variables and modifies an element by ID
function colorParagraph() {
    var pColor = "blue"; //variable to hold backgtound color
    var pTextColor = "white"; //variable to hold text color
    var paragraph = document.getElementById("thisParagraph"); //variable to hold the element
    paragraph.style.backgroundColor = pColor; //change the background color
    paragraph.style.color = pTextColor; //change the text color
};
function concatenateString() {
    var myString = "This string can" //a string
    myString += " be added to." //concatenate the string
    document.getElementById("p2").innerHTML = myString; //write to document using getelementbyid inner html
}