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

//when called the display will reset to "00:00:00"
function reset(){
    //each string does NOT contain ":" so it's able to be parsed
    seconds = "00";
    minutes = "00";
    hours = "00";
    //adding ":" between each value
    display.innerHTML = hours + ":" + minutes + ":" + seconds;
}

//calls the "start" function to be called once every second
function startButton(){
    interval = setInterval(start, 1000);
}

/*calls the "secondsUp" function and changes the "button" elements onclick function
to the dummy function "nothing" so if the user clicks the start button it won't stack*/
function start(){
    secondsUp()
    button.onclick = nothing();
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
    display.innerHTML = hours + ":" + minutes + ":" + seconds;
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
    display.innerHTML = hours + ":" + minutes + ":" + seconds;
}
function minutesUp(){
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
    display.innerHTML = hours + ":" + minutes + ":" + seconds;
}

function stop(){
    clearInterval(interval);
    button.onclick = start()
}

function nothing(){
    console.log("the dummy function has been called");
}