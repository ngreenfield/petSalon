console.log("Hello from display pets");

function displayPet() {
    let cardsSection = document.getElementById("pets");
    let result= `
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Service</th>
                    <th>Breed</th>
                    <th>Gender</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
    `;
    for (let i=0; i<pets.length; i++) {
        let pet = pets[i];

        result += `
            <tr id="${i}">
                <td>${pet.name}</td>
                <td><span class="text-secondary">${pet.service}</span></td>
                <td>${pet.breed}</td>
                <td>${pet.gender}</td>
                <td>${pet.age}</td>
                <td><button class="btn btn-danger">Delete</button></td>
            </tr>
        `;
    }

    result += `
            </tbody>
        </table>
    `;

    cardsSection.innerHTML = result;
}


