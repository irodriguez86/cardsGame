/**
 * Created with JetBrains PhpStorm.
 * User: Socket
 * Date: 9/12/13
 * Time: 21:53
 * To change this template use File | Settings | File Templates.
 */
var Menu = function (stage) {

    this._init = function(){
        this.container = new createjs.Container();
        this.menuElements = [];

        //create menu elements
        var gameIcon = new createjs.Bitmap(preload.getResult('menuPad', true));
        gameIcon.set({x:120, y:300});
        gameIcon.addEventListener("mouseover", function(){
            createjs.Tween.get(gameIcon).to({scaleX:1.5, scaleY:1.5}, 100);
        });
        gameIcon.addEventListener("mouseout", function(){
            createjs.Tween.get(gameIcon).to({scaleX:1, scaleY:1}, 100);
        });
        this.container.addChild(gameIcon);
        stage.addChild(this.container);

    };

    this._init();
    return this;
};