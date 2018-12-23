gravityCoefficient = 1;
characterWidth = 20;
characterHeight = 20;
ATTACK_ANIMATION_FRAME = 17;
TURN_AROUND_FRAME = 20;
var FPS = 60;
var FRAME_INTERVAL = 1000 / FPS;
// onkeydown = onkeyup = function (e) {
//   e = e || event; // to deal with IE
//   map[e.keyCode] = e.type == 'keydown';
// }
//run();
var temp = 0;
var characterDraw;
var foo;
var playerInput;
function initialize(){
    var canvas = document.getElementById("canvas");
    canvas.width = 500;
    canvas.height = 400;
    x = canvas.width / 2;
    y = canvas.height / 2;
    var ctx = canvas.getContext("2d");
    var player = new Character(gravityCoefficient, characterWidth, characterHeight, ATTACK_ANIMATION_FRAME, TURN_AROUND_FRAME, x, y);
    characterDraw = new CharacterDraw(player, canvas);
    characterDraw.draw();
    playerInput = new PlayerInput();
    foo = new EventListenerHandler(document, playerInput);
    foo.AddKeypressEventListener();
    foo.AddClickEventListener();
    setTimeout("run()", FRAME_INTERVAL);
}
function run() {
    characterDraw.draw();
    setTimeout("run()", FRAME_INTERVAL);
}
