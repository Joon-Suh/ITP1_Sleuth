/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 2357155
CaseNum: 201-3-54458731-2357155

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

HINT: You should only need around 20 vertices to draw round the judge. Make sure you close your shape!

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  beginShape()
  endShape()
  vertex()

*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape()
    vertex(609, 166)
    vertex(650, 174)
    vertex(687, 207)
    vertex(682, 223)
    vertex(730, 260)
    vertex(744, 194)
    vertex(772, 210)
    vertex(751, 285)
    vertex(692, 283)
    vertex(716, 462)
    vertex(669, 553)
    vertex(574, 564)
    vertex(560, 336)
    vertex(574, 257)
    vertex(423, 268)
    vertex(405, 220)
    vertex(607, 167)
    endShape()

    //A helpful mouse pointer
	push();
        fill(0);
        noStroke();
        text(mouseX + "," + mouseY, mouseX,mouseY);
    pop();

}
function mousePressed()
{
    navigator.clipboard.writeText(mouseX+', '+mouseY)

}
