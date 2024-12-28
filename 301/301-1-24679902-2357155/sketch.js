/*
The case of the Python Syndicate
Stage 2


Officer: 2357155
CaseNum: 301-1-24679902-2357155

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Pawel Karpinski

- The variables for Pawel Karpinski have been declared and initialised.
- This time you are NOT allowed to create any new variables.
- Instead you must position each mug shot relative to Pawel Karpinski
- To do this you will need to control the positions of the mugshots by adding/subtracting hard-coded values to the appropriate Pawel Karpinski variable for each parameter.
- If you've got it right all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the variables for Pawel Karpinski 
- Do not add any additional commands

*/

var photoBoard;
var bonesKarpinskiImg;
var robbieKrayImg;
var annaKarpinskiImg;
var pawelKarpinskiImg;
var rockyKrayImg;
var countessHamiltonImg;


var pawelKarpinskiCoordinateX = 115;
var pawelKarpinskiCoordinateY = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	robbieKrayImg = loadImage("krayBrothers2.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	rockyKrayImg = loadImage("krayBrothers1.png");
	countessHamiltonImg = loadImage("countessHamilton.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(pawelKarpinskiImg, pawelKarpinskiCoordinateX, pawelKarpinskiCoordinateY);

	image(bonesKarpinskiImg, pawelKarpinskiCoordinateX, pawelKarpinskiCoordinateY-269);
	image(robbieKrayImg, pawelKarpinskiCoordinateX+293, pawelKarpinskiCoordinateY-269);
	image(annaKarpinskiImg, pawelKarpinskiCoordinateX+586, pawelKarpinskiCoordinateY-269);
	image(rockyKrayImg, pawelKarpinskiCoordinateX+293, pawelKarpinskiCoordinateY);
	image(countessHamiltonImg, pawelKarpinskiCoordinateX+586, pawelKarpinskiCoordinateY);

}