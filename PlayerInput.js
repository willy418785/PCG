class PlayerInput{
    constructor() {
        this.playerInputList = {
            'up':false, 
            'right':false, 
            'down':false, 
            'left':false, 
            'specialMovement':false, 
            'attack1':false, 
            'attack2':false,
            'menu':false
        };
        this.isUpdated = false;
    }
    initialize(){
        this.isUpdated = false;
    }
}