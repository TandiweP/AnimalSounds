class Animal {
    constructor (
        id,
        name,
        sound,
        clicked
    ) {
        this.id = id;
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