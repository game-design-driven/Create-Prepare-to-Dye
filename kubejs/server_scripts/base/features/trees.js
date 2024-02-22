//making wood great again (any type of wood should have a reason to exist)
if (feature("Oak aka applewood")) {
  //oak is turned into apple tree by name as it's already in function
  //should change lag files
  addMilling("apple %20", "oak_leaves");
  addCrushing(["apple %5", "stick %5", "gray_dye %5"], "oak_leaves");
}
// if (feature('dark oak')) {
//     addAssembly(['8x paper %8', 'brown_dye', 'stick'], 'dark_oak_log', [
//         addFilling('', '', 'kubejs:acid'),//change to kjs acid
//         addPressing()
//     ], 2)
// }
if (feature("Acacia")) {
  removeRecipe({ id: "minecraft:stick" });
  addShaped("4x stick", ["w", "w"], { w: "#planks" });
  addShaped("6x stick", ["w", "w"], { w: "acacia_planks" });
  addCutting("3x stick", "acacia_planks");
}
if (feature("Spruce")) {
  removeRecipe({ id: "minecraft:charcoal" });
  addSmelting("charcoal", "#logs_that_burn");
  addSmelting("2x charcoal", "spruce_log", undefined, 800);
}
if (feature("Birch")) {
  removeRecipe({ id: "minecraft:birch_planks" });
  addShapeless("5x birch_planks", "birch_log");
  addSmelting("charcoal", "birch_log", undefined, 50);
}

if (feature("Cut any plank to 2 sticks")) {
  //this might not be needed in future
  addCutting("2x stick", Ingredient.of([
    "oak_planks",
    "spruce_planks",
    "birch_planks",
    "jungle_planks",
    "dark_oak_planks",
    "crimson_planks",
    "warped_planks",
  ]));
}
