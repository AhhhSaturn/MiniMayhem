const games = {
    "Games": [
        "Hunger games",
        "Parkour",
        "Capture the flag",
        "Building game",
        "Spleef",
        "Dropper",
        "Maze",
        "Escape Room",
        "Death Run"
    ]
}

let cookies = document.cookie;
let voteBody = document.getElementById('voteBody');
let date = 0;
let expires = 0;

function giveCookie() {
    date = new Date();
    date.setTime(date.getTime()+(30*1000));
    expires = "; expires="+date.toGMTString();
    document.cookie = "vote=true" + expires + "; path=/";
}

function validate() {
    let current = 0;
    if (current < 9) {
        if (userInput == games.Games[current]) {
            console.log("Add one to " + games.Games[current]);
        } else {
            current++;
        };
    } 
}

if (cookies == "") {
    console.log('New vote');

    giveCookie();
} else {
    console.log('Already voted');
    voteBody.innerHTML = '<h1>You already voted!</h1>'
}