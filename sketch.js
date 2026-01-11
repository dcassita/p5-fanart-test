let img;

function preload() {
  img = loadImage("fanart.jpg"); // nome exato do arquivo
}

function setup() {
  createCanvas(600, 800);
  imageMode(CENTER);
}

function draw() {
  background(240);

  // tamanho base controlado pelo mouse
  let largura = map(mouseX, 0, width, 200, 400);

  // mantém a proporção da imagem
  let proporcao = img.height / img.width;
  let altura = largura * proporcao;

  // movimento suave
  let x = lerp(width / 2, mouseX, 0.1);
  let y = lerp(height / 2, mouseY, 0.1);

  image(img, x, y, largura, altura);
}
