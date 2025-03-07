/*

Officer: 2357155
CaseNum: 101-1-11513775-2357155

Case 101 - The Case of Anna Lovelace
Stage 2 - The Smalltalk Speakeasy

Well well, things have gotten interesting already ! No sooner does Anna step foot
in Console City than she heads straight for Smalltalk’s. Now be careful kid, that
place is a den of iniquity. Find out who she’s meeting and then get out as soon as
you can.

First identify Anna by drawing a rectangle with a Yellow Green outline around her.
She’s the woman in the red dress of course.

That woman with the cigarette and the feathered hat looks very familiar. Let’s identify her too by drawing
a rectangle with a Coral outline around her. 

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

The rectangles should cover the targets as accurately as possible without
including anything else.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  stroke() - Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	noFill();
	strokeWeight(2);

}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
	stroke(154,205,50)
	rect(192,120,320,672);
	stroke(255,127,80)
	rect(1350,45,170,290);

	//A helpful mouse pointer
	push();
		//fill(0);
		//fill('deeppink');
		textStyle("bold")
		textSize(30)
		//noStroke();
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();

}
