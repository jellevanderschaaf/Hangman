// Global variables

var wrongGuess = 1;
var attemptsLeft = 8;
var letter1Guessed = " ";
var letter2Guessed = " ";
var letter3Guessed = " ";
var letter4Guessed = " ";
var letter5Guessed = " ";

var wordlist = [ 
    "world", 
    "about",  
    "heart", 
    "water", 
    "sixty", 
    "board", 
    "month", 
    "angel", 
    "death", 
    "music", 
    "party", 
    "piano",  
    "mouth", 
    "woman", 
    "sugar", 
    "amber", 
    "dream", 
    "laugh", 
    "tiger", 
    "faith", 
    "earth",  
    "money", 
    "peace", 
];
    
var word = wordlist[Math.floor(Math.random()*wordlist.length)];

// via inputfield

function checkWord() {
    
    var inputletter = document.getElementById('input').value;
    var inputindex = word.indexOf(inputletter);
    var varId = inputletter;

    if (word.includes(inputletter)) {

        document.getElementById(varId).style.backgroundColor = "#27A844";

    if (inputindex == 0) {
        document.getElementById('letter1').innerHTML = inputletter;
        letter1Guessed = "yes";
    } else if (inputindex == 1) {
        document.getElementById('letter2').innerHTML = inputletter;
        letter2Guessed = "yes";
    } else if (inputindex == 2) {
        document.getElementById('letter3').innerHTML = inputletter;
        letter3Guessed = "yes";
    } else if (inputindex == 3) {
        document.getElementById('letter4').innerHTML = inputletter;
        letter4guessed = "yes";
    } else if (inputindex == 4) {
        document.getElementById('letter5').innerHTML = inputletter;
        letter5Guessed = "yes";
    } 
    } else {

        document.getElementById(varId).style.backgroundColor = "#DC3546";

        if (wrongGuess < 9) {
            wrongGuess += 1;
        } if (attemptsLeft >= 1) {
            attemptsLeft -= 1;
            document.getElementById('scoreNotification').innerHTML = "You have " + attemptsLeft + " attempts left";
        } if (attemptsLeft == 1) {
            document.getElementById('scoreNotification').innerHTML = "You have 1 attempt left";
        } if (attemptsLeft == 0) {
            document.getElementById('scoreNotification').innerHTML = "You loose!";
        }
        document.getElementById('image').src='hangman' + wrongGuess + '.jpg';
    }   

}  

document.getElementById('check').addEventListener('click', checkWord);

// via clickable buttons

function checkLetter(value) {

    var inputletter = value;
    var inputindex = word.indexOf(inputletter);
    var varId = value;

    if (word.includes(inputletter)) {

        document.getElementById(varId).style.backgroundColor = "#27A844";

    if (inputindex == 0) {
        document.getElementById('letter1').innerHTML = value;
        letter1Guessed = "yes";
    } else if (inputindex == 1) {
        document.getElementById('letter2').innerHTML = value;
        letter2Guessed = "yes";
    } else if (inputindex == 2) {
        document.getElementById('letter3').innerHTML = value;
        letter3Guessed = "yes";
    } else if (inputindex == 3) {
        document.getElementById('letter4').innerHTML = value;
        letter4Guessed = "yes";
    } else if (inputindex == 4) {
        document.getElementById('letter5').innerHTML = value;
        letter5Guessed = "yes";
    } 
    } else {

        document.getElementById(varId).style.backgroundColor = "#DC3546";

        if (wrongGuess < 9) {
            wrongGuess += 1;
        } if (attemptsLeft >= 1) {
            attemptsLeft -= 1;
            document.getElementById('scoreNotification').innerHTML = "You have " + attemptsLeft + " attempts left";
        } if (attemptsLeft == 1) {
            document.getElementById('scoreNotification').innerHTML = "You have 1 attempt left";
        } if (attemptsLeft == 0) {
            document.getElementById('scoreNotification').innerHTML = "You loose!";
        }
        document.getElementById('image').src='hangman' + wrongGuess + '.jpg';
    }   

if (letter1Guessed == "yes" && letter2Guessed == "yes" && letter3Guessed == "yes" && letter4Guessed == "yes" && letter5Guessed == "yes") {
    document.getElementById('scoreNotification').innerHTML = "You win!";
}

}