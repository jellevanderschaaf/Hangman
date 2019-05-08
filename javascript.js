
function checkWord() {
    var word = "hangman";
    var inputletter = document.getElementById('input').value;
    
    if (word.includes(inputletter)) {
        document.getElementById('letter1').innerHTML = inputletter;
    } 
    
}  

document.getElementById('check').addEventListener('click', checkWord);
