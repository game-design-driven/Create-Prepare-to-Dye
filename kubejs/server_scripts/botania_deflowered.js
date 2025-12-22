//priority: 0
// Botania Deflowered - Replace mystical flowers/petals with dyes

var COLORS = [
  "white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray",
  "light_gray", "cyan", "purple", "blue", "brown", "green", "red", "black"
];

var FUNCTIONAL_FLOWERS = [
  "pure_daisy", "manastar", "hydroangeas", "endoflame", "thermalily", "rosa_arcana",
  "munchdew", "entropinnyum", "kekimurus", "gourmaryllis", "narslimmus", "spectrolus",
  "dandelifeon", "rafflowsia", "shulk_me_not", "bellethorn", "bergamute", "dreadthorn",
  "heisei_dream", "tigerseye", "orechid", "fallen_kanade", "exoflame",
  "agricarnation", "hopperhock", "tangleberrie", "jiyuulia", "rannuncarpus", "hyacidus",
  "pollidisiac", "clayconia", "loonium", "daffomill", "vinculotus", "spectranthemum",
  "medumone", "marimorphosis", "bubbell", "solegnolia", "orechid_ignem", "labellia",
  "bellethorn_chibi", "agricarnation_chibi", "hopperhock_chibi", "rannuncarpus_chibi",
  "clayconia_chibi", "marimorphosis_chibi", "bubbell_chibi", "solegnolia_chibi"
];

ServerEvents.recipes(function (event) {
  // Replace botania fertilizer with bone meal
  event.replaceInput({}, "botania:fertilizer", "minecraft:bone_meal");
  event.replaceOutput({}, "botania:fertilizer", "minecraft:bone_meal");
  event.remove({ output: "botania:fertilizer" });

  // Remove petal/flower related recipes for each color
  for (var i = 0; i < COLORS.length; i++) {
    var color = COLORS[i];

    // Replace petals with dyes in recipes
    event.replaceInput({}, "botania:" + color + "_petal", "minecraft:" + color + "_dye");
    event.replaceOutput({}, "botania:" + color + "_petal", "minecraft:" + color + "_dye");
    event.replaceInput({}, "botania:" + color + "_mushroom", "minecraft:" + color + "_dye");
    event.replaceOutput({}, "botania:" + color + "_mushroom", "minecraft:" + color + "_dye");

    // Remove create petal milling recipes
    event.remove({ id: "create:compat/botania/milling/" + color + "_petal" });

    // Remove botania petal to dye recipes
    event.remove({ id: "botania:dye_" + color });

    // Remove petal block, flowers
    event.remove({ output: "botania:" + color + "_petal_block" });
    event.remove({ output: "botania:" + color + "_shiny_flower" });
    event.remove({ output: "botania:" + color + "_mystical_flower" });
    event.remove({ output: "botania:" + color + "_floating_flower" });
    event.remove({ output: "botania:" + color + "_double_flower" });
    event.remove({ output: "botania:" + color + "_petal" });
    event.remove({ output: "botania:" + color + "_mushroom" });
  }

  // Remove mushroom recipes (0-15)
  for (var i = 0; i < 16; i++) {
    event.remove({ id: "botania:mushroom_" + i });
  }

  // Remove jaded amaranthus and related items
  event.remove({ output: "botania:jaded_amaranthus" });
  event.remove({ output: "botania:floating_jaded_amaranthus" });
  event.remove({ output: "botania:flower_bag" });
  event.remove({ output: "botania:pestle_and_mortar" });

  // Floating functional flower recipes - use dirt instead of original
  for (var i = 0; i < FUNCTIONAL_FLOWERS.length; i++) {
    var flower = FUNCTIONAL_FLOWERS[i];
    event.remove({ output: "botania:floating_" + flower });
    event.shapeless("botania:floating_" + flower, [
      "botania:" + flower,
      "#minecraft:dirt"
    ]);
  }

  // Simplified colored quartz recipes
  var quartzRecipes = [
    ["botania:dark_quartz", "#minecraft:coals"],
    ["botania:lavender_quartz", "#forge:dyes/magenta"],
    ["botania:sunny_quartz", "minecraft:sunflower"],
    ["botania:blaze_quartz", "minecraft:blaze_powder"],
    ["botania:red_quartz", "minecraft:redstone"],
    ["botania:mana_quartz", "botania:mana_bottle"],
    ["botania:elf_quartz", "create:refined_radiance"]
  ];
  for (var i = 0; i < quartzRecipes.length; i++) {
    var quartzBlock = quartzRecipes[i][0];
    var ingredient = quartzRecipes[i][1];
    event.remove({ output: quartzBlock });
    event.shaped(Item.of(quartzBlock, 8), ["###", "#i#", "###"], {
      "#": "minecraft:quartz_block",
      "i": ingredient
    });
  }

  // Replace elven quartz with dragonstone
  event.replaceInput({}, "botania:quartz_elven", "botania:dragonstone");
  event.replaceOutput({}, "botania:quartz_elven", "botania:dragonstone");
  event.remove({ id: "botania:elven_trade/elf_quartz" });

  // Remove quartz items (the small ones, not the blocks)
  var quartzItems = [
    "botania:quartz_dark", "botania:quartz_lavender", "botania:quartz_sunny",
    "botania:quartz_blaze", "botania:quartz_red", "botania:quartz_mana"
  ];
  for (var i = 0; i < quartzItems.length; i++) {
    event.remove({ output: quartzItems[i] });
  }

  // Tiara recipes - use quartz blocks
  var tiaraQuartz = [
    "minecraft:quartz_block", "botania:dark_quartz", "botania:mana_quartz",
    "botania:blaze_quartz", "botania:lavender_quartz", "botania:red_quartz",
    "botania:elf_quartz", "botania:sunny_quartz"
  ];
  for (var i = 0; i < tiaraQuartz.length; i++) {
    event.remove({ id: "botania:flight_tiara_" + (i + 1) });
    event.shapeless(Item.of("botania:flight_tiara", "{variant:" + (i + 1) + "}"), [
      "botania:flight_tiara",
      tiaraQuartz[i]
    ]);
  }

  // Replace mana string with regular string
  event.replaceInput({}, "botania:mana_string", "minecraft:string");
  event.replaceOutput({}, "botania:mana_string", "minecraft:string");
  event.remove({ output: "botania:mana_string" });

  // Replace manaweave cloth with spell cloth
  event.replaceInput({}, "botania:manaweave_cloth", "botania:spell_cloth");
  event.replaceOutput({}, "botania:manaweave_cloth", "botania:spell_cloth");
  event.remove({ output: "botania:manaweave_cloth" });
  event.remove({ output: "botania:spell_cloth" });
  event.shaped("botania:spell_cloth", [" s ", "sms", " s "], {
    "s": "minecraft:string",
    "m": "botania:mana_pearl"
  });
  event.recipes.create.mixing(Item.of("botania:spell_cloth", 2), [
    "botania:mana_pearl",
    "8x minecraft:white_wool"
  ]).heated();

  // Replace mana powder with lapis
  event.remove({ id: "botania:mana_infusion/mana_powder_dust" });
  event.replaceInput({}, "botania:mana_powder", "minecraft:lapis_lazuli");
  event.custom({
    type: "botania:mana_infusion",
    input: { tag: "forge:dusts/infusable" },
    output: { item: "minecraft:lapis_lazuli" },
    mana: 10
  });
});

// Tag modifications for deflowered
ServerEvents.tags("item", function (event) {
  // Hide removed flower/petal items
  for (var i = 0; i < COLORS.length; i++) {
    var color = COLORS[i];
    var items = [
      "botania:" + color + "_petal_block",
      "botania:" + color + "_shiny_flower",
      "botania:" + color + "_mystical_flower",
      "botania:" + color + "_floating_flower",
      "botania:" + color + "_double_flower",
      "botania:" + color + "_petal",
      "botania:" + color + "_mushroom"
    ];
    for (var j = 0; j < items.length; j++) {
      event.removeAllTagsFrom(items[j]);
      event.add("c:hidden_from_recipe_viewers", items[j]);
      event.add("c:removed", items[j]);
    }
  }

  // Hide other removed items
  var removedItems = [
    "botania:fertilizer",
    "botania:jaded_amaranthus",
    "botania:floating_jaded_amaranthus",
    "botania:flower_bag",
    "botania:pestle_and_mortar",
    "botania:mana_string",
    "botania:manaweave_cloth",
    "botania:quartz_elven",
    "botania:quartz_dark",
    "botania:quartz_lavender",
    "botania:quartz_sunny",
    "botania:quartz_blaze",
    "botania:quartz_red",
    "botania:quartz_mana"
  ];
  for (var i = 0; i < removedItems.length; i++) {
    event.removeAllTagsFrom(removedItems[i]);
    event.add("c:hidden_from_recipe_viewers", removedItems[i]);
    event.add("c:removed", removedItems[i]);
  }

  // Infusable dusts tag for mana powder replacement
  var infusableDusts = [
    "minecraft:glowstone_dust",
    "minecraft:redstone",
    "minecraft:sugar",
    "minecraft:gunpowder",
    "minecraft:blaze_powder",
    "supplementaries:ash",
    "create:cinder_flour",
    "create:wheat_flour"
  ];
  for (var i = 0; i < infusableDusts.length; i++) {
    event.add("forge:dusts/infusable", infusableDusts[i]);
  }

  // Lapis as mana dust
  event.add("botania:mana_dusts", "minecraft:lapis_lazuli");
  event.remove("botania:mana_dusts", "botania:mana_powder");
  event.remove("forge:dusts", "botania:mana_powder");
});
