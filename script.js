import Animal from "./Animal.js"

const cat = new Animal (
    1,
    "Cat",
    "Meow",
    false,
);

const content = `
    <main>
        <article>
            <h1>Animal: ${cat.name}</h1>
            <ol>
                <li>Id: ${cat.ID}</li>
                <li> ${cat.name}</li>
                <li>Sound: ${cat.sound}</li>
                <li>clicked: ${cat.clicked}</li>

            </ol>
        </article>
    </main>
`

document.body.innerHTML = content;