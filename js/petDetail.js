const pet = {
    type: "cat",
    colour: "red",
    age: 20,
    isFriendly: true,
    name: "Benny"
};


const petDetail = document.querySelector(".pet-detail");

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

petDetail.innerHTML = `
<h4 style="color: ${petColour}">${pet.type} </h4>
<p>Age: ${petAge} </p>
<p>Friendly: ${friendly} </p>
<p style="color: ${petColour}">Name: ${pet.name} </p>
`;

