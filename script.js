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

console.log(Animal);

const content = `
<div class="card text-white bg-primary mb-3" style="width: 18rem;">
    <div class="card-body">
        <h3 class="card-body">${cat.id}: ${cat.name}:</h3>
            <ol>
                <li>Sound: ${cat.sound}</li>
                <li>clicked: ${cat.clicked}</li>
            </ol>
        <button class="btn-btn-primary">Get Sound</button>
    </div>   
</div>
`

document.body.innerHTML = content;