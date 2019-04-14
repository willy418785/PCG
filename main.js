gravityCoefficient = 1;
characterWidth = 20;
characterHeight = 20;
ATTACK_ANIMATION_FRAME = 17;
TURN_AROUND_FRAME = 20;
var FPS = 60;
var FRAME_INTERVAL = 1000 / FPS;
var x;
var y;
var upperSpeedAccelerationUnit;
var lowerSpeedAccelerationUnit;
var rightSpeedAccelerationUnit;
var leftySpeedAccelerationUnit;
var upperSpeadUpperBound;
var lowerSpeadUpperBound;
var rightSpeadUpperBound;
var leftySpeadUpperBound;
var upperSpeedAccelerationUpperBound;
var lowerSpeedAccelerationUpperBound;
var rightSpeedAccelerationUpperBound;
var leftySpeedAccelerationUpperBound;
// onkeydown = onkeyup = function (e) {
//   e = e || event; // to deal with IE
//   map[e.keyCode] = e.type == 'keydown';
// }
//run();
var temp = 0;
var characterDraw;
var playerInputListener;
var playerInput;
var playerInputProcessor;
function initialize(){
    var canvas = document.getElementById("canvas");
    canvas.width = 500;
    canvas.height = 400;
    x = canvas.width / 2;
    y = canvas.height / 2;
    upperSpeedAccelerationUnit;
    lowerSpeedAccelerationUnit;
    rightSpeedAccelerationUnit = 5;
    leftySpeedAccelerationUnit = 5;
    upperSpeadUpperBound;
    lowerSpeadUpperBound;
    rightSpeadUpperBound;
    leftySpeadUpperBound;
    upperSpeedAccelerationUpperBound;
    lowerSpeedAccelerationUpperBound;
    rightSpeedAccelerationUpperBound = 20;
    leftySpeedAccelerationUpperBound = 20;   
    var ctx = canvas.getContext("2d");
    var player = new Character(
        gravityCoefficient,
        characterWidth,
        characterHeight,
        ATTACK_ANIMATION_FRAME,
        TURN_AROUND_FRAME,
        x,
        y,
        upperSpeedAccelerationUnit,
        lowerSpeedAccelerationUnit,
        rightSpeedAccelerationUnit,
        leftySpeedAccelerationUnit,
        upperSpeadUpperBound,
        lowerSpeadUpperBound,
        rightSpeadUpperBound,
        leftySpeadUpperBound,
        upperSpeedAccelerationUpperBound,
        lowerSpeedAccelerationUpperBound,
        rightSpeedAccelerationUpperBound,
        leftySpeedAccelerationUpperBound);
    characterDraw = new CharacterDraw(player, canvas);
    characterDraw.draw();
    playerInput = new PlayerInput();
    playerInputListener = new EventListenerHandler(document, playerInput);
    playerInputListener.AddKeypressEventListener();
    playerInputListener.AddClickEventListener();
    playerInputProcessor = new PlayerInputProcessor(player, playerInput);
    setTimeout("run()", FRAME_INTERVAL);
}
function run() {
    playerInputProcessor.process();
    characterDraw.draw();

    setTimeout("run()", FRAME_INTERVAL);
}
