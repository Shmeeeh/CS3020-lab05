function pageLoad() {
    document.getElementById('submit').onclick = changeText; // task 1
    document.getElementById('enlarge').onclick = enlargeFont; // task 2
    document.getElementById('shrink').onclick = shrinkFont;

    document.getElementsByName('colors').forEach(colorTest); // task 3
    document.getElementsByName('bg').forEach(colorTest);

    document.getElementById('scholars').onmouseover = function(){displayDescription('scholars')}; // task 4
    document.getElementById('flood').onmouseover = function(){displayDescription('flood')};
    document.getElementById('wbtg').onmouseover = function(){displayDescription('wbtg')};

    document.getElementById('changer').onkeydown = function(pressed) { // extension to task 1, adding Enter key compatibility
        if (pressed.key === 'Enter') {
            pressed.preventDefault();
            changeText();
        }
    }
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

function colorTest(identity) {
    identity.onchange = function() {
        switch(identity.id) {
            case 'white':
                document.body.style.backgroundColor = 'white';
                break;
            case 'black':
                document.body.style.backgroundColor = 'black';
                break;
            case 'brown':
                document.body.style.backgroundColor = 'SaddleBrown';
                break;
            case 'orange': // Originally, this changed all other text colors, but I reread the assignment and saw it wanted only the modifiable text to change color.
                // document.body.style.color = 'orange';
                document.getElementById('subject').style.color = 'orange'
                break;
            case 'whiteT':
                // document.body.style.color = 'white';
                document.getElementById('subject').style.color = 'white'
                break;
            case 'blackT':
                // document.body.style.color = 'black';
                document.getElementById('subject').style.color = 'black'
                break;
            case 'blue':
                document.getElementById('subject').style.color = 'blue'
                break;
            default:
                break;
        }
    }
}

function displayDescription(imageName) {
    document.getElementById('scholars').style.borderColor = 'black';
    document.getElementById('flood').style.borderColor = 'black';
    document.getElementById('wbtg').style.borderColor = 'black';

    document.getElementById(imageName).style.borderColor = 'red';
    switch(imageName) {
        case 'scholars':
            document.getElementById('albumName').innerHTML = 'The Scholars - Car Seat Headrest'
            break;
        case 'flood':
            document.getElementById('albumName').innerHTML = 'Flood - They Might Be Giants'
            break;
        case 'wbtg':
            document.getElementById('albumName').innerHTML = 'we\'ve been the garages - the garages'
            break;
        default:
            break;
    }
}

window.onload = pageLoad; // have to instantiate methods on pageload