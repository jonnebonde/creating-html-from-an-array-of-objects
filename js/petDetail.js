const pet = {
    type: "pig",
    colour: "#ff0000",
    age: 0,
    isFriendly: true,
    name: "Benny",
};

const petDetail = document.querySelector(".pet-detail");

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

petDetail.innerHTML = `
<h4 style="color: ${petColour}">${pet.type}</h4>
<p>Age: ${petAge}</p>
<p>Friendly: ${friendly}</p>
<p style="color: ${petColour}">Name: ${pet.name} </p>
`;
