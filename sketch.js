function setup() {
    createCanvas(windowWidth, windowHeight); 
    background (150,150,150);
}

function draw() {
    strokeWeight(5);
    stroke(255); 
fill (250,230,200);
    rect(0,0,500,500);
    fill(0);
    stroke(0); 
    rect(0,250,200,245);
    rect(295,0,200,250);
    
    triangle(350,250,204,490,175,250);
    triangle(320,250,290,0,150,250);
}
