
ttriad = (typeof ttriad === "undefined") ? {} : ttriad

ttriad.config = {
    // base url
    baseURL: "localhost/cardsGame",
    // paths for the loaders
    loader: {
        soundPath: "snd/",
        spritesPath: "img/sprites/",
        imgPatch: "img/"
    },
    // time units
    time: {

    },
    price: {
        'specialGame':              1,
        'normalGame':               0.5
    },
    // images
    draw: {
        // cardboard balls
        'big-bola_naranja':         {x: 0,  y:0}
    },
    // text
    text: {
        // headlines
        headlines: {
            text: "Cargando...",
            x:512,
            y:27,
            style:"40px ozoneregular",
            color:"#fff",
            baseline:"middle",
            align:"center"
        },
        // cardboard balls text
        ball: {
            text: "0",
            x:36    ,
            y:37,
            style:"44px Arial",
            color:"#fff",
            baseline:"middle",
            align:"center"
        }
    },
    // containers
    containers: {
        // footer
        wallet:       {x: 0,  y:648},
        //display
        display:      {x: 328,y:648},
        // cardboards
        cardboard: {
            big1:     {x:260, y:160},
            med1:     {x:330, y:80},
            med2:     {x:330, y:350},
            sma1:     {x:250, y:65},
            sma2:     {x:540, y:65},
            sma3:     {x:250, y:260},
            sma4:     {x:540, y:260},
            sma5:     {x:250, y:455},
            sma6:     {x:540, y:455},
            hide:     {x:5000,y:5000}
        }
    },
    //shapes
    shapes: {
        lastDrumBalls:{x:95, y:223}
    },
    // headlines news
    headlines: {
        default: ["Jugando para winea", "Partida a 1 euro", "Jugando para wingo", "Wingo garantizado de 300 euros!"],
        colors: ["#fff","#f95","#9f5","#59f"],
        iteration: 3500
    }
}