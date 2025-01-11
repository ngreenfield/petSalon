//usingjQuery
//constructor
function Service(description,price){
    this.description=description;
    this.price=price;
}

function validService(service){
    let isValidDes = true;
    let isValidPrice = true;

    if(service.description == ""){
        //if I get here the description is empty
        isValidDes = false;
        $("#txtDescription").css("border", "1px solid red");
        $("#desReqText").show();
    }else{
        $("#txtDescription").css("border", "1px solid black");
        $("#desReqText").hide();
    }

    if(service.price == ""){
        isValidDes = false;
        $("#txtPrice").css("border", "1px solid red");
        $("#priceReqText").show();
    }else{
        $("#txtPrice").css("border", "1px solid black");
        $("#priceReqText").hide();
    }
    
    return isValidDes && isValidPrice; // && = AND  - // = OR
}

//register and display
function register(){
    console.log("A new service was added");
    let inputDescription =$("#txtDescription").val();
    let inputPrice = $("#txtPrice").val();
    
    let newService = new Service(inputDescription, inputPrice);
    
    $("#txtDescription").val('');
    $("#txtPrice").val('');
    
    if(validService(newService)){
        save(newService);// this fn is on storeManager
    }
}

function init(){
    $("#registerBtn").on('click', register);
    $("#priceReqText").hide();
    $("#desReqText").hide();
}

window.onload=init;
