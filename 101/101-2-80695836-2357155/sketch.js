/*

Officer: 2357155
CaseNum: 101-2-80695836-2357155

Case 101 - The Case of Anna Lovelace
Stage 3 - The Docks

You’ve followed Anna down to the docks. She sure frequents some classy places.
Okay let’s see who she’s meeting down there.

Identify Anna by drawing a Medium Purple filled rectangle around her.
She’s the woman in the red dress of course.

Identify the heavy-set man in the fishing overalls by drawing a Dark Orange filled
rectangle around him.

Identify the man in the striped top by drawing a Red filled rectangle around
him.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	noStroke();
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
	fill(147,112,219)
	rect(802,75,100,200)
	fill(255,140,0)
	rect(984,112,303,320)
	fill(255,0,0)
	rect(641,102,130,335)
	//A helpful mouse pointer
	push();
		fill(0);
		noStroke();
			//fill('deeppink');
			textStyle("bold")
			textSize(30);
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();

}
