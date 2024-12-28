/*
The case of the Python Syndicate
Stage 4

Officer: 2357155
CaseNum: 301-3-44727491-2357155

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

- Organise each syndicate member into a new object. 
    - I’ve done one for you as an example.
    - Be sure to replicate the naming conventions for your own objects.
- Modify the image commands to make them use the new objects you created.
- Once you have done this you can delete the old variables.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var cecil_karpinski_img;
var pawel_karpinski_img;
var ada_lovelace_img;
var anna_karpinski_img;
var bones_karpinski_img;
var rocky_kray_img;

var bones_karpinski_obj;
var cecil_karpinski_obj;
var pawel_karpinski_obj;
var ada_lovelace_obj;
var anna_karpinski_obj;
var rocky_kray_obj;


//declare your new objects below


var cecil_karpinski_location_x = 115;
var cecil_karpinski_location_y = 40;
var pawel_karpinski_location_x = 408;
var pawel_karpinski_location_y = 40;
var ada_lovelace_location_x = 701;
var ada_lovelace_location_y = 40;
var anna_karpinski_location_x = 115;
var anna_karpinski_location_y = 309;
var rocky_kray_location_x = 701;
var rocky_kray_location_y = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	cecil_karpinski_img = loadImage("karpinskiBros1.png");
	pawel_karpinski_img = loadImage("karpinskiBros2.png");
	ada_lovelace_img = loadImage("ada.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	bones_karpinski_img = loadImage("karpinskiDog.png");
	rocky_kray_img = loadImage("krayBrothers1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	bones_karpinski_obj = {
		x: 408,
		y: 309,
		image: bones_karpinski_img
	};
	cecil_karpinski_obj = {
		x: 115,
		y: 40,
		image: cecil_karpinski_img
	};
	pawel_karpinski_obj = {
		x: 408,
		y: 40,
		image: pawel_karpinski_img
	};
	ada_lovelace_obj = {
		x: 701,
		y: 40,
		image: ada_lovelace_img
	};
	anna_karpinski_obj = {
		x: 115,
		y: 309,
		image: anna_karpinski_img
	};
	rocky_kray_obj = {
		x: 701,
		y: 309,
		image: rocky_kray_img
	};



	//define your new objects below
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(cecil_karpinski_obj.image, cecil_karpinski_obj.x, cecil_karpinski_obj.y);
	image(pawel_karpinski_obj.image, pawel_karpinski_obj.x, pawel_karpinski_obj.y);
	image(ada_lovelace_obj.image, ada_lovelace_obj.x, ada_lovelace_obj.y);
	image(anna_karpinski_obj.image, anna_karpinski_obj.x, anna_karpinski_obj.y);
	image(bones_karpinski_obj.image, bones_karpinski_obj.x, bones_karpinski_obj.y);
	image(rocky_kray_obj.image, rocky_kray_obj.x, rocky_kray_obj.y);


}