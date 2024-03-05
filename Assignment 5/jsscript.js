const sendButton = document.getElementById('sendbutton');
const retrieveButton = document.getElementById('retbutton');
const inventory = document.getElementById('inventory');
const oxygenBar = document.getElementById('oxygen');
const diver = document.getElementById('diver');
const depth = document.getElementById('depth');

const oxygenmax = 300;


let oxygen = 300;
let position = 0;
let deepest = 0;
let isDiving = false;
let diving_update_interval;


sendButton.addEventListener('click', function () {
    console.log('send button clicked');
    if (isDiving === false) {
        isDiving = true
        startInterval()
    }
});

retrieveButton.addEventListener('click', function () {
    console.log('retrieve button clicked');
    if (isDiving === true) {
        isDiving = false
    }
});

function startInterval() {
    diving_update_interval = setInterval(function () {
        oxygen -= 1;
        updateElements();
        if (isDiving) {
            position -= 2;
            if (deepest > position) {
                deepest = position;}
        } else {
            position += 2;
        }
        if (position >= 0) {
            cameHome();
        }
        if (oxygen <= 0) {
            diverDrown();
        }
    }, 100); // end of setInterval (100ms)
}

function updateElements() {
    let fraction = oxygen / oxygenmax
    oxygenBar.style.height = (fraction * 100) + 'px';
    oxygenBar.style.marginTop = ((100 - (fraction * 100))) + 'px';
    diver.style.top = (60 - position) + 'px';
    depth.innerHTML = "DEPTH : " + position;
}

function cameHome() {
    clearInterval(diving_update_interval);
    oxygen = 300;
    position = 0;
    let fish = "null";
    updateElements();
    fetch('http://localhost:5000/call_python', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(deepest)
    })
        .then(response => response.text())
        .then(data => {
             fish = data;
             alert('You made it back to the Boat with a ' + fish  + '!');
             let fishli = document.createElement('li');
             fishli.textContent = fish;
             inventory.appendChild(fishli); })
        .catch(error => console.error('Error:', error));
    deepest = 0;
    
}

function diverDrown() {
    clearInterval(diving_update_interval);
    oxygen = 300;
    position = 0;
    updateElements();
    inventory.innerHTML = '';
    alert('You drowned!');
    deepest = 0;
    isDiving = false;
}


