import Animal from "./Animal.js"

const cat = new Animal (
    1,
    "Cat",
    "Meow",
    false,
    "https://cdn5.vectorstock.com/i/thumb-large/65/79/cute-cartoon-kitty-with-ginger-colored-fur-vector-36446579.jpg"
);

const dog = new Animal (
    2,
    "Dog",
    "Woof",
    false,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6YcqgXfnCmzNkrKu2-6s_S0Nvld_3YHWeTg&usqp=CAU"
);

const horse = new Animal (
    3,
    "Horse",
    "Neigh",
    false,
    "https://media.istockphoto.com/vectors/small-brown-horse-vector-id940425370?k=20&m=940425370&s=612x612&w=0&h=qsC8bu69FktjlR7MTdM6ylYvThjjDhYpxQPGWuw7DSc="
);

const cow = new Animal (
    4,
    "Cow",
    "Moo",
    false,
    "http://www.clker.com/cliparts/a/0/e/1/1216139760278927551lemmling_Cartoon_cow.svg.med.png"
);

console.log(Animal);

const content = (currentAnimal) => { 
    const newArticle = document.createElement("article");
    newArticle.innerHTML = `
    
        <div class="card">
                <img src= ${currentAnimal.image}> 
                <h2>${currentAnimal.name}</h2>
                <h4>Sound: ${currentAnimal.sound}</h4>
                <h4>isClicked : ${currentAnimal.clicked}</h4>
                <button>Speak</button> 
        </div>
    
`;
return newArticle;
};



const main = document.querySelector("main");
main.append(content(cat));
main.append(content(dog));
main.append(content(horse));
main.append(content(cow));

alert("Welcome to the Game!");
//https://stackoverflow.com/questions/63074270/create-a-loop-of-bootstrap-4-card-with-given-array

