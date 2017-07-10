var minInput = document.getElementById('min-field');
var maxInput = document.getElementById('max-field');
var submitButton = document.getElementById('submit-button');
var numGuessed = document.getElementById('num-guessed');
var guessButton = document.getElementById('guess-button');
var clearButton = document.getElementById('clear-button');
var numDisplay = document.getElementById('your-number');
var warningMsg = document.getElementById('warning');
var resetButton = document.getElementById('reset-button');
var unserMin;
var userMax;
var newNum;

function enableSubmit() {
  submitButton.removeAttribute("disabled");
};
function gimmeNum(event) {
  event.preventDefault();
  userMin = parseInt(minInput.value);
  userMax = parseInt(maxInput.value);
  newNum = numGenerator();
  return newNum;
};
function numGenerator() {
  return Math.floor(Math.random() * (userMax - userMin + 1) + userMin);
};
function clearGuess(event){
  event.preventDefault();
  document.getElementById("num-guessed").value = '';
  clearButton.setAttribute("disabled", true);
};
function updateRange() {
  userMin = userMin - 10;
  userMax = userMax + 10;
};
function updateRangeInput() {
  document.getElementById('min-field').value = userMin;
  document.getElementById('max-field').value = userMax;
};
function changeDisplay(event) {
  event.preventDefault();
  var integerGuessed = parseInt(numGuessed.value);
  if ((integerGuessed > userMax) || (integerGuessed < userMin)) {
    numDisplay.innerHTML = "oops!";
    alert("That's outside your range!");
    warningMsg.innerHTML = "Try again!";
  } else if (integerGuessed === newNum) {
    warningMsg.innerHTML = "BOOM!";
    numDisplay.innerHTML = integerGuessed;
    updateRange();
    updateRangeInput();
    alert("You won! There is great rejoicing! Your range has automatically increased.");
  } else if ((integerGuessed > newNum) && (integerGuessed <= userMax)) {
    warningMsg.innerHTML = "That is too high.";
    numDisplay.innerHTML = integerGuessed;
  } else if ((integerGuessed < newNum) && (integerGuessed >= userMin)) {
    warningMsg.innerHTML = "That is too low.";
    numDisplay.innerHTML = integerGuessed;
  } else {
    numDisplay.innerHTML = "oops!";
    alert("That's not a number!");
    warningMsg.innerHTML = "Try again!";
  };
};
function clearButtonToggle() {
  if (numGuessed.value === "") {
    clearButton.setAttribute("disabled", true);
  } else if (numGuessed.value !== "") {
    clearButton.removeAttribute("disabled");
  };
  resetButton.removeAttribute("disabled");
  guessButton.removeAttribute("disabled");
};

minInput.addEventListener('input', enableSubmit);
maxInput.addEventListener('input', enableSubmit);
submitButton.addEventListener('click', gimmeNum);
numGuessed.addEventListener('input', clearButtonToggle);
clearButton.addEventListener('click', clearGuess);
guessButton.addEventListener('click', changeDisplay);
