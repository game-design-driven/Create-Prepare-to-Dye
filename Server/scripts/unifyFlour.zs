val explosionCrafting = <recipetype:pneumaticcraft:explosion_crafting>;
explosionCrafting.removeByName("pneumaticcraft:explosion_crafting/wheat_flour");
<recipetype:pneumaticcraft:pressure_chamber>.removeByName("pneumaticcraft:pressure_chamber/wheat_flour");
craftingTable.removeByName("pneumaticcraft:sourdough");
val f = <item:create:wheat_flour>;
craftingTable.addShapeless("sourdough",<item:pneumaticcraft:sourdough>,[f,f,f,f,f,f,f,f,<item:pneumaticcraft:yeast_culture_bucket>]);
<recipetype:create:mixing>.addRecipe("mixing_sourdough", "none" ,<item:pneumaticcraft:sourdough>, [f,f,f,f,f,f,f,f,f,f,f,f] ,[<fluid:pneumaticcraft:yeast_culture>*500], 50);
//faster recipe, requires more flour, but less yeast
