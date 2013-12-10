
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
    {id: "gameBg", src: iPath + "gameBg.png"},
    //menu icons
    {id: "menuPad", src: iPath + "menuPad.png"},
    //red cards
    {id: "1red", src: iPath + "cards/red/1.gif"},
    {id: "2red", src: iPath + "cards/red/2.gif"},
    {id: "3red", src: iPath + "cards/red/3.gif"},
    {id: "4red", src: iPath + "cards/red/4.gif"},
    {id: "5red", src: iPath + "cards/red/5.gif"},
    {id: "6red", src: iPath + "cards/red/6.gif"},
    {id: "7red", src: iPath + "cards/red/7.gif"},
    {id: "8red", src: iPath + "cards/red/8.gif"},
    {id: "9red", src: iPath + "cards/red/9.gif"},
    {id: "10red", src: iPath + "cards/red/10.gif"},
    {id: "11red", src: iPath + "cards/red/11.gif"},
    {id: "12red", src: iPath + "cards/red/12.gif"},
    {id: "13red", src: iPath + "cards/red/13.gif"},
    {id: "14red", src: iPath + "cards/red/14.gif"},
    {id: "15red", src: iPath + "cards/red/15.gif"},
    {id: "16red", src: iPath + "cards/red/16.gif"},
    {id: "17red", src: iPath + "cards/red/17.gif"},
    {id: "18red", src: iPath + "cards/red/18.gif"},
    {id: "19red", src: iPath + "cards/red/19.gif"},
    {id: "20red", src: iPath + "cards/red/20.gif"},
    {id: "21red", src: iPath + "cards/red/21.gif"},
    {id: "22red", src: iPath + "cards/red/22.gif"},
    {id: "23red", src: iPath + "cards/red/23.gif"},
    {id: "24red", src: iPath + "cards/red/24.gif"},
    {id: "25red", src: iPath + "cards/red/25.gif"},
    {id: "26red", src: iPath + "cards/red/26.gif"},
    {id: "27red", src: iPath + "cards/red/27.gif"},
    {id: "28red", src: iPath + "cards/red/28.gif"},
    {id: "29red", src: iPath + "cards/red/29.gif"},
    {id: "30red", src: iPath + "cards/red/30.gif"},
    {id: "31red", src: iPath + "cards/red/31.gif"},
    {id: "32red", src: iPath + "cards/red/32.gif"},
    {id: "33red", src: iPath + "cards/red/33.gif"},
    {id: "34red", src: iPath + "cards/red/34.gif"},
    {id: "35red", src: iPath + "cards/red/35.gif"},
    {id: "36red", src: iPath + "cards/red/36.gif"},
    {id: "37red", src: iPath + "cards/red/37.gif"},
    {id: "38red", src: iPath + "cards/red/38.gif"},
    {id: "39red", src: iPath + "cards/red/39.gif"},
    {id: "40red", src: iPath + "cards/red/40.gif"},
    {id: "41red", src: iPath + "cards/red/41.gif"},
    {id: "42red", src: iPath + "cards/red/42.gif"},
    {id: "43red", src: iPath + "cards/red/43.gif"},
    {id: "44red", src: iPath + "cards/red/44.gif"},
    {id: "45red", src: iPath + "cards/red/45.gif"},
    {id: "46red", src: iPath + "cards/red/46.gif"},
    {id: "47red", src: iPath + "cards/red/47.gif"},
    {id: "48red", src: iPath + "cards/red/48.gif"},
    {id: "49red", src: iPath + "cards/red/49.gif"},
    {id: "50red", src: iPath + "cards/red/50.gif"},
    {id: "51red", src: iPath + "cards/red/51.gif"},
    {id: "52red", src: iPath + "cards/red/52.gif"},
    {id: "53red", src: iPath + "cards/red/53.gif"},
    {id: "54red", src: iPath + "cards/red/54.gif"},
    {id: "55red", src: iPath + "cards/red/55.gif"},
    {id: "56red", src: iPath + "cards/red/56.gif"},
    {id: "57red", src: iPath + "cards/red/57.gif"},
    {id: "58red", src: iPath + "cards/red/58.gif"},
    {id: "59red", src: iPath + "cards/red/59.gif"},
    {id: "60red", src: iPath + "cards/red/60.gif"},
    {id: "61red", src: iPath + "cards/red/61.gif"},
    {id: "62red", src: iPath + "cards/red/62.gif"},
    {id: "63red", src: iPath + "cards/red/63.gif"},
    {id: "64red", src: iPath + "cards/red/64.gif"},
    {id: "65red", src: iPath + "cards/red/65.gif"},
    {id: "66red", src: iPath + "cards/red/66.gif"},
    {id: "67red", src: iPath + "cards/red/67.gif"},
    {id: "68red", src: iPath + "cards/red/68.gif"},
    {id: "69red", src: iPath + "cards/red/69.gif"},
    {id: "70red", src: iPath + "cards/red/70.gif"},
    {id: "71red", src: iPath + "cards/red/71.gif"},
    {id: "72red", src: iPath + "cards/red/72.gif"},
    {id: "73red", src: iPath + "cards/red/73.gif"},
    {id: "74red", src: iPath + "cards/red/74.gif"},
    {id: "75red", src: iPath + "cards/red/75.gif"},
    {id: "76red", src: iPath + "cards/red/76.gif"},
    {id: "77red", src: iPath + "cards/red/77.gif"},
    {id: "78red", src: iPath + "cards/red/78.gif"},
    {id: "79red", src: iPath + "cards/red/79.gif"},
    {id: "80red", src: iPath + "cards/red/80.gif"},
    {id: "81red", src: iPath + "cards/red/81.gif"},
    {id: "82red", src: iPath + "cards/red/82.gif"},
    {id: "83red", src: iPath + "cards/red/83.gif"},
    {id: "84red", src: iPath + "cards/red/84.gif"},
    {id: "85red", src: iPath + "cards/red/85.gif"},
    {id: "86red", src: iPath + "cards/red/86.gif"},
    {id: "87red", src: iPath + "cards/red/87.gif"},
    {id: "88red", src: iPath + "cards/red/88.gif"},
    {id: "89red", src: iPath + "cards/red/89.gif"},
    {id: "90red", src: iPath + "cards/red/90.gif"},
    {id: "91red", src: iPath + "cards/red/91.gif"},
    {id: "92red", src: iPath + "cards/red/92.gif"},
    {id: "93red", src: iPath + "cards/red/93.gif"},
    {id: "94red", src: iPath + "cards/red/94.gif"},
    {id: "95red", src: iPath + "cards/red/95.gif"},
    {id: "96red", src: iPath + "cards/red/96.gif"},
    {id: "97red", src: iPath + "cards/red/97.gif"},
    {id: "98red", src: iPath + "cards/red/98.gif"},
    {id: "99red", src: iPath + "cards/red/99.gif"},
    {id: "100red", src: iPath + "cards/red/100.gif"},
    {id: "101red", src: iPath + "cards/red/101.gif"},
    {id: "102red", src: iPath + "cards/red/102.gif"},
    {id: "103red", src: iPath + "cards/red/103.gif"},
    {id: "104red", src: iPath + "cards/red/104.gif"},
    {id: "105red", src: iPath + "cards/red/105.gif"},
    {id: "106red", src: iPath + "cards/red/106.gif"},
    {id: "107red", src: iPath + "cards/red/107.gif"},
    {id: "108red", src: iPath + "cards/red/108.gif"},
    {id: "109red", src: iPath + "cards/red/109.gif"},
    {id: "110red", src: iPath + "cards/red/110.gif"},
    //blue cards
    {id: "1blue", src: iPath + "cards/blue/1.gif"},
    {id: "2blue", src: iPath + "cards/blue/2.gif"},
    {id: "3blue", src: iPath + "cards/blue/3.gif"},
    {id: "4blue", src: iPath + "cards/blue/4.gif"},
    {id: "5blue", src: iPath + "cards/blue/5.gif"},
    {id: "6blue", src: iPath + "cards/blue/6.gif"},
    {id: "7blue", src: iPath + "cards/blue/7.gif"},
    {id: "8blue", src: iPath + "cards/blue/8.gif"},
    {id: "9blue", src: iPath + "cards/blue/9.gif"},
    {id: "10blue", src: iPath + "cards/blue/10.gif"},
    {id: "11blue", src: iPath + "cards/blue/11.gif"},
    {id: "12blue", src: iPath + "cards/blue/12.gif"},
    {id: "13blue", src: iPath + "cards/blue/13.gif"},
    {id: "14blue", src: iPath + "cards/blue/14.gif"},
    {id: "15blue", src: iPath + "cards/blue/15.gif"},
    {id: "16blue", src: iPath + "cards/blue/16.gif"},
    {id: "17blue", src: iPath + "cards/blue/17.gif"},
    {id: "18blue", src: iPath + "cards/blue/18.gif"},
    {id: "19blue", src: iPath + "cards/blue/19.gif"},
    {id: "20blue", src: iPath + "cards/blue/20.gif"},
    {id: "21blue", src: iPath + "cards/blue/21.gif"},
    {id: "22blue", src: iPath + "cards/blue/22.gif"},
    {id: "23blue", src: iPath + "cards/blue/23.gif"},
    {id: "24blue", src: iPath + "cards/blue/24.gif"},
    {id: "25blue", src: iPath + "cards/blue/25.gif"},
    {id: "26blue", src: iPath + "cards/blue/26.gif"},
    {id: "27blue", src: iPath + "cards/blue/27.gif"},
    {id: "28blue", src: iPath + "cards/blue/28.gif"},
    {id: "29blue", src: iPath + "cards/blue/29.gif"},
    {id: "30blue", src: iPath + "cards/blue/30.gif"},
    {id: "31blue", src: iPath + "cards/blue/31.gif"},
    {id: "32blue", src: iPath + "cards/blue/32.gif"},
    {id: "33blue", src: iPath + "cards/blue/33.gif"},
    {id: "34blue", src: iPath + "cards/blue/34.gif"},
    {id: "35blue", src: iPath + "cards/blue/35.gif"},
    {id: "36blue", src: iPath + "cards/blue/36.gif"},
    {id: "37blue", src: iPath + "cards/blue/37.gif"},
    {id: "38blue", src: iPath + "cards/blue/38.gif"},
    {id: "39blue", src: iPath + "cards/blue/39.gif"},
    {id: "40blue", src: iPath + "cards/blue/40.gif"},
    {id: "41blue", src: iPath + "cards/blue/41.gif"},
    {id: "42blue", src: iPath + "cards/blue/42.gif"},
    {id: "43blue", src: iPath + "cards/blue/43.gif"},
    {id: "44blue", src: iPath + "cards/blue/44.gif"},
    {id: "45blue", src: iPath + "cards/blue/45.gif"},
    {id: "46blue", src: iPath + "cards/blue/46.gif"},
    {id: "47blue", src: iPath + "cards/blue/47.gif"},
    {id: "48blue", src: iPath + "cards/blue/48.gif"},
    {id: "49blue", src: iPath + "cards/blue/49.gif"},
    {id: "50blue", src: iPath + "cards/blue/50.gif"},
    {id: "51blue", src: iPath + "cards/blue/51.gif"},
    {id: "52blue", src: iPath + "cards/blue/52.gif"},
    {id: "53blue", src: iPath + "cards/blue/53.gif"},
    {id: "54blue", src: iPath + "cards/blue/54.gif"},
    {id: "55blue", src: iPath + "cards/blue/55.gif"},
    {id: "56blue", src: iPath + "cards/blue/56.gif"},
    {id: "57blue", src: iPath + "cards/blue/57.gif"},
    {id: "58blue", src: iPath + "cards/blue/58.gif"},
    {id: "59blue", src: iPath + "cards/blue/59.gif"},
    {id: "60blue", src: iPath + "cards/blue/60.gif"},
    {id: "61blue", src: iPath + "cards/blue/61.gif"},
    {id: "62blue", src: iPath + "cards/blue/62.gif"},
    {id: "63blue", src: iPath + "cards/blue/63.gif"},
    {id: "64blue", src: iPath + "cards/blue/64.gif"},
    {id: "65blue", src: iPath + "cards/blue/65.gif"},
    {id: "66blue", src: iPath + "cards/blue/66.gif"},
    {id: "67blue", src: iPath + "cards/blue/67.gif"},
    {id: "68blue", src: iPath + "cards/blue/68.gif"},
    {id: "69blue", src: iPath + "cards/blue/69.gif"},
    {id: "70blue", src: iPath + "cards/blue/70.gif"},
    {id: "71blue", src: iPath + "cards/blue/71.gif"},
    {id: "72blue", src: iPath + "cards/blue/72.gif"},
    {id: "73blue", src: iPath + "cards/blue/73.gif"},
    {id: "74blue", src: iPath + "cards/blue/74.gif"},
    {id: "75blue", src: iPath + "cards/blue/75.gif"},
    {id: "76blue", src: iPath + "cards/blue/76.gif"},
    {id: "77blue", src: iPath + "cards/blue/77.gif"},
    {id: "78blue", src: iPath + "cards/blue/78.gif"},
    {id: "79blue", src: iPath + "cards/blue/79.gif"},
    {id: "80blue", src: iPath + "cards/blue/80.gif"},
    {id: "81blue", src: iPath + "cards/blue/81.gif"},
    {id: "82blue", src: iPath + "cards/blue/82.gif"},
    {id: "83blue", src: iPath + "cards/blue/83.gif"},
    {id: "84blue", src: iPath + "cards/blue/84.gif"},
    {id: "85blue", src: iPath + "cards/blue/85.gif"},
    {id: "86blue", src: iPath + "cards/blue/86.gif"},
    {id: "87blue", src: iPath + "cards/blue/87.gif"},
    {id: "88blue", src: iPath + "cards/blue/88.gif"},
    {id: "89blue", src: iPath + "cards/blue/89.gif"},
    {id: "90blue", src: iPath + "cards/blue/90.gif"},
    {id: "91blue", src: iPath + "cards/blue/91.gif"},
    {id: "92blue", src: iPath + "cards/blue/92.gif"},
    {id: "93blue", src: iPath + "cards/blue/93.gif"},
    {id: "94blue", src: iPath + "cards/blue/94.gif"},
    {id: "95blue", src: iPath + "cards/blue/95.gif"},
    {id: "96blue", src: iPath + "cards/blue/96.gif"},
    {id: "97blue", src: iPath + "cards/blue/97.gif"},
    {id: "98blue", src: iPath + "cards/blue/98.gif"},
    {id: "99blue", src: iPath + "cards/blue/99.gif"},
    {id: "100blue", src: iPath + "cards/blue/100.gif"},
    {id: "101blue", src: iPath + "cards/blue/101.gif"},
    {id: "102blue", src: iPath + "cards/blue/102.gif"},
    {id: "103blue", src: iPath + "cards/blue/103.gif"},
    {id: "104blue", src: iPath + "cards/blue/104.gif"},
    {id: "105blue", src: iPath + "cards/blue/105.gif"},
    {id: "106blue", src: iPath + "cards/blue/106.gif"},
    {id: "107blue", src: iPath + "cards/blue/107.gif"},
    {id: "108blue", src: iPath + "cards/blue/108.gif"},
    {id: "109blue", src: iPath + "cards/blue/109.gif"},
    {id: "110blue", src: iPath + "cards/blue/110.gif"}
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
        var menu = Menu(stage);
        // set ticker
        createjs.Ticker.setFPS(40);
        createjs.Ticker.addEventListener("tick", stage);

        // click to start game
        stage.on("click", function() {
            // remove splash screen
            //stage.removeChild(bgSplashScr);
            // start triple triad
            //_start();
        });
        /////
    },
    getElement: function(id) {
        return preload.getResult(id);
    },
    getImage: function(id) {
         if (!this.items[id]) {
            this.items[id] = new createjs.Bitmap(this.getElement(id))
         }
         return this.items[id]
    }
};