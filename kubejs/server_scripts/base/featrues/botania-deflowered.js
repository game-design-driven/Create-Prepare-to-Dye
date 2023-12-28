if (feature("Replace mystical flowers and petals with dyes")) {
  removeAndReplace("botania:fertilizer", "bone_meal");
  
  let functionalFlowers = [
    "pure_daisy",
    "manastar",
    "hydroangeas",
    "endoflame",
    "thermalily",
    "rosa_arcana",
    "munchdew",
    "entropinnyum",
    "kekimurus",
    "gourmaryllis",
    "narslimmus",
    "spectrolus",
    "dandelifeon",
    "rafflowsia",
    "shulk_me_not",
    "bellethorn",
    "bergamute",
    "dreadthorn",
    "heisei_dream",
    "tigerseye",
    "jaded_amaranthus",
    "orechid",
    "fallen_kanade",
    "exoflame",
    "agricarnation",
    "hopperhock",
    "tangleberrie",
    "jiyuulia",
    "rannuncarpus",
    "hyacidus",
    "pollidisiac",
    "clayconia",
    "loonium",
    "daffomill",
    "vinculotus",
    "spectranthemum",
    "medumone",
    "marimorphosis",
    "bubbell",
    "solegnolia",
    "orechid_ignem",
    "labellia",
    "bellethorn_chibi",
    "agricarnation_chibi",
    "hopperhock_chibi",
    "rannuncarpus_chibi",
    "clayconia_chibi",
    "marimorphosis_chibi",
    "bubbell_chibi",
    "solegnolia_chibi",
  ];
  
  global.colors.forEach((color) => {
    addToTag("botania:petals/" + color, "minecraft:" + color + "_dye");
    removeItem("botania:" + color + "_petal_block");
    removeItem("botania:" + color + "_shiny_flower");
    removeItem("botania:" + color + "_mystical_flower");
    removeItem("botania:" + color + "_floating_flower");
    removeItem("botania:" + color + "_double_flower");
    removeAndReplace(
      "botania:" + color + "_petal",
      "minecraft:" + color + "_dye"
    );
    removeAndReplace(
      "botania:" + color + "_mushroom",
      "minecraft:" + color + "_dye"
    );

    // remove create/botania petal to dye recipes  
    removeRecipe({ id: "create:compat/botania/milling/"+color+"_petal" });

    // remove botania petal to dye recipes
    removeRecipe({ id: "botania:dye_"+color });
  });

  // remove 16 shroom recipes from botania
  for (let i = 0; i < 16; i++) {
    removeRecipe({ id: "botania:mushroom_" + i });
  }
  //remove flower that makes mystical flowers
  removeItem("botania:jaded_amaranthus");
  removeItem("botania:floating_jaded_amaranthus");
  removeItem("botania:flower_bag");
  removeItem("botania:pestle_and_mortar");
  //

  functionalFlowers.forEach((flower) => {
    replaceShapeless("botania:floating_" + flower, [
      "botania:" + flower,
      "#minecraft:dirt",
      "botania:grass_seeds",
    ]);
  });

  
}
if (
  feature("Petal processing") &&
  !feature("Replace mystical flowers with dyes")
) {
  addCrushing(
    ["fern %25", "grass %25", "seagrass %25", "wheat_seeds %10"],
    "#botania:petals"
  );
}
if (feature("Remove elven quartz and simplify colored quartz recipes")) {
  [
    ["botania:elf_quartz", "create:refined_radiance"],
    ["botania:dark_quartz", "#minecraft:coals"],
    ["botania:lavender_quartz", "#forge:dyes/magenta"],
    ["botania:sunny_quartz", "minecraft:sunflower"],
    ["botania:blaze_quartz", "blaze_powder"],
    ["botania:red_quartz", "redstone"],
    ["botania:mana_quartz", "botania:mana_bottle"],
  ].forEach(([quartzBlock, ingredient]) => {
    replaceShaped("8x " + quartzBlock, ["###", "#i#", "###"], {
      "#": "quartz_block",
      "i": ingredient,
    });
  });

  removeAndReplace("botania:quartz_elven", "botania:dragonstone");

  removeItems([
    "botania:quartz_dark",
    "botania:quartz_lavender",
    "botania:quartz_sunny",
    "botania:quartz_blaze",
    "botania:quartz_red",
    "botania:quartz_mana",
  ]);

  removeRecipe({ id: "botania:elven_trade/elf_quartz" });
}
if (
  feature("Remove elven quartz and simplify colored quartz recipes") &&
  feature("Tiara recipes use quartz blocks instead of quartz")
) {
  [
    "quartz_block",
    "botania:dark_quartz",
    "botania:mana_quartz",
    "botania:blaze_quartz",
    "botania:lavender_quartz",
    "botania:red_quartz",
    "botania:elf_quartz",
    "botania:sunny_quartz",
  ].forEach((ingredient, index) => {
    replaceShapeless(Item.of("botania:flight_tiara", { variant: index + 1 }), [
      "botania:flight_tiara",
      ingredient,
    ]);
  });
}

if (feature('Replace_mana_string')) {
    removeAndReplace('botania:mana_string', 'string')
}

if (feature('Remove manaweavmanae cloth')) {
    removeAndReplace('botania:manaweave_cloth', 'botania:spell_cloth')
    replaceShaped('botania:spell_cloth', [' s ', 'sms', ' s '], { s: 'string', m: 'botania:mana_pearl' })
    addMixing('2x botania:spell_cloth', ['botania:mana_pearl', '8x minecraft:white_wool'], temperature.heated)
}

if (feature('Replace mana powder with lapis')){
    // removeAndReplace('botania:mana_powder', 'mrinecraft:lapis_lazuli')
    removeRecipe({ id: 'botania:mana_infusion/mana_powder_dust' })
    addInfusion('minecraft:lapis_lazuli', '#forge:dusts', 10)
    replaceInputForRecipes('botania:mana_powder', 'minecraft:lapis_lazuli')
    addToTag('botania:mana_dusts', 'minecraft:lapis_lazuli')
    removeFromTag('botania:mana_dusts', 'botania:mana_powder')
    removeFromTag('forge:dusts', 'botania:mana_powder')
    removeRecipe({ id: 'botania:mana_infusion/mana_powder_dust' })
}


