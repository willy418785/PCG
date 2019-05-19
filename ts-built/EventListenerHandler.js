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
