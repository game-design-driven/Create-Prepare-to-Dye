#priority 100
<tag:items:create:crushed_ores/iron>.add(<item:create:crushed_iron_ore>);
<tag:items:create:crushed_ores/gold>.add(<item:create:crushed_gold_ore>);
<tag:items:create:crushed_ores/copper>.add(<item:create:crushed_copper_ore>);
<tag:items:create:crushed_ores/brass>.add(<item:create:crushed_brass>);
<tag:items:minecraft:sand>.add(<item:create:limesand>); //TODO add a way to wash limesand into sand instead
<tag:items:forge:alloys/strong>.add(<tag:items:forge:ingots/manasteel>);
<tag:items:forge:alloys/strong>.add(<tag:items:forge:ingots/brass>);
<tag:items:createrun:fertilizer>.add(<item:minecraft:bone_meal>);
<tag:items:createrun:bucket/water>.add(<item:minecraft:water_bucket>);
<tag:items:createrun:bucket/lava>.add(<item:minecraft:lava_bucket>);
<tag:items:forge:plastic>.add(<item:contenttweaker:plastic_nurdle>);
<tag:items:forge:acidic>.add([
    <item:contenttweaker:oxidized_gunpowder>,
    <item:botania:fel_pumpkin>
]);
<tag:items:forge:fish_bucket>.add([
    <item:minecraft:pufferfish_bucket>,
    <item:minecraft:salmon_bucket>,
    <item:minecraft:cod_bucket>,
    <item:minecraft:tropical_fish_bucket>
]);

<tag:items:crafttweaker:life_potions>.add([
    <item:botania:brew_flask>.withTag({brewKey: "botania:regen" as string}),
    <item:botania:brew_flask>.withTag({brewKey: "botania:regen_weak" as string}),
    <item:botania:brew_vial>.withTag({brewKey: "botania:regen" as string}),
    <item:botania:brew_vial>.withTag({brewKey: "botania:regen_weak" as string}),
    <item:minecraft:potion>.withTag({Potion: "minecraft:healing" as string}),
    <item:minecraft:potion>.withTag({Potion: "minecraft:strong_healing" as string}),
    <item:minecraft:potion>.withTag({Potion: "minecraft:regeneration" as string}),
    <item:minecraft:potion>.withTag({Potion: "minecraft:long_regeneration" as string}),
    <item:minecraft:potion>.withTag({Potion: "minecraft:strong_regeneration" as string}),
    <item:minecraft:splash_potion>.withTag({Potion: "minecraft:healing" as string}),
    <item:minecraft:splash_potion>.withTag({Potion: "minecraft:strong_healing" as string}),
    <item:minecraft:splash_potion>.withTag({Potion: "minecraft:regeneration" as string}),
    <item:minecraft:splash_potion>.withTag({Potion: "minecraft:long_regeneration" as string}),
    <item:minecraft:splash_potion>.withTag({Potion: "minecraft:strong_regeneration" as string}),
    <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:healing" as string}),
    <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:strong_healing" as string}),
    <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:regeneration" as string}),
    <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:long_regeneration" as string}),
    <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:strong_regeneration" as string})
]);
<tag:items:crafttweaker:regular_flowers>.add([
    <item:minecraft:dandelion>,
    <item:minecraft:poppy>,
    <item:minecraft:blue_orchid>,
    <item:minecraft:allium>,
    <item:minecraft:azure_bluet>,
    <item:minecraft:red_tulip>,
    <item:minecraft:orange_tulip>,
    <item:minecraft:white_tulip>,
    <item:minecraft:pink_tulip>,
    <item:minecraft:oxeye_daisy>,
    <item:minecraft:cornflower>,
    <item:minecraft:lily_of_the_valley>,
    <item:minecraft:crimson_roots>,
    <item:minecraft:warped_roots>,
    <item:minecraft:sunflower>,
    <item:minecraft:lilac>,
    <item:minecraft:rose_bush>,
    <item:minecraft:peony>
]);
<tag:items:createrun:oxidiesers>.add([
    <item:minecraft:potion>.withTag({Potion: "minecraft:water_breathing" as string}),
    <item:botania:brew_flask>.withTag({brewKey: "botania:water_breathing" as string}),
    <item:botania:brew_vial>.withTag({brewKey: "botania:water_breathing" as string}),
    <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:long_water_breathing" as string}),
    <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:water_breathing" as string}),
    <item:minecraft:splash_potion>.withTag({Potion: "minecraft:long_water_breathing" as string}),
    <item:minecraft:splash_potion>.withTag({Potion: "minecraft:water_breathing" as string}),
    <item:minecraft:potion>.withTag({Potion: "minecraft:long_water_breathing" as string}),
    <item:minecraft:potion>.withTag({Potion: "minecraft:water_breathing" as string})
]);
//fake version of tag because they behave wierd?
public class tag{
    public static val oxidiesers =     
        <item:minecraft:potion>.withTag({Potion: "minecraft:water_breathing" as string})|
        <item:botania:brew_flask>.withTag({brewKey: "botania:water_breathing" as string})*4|
        <item:botania:brew_vial>.withTag({brewKey: "botania:water_breathing" as string})|
        <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:long_water_breathing" as string})|
        <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:water_breathing" as string})|
        <item:minecraft:splash_potion>.withTag({Potion: "minecraft:long_water_breathing" as string})|
        <item:minecraft:splash_potion>.withTag({Potion: "minecraft:water_breathing" as string})|
        <item:minecraft:potion>.withTag({Potion: "minecraft:long_water_breathing" as string})|
        <item:minecraft:potion>.withTag({Potion: "minecraft:water_breathing" as string})
    ;
    public static val poison =
        <item:minecraft:potion>.withTag({Potion: "minecraft:poison" as string})|
        <item:minecraft:potion>.withTag({Potion: "minecraft:long_poison" as string})|
        <item:minecraft:potion>.withTag({Potion: "minecraft:strong_poison" as string})|
        <item:minecraft:splash_potion>.withTag({Potion: "minecraft:poison" as string})|
        <item:minecraft:splash_potion>.withTag({Potion: "minecraft:long_poison" as string})|
        <item:minecraft:splash_potion>.withTag({Potion: "minecraft:strong_poison" as string})|
        <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:poison" as string})|
        <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:long_poison" as string})|
        <item:minecraft:lingering_potion>.withTag({Potion: "minecraft:strong_poison" as string})
    ;
}

<tag:items:forge:screen>.add([
    <item:refinedstorage:grid>,
    <item:refinedstorage:storage_monitor>
]);

<tag:items:forge:bush>.add(
    <item:minecraft:dead_bush>,
    <item:minecraft:fern>,
    <item:minecraft:rose_bush>
);
<tag:items:forge:plasticables>.add([
    <item:minecraft:ender_pearl>,
    
]);
<tag:items:forge:andesite>.add(<item:minecraft:andesite>);

<tag:items:forge:food/poison>.add([
    <item:minecraft:poisonous_potato>
]);

<tag:items:minecraft:logs_that_burn>.remove(<item:minecraft:spruce_log>);
<tag:items:minecraft:logs_that_burn>.remove(<item:minecraft:birch_log>);

<tag:items:forge:dusts>.add(<item:minecraft:sugar>);
<tag:items:forge:dusts/sugar>.add(<item:minecraft:sugar>);

<tag:items:forge:meat>.add([
    <item:minecraft:porkchop>,
    <item:minecraft:beef>
]);

<tag:items:forge:lime>.add([<item:create:limesand>]);