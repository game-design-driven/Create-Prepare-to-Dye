Ingredient.of('@refinedstorage').stacks.forEach(item => {
    
});
// val keep = [
//     <item:refinedstorage:silicon>,
//     <item:refinedstorage:controller>,
//     <item:refinedstorage:grid>,
//     <item:refinedstorage:crafting_grid>,
//     <item:refinedstorage:storage_monitor>,
//     <item:refinedstorage:external_storage>,
//     <item:refinedstorage:cable>,
// ];
// val hideAndRemoveRecipes = [
//     <item:refinedstorage:white_grid>,
//     <item:refinedstorage:orange_grid>,
//     <item:refinedstorage:magenta_grid>,
//     <item:refinedstorage:yellow_grid>,
//     <item:refinedstorage:lime_grid>,
//     <item:refinedstorage:pink_grid>,
//     <item:refinedstorage:gray_grid>,
//     <item:refinedstorage:light_gray_grid>,
//     <item:refinedstorage:cyan_grid>,
//     <item:refinedstorage:purple_grid>,
//     <item:refinedstorage:blue_grid>,
//     <item:refinedstorage:brown_grid>,
//     <item:refinedstorage:green_grid>,
//     <item:refinedstorage:red_grid>,
//     <item:refinedstorage:black_grid>,
//     <item:refinedstorage:white_crafting_grid>,
//     <item:refinedstorage:orange_crafting_grid>,
//     <item:refinedstorage:magenta_crafting_grid>,
//     <item:refinedstorage:yellow_crafting_grid>,
//     <item:refinedstorage:lime_crafting_grid>,
//     <item:refinedstorage:pink_crafting_grid>,
//     <item:refinedstorage:gray_crafting_grid>,
//     <item:refinedstorage:light_gray_crafting_grid>,
//     <item:refinedstorage:cyan_crafting_grid>,
//     <item:refinedstorage:purple_crafting_grid>,
//     <item:refinedstorage:blue_crafting_grid>,
//     <item:refinedstorage:brown_crafting_grid>,
//     <item:refinedstorage:green_crafting_grid>,
//     <item:refinedstorage:red_crafting_grid>,
//     <item:refinedstorage:black_crafting_grid>
// ];

// for item in loadedMods.getMod("refinedstorage").items{
//     var remove = true;
//     for itemToKeep in keep{
//         if (itemToKeep==item){
//             remove = false;
//             itemToKeep.removeRecipe();
//         }
//     }
//     for toHide in hideAndRemoveRecipes{
//         if (toHide==item){
//             remove=false;
//             toHide.hide();
//         }
//     }
//     if (remove){
//         item.remove();
//     }
// }
// //remove silicon
// <item:refinedstorage:silicon>.remove();
// //cable recipes
// (<item:refinedstorage:cable>*4).shaped([
//     [<item:kubejs:plastic>,<item:kubejs:plastic>,<item:kubejs:plastic>],
//     [<item:create:polished_rose_quartz>,<item:create:polished_rose_quartz>,<item:create:polished_rose_quartz>],
//     [<item:kubejs:plastic>,<item:kubejs:plastic>,<item:kubejs:plastic>]
// ]);

// (<item:refinedstorage:cable>).shaped([
//     [<tag:items:forge:glass>,<tag:items:forge:glass>,<tag:items:forge:glass>],
//     [<item:create:polished_rose_quartz>,(<tag:items:forge:gems/diamond> as IIngredient)|(<tag:items:forge:gems/lapis> as IIngredient),<item:create:polished_rose_quartz>],
//     [<tag:items:forge:glass>,<tag:items:forge:glass>,<tag:items:forge:glass>]
// ]);

// var cableAssembly = <recipetype:create:sequenced_assembly>.builder("cable_ass")
//     .transitionTo((<item:morered:red_alloy_wire>*64).withTag({"cable in process": 1 as int}))
//     .require(<item:morered:red_alloy_wire>*64)
//     .loops(6)
//     .addOutput(<item:refinedstorage:cable>*32, 1)
//     .addStep(<recipetype:create:deploying>.factory(), (rb) => rb.require(<item:kubejs:plastic>));
// <recipetype:create:sequenced_assembly>.addRecipe(cableAssembly);

// (<item:refinedstorage:external_storage>*4).shapeless([<item:refinedstorage:cable>,<tag:items:forge:ender_pearls>,<item:refinedstorage:cable>]);
// (<item:refinedstorage:external_storage>*8).shaped([
//     [<item:refinedstorage:cable>,<item:refinedstorage:cable>,<item:refinedstorage:cable>],
//     [<item:refinedstorage:cable>,<item:minecraft:ender_eye>,<item:refinedstorage:cable>],
//     [<item:refinedstorage:cable>,<item:refinedstorage:cable>,<item:refinedstorage:cable>]
// ]);

// <item:refinedstorage:controller>.shaped([
//     [<item:create:andesite_casing>,<tag:items:forge:ingots/copper>,<item:create:andesite_casing>],
//     [<tag:items:forge:ingots/copper>,<tag:items:forge:dusts/mana>,<tag:items:forge:ingots/copper>],
//     [<item:create:andesite_casing>,<tag:items:forge:ingots/copper>,<item:create:andesite_casing>]
// ]);

// <item:refinedstorage:grid>.shaped([
//     [<item:create:andesite_casing>,<item:create:andesite_casing>,<tag:items:forge:glass>],
//     [<tag:items:forge:ingots/copper>,<tag:items:forge:dusts/mana>,<tag:items:forge:glass>],
//     [<item:create:andesite_casing>,<item:create:andesite_casing>,<tag:items:forge:glass>]
// ]);

// <item:refinedstorage:storage_monitor>.shaped([
//     [<item:create:andesite_casing>,<item:create:andesite_casing>,<tag:items:forge:glass>],
//     [<tag:items:forge:ingots/copper>,<tag:items:forge:dusts/mana>,<item:minecraft:comparator>],
//     [<item:create:andesite_casing>,<item:create:andesite_casing>,<tag:items:forge:glass>]
// ]);

// Recipes.addItemExplosion([<item:refinedstorage:crafting_grid>],[<tag:items:forge:screen>,<tag:items:charm:crafting_tables>,<tag:items:forge:slimeballs>]);
// Recipes.addTrade([<item:refinedstorage:crafting_grid>],[<tag:items:forge:screen>,<tag:items:charm:crafting_tables>,<item:minecraft:bread>]);