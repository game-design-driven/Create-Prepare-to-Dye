
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;


<item:botania:mana_fluxfield>.remove();
[<item:botania:white_mystical_flower>,
<item:botania:orange_mystical_flower>,
<item:botania:magenta_mystical_flower>,
<item:botania:light_blue_mystical_flower>,
<item:botania:yellow_mystical_flower>,
<item:botania:lime_mystical_flower>,
<item:botania:pink_mystical_flower>,
<item:botania:gray_mystical_flower>,
<item:botania:light_gray_mystical_flower>,
<item:botania:cyan_mystical_flower>,
<item:botania:purple_mystical_flower>,
<item:botania:blue_mystical_flower>,
<item:botania:brown_mystical_flower>,
<item:botania:green_mystical_flower>,
<item:botania:red_mystical_flower>].addTip("Use Floral Fertilizer to acquire");

//ideas: yeast, mixer,


Recipes.addMix(<item:botania:fertilizer>,"none",[<tag:items:botania:petals>*8,<item:minecraft:bone_meal>]);
Recipes.addFill(<item:botania:fertilizer>,<item:minecraft:bone_meal>,<fluid:minecraft:milk>* 100);
// val aRealFluid as FluidIngredient= <fluid:create:potion>.withTag({Potion: "minecraft:healing" as string});
// Recipes.addThermo(
//     <item:botania:fertilizer> as IItemStack,
//     <fluid:minecraft:water> as IFluidStack,
//     <item:minecraft:bone_meal> as IIngredient,
//     <fluid:minecraft:water> as FluidIngredient,
//     2, 0,2147483647,1.0,false
// ); 

//purge of runes goes here
[<item:quark:white_rune>,
<item:quark:orange_rune>,
<item:quark:magenta_rune>,
<item:quark:light_blue_rune>,
<item:quark:yellow_rune>,
<item:quark:lime_rune>,
<item:quark:pink_rune>,
<item:quark:gray_rune>,
<item:quark:light_gray_rune>,
<item:quark:cyan_rune>,
<item:quark:purple_rune>,
<item:quark:blue_rune>,
<item:quark:brown_rune>,
<item:quark:green_rune>,
<item:quark:red_rune>,
<item:quark:black_rune>,
<item:quark:rainbow_rune>,
<item:quark:blank_rune>
].remove();

//purge of glass shards
[<item:quark:clear_shard>,
<item:quark:dirty_shard>,
<item:quark:white_shard>,
<item:quark:orange_shard>,
<item:quark:magenta_shard>,
<item:quark:light_blue_shard>,
<item:quark:yellow_shard>,
<item:quark:lime_shard>,
<item:quark:pink_shard>,
<item:quark:gray_shard>,
<item:quark:light_gray_shard>,
<item:quark:cyan_shard>,
<item:quark:purple_shard>,
<item:quark:blue_shard>,
<item:quark:brown_shard>,
<item:quark:green_shard>,
<item:quark:red_shard>,
<item:quark:black_shard>
].remove();

//purge music discks quark
[<item:quark:music_disc_drips>,
<item:quark:music_disc_ocean>,
<item:quark:music_disc_rain>,
<item:quark:music_disc_wind>,
<item:quark:music_disc_fire>,
<item:quark:music_disc_clock>,
<item:quark:music_disc_crickets>,
<item:quark:music_disc_chatter>
].remove();

val petals as IIngredient[] =[
    <item:botania:black_petal>,
    <item:botania:red_petal>,
    <item:botania:green_petal>,
    <item:botania:brown_petal>,
    <item:botania:blue_petal>,
    <item:botania:purple_petal>,
    <item:botania:cyan_petal>,
    <item:botania:light_gray_petal>,
    <item:botania:gray_petal>,
    <item:botania:pink_petal>,
    <item:botania:lime_petal>,
    <item:botania:yellow_petal>,
    <item:botania:light_blue_petal>,
    <item:botania:magenta_petal>,
    <item:botania:orange_petal>,
    <item:botania:white_petal>
];

//crushing recipoe to pettals
Recipes.addCrushing([<item:minecraft:fern>%25,<item:minecraft:grass>%25,<item:minecraft:seagrass>%25,<item:minecraft:wheat_seeds>%10,<item:botania:mana_powder>%5],<tag:items:botania:petals>);

//replace red quartz
//<item:botania:quartz_red>.removeAndReplace(<item:create:rose_quartz>);

//tiara recipes

(<item:botania:flight_tiara>.withTag({"variant": 1 as int})).shapeless([<item:botania:flight_tiara>.withTag({"variant": 0 as int}),<item:minecraft:quartz_block>]);
craftingTable.removeByName("botania:flighttiara_1");

(<item:botania:flight_tiara>.withTag({"variant": 2 as int})).shapeless([<item:botania:flight_tiara>.withTag({"variant": 0 as int}),<item:botania:dark_quartz>]);
craftingTable.removeByName("botania:flighttiara_2");

(<item:botania:flight_tiara>.withTag({"variant": 3 as int})).shapeless([<item:botania:flight_tiara>.withTag({"variant": 0 as int}),<item:botania:mana_quartz>]);
craftingTable.removeByName("botania:flighttiara_3");

(<item:botania:flight_tiara>.withTag({"variant": 4 as int})).shapeless([<item:botania:flight_tiara>.withTag({"variant": 0 as int}),<item:botania:blaze_quartz>]);
craftingTable.removeByName("botania:flighttiara_4");

(<item:botania:flight_tiara>.withTag({"variant": 5 as int})).shapeless([<item:botania:flight_tiara>.withTag({"variant": 0 as int}),<item:botania:lavender_quartz>]);
craftingTable.removeByName("botania:flighttiara_5");

(<item:botania:flight_tiara>.withTag({"variant": 6 as int})).shapeless([<item:botania:flight_tiara>.withTag({"variant": 0 as int}),<item:botania:red_quartz>]);
craftingTable.removeByName("botania:flighttiara_6");

(<item:botania:flight_tiara>.withTag({"variant": 7 as int})).shapeless([<item:botania:flight_tiara>.withTag({"variant": 0 as int}),<item:botania:elf_quartz>]);
craftingTable.removeByName("botania:flighttiara_7");

(<item:botania:flight_tiara>.withTag({"variant": 8 as int})).shapeless([<item:botania:flight_tiara>.withTag({"variant": 0 as int}),<item:botania:sunny_quartz>]);
craftingTable.removeByName("botania:flighttiara_8");

//block of quertz recipes
(<item:botania:dark_quartz>*8).shaped([
    [<item:minecraft:quartz_block>,<item:minecraft:quartz_block>,<item:minecraft:quartz_block>],
    [<item:minecraft:quartz_block>,<tag:items:minecraft:coals>,<item:minecraft:quartz_block>],
    [<item:minecraft:quartz_block>,<item:minecraft:quartz_block>,<item:minecraft:quartz_block>]
]);
craftingTable.removeByName("botania:dark_quartz");

(<item:botania:blaze_quartz>*8).shaped([
    [<item:minecraft:quartz_block>,<item:minecraft:quartz_block>,<item:minecraft:quartz_block>],
    [<item:minecraft:quartz_block>,<item:minecraft:blaze_powder>,<item:minecraft:quartz_block>],
    [<item:minecraft:quartz_block>,<item:minecraft:quartz_block>,<item:minecraft:quartz_block>]
]);
craftingTable.removeByName("botania:blaze_quartz");

(<item:botania:lavender_quartz>*8).shaped([
    [<item:minecraft:quartz_block>,<item:minecraft:quartz_block>,<item:minecraft:quartz_block>],
    [<item:minecraft:quartz_block>,<item:minecraft:magenta_dye>,<item:minecraft:quartz_block>],
    [<item:minecraft:quartz_block>,<item:minecraft:quartz_block>,<item:minecraft:quartz_block>]
]);
craftingTable.removeByName("botania:lavender_quartz");

(<item:botania:sunny_quartz>*8).shaped([
    [<item:minecraft:quartz_block>,<item:minecraft:quartz_block>,<item:minecraft:quartz_block>],
    [<item:minecraft:quartz_block>,<item:minecraft:sunflower>,<item:minecraft:quartz_block>],
    [<item:minecraft:quartz_block>,<item:minecraft:quartz_block>,<item:minecraft:quartz_block>]
]);
craftingTable.removeByName("botania:sunny_quartz");

(<item:botania:red_quartz>*8).shaped([
    [<item:minecraft:quartz_block>,<item:minecraft:quartz_block>,<item:minecraft:quartz_block>],
    [<item:minecraft:quartz_block>,<item:minecraft:redstone>,<item:minecraft:quartz_block>],
    [<item:minecraft:quartz_block>,<item:minecraft:quartz_block>,<item:minecraft:quartz_block>]
]);
craftingTable.removeByName("botania:red_quartz");

(<item:botania:mana_quartz>*8).shaped([
    [<item:minecraft:quartz_block>,<item:minecraft:quartz_block>,<item:minecraft:quartz_block>],
    [<item:minecraft:quartz_block>,<item:botania:mana_bottle>,<item:minecraft:quartz_block>],
    [<item:minecraft:quartz_block>,<item:minecraft:quartz_block>,<item:minecraft:quartz_block>]
]);
craftingTable.removeByName("botania:mana_quartz");

(<item:botania:elf_quartz>*8).shaped([
    [<item:minecraft:quartz_block>,<item:minecraft:quartz_block>,<item:minecraft:quartz_block>],
    [<item:minecraft:quartz_block>,<item:botania:elf_glass>,<item:minecraft:quartz_block>],
    [<item:minecraft:quartz_block>,<item:minecraft:quartz_block>,<item:minecraft:quartz_block>]
]);
craftingTable.removeByName("botania:elf_quartz");

//replace red quartz

<item:botania:quartz_elven>.removeAndReplace(<item:botania:dragonstone>);
<item:botania:quartz_dark>.remove();
<item:botania:quartz_lavender>.remove();
<item:botania:quartz_sunny>.remove();
<item:botania:quartz_blaze>.remove();
<item:botania:quartz_red>.remove();
<item:botania:quartz_mana>.remove();

//tool tips
<item:botania:twig_wand>.addTip("The general multi-use tool for a botanist. It is used to rotate Mana Spreaders and view their burst paths, check the Mana stored in a Mana Pool, activate or check the progress of a Botanical Brewery or Runic Altar, and bind generating or functional flora to nearby Mana Pools or Spreaders.");
<item:botania:obedience_stick>.addTip("Will bind all generating flowers in its range to it when used on any Mana Spreader, and do the same for functional flowers when used on a Mana Pool.");
<item:botania:rainbow_rod>.addTip("Create bridges in the direction you are looking at.");
<item:botania:cobble_rod>.addTip("Create a Cobblestone block. Can provide the Rod of the Shifting Crust with Cobblestone.");
<item:botania:fire_rod>.addTip("Casts a circle of fire, any entity including the caster will burn inside the circle.");
<item:botania:skydirt_rod>.addTip("All of the Rod of the Lands' abilities and can place a Dirt block in mid-air using mana by facing in the disired direction and right-clicking.");
<item:botania:dirt_rod>.addTip("Create a Dirt block. Can provide the Rod of the Shifting Crust with Dirt.");
<item:botania:smelt_rod>.addTip("Smelt targeted blocks");
<item:botania:divining_rod>.addTip("Show nearby ores.");
<item:botania:water_rod>.addTip("Create a Water source block. Can also be used to refill a Petal Apothecary.");
<item:botania:gravity_rod>.addTip("Move and launch mobs and items.");
<item:botania:exchange_rod>.addTip("Replace blocks of one type in its range with a different one from the player's inventory.");
<item:botania:tornado_rod>.addTip("Propels the player into the air at a very high velocity.");
<item:botania:terraform_rod>.addTip("Flatten and level the ground to where you are standing by either removing blocks or placing Dirt.");
<item:botania:missile_rod>.addTip("Create homing missiles which attack nearby foes.");
// .addTip("");
// .addTip("");
// .addTip("");