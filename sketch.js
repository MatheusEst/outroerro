const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var bg,torre,torreimg,base,base2
var canhao,basecanhao, bola, solo
var anguloi
var matri = []

var matrizB = []
function preload() {
  bg = loadImage("./assets/background.gif");
  torreimg = loadImage("./assets/tower.png");
  base2 = loadImage("./assets/cannonBase.png");

}

function setup() {
  
  canvas = createCanvas(windowWidth - 20,windowHeight- 20);
  engine = Engine.create();

  world = engine.world;
    angleMode(DEGREES);
  
    var configtorre = {
    isStatic:true
  }

  anguloi = 10;
  torre = Bodies.rectangle(125,350,200,400,configtorre);
  solo = Bodies.rectangle(width/2,height + 10,width,200,configtorre);
  World.add(world,torre);
  World.add(world,solo);
  canhao = new Canhao(145,100,175,175,anguloi);
  
}

function keyPressed(){
if(keyCode == 32){
  bola = new boladecanhao(canhao.x,canhao.y,50,50);
  matri.push(bola)
  bola.atirar();
  }
}

function mostrra(bola,indic){
  if(bola){
bola.display();
  }
}
function criarB(){
  if(matrizB.length > 0){
    if(matrizB[matrizB.length - 1].barco.position.x < width/2 || matrizB[matrizB.length - 1] === undefined){
      barco = new barquinhos(width - 70,height - 180,175,175); 
  matrizB.push(barco);
  }
    for(var i = 0; i < matrizB.length; i++){
      if(matrizB[i]){
      Matter.Body.setVelocity(matrizB[i].barco,{x:-1,y:0});
      matrizB[i].display();
      }else {
        matrizB[i]
      }
    }
    
  }else{
    
    barco = new barquinhos(width - 70,height - 180,175,175); 
  matrizB.push(barco);
  }
  
}

function colis(i){
    for(var i = 0; i < matrizB.length; i++){
     // console.log(i)
        if(matri[i] !== undefined && matrizB[i] !== undefined){
          var col = Matter.SAT.collides(matri[i].bola,matrizB[i].barco);
          console.log(col)      
          
          if(col.collided){
console.log("oi")
            Matter.World.remove(world,matri[i].bola)
            matrizB[i].remove(i)
            delete matri[i]
          }
        }
    }
}

function draw(){
   Engine.update(engine);
    image(bg,0,0,width,height);
  canhao.display();
  criarB();
  
  push()
  imageMode(CENTER)
  image(torreimg,torre.position.x,torre.position.y,200,400);
 rectMode(CENTER);
  rect(solo.position.x,solo.position.y,999,10);
  pop()
  for(var  i = 0; i < matri.length; i++){
    mostrra(matri[i],i);  
    colis(i);
  }

}
