/* ***********************************
 author: SainaacD;董健国;
 description: Canvas,demo;Canvas,例子;
 date: 2015-8-31;
 **********************************
 */
var stage;
var queue;

function init() {
    stage = new createjs.Stage("myCanvas");
    queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.addEventListener("complete", handleComplete);
    queue.loadManifest([
        {id:"bg", src:"assets/img/bg.jpg"},
        {id:"sound", src:"assets/audio/bubble.mp3"},
        {id:"fish1", src:"assets/img/fish1.png"}
    ]);
}

function handleComplete (event) {
    //画背景（宽度640px,高度960px）
    var bg = new createjs.Bitmap("assets/img/bg.jpg");
    bg.x = 0;
    bg.y = 0;
    stage.addChild(bg);

    //画第一种鱼（宽度64px,高度64px）
    var fish1 = new createjs.Bitmap("assets/img/fish1.png");
    fish1.addEventListener("click", handleClick);
    fish1.x = 576;
    fish1.y = 600;

    createjs.Tween.get(fish1, {loop: true})
        .to({x:-64}, 5000);
    createjs.Ticker.addEventListener("tick", tick);

    stage.addChild(fish1);

    //画第二种鱼（宽度64px,高度64px）
    var fish2 = new createjs.Bitmap("assets/img/fish2.png");
    fish2.addEventListener("click", handleClick);
    fish2.x = 0;
    fish2.y = 750;

    createjs.Tween.get(fish2, {loop: true})
        .to({x:640}, 6000);
    createjs.Ticker.addEventListener("tick", tick);

    stage.addChild(fish2);

    //画海马（宽度64px,高度64px）
    var fish3 = new createjs.Bitmap("assets/img/fish3.png");
    fish3.addEventListener("click", handleClick);
    fish3.x = 640;
    fish3.y = 250;

    createjs.Tween.get(fish3, {loop: true})
        .to({x:300}, 12000);
    createjs.Ticker.addEventListener("tick", tick);

    stage.addChild(fish3);

    //画贝壳（宽度64px,高度64px）
    var fish5 = new createjs.Bitmap("assets/img/fish5.png");
    fish5.addEventListener("click", handleClick);
    fish5.x = 576;
    fish5.y = 896;

    createjs.Tween.get(fish5, {loop: true})
        .to({x:-64}, 20000);
    createjs.Ticker.addEventListener("tick", tick);

    stage.addChild(fish5);

}

function handleClick (event) {
    //var bmp = new createjs.Bitmap;
    createjs.Sound.play("sound");
    console.log("clicked");
}

function tick (event) {
    stage.update();
}

