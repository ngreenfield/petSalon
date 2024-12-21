let pets = []; //empty array

//creating the pets
let pet1 = {
    name:"Milo",
    age:3,
    gender:"Male",
    service:"Full Service",
    breed:"Australian Shepard"
}
let pet2 = {
    name:"Maple",
    age:3,
    gender:"Female",
    service:"Bath Only",
    breed: "Pitbull mix"
}
let pet3 = {
    name:"Ty",
    age:16,
    gender:"Male",
    service:"Nail Trimming",
    breed:"Border Collie mix"
}

pets.push(pet1,pet2,pet3)
console.log(pets);

function displayNames(){
    document.getElementById("pet-list").innerHTML = 
    pets[0].name + " - " + pets[0].age + " - " + pets[0].gender + " - " + pets[0].service + " - " + pets[0].breed + "<br>" +
    pets[1].name + " - " + pets[1].age + " - " + pets[1].gender + " - " + pets[1].service + " - " + pets[1].breed + "<br>" +
    pets[2].name + " - " + pets[2].age + " - " + pets[2].gender + " - " + pets[2].service + " - " + pets[2].breed;
}

displayNames()