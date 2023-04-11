function Call_Loop() {
    var x = 1; //starting point
    let timing;
    
    function write() {
        document.getElementById("Loop").innerHTML = x++;//write the number and increment
        clearTimeout(timing); 
    }
    while (x < 11) { //count to 10
        timing = setTimeout(write(), 1000); //wait a second between 
    };
};

//Length property challenge
function stringCounter() {
    let x = document.getElementById("str").value;
    document.getElementById("strLength").innerHTML = "The length is " + x.length;
}