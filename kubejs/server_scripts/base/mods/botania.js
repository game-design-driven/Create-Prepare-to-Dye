if (feature("overgrowth_seed recipes")) {
  addFilling(
    "botania:overgrowth_seed",
    "#forge:coral",
    "kubejs:fermented_goop"
  );
  // addItemExplode('botania:overgrowth_seed', ['4x #forge:seeds', Item.of('minecraft:potion', '{Potion:"minecraft:strength"}')])
}

if (feature("Remove elementium")) {
  removeRecipe({ id: "botania:elven_trade/elementium" });
  addToTag("botania:elementium_ingots", "botania:terrasteel_ingot");
  removeAndReplace("botania:elementium_ingot", "botania:terrasteel_ingot");
  removeRecipe({ output: "botania:elementium_ingot" });
  addElvenTrade("botania:terrasteel_ingot", [
    "2x botania:manasteel_ingot",
    '#forge:meat',
  ]);
  removeRecipe({ id: "botania:elven_trade/elementium_block" });
  removeItem("botania:elementium_block");
  removeItem("botania:elementium_nugget");
  removeItems([
    "botania:elementium_shears",
    "botania:elementium_sword",
    "botania:elementium_axe",
    "botania:elementium_hoe",
    "botania:elementium_shovel",
    "botania:elementium_pickaxe",
    "botania:elementium_boots",
    "botania:elementium_leggings",
    "botania:elementium_chestplate",
    "botania:elementium_helmet",
  ]);
  removeRecipe({ id: "botania:gaia_pylon" });
  addItemApplication(
    "botania:gaia_pylon",
    "botania:mana_pylon",
    "botania:pixie_dust"
  );
  //adding here temp
  removeRecipe({ id: "botania:natura_pylon" });
  addItemApplication(
    "botania:natura_pylon",
    "botania:mana_pylon",
    "botania:terrasteel_ingot"
  );
  removeRecipe({ id: "botania:conversions/elementium_from_nuggets" });
  removeRecipe({ id: "botania:conversions/elementium_block_deconstruct" });
}
if (feature("Remove livingwood bow")) {
  //it's just a more powerful bow, doesn't bring much else to the table
  removeItem("botania:livingwood_bow");
}
if (feature("Remove assembly halo and manufactory halo")) {
  removeItem("botania:crafting_halo");
  removeItem("botania:auto_crafting_halo");
}
if (feature("Rebalance regular infusion recipes")) {
  removeRecipe({ id: "botania:mana_infusion/mana_powder_dye" });
}
if (feature("Remove garden of glass items that are not in use")) {
  removeItem("botania:pebble");
  removeItem("botania:living_root");
}

if (feature("Remove and replace red string")) {
  removeRecipe({ id: "botania:red_string" });
  removeRecipe({ id: "botania:red_string_alt" });
  removeAndReplace("botania:red_string", "minecraft:string");
}

if (feature("livingwood makes more charcoal")) {
  addSmelting("3x charcoal", "botania:livingwood", 0.1, 800);
}

if (feature("Livingrock from terracotta")) {
  addPurify("botania:livingrock", "minecraft:white_terracotta");
}
if (feature("Livingrock from white concrete")) {
  addPurify("botania:livingrock", "minecraft:white_concrete");
}
if (feature("Livingrock to stone")) {
  addBlockExplode("stone", "botania:livingrock");
}
if (feature("Livingwood twig out of dead bush and mana")) {
  addItemApplication(
    "botania:livingwood_twig",
    "dead_bush",
    "#botania:mana_dusts"
  );
}

if (feature("Livingwood from twigs")) {
  addShaped("botania:livingwood_log", ["tt", "tt"], {
    t: "botania:livingwood_twig",
  });
}

if (feature("Netherwood from choros fruit alchemy")) {
  addInfusion("minecraft:crimson_stem", "quark:chorus_fruit_block");
}

if (feature("Remove mana fluxfield")) {
  removeItem("botania:mana_fluxfield");
}
if (feature("Remove mushroom stew recipe from botania")) {
  removeRecipe({ id: "botania:mushroom_stew" });
}

if (feature("Lexica botania from book")) {
  // addApothecary('botania:lexicon', ['minecraft:book', 'botania:livingwood_twig'])
  addShapeless("botania:lexicon", ["dead_bush", "minecraft:book"]);
}

// if (feature('Flower placement')) {
//     BlockEvents.placed('botania:pure_daisy', (event) => {
//         event.cancel()
//     })
// }

if (feature("Wand easy recipe")) {
  removeAllRecipesForItem("botania:twig_wand");
  addShapeless("botania:twig_wand", ["botania:livingwood_twig", "#forge:dyes"]);
}

if (feature("Remove Drum of gathering because it makes milk easy")) {
  removeItem("botania");
}

if (feature("Remove ruunes from flowers")) {
  removeRecipe({ id: "botania:petal_apothecary/rannuncarpus" });
  addApothecary("botania:rannuncarpus", [
    "minecraft:orange_dye",
    "minecraft:orange_dye",
    "minecraft:yellow_dye",
    "botania:livingwood_twig",
  ]);
}

if (feature('Reduce mana price of manasteel')) {
  removeRecipe({ id: 'botania:mana_infusion/manasteel' })
  removeRecipe({ id: 'botania:mana_infusion/manasteel_block' })
  addInfusion('botania:manasteel_ingot', '#forge:ingots/iron', 1000)
  addInfusion('botania:manasteel_block', '#forge:storage_blocks/iron', 9000)
}