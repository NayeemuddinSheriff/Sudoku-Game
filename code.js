let t = 10;
let r, c;
let answer = [9, 6, 3, 1, 7, 4, 2, 5, 8, 1, 7, 8, , 3, 2, 5, 6, 4, 9, 2, 5, 4, 6, 8, 9, 7, 3, 1, 8, 2, 1, 4, 3, 7, 5, 9, 6, 4, 9, 6, 8, 5, 2, 3, 1, 7, 7, 3, 5, 9, 6, 1, 8, 2, 4, 5, 8, 9, 7, 1, 3, 4, 6, 2, 3, 1, 7, 2, 4, 6, 9, 8, 5, 6, 4, 2, 5, 9, 8, 1, 7, 3];
let arr = [];
let flag;
let n;

// FUNCTION TO GET USER NAME
function name() {
    n = prompt('Enter Your Name:');
    return n;
}

// FUNCTION TO RUN TIMER AFTER HITING START BUTTON
function counter() {
    document.getElementById("timer").innerHTML = "TIME LEFT" + " : " + --t + " SECONDS";
    if (t == 0) {
        clearInterval(myTimer);
        compare();
        if (flag == true) {
            winAudio();
            alert(n + ' is Pure Genius');
        }
        if (flag == false) {
            loseAudio();
            alert(n + ' that was a Good Try!');
        }
    }
}

// FUNCTION TO GET USER INPUT ON SUDOKU BOARD
function fetch() {
    for (var i = 1; i <= 1; i++) {
        for (var j = 1; j <= 9; j++) {
            let x = document.getElementById('r' + [i] + 'c' + [j]).value;
            arr.push(x);
        }
        // console.log(arr);
    }
}

// FUNCTION TO COMPARE USER INPUTS AND ACTUAL OUTPUT
function compare() {
    fetch();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == answer[i] || arr.length == answer.length) {
            flag = true;
        } else {
            flag = false;
        }
    }
}

// AUDIO VARIABLES & FUNCTIONS
var audiostart = document.getElementById("startAudio");
var audiowin = document.getElementById("winAudio");
var audiolose = document.getElementById("loseAudio");

function startAudio() {
    audiostart.play();
}

function winAudio() {
    audiowin.play();
}

function loseAudio() {
    audiolose.play();
}