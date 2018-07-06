var ballList = [];																		//create an empty array for the balls that will be filled later

function setup() {																		//setup is run once at the start
	createCanvas(parseInt(prompt("What do you want the canvas's X length to be?")), parseInt(prompt("What do you want the canvas's Y length to be?")));
																						//ask what size the user wants the window to be
	var circleAmount = random([2, 5, 10, 16]);											//choose randomly 2, 5, 10, or 16, and make that # of circle
	for( var i = 0; i < circleAmount; i++){
		ballList[i] = new Ball (random(0, width), random(0, height), 15);				//add the new ball to array ballList
	}
}


function Ball(x, y, diameter, color, xSpeed, ySpeed){									//this is the template for making circles
	this.xCoor = x;																		//"this" is a keyword that refers to the individual object
	this.yCoor = y;
	this.diameter = diameter;
	this.color = color || [255, 164, 204];												// "||" means these properties are optional, and have set defaults
	this.xSpeed = xSpeed || 12;
	this.ySpeed = ySpeed || 5;
}


function draw() {																		//draw the circle
	background(255,255,255);
	for(var i = 0; i < ballList.length; i++){											//every ball will do the following things;
		fill(ballList[i].color);
		ellipse(ballList[i].xCoor, ballList[i].yCoor, ballList[i].diameter);
		if(ballList[i].xCoor >= width){													//if hitting the right/left edge of the canvas
			ballList[i].color = [random(0, 255), random(0, 255), random(0, 255)]; 		//makes the circle a random color
			ballList[i].xSpeed = -(ballList[i].xSpeed + 1); 							//change the circle speed to make it move left
		}else if(ballList[i].xCoor < 0) {												
			ballList[i].color = [random(0, 255), random(0, 255), random(0, 255)];		
			ballList[i].xSpeed = -ballList[i].xSpeed + 1; 								//change the circle speed to make it move right
				if (ballList[i].xSpeed > 100) {
					ballList[i].xSpeed = 12; 
				} 
		}
		if(ballList[i].yCoor >= height){												//if hitting the top/bottom edge of the canvas;
			ballList[i].diameter = random(10, 80)
			ballList[i].ySpeed = -ballList[i].ySpeed;									//change the circle speed to make it move down
		}else if(ballList[i].yCoor < 0) {
			ballList[i].diameter = random(10, 80)										//make the circle diameter random
			ballList[i].ySpeed = -ballList[i].ySpeed;									//change the circle speed to make it move up
		}
		
		
		ballList[i].xCoor += ballList[i].xSpeed
		ballList[i].yCoor += ballList[i].ySpeed
	}
	/*var space = Math.sqrt(Math.pow((ballList[i].xCoor - ballList[i+1].xCoor), 2) + Math.pow((ballList[i].yCoor - ballList[i+1].yCoor), 2));
	var bothRadii = (ball1.diameter/2) + (ball2.diameter/2);
	if(space < bothRadii){
		ballList[i].xSpeed = -ballList[i].xSpeed
	}*/
}