//priority: 1
//Create Prepare to Dye 2 - Pressing Recipes

ServerEvents.recipes((event) => {
  // Pizza base from dough
  event.recipes.create.pressing("ptdye:pizza_base", "create:dough");

  // Raw ore pressing to ingots
  event.recipes.create.pressing("create:iron_sheet", "minecraft:raw_iron");
  event.recipes.create.pressing("minecraft:gold_ingot", "minecraft:raw_gold");
  event.recipes.create.pressing("minecraft:copper_ingot", "minecraft:raw_copper");
});
