let img1, img2; img3; 

function preload() {
  // 预加载两张图片
  img1 = loadImage('images/img1.png');
  img2 = loadImage('images/img2.png');
  img3 = loadImage('images/img3.png');
}

function setup() {
  createCanvas(600, 600); 
  background(0,120,150,80); 
}

function draw() {
  let chosenImg = random([img1, img2, img3]);

  let x = random(width); 
  let y = random(height); 
  let imgWidth = random(50, 50); 
  let imgHeight = random(50, 50); 

  image(chosenImg, x, y, imgWidth, imgHeight);
}






