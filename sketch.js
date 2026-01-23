let img;

function preload() {
  img = loadImage("fanart.jpg"); // exact filename
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(240);

  var minDim = min(width, height);
  var minW = minDim * 0.4;
  var maxW = minDim * 0.8;

  // base size controlled by mouse, scaled to the iframe viewport
  var largura = map(mouseX, 0, width, minW, maxW);
  largura = constrain(largura, minDim * 0.3, minDim * 0.9);

  // keep image ratio
  var proporcao = img.height / img.width;
  var altura = largura * proporcao;

  // smooth movement
  var x = lerp(width / 2, mouseX, 0.1);
  var y = lerp(height / 2, mouseY, 0.1);

  image(img, x, y, largura, altura);
}
