WorldgenEvents.remove((event) => {
  event.printFeatures();
  event.printFeatures("", "minecraft:plains");
  event.printFeatures("raw_generation");
  event.printFeatures("local_modifications");
  event.printFeatures("underground_structures");
  event.printFeatures("surface_structures", "minecraft:overworld");
  event.printFeatures("strongholds");
  event.printFeatures("underground_ores");
  event.printFeatures("underground_decoration");
  event.printFeatures("fluid_springs");
  event.printFeatures("vegetal_decoration");
  event.printFeatures("top_layer_modification");
  event.removeFeatureById("vegetal_decoration", [
    "botania:mystical_flowers",
    "botania:mystical_mushrooms",
  ]);
  event.removeFeatureById("fluid_springs", [
    "minecraft:spring_water",
    "quark:deferred_feature_fluid_springs",
  ]);
  event.removeFeatureById("underground_ores", [
    "ore_gravel",
    "minecraft:disc_gravel",
    "minecraft:ore_dirt",
    "minecraft:ore_gravel",
    "minecraft:ore_granite_upper",
    "minecraft:ore_granite_lower",
    "minecraft:ore_diorite_upper",
    "minecraft:ore_diorite_lower",
    "minecraft:ore_andesite_upper",
    "minecraft:ore_andesite_lower",
    "minecraft:ore_tuff",
    "minecraft:ore_coal_upper",
    "minecraft:ore_coal_lower",
    "minecraft:ore_iron_upper",
    "minecraft:ore_iron_middle",
    "minecraft:ore_iron_small",
    "minecraft:ore_gold",
    "minecraft:ore_gold_lower",
    "minecraft:ore_redstone",
    "minecraft:ore_redstone_lower",
    "minecraft:ore_diamond",
    "minecraft:ore_diamond_large",
    "minecraft:ore_diamond_buried",
    "minecraft:ore_lapis",
    "minecraft:ore_lapis_buried",
    "minecraft:ore_copper",
    "minecraft:disk_sand",
    "minecraft:disk_clay",
    "minecraft:disk_gravel",
    "create:striated_ores_overworld",
    "create:zinc_ore",
    "quark:deferred_feature_underground_ores",
  ]);
  event.removeOres((props) => {
    props.blocks = [
      "minecraft:nether_quartz_ore",
      "minecraft:diamond_ore",
      "minecraft:redstone_ore",
      "minecraft:iron_ore",
      "minecraft:gold_ore",
      "minecraft:copper_ore",
      "minecraft:lapis_ore",
      "minecraft:emerald_ore",
    ];
  });
});