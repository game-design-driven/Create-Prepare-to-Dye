//priority : 101

function solveIngredients(ingredients){
    var outArr = []
    ingredients.forEach((ingredient) => {
        outArr.push(Ingredient.of(ingredient).toJson());
    });
    return outArr
}
function solveItems(items){
    var outArr = []
    items.forEach(item => {
        outArr.push(solveItem(item))
    });
    return outArr
}
function solveItem(item){
    var solvedItem;
    if (typeof item !== "string"){
        return item
    }
    if (item.includes("x ")){
        //has amount
        solvedItem = {item: item.split("x ")[1], count: parseInt(item.split("x ")[0])}
    }else{
        solvedItem = {item: item}
    }
    return solvedItem
}

