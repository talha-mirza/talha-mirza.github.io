let w = window.innerWidth;
let h = window.innerHeight;
let font, fontsize = w * 1/20;
let buttonFont = w * 1/30;
let txtPlay;
let bounds;

//audio input
let amplitude;
let song, autoplay;

//---------------------PRELOAD FUNCTION-------------------------------------//
function preload(){
	font = loadFont('assets/Lato-Thin.ttf');
	
	//loading sound files
	var source = 'assets/iwishyouwerehere.mp3';
	soundFormats('mp3', 'ogg');
	//song = loadSound('assets/iwishyouwerehere.mp3');
	//song = document.getElementById("song");
	song = document.createElement('audio').
	song = loadSound('assets/iwishyouwerehere.mp3');


}

//--------------------PARTICLE CLASS --------------------------------------//
class Particle{
	constructor(){
		this.x = random(0, width);
		this.y = random(0, height);
		this.r = random(1, 8);
		this.xSpeed = random(-0.2, 0.2);
		this.ySpeed = random(-0.2, 0.5);
	}

	createParticle(){
		noStroke();
		fill('rgba(200, 169, 169, 0.5)');
		ellipse(this.x, this.y, this.r);
	}

	moveParticle(s){
		if(this.x < 0 || this.x > w) this.xSpeed *= -1;
		if(this.y < 0 || this.y > h) this.ySpeed *= -1;
		
		let randX = random((-(s/6) - 0.1), (0.1 + (s/6)));
		let randY = random((-(s/4) - 0.2), ((s/4) + 0.2));

		/*
		this.x += this.xSpeed;
		this.y += this.ySpeed;
		*/

		this.x += randX;
		this.y += randY;
	}

	joinParticles(particles){
		particles.forEach(element =>{
			var dis = dist(this.x, this.y, element.x, element.y);
			if(dis < 85){
				stroke('rgba(255, 255, 255, 0.1)');
				line(this.x, this.y, element.x, element.y);
			}
		});
	}
}
//-------------------------SETUP and DRAW ------------------------------------//
let particles = [];

function setup(){
	//initializing sounds and amplitudes
	song.play();
	amplitude = new p5.Amplitude();
	amplitude.setInput(song);


	createCanvas(window.innerWidth - 20, window.innerHeight - 20);
	noCursor();

	for(let i = 0; i <= (window.innerWidth/10); i++){
		particles.push(new Particle());
	}

	textFont(font);
	textSize(fontsize);
}

function draw(){
	//rms metering
	let level = amplitude.getLevel();
	let size = map(level, 0, 1, 0, 200);

	background('#0f0f0f');

	for(let i = 0; i < particles.length; i++){
		particles[i].createParticle();
		particles[i].moveParticle(size);
		particles[i].joinParticles(particles.slice(i));
	}

	textAlign(CENTER);

	fill(255);
	textSize(fontsize);
	text('I Wish You Were Here - Chaand Soorij', (w - 20)/2, (h - 20)/2);
	
	playPause();

	strokeWeight(1);
	stroke(90, 120, 255);

	ellipse(mouseX, mouseY, 15, 15);
	
}

function playPause(){
	fill(255);
	bounds = font.textBounds('I Wish You Were Here - Chaand Soorij', (w - 20)/2, (h - 20)/2, fontsize);

	//mouseFill
	if(mouseX >= bounds.x && mouseX <= bounds.x + bounds.w && mouseY >= bounds.y && mouseY <= bounds.y + bounds.h){
		fill(90, 120, 255);
	} else {
		noFill();
	}
	
}


function mousePressed() {
	if(mouseX >= bounds.x && mouseX <= bounds.x + bounds.w && mouseY >= bounds.y && mouseY <= bounds.y + bounds.h){
		if (song.isPlaying()) {
			song.pause();
		} else if(song.isPaused()){
			song.play();
		} else {
			song.play();
		}
	}
}
