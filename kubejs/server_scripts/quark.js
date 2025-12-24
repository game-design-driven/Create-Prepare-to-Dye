//priority: 0
// Quark - item hiding and tag modifications
// Recipes split into: smelting.js, crafting.js, variants.js (searchable via "QUARK -")

// Items to hide from Quark
var QUARK_HIDDEN_ITEMS = [
  // Feeding trough
  "quark:feeding_trough",
  // Chute (use Create chute instead)
  "quark:chute",
  // Forgotten hat
  "quark:forgotten_hat",
  // Wood chests (use vanilla chest device conversion)
  "quark:oak_chest",
  "quark:oak_trapped_chest",
  "quark:spruce_chest",
  "quark:spruce_trapped_chest",
  "quark:birch_chest",
  "quark:birch_trapped_chest",
  "quark:jungle_chest",
  "quark:jungle_trapped_chest",
  "quark:acacia_chest",
  "quark:acacia_trapped_chest",
  "quark:dark_oak_chest",
  "quark:dark_oak_trapped_chest",
  "quark:mushroom_trapped_chest",
  // Runes (use Botania runes instead)
  "quark:blank_rune",
  "quark:white_rune",
  "quark:orange_rune",
  "quark:magenta_rune",
  "quark:light_blue_rune",
  "quark:yellow_rune",
  "quark:lime_rune",
  "quark:pink_rune",
  "quark:gray_rune",
  "quark:light_gray_rune",
  "quark:cyan_rune",
  "quark:purple_rune",
  "quark:blue_rune",
  "quark:brown_rune",
  "quark:green_rune",
  "quark:red_rune",
  "quark:black_rune",
  "quark:rainbow_rune",
  // Glass shards
  "quark:clear_shard",
  "quark:dirty_shard",
  "quark:white_shard",
  "quark:orange_shard",
  "quark:magenta_shard",
  "quark:light_blue_shard",
  "quark:yellow_shard",
  "quark:lime_shard",
  "quark:pink_shard",
  "quark:gray_shard",
  "quark:light_gray_shard",
  "quark:cyan_shard",
  "quark:purple_shard",
  "quark:blue_shard",
  "quark:brown_shard",
  "quark:green_shard",
  "quark:red_shard",
  "quark:black_shard",
  // Music discs
  "quark:music_disc_drips",
  "quark:music_disc_ocean",
  "quark:music_disc_rain",
  "quark:music_disc_wind",
  "quark:music_disc_fire",
  "quark:music_disc_clock",
  "quark:music_disc_crickets",
  "quark:music_disc_chatter",
];

ServerEvents.recipes(function (event) {
  // Remove recipes for hidden items
  for (var i = 0; i < QUARK_HIDDEN_ITEMS.length; i++) {
    event.remove({ output: QUARK_HIDDEN_ITEMS[i] });
  }
});

ServerEvents.tags("item", function (event) {
  // Hide removed Quark items from recipe viewers
  for (var i = 0; i < QUARK_HIDDEN_ITEMS.length; i++) {
    event.removeAllTagsFrom(QUARK_HIDDEN_ITEMS[i]);
    event.add("c:hidden_from_recipe_viewers", QUARK_HIDDEN_ITEMS[i]);
    event.add("c:removed", QUARK_HIDDEN_ITEMS[i]);
  }
});
