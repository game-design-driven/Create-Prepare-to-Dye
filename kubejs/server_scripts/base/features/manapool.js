// priority: -1
if (feature('Remove conjuration catalyst stuff')) {
    removeRecipe({ id: '/^.*dupe.*$/' })
    removeRecipe({ id: 'botania:mana_infusion/grass' })
    removeItem('botania:conjuration_catalyst')
}
if (feature('Make alchemy recipes use blaze burner')) {
    removeItem('botania:alchemy_catalyst')
    forEachRecipe({ type: 'botania:mana_infusion' }, recipe => {
        let json = recipe.json;
        // if it has the catalyst property
        if (json.get('catalyst') === '{"type":"block","block":"botania:alchemy_catalyst"}') {
            
            let ingredients = recipe.getOriginalRecipeIngredients();
            if (ingredients.length != 1) return;
    
            let resultId = recipe.getOriginalRecipeResult().getId();
            let ingredientId = ingredients[0].getItemIds()[0];
            
            if (itemsToRemove[resultId] || itemsToRemove[ingredientId]) return;

            addAlchemyRecipe(recipe.getOriginalRecipeResult(), ingredients[0], parseInt(json.get('mana')))
            recipe.remove()
        }
    })
}

if (feature('Manapool-crafting-table recipes for single ingredient crafting')) {
    forEachRecipe([{ type: 'minecraft:crafting_shapeless' }], recipe => {
        let ingredients = recipe.getOriginalRecipeIngredients();
        if (ingredients.length != 1) return;

        let resultId = recipe.getOriginalRecipeResult().getId();
        let ingredientId = ingredients[0].getItemIds()[0];

        let hasRemovedItems = [resultId, ingredientId].some(id => itemsToRemove[id]);
        if (hasRemovedItems) return;

        if (manapool_single_crafting_blacklist.includes(recipe.getId())) return;
        // console.info('recipe: ' + resultId + ' ' + ingredientId + ' ' + recipe.getId()+ 'removed: ' + recipe.removed)
        if (recipe.removed) return;
        addInfusion(recipe.getOriginalRecipeResult(), ingredients[0], 0, 'ptdye:mechanical_device');
        // console.info('Adding infusion for "' + resultId + '" and "' + ingredientId+'"');
    });
}

