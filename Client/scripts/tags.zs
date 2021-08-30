#priority 100
<tag:items:minecraft:sand>.add(<item:create:limesand>); //TODO add a way to wash limesand into sand instead
<tag:items:crafttweaker:strong_alloys>.add(<tag:items:forge:ingots/manasteel>);
<tag:items:crafttweaker:strong_alloys>.add(<tag:items:forge:ingots/brass>);
<tag:items:crafttweaker:strong_alloys>.add(<tag:items:forge:ingots/compressed_iron>);
<tag:items:crafttweaker:fertilizer>.add(<item:minecraft:bone_meal>);

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