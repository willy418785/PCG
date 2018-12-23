class EventListenerHandler{
    constructor(inputDocument,  playerInput) {
        this.inputDocument = inputDocument;
        this.playerInput = playerInput;
    }
    AddKeypressEventListener(){
        var _this = this;
        this.inputDocument.addEventListener("keypress", function(e){ _this.keyPressHandler(e); }, false); 
    }
    AddClickEventListener(){
        var _this = this;
        this.inputDocument.addEventListener("mousedown", function(e){ _this.clickHandler(e); }, false); 
    }
    clickHandler(e){
        if(e.button === 0){
            this.playerInput.playerInputList['attack1'] = true;
        }
        if(e.button === 2){
            this.playerInput.playerInputList['attack2'] = true;
        }
        //console.log(playerKeyboardInputObj);
    }
    keyPressHandler(e){
        if (e.keyCode == 68 || e.keyCode == 100) {
            this.playerInput.playerInputList['right'] = true;
        }
        if (e.keyCode == 65 || e.keyCode == 97) {
            this.playerInput.playerInputList['left'] = true;
        }
        if (e.keyCode == 87 || e.keyCode == 119) {
            this.playerInput.playerInputList['up'] = true;
        }
        if (e.keyCode == 83 || e.keyCode == 115) {
            this.playerInput.playerInputList['down'] = true;
        }
        if(e.keyCode == 32){
            this.playerInput.playerInputList['specialMovement'] = true;
        }
        for (var key in this.playerInput.playerInputList) {        
            console.log(key, this.playerInput.playerInputList[key]);
        }
    }
}