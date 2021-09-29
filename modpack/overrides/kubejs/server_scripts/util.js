//priority : 101
const syntax = {
    multiplicationSymbols: ['x', '*']
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
    let chance = 1.0
    let solved;
    if (typeof item !== "string") {         //already an object
        if (item.toJson !== "function") {   //already json, is ready
            solved = item
        } else {                              //a kubejs object, that needs conversion to json
            solved = item.toJson()
        }
    } else {// a string object, lets apply custom handling!
        if (item.includes('%')) {
            chance = item.split('%')[1] / 100
            item = item.split('%')[0]
        }
        solved = Item.of(item).withChance(chance)
    }
    return solved
}
function solveIngredients(ingredients) {
    var outArr = [];
    (Array.isArray(ingredients)) ?
        ingredients.forEach((ingredient) => {
            outArr.push(solveIngredient(ingredient));
        }) : outArr.push(solveIngredient(ingredients))
    return outArr
}
function solveIngredient(ingredient) {
    let solved;
    console.log(ingredient);
    if (typeof ingredient !== "string") {         //already an object
        console.log('im an object');
        if (typeof ingredient.toJson !== "function") {   //already json, is ready
            console.log('im json');
            solved = ingredient
        } else {                              //a kubejs object, that needs conversion to json
            solved = ingredient.toJson()
            console.log('im kjs');
        }
    } else {// a string object, lets apply custom handling!
        solved = Ingredient.of(ingredient).toJson()
        console.log('im special');
    }
    return solved
}
// if (typeof ingredient !== "string"){         //already an object
//     if (ingredient.toJson !== "function"){   //already json, is ready
//         return ingredient
//     }else{                              //a kubejs object, that needs conversion to json
//         return ingredient.toJson()
//     }
// }

// function solveIngredient(ingredient) {
//     //fluids are can also be ingredients
//     // if (ing)
//     if (typeof ingredient !== "string") {
//         //the ingredient is already an object
//         if (typeof ingredient.toJson === 'function') {
//             return ingredient.toJson() //An object made with kjs functions
//         } return ingredient          //A regular json object
//     }
//     else if (ingredient.includes("~")) {//Should be handled as a fluid ingredient
//         return solveFluid(ingredient.replace('~', ''));
//     }
//     var solvedIngredient={};
//     // if (ingredient.includes("x ")){
//     //     solvedIngredient = handleCount(ingredient)
//     // }

//     return Ingredient.of(ingredient) //also handles #tags
// }
// function solveItems(items) {
//     var outArr = [];
//     (Array.isArray(items)) ?
//         items.forEach(item => {
//             outArr.push(solveItem(item))
//         }) : outArr.push(solveItem(items))
//     return outArr
// }
// function solveItem(item) {
//     var solvedItem;
//     if (typeof item !== "string") {
//         return item
//         console.log(item + " is a big boy");
//     }
//     if (item.includes("x ")) {
//         //has amount
//         solvedItem = handleCount(item)
//     } else {
//         solvedItem = { item: item }
//     }
//     if (item.includes(" %")) {
//         //has chance
//         solvedItem = { item: item.split(" %")[0], chance: parseFloat(item.split(" %")[1] / 100) }
//     }
//     return solvedItem
// }
// function solveFluid(fluid) { //don't think this supports tags?
//     var solvedFluid;
//     if (fluid.includes("x ")) {
//         //has amount
//         solvedFluid = { fluid: fluid.split("x ")[1], amount: parseInt(fluid.split("x ")[0]) }
//     } else {
//         solvedFluid = { fluid: fluid, amount: 1000 }
//     }
//     if (fluid.includes(" %")) {
//         //has chance
//         solvedFluid = { fluid: fluid.split(" %")[0], chance: parseFloat(fluid.split(" %")[1] / 100) }
//     }
//     return solvedFluid
// }

// function handleCount(item){
//     return { item: item.split("x ")[1], count: parseInt(item.split("x ")[0]) }
// }
