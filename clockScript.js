let secondHand = document.getElementById("secondHand");

function startButton(){
    rotate();
}

function rotate(){
    secondHand.style.transform = "rotate(30)";
}