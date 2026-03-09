function pageLoad() {
    document.getElementById('submit').onclick = changeText;
    document.getElementById('enlarge').onclick = enlargeFont;
    document.getElementById('shrink').onclick = shrinkFont;
}

let text = 'I\'ve been changed!'; // Basic default value, unnecessary but was nice for testing
function changeText() {
    text = document.getElementById('changer').value // Replaces the "text" value with the user input in the text field
    document.getElementById('subject').innerHTML = text; // Changes the HTML (text) of the subject <p> to be our text value
}

const defaultSize = 12;
let sizeAddition = 0;
function enlargeFont() {
    sizeAddition++;
    document.getElementById('subject').style.fontSize = parseInt(defaultSize + sizeAddition) + 'pt';
}

function shrinkFont() {
    sizeAddition--;
    document.getElementById('subject').style.fontSize = parseInt(defaultSize + sizeAddition) + 'pt';
}

window.onload = pageLoad; // have to instantiate methods on pageload