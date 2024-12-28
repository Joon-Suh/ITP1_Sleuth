/*

Officer: 2357155
CaseNum: 202-0-23435878-2357155

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Sienna text (see https://www.w3.org/TR/css3-iccprof#numerical). 
Only comment out text commands - leave fill & stroke commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Ballpointprint.ttf');
}

function setup()
{
	createCanvas(629,755);
	textFont(letterFont);
	textSize(36);
}

function draw()
{
	background(255);
	fill(124,252,0);
	//text("moment", 237.7646484375,269);
	fill(0,128,128);
	//text("your", 515.13671875,269);
	fill(255,140,0);
	//text("hear", 500.763671875,146);
	fill(0,250,154);
	//text("are", 223.4501953125,227);
	fill(255,0,0);
	//text("quiet", 305.1083984375,146);
	fill(160,82,45);
	text("April", 526.0595703125,227);
	text("second", 20.8359375,345);
	fill(154,205,50);
	// text("last", 235.3525390625,386);
	fill(218,112,214);
	// text("a", 121.4423828125,146);
	fill(250,128,114);
	// text("person", 324.22265625,464);
	// text("few", 484.2685546875,305);
	fill(100,149,237);
	// text("I", 507.1533203125,426);
	fill(240,230,140);
	// text("when", 507.66015625,108);
	fill(139,0,139);
	// text("k", 161.52734375,577);
	// text("face,", 111.5,305);
	fill(0,0,255);
	// text("lone", 134.40234375,146);
	fill(255,127,80);
	// text("and", 98.45703125,577);
	fill(222,184,135);
	// text("the", 23.8359375,227);
	fill(220,20,60);
	// text("I", 26.8359375,146);
	// text("blessed", 307.1064453125,185);
	fill(0,0,139);
	// text("lovely", 74.87890625,36);
	fill(128,0,0);
	// text("in", 485.3447265625,227);
	fill(178,34,34);
	// text("Love", 19.8359375,577);
	fill(0,0,139);
	// text("May", 19.8359375,108);
	// text("the", 242.07421875,146);
	fill(160,82,45);
	text("make", 133.955078125,108);
	text("It", 415.25,108);
	fill(184,134,11);
	// text("sun", 337.4599609375,227);
	fill(153,50,204);
	// text("only", 477.734375,386);
	fill(240,128,128);
	// text("harp.", 86.8701171875,227);
	fill(25,25,112);
	// text("darling,", 214.6259765625,426);
	fill(0,0,128);
	// text("my", 339.8935546875,345);
	fill(0,191,255);
	// text("co", 230.79296875,108);
	// text("a", 197.9970703125,108);
	fill(152,251,152);
	// text("I", 410.8466796875,269);
	fill(0,128,0);
	// text("I", 377.728515625,386);
	// text("your", 28.8359375,185);
	fill(255,69,0);
	// text("e", 417.9111328125,426);
	fill(147,112,219);
	// text("een", 348.5048828125,426);
	// text("in", 201.359375,146);
	// text("is", 468.2412109375,108);
	fill(218,112,214);
	// text("isses,", 175.962890625,577);
	// text("our", 184.4501953125,386);
	fill(0,128,128);
	// text("nfession", 252.53515625,108);
	fill(220,20,60);
	// text("Daisy,", 163.54296875,36);
	fill(107,142,35);
	// text("that", 133.294921875,345);
	fill(255,105,180);
	// text("can", 421.5400390625,386);
	fill(50,205,50);
	// text("From", 20.8359375,269);
	// text("true", 454.4423828125,345);
	// text("that", 496.080078125,464);
	fill(255,69,0);
	// text("those", 399.6357421875,305);
	fill(127,255,212);
	// text("I", 197.681640625,305);
	// text("alive", 417.38671875,464);
	// text("the", 98.3408203125,269);
	fill(255,0,255);
	// text("love.", 522.552734375,345);
	fill(165,42,42);
	// text("you", 199.8212890625,345);
	fill(250,128,114);
	// text("am", 70.6474609375,146);
	// text("day", 419.2138671875,227);
	fill(30,144,255);
	// text("the", 244.072265625,185);
	fill(128,128,0);
	// text("x", 89.8544921875,649);
	fill(210,105,30);
	// text("first", 161.375,269);
	fill(139,0,0);
	// text("You", 161.6396484375,227);
	fill(255,105,180);
	// text("the", 151.7529296875,464);
	fill(238,130,238);
	// text("be", 95.8818359375,464);
	fill(32,178,170);
	// text("chosen.", 138.869140625,505);
	fill(0,206,209);
	// text("of", 506.7548828125,185);
	fill(139,0,0);
	// text("s", 102.4794921875,345);
	fill(255,127,80);
	// text("Bob", 19.8359375,649);
	fill(176,224,230);
	// text("my", 284.2890625,227);
	fill(106,90,205);
	// text("I", 562.6064453125,464);
	// text("that", 390.42578125,146);
	fill(138,43,226);
	// text("like", 176.970703125,185);
	fill(128,0,128);
	// text("yes.", 436.55859375,426);
	fill(173,216,230);
	// text("of", 99.537109375,426);
	// text("date,", 293.88671875,386);
	fill(0,255,255);
	// text("Ever", 20.8359375,386);
	// text("think", 19.8359375,426);
	fill(135,206,250);
	// text("from", 323.390625,305);
	// text("gr", 322.8017578125,426);
	fill(0,255,127);
	// text("I", 90.1435546875,108);
	// text("am", 21.8359375,505);
	fill(0,206,209);
	// text("Oh", 19.8359375,36);
	fill(0,139,139);
	// text("must", 26.8359375,464);
	fill(240,128,128);
	// text("ny", 371.7666015625,227);
	fill(184,134,11);
	// text("that", 344.3203125,269);
	fill(0,255,255);
	// text("were", 256.6640625,345);
	fill(72,209,204);
	// text("your", 148.3876953125,426);
	fill(75,0,130);
	// text("I", 456.9521484375,146);
	fill(219,112,147);
	// text("your", 72.630859375,505);
	fill(75,0,130);
	// text("saw", 454.658203125,269);
	fill(135,206,250);
	// text("one", 393.064453125,345);
	fill(127,255,212);
	// text("?", 375.146484375,108);
	// text("luckiest", 214.787109375,464);
	fill(106,90,205);
	// text("since", 102.9853515625,386);
	// text("knew", 241.4931640625,305);
	fill(233,150,122);
	// text("lovely", 22.8359375,305);
	// text("voice", 95.07421875,185);
	fill(255,99,71);
	// text("music", 427.162109375,185);



}
