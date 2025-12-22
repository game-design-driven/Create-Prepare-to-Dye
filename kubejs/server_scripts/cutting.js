//priority: 1
//Create Prepare to Dye 2 - Sawing/Cutting Recipes

ServerEvents.recipes((event) => {
  // Book back into paper
  event.recipes.create.cutting("3x minecraft:paper", "minecraft:book");
});
