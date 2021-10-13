//priority:10
function getRecipes() {
    onEvent('recipes', event => {
        return event.getRecipes()
    })
}

function addRecipe(r, type, args1) {
    onEvent('recipes', event => {
        return event.addRecipe(r, type, args1)
    })
}

function customRecipeFilter(filter) {
    onEvent('recipes', event => {
        return event.customFilter(filter)
    })
}

function forEachRecipe(filter, consumer) {
    onEvent('recipes', event => {
        return event.forEachRecipe(filter, consumer)
    })
}

function forEachRecipeAsync(filter, consumer) {
    onEvent('recipes', event => {
        return event.forEachRecipeAsync(filter, consumer)
    })
}

function countRecipes(filter) {
    onEvent('recipes', event => {
        return event.countRecipes(filter)
    })

}
function removeRecipe(filter) {
    onEvent('recipes', event => {
        return event.remove(filter)
    })
}
function replaceInputForRecipes(ingredient, withIngredient, filter, exact) { //test later
    if (!filter) filter = {}
    if (!exact) exact = false
    onEvent('recipes', event => {
        return event.replaceInput(filter, ingredient, withIngredient, exact)
    })

}

function replaceOutputForRecipes(output, withOutput, exact, filter) {
    if (!filter) filter = {}
    if (!exact) exact = false
    onEvent('recipes', event => {
        return event.replaceOutput(filter, output, withOutput, exact)
    })
}


function addCustomRecipe(Object, id) {
    onEvent('recipes', event => {
        return event.addCustom(Object).id = id;
    })
}

function setItemErrors(allowed) {
    onEvent('recipes', event => {
        return event.setItemErrors(allowed)
    })
}

function stage(filter, stage) {
    onEvent('recipes', event => {
        return event.stage(filter, stage)
    })
}

//modpack:

function addModpackRecipe(recipeJson) {
    // recipeJson = removeAirFromRecipe(recipeJson);
    modpackRecipes.push(recipeJson)
}