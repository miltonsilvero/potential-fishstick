import { Application, Assets, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 556788,
	width: 600,
	height: 400
});

Assets.add("myFrog", "./frog.png");

Assets.load(["myFrog"]).then(()=>{
	const clampy: Sprite = Sprite.from("myFrog");

	console.log("Hola Mundo", clampy.width, clampy.height);

	clampy.anchor.set(0.5);
	
	clampy.x = app.screen.width / 2;
	clampy.y = app.screen.height / 2;
	
	app.stage.addChild(clampy);

});


