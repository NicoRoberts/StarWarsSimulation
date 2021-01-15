class Ground {
    constructor(game, x, y, w) {
        Object.assign(this, { game, x, y, w });

        this.spritesheet = ASSET_MANAGER.getAsset("./Images/Tiles.png");

        this.tile = new Box(this.x, this.y, this.w, PARAMS.BLOCKHEIGHT * 2);
        this.leftTile = new Box(this.x, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKHEIGHT * 2)
        this.rightTile = new Box(this.x + this.w - PARAMS.BLOCKWIDTH, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKHEIGHT * 2)

        //Tile is 2px - 30x width.
        //        6px -  28px height 
    
    };

    update() {
    };


    draw(ctx) {
        let tileCount = this.w / PARAMS.BLOCKWIDTH;
        for (var i = 0; i < tileCount; i++) {
            ctx.drawImage(this.spritesheet,2,6,28,22, this.x + i * PARAMS.BLOCKWIDTH, this.y, PARAMS.BLOCKWIDTH, PARAMS.BLOCKHEIGHT);
            ctx.drawImage(this.spritesheet,2,6,28,22, this.x + i * PARAMS.BLOCKWIDTH, this.y + PARAMS.BLOCKHEIGHT, PARAMS.BLOCKWIDTH, PARAMS.BLOCKHEIGHT);
        }
        /* if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x - this.game.camera.x, this.BB.y, this.BB.width, this.BB.height);
        } */
    };
};