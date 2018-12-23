class EventListenerHandler{
    constructor(inputDocument,  playerInput) {
        this.inputDocument = inputDocument;
        this.playerInput = playerInput;
    }
    AddEventListener(){
        var _this = this;
        this.inputDocument.addEventListener("keypress", function(e){ _this.keyPressHandler(e); }, false); 
    }
    keyPressHandler(e){
        if (e.keyCode == 68 || e.keyCode == 100) {
        }
        if (e.keyCode == 65 || e.keyCode == 97) {
        }
        if (e.keyCode == 87 || e.keyCode == 119) {
        }
        if (e.keyCode == 83 || e.keyCode == 115) {
        }
        this.playerKeyboardInputObj = 1;
        //console.log(playerKeyboardInputObj);
    }
}