var wordlist = [ 
    "seven", 
    "world", 
    "about", 
    "again", 
    "heart", 
    "water", 
    "happy", 
    "sixty", 
    "board", 
    "month", 
    "angel", 
    "death", 
    "green",
    "music", 
    "fifty", 
    "three", 
    "party", 
    "piano",  
    "mouth", 
    "woman", 
    "sugar", 
    "amber", 
    "dream", 
    "apple", 
    "laugh", 
    "tiger", 
    "faith", 
    "earth", 
    "river", 
    "money", 
    "peace", 
    "pizza", 
];
    
var word = wordlist[Math.floor(Math.random()*wordlist.length)];


function checkWord() {
    
    var inputletter = document.getElementById('input').value;
    var inputindex = word.indexOf(inputletter);
    

    if (word.includes(inputletter)) {

    if (inputindex == 0) {
        document.getElementById('letter1').innerHTML = inputletter;
    } else if (inputindex == 1) {
        document.getElementById('letter2').innerHTML = inputletter;
    } else if (inputindex == 2) {
        document.getElementById('letter3').innerHTML = inputletter;
    } else if (inputindex == 3) {
        document.getElementById('letter4').innerHTML = inputletter;
    } else if (inputindex == 4) {
        document.getElementById('letter5').innerHTML = inputletter;
    } 

}
}  

document.getElementById('check').addEventListener('click', checkWord);
