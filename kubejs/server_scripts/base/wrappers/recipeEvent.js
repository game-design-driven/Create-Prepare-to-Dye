//priority:10
function getRecipes() {
    ServerEvents.recipes(event => {
        return event.getRecipes()
    })
}

function addRecipe(r, type, args1) {
    ServerEvents.recipes(event => {
        return event.addRecipe(r, type, args1)
    })
}

function customRecipeFilter(filter) {
    ServerEvents.recipes(event => {
        return event.customFilter(filter)
    })
}

function forEachRecipe(filter, consumer) {
    ServerEvents.recipes(event => {
        return event.forEachRecipe(filter, consumer)
    })
}

function forEachRecipeAsync(filter, consumer) {
    ServerEvents.recipes(event => {
        return event.forEachRecipeAsync(filter, consumer)
    })
}

function countRecipes(filter) {
    ServerEvents.recipes(event => {
        return event.countRecipes(filter)
    })

}
function removeRecipeLazy(filter) {
    modpackRemovedRecipes.push(filter)
}
function removeRecipe(filter) {
    ServerEvents.recipes(event => {
        return event.remove(filter)
    })
    // if the filter object has id property then add id to list
    if (filter.id) {
        manapool_single_crafting_blacklist.push(filter.id)
    }
}
function replaceInputForRecipes(ingredient, withIngredient, filter, exact) { //test later
    if (!filter) filter = {}
    if (!exact) exact = false
    ServerEvents.recipes(event => {
        return event.replaceInput(filter, ingredient, withIngredient)
    })

}

function replaceOutputForRecipes(output, withOutput, exact, filter) {
    if (!filter) filter = {}
    if (!exact) exact = false
    ServerEvents.recipes(event => {
        return event.replaceOutput(filter, output, withOutput)
    })
}


function addCustom(Object) {
    ServerEvents.recipes(event => {
        return event.addCustom(Object)
    })
}

function setItemErrors(allowed) {
    ServerEvents.recipes(event => {
        return event.setItemErrors(allowed)
    })
}

function stage(filter, stage) {
    ServerEvents.recipes(event => {
        return event.stage(filter, stage)
    })
}