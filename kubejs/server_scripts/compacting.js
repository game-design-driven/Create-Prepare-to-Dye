//priority: 1
//Create Prepare to Dye 2 - Compacting Recipes

ServerEvents.recipes((event) => {
  // ORE - lapis lazuli from infusable dusts and water
  event.recipes.create.compacting("minecraft:lapis_lazuli", [
    "2x #forge:dusts/infusable",
    Fluid.water(500),
  ]);

  // ORE - redstone from nether wart block and mana dust
  event.recipes.create.compacting("minecraft:redstone", [
    "minecraft:nether_wart_block",
    "#forge:dusts/mana",
  ]);

  // ORE - diamond from coal blocks (superheated)
  event.recipes.create
    .compacting("minecraft:diamond", ["8x #forge:storage_blocks/coal"])
    .superheated();

  // ALLOY - gold block from ingots
  event.remove({ id: "minecraft:gold_block" });
  event.recipes.create.compacting("minecraft:gold_block", "9x minecraft:gold_ingot");

  // SLIME - slime block from terrasteel nuggets and honey
  event.recipes.create.compacting(
    "minecraft:slime_block",
    ["12x botania:terrasteel_nugget", Fluid.of("create:honey", 750)]
  );
});
