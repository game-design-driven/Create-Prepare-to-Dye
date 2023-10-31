// priority: -100
onEvent('recipes', event => {
    modpackRecipes.forEach(recipe => {
        removeAirFromRecipe(recipe)
        if (hasRemovedItems(recipe)==true) {
            console.log("didn't add recipe " + recipe.output);
        } else {
            event.custom(recipe).id = getUniqueRecipeName(recipe)
        }
    });
})

onEvent('server.datapack.low_priority', (event) => {
    event.addJson('botania:orechid_ore_weights/orechid.json', {
        values: botaniaOrechidList
    });
})



function hasRemovedItems(recipe) {
    let r = false;
    global.itemsToRemove.forEach(item => {
        if (Array.isArray(recipe.ingredients)) {
            recipe.ingredients.forEach(ingredient => {
                if ((ingredient + "").includes(item)) {
                    console.log("This recipe should be removed! " + recipe.ingredients);
                    r = true
                }
            });
        }
        if (recipe.output) {
            if ((recipe.output + "").includes(item)) {
                console.log("This recipe should be removed! " + recipe.output);
                r = true
            }
        }
    });
    return r
}