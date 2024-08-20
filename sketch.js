function setup() {
    createCanvas(500, 500);
    background("white")
  }
  
  function draw() {
    stroke("white");
    fill("black");
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
  }
  }