function RideFunction() {
    var Height, Can_Ride; //declare variables
    Height = document.getElementById("Height").value; //get the value from the input box
    Can_Ride = (Height < 52) ? "You are too short" : "You are tall enough";  //tenary operator to determine if can ride.
    document.getElementById("Ride").innerHTML = Can_Ride + "to ride."; //print result
}

function Game(Title, Year, Players) {
    this.Game_Title = Title; // Title of the game
    this.Game_YearMade = Year; //Year released
    this.Game_Players = Players; //Number of players
}

var smb = new Game("Super Mario Bros.", 1985, 2); //instantiate new game

function giveGame() { //give data about the game
    document.getElementById("New_and_This").innerHTML = "The game is called " +
        smb.Game_Title + " and it was released in " + smb.Game_YearMade +
        " and can be played by up to " + smb.Game_Players + " players.";
}

function Nest() {
    document.getElementById("Nested_Function").innerHTML = Nested(); //call the Nested function.
    function Nested() {
        var tweet = "Tweet ";
        function NestedFurther() { tweet += "tweet." }; //Add tweet to the string 
        NestedFurther();
        return tweet; //return Tweet tweet
    };
};