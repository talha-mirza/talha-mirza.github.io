let w = window.innerWidth;
let h = window.innerHeight;
let font, fontsize = 40;

//audio input
let csAmp, kAmp, sAmp, tAmp;
let csSize, kSize, sSize, tSize;
let chorusSynth, kick, strings, track;

//---------------------PRELOAD FUNCTION-------------------------------------//
function preload(){
	font = loadFont('assets/Lato-Thin.ttf');
	//loading sound files
	/*
	soundFormats('mp3', 'ogg');
	chorusSynth = loadSound('whoRealyWon_ChorusSynth.mp3');
	kick = loadSound('whoRealyWon_Kick.mp3');
	strings = loadSound('whoRealyWon_Strings.mp3');
	track = loadSound('whoRealyWon_Track.mp3');
	*/
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

	moveParticle(){
		if(this.x < 0 || this.x > w) this.xSpeed *= -1;
		if(this.y < 0 || this.y > h) this.ySpeed *= -1;

		this.x += this.xSpeed;
		this.y += this.ySpeed;
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
	//initializeing sounds and amplitudes
	/*
	chorusSynth.play();
	csAmp = new p5.Amplitude();
	csAmp.setInput(chorusSynth);

	kick.play();
	kAmp = new p5.Amplitude();
	kAmp.setInput(kick);

	strings.play();
	sAmp = new p5.Amplitude();
	sAmp.setInput(strings);

	track.play();
	tAmp = new p5.Amplitude();
	tAmp.setInput(track);
	*/

	createCanvas(window.innerWidth - 20, window.innerHeight - 20);
	noCursor();

	


	for(let i = 0; i < (window.innerWidth/10); i++){
		particles.push(new Particle());
	}

	textFont(font);
	textSize(fontsize);	
}

function draw(){
	//rms metering
	/*
	var csLevel = csAmp.getLevel();
	csSize = map(csAmp, 0, 1, 0, 200);

	var kLevel = kAmp.getLevel();
	kSize = map(kLevel, 0, 1, 0, 200);

	var sLevel = sAmp.getLevel();
	sSize = map(sLevel, 0, 1, 0, 200);

	var tLevel = tAmp.getLevel();
	tSize = map(tLevel, 0, 1, 0, 200);
	*/


	background('#0f0f0f');

	for(let i = 0; i < particles.length; i++){
		particles[i].createParticle();
		particles[i].moveParticle();
		particles[i].joinParticles(particles.slice(i));
	}

	textAlign(CENTER);

	fill(255);

	fill(255);
	text('Created by Talha Mirza', (w - 20)/2, (h - 20)/2);

	noFill();
	//fill(90, 100, 255);
	strokeWeight(1);
	stroke(90, 120, 255);
	//noStroke();
	ellipse(mouseX, mouseY, 15, 15);
}