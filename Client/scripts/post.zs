#priority -99
for recipe in craftingTable.getAllRecipes(){
    if (recipe.ingredients.length == 1){
        Recipes.addInfusion(recipe.output, recipe.ingredients[0], <block:minecraft:crafting_table>,settings.infusionSimpleRecipeManaCost);
    }
}