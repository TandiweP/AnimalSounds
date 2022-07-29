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

const content = `
    <div className = "container-fluid" >
        <h1>Animals:</h1>
        <article>
            <h1>${cat.id}: ${cat.name}</h1>
            <ol>
                <li>Id: ${cat.id}</li>
                <li>Name: ${cat.name}</li>
                <li>Sound: ${cat.sound}</li>
                <li>clicked: ${cat.clicked}</li>

            </ol>
        </article>
        <article>
            <h1>${dog.id}: ${dog.name}</h1>
            <ol>
                <li>Id: ${dog.id}</li>
                <li>Name: ${dog.name}</li>
                <li>Sound: ${dog.sound}</li>
                <li>clicked: ${dog.clicked}</li>

            </ol>
        </article>
    </div>
`

document.body.innerHTML = content;