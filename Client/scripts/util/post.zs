#priority -99
for recipe in craftingTable.getAllRecipes(){
    if (recipe.ingredients.length == 1){
        RecipeGenerator.addInfusion(recipe.output, recipe.ingredients[0], settings.infusionSimpleRecipeManaCost, <block:minecraft:crafting_table>);
    }
}