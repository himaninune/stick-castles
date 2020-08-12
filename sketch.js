const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ob1, ob2, ob3, ob4, ob5;
var myGround;

function setup() {
  var canvas = createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;
  

  boxa1 = new rectangle(737, 298, 70, 70);
  boxa2 = new rectangle(812, 298, 70, 70);
  box3 = new rectangle(882, 298, 70, 70);
  box4 = new rectangle(952, 298, 70, 70);
  box5 = new rectangle(1022, 298, 70, 70);

  box6 = new rectangle(777, 240, 70, 70);
  box7 = new rectangle(847, 240, 70, 70);
  box8 = new rectangle(917, 240, 70, 70);
  box9 = new rectangle(987, 240, 70, 70);

  box10 = new rectangle(812, 170, 70, 70);
  box11 = new rectangle(882, 170, 70, 70);
  box12 = new rectangle(952, 170, 70, 70)

  box13 = new rectangle(847, 100, 70, 70);
  box14 = new rectangle(917, 100, 70, 70);

  box15 = new rectangle(882, 30, 70, 70);
  myGround = new platform(600, 390, 1200, 20);

}


function draw() {
  background(0);
  Engine.update(engine);
  myGround.display();



  boxa1.display();
    boxa2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();



}