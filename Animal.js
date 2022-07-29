class Animal {
    constructor (
        ID,
        name,
        sound,
        clicked
    ) {
        this.ID = ID;
        this.name = name;
        this.sound = sound;
        clicked = clicked;
    }

    beenClicked (clickStatus) {
        this.clicked = clickStatus;
        //further define this function to toggle ex) if this.clicked = true: !this.clicked
    }
}
export default Animal;