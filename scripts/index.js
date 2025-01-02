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
    let petListHTML="";

    for(let i=0;i<pets.length;i++){
       petListHTML +=`<p> ${pets[i].name}  -  ${pets[i].age}  -  ${pets[i].gender}  -  ${pets[i].service}  -  ${pets[i].breed} <p>`;
    }
    document.getElementById("pet-list").innerHTML = petListHTML;
}       

displayNames()