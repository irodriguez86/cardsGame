$(function () {
    // Create the Stage from the canvas
    canvas = document.getElementById("mainStage");
    canvas.width = 1024;
    canvas.height = 768;
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver();

    // loading bar
    ttriad.loader.init();
    // preload images
    preload = new createjs.LoadQueue(false);
    preload.installPlugin(createjs.Sound);
    preload.addEventListener("complete", ttriad.loader.handleComplete);
    preload.addEventListener("progress", ttriad.loader.handleProgress);
    preload.loadManifest(ttriadManifest);
    // update Stage
    stage.update();
});