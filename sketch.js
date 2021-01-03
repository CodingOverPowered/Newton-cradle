
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;
	const Constraint=Matter.Constraint;
	var rope1,rope2,rope3,rope4,rope5;
	var bob1,bob2,bob3,bob4,bob5;
	var hanger;
	var bob1Diameter=60;
	var bob2Diameter=30;
	var bob3Diameter=0;
	var bob4Diameter=-30;
	var bob5Diameter=-60;

	function preload()  
	{
		
	}

	function setup() {
		createCanvas(1200, 600);


		engine = Engine.create();
		world = engine.world;

		//Create the Bodies Here.
	
		
		bob1=new Bob(350,430,30)
		bob2=new Bob(450,430,30)
		bob3=new Bob(510,430,30)
		bob4=new Bob(570,430,30)
		bob5=new Bob(630,430,30)
		hanger = new Hanger(500,100,350,20)
		rope1 = new Rope(bob1.body,hanger.body,-bob1Diameter*2,0)
		rope2 = new Rope(bob2.body,hanger.body,-bob2Diameter*2,0)
		rope3 = new Rope(bob3.body,hanger.body,-bob3Diameter*2,0)
		rope4 = new Rope(bob4.body,hanger.body,-bob4Diameter*2,0)
		rope5 = new Rope(bob5.body,hanger.body,-bob5Diameter*2,0)
		
		Engine.run(engine);}
	

	function draw() {
	
	rectMode(CENTER);
	background("gray");

	bob1.display()
	bob2.display()
	bob3.display()
	bob4.display()
	bob5.display()
	rope1.display()
	rope2.display()
	rope3.display()
	rope4.display()
	rope5.display()
	hanger.display()
	
     
	drawSprites();
	
	}

	function keyPressed() { 
		if (keyCode === UP_ARROW) {
			 Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45}); 
			} 
			if (keyCode === DOWN_ARROW) {
				 Matter.Body.applyForce(bob5.body,bob5.body.position,{x:55,y:45});
				 }
		 }
		
		

		function drawLine(constraint) {
			 bob1BodyPosition=constraint.bodyA.position 
			 hangerBodyPosition=constraint.bodyB.position 
			 hangerBodyOffset=constraint.pointB; 
			 hangerBodyX=roofBodyPosition.x+roofBodyOffset.x 
			 hangerBodyY=roofBodyPosition.y+roofBodyOffset.y 
			 line(bob1BodyPosition.x, bob1BodyPosition.y, hangerBodyX,hangerBodyY); }
