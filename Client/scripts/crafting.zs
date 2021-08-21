import crafttweaker.api.item.IIngredient;
import mods.botania.RuneAltar;

craftingTable.addShapeless(
  "fire_charge_with_redstone",<item:minecraft:fire_charge> * 1, [
<tag:items:forge:dusts/redstone>.asIIngredient()  ,<tag:items:forge:dusts/redstone>.asIIngredient(),
<tag:items:forge:gunpowder>.asIIngredient(),<tag:items:minecraft:coals>.asIIngredient()]);

<tag:items:pneumaticcraft:upgrade_components>.add(<item:inspirations:blue_dyed_bottle>);
<tag:items:minecraft:sand>.add(<item:create:limesand>);
craftingTable.addShaped("range_upgrade_piston",<item:pneumaticcraft:range_upgrade>,[
    [<tag:items:pneumaticcraft:upgrade_components>, <tag:items:minecraft:arrows>, <tag:items:pneumaticcraft:upgrade_components>],
    [<tag:items:minecraft:arrows>, <item:minecraft:piston>, <tag:items:minecraft:arrows>],
    [<tag:items:pneumaticcraft:upgrade_components>, <tag:items:minecraft:arrows>, <tag:items:pneumaticcraft:upgrade_components>]
]);
val s = <tag:items:minecraft:sand>;
val g = <tag:items:forge:gunpowder>;
val r = <tag:items:forge:dyes/red>;
<recipetype:botania:runic_altar>.addRecipe("bulk_tnt", <item:minecraft:tnt>*16, 1000, [s,s,s,s,g,g,g,g,r,r,r,r,r,r,r,r]as IIngredient[]);

<tag:items:crafttweaker:strong_alloys>.add(<tag:items:forge:ingots/manasteel>);
<tag:items:crafttweaker:strong_alloys>.add(<tag:items:forge:ingots/brass>);
<tag:items:crafttweaker:strong_alloys>.add(<tag:items:forge:ingots/compressed_iron>);

craftingTable.addShaped("tnt_but_more",<item:minecraft:tnt> * 2, [[g, s , g], [s , g, s ], [g, s , g]]);
craftingTable.addShapeless("paper_ineff",<item:minecraft:paper>*2,[<item:minecraft:sugar_cane>,<item:minecraft:sugar_cane>,<item:minecraft:sugar_cane>]);
craftingTable.addShapeless("glass_reset",<item:minecraft:glass>,[<tag:items:forge:stained_glass>]);
val cobble = <tag:items:forge:cobblestone>;
craftingTable.addShaped("dispenser",<item:minecraft:dispenser>,
    [[cobble, cobble, cobble],
    [cobble, <item:minecraft:piston>, cobble],
    [cobble, <tag:items:forge:dusts/redstone>, cobble]
]);
craftingTable.addShaped("minecart_eff",<item:minecraft:minecart>*2,[
    [<tag:items:crafttweaker:strong_alloys>, <item:minecraft:air>, <tag:items:crafttweaker:strong_alloys>],
    [<tag:items:crafttweaker:strong_alloys>, <tag:items:crafttweaker:strong_alloys>, <tag:items:crafttweaker:strong_alloys>]
]);
craftingTable.addShaped("piston", <item:minecraft:piston>, [[<tag:items:minecraft:planks>, <tag:items:minecraft:planks>, <tag:items:minecraft:planks>], [<tag:items:forge:cobblestone>, <tag:items:forge:ingots/iron>, <tag:items:forge:cobblestone>], [<tag:items:forge:cobblestone>, <item:minecraft:redstone>, <tag:items:forge:cobblestone>]]);
craftingTable.addShaped("piston_eff", <item:minecraft:piston>*2, [[<tag:items:minecraft:planks>, <tag:items:minecraft:planks>, <tag:items:minecraft:planks>], [<tag:items:forge:cobblestone>, <tag:items:crafttweaker:strong_alloys>, <tag:items:forge:cobblestone>], [<tag:items:forge:cobblestone>, <item:minecraft:redstone>, <tag:items:forge:cobblestone>]]);
craftingTable.addShaped("hopper_eff",<item:minecraft:hopper>*2,[
    [<tag:items:forge:ingots/iron>, <item:minecraft:air>, <tag:items:forge:ingots/iron>],
    [<tag:items:forge:ingots/iron>, <tag:items:forge:chests/wooden>, <tag:items:forge:ingots/iron>],
    [<item:minecraft:air>, <tag:items:forge:ingots/iron>, <item:minecraft:air>]]);
craftingTable.addShaped("hopper",<item:minecraft:hopper>,[
  [<tag:items:crafttweaker:strong_alloys>, <item:minecraft:air>, <tag:items:crafttweaker:strong_alloys>],
  [<tag:items:crafttweaker:strong_alloys>, <tag:items:forge:chests/wooden>, <tag:items:crafttweaker:strong_alloys>],
  [<item:minecraft:air>, <tag:items:crafttweaker:strong_alloys>, <item:minecraft:air>]]);
<tag:items:crafttweaker:anoyying_seeds>.add(<item:inspirations:cactus_seeds>);
<tag:items:crafttweaker:anoyying_seeds>.add(<item:inspirations:sugar_cane_seeds>);
<recipetype:create:mixing>.addRecipe("veg", "none", <fluid:pneumaticcraft:vegetable_oil> * 150, [<tag:items:crafttweaker:anoyying_seeds>]);
//add more recipes for shulker shell (that require itself maybe)
craftingTable.addShaped("torch_tallow",<item:minecraft:torch> * 8,
	[[<item:quark:tallow>],
	 [<tag:items:forge:rods/wooden>]]);

//redstone from cooper
craftingTable.addShaped("redstone_copper", <item:create:copper_ore>, [
  [<item:minecraft:air>, <tag:items:forge:dusts/redstone>, <item:minecraft:air>],
  [<tag:items:forge:dusts/redstone>, <tag:items:forge:ores>, <tag:items:forge:dusts/redstone>],
  [<item:minecraft:air>, <tag:items:forge:dusts/redstone>, <item:minecraft:air>]
]);
<recipetype:create:mixing>.addRecipe("redstone_copper_mix", "heated",<item:create:copper_ore>*3, [<tag:items:forge:dusts/redstone>*16,<tag:items:forge:ores>,<tag:items:forge:stone>]);

<recipetype:pneumaticcraft:pressure_chamber>.addRecipe("redstone_copper_pressure", [<tag:items:forge:dusts/redstone>,<tag:items:forge:ores>*8],[<item:create:copper_ore>*5,<item:minecraft:stone> *3] , 2.5);

//should remove inspirations pipe
