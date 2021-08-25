
RecipeGenerator.addMix(<fluid:pneumaticcraft:oil> * 250,"none",[<tag:items:forge:ores/biotite>],[<fluid:minecraft:water> * 250],1);

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