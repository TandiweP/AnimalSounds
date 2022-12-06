class Animal {
    constructor (
        id,
        name,
        sound,
        clicked,
        image
    ) {
        this.id = id;
        this.name = name;
        this.sound = sound;
        this.clicked = clicked;
        this.image = image; 
    }

    beenClicked (clickStatus) {
        this.clicked = clickStatus;
        
        
        
    
        //further define this function to toggle ex) if this.clicked = true: !this.clicked
        // document.getElementById("button").style.color="red";
    }
}
export default Animal;