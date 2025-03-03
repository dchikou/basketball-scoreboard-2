let homeScoreDisplay = document.getElementById("home-score")
let guestScoreDisplay = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

homeScoreDisplay.innerText = homeScore
guestScoreDisplay.innerText = guestScore


function homeAddOne() {
    homeScore = homeScore + 1
    homeScoreDisplay.innerText = homeScore
    highlightLeader()
}
function homeAddTwo() {
    homeScore = homeScore + 2
    homeScoreDisplay.innerText = homeScore
    highlightLeader()
}
function homeAddThree() {
    homeScore = homeScore + 3
    homeScoreDisplay.innerText = homeScore
    highlightLeader()
}
function guestAddOne() {
    guestScore = guestScore + 1
    guestScoreDisplay.innerText = guestScore
    highlightLeader()
}
function guestAddTwo() {
    guestScore = guestScore + 2
    guestScoreDisplay.innerText = guestScore
    highlightLeader()
}
function guestAddThree() {
    guestScore = guestScore + 3
    guestScoreDisplay.innerText = guestScore
    highlightLeader()
}
function resetScore() {
    guestScore = 0
    homeScore = 0
    homeScoreDisplay.innerText = 0
    guestScoreDisplay.innerText = 0
    highlightLeader()
}

function highlightLeader() {
    if (homeScore > guestScore) {
        document.getElementById("guest-score").style.boxShadow = "none";
        document.getElementById("home-score").style.boxShadow = "0 0 10px white";
    } else if (homeScore < guestScore) {
        document.getElementById("guest-score").style.boxShadow = "0 0 10px white";
        document.getElementById("home-score").style.boxShadow = "none";
    } else {
        document.getElementById("guest-score").style.boxShadow = "none";
        document.getElementById("home-score").style.boxShadow = "none";
    }
    
}