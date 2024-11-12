// target a single HTML element
const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");
let homeCounter = 0;
let guestCounter = 0;

function addOneHome() {
  homeCounter += 1;
  homeScore.textContent = homeCounter;
}

function addTwoHome() {
  homeCounter += 2;
  homeScore.textContent = homeCounter;
}

function addThreeHome() {
  homeCounter += 3;
  homeScore.textContent = homeCounter;
}

function addOneAway() {
  guestCounter += 1;
  guestScore.textContent = guestCounter;
}

function addTwoAway() {
  guestCounter += 2;
  guestScore.textContent = guestCounter;
}

function addThreeAway() {
  guestCounter += 3;
  guestScore.textContent = guestCounter;
}
