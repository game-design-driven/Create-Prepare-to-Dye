if (feature('Remove conjuration catalyst stuff')) {
    removeRecipe({ id: '/^.*dupe.*$/' })
    removeRecipe({ id: 'botania:mana_infusion/grass' })
    removeItem('botania:conjuration_catalyst')
}
if (feature('Make alchemy recipes use blaze burner')) {
    removeItem('botania:alchemy_catalyst')
    forEachRecipe({ type: 'botania:mana_infusion' }, recipe => {
        let json = recipe.json;
        if (json.get('catalyst') === '{"type":"block","block":"botania:alchemy_catalyst"}') {
            console.log("alchemy_catalyst " + json.get('mana'));
            addAlchemyRecipe(json.get('output'), json.get('input'), parseInt(json.get('mana') * 2))
            removeRecipe({ id: recipe.getId() })
        }
    })
}
if (feature('Manapool single ingredient crafting')) {
    // for recipe in craftingTable.getAllRecipes(){
    //     if (recipe.ingredients.length == 1){
    //         Recipes.addInfusion(recipe.output, recipe.ingredients[0], <block:minecraft:crafting_table>,settings.infusionSimpleRecipeManaCost);
    //     }
    // }
    forEachRecipe([{ type: 'minecraft:crafting_shaped' }, { type: 'minecraft:crafting_shapeless' }], recipe => {
        //if only one input
        // addInfusion(recipe.originalRecipe.getResultItem(), recipe.originalRecipe.getIngredients(), 500, 'crafting_table')
    })
}