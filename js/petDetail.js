const pet = {
    type: "cat",
    colour: "brown",
    age: 20,
    isFriendly: true,
    name: "Benny",
};


const petDetail = document.querySelector(".pet-detail");

let friendly = "Yes";

if(pet.isFriendly === false)  {
    // or if(!pet.isFriendly)//
    friendly = "no";
} 

petDetail.innerHTML = `
<h4 style="color: ${pet.colour}">${pet.type}</h4>
<p>Age: ${pet.age}</p>
<p>Friendly: ${friendly}</p>`;

