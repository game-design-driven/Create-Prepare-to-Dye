#priority 0
//TODO find out why defult priority is not 0
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.recipe.Replacer;
import crafttweaker.api.item.IIngredient;
import crafttweaker.api.data.IData;
import crafttweaker.api.blocks.MCBlockState;
import crafttweaker.api.blocks.MCBlock;
import mods.botania.StateIngredient;
import stdlib.List;
import crafttweaker.api.loot.modifiers.CommonLootModifiers;

mods.jei.JEI.addItem(<item:minecraft:leather_helmet>.withNameAndColor("Synthetic Cap",16383998));
mods.jei.JEI.addItem(<item:minecraft:leather_chestplate>.withNameAndColor("Synthetic Tunic",16383998));
mods.jei.JEI.addItem(<item:minecraft:leather_leggings>.withNameAndColor("Synthetic Pants",16383998));
mods.jei.JEI.addItem(<item:minecraft:leather_boots>.withNameAndColor("Synthetic Boots",16383998));

<item:minecraft:paper>.removeCraftingRecipe();
Recipes.shaped({
    <item:minecraft:chest> : [
        [<tag:items:minecraft:planks>,<tag:items:minecraft:planks>,<tag:items:minecraft:planks>],
        [<tag:items:minecraft:planks>,<item:minecraft:air>,<tag:items:minecraft:planks>],
        [<tag:items:minecraft:planks>,<tag:items:minecraft:planks>,<tag:items:minecraft:planks>]
    ],
    <item:minecraft:chest>*4 : [
        [<tag:items:minecraft:logs>,<tag:items:minecraft:logs>,<tag:items:minecraft:logs>],
        [<tag:items:minecraft:logs>,<item:minecraft:air>,<tag:items:minecraft:logs>],
        [<tag:items:minecraft:logs>,<tag:items:minecraft:logs>,<tag:items:minecraft:logs>]
    ],
    <item:minecraft:piston>*2 : [
        [<tag:items:minecraft:planks>, <tag:items:minecraft:planks>, <tag:items:minecraft:planks>], 
        [<tag:items:forge:cobblestone>, <tag:items:crafttweaker:strong_alloys>, <tag:items:forge:cobblestone>], 
        [<tag:items:forge:cobblestone>, <item:minecraft:redstone>, <tag:items:forge:cobblestone>]
    ],
    <item:minecraft:dispenser> : [
        [<tag:items:forge:cobblestone>, <tag:items:forge:cobblestone>, <tag:items:forge:cobblestone>],
        [<tag:items:forge:cobblestone>, <item:minecraft:piston>, <tag:items:forge:cobblestone>],
        [<tag:items:forge:cobblestone>, <tag:items:forge:dusts/redstone>, <tag:items:forge:cobblestone>]
    ],
    <item:minecraft:hopper> : [
        [<tag:items:crafttweaker:strong_alloys>, <item:minecraft:air>, <tag:items:crafttweaker:strong_alloys>],
        [<tag:items:crafttweaker:strong_alloys>, <tag:items:forge:chests/wooden>, <tag:items:crafttweaker:strong_alloys>],
        [<item:minecraft:air>, <tag:items:crafttweaker:strong_alloys>, <item:minecraft:air>]
    ],
    <item:minecraft:torch> * 8: [
        [<item:quark:tallow>],
	    [<tag:items:forge:rods/wooden>]
    ],
    <item:minecraft:white_shulker_box> : [
        [<item:pneumaticcraft:plastic>],
        [<tag:items:forge:chests>],
        [<item:pneumaticcraft:plastic>]
    ],
    
    <item:minecraft:leather_helmet>.withNameAndColor("Synthetic Cap",16383998) : [
        [<item:pneumaticcraft:plastic>,<item:pneumaticcraft:plastic>,<item:pneumaticcraft:plastic>],
        [<item:pneumaticcraft:plastic>,<item:minecraft:air>,<item:pneumaticcraft:plastic>]
    ],
    <item:minecraft:leather_chestplate>.withNameAndColor("Synthetic Tunic",16383998) : [
        [<item:pneumaticcraft:plastic>,<item:minecraft:air>,<item:pneumaticcraft:plastic>],
        [<item:pneumaticcraft:plastic>,<item:pneumaticcraft:plastic>,<item:pneumaticcraft:plastic>],
        [<item:pneumaticcraft:plastic>,<item:pneumaticcraft:plastic>,<item:pneumaticcraft:plastic>]
    ],
    <item:minecraft:leather_leggings>.withNameAndColor("Synthetic Pants",16383998) : [
        [<item:pneumaticcraft:plastic>,<item:pneumaticcraft:plastic>,<item:pneumaticcraft:plastic>],
        [<item:pneumaticcraft:plastic>,<item:minecraft:air>,<item:pneumaticcraft:plastic>],
        [<item:pneumaticcraft:plastic>,<item:minecraft:air>,<item:pneumaticcraft:plastic>]
    ],
    <item:minecraft:leather_boots>.withNameAndColor("Synthetic Boots",16383998) : [
        [<item:pneumaticcraft:plastic>,<item:minecraft:air>,<item:pneumaticcraft:plastic>]
    ]
});

Recipes.shapeless({
    <item:minecraft:fire_charge>*2:[
        <tag:items:forge:dusts/redstone>,<tag:items:forge:dusts/redstone>,
        <tag:items:forge:gunpowder>,<tag:items:minecraft:coals>
    ],
    <item:minecraft:glass> : [<tag:items:forge:stained_glass>],
    <item:minecraft:paper>*2 : [
        <item:minecraft:sugar_cane>,<item:minecraft:sugar_cane>,<item:minecraft:sugar_cane>
    ],
    <item:minecraft:shulker_box> : [
        <item:minecraft:white_shulker_box>,<tag:items:forge:dyes/purple>
    ],
    <item:minecraft:paper> : [<item:pneumaticcraft:tag_filter>],
    <item:minecraft:name_tag> * 4:[<item:pneumaticcraft:plastic>,<tag:items:forge:string>]
});


Recipes.addMix(<item:minecraft:dirt>,"none",[<item:minecraft:coarse_dirt>, <tag:items:crafttweaker:fertilizer>]);

Recipes.addCrushing([<item:minecraft:orange_dye> % 50],<tag:items:forge:crops/carrot>);
Recipes.addPressureChamber([<item:minecraft:orange_dye>*4],[<tag:items:forge:crops/carrot>], 4.0);
///
val s = <tag:items:minecraft:sand>;
val g = <tag:items:forge:gunpowder>;
val r = <tag:items:forge:dyes/red>;
<recipetype:botania:runic_altar>.addRecipe("bulk_tnt", <item:minecraft:tnt>*16, 1000, [s,s,s,s,g,g,g,g,r,r,r,r,r,r,r,r]as IIngredient[]);
//stolen from prject gear coz it looks cool
<recipetype:botania:mana_infusion>.addRecipe("gear_sugarcane_to_kelp_alchemy_catalyst", <item:minecraft:kelp>, <item:minecraft:sugar_cane>, 2000, <blockstate:botania:alchemy_catalyst>);


//remove assembly from pnc
<recipetype:pneumaticcraft:heat_frame_cooling>.addRecipe("temphearredstone", <tag:items:forge:dusts/redstone>, <item:minecraft:red_dye>*4, 233);
///alter pressure valve stuff
<item:pneumaticcraft:pressure_chamber_valve>.removeRecipe();
<item:pneumaticcraft:pressure_chamber_valve>.shaped([
    [<tag:items:forge:ingots/compressed_iron>,<tag:items:forge:ingots/compressed_iron>,<tag:items:forge:ingots/compressed_iron>],
    [<tag:items:forge:ingots/compressed_iron>,<item:pneumaticcraft:pressure_tube>,<tag:items:forge:ingots/compressed_iron>],
    [<tag:items:forge:ingots/compressed_iron>,<tag:items:forge:ingots/compressed_iron>,<tag:items:forge:ingots/compressed_iron>]
]);

//more gold recipes
//gold from honey
Recipes.addFill(<item:minecraft:gold_ingot>,<tag:items:forge:ingots>,<fluid:create:honey> * 1000); 
 
var goldMaker = <recipetype:create:sequenced_assembly>.builder("seq_gold_egg")
    .transitionTo(<item:minecraft:egg>.withTag({"egg in a process": 1 as int}))
    .require(<item:minecraft:egg>)
    .loops(2)
    .addOutput(<item:minecraft:gold_nugget>, 1)
    .addOutput(<item:minecraft:white_dye>, 4)
    .addOutput(<item:minecraft:air>, 3)
    .addStep(<recipetype:create:filling>.factory(), (rb) => rb.require(<fluid:minecraft:lava> * 250));
<recipetype:create:sequenced_assembly>.addRecipe(goldMaker);
 //more ways to get red stone
Recipes.addCompact(<item:minecraft:redstone>*2, [<item:minecraft:nether_wart_block>,<item:minecraft:sugar>]);
Recipes.addPurify(<blockstate:minecraft:redstone_ore>,<blockstate:minecraft:nether_wart_block>);
Recipes.addPressureChamber([<item:minecraft:redstone>*2],[<item:minecraft:nether_wart>,<item:minecraft:gold_nugget>]);
Recipes.addSmoking(<item:minecraft:redstone>,<item:minecraft:nether_wart_block>,1,120);

//emerald recipes
<recipetype:create:crushing>.removeByName("create:crushing/emerald_ore");
var fakeemerald = <recipetype:create:sequenced_assembly>.builder("seq_emerald")
    .transitionTo(<item:minecraft:diamond>.withTag({"diamond in a process": 1 as int}))
    .require(<item:minecraft:diamond>)
    .loops(4)
    .addOutput(<item:minecraft:emerald>, 10)
    .addOutput(<item:quark:cactus_paste>, 1)
    .addOutput(<item:minecraft:coal>, 1)
    .addOutput(<item:minecraft:green_dye>, 2)
    .addStep(<recipetype:create:deploying>.factory(), (rb) => rb.require(<item:minecraft:green_dye>))
    .addStep(<recipetype:create:filling>.factory(), (rb) => rb.require(<fluid:pneumaticcraft:etching_acid> * 250));
<recipetype:create:sequenced_assembly>.addRecipe(fakeemerald);
var fakeemerald2 = <recipetype:create:sequenced_assembly>.builder("seq_emerald_mana")
    .transitionTo(<item:botania:mana_diamond>.withTag({"diamond in a process": 1 as int}))
    .require(<item:botania:mana_diamond>)
    .loops(2)
    .addOutput(<item:minecraft:emerald>, 14)
    .addOutput(<item:quark:cactus_paste>, 1)
    .addOutput(<item:minecraft:coal>, 1)
    .addOutput(<item:minecraft:green_dye>, 2)
    .addStep(<recipetype:create:deploying>.factory(), (rb) => rb.require(<item:minecraft:green_dye>*4))
    .addStep(<recipetype:create:filling>.factory(), (rb) => rb.require(<fluid:pneumaticcraft:etching_acid> * 1000));
<recipetype:create:sequenced_assembly>.addRecipe(fakeemerald2);
Recipes.addBlockExplosion(<block:minecraft:emerald_ore>,<blockstate:create:copper_ore:oxidization=7>,100); // oxidization doesn't seem to work
<item:create:copper_ore>.addTip("When oxidiesed, some of the copper can crystlize into Emeralds if exposed to an extreme chemical reaction");
for flower in <tag:items:crafttweaker:regular_flowers>.getElements(){
    val f = flower.getDefaultInstance();
    Recipes.addInfusion(f*2, f, settings.beeDupingManaCost, <blockstate:minecraft:bee_nest:honey_level=5>);
}
for sapling in <tag:items:minecraft:saplings>.getElements(){
    Recipes.addInfusion(sapling.getDefaultInstance()*2, sapling.getDefaultInstance(), settings.beeDupingManaCost, <blockstate:minecraft:bee_nest:honey_level=5>);
}
<item:minecraft:bee_nest>.addTip("While full of honey, can be used as a catalyst in a manapool");


//

//prismarine_crystals are no longer mob drop and prismarine_shard disolve into them (and some dyes)
Recipes.addFluidToItem([(<item:minecraft:prismarine_crystals>).weight(7),<item:minecraft:blue_dye>,<item:minecraft:light_blue_dye>,<item:minecraft:cyan_dye>],[<tag:items:forge:dusts/prismarine>],<fluid:minecraft:water>,5,0);
<item:minecraft:prismarine_shard>.addTip("Warning! desolves in water");
// <entitytype:minecraft:guardian>.removeDrop(<item:minecraft:prismarine_crystals>);
<entitytype:minecraft:guardian>.addLootModifier("remove_prismarine_crystals_g", CommonLootModifiers.remove(<item:minecraft:prismarine_crystals>));
<entitytype:minecraft:elder_guardian>.addLootModifier("remove_prismarine_crystals_eg", CommonLootModifiers.remove(<item:minecraft:prismarine_crystals>));

Recipes.addFluidToItem([<item:minecraft:red_sand>],[<tag:items:forge:sand/colorless>],<fluid:create:honey>);