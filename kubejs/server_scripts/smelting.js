//priority: 1
//Create Prepare to Dye 2 - Smelting Recipes

ServerEvents.recipes((event) => {
  // Livingwood makes more charcoal
  event.smelting("3x minecraft:charcoal", "botania:livingwood").xp(0.1).cookingTime(800);

  // Silicon from quartz (slow)
  event.remove({ id: "ae2:smelting/silicon_from_certus_quartz_dust" });
  event.remove({ id: "ae2:blasting/silicon_from_certus_quartz_dust" });
  event.smelting("ae2:silicon", "minecraft:quartz").xp(0.1).cookingTime(3600);

  // Gray dye block to black dye
  event.smelting("3x minecraft:black_dye", "ptdye:gray_dye_block").xp(1).cookingTime(400);
});
