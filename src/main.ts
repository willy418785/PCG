export{}

import { Character } from "./Character";
import { CharacterDraw } from "./CharacterDraw";
import { PlayerInput } from "./PlayerInput";
import { EventListenerHandler } from "./EventListenerHandler";
import { PlayerInputProcessor } from "./PlayerInputProcessor";

var characterDraw;
var playerInputListener;
var playerInput;
var playerInputProcessor;
var player;
var FPS = 60;
var FRAME_INTERVAL = 1000 / FPS;
function initialize(){
    var temp: HTMLElement = document.getElementById("canvas");
    var canvas: HTMLCanvasElement = <HTMLCanvasElement>temp;
    canvas.width = 500;
    canvas.height = 400;
    var gravityCoefficient;
    var characterWidth = 30;
    var characterHeight = 30;
    var ATTACK_ANIMATION_FRAME;
    var TURN_AROUND_FRAME;
    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var upperSpeedAccelerationUnit;
    var lowerSpeedAccelerationUnit;
    var rightSpeedAccelerationUnit = 5;
    var leftySpeedAccelerationUnit = 5;
    var upperSpeadUpperBound;
    var lowerSpeadUpperBound;
    var rightSpeadUpperBound;
    var leftySpeadUpperBound;
    var upperSpeedAccelerationUpperBound;
    var lowerSpeedAccelerationUpperBound;
    var rightSpeedAccelerationUpperBound = 20;
    var leftySpeedAccelerationUpperBound = 20;   
    var ctx = canvas.getContext("2d");
    player = new Character(
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
    setTimeout(update, FRAME_INTERVAL);
}
function update() {
    playerInputProcessor.process();
    player.process();
    characterDraw.draw();

    setTimeout(update, FRAME_INTERVAL);
}

initialize();