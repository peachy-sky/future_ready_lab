var ballList = [];

function setup() {																		//setup is run once at the start
	background(255, 164, 204);
	createCanvas(parseInt(prompt("What do you want the canvas's X length to be?")), parseInt(prompt("What do you want the canvas's Y length to be?")));
																						//ask what size the user wants the window to be
	var circleAmount =random([2, 5, 10, 16]);
	for( var i = 0; i < circleAmount; i++){
		ballList[i] = new Ball (random(0, width), random(0, height), 15);
	}
}


function Ball(x, y, diameter, color, xSpeed, ySpeed){
	this.xCoor = x;																		//"this" is a keyword that refers to the individual object
	this.yCoor = y;
	this.diameter = diameter;
	this.color = color || [255, 164, 204];													// || [0, 0, 0] makes the default/start color black
	this.xSpeed = xSpeed || 12;
	this.ySpeed = ySpeed || 5;
}



/*function collision(ball1, ball2) {
	var space =;
	var radii = (ball1.diameter/2)
	if()
}*/


function draw() {																		//draw the circle
	background(255,255,255);
	for(var i = 0; i < ballList.length; i++){
		fill(ballList[i].color);
		ellipse(ballList[i].xCoor, ballList[i].yCoor, ballList[i].diameter);
		if(ballList[i].xCoor >= width){													//if hit the right/left edge of the canvas
			ballList[i].color = [random(0, 255), random(0, 255), random(0, 255)]; 		//makes the circle a random color
			ballList[i].xSpeed = -(ballList[i].xSpeed + 1); 									//change the circle speed to make it move left
		}else if(ballList[i].xCoor < 0) {
			ballList[i].color = [random(0, 255), random(0, 255), random(0, 255)];		//make the circle a random color
			ballList[i].xSpeed = -ballList[i].xSpeed + 1; 									//change the circle speed to make it move right
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