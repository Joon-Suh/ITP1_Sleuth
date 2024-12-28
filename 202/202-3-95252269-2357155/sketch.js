/*

Officer: 2357155
CaseNum: 202-3-95252269-2357155

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Purple filled text with a Navy outline in Ballpointprint font (see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(613,552);
	textSize(31);
}

function draw()
{
	background(255);

	fill(64,224,208);
	stroke(0,0,255);
	textFont(RonsFont);
	//text("all", 385.8955078125,126);
	push();
	fill(255,127,80);
	stroke(139,0,139);
	textFont(Melissa);
	//text("?", 209.9951171875,265);
	pop();
	stroke(139,0,139);
	textFont(Melissa);
	//text("I", 92.9443359375,265);
	fill(75,0,130);
	stroke(165,42,42);
	//text("I", 310.4453125,194);
	fill(238,232,170);
	stroke(34,139,34);
	//text("not", 329.2177734375,233);
	fill(220,20,60);
	stroke(154,205,50);
	textFont(Ballpointprint);
	//text("me", 202.935546875,93);
	fill(255,127,80);
	stroke(199,21,133);
	//text("so", 42.1884765625,299);
	fill(199,21,133);
	stroke(184,134,11);
	textFont(Diggity);
	//text("?", 240.79296875,162);
	fill(0,191,255);
	stroke(165,42,42);
	textFont(Ballpointprint);
	//text("how", 424.7548828125,233);
	push();
	fill(65,105,225);
	stroke(0,0,128);
	textFont(Diggity);
	//text("silence.", 443.640625,265);
	pop();
	fill(218,165,32);
	stroke(128,0,128);
	//text("our", 487.7587890625,126);
	fill(0,128,128);
	stroke(46,139,87);
	textFont(RonsFont);
	//text("shou", 410.6103515625,93);
	fill(220,20,60);
	stroke(139,0,139);
	//text("elays.", 216.2333984375,233);
	fill(0,0,205);
	stroke(220,20,60);
	textFont(Diggity);
	//text("sh.", 273.7744140625,194);
	fill(152,251,152);
	stroke(128,128,0);
	textFont(Melissa);
	//text("My", 7.3466796875,31);
	fill(0,0,128);
	stroke(255,215,0);
	textFont(Diggity);
	//text("I'm", 288.798828125,233);
	push();
	fill(238,232,170);
	stroke(178,34,34);
	textFont(Ballpointprint);
	//text("yours,", 97.119140625,361);
	pop();
	stroke(255,255,0);
	textFont(RonsFont);
	//text("d", 194.0732421875,233);
	fill(32,178,170);
	stroke(153,50,204);
	textFont(Ballpointprint);
	//text("of", 412.1513671875,162);
	push();
	fill(233,150,122);
	stroke(255,69,0);
	textFont(Melissa);
	//text("Are", 264.3828125,162);
	pop();
	fill(0,100,0);
	stroke(210,105,30);
	//text("longer", 408.7412109375,194);
	fill(127,255,0);
	stroke(0,0,205);
	textFont(Melissa);
	//text("?", 251.572265625,93);
	fill(147,112,219);
	stroke(0,255,127);
	//text("money", 454.216796875,162);
	fill(165,42,42);
	stroke(127,255,0);
	//text("can", 109.3427734375,265);
	push();
	fill(255,165,0);
	stroke(0,0,255);
	textFont(Ballpointprint);
	//text("away", 22.080078125,126);
	pop();
	fill(154,205,50);
	stroke(255,0,0);
	//text("are", 7.3466796875,299);
	fill(25,25,112);
	stroke(107,142,35);
	textFont(RonsFont);
	//text("ld", 464.3154296875,93);
	fill(124,252,0);
	stroke(124,252,0);
	//text("more", 15.8681640625,265);
	push();
	fill(0,250,154);
	stroke(107,142,35);
	//text("send", 180.150390625,194);
	pop();
	stroke(107,142,35);
	textFont(Melissa);
	//text("x", 88.1318359375,423);
	fill(30,144,255);
	stroke(255,0,255);
	//text("so,", 72.646484375,194);
	push();
	fill(139,0,139);
	stroke(139,69,19);
	textFont(Diggity);
	//text("darling", 41.630859375,31);
	pop();
	stroke(50,205,50);
	textFont(Diggity);
	//text("no", 375.2314453125,194);
	fill(255,0,0);
	stroke(218,165,32);
	textFont(Ballpointprint);
	//text("ing", 153.833984375,93);
	push();
	fill(0,128,128);
	stroke(199,21,133);
	textFont(Melissa);
	//text("sort", 285.337890625,126);
	pop();
	stroke(160,82,45);
	textFont(RonsFont);
	//text("relationship", 15.8681640625,162);
	fill(255,69,0);
	stroke(139,0,0);
	textFont(Diggity);
	//text("Forever", 7.3466796875,361);
	fill(128,0,0);
	stroke(178,34,34);
	textFont(Ballpointprint);
	//text("much", 478.599609375,233);
	fill(255,215,0);
	stroke(255,140,0);
	//text("If", 19.080078125,194);
	stroke(220,20,60);
	textFont(Diggity);
	//text("ca", 250.9599609375,194);
	fill(0,0,139);
	stroke(255,215,0);
	textFont(Ballpointprint);
	//text("sure", 364.5556640625,233);
	fill(218,112,214);
	stroke(0,100,0);
	//text("short", 347.2412109375,162);
	fill(255,127,80);
	stroke(0,0,205);
	//text("I", 106.404296875,194);
	fill(139,0,0);
	stroke(255,69,0);
	textFont(RonsFont);
	//text("Daisy", 17.080078125,423);
	fill(199,21,133);
	stroke(178,34,34);
	textFont(Ballpointprint);
	//text("?", 514.04296875,162);
	fill(178,34,34);
	stroke(154,205,50);
	textFont(RonsFont);
	//text("for", 89.0673828125,126);
	fill(255,215,0);
	stroke(255,0,0);
	textFont(Ballpointprint);
	//text("this", 330.8125,126);
	fill(210,105,30);
	stroke(0,0,255);
	textFont(Melissa);
	//text("etimes.", 220.0888671875,299);
	fill(218,165,32);
	stroke(139,0,139);
	textFont(RonsFont);
	//text("Perhaps", 268.65234375,93);
	fill(0,206,209);
	stroke(0,0,139);
	textFont(Diggity);
	//text("a", 143.4990234375,126);
	push();
	fill(0,128,128);
	stroke(128,128,0);
	textFont(Melissa);
	//text("you", 64.7451171875,93);
	pop();
	fill(0,255,255);
	stroke(255,165,0);
	textFont(RonsFont);
	//text("secrets,", 275.8974609375,265);
	fill(128,0,128);
	stroke(0,0,128);
	textFont(Ballpointprint);
	text("guard", 77.8671875,299);
	fill(147,112,219);
	stroke(0,250,154);
	textFont(Melissa);
	//text("Bob,", 114.01171875,31);
	fill(238,130,238);
	stroke(139,69,19);
	textFont(RonsFont);
	//text("ignore", 488.5322265625,194);
	fill(138,43,226);
	stroke(0,100,0);
	//text("Are", 7.3466796875,93);
	fill(178,34,34);
	stroke(124,252,0);
	textFont(Diggity);
	//text("continual", 99.8701171875,233);
	fill(0,0,255);
	stroke(0,0,205);
	textFont(Ballpointprint);
	//text("can", 326.84375,194);
	fill(123,104,238);
	stroke(255,140,0);
	textFont(Melissa);
	//text("Is", 460.5107421875,126);
	fill(100,149,237);
	stroke(255,165,0);
	textFont(Diggity);
	//text("The", 227.0751953125,265);
	fill(123,104,238);
	stroke(124,252,0);
	textFont(Melissa);
	//text("and", 249.3486328125,126);
	fill(0,128,0);
	stroke(128,0,128);
	//text("som", 184.8125,299);
	fill(128,0,128);
	stroke(0,0,128);
	textFont(Ballpointprint);
	text("take", 145.36328125,265);
	text("safe", 171.201171875,162);
	text("the", 389.3623046875,265);
	fill(255,105,180);
	stroke(46,139,87);
	textFont(Melissa);
	//text("out.", 423.3134765625,126);
	push();
	fill(220,20,60);
	stroke(25,25,112);
	textFont(Diggity);
	//text("you", 302.076171875,162);
	pop();
	fill(153,50,204);
	stroke(220,20,60);
	//text("go", 502.5810546875,93);
	push();
	fill(128,0,128);
	stroke(0,0,128);
	textFont(Ballpointprint);
	text("avoid", 99.3701171875,93);
	pop();
	fill(72,209,204);
	stroke(124,252,0);
	textFont(Diggity);
	//text("we", 367.6767578125,93);
	fill(127,255,0);
	stroke(34,139,34);
	textFont(Ballpointprint);
	//text("these", 20.080078125,233);
	push();
	fill(50,205,50);
	stroke(128,0,0);
	//text("ed", 136.17578125,299);
	pop();
	fill(218,112,214);
	stroke(0,206,209);
	textFont(Melissa);
	//text("can", 144.1298828125,194);
	fill(135,206,235);
	stroke(255,0,0);
	textFont(Ballpointprint);
	//text("You", 518.1904296875,265);
	fill(50,205,50);
	stroke(0,0,255);
	textFont(RonsFont);
	//text("break", 168.669921875,126);



}
