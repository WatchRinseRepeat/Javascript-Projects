function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1 //tick down the timer by 1
        document.getElementById("timer").innerHTML = seconds; //update the text in the document to match timer
        var time = setTimeout(tick, 1000); //wait one second
        if (seconds == -1) { //if timer is over say Time's Up
            alert("Time's Up!");
            clearTimeout(time);
            document.getElementById("timer").innerHTML = "";
        }
    }
    tick(); //run the countdown
}

//Code for the slideshow

let slideIndex = 1;
showSlides(slideIndex); //show the first slide on load

//Next and Prev controls
function plusSlides(n) {
    showSlides(slideIndex += n)
}

//Thumbnil image controls
function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides"); //get all the slides
    let dots = document.getElementsByClassName("dot"); //get the dots
    if (n > slides.length) { slideIndex = 1 } //loop to the beginning from the end
    if (n < 1) { slideIndex = slides.length } //loop to the end from the beginning
    for (i = 0; i < slides.length; i++) { //hide all the slides
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) { //reset all the dots
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block"; //show the slide
    dots[slideIndex - 1].className += " active"; //mark the dot
}