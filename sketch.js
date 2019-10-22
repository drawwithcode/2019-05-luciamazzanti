var img;
var frame;
var palms;

var capture;

var mySong;

var colorList = ['#ffff99', '#cc66ff', '#33ff99', '#33ccff', '#ff66cc'];

function preload() {

  img = loadImage("./assets/background.png");
  frame = loadImage("./assets/frame.png");
  palms = loadImage("./assets/palms.png");

  mySong = loadSound("./assets/itsnear.mp3");
}

function setup() {

  createCanvas(windowWidth, windowHeight);

  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  capture.hide();

  mySong.loop();
}

function draw() {

  //BACKGROUND
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  let scale = Math.max(width / img.width, height / img.height);
  image(img, 0, 0, img.width * scale, img.height * scale)
  pop();

  //RANDOM SQUARES
  push();
  var index = floor(random() * colorList.length);
  var colorHex = colorList[index];
  fill(color(colorHex));
  noStroke();

  var x = random() * width;
  var y = random() * height;
  var h = random() * 10;
  rect(x, y, h, h);
  pop();


  //VIDEO
  push();
  var video = capture.loadPixels();
  imageMode(CENTER);
  image(video, width / 2, height / 2, 750, 480);
  pop();


  //PAINT FRAME
  push();
  imageMode(CENTER);
  image(frame, width / 2, height / 2, 800, height * scale);
  pop();

  //PALMS
  image(palms, 1000, 400, 400, 400);

  //COMMANDS
  if (keyIsDown(LEFT_ARROW)) {
    filter('invert');
  }

  if (keyIsDown(RIGHT_ARROW)) {
    if (mySong.isPlaying() == false) {
      mySong.play();
    }
  }

  if (keyIsDown(DOWN_ARROW)) {
    if (mySong.isPlaying() == true) {
      mySong.stop();
    }
  }


  //TEXT of explenation
  textFont("VT323");
  push();
  var myText = 'To invert the colors';
  var text2 = 'of the screen';
  var text3 = 'press the LEFT ARROW_';
  var text4 = 'To play the music';
  var text5 = 'press the RIGHT one_';
  var text6 = 'To stop it';
  var text7 = 'press the DOWN ARROW_';

  textSize(30);
  fill(44, 253, 164);
  translate(0, 10);

  text(myText, 20, 105);
  text(text2, 20, 130);
  text(text3, 20, 155);
  text(text4, 20, 180);
  text(text5, 20, 215);
  text(text6, 20, 240);
  text(text7, 20, 265);
  pop();

  //MUSIC TEXT
  push();
  var musicText = "Music: It's near by Dj Quads";
  textSize(50);
  fill(35, 206, 253);
  textAlign(CENTER);
  text(musicText, windowWidth / 2, 55);
  pop();
}
