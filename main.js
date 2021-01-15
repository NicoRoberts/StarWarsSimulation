var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./Images/Tiles.png");
ASSET_MANAGER.queueDownload("./Images/luke.png");
ASSET_MANAGER.queueDownload("./Images/vader.png");


ASSET_MANAGER.downloadAll(function () {
	PARAMS.BLOCKHEIGHT = PARAMS.BITHEIGHT * PARAMS.SCALE;
	PARAMS.BLOCKWIDTH = PARAMS.BITWIDTH * PARAMS.SCALE;

	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	PARAMS.CANVAS_WIDTH = canvas.width;

	
	gameEngine.init(ctx);

	gameEngine.addEntity(new SceneManager(gameEngine)); //TRACE STARTS HERE

	gameEngine.start();
});
