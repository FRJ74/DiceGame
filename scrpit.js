// Select all dice elements on the page
const listOfAllDice = document.querySelectorAll(".die");

// Select all input elements within the score options section
const scoreInputs = document.querySelectorAll("#score-options input");

// Select all span elements within the score options section (for displaying scores)
const scoreSpans = document.querySelectorAll("#score-options span");

// Get the element displaying the current round number
const roundElement = document.getElementById("current-round");

// Get the element displaying the number of rolls in the current round
const rollsElement = document.getElementById("current-round-rolls");

// Get the element displaying the total score
const totalScoreElement = document.getElementById("total-score");

// Get the element that shows the history of scores
const scoreHistory = document.getElementById("score-history");

// Get the button element for rolling the dice
const rollDiceBtn = document.getElementById("roll-dice-btn");

// Get the button element for keeping the current score
const keepScoreBtn = document.getElementById("keep-score-btn");

// Get the container that holds the game rules
const rulesContainer = document.querySelector(".rules-container");

// Get the button that toggles the display of the rules
const rulesBtn = document.getElementById("rules-btn");

// Array to store the current values of all dice
let diceValuesArr = [];

// Boolean to track if the modal (rules or info) is currently showing
let isModalShowing = false;

// Variable to store the player's current score
let score = 0;

// Variable to track the current round number
let round = 1; 

// Variable to track the number of rolls in the current round
let rolls = 0;

rulesBtn.addEventListener("click", () => {
    // Toggle the visibility of the rules container
    rulesContainer.classList.toggle("hidden");
    
    // Update the modal showing state
    isModalShowing = !isModalShowing;
    
    // If the modal is showing, disable the roll and keep score buttons
    if (isModalShowing) {
        rollDiceBtn.disabled = true;
        keepScoreBtn.disabled = true;
    } else {
        rollDiceBtn.disabled = false;
        keepScoreBtn.disabled = false;
    }
});