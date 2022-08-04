import Animal from "./Animal.js"

const cat = new Animal (
    1,
    "Cat",
    "Meow",
    false,
);

const dog = new Animal (
    2,
    "Dog",
    "Woof",
    false,
);

const horse = new Animal (
    3,
    "Horse",
    "Neigh",
    false,
);

const content = `
    <div className = "container-fluid" >
        <h1>Animals:</h1>
        <div>
            <h1>${cat.id}: ${cat.name}</h1>
            <ol>
                <li>Id: ${cat.id}</li>
                <li>Name: ${cat.name}</li>
                <li>Sound: ${cat.sound}</li>
                <li>clicked: ${cat.clicked}</li>

            </ol>
        </div>
        <div>
            <h1>${dog.id}: ${dog.name}</h1>
            <ol>

                <li>Id: ${dog.id}</li>
                <li>Name: ${dog.name}</li>
                <li>Sound: ${dog.sound}</li>
                <li>clicked: ${dog.clicked}</li>

            </ol>
        </div>
        <div>
            <h1>${horse.id}: ${horse.name}</h1>
            <ol>
            
                <li>Id: ${horse.id}</li>
                <li>Name: ${horse.name}</li>
                <li>Sound: ${horse.sound}</li>
                <li>clicked: ${horse.clicked}</li>

            </ol>
        </div>
    </div>
`

document.body.innerHTML = content;