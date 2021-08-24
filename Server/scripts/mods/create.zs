import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
import crafttweaker.api.fluid.IFluidStack;

//removing zinc
<item:create:zinc_ingot>.removeAndReplace(<item:minecraft:gold_ingot>);
RecipeGenerator.removeMix(<item:create:brass_ingot>);
RecipeGenerator.addMix(<item:create:brass_ingot>, "heated",[<tag:items:forge:ingots/copper>,<tag:items:forge:ingots/gold>]);

RecipeGenerator.shaped({
    <item:create:copper_ore>: [
        [<item:minecraft:air>, <tag:items:forge:dusts/redstone>, <item:minecraft:air>],
        [<tag:items:forge:dusts/redstone>, <tag:items:forge:ores>, <tag:items:forge:dusts/redstone>],
        [<item:minecraft:air>, <tag:items:forge:dusts/redstone>, <item:minecraft:air>]
    ]
});

RecipeGenerator.addMix(<item:create:copper_ore>*3,"heated",[<tag:items:forge:dusts/redstone>*16,<tag:items:forge:ores>,<tag:items:forge:stone>]);
// <recipetype:pneumaticcraft:pressure_chamber>.addRecipe("redstone_copper_pressure", [<tag:items:forge:dusts/redstone>,<tag:items:forge:ores>*8],[<item:create:copper_ore>*5,<item:minecraft:stone> *3] , 2.5);
RecipeGenerator.addPressureChamber([<item:create:copper_ore>*5,<item:minecraft:stone> *3],[<tag:items:forge:dusts/redstone>,<tag:items:forge:ores>*8], 2.5); 