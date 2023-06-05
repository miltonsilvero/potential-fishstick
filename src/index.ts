import { Application, Assets, Container, Sprite } from 'pixi.js'

const app = new Application({ //Set background
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 556788,
	width: 870,
	height: 400
});

window.addEventListener("resize", ()=>{ //Config scale backgroung
	console.log("resized!");
	const scaleX = window.innerWidth / app.screen.width;
	const scaleY = window.innerHeight / app.screen.height;

	const scale = Math.min(scaleX, scaleY);

	const gameWidht = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);

	const marginHor = Math.floor((window.innerWidth - gameWidht)/2);
	const marginVer = Math.floor((window.innerHeight - gameHeight)/2);

	const canvas = app.view as HTMLCanvasElement;

    canvas.style.width = gameWidht + "px";
    canvas.style.height = gameHeight + "px";

    canvas.style.marginLeft = marginHor + "px";
    canvas.style.marginRight = marginHor + "px";

    canvas.style.marginTop = marginVer + "px";
    canvas.style.marginBottom = marginVer + "px";
});
window.dispatchEvent(new Event("resize"));



Assets.add("myFrog", "./frog.png");  //Add files
Assets.add("frogHat", "./frogHat2.png");


Assets.load(["myFrog"]).then(()=>{
	const frog: Sprite = Sprite.from("myFrog"); //Create Sprites
	const hat: Sprite = Sprite.from("frogHat");

	hat.position.set(0,-100);
	hat.scale.set(0.3);

	const frogWithHat: Container = new Container(); //Create Container
	
	frogWithHat.addChild(frog); //Add Sprites to Container
	frogWithHat.addChild(hat);

	frogWithHat.scale.set(0.8); //Set Container scale
	frogWithHat.x = 200; //Set Container position
	frogWithHat.y = 300; 

	console.log(hat.parent.toGlobal(hat.position)); //Know hat and frog position in display
	console.log(frog.parent.toGlobal(frog.position));

		/**const aux = hat.parent.toLocal(new Point(150,200));
		hat.position.x = aux.x;
		hat.position.y = aux.y;  
		*/  //Put a Sprite in a selected point 

	app.stage.addChild(frogWithHat); //Shows on display
});


