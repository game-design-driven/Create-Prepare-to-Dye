//priority: 1
//Create Prepare to Dye 2 - Deploying Recipes

ServerEvents.recipes((event) => {
  // Raw iron from white dye on white concrete powder
  event.recipes.create.deploying("minecraft:raw_iron", [
    "minecraft:white_concrete_powder",
    "minecraft:white_dye",
  ]);

  // Copper nugget from gold nugget and red dye
  event.recipes.create.deploying("create:copper_nugget", [
    "#forge:nuggets/gold",
    "minecraft:red_dye",
  ]);
});
