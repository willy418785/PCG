(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Character {
    constructor(gravityCoefficient, characterWidth, characterHeight, ATTACK_ANIMATION_FRAME, TURN_AROUND_FRAME, x, y, upperSpeedAccelerationUnit, lowerSpeedAccelerationUnit, rightSpeedAccelerationUnit, leftySpeedAccelerationUnit, upperSpeadUpperBound, lowerSpeadUpperBound, rightSpeadUpperBound, leftySpeadUpperBound, upperSpeedAccelerationUpperBound, lowerSpeedAccelerationUpperBound, rightSpeedAccelerationUpperBound, leftySpeedAccelerationUpperBound) {
        this.verticalSpeed = 0;
        this.verticalSpeedAcceleration = 0;
        this.horizontalSpeed = 0;
        this.horizontalSpeedAcceleration = 0;
        this.turnAroundAnimationCount = 0;
        this.attackAnimationCount = 0;
        this.isTurningRight = true;
        this.isTurningAround = false;
        this.gravityCoefficient = gravityCoefficient;
        this.characterWidth = characterWidth;
        this.characterHeight = characterHeight;
        this.ATTACK_ANIMATION_FRAME = ATTACK_ANIMATION_FRAME;
        this.TURN_AROUND_FRAME = TURN_AROUND_FRAME;
        this.x = x;
        this.y = y;
        this.upperSpeedAccelerationUnit = upperSpeedAccelerationUnit;
        this.lowerSpeedAccelerationUnit = lowerSpeedAccelerationUnit;
        this.rightSpeedAccelerationUnit = rightSpeedAccelerationUnit;
        this.leftySpeedAccelerationUnit = leftySpeedAccelerationUnit;
        this.upperSpeadUpperBound = upperSpeadUpperBound;
        this.lowerSpeadUpperBound = lowerSpeadUpperBound;
        this.rightSpeadUpperBound = rightSpeadUpperBound;
        this.leftySpeadUpperBound = leftySpeadUpperBound;
        this.upperSpeedAccelerationUpperBound = upperSpeedAccelerationUpperBound;
        this.lowerSpeedAccelerationUpperBound = lowerSpeedAccelerationUpperBound;
        this.rightSpeedAccelerationUpperBound = rightSpeedAccelerationUpperBound;
        this.leftySpeedAccelerationUpperBound = leftySpeedAccelerationUpperBound;
    }
}
exports.Character = Character;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CharacterDraw {
    constructor(character, canvas) {
        this.character = character;
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.pLTX = 0;
        this.pLTY = 0;
        this.pRTX = 0;
        this.pRTY = 0;
        this.pRBX = 0;
        this.pRBY = 0;
        this.pLBX = 0;
        this.pLBY = 0;
    }
    formBasicShape() {
        this.pLTX = this.character.x;
        this.pLTY = this.character.y - this.character.characterHeight;
        this.pRTX = this.character.x + this.character.characterWidth;
        this.pRTY = this.character.y - this.character.characterHeight;
        this.pRBX = this.character.x + this.character.characterWidth;
        this.pRBY = this.character.y;
        this.pLBX = this.character.x;
        this.pLBY = this.character.y;
    }
    draw() {
        this.formBasicShape();
        this.canvas.width = this.canvas.width;
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 1;
        this.ctx.lineTo(this.pLTX, this.pLTY);
        this.ctx.lineTo(this.pRTX, this.pRTY);
        this.ctx.lineTo(this.pRBX, this.pRBY);
        this.ctx.lineTo(this.pLBX, this.pLBY);
        this.ctx.lineTo(this.pLTX, this.pLTY);
        this.ctx.stroke();
    }
}
exports.CharacterDraw = CharacterDraw;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventListenerHandler {
    constructor(inputDocument, playerInput) {
        this.inputDocument = inputDocument;
        this.playerInput = playerInput;
    }
    AddKeypressEventListener() {
        var self = this;
        this.inputDocument.addEventListener("keypress", function (e) { self.keyPressHandler(e); }, false);
    }
    AddClickEventListener() {
        var self = this;
        this.inputDocument.addEventListener("mousedown", function (e) { self.clickHandler(e); }, false);
        if (this.inputDocument.addEventListener) { // IE >= 9; other browsers   
            this.inputDocument.addEventListener('contextmenu', function (e) {
                e.preventDefault(); // reload 
            }, false);
        }
        else { // IE < 9, haven't been tested
            this.inputDocument.attachEvent('oncontextmenu', function () {
                window.event.returnValue = false;
            });
        }
    }
    clickHandler(e) {
        if (e.button === 0) {
            this.playerInput.playerInputList['attack1'] = true;
            this.playerInput.isProccessed = false;
        }
        if (e.button === 2) {
            this.playerInput.playerInputList['attack2'] = true;
            this.playerInput.isProccessed = false;
        }
        //console.log(playerKeyboardInputObj);
    }
    keyPressHandler(e) {
        if (e.keyCode == 68 || e.keyCode == 100) {
            this.playerInput.playerInputList['right'] = true;
            this.playerInput.isProccessed = false;
        }
        if (e.keyCode == 65 || e.keyCode == 97) {
            this.playerInput.playerInputList['left'] = true;
            this.playerInput.isProccessed = false;
        }
        if (e.keyCode == 87 || e.keyCode == 119) {
            this.playerInput.playerInputList['up'] = true;
            this.playerInput.isProccessed = false;
        }
        if (e.keyCode == 83 || e.keyCode == 115) {
            this.playerInput.playerInputList['down'] = true;
            this.playerInput.isProccessed = false;
        }
        if (e.keyCode == 32) {
            this.playerInput.playerInputList['specialMovement'] = true;
            this.playerInput.isProccessed = false;
        }
        for (var key in this.playerInput.playerInputList) {
            console.log(key, this.playerInput.playerInputList[key]);
        }
    }
}
exports.EventListenerHandler = EventListenerHandler;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerAction {
    constructor() { }
    characterMoveSideway(character, isMovingRight) {
        var accelerationUnit = isMovingRight ?
            character.rightSpeedAccelerationUnit : character.leftySpeedAccelerationUnit;
        var speedAccelerationUpperBound = isMovingRight ?
            character.rightSpeedAccelerationUpperBound : character.leftySpeedAccelerationUpperBound;
        var isLessThanUpperBound = character.horizontalSpeedAcceleration + accelerationUnit <= speedAccelerationUpperBound;
        var acceleration;
        if (isLessThanUpperBound) {
            acceleration = character.horizontalSpeedAcceleration + accelerationUnit;
        }
        else {
            acceleration = character.horizontalSpeedAccelerationUpperBound;
        }
        if (!isMovingRight) {
            acceleration = -acceleration;
        }
        character.horizontalSpeed += acceleration;
        character.x += character.horizontalSpeed;
    }
    characterMoveUp() {
    }
    characterMoveDown() {
    }
    characterAttackSideway() {
    }
    characterAttackUp() {
    }
    characterAttackDown() {
    }
}
exports.PlayerAction = PlayerAction;

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerInput {
    constructor() {
        this.isProccessed = false;
        this.playerInputList = [];
        this.playerInputList['up'] = false;
        this.playerInputList['right'] = false;
        this.playerInputList['down'] = false;
        this.playerInputList['left'] = false;
        this.playerInputList['specialMovement'] = false;
        this.playerInputList['attack1'] = false;
        this.playerInputList['attack2'] = false;
        this.playerInputList['menu'] = false;
        this.isProccessed = false;
    }
    reset() {
        this.playerInputList['up'] = false;
        this.playerInputList['right'] = false;
        this.playerInputList['down'] = false;
        this.playerInputList['left'] = false;
        this.playerInputList['specialMovement'] = false;
        this.playerInputList['attack1'] = false;
        this.playerInputList['attack2'] = false;
        this.playerInputList['menu'] = false;
        this.isProccessed = true;
    }
}
exports.PlayerInput = PlayerInput;

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PlayerAction_1 = require("./PlayerAction");
class PlayerInputProcessor {
    constructor(character, playerInput) {
        this.character = character;
        this.playerInput = playerInput;
        this.playerAction = new PlayerAction_1.PlayerAction();
    }
    process() {
        if (this.playerInput.isProccessed) {
            return;
        }
        if (this.playerInput.playerInputList['right'] &&
            this.playerInput.playerInputList['left']) {
            return;
        }
        if (this.playerInput.playerInputList['right']) {
            this.characterMove(true);
        }
        if (this.playerInput.playerInputList['left']) {
            this.characterMove(false);
        }
        this.playerInput.reset();
    }
    characterMove(isMovingRight) {
        this.playerAction.characterMoveSideway(this.character, isMovingRight);
    }
    characterAttack() {
    }
    characterAttackWhileMoving() {
    }
}
exports.PlayerInputProcessor = PlayerInputProcessor;

},{"./PlayerAction":4}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = require("./Character");
const CharacterDraw_1 = require("./CharacterDraw");
const PlayerInput_1 = require("./PlayerInput");
const EventListenerHandler_1 = require("./EventListenerHandler");
const PlayerInputProcessor_1 = require("./PlayerInputProcessor");
var characterDraw;
var playerInputListener;
var playerInput;
var playerInputProcessor;
var FPS = 60;
var FRAME_INTERVAL = 1000 / FPS;
function initialize() {
    var temp = document.getElementById("canvas");
    var canvas = temp;
    canvas.width = 500;
    canvas.height = 400;
    var gravityCoefficient;
    var characterWidth = 10;
    var characterHeight = 10;
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
    var player = new Character_1.Character(gravityCoefficient, characterWidth, characterHeight, ATTACK_ANIMATION_FRAME, TURN_AROUND_FRAME, x, y, upperSpeedAccelerationUnit, lowerSpeedAccelerationUnit, rightSpeedAccelerationUnit, leftySpeedAccelerationUnit, upperSpeadUpperBound, lowerSpeadUpperBound, rightSpeadUpperBound, leftySpeadUpperBound, upperSpeedAccelerationUpperBound, lowerSpeedAccelerationUpperBound, rightSpeedAccelerationUpperBound, leftySpeedAccelerationUpperBound);
    characterDraw = new CharacterDraw_1.CharacterDraw(player, canvas);
    characterDraw.draw();
    playerInput = new PlayerInput_1.PlayerInput();
    playerInputListener = new EventListenerHandler_1.EventListenerHandler(document, playerInput);
    playerInputListener.AddKeypressEventListener();
    playerInputListener.AddClickEventListener();
    playerInputProcessor = new PlayerInputProcessor_1.PlayerInputProcessor(player, playerInput);
    setTimeout(update, FRAME_INTERVAL);
}
function update() {
    playerInputProcessor.process();
    characterDraw.draw();
    setTimeout(update, FRAME_INTERVAL);
}
initialize();

},{"./Character":1,"./CharacterDraw":2,"./EventListenerHandler":3,"./PlayerInput":5,"./PlayerInputProcessor":6}]},{},[7]);
