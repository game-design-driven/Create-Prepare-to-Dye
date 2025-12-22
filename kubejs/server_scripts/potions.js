//priority: 0
// Potions - dynamic filling recipes for all potions, brewing stand removal

ServerEvents.recipes(function (event) {
  // Remove brewing stand recipes
  event.remove({ output: "minecraft:brewing_stand" });

  // Generate filling recipes for all registered potions
  var Registry = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries");
  var potionRegistry = Registry.POTION;

  potionRegistry.entrySet().forEach(function (entry) {
    var potionId = "" + entry.getKey().location();

    // Potion bottle
    if (!Item.of("minecraft:potion", { Potion: potionId }).isEmpty()) {
      event.recipes.create.filling(
        Item.of("minecraft:potion", { Potion: potionId }),
        [
          "minecraft:glass_bottle",
          Fluid.of("create:potion", 250, { Potion: potionId, Bottle: "REGULAR" }),
        ]
      );
    }

    // Splash potion
    if (!Item.of("minecraft:splash_potion", { Potion: potionId }).isEmpty()) {
      event.recipes.create.filling(
        Item.of("minecraft:splash_potion", { Potion: potionId }),
        [
          "minecraft:glass_bottle",
          Fluid.of("create:potion", 250, { Potion: potionId, Bottle: "SPLASH" }),
        ]
      );
    }

    // Lingering potion
    if (!Item.of("minecraft:lingering_potion", { Potion: potionId }).isEmpty()) {
      event.recipes.create.filling(
        Item.of("minecraft:lingering_potion", { Potion: potionId }),
        [
          "minecraft:glass_bottle",
          Fluid.of("create:potion", 250, { Potion: potionId, Bottle: "LINGERING" }),
        ]
      );
    }

    // Tipped arrow
    if (!Item.of("minecraft:tipped_arrow", { Potion: potionId }).isEmpty()) {
      event.recipes.create.filling(
        Item.of("minecraft:tipped_arrow", { Potion: potionId }),
        [
          "minecraft:arrow",
          Fluid.of("create:potion", 25, { Potion: potionId, Bottle: "REGULAR" }),
        ]
      );
    }
  });
});

ServerEvents.tags("item", function (event) {
  // Hide brewing stand
  event.removeAllTagsFrom("minecraft:brewing_stand");
  event.add("c:hidden_from_recipe_viewers", "minecraft:brewing_stand");
  event.add("c:removed", "minecraft:brewing_stand");
});
