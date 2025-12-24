//priority: 1
//Create Prepare to Dye 2 - Smelting Recipes

ServerEvents.recipes((event) => {
  // BOTANIA - livingwood makes more charcoal
  event.smelting("3x minecraft:charcoal", "botania:livingwood").xp(0.1).cookingTime(800);

  // AE2 - silicon from quartz (slow)
  event.remove({ id: "ae2:smelting/silicon_from_certus_quartz_dust" });
  event.remove({ id: "ae2:blasting/silicon_from_certus_quartz_dust" });
  event.smelting("ae2:silicon", "minecraft:quartz").xp(0.1).cookingTime(3600);

  // DYE - gray dye block to black dye
  event.smelting("3x minecraft:black_dye", "ptdye:gray_dye_block").xp(1).cookingTime(400);

  // TREES - charcoal from any burnable log
  event.remove({ id: "minecraft:charcoal" });
  event.smelting("minecraft:charcoal", "#minecraft:logs_that_burn").xp(0.15);

  // TREES - spruce logs give 2x charcoal (slower)
  event.smelting("2x minecraft:charcoal", "minecraft:spruce_log").xp(0.3).cookingTime(800);

  // TREES - birch logs smelt fast to charcoal
  event.smelting("minecraft:charcoal", "minecraft:birch_log").xp(0.05).cookingTime(50);

  // QUARK - XP from smelting experience bottles
  event.smelting("minecraft:glass_bottle", "minecraft:experience_bottle").xp(6);

  // QUARK - gold nugget from gold bars
  event.smelting("minecraft:gold_nugget", "quark:gold_bars");
});
