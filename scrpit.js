// Select all dice elements for manipulation
const listOfAllDice = document.querySelectorAll(".die");
// Select all input elements for scoring options
const scoreInputs = document.querySelectorAll("#score-options input");
// Select all span elements for displaying score options
const scoreSpans = document.querySelectorAll("#score-options span");
// Get the element displaying the current round number
const roundElement = document.getElementById("current-round");
// Get the element displaying the number of rolls in the current round
const rollsElement = document.getElementById("current-round-rolls");
// Get the element displaying the total score
const totalScoreElement = document.getElementById("total-score");
// Get the element for displaying score history
const scoreHistory = document.getElementById("score-history");
// Get the button for rolling the dice
const rollDiceBtn = document.getElementById("roll-dice-btn");
// Get the button for keeping the current score
const keepScoreBtn = document.getElementById("keep-score-btn");
// Get the container that holds the game rules
const rulesContainer = document.querySelector(".rules-container");
// Get the button that toggles the rules display
const rulesBtn = document.getElementById("rules-btn");

// Array to store the current values of all dice
let diceValuesArr = [];
// Boolean to track if the rules modal is currently shown
let isModalShowing = false;
// Variable to keep track of the player's total score
let score = 0;
// Variable to keep track of the current round number
let round = 1; 
// Variable to keep track of the number of rolls in the current round
let rolls = 0;

// Function to update the score display
rollDiceBtn.addEventListener("click", () => {
  // Reset the dice values array for a new roll
  let count = 0;
  diceValuesArr = [];
  // Loop through each die and update its value
  while ( diceValuesArr.length < 5 ) {
    let random = Math.ceil(Math.random() * 6);
    listOfAllDice[count].textContent = random;
    count++;
  }
  });
    // Event listener for the rules button to toggle rules display
rulesBtn.addEventListener("click", () => {
  isModalShowing = !isModalShowing;

  if (isModalShowing) {
    // Show rules and update button text
    rulesBtn.textContent = "Hide rules";
    rulesContainer.style.display = "block";
  } else {
    // Hide rules and update button text
    rulesBtn.textContent = "Show rules";
    rulesContainer.style.display = "none";
  }
});