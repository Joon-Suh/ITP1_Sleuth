/*

Officer: 2357155
CaseNum: 202-1-94907964-2357155

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Royal Blue filled text with a Dark Green outline 
(see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(538,470);
	textFont(letterFont);
	textSize(29);
}

function draw()
{
	background(255);

	fill(220,20,60);
	stroke(255,165,0);
	//text("I", 210.8125,150);
	fill(238,232,170);
	stroke(154,205,50);
	//text("ll", 82.0625,210);
	fill(25,25,112);
	stroke(255,255,0);
	//text("of", 342.404296875,150);
	stroke(0,255,255);
	//text("the", 57.587890625,150);
	fill(139,0,139);
	stroke(0,0,255);
	//text("When", 173.013671875,239);
	fill(0,128,0);
	stroke(0,100,0);
	//text("banking", 435.0830078125,150);
	fill(144,238,144);
	stroke(139,69,19);
	//text("?", 182.162109375,118);
	fill(220,20,60);
	stroke(128,128,0);
	//text("town", 95.4287109375,210);
	fill(147,112,219);
	stroke(153,50,204);
	//text("yours,", 73.5673828125,297);
	fill(72,209,204);
	stroke(148,0,211);
	//text("at", 416.626953125,179);
	fill(255,140,0);
	stroke(124,252,0);
	//text("hold", 275.2158203125,118);
	fill(127,255,0);
	stroke(255,0,255);
	//text("again", 362.484375,239);
	fill(138,43,226);
	stroke(255,165,0);
	//text("?", 157.0361328125,239);
	fill(218,165,32);
	stroke(184,134,11);
	//text("only", 305.4033203125,150);
	fill(222,184,135);
	stroke(25,25,112);
	//text("darling", 38.9443359375,29);
	fill(233,150,122);
	stroke(50,205,50);
	//text("you", 160.8525390625,87);
	fill(0,0,139);
	stroke(139,0,0);
	//text("long", 213.4794921875,118);
	fill(152,251,152);
	stroke(165,42,42);
	//text("Forever", 6.8720703125,297);
	fill(64,224,208);
	stroke(199,21,133);
	//text("hink", 268.4599609375,150);
	fill(147,112,219);
	stroke(255,0,255);
	//text("in", 203.02734375,179);
	fill(176,224,230);
	stroke(210,105,30);
	//text("return.", 101.59375,179);
	fill(219,112,147);
	stroke(139,0,0);
	//text("longing", 99.01171875,239);
	fill(139,69,19);
	stroke(32,178,170);
	//text("kissed", 124.572265625,118);
	fill(186,85,211);
	stroke(255,0,255);
	//text("my", 363.5439453125,118);
	fill(165,42,42);
	stroke(178,34,34);
	//text("at", 32.650390625,150);
	fill(0,255,255);
	stroke(153,50,204);
	//text("will", 223.23828125,239);
	fill(0,128,0);
	//text("months", 417.775390625,87);
	fill(0,0,139);
	stroke(255,0,0);
	//text("g,", 294.1376953125,179);
	fill(218,165,32);
	stroke(139,0,139);
	//text("els", 158.5283203125,210);
	fill(205,133,63);
	stroke(0,255,127);
	//text("I", 444.158203125,118);
	fill(152,251,152);
	stroke(0,191,255);
	//text("I'm", 402.720703125,150);
	fill(0,191,255);
	stroke(255,140,0);
	//text("desolate.", 187.4091796875,210);
	fill(255,105,180);
	stroke(107,142,35);
	//text("sma", 48.859375,210);
	fill(127,255,0);
	stroke(210,105,30);
	//text("we", 255.9462890625,239);
	fill(240,128,128);
	stroke(0,0,128);
	//text("you.", 367.2265625,150);
	fill(233,150,122);
	stroke(220,20,60);
	//text("Even", 159.3857421875,179);
	fill(240,230,140);
	stroke(25,25,112);
	//text("your", 7.8720703125,179);
	fill(107,142,35);
	stroke(154,205,50);
	//text("up", 8.8720703125,150);
	fill(123,104,238);
	stroke(128,128,0);
	//text("on", 498.443359375,150);
	fill(107,142,35);
	stroke(0,100,0);
	//text("be", 286.916015625,239);
	fill(139,0,139);
	stroke(154,205,50);
	//text("the", 221.6142578125,179);
	fill(220,20,60);
	stroke(139,0,139);
	//text("How", 264.33984375,210);
	fill(0,0,255);
	stroke(255,140,0);
	//text("arms.", 393.3251953125,118);
	fill(186,85,211);
	stroke(0,0,205);
	//text("miss", 61.41796875,87);
	fill(240,128,128);
	stroke(255,255,0);
	//text("I", 46.078125,87);
	fill(123,104,238);
	stroke(139,0,139);
	//text("my", 441.564453125,179);
	fill(255,0,0);
	stroke(255,0,255);
	//text("sprin", 254.671875,179);
	fill(210,105,30);
	stroke(128,128,0);
	//text("sky,", 136.1142578125,150);
	fill(255,215,0);
	stroke(0,0,128);
	//text("to", 485.5966796875,210);
	fill(240,128,128);
	stroke(255,140,0);
	//text("How", 6.8720703125,87);
	fill(173,216,230);
	stroke(255,0,0);
	//text("have", 442.7373046875,210);
	fill(135,206,250);
	stroke(139,69,19);
	//text("out", 352.5400390625,179);
	fill(218,112,214);
	stroke(165,42,42);
	//text("do", 402.255859375,210);
	fill(139,69,19);
	stroke(128,0,128);
	//text("this", 10.8720703125,210);
	fill(65,105,225);
	stroke(0,0,205);
	//text("t", 259.84765625,150);
	stroke(0,100,0);
	text("is", 483.5439453125,87);
	fill(255,99,71);
	stroke(148,0,211);
	//text("having", 105.58203125,87);
	fill(0,128,0);
	stroke(0,255,255);
	//text("this", 61.0244140625,239);
	fill(255,255,0);
	stroke(255,0,255);
	//text("in", 344.95703125,118);
	fill(128,128,0);
	stroke(160,82,45);
	//text("to", 250.48046875,118);
	fill(218,165,32);
	stroke(199,21,133);
	//text("you", 384.2353515625,179);
	fill(240,128,128);
	stroke(34,139,34);
	//text("much", 303.5458984375,210);
	fill(144,238,144);
	stroke(255,215,0);
	//text("I", 427.3974609375,210);
	fill(65,105,225);
	stroke(0,100,0);
	text("swift", 47.9189453125,179);
	fill(0,0,139);
	stroke(25,25,112);
	//text("it", 503.9580078125,87);
	fill(65,105,225);
	stroke(0,100,0);
	text("the", 250.7763671875,87);
	text("place", 283.833984375,87);
	text("side", 471.345703125,179);
	fill(64,224,208);
	stroke(255,140,0);
	//text("x", 57.328125,355);
	fill(255,0,0);
	stroke(50,205,50);
	//text("My", 6.8720703125,29);
	fill(65,105,225);
	stroke(0,100,0);
	text("store", 9.8720703125,239);
	fill(233,150,122);
	stroke(0,191,255);
	//text("How", 331.0126953125,87);
	fill(238,130,238);
	stroke(25,25,112);
	//text("since", 8.8720703125,118);
	fill(0,139,139);
	stroke(153,50,204);
	//text("and", 177.146484375,150);
	fill(244,164,96);
	stroke(148,0,211);
	//text("we", 55.2685546875,118);
	fill(127,255,212);
	stroke(32,178,170);
	//text("night", 90.6455078125,150);
	fill(222,184,135);
	stroke(255,0,255);
	//text("?", 409.2861328125,239);
	fill(100,149,237);
	stroke(0,0,139);
	//text("Bob,", 96.2138671875,29);
	fill(255,127,80);
	stroke(124,252,0);
	//text("last", 86.23828125,118);
	fill(218,112,214);
	stroke(0,0,205);
	//text("longer", 348.9873046875,210);
	fill(165,42,42);
	stroke(107,142,35);
	//text("around", 193.244140625,87);
	fill(106,90,205);
	stroke(0,0,205);
	//text("you", 312.5654296875,118);
	//text("can", 226.15234375,150);
	fill(0,0,139);
	stroke(199,21,133);
	//text("Daisy", 6.8720703125,355);
	fill(218,165,32);
	stroke(220,20,60);
	//text("with", 315.625,179);
	fill(127,255,212);
	stroke(128,0,128);
	//text("united", 310.6943359375,239);
	stroke(0,0,139);
	//text("many", 370.21875,87);
	fill(218,165,32);
	stroke(255,165,0);
	//text("I", 198.1396484375,118);
	fill(176,224,230);
	stroke(255,0,0);
	//text("fe", 141.216796875,210);
	fill(0,128,128);
	stroke(154,205,50);
	//text("stare", 459.498046875,118);



}
