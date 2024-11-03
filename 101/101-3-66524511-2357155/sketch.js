/*

Officer: 2357155
CaseNum: 101-3-66524511-2357155

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Sienna filled rectangle with a Lime Green outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Peru filled
rectangle with a Orange Red outline around him.

Identify the man reading the newspaper by drawing a Sandy Brown filled rectangle
with a Medium Violet Red outline around him.

Identify the woman with the dog by drawing a Orange Red filled rectangle with a
Medium Blue outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
  stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
	stroke(50,205,50)
	fill(160,82,45)
	rect(1094,172,140,289)
	
	
	stroke(255,69,0)
	fill(205,133,63)
	rect(523,315,160,210)


	stroke(199,21,133)
	fill(244,164,96)
	rect(748,230,253,510)


	stroke(0,0,205)
	fill(255,69,0)
	rect(47,131,190,415)
	//A helpful mouse pointer
	push();
		fill(0);
		//fill('deeppink');
		textStyle("bold")
		textSize(30);
		noStroke();

		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();


}
