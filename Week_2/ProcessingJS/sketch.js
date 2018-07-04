//define an object that describes a circle
/* var circle = {
	diameter: 20,
	xCoor: 0,
	yCoor: 0,
	//color is red
	color: [255,0,0],
	xSpeed: 8,
	ySpeed: 8
};
*/

function Ball(x, y, diameter, color, xSpeed, ySpeed){
	this.xCoor = x;																		//"this" is a keyword that refers to the individual object
	this.yCoor = y;
	this.diameter = diameter;
	this.color = color || [0, 0, 0];													// || [0, 0, 0] makes the default/start color black
	this.xSpeed = xSpeed || 12;
	this.ySpeed = ySpeed || 5;
}
var circle = new Ball(30, 30, 15);														//define global variables
var circle2 = new Ball(30, 30, 15);
var circle3 = new Ball(Math.random() * (width-diameter)+(diameter/2), Math.random() * (height-diameter)+(diameter/2), 15);
var ballList = [circle, circle2, circle3];


function setup() {																		//setup is run once at the start
	createCanvas(parseInt(prompt("What do you want the canvas's X length to be?")), parseInt(prompt("What do you want the canvas's Y length to be?")));																								//ask what size the user wants the window to be
}


var randomNum = Math.round(Math.random() * 3);											//create a variable that chooses how many circles are drawn
	if(randomNum == 0){
		randomNum == 2
	}
	else if(randomNum == 1){
		randomNum == 5
	}
	else if(randomNum == 2){
		randomNum == 9
	}
	else randomNum == 16


function randomColor() {
	return [random(0,256), random(0, 256), random(0, 256)];
}


//draw the circle
function draw() {
	background(255,255,255);
	for(var i = 0; i < ballList.length; i++){
		fill(ballList[i].color);
		ellipse(ballList[i].xCoor, ballList[i].yCoor, ballList[i].diameter);
		if(ballList[i].xCoor >= width){													//if hit the right/left edge of the canvas
			ballList[i].color = [random(0, 255), random(0, 255), random(0, 255)]; 		//makes the circle a random color
			ballList[i].xSpeed = -ballList[i].xSpeed; 									//change the circle speed to make it move left
		}else if(ballList[i].xCoor < 0) {
			ballList[i].color = [random(0, 255), random(0, 255), random(0, 255)];		//make the circle a random color
			ballList[i].xSpeed = -ballList[i].xSpeed; 									//change the circle speed to make it move right
		}
		ballList[i].xCoor += ballList[i].xSpeed
		if(ballList[i].yCoor >= height){												//makes the circle diameter random
			ballList[i].diameter = random(10, 80)
			ballList[i].ySpeed = -ballList[i].ySpeed;									//change the circle speed to make it move down
		}else if(ballList[i].yCoor < 0) {
			ballList[i].diameter = random(10, 80)										//make the circle diameter random
			ballList[i].ySpeed = -ballList[i].ySpeed;									//change the circle speed to make it move up
		}
		ballList[i].yCoor += ballList[i].ySpeed
	}
}