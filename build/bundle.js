(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Character {
    get x() {
        return this.skeleton.referencePoint.x;
    }
    set x(value) {
        this.skeleton.referencePoint.x = value;
    }
    get y() {
        return this.skeleton.referencePoint.y;
    }
    set y(value) {
        this.skeleton.referencePoint.y = value;
    }
    constructor(gravityCoefficient = 1, characterWidth = 10, characterHeight = 10, ATTACK_ANIMATION_FRAME = 30, TURN_AROUND_FRAME = 15, x = 0, y = 0, upperSpeedAccelerationUnit = 1, lowerSpeedAccelerationUnit = 1, rightSpeedAccelerationUnit = 1, leftySpeedAccelerationUnit = 1, upperSpeedUpperBound = 10, lowerSpeedUpperBound = 10, rightSpeedUpperBound = 10, leftySpeedUpperBound = 10, upperSpeedAccelerationUpperBound = 5, lowerSpeedAccelerationUpperBound = 5, rightSpeedAccelerationUpperBound = 5, leftySpeedAccelerationUpperBound = 5) {
        this.verticalSpeed = 0;
        this.verticalSpeedAcceleration = 0;
        this.horizontalSpeed = 0;
        this.horizontalSpeedAcceleration = 0;
        this.turnAroundAnimationCount = 0;
        this.attackAnimationCount = 0;
        this.isTurningRight = true;
        this.isTurningAround = false;
        this.intitializeContours();
        this.x = x;
        this.y = y;
        this.gravityCoefficient = gravityCoefficient;
        this.characterWidth = characterWidth;
        this.characterHeight = characterHeight;
        this.ATTACK_ANIMATION_FRAME = ATTACK_ANIMATION_FRAME;
        this.TURN_AROUND_FRAME = TURN_AROUND_FRAME;
        this.upperSpeedAccelerationUnit = upperSpeedAccelerationUnit;
        this.lowerSpeedAccelerationUnit = lowerSpeedAccelerationUnit;
        this.rightSpeedAccelerationUnit = rightSpeedAccelerationUnit;
        this.leftySpeedAccelerationUnit = leftySpeedAccelerationUnit;
        this.upperSpeedUpperBound = upperSpeedUpperBound;
        this.lowerSpeedUpperBound = lowerSpeedUpperBound;
        this.rightSpeedUpperBound = rightSpeedUpperBound;
        this.leftySpeedUpperBound = leftySpeedUpperBound;
        this.upperSpeedAccelerationUpperBound = upperSpeedAccelerationUpperBound;
        this.lowerSpeedAccelerationUpperBound = lowerSpeedAccelerationUpperBound;
        this.rightSpeedAccelerationUpperBound = rightSpeedAccelerationUpperBound;
        this.leftySpeedAccelerationUpperBound = leftySpeedAccelerationUpperBound;
    }
    process() {
        this.horizontalSpeed += this.horizontalSpeedAcceleration;
        if (this.horizontalSpeed <= 0) {
            this.horizontalSpeed = this.horizontalSpeed <= -(this.leftySpeedUpperBound) ?
                -(this.leftySpeedUpperBound) : this.horizontalSpeed;
        }
        else {
            this.horizontalSpeed = this.horizontalSpeed >= this.rightSpeedUpperBound ?
                this.rightSpeedUpperBound : this.horizontalSpeed;
        }
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
    }
    draw() {
        this.canvas.width = this.canvas.width;
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 1;
        var tmp = this.character.collisionContour.getSegments();
        this.ctx.lineTo(tmp[0][0].x, tmp[0][0].y);
        this.ctx.lineTo(tmp[1][0].x, tmp[1][0].y);
        this.ctx.lineTo(tmp[2][0].x, tmp[2][0].y);
        this.ctx.lineTo(tmp[3][0].x, tmp[3][0].y);
        this.ctx.lineTo(tmp[0][0].x, tmp[0][0].y);
        this.ctx.stroke();
    }
}
exports.CharacterDraw = CharacterDraw;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CollisionContours {
    constructor(skeleton, formulas) {
        this.pointFormulas = formulas;
        this.skeleton = skeleton;
    }
    getSegments() {
        let segments = new Array();
        for (let index = 0; index < this.pointFormulas.length; index++) {
            let lastIndex = this.pointFormulas.length - 1;
            if (index != lastIndex) {
                segments.push([
                    this.pointFormulas[index](this.skeleton),
                    this.pointFormulas[index + 1](this.skeleton)
                ]);
            }
            else {
                segments.push([
                    this.pointFormulas[lastIndex](this.skeleton),
                    this.pointFormulas[0](this.skeleton)
                ]);
            }
        }
        return segments;
    }
}
exports.CollisionContours = CollisionContours;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = require("./Point");
class ContourSkeleton {
    constructor(points, referencePoint = new Point_1.Point(0, 0)) {
        this.points = points;
        this.referencePoint = referencePoint;
    }
}
exports.ContourSkeleton = ContourSkeleton;

},{"./Point":11}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ManagerForLevelAndCharacter {
    constructor() {
        this.characterList = new Array();
    }
    addCharacter(character) {
        this.characterList.push(character);
    }
    setLevel(level) {
        this.level = level;
    }
    process() {
        this.characterList.forEach(element => {
            element.process();
            let tmpPositionX = element.x + element.horizontalSpeed;
            let tmpPositionY = element.y + element.verticalSpeed;
            element.x = tmpPositionX;
            element.y = tmpPositionY;
        });
    }
}
exports.ManagerForLevelAndCharacter = ManagerForLevelAndCharacter;

},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { CollisionContours } from "./CollisionContours";
const Point_1 = require("./Point");
// import { ICharacter } from "./Interface/Character.interface";
const ContourSkeleton_1 = require("./ContourSkeleton");
const Character_1 = require("./Character");
const CollisionContours_1 = require("./CollisionContours");
class Player extends Character_1.Character {
    intitializeContours() {
        /// setup skeleton
        var points = new Array();
        points.push(new Point_1.Point(-10, -10), new Point_1.Point(10, -10), new Point_1.Point(10, 10), new Point_1.Point(-10, 10));
        this.skeleton = new ContourSkeleton_1.ContourSkeleton(points);
        /// setup CollisionContours
        var formulas = new Array();
        formulas.push((skeleton) => {
            return Point_1.Point.add(skeleton.points[0], skeleton.referencePoint);
        });
        formulas.push((skeleton) => {
            return Point_1.Point.add(skeleton.points[1], skeleton.referencePoint);
        });
        formulas.push((skeleton) => {
            return Point_1.Point.add(skeleton.points[2], skeleton.referencePoint);
        });
        formulas.push((skeleton) => {
            return Point_1.Point.add(skeleton.points[3], skeleton.referencePoint);
        });
        this.collisionContour = new CollisionContours_1.CollisionContours(this.skeleton, formulas);
    }
}
exports.Player = Player;

},{"./Character":1,"./CollisionContours":3,"./ContourSkeleton":4,"./Point":11}],8:[function(require,module,exports){
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
        character.horizontalSpeedAcceleration = acceleration;
        //character.horizontalSpeed += acceleration;
        //character.x += character.horizontalSpeed;
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

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{"./PlayerAction":8}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static add(p1, p2) {
        var p = new Point(0, 0);
        p.x = p1.x + p2.x;
        p.y = p1.y + p2.y;
        return p;
    }
}
exports.Point = Point;

},{}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharacterDraw_1 = require("./CharacterDraw");
const PlayerInput_1 = require("./PlayerInput");
const EventListenerHandler_1 = require("./EventListenerHandler");
const PlayerInputProcessor_1 = require("./PlayerInputProcessor");
const Player_1 = require("./Player");
const ManagerForLevelAndCharacter_1 = require("./ManagerForLevelAndCharacter");
var characterDraw;
var playerInputListener;
var playerInput;
var playerInputProcessor;
var player;
var FPS = 60;
var FRAME_INTERVAL = 1000 / FPS;
var levelManager;
function initialize() {
    var temp = document.getElementById("canvas");
    var canvas = temp;
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
    player = new Player_1.Player(gravityCoefficient, characterWidth, characterHeight, ATTACK_ANIMATION_FRAME, TURN_AROUND_FRAME, x, y, upperSpeedAccelerationUnit, lowerSpeedAccelerationUnit, rightSpeedAccelerationUnit, leftySpeedAccelerationUnit, upperSpeadUpperBound, lowerSpeadUpperBound, rightSpeadUpperBound, leftySpeadUpperBound, upperSpeedAccelerationUpperBound, lowerSpeedAccelerationUpperBound, rightSpeedAccelerationUpperBound, leftySpeedAccelerationUpperBound);
    characterDraw = new CharacterDraw_1.CharacterDraw(player, canvas);
    characterDraw.draw();
    playerInput = new PlayerInput_1.PlayerInput();
    playerInputListener = new EventListenerHandler_1.EventListenerHandler(document, playerInput);
    playerInputListener.AddKeypressEventListener();
    playerInputListener.AddClickEventListener();
    playerInputProcessor = new PlayerInputProcessor_1.PlayerInputProcessor(player, playerInput);
    levelManager = new ManagerForLevelAndCharacter_1.ManagerForLevelAndCharacter();
    levelManager.addCharacter(player);
    setTimeout(update, FRAME_INTERVAL);
}
function update() {
    playerInputProcessor.process();
    characterDraw.draw();
    levelManager.process();
    setTimeout(update, FRAME_INTERVAL);
}
initialize();

},{"./CharacterDraw":2,"./EventListenerHandler":5,"./ManagerForLevelAndCharacter":6,"./Player":7,"./PlayerInput":9,"./PlayerInputProcessor":10}]},{},[12]);
