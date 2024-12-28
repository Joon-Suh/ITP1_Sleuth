/*
The case of the Python Syndicate
Stage 3


Officer: 2357155
CaseNum: 301-2-60926836-2357155

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Bones Karpinski has been declared and initialised
- Position each mugshot relative to Bones Karpinski
- Do this by modifying the x and y parameters of each image command to use the x and y properties from the Bones Karpinski object.
- You will need to combine add and subtract operators with the relevant property for each parameter.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the properties for Bones Karpinski 
- Do not add any additional commands

*/

var photoBoard;
var countess_hamilton_image;
var bones_karpinski_image;
var ada_lovelace_image;
var cecil_karpinski_image;
var rocky_kray_image;
var pawel_karpinski_image;

var bones_karpinski_object;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	countess_hamilton_image = loadImage("countessHamilton.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");
	ada_lovelace_image = loadImage("ada.png");
	cecil_karpinski_image = loadImage("karpinskiBros1.png");
	rocky_kray_image = loadImage("krayBrothers1.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	bones_karpinski_object = {
		x: 408,
		y: 40,
		image: bones_karpinski_image
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(bones_karpinski_object.image, bones_karpinski_object.x, bones_karpinski_object.y);

	image(countess_hamilton_image, bones_karpinski_object.x-293, bones_karpinski_object.y);
	image(ada_lovelace_image, bones_karpinski_object.x+293, bones_karpinski_object.y);
	image(cecil_karpinski_image, bones_karpinski_object.x-293, bones_karpinski_object.y+269);
	image(rocky_kray_image, bones_karpinski_object.x, bones_karpinski_object.y+269);
	image(pawel_karpinski_image, bones_karpinski_object.x+293, bones_karpinski_object.y+269);

}