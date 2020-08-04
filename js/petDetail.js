const pet = {
    type: "pig",
    colour: "#ff0000",
    age: 0,
    isFriendly: true,
    name: "Benny",
};

let friendly = "Yes";

// pet.isFriendly === false

if (!pet.isFriendly) {
    friendly = "No";
}

const petColour = pet.colour;

let petAge = "Unknown";

// pet.age !== undefined && pet.age !== null && pet.age !== false && pet.age !== 0

if (pet.age) {
    petAge = pet.age;
}

const heading = document.querySelector("h4");
const age = document.querySelector(".age");
const friendlyContainer = document.querySelector(".friendly");

heading.innerHTML = pet.type;
age.innerHTML = petAge;
friendlyContainer.innerHTML = friendly;
