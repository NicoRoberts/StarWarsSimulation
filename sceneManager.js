class SceneManager {
    constructor(game) {
        this.game = game;
        

        this.loadLevelOne();
    };

   

    clearEntities() {
        this.game.entities = [];
    };

    loadLevelOne() {
        this.x = 0;

        
        let ground = new Ground(this.game, 0, 600, 1024); 
        this.game.addEntity(ground);

        let luke = new Luke(this.game, 450, 540);
        this.game.addEntity(luke);

        let vader = new Vader(this.game, 480, 509);
        this.game.addEntity(vader);

    };

    update() {
       
    };

    draw(ctx) {
       
    };
};

