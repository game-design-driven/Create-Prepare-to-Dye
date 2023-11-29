// priority: 1
if (feature('Replace log>wood recipes with manapool recipes')) {
    forEachRecipe([{ type: 'minecraft:crafting_shaped' }], recipe => {
        if (recipe.getOriginalRecipeResult().getId().endsWith('_wood')){
            if (recipe.removed) return;
            addInfusion(recipe.getOriginalRecipeResult().getId(), recipe.getOriginalRecipeIngredients()[0], 1);
            recipe.remove();
        }
    });
    
}