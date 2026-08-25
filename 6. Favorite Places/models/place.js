// to ensure similar structure of all places

class Place{
    constructor(title, imageUri, address, location){
        this.title = title;
        this.imageUri = imageUri;
        this.address = address;
        this.location = location;
        this.id = new Date().toString() + Math.random().toString();  //generating random id since we don't have backend
    }
}
