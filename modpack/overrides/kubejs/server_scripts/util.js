//priority : 101
const syntax = {
    multiplicationSymbols: ['x', '*']
}
function solveResults(items) {
    var outArr = [];
    (Array.isArray(items)) ?
        items.forEach(item => {
            outArr.push(solveResult(item))
        }) : outArr.push(solveResult(items))
    return outArr
}
function solveResult(item) {
    if (typeof item === "string") {//is string, apply custom syntax
        // console.log(item + " is a string and can be messed with!")
        if (item.includes('%')) {
            let i = Item.of(item.split('%')[0])
            let c = parseFloat(item.split('%')[1]) / 100
            return i.withChance(c)
        }
    }
    return Item.of(item)//.toResultJson() doesn't need to be converted to keep metadata unlike ingredient
}
function solveLimitedIngredients(limitedIngredients) {
    var outArr = [];
    (Array.isArray(limitedIngredients)) ?
        limitedIngredients.forEach((limitedIngredient) => {

            if (typeof limitedIngredient === 'string' && limitedIngredient.includes('x ')) {
                console.log("limited ingredient haz numbar?! i fix!");
                let times = parseInt(limitedIngredient.split('x ')[0])
                console.log("haz " + times + " repeates");
                for (i = 1; i < times; i++) {//starts from one because we'll push the default one later anyways
                    outArr.push(solveLimitedIngredient(limitedIngredient))
                }
            }
            outArr.push(solveLimitedIngredient(limitedIngredient));
        }) : outArr.push(solveLimitedIngredient(limitedIngredients))
    return outArr
}
function solveLimitedIngredient(limitedIngredient) { //an ingredient that isn't allowed to have count
    if (typeof limitedIngredient === 'string') {
        if (limitedIngredient.includes('x '))
            return solveIngredient(limitedIngredient.split('x ')[1])
    }
    return solveIngredient(limitedIngredient)
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
    if (!ingredient) return //experimental
    console.log(ingredient + " is beeing solved");
    if (typeof ingredient === "string") {//is string, apply custom syntax
    }
    return Ingredient.of(ingredient).toJson()//experimental, the toJson can cause problems!
}
function solveFluids(fluids) {
    // if (!fluids) return []
    var outArr = [];
    (Array.isArray(fluids)) ?
        fluids.forEach((fluid) => {
            outArr.push(solveFluid(fluid));
        }) : outArr.push(solveFluid(fluids))
    return outArr
}
function solveFluid(fluid) {
    if (!fluid) return
    let amount = parseInt(500) //for some reason can't be 1000 //it turns 1000 into nothing because it thinks it's default
    if (typeof fluid === "string") {//is string, apply custom syntax
        if (fluid.includes('x ')) {
            console.log(fluid + " haz amount");
            amount = parseInt(fluid.split('x ')[0])
            fluid = fluid.split('x ')[1]
        }
    }
    // console.log('solving fluid ' + fluid + ' into ' + Fluid.of(fluid));
    return Fluid.of(fluid).withAmount(amount).toJson()
}