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
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;
import mods.zensummoning.SummoningDirector;
import mods.zensummoning.SummoningAttempt;
import mods.zensummoning.SummoningInfo;
import mods.zensummoning.MobInfo;

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
        [<tag:items:forge:cobblestone>, <tag:items:forge:alloys/strong>, <tag:items:forge:cobblestone>], 
        [<tag:items:forge:cobblestone>, <item:minecraft:redstone>, <tag:items:forge:cobblestone>]
    ],
    <item:minecraft:dispenser> : [
        [<tag:items:forge:cobblestone>, <tag:items:forge:cobblestone>, <tag:items:forge:cobblestone>],
        [<tag:items:forge:cobblestone>, <item:minecraft:piston>, <tag:items:forge:cobblestone>],
        [<tag:items:forge:cobblestone>, <tag:items:forge:dusts/redstone>, <tag:items:forge:cobblestone>]
    ],
    <item:minecraft:hopper> : [
        [<tag:items:forge:alloys/strong>, <item:minecraft:air>, <tag:items:forge:alloys/strong>],
        [<tag:items:forge:alloys/strong>, <tag:items:forge:chests/wooden>, <tag:items:forge:alloys/strong>],
        [<item:minecraft:air>, <tag:items:forge:alloys/strong>, <item:minecraft:air>]
    ],
    <item:minecraft:torch> * 8: [
        [<item:quark:tallow>],
	    [<tag:items:forge:rods/wooden>]
    ],
    <item:minecraft:white_shulker_box> : [
        [<tag:items:forge:plastic>],
        [<tag:items:forge:chests>],
        [<tag:items:forge:plastic>]
    ],
    
    <item:minecraft:leather_helmet>.withNameAndColor("Synthetic Cap",16383998) : [
        [<tag:items:forge:plastic>,<tag:items:forge:plastic>,<tag:items:forge:plastic>],
        [<tag:items:forge:plastic>,<item:minecraft:air>,<tag:items:forge:plastic>]
    ],
    <item:minecraft:leather_chestplate>.withNameAndColor("Synthetic Tunic",16383998) : [
        [<tag:items:forge:plastic>,<item:minecraft:air>,<tag:items:forge:plastic>],
        [<tag:items:forge:plastic>,<tag:items:forge:plastic>,<tag:items:forge:plastic>],
        [<tag:items:forge:plastic>,<tag:items:forge:plastic>,<tag:items:forge:plastic>]
    ],
    <item:minecraft:leather_leggings>.withNameAndColor("Synthetic Pants",16383998) : [
        [<tag:items:forge:plastic>,<tag:items:forge:plastic>,<tag:items:forge:plastic>],
        [<tag:items:forge:plastic>,<item:minecraft:air>,<tag:items:forge:plastic>],
        [<tag:items:forge:plastic>,<item:minecraft:air>,<tag:items:forge:plastic>]
    ],
    <item:minecraft:leather_boots>.withNameAndColor("Synthetic Boots",16383998) : [
        [<tag:items:forge:plastic>,<item:minecraft:air>,<tag:items:forge:plastic>]
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
    <item:minecraft:name_tag> * 4:[<tag:items:forge:plastic>,<tag:items:forge:string>]
});


Recipes.addMix(<item:minecraft:dirt>,"none",[<item:minecraft:coarse_dirt>, <tag:items:createrun:fertilizer>]);

Recipes.addCrushing([<item:minecraft:orange_dye> % 25, <item:minecraft:red_dye> % 4,<item:minecraft:brown_dye> % 4,<item:minecraft:yellow_dye> % 4],<tag:items:forge:crops/carrot>);
Recipes.addMilling([<item:minecraft:orange_dye> * 2],<tag:items:forge:crops/carrot>);
// Recipes.addFluidToItem([<item:minecraft:slime_ball>],[<tag:items:forge:dyes/lime>*9],<fluid:minecraft:milk>);
///
val s = <tag:items:minecraft:sand>;
val g = <tag:items:forge:gunpowder>;
val r = <tag:items:forge:dyes/red>;
<recipetype:botania:runic_altar>.addRecipe("bulk_tnt", <item:minecraft:tnt>*16, 1000, [s,s,s,s,g,g,g,g,r,r,r,r,r,r,r,r]as IIngredient[]);
//stolen from prject gear coz it looks cool
<recipetype:botania:mana_infusion>.addRecipe("gear_sugarcane_to_kelp_alchemy_catalyst", <item:minecraft:kelp>, <item:minecraft:sugar_cane>, 2000, <blockstate:botania:alchemy_catalyst>);

Recipes.addFluidToItem([<item:minecraft:redstone>],[<tag:items:forge:nuggets>,<tag:items:forge:crops/nether_wart>],<fluid:create:honey>,1.0);
Recipes.addFluidToItem([<item:minecraft:redstone>],[<tag:items:forge:nuggets/gold>*32,<tag:items:forge:crops/nether_wart>*4],<fluid:minecraft:water>);

//more gold recipes
//gold from honey
Recipes.addFill(<item:minecraft:gold_ingot>,<tag:items:forge:ingots>,<fluid:create:honey> * 1000); 
<item:minecraft:gold_ore>.shaped([
    [<item:minecraft:honeycomb>,<item:minecraft:honeycomb>,<item:minecraft:honeycomb>],
    [<item:minecraft:honeycomb>,<tag:items:forge:ores>,<item:minecraft:honeycomb>],
    [<item:minecraft:honeycomb>,<item:minecraft:honeycomb>,<item:minecraft:honeycomb>]
]);
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
Recipes.addSmoking(<item:minecraft:redstone>,<item:minecraft:nether_wart_block>,1,120);
Recipes.addInfusion(<item:minecraft:red_dye> * 4, <item:minecraft:redstone>, <blockstate:minecraft:composter:level=6>);
Recipes.addInfusion(<item:minecraft:red_dye> * 4, <item:minecraft:redstone>, <blockstate:minecraft:composter:level=5>);
<item:minecraft:composter>.addTip("When almost full, can be used as a catalyst in a manapool");

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
    .addStep(<recipetype:create:filling>.factory(), (rb) => rb.require(<fluid:contenttweaker:acid> * 250));
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
    .addStep(<recipetype:create:filling>.factory(), (rb) => rb.require(<fluid:contenttweaker:acid> * 1000));
<recipetype:create:sequenced_assembly>.addRecipe(fakeemerald2);
Recipes.addBlockExplosion(<block:minecraft:emerald_ore>,<blockstate:create:copper_ore:oxidization=7>,100); // oxidization doesn't seem to work
<item:create:copper_ore>.addTip("When oxidiesed, some of the copper can crystlize into Emeralds if exposed to an extreme chemical reaction");
for flower in <tag:items:crafttweaker:regular_flowers>.getElements(){
    val f = flower.getDefaultInstance();
    Recipes.addInfusion(f*2, f, <blockstate:minecraft:bee_nest:honey_level=5>, settings.beeDupingManaCost);
}
for sapling in <tag:items:minecraft:saplings>.getElements(){
    Recipes.addInfusion(sapling.getDefaultInstance()*2, sapling.getDefaultInstance(), <blockstate:minecraft:bee_nest:honey_level=5>,settings.beeDupingManaCost);
}
<item:minecraft:bee_nest>.addTip("While full of honey, can be used as a catalyst in a manapool");


//

//prismarine_crystals are no longer mob drop and prismarine_shard disolve into them (and some dyes)
Recipes.addFluidToItem([(<item:minecraft:prismarine_crystals>).weight(7),<item:minecraft:blue_dye>,<item:minecraft:light_blue_dye>,<item:minecraft:cyan_dye>],[<tag:items:forge:dusts/prismarine>],<fluid:minecraft:water>,0,5,0);
<item:minecraft:prismarine_shard>.addTip("Warning! desolves in water");
// <entitytype:minecraft:guardian>.removeDrop(<item:minecraft:prismarine_crystals>);
<entitytype:minecraft:guardian>.addLootModifier("remove_prismarine_crystals_g", CommonLootModifiers.remove(<item:minecraft:prismarine_crystals>));
<entitytype:minecraft:elder_guardian>.addLootModifier("remove_prismarine_crystals_eg", CommonLootModifiers.remove(<item:minecraft:prismarine_crystals>));

Recipes.addFluidToItem([<item:minecraft:red_sand>],[<tag:items:forge:sand/colorless>],<fluid:create:honey>,0.20);

//lighter colors with milk

//crushing sandstone
Recipes.addCrushing([<item:minecraft:sand>,<item:minecraft:stick>%25],<tag:items:forge:sandstone>);

//
Recipes.addCrushing([<item:minecraft:gravel>,<item:minecraft:gravel>%25,<item:minecraft:diorite>%10,<item:minecraft:gray_dye>%10],<item:minecraft:cobblestone>);

//recipes to diamonds
Recipes.addCompact(<item:minecraft:diamond>,[<tag:items:forge:storage_blocks/coal>*8],[],"superheated");
Recipes.addCompact(<item:minecraft:diamond>,[<item:quark:charcoal_block>*64,<tag:items:forge:nuggets>],[],"superheated");

//recipes to obsidian
Recipes.addFluidToItem([<item:minecraft:obsidian>],[<tag:items:createrun:bucket/lava>]);

//oxidized gunpowder
val oxidizedGunpowder =<item:minecraft:gunpowder>.withTag({oxidiesed: true as bool}).withName("oxidized Gunpowder"); 
Recipes.addMix(oxidizedGunpowder,"heated",[tag.oxidiesers*4,<item:minecraft:gunpowder>]);


//summoning


SummoningDirector.addSummonInfo(
    SummoningInfo.create()
        .setCatalyst(<item:minecraft:oak_sapling>)
        .setReagents([<item:minecraft:stone>])
        .addMob(MobInfo.create()
            .setMob(<entityType:minecraft:cow>)
        )
);




SummoningDirector.addSummonInfo(
    SummoningInfo.create()
        .setCatalyst(<item:minecraft:ender_eye>)
        .setReagents([<item:minecraft:end_crystal>*4])
        .addMob(MobInfo.create()
            .setMob(<entityType:minecraft:ender_dragon>)
        )
        .setWeight(1)
    .setMutator((attempt as SummoningAttempt) => {
        if (attempt.world.raining) {
            attempt.message = "Shes comiming!";
            } else {
            attempt.success = false;
                attempt.message = "summon this in the rain!";
        }
    })
);

SummoningDirector.addSummonInfo(
    SummoningInfo.create()
        .setCatalyst(<item:minecraft:ender_eye>)
        .setReagents([<item:minecraft:end_crystal>*4])
        .addMob(MobInfo.create()
            .setMob(<entityType:minecraft:enderman>)
            .setData({
                "CustomName":"confused enderman",
                "CustomNameVisible":1
            })
        )
        .setWeight(1)
    .setMutator((attempt as SummoningAttempt) => {
        if (attempt.world.raining) {
            attempt.message = "wheh?";
             } else {
            attempt.success = false;
                attempt.message = "summon this in the rain!";
        }
        
    })
);





//elaitra recipe
Recipes.addCrushing([<item:quark:dragon_scale>%50,<item:minecraft:black_dye>%75,<item:minecraft:magenta_dye>%75],<item:minecraft:dragon_head>);

Recipes.addAltar(<item:minecraft:phantom_membrane>,[<tag:items:minecraft:beds>,<item:minecraft:cake>,<item:minecraft:cake>,<item:minecraft:leather>],1000);

(<item:minecraft:elytra>).shaped([
    [<item:minecraft:phantom_membrane>,<tag:items:forge:plastic>,<item:minecraft:phantom_membrane>],
    [<item:minecraft:phantom_membrane>,<item:minecraft:air>,<item:minecraft:phantom_membrane>],
    [<item:minecraft:phantom_membrane>,<item:minecraft:air>,<item:minecraft:phantom_membrane>]
]);

(<item:minecraft:phantom_membrane>).shaped([
    [<item:botania:phantom_ink>,<item:botania:phantom_ink>,<item:botania:phantom_ink>],
    [<item:botania:phantom_ink>,<tag:items:forge:plastic>,<item:botania:phantom_ink>],
    [<item:botania:phantom_ink>,<item:botania:phantom_ink>,<item:botania:phantom_ink>]
]);

// Recipes.addDeploy([<item:minecraft:phantom_membrane>],(<tag:items:forge:plastic>*3),<item:botania:phantom_ink>);
// var phanmemb = <recipetype:create:sequenced_assembly>.builder("fine_silky_nurdles")
//     .transitionTo((<tag:items:forge:plastic>*3).withTag({"fine_nurdles": 1 as int}))
//     .require(<tag:items:forge:plastic>*3)
//     .loops(4)
//     .addOutput(<item:minecraft:phantom_membrane>, 1)
//     .addStep(<recipetype:create:deploying>.factory(), (rb) => rb.require(<item:botania:phantom_ink>));
// <recipetype:create:sequenced_assembly>.addRecipe(phanmemb);

Recipes.addMix(<item:minecraft:ghast_tear>*4,"none",[<item:botania:rune_sloth>,<item:botania:rune_air>]);
Recipes.addMix(<fluid:minecraft:milk> * 1000,"none",[<item:minecraft:ghast_tear>]);

// Recipes.addFluidToItem(<item:minecraft:ghast_tear>.weight(1),[<item:minecraft:fermented_spider_eye>,<item:minecraft:shulker_shell>], <fluid:minecraft:water>);

//firecharge recipe with oxidized_gunpowder
Recipes.addTrade([<item:minecraft:fire_charge>*8],[<item:minecraft:blaze_powder>,<item:contenttweaker:oxidized_gunpowder> * 8,<tag:items:minecraft:coals>]);

//, id: "minecraft:ghast_tear" as string (* 1)

//metherack and nether bricks
Recipes.addCrushing([<item:minecraft:brick>%50,<item:minecraft:netherrack>%25,<item:minecraft:nether_wart>%10],<item:minecraft:nether_brick>);
Recipes.addBlockExplosion(<block:minecraft:netherrack>,<block:minecraft:red_nether_bricks>);