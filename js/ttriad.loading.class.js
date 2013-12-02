
ttriad = (typeof ttriad === "undefined") ? {} : ttriad;

/* MANIFEST */

// TODO: prepare manifest to be changed depending on the LANGUAGE
sPath = ttriad.config.loader.soundPath;
spPath = ttriad.config.loader.spritesPath;
iPath = ttriad.config.loader.imgPatch;
ttriadManifest = [
    //sprites
    {id: "btn_error_03", src: iPath + "cards/spriteCards.png"},
    // background
    {id: "mainBg", src: iPath + "mainBg.png"},
    {id: "gameBg", src: iPath + "gameBg.png"}
    /* SOUND MANIFEST */
    //{id: "twitchKP",        src: sPath + "twitchKP.wav"}
];

/* LOADER */

ttriad.loader = {
    containerObj: undefined,
    images: {},
    bar: {
        height: 10,
        width: 100,
        color: undefined,
        item: undefined
    },
    label: {
        item: undefined,
        font: "12px Arial",
        color: "black",
        defaultText: "Loading...",
        lineWidth: 100,
        align: "center"
    },
    frame: {
        padding: 3,
        item: undefined
    },
    items: {},
    init: function() {
        var stage = window.stage
        // text label
        var loadProgressLabel = new createjs.Text(this.label.defaultText,this.label.font,this.label.color);
        loadProgressLabel.lineWidth = this.label.lineWidth;
        loadProgressLabel.textAlign = this.label.align;
        loadProgressLabel.x = canvas.width/2;
        loadProgressLabel.y = canvas.height/2 - 30;
        this.label.item = loadProgressLabel;
        stage.addChild(this.label.item);

        // loading bar
        this.bar.color = createjs.Graphics.getRGB(0,0,0);
        var loadingBar = new createjs.Shape();
        loadingBar.graphics.beginFill(this.bar.color).drawRect(0, 0, 1, this.bar.height).endFill();
        this.bar.item = loadingBar;

        // frame around the draw
        var frame = new createjs.Shape();
        frame.graphics.setStrokeStyle(1).beginStroke(this.bar.color).drawRect(-this.frame.padding/2, -this.frame.padding/2, this.bar.width + this.frame.padding, this.bar.height + this.frame.padding);
        this.frame.item = frame;

        // add everything to the container
        var containerObj = new createjs.Container();
        containerObj.addChild(this.bar.item, this.frame.item);
        containerObj.x = Math.round(canvas.width/2 - this.bar.width/2);
        containerObj.y = Math.round(canvas.height/2 - this.bar.height/2);
        this.containerObj = containerObj;

        // add the container to the Stage
        stage.addChild(this.containerObj);
        stage.update();
    },
    handleProgress: function() {
        var stage = window.stage;

        var el = ttriad.loader;
        el.bar.item.scaleX = preload.progress * el.bar.width;

        var progresPrecentage = Math.round(preload.progress*100);
        el.label.item.text = progresPrecentage + "% cargado" ;

        stage.update();
    },
    handleComplete: function() {
        var stage = window.stage;

        var el = ttriad.loader;
        el.label.item.text = "Listo para jugar!";
        stage.update();

        //ttriad.splashScreen()

        /////
        stage.removeChild(ttriad.loader.label.item, ttriad.loader.containerObj);
        // splash screen
        var bgSplashScr = new createjs.Bitmap(preload.getResult('mainBg', true));
        bgSplashScr.scaleX = 2.67;
        bgSplashScr.scaleY = 3.43;
        stage.addChild(bgSplashScr);
        //var animSplashScr = SplashScreen.init().startAnimation();

        // set ticker
        createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener("tick", stage);

        // click to start game
        stage.on("click", function() {
            // remove splash screen
            //stage.removeChild(bgSplashScr);
            // start triple triad
            //_start();
        })
        /////
    },
    getElement: function(id) {
        return preload.getResult(id);
    },
    getImage: function(id) {
        /*
         if (!this.items[id]) {
         this.items[id] = new createjs.Bitmap(this.getElement(id))
         }
         return this.items[id]
         */
        return new createjs.Bitmap(this.getElement(id));
    }
};