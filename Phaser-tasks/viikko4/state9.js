var ref, hsText = [], hs = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

demo.state9 = function(){};
demo.state9.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#E8FA49';
        addChangesStateEventListeners();
        
        ref = new Firebase('https://my-project-1506410685868.firebaseio.com/');
        
        for (var i = 1; i < 11; i++) {
            game.add.text(500, 20 + (i*60), i + '. ',{fontSizw: '40px'}).anchor.setTo(1, 0);
        }
        
        for (var i = 0; i < 10; i++) {
            hsText[i] = game.add.text(500, 20 + ((i + 1) * 60), hs[i], {fontSizw: '40px'});
        }
    },
    update: function(){}
}