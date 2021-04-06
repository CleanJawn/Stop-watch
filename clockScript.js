let secondsDegree = 0;
let minutesDegree = 0;
let hoursDegree = 0;
function rotateSecond(){
    secondsDegree = secondsDegree + 6;
    console.log(secondsDegree);
    secondHand.style.transform = "rotate(" + secondsDegree + "deg)";
}
function rotateMinute(){
    minutesDegree = minutesDegree + 6;
    console.log(minutesDegree);
    minuteHand.style.transform = "rotate(" + minutesDegree + "deg)";
}
function rotateHour(){
    hoursDegree = hoursDegree + 6;
    console.log(hoursDegree);
    hourHand.style.transform = "rotate(" + hoursDegree + "deg)";
}
//string of original seconds display (integers will cause "0" to display rather than "00")
let seconds = "00";
//string of original minutes display (integers will cause "0" to display rather than "00")
let minutes = "00";
//string of original hours display (integers will cause "0" to display rather than "00")
let hours = "00";
//set the interval to variable to we can clear it with the stop function
let interval;

//placing the HTML elements "clock" and "start" to variables
let display = document.getElementById("clock");
let button = document.getElementById("start");
let secondHand = document.getElementById("secondHand");
let minuteHand = document.getElementById("minuteHand");
let hourHand = document.getElementById("hourHand");

//when called the display will reset to "00:00:00"
function reset(){
    //each string does NOT contain ":" so it's able to be parsed
    secondsDegree = 0;
    secondHand.style.transform = "rotate(" + secondsDegree + "deg)";
    minutesDegree = 0;
    minuteHand.style.transform = "rotate(" + minutesDegree + "deg)";
    hoursDegree = 0;
    hourHand.style.transform = "rotate(" + hoursDegree + "deg)";
    //adding ":" between each value
    
}

//calls the "start" function to be called once every second
function startButton(){
    interval = setInterval(start, 1000);
}

/*calls the "secondsUp" function and changes the "button" elements onclick function
to the dummy function "nothing" so if the user clicks the start button it won't stack*/
function start(){
    secondsUp()
    button.setAttribute( "onClick", "javascript: nothing();" );
}

//function that increments the seconds variable/display
function secondsUp(){
    if (parseInt(seconds) != 59){
        if (parseInt(seconds) < 9){
            seconds = parseInt(seconds) + 1;
            seconds = "0" + seconds;
        }
        else{
            seconds = parseInt(seconds) + 1;
        }
        console.log(seconds)
    }
    else{
        seconds = "00";
        console.log(seconds)
        minutesUp();
    }
    rotateSecond();
    
}
function minutesUp(){
    if (parseInt(minutes) != 59){
        if (parseInt(minutes) < 9){
            minutes = parseInt(minutes) + 1;
            minutes = "0" + minutes;
        }
        else{
            minutes = parseInt(minutes) + 1;
        }
        console.log(minutes)
    }
    else{
        minutes = "00";
        console.log(minutes)
        hoursUp();
    }
    rotateMinute();
}
function hoursUp(){
    if (parseInt(hours) != 59){
        if (parseInt(hours) < 9){
            hours = parseInt(hours) + 1;
            hours = "0" + hours;
        }
        else{
            hours = parseInt(hours) + 1;
        }
        console.log(hours)
    }
    hoursUp();
}

function stop(){
    clearInterval(interval);
    button.setAttribute( "onClick", "javascript: startButton();" );
}
function nothing(){
    console.log("the dummy function has been called");
}