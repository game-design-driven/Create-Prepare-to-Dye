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
if (feature('Add stripping recipes to logs that dont have them')) {
    addItemApplication('botania:stripped_livingwood_log','botania:livingwood_log', '#forge:tools/axes')
    addItemApplication('botania:glimmering_stripped_livingwood_log','botania:glimmering_livingwood_log', '#forge:tools/axes')
    addItemApplication('botania:stripped_dreamwood_log','botania:dreamwood_log', '#forge:tools/axes')
    addItemApplication('botania:glimmering_stripped_dreamwood_log','botania:glimmering_dreamwood_log', '#forge:tools/axes')
    addItemApplication('quark:stripped_blossom_log','quark:blossom_log', '#forge:tools/axes')
}