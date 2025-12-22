//priority: 1
//Create Prepare to Dye 2 - Shaped and Shapeless Crafting Recipes

ServerEvents.recipes((event) => {
  // Colors list for dye block recipes
  const colors = [
    "white", "orange", "magenta", "light_blue", "yellow", "lime", "pink",
    "gray", "light_gray", "cyan", "purple", "blue", "brown", "green", "red", "black"
  ];

  // Dye storage blocks
  for (var i = 0; i < colors.length; i++) {
    var color = colors[i];
    event.shapeless("9x minecraft:" + color + "_dye", "ptdye:" + color + "_dye_block");
    event.shapeless("ptdye:" + color + "_dye_block", [
      "minecraft:" + color + "_dye",
      "minecraft:" + color + "_dye",
      "minecraft:" + color + "_dye",
      "minecraft:" + color + "_dye",
      "minecraft:" + color + "_dye",
      "minecraft:" + color + "_dye",
      "minecraft:" + color + "_dye",
      "minecraft:" + color + "_dye",
      "minecraft:" + color + "_dye",
    ]);
  }

  // Gray dye from gunpowder
  event.shapeless("minecraft:gray_dye", [
    "minecraft:gunpowder",
    "minecraft:white_dye",
  ]);

  // Yellow dye from sunflower
  event.remove({ id: "minecraft:yellow_dye_from_sunflower" });
  event.shapeless("minecraft:yellow_dye", "minecraft:sunflower");

  // White dye (more expensive)
  event.remove({ id: "minecraft:white_dye" });
  event.shapeless("minecraft:white_dye", [
    "minecraft:bone_meal",
    "minecraft:bone_meal",
    "minecraft:bone_meal",
    "minecraft:bone_meal",
  ]);
  event.shapeless("minecraft:white_dye", [
    "create:wheat_flour",
    "create:wheat_flour",
    "create:wheat_flour",
    "create:wheat_flour",
  ]);

  // Black dye (more expensive)
  event.remove({ id: "quark:tweaks/crafting/utility/misc/charcoal_to_black_dye" });
  event.shapeless("minecraft:black_dye", [
    "minecraft:coal",
    "minecraft:coal",
    "minecraft:coal",
    "minecraft:coal",
  ]);

  // Yellow dye alternative
  event.shapeless("minecraft:yellow_dye", [
    "minecraft:red_dye",
    "minecraft:green_dye",
  ]);

  // Color combinations (nerf output)
  event.remove({ id: "minecraft:pink_dye_from_red_and_white" });
  event.shapeless("minecraft:pink_dye", [
    "minecraft:red_dye",
    "minecraft:white_dye",
  ]);

  event.remove({ id: "minecraft:purple_dye" });
  event.shapeless("minecraft:purple_dye", [
    "minecraft:red_dye",
    "minecraft:blue_dye",
  ]);

  event.remove({ id: "minecraft:light_blue_dye_from_blue_and_white_dye" });
  event.shapeless("minecraft:light_blue_dye", [
    "minecraft:blue_dye",
    "minecraft:white_dye",
  ]);

  event.remove({ id: "minecraft:orange_dye_from_red_and_yellow" });
  event.shapeless("minecraft:orange_dye", [
    "minecraft:red_dye",
    "minecraft:yellow_dye",
  ]);

  event.remove({ id: "minecraft:magenta_dye_from_purple_and_pink" });
  event.remove({ id: "minecraft:magenta_dye_from_blue_red_pink" });
  event.remove({ id: "minecraft:magenta_dye_from_blue_red_white" });
  event.shapeless("minecraft:magenta_dye", [
    "minecraft:purple_dye",
    "minecraft:pink_dye",
  ]);
  event.shapeless("minecraft:magenta_dye", [
    "minecraft:blue_dye",
    "minecraft:red_dye",
    "minecraft:pink_dye",
  ]);
  event.shapeless("minecraft:magenta_dye", [
    "minecraft:blue_dye",
    "2x minecraft:red_dye",
    "minecraft:white_dye",
  ]);

  event.remove({ id: "minecraft:lime_dye" });
  event.shapeless("minecraft:lime_dye", [
    "minecraft:green_dye",
    "minecraft:white_dye",
  ]);

  event.remove({ id: "minecraft:gray_dye" });
  event.shapeless("minecraft:gray_dye", [
    "minecraft:black_dye",
    "minecraft:white_dye",
  ]);

  event.remove({ id: "minecraft:light_gray_dye_from_gray_white_dye" });
  event.remove({ id: "minecraft:light_gray_dye_black_white_dye" });
  event.shapeless("minecraft:light_gray_dye", [
    "minecraft:gray_dye",
    "minecraft:white_dye",
  ]);
  event.shapeless("minecraft:light_gray_dye", [
    "minecraft:black_dye",
    "2x minecraft:white_dye",
  ]);

  event.remove({ id: "minecraft:cyan_dye" });
  event.shapeless("minecraft:cyan_dye", [
    "minecraft:green_dye",
    "minecraft:blue_dye",
  ]);

  // Brown dye (more expensive)
  event.remove({ id: "minecraft:brown_dye" });
  event.shapeless("minecraft:brown_dye", [
    "minecraft:cocoa_beans",
    "minecraft:cocoa_beans",
    "minecraft:cocoa_beans",
    "minecraft:cocoa_beans",
  ]);

  // Light blue dye from glow ink sac
  event.shapeless("minecraft:light_blue_dye", [
    "minecraft:glow_ink_sac",
    "minecraft:glow_ink_sac",
    "minecraft:glow_ink_sac",
    "minecraft:glow_ink_sac",
  ]);

  // Andesite alloy
  let grayDye = Ingredient.of("minecraft:gray_dye")
    .or(Item.of("minecraft:light_gray_dye"))
    .or(Item.of("minecraft:black_dye"));
  event.shaped("4x create:andesite_alloy", ["di", "ia"], {
    d: grayDye,
    i: "#forge:ingots/iron",
    a: "minecraft:andesite",
  });

  // Cogwheel recipes
  event.shaped("2x create:cogwheel", [" w ", "wsw", " w "], {
    w: "#minecraft:planks",
    s: "create:shaft",
  });
  event.remove({ id: "create:crafting/kinetics/large_cogwheel" });
  event.remove({ id: "create:crafting/kinetics/cogwheel" });
  event.remove({ id: "create:crafting/kinetics/large_cogwheel_from_little" });
  event.shapeless("create:large_cogwheel", "create:cogwheel");
  event.shapeless("create:cogwheel", "create:large_cogwheel");

  // Mechanical belt
  event.remove({ id: "create:crafting/kinetics/belt_connector" });
  event.shaped("2x create:belt_connector", ["ll"], {
    l: "#forge:canvasables",
  });
  event.shaped("12x create:belt_connector", ["lll", "sss", "kkk"], {
    l: "#forge:leather",
    s: "#forge:silicon",
    k: "minecraft:dried_kelp",
  });

  // Goggles
  event.remove({ id: "create:crafting/kinetics/goggles" });
  event.shaped("create:goggles", [" s ", "gpg"], {
    s: "#forge:string",
    g: "#forge:glass",
    p: "#forge:plates",
  });

  // Toolbox
  event.remove({ id: "create:crafting/curiosities/brown_toolbox" });
  event.shaped("create:brown_toolbox", [" c ", "pCp", " l "], {
    c: "#forge:cogs",
    p: "#forge:plates",
    l: "#forge:canvasables",
    C: "#forge:chests",
  });

  // Metal girder
  event.shaped("32x create:metal_girder", ["ppp", "pdp"], {
    p: "#forge:plates/iron",
    d: "#forge:dyes/black",
  });

  // Shaft without andesite
  event.shaped("10x create:shaft", ["i", "i", "i"], {
    i: "#forge:ingots/iron",
  });

  // Piston extension pole
  event.shaped("8x create:piston_extension_pole", ["i", "s", "i"], {
    s: "minecraft:stick",
    i: "#forge:nuggets/iron",
  });

  // Gantry shaft
  event.shaped("8x create:gantry_shaft", ["i", "s", "i"], {
    s: "minecraft:redstone",
    i: "#forge:ingots/iron",
  });

  // Block of brass from plates
  event.remove({ id: "create:crafting/materials/brass_block_from_compacting" });
  event.shaped("create:brass_block", ["ppp", "ppp", "ppp"], {
    p: "#forge:plates/brass",
  });
  event.shapeless("9x create:brass_sheet", "create:brass_block");

  // Fire charge
  event.shapeless("minecraft:fire_charge", [
    "minecraft:redstone",
    "minecraft:redstone",
    "#forge:gunpowder",
    "#coals",
  ]);

  // Sticky piston with honey bottle
  event.shaped("minecraft:sticky_piston", ["h", "p"], {
    p: "minecraft:piston",
    h: "minecraft:honey_bottle",
  });

  // Magma block (more expensive)
  event.remove({ id: "minecraft:magma_block" });
  event.shaped("minecraft:magma_block", ["###", "###", "###"], {
    "#": "minecraft:magma_cream",
  });

  // Netherite gear recipes
  event.remove({ id: "minecraft:netherite_helmet_smithing" });
  event.remove({ id: "minecraft:netherite_chestplate_smithing" });
  event.remove({ id: "minecraft:netherite_leggings_smithing" });
  event.remove({ id: "minecraft:netherite_boots_smithing" });
  event.shaped("minecraft:netherite_helmet", ["nnn", "n n"], {
    n: "#forge:ingots/netherite",
  });
  event.shaped("minecraft:netherite_chestplate", ["n n", "nnn", "nnn"], {
    n: "#forge:ingots/netherite",
  });
  event.shaped("minecraft:netherite_leggings", ["nnn", "n n", "n n"], {
    n: "#forge:ingots/netherite",
  });
  event.shaped("minecraft:netherite_boots", ["n n", "n n"], {
    n: "#forge:ingots/netherite",
  });
  event.shaped("minecraft:netherite_sword", ["n", "n", "s"], {
    n: "#forge:ingots/netherite",
    s: "#forge:rods",
  });

  // Seeds coloring
  event.shapeless("minecraft:beetroot_seeds", [
    "minecraft:red_dye",
    "#forge:seeds",
  ]);
  event.shapeless("minecraft:pumpkin_seeds", [
    "minecraft:orange_dye",
    "#forge:seeds",
  ]);
  event.shapeless("minecraft:melon_seeds", [
    "minecraft:green_dye",
    "#forge:seeds",
  ]);
  event.shapeless("minecraft:wheat_seeds", [
    "minecraft:yellow_dye",
    "#forge:seeds",
  ]);

  // Beetroot/Carrot conversions
  event.shapeless("minecraft:beetroot", [
    "2x minecraft:red_dye",
    "minecraft:carrot",
  ]);
  event.shapeless("minecraft:carrot", [
    "2x minecraft:orange_dye",
    "minecraft:beetroot",
  ]);

  // Boat recipes
  event.remove({ id: "minecraft:oak_boat" });
  event.shaped("minecraft:oak_boat", ["# #", "###"], { "#": "#planks" });
  event.shaped("minecraft:oak_chest_boat", ["#c#", "###"], {
    "#": "#logs",
    c: "minecraft:chest",
  });

  // Gearbox conversion
  event.shapeless("create:gearbox", "create:vertical_gearbox");
  event.shapeless("create:vertical_gearbox", "create:gearbox");

  // Stone tools from livingrock
  event.shaped("minecraft:stone_pickaxe", ["lll", " s ", " s "], {
    l: "botania:livingrock",
    s: "minecraft:stick",
  });
  event.shaped("minecraft:stone_axe", ["ll ", "ls ", " s "], {
    l: "botania:livingrock",
    s: "minecraft:stick",
  });
  event.shaped("minecraft:stone_shovel", [" l ", " s ", " s "], {
    l: "botania:livingrock",
    s: "minecraft:stick",
  });
  event.shaped("minecraft:stone_sword", [" l ", " l ", " s "], {
    l: "botania:livingrock",
    s: "minecraft:stick",
  });
  event.shaped("minecraft:stone_hoe", ["ll ", " s ", " s "], {
    l: "botania:livingrock",
    s: "minecraft:stick",
  });

  // Livingwood from twigs
  event.shaped("botania:livingwood_log", ["tt", "tt"], {
    t: "botania:livingwood_twig",
  });

  // Lexica Botania from book
  event.shapeless("botania:lexicon", [
    "minecraft:dead_bush",
    "minecraft:book",
  ]);

  // Block of gold from gold ingots
  event.shapeless("9x minecraft:gold_ingot", "minecraft:gold_block");

  // Doormat recipe
  event.remove({ id: "supplementaries:doormat_2" });
  event.shaped("supplementaries:doormat", ["www"], {
    w: "#minecraft:wool",
  });

  // AE2 quartz buds to quartz
  event.shapeless("minecraft:quartz", "ae2:small_quartz_bud");
  event.shapeless("minecraft:quartz", "ae2:medium_quartz_bud");
  event.shapeless("minecraft:quartz", "ae2:large_quartz_bud");

  // Beacon recipe
  event.shaped("minecraft:beacon", ["ggg", "grg", "ono"], {
    g: "#forge:glass",
    r: "botania:terrasteel_ingot",
    o: "minecraft:obsidian",
    n: "#forge:storage_blocks/netherite",
  });
});
