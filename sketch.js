const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var box1,box2,box3,box4,box5,
box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20
var stand1,stand2
var chain1
var ball
var ground1
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  ball=Bodies.circle(50,200,20)
  World.add(world,ball)
  chain1=new chain(this.ball,{x:100,y:50})

  ground1=new Ground(400,350,800,30)
  stand1=new stand(400,300,250,10)
  stand2=new stand(700,200,250,10)
  box1=new box(300,275,30,40)
  box2=new box(330,275,30,40)
  box3=new box(360,275,30,40)
  box4=new box(390,275,30,40)
  box5=new box(420,275,30,40)
  box6=new box(450,275,30,40)
  box7=new box(480,275,30,40)
  box8=new box(330,235,30,40)
  box9=new box(360,235,30,40)
  box10=new box(390,235,30,40)
  box11=new box(420,235,30,40)
  box12=new box(450,235,30,40)
  box13=new box(360,195,30,40)
  box14=new box(390,195,30,40)
  box15=new box(420,195,30,40)
  box16=new box(390,155,30,40)
  box17=new box(640,175,30,40)
  box18=new box(670,175,30,40)
  box19=new box(700,175,30,40)
  box20=new box(730,175,30,40)
  box21=new box(760,175,30,40)
  box22=new box(670,135,30,40)
  box23=new box(700,135,30,40)
  box24=new box(730,135,30,40)
  box25=new box(700,95,30,40)








}

function draw() {
  background(0,0,0);
  Engine.run(engine)
  ground1.display()  
  stand1.display()
  stand2.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  box22.display()
  box23.display()
  box24.display()
  box25.display()
 chain1.display()
ellipse(ball.position.x,ball.position.y,40,40)
  drawSprites();
}
function mouseDragged(){
  Matter.Bodies.setPosition(this.ball,{x:mouseX,y:mouseY})

}
function mouseReleased(){
  chain1.fly()
}
function keyPressed(){
  if (keyCode===32){
    chain1.attch(ball.body)
  }
}