let cols,rows;
let scale = 20
let w = 1000;
let h = 1000;
let terrain;
let yOffset = 0.1
let offset = 0.1

function setup() {
	createCanvas(600, 600, WEBGL);
	cam = createCamera()
	cam.move(0, -100, 0)
	cols = w/scale;
	rows = h/scale;

	
	terrain = new Array(cols).fill().map(() => new Array(rows));
}

function draw() {
	for (let y = 0; y < rows; y++) {
		for (let x = 0; x <cols; x++) {
			let noiseVal = noise(x*offset, y*offset+yOffset)
			terrain[x][y] = map(noiseVal, 0, 1, 0, 300);
		}
	}
	yOffset -= 0.025

	background(0);

	rotateX(PI/3);
	translate(-w/2,-h/2);
	stroke(255);
	noFill();


	frameRate(60)
	for (let y = 0; y < rows-1; y++) {
		beginShape(TRIANGLE_STRIP);
		for (let x = 0; x < cols; x++) {
			vertex(x*scale, y*scale,terrain[x][y]);
			vertex(x*scale, (y+1)*scale,terrain[x][y+1]);
		}
		endShape();
	}

}



