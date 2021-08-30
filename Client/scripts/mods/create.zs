import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
import crafttweaker.api.fluid.IFluidStack;
import crafttweaker.api.item.IIngredientWithAmount;
import mods.botania.Orechid;

//flour stuffs
craftingTable.removeByName("create:crafting/appliances/dough");
RecipeGenerator.addInfusion(<item:create:dough>*2,<item:create:wheat_flour>,1000,<block:minecraft:nether_gold_ore>);
RecipeGenerator.addExplosion([<item:create:wheat_flour>*8],<item:minecraft:wheat>,50);



//removing zinc
// Orechid.removeOreWeight(state as MCBlockState) as void

Orechid.main.removeOreWeight(<blockstate:create:zinc_ore>);
[
    <item:create:crushed_zinc_ore>,
    <item:create:zinc_nugget>,
    <item:create:zinc_block>,
    <item:create:zinc_ore>
].remove();
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

RecipeGenerator.addMix(<item:create:copper_ore>*3,"heated",[<tag:items:forge:dusts/redstone>*9,<tag:items:forge:ores>,<tag:items:forge:stone>]);
// <recipetype:pneumaticcraft:pressure_chamber>.addRecipe("redstone_copper_pressure", [<tag:items:forge:dusts/redstone>,<tag:items:forge:ores>*8],[<item:create:copper_ore>*5,<item:minecraft:stone> *3] , 2.5);
RecipeGenerator.addPressureChamber(
    [<item:create:copper_ore>*5,<item:minecraft:stone> *3],
    [<tag:items:forge:dusts/redstone>,<tag:items:forge:ores>*8], 2.5
); 



///
//temp recipe for porting from zinc
RecipeGenerator.addCrushing([
    <item:minecraft:gold_nugget> % 50,
    <item:minecraft:iron_nugget> % 25,
    <item:create:copper_nugget> % 25,
    <item:minecraft:andesite> % 10
],<tag:items:forge:ingots/zinc>);