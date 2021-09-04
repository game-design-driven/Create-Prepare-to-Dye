#priority 100
<tag:items:minecraft:sand>.add(<item:create:limesand>); //TODO add a way to wash limesand into sand instead
<tag:items:createrun:strong_alloys>.add(<tag:items:forge:ingots/manasteel>);
<tag:items:createrun:strong_alloys>.add(<tag:items:forge:ingots/brass>);
<tag:items:createrun:strong_alloys>.add(<tag:items:forge:ingots/compressed_iron>);
<tag:items:createrun:fertilizer>.add(<item:minecraft:bone_meal>);
<tag:items:createrun:bucket/water>.add(<item:minecraft:water_bucket>);
<tag:items:createrun:bucket/lava>.add(<item:minecraft:lava_bucket>);
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