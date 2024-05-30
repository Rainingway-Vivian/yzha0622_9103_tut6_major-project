let fixedColor;
let size;
let scaleFactor;
let backgroundColor = [];
let largeCircleColors = [];
let smallCircleColors = [];

// To store circles whose size and color can be modified together
let randomCircles = [];

let rotationAngle = 0;

let song, fft, spectrum;
let numBins = 128; // how many frequency bands we have
let smoothing = 0.8;
let button;

// Load music
function preload() {
  song = loadSound("assets/valero.wav");
}

// Control the music to play or not
function play_pause() {
  if(song.isPlaying()) {
    song.stop();
  } else {
    song.loop();
  }
}

function setup() {

  // Connect the code with the music
  fft = new p5.FFT(smoothing, numBins);
  song.connect(fft);

  // Set the button to control the music
  button = createButton("Day/Night");
  button.mousePressed(play_pause);
  
  // Calculate the size of the canvas
  size = Math.min(windowWidth, windowHeight);
  scaleFactor = Math.min(windowWidth, windowHeight) / 1024;

  button.position((size - button.width) / 2, size - button.height - 10);

  createCanvas(size, size);
  noStroke();
  
  // Colors of the circles in the middle
  largeCircleColors = [
    color(233, 75, 60), color(119, 197, 147), color(75, 156, 211),
    color(255, 215, 0), color(181, 101, 167), color(255, 165, 0)
  ];

  // Colors of the "randomCircles"
  smallCircleColors = [
    color(75, 156, 211), color(255, 215, 0), color(181, 101, 167),
    color(255, 165, 0), color(233, 75, 60)
  ];

  backgroundColor = [color(3, 61, 94)];


  // Store circles whose size and color can be modified together
  let randomCircle;

  randomCircle = {fill:smallCircleColors[0],
    pattern: [650, 270, 25, 25] };
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[1],
    pattern: [600, 300, 20, 20] };
    randomCircles.push(randomCircle);
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [640, 340, 15, 15] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [730, 190, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [740, 210, 15, 15] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[0],
      pattern: [730, 240, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[1],
      pattern: [830, 350, 50, 50] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [880, 420, 7, 7] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [880, 450, 5, 5] };
    randomCircles.push(randomCircle);
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [890, 450, 5, 5] };
    randomCircles.push(randomCircle);
    
      randomCircle = {fill:smallCircleColors[0],
      pattern: [880, 490, 20, 20] };
    randomCircles.push(randomCircle);
    
      randomCircle = {fill:smallCircleColors[1],
      pattern: [880, 510, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [885, 570, 5, 5] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [860, 575, 15, 15] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [840, 550, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[0],
      pattern: [820, 610, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[1],
      pattern: [850, 675, 20, 20] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [870, 660, 5, 5] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [815, 650, 30, 30] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [830, 700, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[0],
      pattern: [840, 710, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[1],
      pattern: [485, 765, 20, 20] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [480, 810, 30, 30] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [490, 865, 25, 25] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [520, 900, 40, 40] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[0],
      pattern: [550, 920, 30, 30] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[1],
      pattern: [600, 920, 5, 5] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [460, 900, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [380, 670, 15, 15] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [340, 620, 15, 15] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[0],
      pattern: [335, 900, 6, 6] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[1],
      pattern: [320, 890, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [290, 850, 50, 50] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [295, 790, 30, 30] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [310, 810, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[0],
      pattern: [310, 770, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[1],
      pattern: [250, 700, 15, 15] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [280, 690, 15, 15] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [160, 690, 80, 80] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [125, 650, 80, 80] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[0],
      pattern: [105, 750, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[1],
      pattern: [115, 770, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [140, 510, 100, 100] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [95, 590, 25, 25] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [80, 470, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[0],
      pattern: [150, 410, 70, 70] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[1],
      pattern: [270, 390, 130, 130] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[2],
      pattern: [305, 255, 175, 175] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[3],
      pattern: [110, 320, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [130, 260, 10, 10] };
    randomCircles.push(randomCircle);
    
    
      randomCircle = {fill:smallCircleColors[4],
      pattern: [175, 210, 10, 10] };
    randomCircles.push(randomCircle);

    // The circle with the same color of the background
    randomCircle = {fill:backgroundColor[0],
      pattern: [510, 280, 70]};
        randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[4],
  pattern: [520, 280, 70]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[3],
  pattern: [560, 100, 15]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[0],
  pattern: [580, 100, 10]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[4],
  pattern: [570, 110, 10]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[1],
  pattern: [650, 170, 100, 100]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[2],
  pattern: [600, 250, 50, 50]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[0],
  pattern: [680, 250, 30, 30]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[2],
  pattern: [690, 340, 35, 35]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[3],
  pattern: [720, 170, 5, 5]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[0],
  pattern: [770, 240, 10, 10]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[2],
  pattern: [775, 320, 115, 115]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[3],
  pattern: [850, 320, 10, 10]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[3],
  pattern: [780, 470, 150, 150]};
    randomCircles.push(randomCircle);

    // The circle with the same color of the background
    randomCircle = {fill:backgroundColor[0],
      pattern: [770, 550, 100, 100]};
        randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[4],
  pattern: [770, 560, 100, 100]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[3],
  pattern: [880, 430, 10, 10]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[2],
  pattern: [860, 620, 60, 60]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[0],
  pattern: [700, 650, 50, 50]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[1],
  pattern: [760, 710, 100, 100]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[0],
  pattern: [750, 790, 50, 50]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[2],
  pattern: [600, 800, 200, 200]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[1],
  pattern: [380, 750, 125, 125]};
    randomCircles.push(randomCircle);

    // The circle with the same color of the background
    randomCircle = {fill:backgroundColor[0],
      pattern: [380, 850, 130, 130]};
        randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[4],
  pattern: [380, 850, 100, 100]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[0],
  pattern: [290, 730, 10, 10]};
    randomCircles.push(randomCircle);

  randomCircle = {fill:smallCircleColors[1],
  pattern: [330, 680, 20, 20]};
    randomCircles.push(randomCircle);

}

function draw() {
  spectrum = fft.analyze();
  clear()
  background(3, 61, 94);
  push();
  // Fit the image to the window size
  scale(scaleFactor);
  originalImage();
  pop();

  push();
  translate(size / 2, size / 2);

  // Control the rotating animation
  rotationAngle += 0.005; 
  rotate(rotationAngle);

  scale(scaleFactor);
  let moonRadius = 100;
  let offset = 45;
  if(song.isPlaying()) {// DAY
    fill(255, 165, 0);
    ellipse(0, 350, moonRadius * 2);
    fill(3, 61, 94);
    ellipse(0 , 350, moonRadius * 1.9);
    fill(255, 165, 0);
    ellipse(0, 350, moonRadius * 1.8);
  } else {// NIGHT
    fill(255, 165, 0);
    ellipse(0, 350, moonRadius * 2);
    fill(3, 61, 94);
    ellipse(0 + offset, 350, moonRadius * 1.9);
  }

  pop();

}

// Function of special pattern1
function drawDuelCircle(x, y, radius, delta) {
  fill(233, 75, 60);
  ellipse(x, y, radius * 2, radius * 2);
  fill(119, 197, 147);
  ellipse(x, y, radius - delta, radius - delta);
}

// Function of special pattern2
function drawSpecialCircle(x, y, outerRadius, innerRadius) {
  fill(75, 156, 211);
  arc(x, y, 2 * outerRadius, 2 * outerRadius, 0, PI);

  fill(255, 215, 0);
  arc(x, y, 2 * outerRadius, 2 * outerRadius, PI, TWO_PI);

  fill(181, 101, 167);
  ellipse(x, y, 2 * innerRadius, 2 * innerRadius);
}

// Function of special pattern3
function drawComplexCircle(x, y, outerRadius, middleRadius, innerRadius) {
  fill(255, 165, 0);
  ellipse(x, y, 2 * outerRadius, 2 * outerRadius);
  fill(233, 75, 60);
  ellipse(x, y, 2 * middleRadius, 2 * middleRadius);
  fill(119, 197, 147);
  ellipse(x, y, 2 * innerRadius, 2 * innerRadius);
}

// Function of drawing all patterns
function originalImage() {

  let x = 512;
  let y = 512;

  // Circles in the middle
  for (let r = 390, i = 0; r >= 70; r -= 40, i++) {
    fill(largeCircleColors[i % largeCircleColors.length]);
    ellipse(x, y, r, r);
  }

  // Two small circles in the middle
  fill(0, 0, 255);
  ellipse(x, y - 30, 30, 30);
  fill(0, 255, 0);
  ellipse(x, y + 30, 30, 30);


for (i = 0; i < spectrum.length -50; i++) { //"-50" because there are only 78 circles in total
  let x = map(spectrum[i], 0, 255, 0, 2); //how big the pattern will grow with the music
  fill(randomCircles[i].fill);
  ellipse(randomCircles[i].pattern[0], randomCircles[i].pattern[1], randomCircles[i].pattern[2] * x);
}

}

// Fit canvas and pattern to window size
function windowResized() {
  clear()
  background(3, 61, 94);

  size = Math.min(windowWidth, windowHeight);
  scaleFactor = Math.min(windowWidth, windowHeight) / 1024;

  resizeCanvas(size, size);

  button.position((size - button.width) / 2, size - button.height - 10);// Change the button position

}
