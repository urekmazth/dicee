//Generating 2 random numbers between 1 and 6
var lRandom = Math.floor(Math.random() * 6) + 1;
var rRandom = Math.floor(Math.random() * 6) + 1;

// images stored at ./images/dice_.png
var diceImage = "./images/dice";
var extension = ".png";

// Selecting the tags
var img1 = document.querySelector('.img1');
var img2 = document.getElementsByClassName('img2')[0];

// applying src attribute

img1.setAttribute("src", diceImage + lRandom + extension);
img2.setAttribute("src", diceImage + rRandom + extension);

// displaying winner h1
heading = document.getElementsByTagName("h1")[0];

if(lRandom > rRandom){
    heading.innerHTML = "<strong>🚩Player1 Wins</strong>";
}else if(lRandom < rRandom){
    heading.innerHTML = "<strong>Player2 Wins🚩</strong>";
}else {
    heading.innerHTML = "<em>🚫DRAW🚫</em>";
}