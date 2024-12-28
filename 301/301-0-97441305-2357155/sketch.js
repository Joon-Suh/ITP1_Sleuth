/*
The case of the Python Syndicate
Stage 1

Officer: 2357155
CaseNum: 301-0-97441305-2357155

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Initialise the variables with the correct values. HINT: you should be able to derive these from the image commands below.
- Finally modify the each image command replacing the hard-coded values with your variables. 
- If you've got it right all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var cecil_karpinski_image;
var bones_karpinski_image;
var ada_lovelace_image;
var robbie_kray_image;
var rocky_kray_image;
var anna_karpinski_image;



//declare your new variables below
var rocky_kray_x_position = 408;
var rocky_kray_y_position = 309;
var cecil_karpinski_x_position = 115;
var cecil_karpinski_y_position = 40;
var bones_karpinski_x_position = 408;
var bones_karpinski_y_position = 40;
var ada_lovelace_x_position = 701;
var ada_lovelace_y_position = 40;
var robbie_kray_x_position = 115;
var robbie_kray_y_position = 309;
var anna_karpinski_x_position = 701;
var anna_karpinski_y_position = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	cecil_karpinski_image = loadImage("karpinskiBros1.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");
	ada_lovelace_image = loadImage("ada.png");
	robbie_kray_image = loadImage("krayBrothers2.png");
	rocky_kray_image = loadImage("krayBrothers1.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(rocky_kray_image, rocky_kray_x_position, rocky_kray_y_position);

	image(cecil_karpinski_image, cecil_karpinski_x_position , cecil_karpinski_y_position );
	image(bones_karpinski_image, bones_karpinski_x_position , bones_karpinski_y_position );
	image(ada_lovelace_image, ada_lovelace_x_position , ada_lovelace_y_position );
	image(robbie_kray_image, robbie_kray_x_position , robbie_kray_y_position );
	image(anna_karpinski_image, anna_karpinski_x_position , anna_karpinski_y_position );

}