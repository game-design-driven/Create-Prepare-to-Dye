// priority: -100
ServerEvents.recipes(event => {
    modpackRecipes.forEach(recipe => {
        removeAirFromRecipe(recipe)
        if (hasRemovedItems(recipe)==true) {
            console.log("didn't add recipe " + recipe.output + " because it has removed items");
        } else {
            let r = event.custom(recipe)
            r.id = getUniqueRecipeName(r)
        }
    });
    modpackRemovedRecipes.forEach(recipeFilter => {
        event.remove(recipeFilter)
    });
})

console.info("All the removed and hidden items: "+JSON.stringify(global.itemsToHide))

// onEvent('server.datapack.low_priority', (event) => {
//     event.addJson('botania:orechid_ore_weights/orechid.json', {
//         values: botaniaOrechidList
//     });
// }) not sure why I added it here need to look into it



function hasRemovedItems(recipe) {
    let r = false;
    global.itemsToRemove.forEach(item => {
        if (Array.isArray(recipe.ingredients)) {
            recipe.ingredients.forEach(ingredient => {
                if ((ingredient + "").includes(item + "")) {
                    console.log("This recipe should be removed! " + recipe.ingredients);
                    r = true
                }
            });
        }
        if (recipe.output) {
            if ((recipe.output + "").includes(item+"")) {
                console.log("This recipe should be removed! " + recipe.output);
                r = true
            }
        }
    });
    return r
}