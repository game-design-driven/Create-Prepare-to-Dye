//priority: 1
//Create Prepare to Dye 2 - Splashing/Washing Recipes

ServerEvents.recipes((event) => {
  // ORE - crushed iron washing (nerfed)
  event.remove({ id: "create:splashing/crushed_raw_iron" });
  event.recipes.create.splashing(
    ["5x minecraft:iron_nugget", "minecraft:white_dye"],
    "create:crushed_raw_iron"
  );

  // ORE - crushed copper washing (nerfed)
  event.remove({ id: "create:splashing/crushed_raw_copper" });
  event.recipes.create.splashing(
    ["7x create:copper_nugget", Item.of("minecraft:clay_ball").withChance(0.50)],
    "create:crushed_raw_copper"
  );

  // ORE - soul sand washing for quartz
  event.remove({ id: "create:splashing/soul_sand" });
  event.recipes.create.splashing(
    [
      Item.of("4x ae2:large_quartz_bud").withChance(0.10),
      Item.of("minecraft:gold_nugget").withChance(0.02),
    ],
    "minecraft:soul_sand"
  );

  // ORE - red sand washing (nerfed)
  event.remove({ id: "create:splashing/red_sand" });
  event.recipes.create.splashing(
    [
      Item.of("minecraft:dead_bush").withChance(0.05),
      Item.of("minecraft:red_dye").withChance(0.15),
    ],
    "minecraft:red_sand"
  );
});
