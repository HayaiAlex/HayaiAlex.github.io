stars = new Array(100)

function setup() {
	createCanvas(600, 600);
	let numberOfStars = 100;
	stars = Array(numberOfStars).fill().map(() => new Star())
}

function draw() {
	speed = map(mouseX, 0, width, 0, 50);
	background(0);
	translate(width/2, height/2);
	stars.forEach(function(s) {
	    s.update(speed);
	    s.show();
	})

}



