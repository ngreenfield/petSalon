let pets = []; //empty array

//object literal
let petSalon = {
    name:"The Fashion Pet",
    address:{
        street:"Palm Ave",
        zip:"22333"
    },
    phone:"666-555-7777"
}

//constructor
function Pet(name,age,gender,breed,service,type){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.type=type;
}

//create the variables
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputType = document.getElementById("txtType");

function register(){
    let newPet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value, inputType.value);
    pets.push(newPet);
    console.log(newPet);

    displayRow();
    clearForm();
    
}

function clearForm(){
    document.getElementById("txtName").value="";
    document.getElementById("txtAge").value="";
    document.getElementById("txtGender").value="";
    document.getElementById("txtBreed").value="";
    document.getElementById("txtService").value="";
    document.getElementById("txtType").value="";
}

function deletePet(petId){
    console.log("Pet id: ", petId);
    document.getElementById(petId).remove();
    pets.splice(petId,1);

    displayRow();
    displayInfo();
}

//create a new pet
function init(){
    let pet1 = new Pet("Milo", 3, "Male", "Australian Sherpard", "Full Service", "Dog");
    let pet2 = new Pet("Maple", 3, "Female", "Pit Bull Mix", "Bath Only", "Dog");
    let pet3 = new Pet("Ty" , 16, "Male", "Border Collie Mix", "Nail Trimming", "Dog");
    
    pets.push(pet1,pet2,pet3);
    console.log("pets", pets);

    displayRow()
}


window.onload=init;//wait to render on HTML
