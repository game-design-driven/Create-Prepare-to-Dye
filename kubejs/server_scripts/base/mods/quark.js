if (feature("Remove feeding_trough")) {
  removeItem("feeding_trough");
}
// if (feature('Pipe recipes')) {
//     replaceShaped('quark:pipe', ['i', 'g', 'i'], { i: '#forge:ingots', g: '#forge:glass' })
//     addShaped('8x quark:pipe', ['p', 'g', 'p'], { p: '#forge:plastic', g: '#forge:glass' })
// }
if (feature("Remove quark wood chests")) {
  removeItems([
    "quark:mushroom_trapped_chest",
    "quark:dark_oak_trapped_chest",
    "quark:acacia_trapped_chest",
    "quark:jungle_trapped_chest",
    "quark:birch_trapped_chest",
    "quark:spruce_trapped_chest",
    "quark:dark_oak_chest",
    "quark:acacia_chest",
    "quark:jungle_chest",
    "quark:birch_chest",
    "quark:spruce_chest",
    "quark:oak_chest",
    "quark:oak_trapped_chest",
  ]);
}
if (feature("Remove quark runes")) {
  removeItems([
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
    "quark:blank_rune",
  ]);
}
if (feature("Remove glass shards")) {
  removeItems([
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
  ]);
}
if (feature("Remove quark music discs")) {
  removeItems([
    "quark:music_disc_drips",
    "quark:music_disc_ocean",
    "quark:music_disc_rain",
    "quark:music_disc_wind",
    "quark:music_disc_fire",
    "quark:music_disc_clock",
    "quark:music_disc_crickets",
    "quark:music_disc_chatter",
  ]);
}
if (feature("Remove quark chute")) {
  removeItem("quark:chute");
}
if (feature("XP from xp bottle in furnace")) {
  addSmelting("glass_bottle", "experience_bottle", 6);
}

if (feature("Break down gold bars")) {
  addSmelting("1x gold_nugget", "quark:gold_bars");
}

if (feature("Iron plate block from black")) {
  removeRecipe({ id: "quark:building/crafting/iron_plate" });
  addShapeless("64x quark:iron_plate", [
    "3x #forge:plates/iron",
    Ingredient.of("#forge:dyes/black").or("#forge:dyes/gray"),
  ]);
  addStonecutting("32x quark:iron_plate", "#forge:ingots/andesite_alloy");
}

if (feature("Remove forgotten hat")) {
  removeItem("quark:forgotten_hat");
}

if (feature("bag from silicon")) {
  addShaped("quark:backpack", ["sis", "scs", "sis"], {
    s: "#forge:silicon",
    i: "#forge:ingots",
    c: "#forge:chests",
  });
}

// if (feature('Storage crate uses iron and plates')) {
//     replaceShaped('quark:crate',['ipi','p p','ipi'],{
//         i:Ingredient.of('#forge:ingots/iron').or('#forge:plates/iron'), p:'quark:iron_plate'
//     })
// }

if (feature("Stick Stack")) {
  removeRecipe({ id: "quark:building/crafting/compressed/stick_block" });
  addShapeless("quark:stick_block", "9x stick");
}
if (feature("Nerf bambo to planks recipe")) {
  removeRecipe({ id: "quark:building/crafting/woodsets/bamboo/planks" });
  addShapeless("quark:bamboo_planks", "quark:bamboo_block");
  addCutting("quark:bamboo_planks", "quark:bamboo_block");
}

if (feature("Higher ladder output")) {
  removeRecipe({ id: "quark:building/crafting/iron_ladder" });
  addShaped("16x quark:iron_ladder", ["i i", "iIi", "i i"], {
    I: "#forge:ingots/iron",
    i: "#forge:nuggets/iron",
  });
}
