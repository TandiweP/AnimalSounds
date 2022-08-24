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

const cow = new Animal (
    4,
    "Cow",
    "Moo",
    false,
);

console.log(Animal);

const content = (currentAnimal) => { 
    const newArticle = document.createElement("article");
    newArticle.innerHTML = `
<div class="card text-white bg-primary mb-3" style="width: 18rem;">
    <div class="card-body">
        <h3 class="card-body">${currentAnimal.id}: ${currentAnimal.name}:</h3>
            <ol>
                <li>Sound: ${currentAnimal.sound}</li>
                <li>clicked: ${currentAnimal.clicked}</li>
            </ol>
        <button class="btn-btn-primary">Get Sound</button>
    </div>   
</div>
`;
return newArticle;
};


const main = document.querySelector("main");
main.append(content(cat));