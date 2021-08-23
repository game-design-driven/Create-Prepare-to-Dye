#priority 0

import crafttweaker.api.item.IIngredient;
import mods.botania.RuneAltar;

<recipetype:morered:gatecrafting>.removeAll();

craftingTable.addShapeless("fire_charge_with_redstone",<item:minecraft:fire_charge> * 1, [
  <tag:items:forge:dusts/redstone>.asIIngredient()  ,<tag:items:forge:dusts/redstone>.asIIngredient(),
  <tag:items:forge:gunpowder>.asIIngredient(),<tag:items:minecraft:coals>.asIIngredient()]
);


craftingTable.addShaped("range_upgrade_piston",<item:pneumaticcraft:range_upgrade>,[
    [<tag:items:pneumaticcraft:upgrade_components>, <tag:items:minecraft:arrows>, <tag:items:pneumaticcraft:upgrade_components>],
    [<tag:items:minecraft:arrows>, <item:minecraft:piston>, <tag:items:minecraft:arrows>],
    [<tag:items:pneumaticcraft:upgrade_components>, <tag:items:minecraft:arrows>, <tag:items:pneumaticcraft:upgrade_components>]
]);
val s = <tag:items:minecraft:sand>;
val g = <tag:items:forge:gunpowder>;
val r = <tag:items:forge:dyes/red>;
<recipetype:botania:runic_altar>.addRecipe("bulk_tnt", <item:minecraft:tnt>*16, 1000, [s,s,s,s,g,g,g,g,r,r,r,r,r,r,r,r]as IIngredient[]);

<tag:items:minecraft:sand>.add(<item:create:limesand>);
<tag:items:pneumaticcraft:upgrade_components>.add(<item:inspirations:blue_dyed_bottle>);
<tag:items:crafttweaker:strong_alloys>.add(<tag:items:forge:ingots/manasteel>);
<tag:items:crafttweaker:strong_alloys>.add(<tag:items:forge:ingots/brass>);
<tag:items:crafttweaker:strong_alloys>.add(<tag:items:forge:ingots/compressed_iron>);

craftingTable.addShapeless("paper_ineff",<item:minecraft:paper>*2,[<item:minecraft:sugar_cane>,<item:minecraft:sugar_cane>,<item:minecraft:sugar_cane>]);
craftingTable.addShapeless("glass_reset",<item:minecraft:glass>,[<tag:items:forge:stained_glass>]);
craftingTable.addShaped("tnt_but_more",<item:minecraft:tnt> * 2, [[g, s , g], [s , g, s ], [g, s , g]]);
craftingTable.addShaped("red_alloy_wire_copper",<item:morered:red_alloy_wire> * 8, [[<tag:items:forge:ingots/copper>, <tag:items:forge:ingots/copper> , <tag:items:forge:ingots/copper>]]);
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

<recipetype:pneumaticcraft:pressure_chamber>.addRecipe("redstone_copper_pressure", [<tag:items:forge:dusts/redstone>,<tag:items:forge:ores>*8],[<item:create:copper_ore>*5,<item:minecraft:stone> *3] , 2.5);

<tag:items:crafttweaker:fertilizer>.add(<item:minecraft:bone_meal>);

<recipetype:create:mixing>.addRecipe("redstone_copper_mix", "heated",<item:create:copper_ore>*3, [<tag:items:forge:dusts/redstone>*16,<tag:items:forge:ores>,<tag:items:forge:stone>]);
<recipetype:create:mixing>.addRecipe("dirt_coursedirt", "none", <item:minecraft:dirt>, [<item:minecraft:coarse_dirt>, <tag:items:crafttweaker:fertilizer>]);


<recipetype:create:mechanical_crafting>.addRecipe("long_red_alloy", <item:morered:red_alloy_wire>*16, [[<tag:items:forge:dusts>,<tag:items:forge:ingots/copper>, <tag:items:forge:ingots/copper> , <tag:items:forge:ingots/copper>,<tag:items:forge:dusts>]]);

///---
craftingTable.addShaped("redwire_post", <item:morered:redwire_post>, [[<tag:items:forge:ingots/zinc>], [<tag:items:forge:ingots/copper>]]);
craftingTable.addShaped("redwire_post_plate", <item:morered:redwire_post_plate>, [[<item:minecraft:air>, <tag:items:forge:ingots/zinc>, <item:minecraft:air>], [<item:minecraft:air>, <tag:items:forge:ingots/copper>, <item:minecraft:air>], [<tag:items:forge:quarter_slabs/smooth_stone>, <tag:items:forge:quarter_slabs/smooth_stone>, <tag:items:forge:quarter_slabs/smooth_stone>]]);
craftingTable.addShaped("redwire_post_relay_plate", <item:morered:redwire_post_relay_plate>, [[<item:minecraft:air>, <tag:items:forge:ingots/zinc>, <item:minecraft:air>], [<tag:items:forge:dusts/redstone>, <tag:items:forge:ingots/copper>, <tag:items:forge:dusts/redstone>], [<tag:items:forge:quarter_slabs/smooth_stone>, <tag:items:forge:quarter_slabs/smooth_stone>, <tag:items:forge:quarter_slabs/smooth_stone>]]);

//TODO remove inspirations pipe
//TODO add more recipes to belts ie leather, but not as good as kelp
//TODO quark pipe from iron sheet instead of iron and make less
//TODO quark pipe from plastic sheet make more
//TODO framed glass from different metal
//TODO quark limestone as create one looks better
//TODO shulker shell recipe without end
//TODO create punp addShapeless
//TODO sourdough from dough
//TODO better zinc andesite recipe
//TODO toms storage
//TODO add stone plate instead of stone for repeater and other recipes
//TODO find better recipes for morered gates
//TODO add alternate plastic recipe to any stone plate recipe by putting them both in a tag
