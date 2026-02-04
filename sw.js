// Model: Gemini 3 Flash
// Level: 1

let gameStarted = false;
let timer = 60;
let score = 0;

function setup() {
  createCanvas(800, 600);
  let startBtn = createButton('Start');
  startBtn.position(width / 2 - 25, height / 2);
  startBtn.mousePressed(() => {
    gameStarted = true;
    startBtn.hide();
  });
}

function draw() {
  background(220);
  
  if (gameStarted) {
    // Game logic for Level 1 truck goes here
    fill(0);
    textSize(24);
    text("Score: " + score, 20, 30);
  } else {
    fill(0);
    textAlign(CENTER);
    textSize(32);
    text("Truck Game: Level 1", width / 2, height / 2 - 40);
    textAlign(LEFT);
  }

  // Display Timer
  fill(0);
  textSize(24);
  text("Time: " + ceil(timer), width - 120, 30);

  // UPDATED: Timer only starts counting down when gameStarted is true
  if (gameStarted && timer > 0) {
    timer -= 1/60; // Assuming 60fps
  } else if (timer <= 0) {
    gameStarted = false;
    textSize(50);
    textAlign(CENTER);
    text("GAME OVER", width / 2, height / 2);
  }
}