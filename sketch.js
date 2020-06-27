
// Warp Speed Sketch
var warpSketch = function(p) {
	stars = new Array(100)

	p.setup = function() {
		p.createCanvas(600, 600);
		let numberOfStars = 100;
		stars = Array(numberOfStars).fill().map(() => new Star(p))
	}

	p.draw = function() {
		speed = p.map(p.mouseX, 0, p.width, 0, 50);
		if (speed < 0)
			speed = 0;
		else if (speed > 50)
			speed = 50;
			
		p.background(0);
		p.translate(p.width/2, p.height/2);
		stars.forEach(function(s) {
			s.update(speed);
			s.show();
		})
	}
}
var myp5 = new p5(warpSketch, 'warpSketch');

// Terrain Sketch
var terrainSketch = function(p) {
	let cols,rows;
	let scale = 20
	let w = 1000;
	let h = 1000;
	let terrain;
	let yOffset = 0.1
	let offset = 0.1

	p.setup = function() {
		p.createCanvas(600, 600, p.WEBGL);
		cam = p.createCamera()
		cam.move(0, -100, 0)
		cols = w/scale;
		rows = h/scale;

		
		terrain = new Array(cols).fill().map(() => new Array(rows));
	}

	p.draw = function() {
		for (let y = 0; y < rows; y++) {
			for (let x = 0; x <cols; x++) {
				let noiseVal = p.noise(x*offset, y*offset+yOffset)
				terrain[x][y] = p.map(noiseVal, 0, 1, 0, 300);
			}
		}
		yOffset -= 0.025

		p.background(0);

		p.rotateX(p.PI/3);
		p.translate(-w/2,-h/2);
		p.stroke(255);
		p.noFill();


		p.frameRate(60)
		for (let y = 0; y < rows-1; y++) {
			p.beginShape(p.TRIANGLE_STRIP);
			for (let x = 0; x < cols; x++) {
				p.vertex(x*scale, y*scale,terrain[x][y]);
				p.vertex(x*scale, (y+1)*scale,terrain[x][y+1]);
			}
			p.endShape();
		}

	}
}
var myp5 = new p5(terrainSketch, 'terrainSketch');
