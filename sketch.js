  
var t;

var backImage;
function setup() {

    createCanvas(800,600);
    backImage = loadImage("png/back.png");
    background(255);
    strokeWeight(5);
    rect(0,0,800,600)
    strokeWeight(1);
    t = new Talia();
    t.rozmiesc();


}

function mousePressed() {

    t.isClicked();

}


function test() {
    t.clickedCard.redded = 1;
    t.secondClickedCard.redded = 1;


}

function test2() {
    t.clickedCard.redded = 0;
    t.secondClickedCard.redded = 0;
}

function test3() {
    t.clickedCard.redded = 0;
    t.secondClickedCard.redded = 0;
    t.clickedCard = -1;
    t.secondClickedCard = -1;
    t.highlighted = 0;
}

function indicateRed() {
    t.clickedCard.highlighted = 0;
    t.secondClickedCard.highlighted = 0;

    setTimeout(test, 50);
    setTimeout(test2, 150);
    setTimeout(test, 200);
    setTimeout(test3, 250);
}


function draw() {
    background(20,100,20);
    t.draw();


}
