class Vader {
    constructor(game, x, y, spritesheet) {
        Object.assign(this, { game, x, y });

        this.game.luke = this;

        // spritesheet
        this.spritesheet = ASSET_MANAGER.getAsset("./Images/vader.png");


        this.animation = new Animator(this.spritesheet,243, 186, 53, 91, 5, 0.12, 11, false, true);
        
        //this.loadAnimations(this.spritesheet);
    }

    update() {
       
    };
    

    draw(ctx) {
        
       
        this.animation.drawFrame(this.game.clockTick, ctx, 480, 509, 1);
        
        
    };

}