//active player tracker
let activePlayer = 'X';
//array of moves. used to determine win conditions
let selectedSquares = [];

//Function for placing squares
function placeXOrO(squareNumber) {
    //Condition for square hasn't already been selected.
    //The .some() method is used to check each element of the selectSquare array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //This var retrives the HTML element id that was clicked
        let select = document.getElementById(squareNumber);
        //check turn player
        if (activePlayer === 'X') {
            //if active player = X, the x.png is placed
            select.style.backgroundImage = 'url("images/x.jpg")';
            //Active player can only be X or O, if not X then must be O
        } else {
            //If active player =O the o.png is placed
            select.style.backgroundImage = 'url("images/o.png")';
        };
        //SquareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //Check for win condition
        checkWinCondition();
        //change the active player
        if (activePlayer === 'X') {
            //if active player is x, change to o
            activePlayer = 'O';
            //if active player is anything other than x
        } else {
            //change the player to X
            activePlayer = 'X';
        };

        //Placement sound
        audio('./media/place.wav');
        //computer's turn?
        if (activePlayer === 'O') {
            //disable clicking
            disableClick();
            //wait a second
            setTimeout(function () { computersTurn(); 1000 });
        };
        //Return True for computersTurn to work.
        return true;
    };

    //computer selects a random square
    function computersTurn() {
        let success = false;
        let pickASquare;

        while (!success) {  
            //random number between 0 and 8
            pickASquare = String(Math.floor(Math.random() * 9));
            //If the random number evaluated returns true the square isn't selected
            if (placeXOrO(pickASquare)) {
                //call the function;
                placeXOrO(pickASquare);
                //end the loop
                success = true;
            };
        };
    };
};

//this function parses the selectedSquares array to search for win conditions.
//drawLine() function is called to draw a line on the screen if the condition is met.
function checkWinCondition() {
    //X 0,1,2 condition.
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    //X 3,4,5 condition
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    //X 6,7,8 condition
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    //X 0,3,6 condition
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    //X 1,4,7 condition
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    //X 2,5,8 condition
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    //X 6,4,2 condition
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    //X 0,4,8 condition
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    //O 0,3,6 condition
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(50, 100, 558, 100) }
    //O 3,4,5 condition
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    //O  6,7,8 condition
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    //O  0,3,6 condition
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    //O  2,5,8 condition
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    //O  6,4,2 condition
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    //O  0,4,8 condition
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    //This condition checks for a tie. If none of the above conditions are met
    //and 9 squares are selected the code executes.
    else if (selectedSquares.length >= 9) {  //FOUND ISSUE, IF WE HIT 9 THEN IT MOVES TO THE COMPUTERS TURN AND GETS STUCK IN AN ENDLESS LOOP
        //Play the game tie audio
        audio('./media/tie.wav');
        //this funtion sets a reset timer
        setTimeout(function () { resetGame(); }, .500);
    }

    //This function checks if an array includes 3 strings. It is used to check for
    //each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        //These three variables will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //if the variables we pass are all included in our array then
        //true is returned and our else if condition executes the drawLine
        if (a === true && b === true && c === true) { return true };
    };
};

//This makes the body element temporarily unclickable
function disableClick() {
    let area = document.body;
    //this makes our body unclickable/
    area.style['pointerEvents'] = 'none';
    //this makes our body clckable again after 1 second.
    setTimeout(function () { area.style['pointerEvents'] = 'auto'; }, 1000);
}

//This function takes a string paramenter of the path
//for placement sound
function audio(audioURL) {
    //create audio object and pass the path
    let sound = new Audio(audioURL);
    //play method
    sound.play();
}

//This function utilizes HTML canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //get the canvas element
    const canvas = document.getElementById('win-lines');
    //get access to the methods
    const c = canvas.getContext('2d');
    //This line indicates where the start of the line x axis is
    let x1 = coordX1,
        //Start of Y axis
        y1 = coordY1,
        //ENd X
        x2 = coordX2,
        //end Y
        y2 = coordY2,
        //store temp x axis data
        x = x1,
        //store temp y axis
        y = y1;
    
    //This function interacts with the canvas
    function animateLineDrawing() {
        //create a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //This method clears content from the last loop iteration
        c.clearRect(0, 0, 608, 608);
        //This method starts a new path.
        c.beginPath();
        //This method moves us to a starting point in our line.
        c.moveTo(x1, y1);
        //This method indicates the end point of our line
        c.lineTo(x, y);
        //set the width of the line
        c.lineWidth = 10;
        //set the color of the line
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        //draw
        c.stroke();
        // check if we've reached the endpoints;
        if (x1 <= x2 && y1 <= y2) {
            //This condition adds 10 to the previous end x endpoint
            if (x < x2) { x += 10; };
            //This condition add 10 to the previous end y endpoint
            if (y < y2) { y += 10; };
            //This is similar to above
            //This is necessary for the 6,4,2 win conditions
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //This is similar to above
        //This is necessary for the 6,4,2 win conditions
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    //This function clears out our canvas after our win line is drawn.
    function clear() {
        //This line starts our animation loop
        const animationLoop = requestAnimationFrame(clear);
        //This line clears our canvas.
        c.clearRect(0, 0, 608, 608);
        //this line stops our animation loop
        cancelAnimationFrame(animationLoop);
    }
    //This line disallows clicking while the win sound is playing
    disableClick();
    //this line plays the win sounds.
    audio('./media/WinGame.wav');
    //This line calls our main animation loop
    animateLineDrawing();
    //This line waits 1 second then clears canvas, resets game, and allows clicking again;
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

//This function resets the game
function resetGame() {
    //This for loop itereates through each HTML square element
    for (let i = 0; i < 9; i++) {
        //This variable gets the HTML element i
        let square = document.getElementById(String(i));
        //this removes our elemnts backgroundImage
        square.style.backgroundImage = '';
    }
    //This resets our array
    selectedSquares = [];
}