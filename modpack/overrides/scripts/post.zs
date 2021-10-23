#priority -99
for recipe in craftingTable.getAllRecipes(){
    if (recipe.ingredients.length == 1){
        Recipes.addInfusion(recipe.output, recipe.ingredients[0], <block:minecraft:crafting_table>,settings.infusionSimpleRecipeManaCost);
    }
}
// for recipe in <recipetype:botania:mana_infusion>.getAllRecipes(){
//     for recipe2 in <recipetype:botania:mana_infusion>.getAllRecipes(){
//         if (recipe.ingredients==recipe2.ingredients&&recipe.output==recipe2.output&&recipe!=recipe2){
//             mods.jei.JEI.hideRecipe("botania:mana_pool", recipe2.id);
//             print("PPP V"+ recipe2.id +"  ------- "+recipe.id);
//         }
//     }
// }
// print ("TESSING! "+Recipes.times);
// Recipes.times++;
// for id in Recipes.hides{
//     print("TESS: "+id);
//     mods.jei.JEI.hideRecipe("botania:mana_pool", "crafttweaker:"+id);
//     print("TESS: finished");
// }