//priority: 1
//Create Prepare to Dye 2 - Pressing Recipes

ServerEvents.recipes((event) => {
  // FOOD - pizza base from dough
  event.recipes.create.pressing("ptdye:pizza_base", "create:dough");

  // ORE - raw iron to iron sheet
  event.recipes.create.pressing("create:iron_sheet", "minecraft:raw_iron");

  // ORE - raw gold to gold ingot
  event.recipes.create.pressing("minecraft:gold_ingot", "minecraft:raw_gold");

  // ORE - raw copper to copper ingot
  event.recipes.create.pressing("minecraft:copper_ingot", "minecraft:raw_copper");
});
