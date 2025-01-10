console.log("Hello from display pets");

function displayRow() {
    let rowSection = document.getElementById("pets");
    let result= `
        <table class="table table-info table-striped table-bordered">
            <thead>
                <tr>
                    <th scope="row">Name</th>
                    <th scope="row">Service</th>
                    <th scope="row">Breed</th>
                    <th scope="row">Gender</th>
                    <th scope="row">Age</th>
                    <th scope="row">Type</th>
                    <th scope="row">Action</th>
                </tr>
            </thead>
            <tbody>
    `;
    for (let i=0; i<pets.length; i++) {
        let pet = pets[i];

        result += `
            <tr id="${i}">
                <td>${pet.name}</td>
                <td>${pet.service}</td>
                <td>${pet.breed}</td>
                <td>${pet.gender}</td>
                <td>${pet.age}</td>
                <td>${pet.type}</td>
                <td><button class="btn btn-danger" onclick="deletePet(${i})">Delete</button></td>
            </tr>
        `;
    }
    result +=`
        </table>
        </body>
    `
    rowSection.innerHTML = result;

    displayInfo()
}

function displayInfo(){
    let total = document.getElementById("total");
    let fullserviceSpan = document.getElementById("fsTotal");
    let bathonlySpan = document.getElementById("boTotal");
    let nailtrimmingSpan = document.getElementById("ntTotal");
    let fullserviceCounter = 0;
    let bathonlyCounter = 0;
    let nailtrimmingCounter = 0;

    total.innerHTML = pets.length;
    console.log("total: ", pets.length);

    for(let i=0; i<pets.length; i++ ){
        console.log("--pet: ", pets[i]);

    if(pets[i].service == "Full Service"){
        fullserviceCounter++;
    }

    if(pets[i].service == "Bath Only"){
        bathonlyCounter++;
    }
    if(pets[i].service == "Nail Trimming"){
        nailtrimmingCounter++;
    }

    fullserviceSpan.innerHTML = fullserviceCounter;
    
    bathonlySpan.innerHTML = bathonlyCounter;

    nailtrimmingSpan.innerHTML = nailtrimmingCounter;
    }
}

functiondisplayTypes()



