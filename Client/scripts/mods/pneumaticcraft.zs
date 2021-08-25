import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
import crafttweaker.api.fluid.IFluidStack;

//remove stone base
<item:pneumaticcraft:stone_base>.removeAndReplace(<tag:items:forge:stone>);

//replace turbine blade, clutter intermediry
<item:pneumaticcraft:turbine_blade>.remove();
<item:pneumaticcraft:turbine_rotor>.removeRecipe();
<item:pneumaticcraft:flow_detector_module>.removeRecipe();
<recipeType:pneumaticcraft:pressure_chamber>.removeByName("pneumaticcraft:pressure_chamber/turbine_blade");
RecipeGenerator.addPressureChamber([<item:pneumaticcraft:turbine_rotor>],[<tag:items:forge:dusts/redstone>*6,<tag:items:forge:ingots/gold>*3,<item:pneumaticcraft:ingot_iron_compressed>]);
RecipeGenerator.addPressureChamber([<item:pneumaticcraft:flow_detector_module>],[<tag:items:forge:dusts/redstone>*9,<tag:items:forge:ingots/gold>*4,<item:pneumaticcraft:pressure_tube>]);


//remove pneumaticraft flour
<recipeType:pneumaticcraft:pressure_chamber>.removeByName("pneumaticcraft:pressure_chamber/wheat_flour");
<item:pneumaticcraft:wheat_flour>.removeAndReplace(<item:create:wheat_flour>);
<item:pneumaticcraft:sourdough>.removeRecipe();

//make compressed iron effiecieent with explosions, it's cool!
<recipetype:pneumaticcraft:explosion_crafting>.removeByName("pneumaticcraft:explosion_crafting/compressed_iron_block");
<recipetype:pneumaticcraft:explosion_crafting>.removeByName("pneumaticcraft:explosion_crafting/compressed_iron_ingot");
RecipeGenerator.addPressureChamber([<item:pneumaticcraft:ingot_iron_compressed>],[<item:minecraft:iron_ingot>]);
RecipeGenerator.addExplosion([<item:pneumaticcraft:ingot_iron_compressed>],<item:minecraft:iron_ingot>);
RecipeGenerator.addExplosion([<item:pneumaticcraft:compressed_iron_block>],<item:minecraft:iron_block>);


RecipeGenerator.addMix(<item:pneumaticcraft:sourdough>,"none",[<item:create:wheat_flour>],[<fluid:pneumaticcraft:yeast_culture> * 1000]);
RecipeGenerator.addMix(<item:pneumaticcraft:sourdough>*2,"none",[<item:create:dough>],[<fluid:pneumaticcraft:yeast_culture> * 1000]);
RecipeGenerator.shapeless({
    <item:pneumaticcraft:sourdough> :[<item:create:wheat_flour>,<item:pneumaticcraft:yeast_culture_bucket>],
    <item:pneumaticcraft:sourdough>*2 :[<item:create:dough>,<item:pneumaticcraft:yeast_culture_bucket>],
});
RecipeGenerator.shaped({
    <item:pneumaticcraft:range_upgrade> :[
        [<tag:items:pneumaticcraft:upgrade_components>, <tag:items:minecraft:arrows>, <tag:items:pneumaticcraft:upgrade_components>],
        [<tag:items:minecraft:arrows>, <item:minecraft:piston>, <tag:items:minecraft:arrows>],
        [<tag:items:pneumaticcraft:upgrade_components>, <tag:items:minecraft:arrows>, <tag:items:pneumaticcraft:upgrade_components>]
    ]
});



//make veg oil from bad seeds
RecipeGenerator.addMix(<fluid:pneumaticcraft:vegetable_oil>*150,"none", [<tag:items:crafttweaker:anoyying_seeds>]);

