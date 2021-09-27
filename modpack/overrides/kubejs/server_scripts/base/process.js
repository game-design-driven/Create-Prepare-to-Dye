// priority: -1
onEvent('recipes', event => {
    modpackRecipes.forEach(recipe => {
        event.custom(recipe);
    });
})

