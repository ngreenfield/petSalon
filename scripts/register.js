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
function Pet(name,age,gender,breed,service){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
}

//create the variables
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");

function register(){
    let newPet = new Pet(inputName.value, inputAge.value, inputGender.value, inputBreed.value, inputService.value);
    pets.push(newPet);
    console.log(newPet);

    displayPet();
    clearForm();
}

function clearForm(){
    document.getElementById("txtName").value="";
    document.getElementById("txtAge").value="";
    document.getElementById("txtGender").value="";
    document.getElementById("txtBreed").value="";
    document.getElementById("txtService").value="";
}

//create a new pet
function init(){
    let pet1 = new Pet("Milo", 3, "Male", "Australian Sherpard", "Full Service");
    let pet2 = new Pet("Maple", 3, "Female", "Pit Bull Mix", "Bath Only");
    let pet3 = new Pet("Ty" , 16, "Male", "Border Collie Mix", "Nail Trimming");
    
    pets.push(pet1,pet2,pet3);
    console.log("pets", pets);

    displayPet()
}


window.onload=init;//wait to render on HTML
