import { Application, Assets, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 556788,
	width: 870,
	height: 400
});

window.addEventListener("resize", ()=>{
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



Assets.add("myFrog", "./frog.png");
Assets.add("Hat", "./frogHat.png");


Assets.load(["myFrog"]).then(()=>{
	const frog: Sprite = Sprite.from("myFrog");

	console.log("Hola Mundo", frog.width, frog.height);

	//clampy.anchor.set(0.5);
	
	frog.x = 50;
	frog.y = 50;
	
	frog.scale.x = 0.7;
	frog.scale.y = 0.7;

	const hat: Sprite = Sprite.from("Hat");

	app.stage.addChild(hat);
	app.stage.addChild(frog);

});


