//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let startButton;
let nextButton;
let screen = 0;
let counter = 0;
let cursor1;
/* LOAD IMAGES AND OTHER */

loadFont(
  'fonts.googleapis.com/css2?family=Bytesized'
);

//   
/* SETUP RUNS ONCE */
function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  textSize(20);
  noStroke();
  cursor1 = loadImage('/assets/cursor/astro_arrow.cur');
  cursor(cursor1, pointer.x, pointer.y);

  // Home screen background + text
  background("lightblue");
  text(
    "The Plumtastic Quest",width /2, height /2 - 100);


  // Create buttons for all screens
  startButton = new Sprite(width/2, height /2 + 150);

  // Start hidden/off-screen buttons
  nextButton = new Sprite(-100, -100);
}

/* DRAW LOOP REPEATS */
function draw() {
  // Always display enter button style (only visible when on-screen)
  startButton.w = 200;
  startButton.h = 50;
  startButton.collider = "k";
  startButton.color = "plum";
  startButton.text = "Start";

  // Check enter button
  if (startButton.mouse.presses()) {
    showScreen1();
    screen = 1;
  }

  //Screen one objects, skips text, fast pace text (not type writter, next button)
  if (screen === 1) {
    nextButton.w = 50;
    nextButton.h = 50;
    nextButton.collider = "k";
    nextButton.color = "plum";
    nextButton.text = "Yes";
  }  
}

/* FUNCTIONS TO DISPLAY SCREENS */
function showScreen1() {
  background("palegreen");
  if (counter = 7) {
      showScreen2();
    else if (counter = 6) {
      background("palegreen");
      text("I am the plum queen, and I have a quest for you.", width / 2, height / 2 - 300);
    else if (counter = 5) {
      background("palegreen");
      text("Our magical plums have been stolen!", width / 2, height / 2 - 300);
    else if (counter = 4) {
      background("palegreen");
      text("I need you, to find all 5 and bring them back to me!", width / 2, height / 2 - 300);
    else if (counter = 3) {
      background("palegreen");
      text("Yes? You will? That is great!", width / 2, height / 2 - 300);
    else if (counter = 2) {
      background("palegreen");
      text("Just know... The road ahead of you is dangerous.", width / 2, height / 2 - 300);
    else if (counter = 1) {
      background("palegreen");
      text("You can pick out 2 of my people to go with you. Choose wisely.", width / 2, height / 2 - 300);
    }
  if (nextButton.mouse.presses()) {
    counter++:
  }

  


  startButton.pos = { x: -100, y: -100 };

  nextButton.pos = { x: width / 2 - 50, y: height / 2 + 100 };
}





/*
Example screen:

function showScreen2() {
  background("palegreen");
  text("You find a guy in the bush with a knife!\n Do you try to fight him?", width / 2, height / 2 - 100);

  // Hide A buttons
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -200, y: -200 };

  // Show B buttons
  b1Button.pos = { x: width / 2 - 50, y: height / 2 + 100 };
  b2Button.pos = { x: width / 2 + 50, y: height / 2 + 100 };
}


*/

/*
Example button choice yes or no:


if (a1Button.mouse.presses()) {
  showScreen2();
  screen = 2;
} else if (a2Button.mouse.presses()) {
  showScreen5();
  screen = 5;
}


Typewriter:

  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }


*/
