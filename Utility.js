class Utility{
    deleteEverything(thisObject){
        for (var prop in thisObject) {
            delete thisObject[prop];
        }
    }
}