//priority: 1
//Create Prepare to Dye 2 - Sandpaper Polishing Recipes

ServerEvents.recipes((event) => {
  // SLIME - slime ball from magma cream
  event.recipes.create.sandpaper_polishing(
    [Item.of("minecraft:slime_ball").withChance(0.95)],
    "minecraft:magma_cream"
  );
});
