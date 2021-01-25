const E=Matter.Engine
const W=Matter.World
const B=Matter.Bodies
const Body=Matter.Body

var himg,pimg,package,ground,helicopter;
var redBox1,reBox2,redBox3;

function preload (){

	himg= loadImage("helicopter.png");
	pimg= loadImage("package.png")
}

function setup (){

	createCanvas(800,600);
	rectMode(CENTER);

	package=createSprite(400,80,5,5);
	package.addImage(pimg);
	package.scale=0.3;

	helicopter=createSprite(400,150,5,5);
	helicopter.addImage(himg);
	helicopter.scale=0.7;

	ground=createSprite(400,595,800,10);
	ground.shapeColor="green";

	engine=E.create();
	world=engine.world;

	ground=B.rectangle(400,580,800,10,{isStatic:true})
	W.add(world,ground);

	packageBody=B.circle(400,80,5,{restitution:0.3,isStatic:true});
	W.add(world,packageBody);

	redBox1=createSprite(400,580,200,20);
	redBox1.shapeColor="red";

	redBox2=createSprite(310,520,20,100);
	redBox2.shapeColor="red";

	redBox2=createSprite(490,520,20,100);
	redBox2.shapeColor="red";

	redBox1=B.rectangle(400,580,200,20,{restitution:0.3,isStatic:true})
	W.add(world,redBox1);

}
function draw(){

	background(0);

	E.update(engine);

	package.x=packageBody.position.x
	package.y=packageBody.position.y
	drawSprites();

}

function keyPressed() {

	if(keyCode===DOWN_ARROW){
		Matter.Body.setStatic(packageBody,false);
	}
}
