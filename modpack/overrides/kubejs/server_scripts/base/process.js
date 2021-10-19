//priority: -100

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

onEvent('recipes', event => {
    modpackRecipes.forEach(recipe => {
        removeAirFromRecipe(recipe)
        let name = getUniqueRecipeName(recipe)
        event.custom(recipe)
    });
})

onEvent('server.datapack.low_priority', (event) => {
    event.addJson('botania:orechid_ore_weights/orechid.json', {
        values: botaniaOrechidList
    });
})