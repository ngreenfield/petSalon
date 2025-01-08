//usingjQuery
//constructor
function Service(description,price){
    this.description=description;
    this.price=price;
}

//register and display
function register(){
    console.log("A new service was added");
    let inputDescription =$("#txtDescription").val();
    let inputPrice = $("#txtPrice").val();

   let newService = new Service(inputDescription, inputPrice);

    console.log(newService);
}

function init(){
    $("#registerBtn").on('click', register);
}

window.onload=init;
