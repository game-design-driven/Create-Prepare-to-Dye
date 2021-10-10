// priority: -100
console.log('removving invalid recipes!');
modpackRecipes.forEach(recipe => {
    if (hasRemovedItems(recipe) == true) {
        modpackRecipes.splice(modpackRecipes.indexOf(recipe), 1)
    }
});
console.log('Done removing invalid recipes');
onEvent('recipes', event => {
    modpackRecipes.forEach(recipe => {
        removeAirFromRecipe(recipe)
        event.custom(recipe).id = getUniqueRecipeName(recipe)
    });
})
//add tooltip
//remove recipes
global.itemsToRemove.forEach(item => {
    // console.log("remove global "+removeRecipe({ output: item }))
    // console.log("remove global "+removeRecipe({ input: item }))
    //remove tags from item
    removeAllTagsFrom(item)
});

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