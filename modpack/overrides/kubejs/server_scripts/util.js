//priority : 101

function solveIngredients(ingredients) {
    var outArr = [];
    (Array.isArray(ingredients)) ?
        ingredients.forEach((ingredient) => {
            outArr.push(solveIngredient(ingredient).toJson());
        }) : outArr.push(solveIngredient(ingredients).toJson())
    return outArr
}
function solveIngredient(ingredient) {
    return Ingredient.of(ingredient)
}
function solveItems(items) {
    var outArr = [];
    (Array.isArray(items)) ?
        items.forEach(item => {
            outArr.push(solveItem(item))
        }) : outArr.push(solveItem(items))
    return outArr
}
function solveItem(item) {
    var solvedItem;
    if (typeof item !== "string") {
        return item
    }
    if (item.includes("x ")) {
        //has amount
        solvedItem = { item: item.split("x ")[1], count: parseInt(item.split("x ")[0]) }
    } else {
        solvedItem = { item: item }
    }
    if (item.includes(" %")) {
        //has chance
        solvedItem = { item: item.split(" %")[0], chance: parseFloat(item.split(" %")[1]/100) }
    }
    return solvedItem
}
function solveFluid(fluid){
    var solvedFluid;
    if (typeof fluid !== "string") {
        return fluid //the fluid is already an object so don't touch it
    }
    if (fluid.includes("x ")) {
        //has amount
        solvedFluid = { item: fluid.split("x ")[1], amount: parseInt(fluid.split("x ")[0]) }
    } else {
        solvedFluid = { item: fluid }
    }
    if (fluid.includes(" %")) {
        //has chance
        solvedFluid = { item: fluid.split(" %")[0], chance: parseFloat(fluid.split(" %")[1]/100) }
    }
    return solvedFluid
}