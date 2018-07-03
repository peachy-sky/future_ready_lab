//define an object that describes a circle
var circle = {
	diameter: 20,
	xCoor: 0,
	yCoor: 0,
	//color is red
	color: [255,0,0],
	xSpeed: 8,
	ySpeed: 8
};



//setup is run once at the start
function setup() {
	createCanvas(1300, 680);
	frameRate(15);
}



//draw the circle
function draw() {
    fill(circle.color);
 	ellipse(circle.xCoor, circle.yCoor, circle.diameter);
	
	//if hit the right/left edge of the canvas
	
	if(circle.xCoor >= 1300){	
		//makes the circle a random color
		circle.color = [random(0, 255), random(0, 255), random(0, 255)];
		
		//change the circle speed to make it move left
		circle.xSpeed = -circle.xSpeed;
		
	}else if(circle.xCoor < 0) {
		
		//make the circle a random color
		circle.color = [random(0, 255), random(0, 255), random(0, 255)];
		
		//change the circle speed to make it move right
		circle.xSpeed = -circle.xSpeed;
		
	}
	
	circle.xCoor += circle.xSpeed
	
	//if hit the top/bottom edge of the canvas
	
	if(circle.yCoor >= 680){	
		//makes the circle diameter random
		circle.diameter = random(20, 200)
		
		//change the circle speed to make it move down
		circle.ySpeed = -circle.ySpeed;
		
	}else if(circle.yCoor < 0) {
		//make the circle diameter random
		circle.diameter = random(20, 100)
		
		//change the circle speed to make it move up
		circle.ySpeed = -circle.ySpeed;
	}
	
	circle.yCoor += circle.ySpeed
	
	//up down changes size
	//left right changes color
	
}