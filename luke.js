class Luke {
    constructor(game, x, y, spritesheet) {
        Object.assign(this, { game, x, y });

        this.game.luke = this;

        // spritesheet
        this.spritesheet = ASSET_MANAGER.getAsset("./Images/luke.png");


        this.animation = new Animator(this.spritesheet,270, 84, 35, 60, 3, 0.12, 5, false, true);
        
        //this.loadAnimations(this.spritesheet);
    }

    update() {
       
    };
    

    draw(ctx) {
        
       
        this.animation.drawFrame(this.game.clockTick, ctx, 450, 540, 1);
        
        
    };

}