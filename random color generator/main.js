// This variable stores the "Pick a Color" button
const originalButton = document.getElementById("original-button")

// This variable stores the "Mystery Color" button
const mysteryButton = document.getElementById("mystery-button")

// This random number function that will creates color codes for the randomColor variable
// rgb(255, 255, 255)
function randomNumber(num) {
  return Math.floor(Math.random() * num);
}


// Write your code below
function colorChange(event) {
  const randomColor = 'rgb(' + randomNumber(255) + ',' + randomNumber(255) + ',' + randomNumber(255) + ')';
  event.target.style.backgroundColor = randomColor;
  }

originalButton.onclick = colorChange;
mysteryButton.onwheel = colorChange;