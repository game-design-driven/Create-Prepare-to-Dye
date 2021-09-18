
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.item.IIngredient;

<item:botania:fel_pumpkin>.addTip("If placed on top of two Iron Bars, will spawn a Blaze that will drop Blaze Powder instead of Blaze Rods.");
//overgroth seed
Recipes.addFill(<item:botania:overgrowth_seed>,<item:minecraft:bone_meal>*8,<fluid:minecraft:milk>* 1000);
// val aRealFluid as FluidIngredient= <fluid:create:potion>.withTag({Potion: "minecraft:healing" as string});
// Recipes.addThermo(
//     <item:botania:fertilizer> as IItemStack,
//     <fluid:minecraft:water> as IFluidStack,
//     <item:minecraft:bone_meal> as IIngredient,
//     <fluid:minecraft:water> as FluidIngredient,
//     2, 0,2147483647,1.0,false
// ); 



//crushing recipoe to pettals (only relavent if petals are enabled)
if (false){
    Recipes.addCrushing([<item:minecraft:fern>%25,<item:minecraft:grass>%25,<item:minecraft:seagrass>%25,<item:minecraft:wheat_seeds>%10,<item:botania:mana_powder>%5],<tag:items:botania:petals>);
}

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


//remove pettles and flowers
<item:botania:fertilizer>.removeAndReplace(<item:minecraft:bone_meal>);
val t = {
    <tag:items:botania:petals/white>:<tag:items:forge:dyes/white>,
    <tag:items:botania:petals/orange>:<tag:items:forge:dyes/orange>,
    <tag:items:botania:petals/magenta>:<tag:items:forge:dyes/magenta>,
    <tag:items:botania:petals/light_blue>:<tag:items:forge:dyes/light_blue>,
    <tag:items:botania:petals/yellow>:<tag:items:forge:dyes/yellow>,
    <tag:items:botania:petals/lime>:<tag:items:forge:dyes/lime>,
    <tag:items:botania:petals/pink>:<tag:items:forge:dyes/pink>,
    <tag:items:botania:petals/gray>:<tag:items:forge:dyes/gray>,
    <tag:items:botania:petals/light_gray>:<tag:items:forge:dyes/light_gray>,
    <tag:items:botania:petals/cyan>:<tag:items:forge:dyes/cyan>,
    <tag:items:botania:petals/purple>:<tag:items:forge:dyes/purple>,
    <tag:items:botania:petals/magenta>:<tag:items:forge:dyes/magenta>,
    <tag:items:botania:petals/blue>:<tag:items:forge:dyes/blue>,
    <tag:items:botania:petals/brown>:<tag:items:forge:dyes/brown>,
    <tag:items:botania:petals/green>:<tag:items:forge:dyes/green>,
    <tag:items:botania:petals/red>:<tag:items:forge:dyes/red>,
    <tag:items:botania:petals/black>:<tag:items:forge:dyes/black>,
};
t.add();
<tag:items:botania:petals>.add([
    <item:minecraft:white_dye>,
    <item:minecraft:orange_dye>,
    <item:minecraft:magenta_dye>,
    <item:minecraft:light_blue_dye>,
    <item:minecraft:yellow_dye>,
    <item:minecraft:lime_dye>,
    <item:minecraft:pink_dye>,
    <item:minecraft:gray_dye>,
    <item:minecraft:light_gray_dye>,
    <item:minecraft:cyan_dye>,
    <item:minecraft:purple_dye>,
    <item:minecraft:blue_dye>,
    <item:minecraft:brown_dye>,
    <item:minecraft:green_dye>,
    <item:minecraft:red_dye>,
    <item:minecraft:black_dye>,
]);
[<item:botania:black_petal_block>,
<item:botania:red_petal_block>,
<item:botania:green_petal_block>,
<item:botania:brown_petal_block>,
<item:botania:blue_petal_block>,
<item:botania:purple_petal_block>,
<item:botania:cyan_petal_block>,
<item:botania:light_gray_petal_block>,
<item:botania:gray_petal_block>,
<item:botania:pink_petal_block>,
<item:botania:lime_petal_block>,
<item:botania:yellow_petal_block>,
<item:botania:light_blue_petal_block>,
<item:botania:magenta_petal_block>,
<item:botania:orange_petal_block>,
<item:botania:white_petal_block>].remove();
val ripMap = {
    <item:botania:orange_petal>:<item:minecraft:orange_dye>,
    <item:botania:magenta_petal>:<item:minecraft:magenta_dye>,
    <item:botania:red_petal>:<item:minecraft:red_dye>,
    <item:botania:yellow_petal>:<item:minecraft:yellow_dye>,
    <item:botania:lime_petal>:<item:minecraft:lime_dye>,
    <item:botania:pink_petal>:<item:minecraft:pink_dye>,
    <item:botania:gray_petal>:<item:minecraft:gray_dye>,
    <item:botania:light_gray_petal>:<item:minecraft:light_gray_dye>,
    <item:botania:cyan_petal>:<item:minecraft:cyan_dye>,
    <item:botania:purple_petal>:<item:minecraft:purple_dye>,
    <item:botania:blue_petal>:<item:minecraft:blue_dye>,
    <item:botania:brown_petal>:<item:minecraft:brown_dye>,
    <item:botania:green_petal>:<item:minecraft:green_dye>,
    <item:botania:black_petal>:<item:minecraft:black_dye>,
    <item:botania:light_blue_petal>:<item:minecraft:light_blue_dye>,
    <item:botania:white_petal>:<item:minecraft:white_dye>,
    <item:botania:white_mushroom>:<item:minecraft:white_dye>,
    <item:botania:orange_mushroom>:<item:minecraft:orange_dye>,
    <item:botania:magenta_mushroom>:<item:minecraft:magenta_dye>,
    <item:botania:light_blue_mushroom>:<item:minecraft:light_blue_dye>,
    <item:botania:yellow_mushroom>:<item:minecraft:yellow_dye>,
    <item:botania:lime_mushroom>:<item:minecraft:lime_dye>,
    <item:botania:pink_mushroom>:<item:minecraft:pink_dye>,
    <item:botania:gray_mushroom>:<item:minecraft:gray_dye>,
    <item:botania:light_gray_mushroom>:<item:minecraft:light_gray_dye>,
    <item:botania:cyan_mushroom>:<item:minecraft:cyan_dye>,
    <item:botania:purple_mushroom>:<item:minecraft:purple_dye>,
    <item:botania:blue_mushroom>:<item:minecraft:blue_dye>,
    <item:botania:brown_mushroom>:<item:minecraft:brown_dye>,
    <item:botania:green_mushroom>:<item:minecraft:green_dye>,
    <item:botania:red_mushroom>:<item:minecraft:red_dye>,
    <item:botania:black_mushroom>:<item:minecraft:black_dye>,
};
ripMap.removeAndReplace();
// <item:botania:pestle_and_mortar>.remove();
<item:botania:pestle_and_mortar>.murdurFamily();
[<item:botania:orange_shiny_flower>,
<item:botania:white_shiny_flower>,
<item:botania:black_mystical_flower>,
<item:botania:red_mystical_flower>,
<item:botania:green_mystical_flower>,
<item:botania:brown_mystical_flower>,
<item:botania:blue_mystical_flower>,
<item:botania:purple_mystical_flower>,
<item:botania:cyan_mystical_flower>,
<item:botania:light_gray_mystical_flower>,
<item:botania:gray_mystical_flower>,
<item:botania:pink_mystical_flower>,
<item:botania:lime_mystical_flower>,
<item:botania:yellow_mystical_flower>,
<item:botania:light_blue_mystical_flower>,
<item:botania:magenta_mystical_flower>,
<item:botania:orange_mystical_flower>,
<item:botania:white_mystical_flower>,
<item:botania:magenta_shiny_flower>,
<item:botania:light_blue_shiny_flower>,
<item:botania:lime_shiny_flower>,
<item:botania:yellow_shiny_flower>,
<item:botania:pink_shiny_flower>,
<item:botania:gray_shiny_flower>,
<item:botania:light_gray_shiny_flower>,
<item:botania:cyan_shiny_flower>,
<item:botania:purple_shiny_flower>,
<item:botania:blue_shiny_flower>,
<item:botania:brown_shiny_flower>,
<item:botania:green_shiny_flower>,
<item:botania:red_shiny_flower>,
<item:botania:black_shiny_flower>].remove();
[<item:botania:white_floating_flower>,
<item:botania:orange_floating_flower>,
<item:botania:magenta_floating_flower>,
<item:botania:light_blue_floating_flower>,
<item:botania:black_floating_flower>,
<item:botania:red_floating_flower>,
<item:botania:green_floating_flower>,
<item:botania:brown_floating_flower>,
<item:botania:blue_floating_flower>,
<item:botania:purple_floating_flower>,
<item:botania:cyan_floating_flower>,
<item:botania:light_gray_floating_flower>,
<item:botania:gray_floating_flower>,
<item:botania:pink_floating_flower>,
<item:botania:lime_floating_flower>,
<item:botania:yellow_floating_flower>].remove();
[<item:botania:white_double_flower>,
<item:botania:orange_double_flower>,
<item:botania:magenta_double_flower>,
<item:botania:light_blue_double_flower>,
<item:botania:yellow_double_flower>,
<item:botania:lime_double_flower>,
<item:botania:pink_double_flower>,
<item:botania:gray_double_flower>,
<item:botania:light_gray_double_flower>,
<item:botania:cyan_double_flower>,
<item:botania:purple_double_flower>,
<item:botania:blue_double_flower>,
<item:botania:brown_double_flower>,
<item:botania:green_double_flower>,
<item:botania:red_double_flower>,
<item:botania:black_double_flower> ].remove();
var floaties = {
    <item:botania:pure_daisy>:<item:botania:floating_pure_daisy>,
    <item:botania:manastar>:<item:botania:floating_manastar>,
    <item:botania:hydroangeas>:<item:botania:floating_hydroangeas>,
    <item:botania:endoflame>:<item:botania:floating_endoflame>,
    <item:botania:thermalily>:<item:botania:floating_thermalily>,
    <item:botania:rosa_arcana>:<item:botania:floating_rosa_arcana>,
    <item:botania:munchdew>:<item:botania:floating_munchdew>,
    <item:botania:entropinnyum>:<item:botania:floating_entropinnyum>,
    <item:botania:kekimurus>:<item:botania:floating_kekimurus>,
    <item:botania:gourmaryllis>:<item:botania:floating_gourmaryllis>,
    <item:botania:narslimmus>:<item:botania:floating_narslimmus>,
    <item:botania:spectrolus>:<item:botania:floating_spectrolus>,
    <item:botania:dandelifeon>:<item:botania:floating_dandelifeon>,
    <item:botania:rafflowsia>:<item:botania:floating_rafflowsia>,
    <item:botania:shulk_me_not>:<item:botania:floating_shulk_me_not>,
    <item:botania:bellethorn>:<item:botania:floating_bellethorn>,
    <item:botania:bellethorn_chibi>:<item:botania:floating_bellethorn_chibi>,
    <item:botania:bergamute>:<item:botania:floating_bergamute>,
    <item:botania:dreadthorn>:<item:botania:floating_dreadthorn>,
    <item:botania:heisei_dream>:<item:botania:floating_heisei_dream>,
    <item:botania:tigerseye>:<item:botania:floating_tigerseye>,
    <item:botania:jaded_amaranthus>:<item:botania:floating_jaded_amaranthus>,
    <item:botania:orechid>:<item:botania:floating_orechid>,
    <item:botania:fallen_kanade>:<item:botania:floating_fallen_kanade>,
    <item:botania:exoflame>:<item:botania:floating_exoflame>,
    <item:botania:agricarnation>:<item:botania:floating_agricarnation>,
    <item:botania:agricarnation_chibi>:<item:botania:floating_agricarnation_chibi>,
    <item:botania:hopperhock>:<item:botania:floating_hopperhock>,
    <item:botania:hopperhock_chibi>:<item:botania:floating_hopperhock_chibi>,
    <item:botania:tangleberrie>:<item:botania:floating_tangleberrie>,
    <item:botania:jiyuulia>:<item:botania:floating_jiyuulia>,
    <item:botania:rannuncarpus>:<item:botania:floating_rannuncarpus>,
    <item:botania:rannuncarpus_chibi>:<item:botania:floating_rannuncarpus_chibi>,
    <item:botania:hyacidus>:<item:botania:floating_hyacidus>,
    <item:botania:pollidisiac>:<item:botania:floating_pollidisiac>,
    <item:botania:clayconia>:<item:botania:floating_clayconia>,
    <item:botania:clayconia_chibi>:<item:botania:floating_clayconia_chibi>,
    <item:botania:loonium>:<item:botania:floating_loonium>,
    <item:botania:daffomill>:<item:botania:floating_daffomill>,
    <item:botania:vinculotus>:<item:botania:floating_vinculotus>,
    <item:botania:spectranthemum>:<item:botania:floating_spectranthemum>,
    <item:botania:medumone>:<item:botania:floating_medumone>,
    <item:botania:marimorphosis>:<item:botania:floating_marimorphosis>,
    <item:botania:marimorphosis_chibi>:<item:botania:floating_marimorphosis_chibi>,
    <item:botania:bubbell>:<item:botania:floating_bubbell>,
    <item:botania:bubbell_chibi>:<item:botania:floating_bubbell_chibi>,
    <item:botania:solegnolia>:<item:botania:floating_solegnolia>,
    <item:botania:solegnolia_chibi>:<item:botania:floating_solegnolia_chibi>,
    <item:botania:orechid_ignem>:<item:botania:floating_orechid_ignem>,
    <item:botania:labellia>:<item:botania:floating_labellia>,
};
floaties.shapeless([<item:minecraft:dirt>,<item:botania:grass_seeds>,<item:minecraft:barrier>]);

//remove manaweave_cloth
<item:botania:manaweave_cloth>.removeAndReplace(<item:botania:spell_cloth>);
<item:botania:spell_cloth>.removeCraftingRecipe();
<item:botania:spell_cloth>.shapeless([<item:botania:mana_pearl>,<item:minecraft:string>,<item:minecraft:string>,<item:minecraft:string>]);
Recipes.addMix(<item:botania:spell_cloth>*4,"heated",[<item:botania:mana_pearl>,<item:minecraft:white_wool>*4]);

//remove mana infused string
<item:botania:mana_string>.removeAndReplace(<item:minecraft:string>);

//replace elementium with refined_radiance
<item:botania:elementium_ingot>.removeAndReplace(<item:create:refined_radiance>);
<recipetype:botania:elven_trade>.removeRecipe(<item:botania:elementium_ingot>);
Recipes.addTrade([<item:create:refined_radiance>],[<item:botania:terrasteel_ingot>,<item:botania:terrasteel_ingot>]);
<item:botania:elementium_nugget>.remove();

[
    <item:botania:elementium_block>,
    <item:botania:elementium_shears>,
    <item:botania:elementium_sword>,
    <item:botania:elementium_axe>,
    <item:botania:elementium_hoe>,
    <item:botania:elementium_shovel>,
    <item:botania:elementium_pickaxe>,
    <item:botania:elementium_boots>,
    <item:botania:elementium_leggings>,
    <item:botania:elementium_chestplate>,
    <item:botania:elementium_helmet>,
].remove();

//remove livingwood_bow
<item:botania:livingwood_bow>.remove();

//remove manasteel_pick, the vicarius pick is the equivelent and it has drawbacks so even better
<item:botania:manasteel_pick>.remove();

//slingshot
<item:botania:slingshot>.remove();

//remove assemlby halo and change manufactory halo recipe
<item:botania:crafting_halo>.murdurFamily();
<item:botania:auto_crafting_halo>.shaped([
    [<item:botania:mana_pearl>,<item:create:cogwheel>,<item:botania:mana_pearl>],
    [<item:botania:manasteel_ingot>,<item:minecraft:crafting_table>,<item:botania:manasteel_ingot>],
    [<item:minecraft:air>,<item:botania:manasteel_ingot>,<item:minecraft:air>]
]);

