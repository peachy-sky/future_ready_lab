var cD = [];
var ccD = [];
var randomNum = Math.round(Math.random() * 3 + 1);
var G = 0.6;

function setup() {
   createCanvas(500, 500);
   if(randomNum != 4) {
      (Math.pow(randomNum, 2) + (3 * randomNum)) / 2;
   } else {
       randomNum = 16;
   }
   for(var i = 0; i < randomNum; i++) {
       // Two-Dimensional Array to hold circle data in following order:
       // X-Position, Y-Position, Diameter, Color, X-Velocity, Y-Velocity
       var diameter = Math.random()*80;
        cD[i] = [Math.random()*(width-diameter)+(diameter/2), Math.random()*(height-diameter)+(diameter/2), diameter, Math.random()*255, 12, 5];
        ccD[i] = [cD[i][0], cD[i][1]];
   }
}

function draw() {
   background('#ffffff');
   circleMove();
   circleRender();
}

// Determines path for circle
function circleMove() {
  for(var i  = 0; i < randomNum; i++) {  
    ccD[i][0] += cD[i][4];
    ccD[i][1] += cD[i][5];
  }
}

// Renders circles on screen
function circleRender() {
  for(var i = 0; i < randomNum; i++){
    cD[i][0] = ccD[i][0];
    cD[i][1] = ccD[i][1];
    if(cD[i][0] < 0 || cD[i][0] > width) {
      cD[i][0] = ((cD[i][0]/Math.abs(cD[i][0]))*(width/2))+(width/2);
      cD[i][3] = Math.random()*255;
      cD[i][4] *= -1;
    }
    if(cD[i][1] < 0 || cD[i][1] > height){
      cD[i][0] = ((cD[i][1]/Math.abs(cD[i][1]))*(height/2))+(height/2);
      cD[i][2] = Math.random()*80;
      cD[i][5] *= -1;
      
    }
    fill(0, 0, cD[i][3]);
    ellipse(cD[i][0], cD[i][1], cD[i][2], cD[i][2]);
  }
}