if (feature("Remove saplings")) {
  removeItems([
    "quark:blue_blossom_sapling",
    "minecraft:oak_sapling",
    "minecraft:spruce_sapling",
    "minecraft:birch_sapling",
    "minecraft:jungle_sapling",
    "minecraft:acacia_sapling",
    "minecraft:dark_oak_sapling",
  ]);
}
if (feature('Remove nether tree fungi')) {
    removeItems(['minecraft:warped_fungus', 'minecraft:crimson_fungus'])
    removeRecipe({id:"create:haunting/crimson_fungus"})
    removeRecipe({id:"create:haunting/warped_fungus"})
}
if (feature("Remove quark saplings")) {
  removeItems([
    "quark:blue_blossom_sapling",
    "quark:orange_blossom_sapling",
    "quark:lavender_blossom_sapling",
    "quark:pink_blossom_sapling",
    "quark:yellow_blossom_sapling",
    "quark:red_blossom_sapling",
  ]);
}
