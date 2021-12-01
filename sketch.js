//time variables
//use these when setting with custom time, otherwise keep for real time
/*
var sec = 47;
var minutes = 49;
var hours = 13; //why is the night and day not working?
var days = 21;
var months = 5;
var years = 2021;
*/

var xPos;
var yPos;

var pranav;

var alarmOn = false;

var index = 0;

//weather variables
// can i have typed input for the weather?
var rainy = false;
var sunny = false;
var cloudy = false;
var snowy = false; //what other kinds of weather are there?
var windy = false;

//day variables
var isItDay = false;

var frames = 0;

var weatherInd = 0;

//things for mouseIsPressed
var radio; //can I make it have sound for an alarm?
function preload() {
  pranav = loadSound("PGMrecord.m4a");
}
function setup() {
  createCanvas(600, 400);
  //if (hour() == 12 && minute() == 39 && second() == 8)
  //pranav.play();
}

function draw() {
  makeClock();
  //timeWatch();
  dayOrNight();
  weather();
  alarmSet();
  print(alarmOn);
}

function alarmSet() {
  textSize(30);
  text("Alarm: 7:45 am", 43, 350);
  //button
  if (!alarmOn) {
    stroke(255, 0, 107);
    fill(255, 0, 107);
  } else {
    stroke(0, 204, 0);
    fill(0, 204, 0);
  }
  //if(mouseIsPressed)
  ellipse(330, 335, 50, 50);
  /*
  if (hour() > 5 && hour() < 18) {
    stroke(102, 0, 0);
    strokeWeight(5);
    noFill();
    rect(20, 300, 250, 400);
  } else {
    stroke(153, 255, 204);
    strokeWeight(5);
    noFill();
    rect(20, 300, 250, 400);
    */
  /*
  if (mouseX > 280 && mouseX < 380) {
    if (mouseY > 285 && mouseY < 385) {
        if(mouseIsPressed()){
          alarmOn = true;
        }
    }
  }
  */
  if (alarmOn) {
    if (hour() == 7 && minute() == 45 && second() == 0) {
      pranav.play();
      alarmOn=false;
    }
  }
  /*
  if(mouseX>270&&mouseX<385&&mouseY>285&&mouseY<385){
    //if(mouseIsPressed){
      alarmGo=true;
    //}
  }
  if(alarmOn)
      pranavPlay();
      */
}

function dayOrNight() {
  stroke(255, 0, 107);
  fill(255, 0, 107);
  textSize(20);
  text("Day or Night", 418, 60);
  if (hour() > 5 && hour() < 18) {
    // switch hour() to hours for custom time
    stroke(255, 255, 0);
    strokeWeight(5);
    fill(255, 255, 0);
    ellipse(460, 120, 50, 50, radians(0));
    line(460, 120, 420, 160);
    line(460, 120, 460, 170);
    line(460, 120, 500, 160);
    line(410, 120, 510, 120);

    line(460, 120, 420, 80);
    line(460, 120, 460, 70);
    line(460, 120, 500, 80);
  } else {
    noStroke();
    fill(255, 255, 204);
    ellipse(460, 120, 50, 50, radians(0));
    fill(255, 255, 153);
    ellipse(465, 120, 20, 15);
    ellipse(445, 112, 10, 20);
    ellipse(460, 132, 10, 5);
  }
}

function weather() {
  strokeWeight(1);
  textSize(20);
  stroke(255, 0, 107);
  fill(255, 0, 107);
  text("Weather", 430, 200);
  noStroke();

  if (weatherInd == 1) {
    rainy = true;
    sunny = false;
    cloudy = false;
    snowy = false;
    windy = false;
  }
  if (weatherInd == 2) {
    rainy = false;
    sunny = false;
    cloudy = false;
    snowy = true;
    windy = false;
  }
  if (weatherInd == 3) {
    rainy = false;
    sunny = true;
    cloudy = false;
    snowy = false;
    windy = false;
  }
  if (weatherInd == 4) {
    rainy = false;
    sunny = false;
    cloudy = true;
    snowy = false;
    windy = false;
  }
  if (weatherInd == 5) {
    rainy = false;
    sunny = false;
    cloudy = false;
    snowy = false;
    windy = true;
  }

  if (rainy) {
    fill(192);
    ellipse(430, 260, 60, 60);
    ellipse(450, 240, 65, 60);
    ellipse(475, 270, 45, 60);
    ellipse(490, 250, 60, 60);

    fill(0, 0, 204);
    ellipse(450, 310, 5, 10);
    ellipse(435, 300, 5, 10);
    ellipse(420, 315, 5, 10);
    ellipse(435, 340, 5, 10);
    ellipse(470, 325, 5, 10);
    ellipse(485, 305, 5, 10);
    ellipse(490, 330, 5, 10);
  }
  if (snowy) {
    fill(255);
    ellipse(430, 260, 60, 60);
    ellipse(450, 240, 65, 60);
    ellipse(475, 270, 45, 60);
    ellipse(490, 250, 60, 60);

    fill(255);
    ellipse(450, 310, 5, 10);
    ellipse(435, 300, 5, 10);
    ellipse(420, 315, 5, 10);
    ellipse(435, 340, 5, 10);
    ellipse(470, 325, 5, 10);
    ellipse(485, 305, 5, 10);
    ellipse(490, 330, 5, 10);

    ellipse(450, 310, 10, 5);
    ellipse(435, 300, 10, 5);
    ellipse(420, 315, 10, 5);
    ellipse(435, 340, 10, 5);
    ellipse(470, 325, 10, 5);
    ellipse(485, 305, 10, 5);
    ellipse(490, 330, 10, 5);
  }
  if (sunny) {
    fill(0, 102, 204);
    //rect(385,195,150,150);
    fill(255, 255, 0);
    ellipse(460, 270, 70, 70);
    stroke(255, 255, 0);
    strokeWeight(10);
    line(405, 215, 515, 325);
    line(515, 215, 405, 325);
    line(400, 270, 520, 270);
    line(460, 210, 460, 330);
  }
  if (cloudy) {
    fill(192);
    ellipse(430, 260, 60, 60);
    ellipse(450, 240, 65, 60);
    ellipse(475, 270, 45, 60);
    ellipse(490, 250, 60, 60);
  }
  if (windy) {
    fill(192);
    ellipse(430, 260, 60, 60);
    ellipse(450, 240, 65, 60);
    ellipse(475, 270, 45, 60);
    ellipse(490, 250, 60, 60);

    ellipse(420, 330, 50, 5);
    ellipse(440, 350, 50, 5);
    ellipse(490, 340, 50, 5);
  }
  strokeWeight(2);
  stroke(255, 0, 107);
  fill(255, 0, 107);
}

function makeClock() {
  /* why is the line separating time/date/alarm from dayOrNight/weather not appearing?
  if (hour() > 5 && hour() < 18) {
    //strokeWeight(50);
    stroke(0, 153, 0);
    rect(250,0,270,400);
  }
  else{
    //strokeWeight(50);
    stroke(153, 255, 204);
    rect(250,0,270,400);
  }
  */
  if (hour() > 5 && hour() < 18) {
    strokeWeight(50);
    stroke(0, 153, 0);
    rect(0, 0, 600, 400);

    // switch hour() to hours for custom time{
    background(51, 153, 253);
    noFill();
    strokeWeight(50);
    stroke(102, 0, 0);
    rect(0, 0, 600, 400);
    strokeWeight(10);
    //rect(385,0,390,400);
    strokeWeight(50);

    textFont("Open Sans Condensed");
    strokeWeight(1);
    fill(102, 0, 0);
    textSize(20);
    text("Hour", 40, 100);
    text("Minute", 130, 100);
    text("Seconds", 220, 100);

    textSize(50);
    text(hour(), 47, 150); // switch hour() to hours for custom time
    text(minute(), 135, 150); // switch minute() to minutes for custom time
    text(second(), 230, 150); // switch second() to sec for custom time

    textSize(20);
    text("Month     /     Day     /     Year", 40, 200);
    textSize(50);
    text(month(), 55, 250); // switch month() to months for custom time
    text(day(), 120, 250); // switch day() to days for custom time
    text(year(), 175, 250); // switch year() to years for custom time
  } else {
    background(0);
    noFill();
    strokeWeight(50);
    stroke(153, 255, 204);
    rect(0, 0, 600, 400);

    textFont("Open Sans Condensed");

    textFont("Open Sans Condensed");
    strokeWeight(1);
    fill(153, 255, 204);
    textSize(20);
    text("Hour", 40, 100);
    text("Minute", 130, 100);
    text("Seconds", 220, 100);

    textSize(50);
    text(hour(), 35, 150); // switch hour() to hours for custom time
    text(minute(), 135, 150); // switch minute() to minutes for custom time
    text(second(), 230, 150); // switch second() to sec for custom time

    textSize(20);
    text("Month     /     Day     /     Year", 40, 200);
    textSize(50);
    text(month(), 55, 250); // switch month() to months for custom time
    text(day(), 120, 250); // switch day() to days for custom time
    text(year(), 175, 250); // switch year() to years for custom time
  }
}

function mousePressed() {
  if (mouseX > 270 && mouseX < 370 && mouseY > 285 && mouseY < 385) index++;
  if (index % 2 == 0) alarmOn = true;
  else alarmOn = false;
  /*
  if (mouseX > 280 && mouseX < 380) {
    if (mouseY > 285 && mouseY < 385) {
      alarmOn = true;
    }
  }
  */

  if (mouseX > 405 && mouseX < 520 && mouseY > 210 && mouseY < 330)
    weatherInd++;
  if (weatherInd == 6) weatherInd = 1;
}
//
//
//
//
//
//
//
//
/*
function timeWatch() { // use this function when making custom time
  if (frameCount % 60 == 0) sec++;
  if (sec == 60) {
    sec = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }
  if (hours == 24) {
    hours = 0;
    days++;
  }

  if (days > 0) {
    if (days == 29 && months == 2) {
      days = 1;
      months++;
    }
    if (
      days == 31 &&
      (months == 9 || months == 4 || months == 6 || months == 11)
    ) {
      days = 1;
      months++;
    }
    if (
      days == 32 &&
      (months == 1 ||
        months == 3 ||
        months == 5 ||
        months == 7 ||
        months == 8 ||
        months == 10)
    ) {
      days = 1;
      months++;
    }
    if (days == 32 && months == 12) {
      days = 1;
      months = 1;
      years++;
    }
  }
}
*/
