//priority: 1
//Create Prepare to Dye 2 - Sawing/Cutting Recipes

ServerEvents.recipes((event) => {
  // RECYCLING - book back into paper
  event.recipes.create.cutting("3x minecraft:paper", "minecraft:book");

  // TREES - acacia planks give 3x sticks (bonus yield)
  event.recipes.create.cutting("3x minecraft:stick", "minecraft:acacia_planks");

  // TREES - all planks can be cut to 2x sticks
  var cuttablePlanks = [
    "minecraft:oak_planks",
    "minecraft:spruce_planks",
    "minecraft:birch_planks",
    "minecraft:jungle_planks",
    "minecraft:dark_oak_planks",
    "minecraft:crimson_planks",
    "minecraft:warped_planks",
  ];
  for (var i = 0; i < cuttablePlanks.length; i++) {
    event.recipes.create.cutting("2x minecraft:stick", cuttablePlanks[i]);
  }
});
