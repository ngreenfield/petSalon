var globalVariable = "I am in global scope";

function myFunction(){
    var localVariable = "Iam local scope";
    console.log(globalVariable);
    console.log(localVariable);
    if(true){
        let blockVariable = "I am a block variable";
        console.log(blockVariable);
    }
}


myFunction();