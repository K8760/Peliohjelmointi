var demo = {}, centerX = 1500/2, centerY = 800/2, adam, speed = 6;
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function(){
        game.load.spritesheet('adam', 'assets/spritesSheets/adamSheet.png', 240, 400);
        game.load.image('tree', 'assets/backgrounds/tree.png');
    },
    create: function(){
		game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#DDDDDD';
        addChangesStateEventListeners();
		game.world.setBounds(0, 0, 2250, 800);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
		var tree = game.add.sprite(0, 0, 'tree');
		
		//adding character
        adam = game.add.sprite(centerX, centerY+50, 'adam');
        adam.anchor.setTo(0.5, 0.5);
		adam.scale.setTo(0.6, 0.6);
		game.physics.enable(adam);
		adam.body.collideWorldBounds = true;
		adam.animations.add('walk', [0,1,2,3,4]);
		
		//making camera to follow
		game.camera.follow(adam);
		game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0, 600, 800);
		
    },
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
			adam.scale.setTo(0.7, 0.7);
            adam.x += speed;
			adam.animations.play('walk', 14, true);
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
			adam.scale.setTo(-0.7, 0.7);
            adam.x -= speed;
			adam.animations.play('walk', 14, true);
        }
		else {
			adam.animations.play('walk', 14, true);
			adam.frame = 0;
		}
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            adam.y -= speed;
			if(adam.y < 420) {
				adam.y = 420;
			}
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            adam.y += speed;
        }
    }
};

function changeState(i, stateNum){
    console.log('state' + stateNum);
    game.state.start('state'+stateNum);
}

function addKeyCallback(key, fn, args) {
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangesStateEventListeners() {
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
    addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
    addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
    addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
    addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
}