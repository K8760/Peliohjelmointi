demo.state6 = function(){};
demo.state6.prototype = {
    preload: function(){
        game.load.image('volcano', 'assets/sprites/volcano.png');
        game.load.image('redBall', 'assets/sprites/redball.png');
        game.load.image('orBall', 'assets/sprites/orball.png');
    },
    create: function(){
        game.stage.backgroundColor = '#6157F2';
        addChangesStateEventListeners();
        
        var volcano = game.add.sprite(centerX, 800, 'volcano');
        volcano.scale.setTo(3);
        volcano.anchor.setTo(0.5, 1);
        
        var emitter = game.add.emitter(centerX, 270, 2000);
        emitter.makeParticles(['redBall', 'orBall'], 0, 5000, false, true);
        emitter.maxParticleSpeed.set(300, -300);
        emitter.minParticleSpeed.set(-300, -100);
        emitter.gravity = 300;
        
        game.time.events.add(2000, function() {
            emitter.start(false, 5000, 20);
            game.time.events.loop(500, function(){
                if (emitter.on) {
                    emitter.on = false;
                }
                else {
                    emitter.on = true;
                }
            })
        });
    },
    update: function(){}
}