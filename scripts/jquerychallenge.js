function foodSelect(){
    let food = {
        fruits: ["Apple" , "Banana" , "Orange" , "Peach"],
        vegetables: ["Broccoli", "Carrot" , "Peas" , "Squash"]
    }
    let category = $("#category").val();
    let itemDropDown = $("#items");
    itemDropDown.empty();

    console.log(category);
    if(category=="fruits"){
        for(let i=0;i<food.fruits.length;i++){
            itemDropDown.append(`<option value="${food.fruits[i]}">${food.fruits[i]}</option>`)
        }
        console.log(food.fruits);
    }
    else{
        for(let i=0;i<food.vegetables.length;i++){
        itemDropDown.append(`<option value="${food.vegetables[i]}">${food.vegetables[i]}</option>`)
        }
        console.log(food.vegetables);
    }
}

$("#category").on("change", foodSelect);


