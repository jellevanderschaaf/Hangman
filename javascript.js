function checkletter() {
    var firstletter = 'a';
    var input = document.getElementById('input_').value;
    
    if (input === firstletter) {
        document.getElementById('letter1').innerHTML = input;
    }
    
}

document.getElementById('check').addEventListener('click', checkletter);