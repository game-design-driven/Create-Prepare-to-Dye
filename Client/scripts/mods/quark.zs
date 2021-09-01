import crafttweaker.api.mods.Mods;

Recipes.addMix(<fluid:pneumaticcraft:oil> * 250,"none",[<tag:items:forge:ores/biotite>],[<fluid:minecraft:water> * 250],1);

//remove feeding_trough
<item:quark:feeding_trough>.removeRecipe();

//change pipe recipe
<item:quark:pipe>.removeRecipe();
<item:quark:pipe>.shaped([
    [<tag:items:forge:ingots>],
    [<tag:items:forge:glass>],
    [<tag:items:forge:ingots>]
]);
(<item:quark:pipe> * 8).shaped([
    [<item:pneumaticcraft:plastic>],
    [<tag:items:forge:glass>],
    [<item:pneumaticcraft:plastic>] 
]);

//remove othere wood chests
[<item:quark:mushroom_trapped_chest>,
<item:quark:dark_oak_trapped_chest>,
<item:quark:acacia_trapped_chest>,
<item:quark:jungle_trapped_chest>,
<item:quark:birch_trapped_chest>,
<item:quark:spruce_trapped_chest>,
<item:quark:dark_oak_chest>,
<item:quark:acacia_chest>,
<item:quark:jungle_chest>,
<item:quark:birch_chest>,
<item:quark:spruce_chest>,
<item:quark:oak_chest>,
<item:quark:oak_trapped_chest>].remove();