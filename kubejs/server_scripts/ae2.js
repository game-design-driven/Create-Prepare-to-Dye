//priority: 0
// AE2 item hiding - remove most AE2 items, keep only essential ones

// Items to keep from AE2
var AE2_KEEP = [
  "ae2:silicon",
  "ae2:terminal",
  "ae2:storage_bus",
  "ae2:energy_cell",
  "ae2:toggle_bus",
  "ae2:inverted_toggle_bus",
  "ae2:storage_monitor",
  "ae2:chipped_budding_quartz",
  "ae2:damaged_budding_quartz",
  "ae2:flawed_budding_quartz",
  "ae2:small_quartz_bud",
  "ae2:medium_quartz_bud",
  "ae2:large_quartz_bud",
  "ae2:quartz_crystal",
  "ae2:quartz_cluster",
  "ae2:quartz_fiber",
  "ae2:quartz_block",
  "ae2:level_emitter",
  "ae2:red_smart_cable",
  "ae2:blue_smart_cable",
  "ae2:green_smart_cable",
  "ae2:purple_smart_cable",
  "ae2:white_smart_cable",
  "ae2:orange_smart_cable",
  "ae2:yellow_smart_cable",
  "ae2:lime_smart_cable",
  "ae2:pink_smart_cable",
  "ae2:gray_smart_cable",
  "ae2:light_gray_smart_cable",
  "ae2:cyan_smart_cable",
  "ae2:light_blue_smart_cable",
  "ae2:magenta_smart_cable",
  "ae2:brown_smart_cable",
  "ae2:black_smart_cable",
  "ae2:fluix_smart_cable",
];

ServerEvents.recipes(function (event) {
  // Remove all recipes for non-kept AE2 items
  Ingredient.of("@ae2").itemIds.forEach(function (item) {
    if (AE2_KEEP.indexOf(item) === -1) {
      event.remove({ output: item });
    }
  });
});

ServerEvents.tags("item", function (event) {
  // Hide all non-kept AE2 items from recipe viewers
  Ingredient.of("@ae2").itemIds.forEach(function (item) {
    if (AE2_KEEP.indexOf(item) === -1) {
      event.removeAllTagsFrom(item);
      event.add("c:hidden_from_recipe_viewers", item);
      event.add("c:removed", item);
    }
  });
});
