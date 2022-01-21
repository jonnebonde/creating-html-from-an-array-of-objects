const pet = {
    type: "cat",
    colour: "red",
    age: 20,
    isFriendly: true,
    name: "Benny"
};


let friendly = "Yes";

if(pet.isFriendly === false)  {
    // or if(!pet.isFriendly)//
    friendly = "no";
} 

const petColour = pet.colour;

let petAge = "Unknown";

/* if(pet.age !== undefined && pet.age !== null && pet.age !== false && pet.age !== 0) {
    petAge = pet.age;
} */

// or this way (thay are the same)

if(pet.age) {
    petAge = pet.age;
}

const heading = document.querySelector(".h4");
const age = document.querySelector(".age");
const friendlyContainer = document.querySelector(".friendly");

heading.innerHTML = pet.type;
age.innerHTML = petAge;
friendlyContainer = friendly;