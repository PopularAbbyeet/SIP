//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let startButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;
print(screen);

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(windowWidth-300, windowHeight-100);
  textAlign(CENTER);
  textSize(20);
  noStroke();

  // Home screen background + text
  background("lightblue");
  text(
    "The Plum Adventure",width / 2, height / 2 - 100);


  // Create buttons for all screens
  startButton = new Sprite(width / 2, height / 2 + 100);

  // Start hidden/off-screen buttons
  a1Button = new Sprite(-100, -100);
  a2Button = new Sprite(-100, -100);
  b1Button = new Sprite(-100, -100);
  b2Button = new Sprite(-100, -100);
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
    a1Button.w = 50;
    a1Button.h = 50;
    a1Button.collider = "k";
    a1Button.color = "plum";
    a1Button.text = "Yes";

    a2Button.w = 50;
    a2Button.h = 50;
    a2Button.collider = "k";
    a2Button.color = "plum";
    a2Button.text = "No";
  }  
}

/* FUNCTIONS TO DISPLAY SCREENS */
function showScreen1() {
  background("palegreen");
  text("Plum queen diaglue", width / 2, height / 2 - 100);

  startButton.pos = { x: -100, y: -100 };

  a1Button.pos = { x: width / 2 - 50, y: height / 2 + 100 };
  a2Button.pos = { x: width / 2 + 50, y: height / 2 + 100 };
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


*/
