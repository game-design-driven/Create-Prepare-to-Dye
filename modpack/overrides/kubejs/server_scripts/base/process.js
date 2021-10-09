// priority: -1
onEvent('recipes', event => {
    modpackRecipes.forEach(recipe => {
        removeAirFromRecipe(recipe)
        // removeAir(recipe)
        event.custom(recipe).id = getUniqueRecipeName(recipe)
    });
})

onEvent('server.datapack.low_priority', (event) => {
    event.addJson('botania:orechid_ore_weights/orechid.json', {
        values: botaniaOrechidList
    });
})