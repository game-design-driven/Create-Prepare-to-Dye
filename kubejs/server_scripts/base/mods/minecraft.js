if (feature("Paper recipes")) {
  removeRecipe({ id: "minecraft:crafting_shaped/paper" });
  addAssembly("2x paper", "createdieselgenerators:wood_chip", [
    addPressing("stick", "stick"),
    addFilling("stick", "stick", "25x milk"),
  ]);
  addAssembly("3x paper", "createdieselgenerators:wood_chip", [
    addPressing("stick", "stick"),
    addFilling("stick", "stick", "25x water"),
    addPressing("stick", "stick"),
    addFilling("stick", "stick", "75x water"),
    addPressing("stick", "stick"),
  ]);
}
if (feature("Chest recipes")) {
  addShaped("chest", ["###", "# #", "###"], { "#": "#planks" });
  addShaped("4x chest", ["###", "# #", "###"], { "#": "#logs" });
}
if (feature("Convenience recipes")) {
  if (!feature("Remove crafting table recipes for devices")) {
    addShaped("2x piston", ["www", "cmc", "crc"], {
      w: "#planks",
      c: "#forge:cobblestone",
      m: "#forge:ingots/brass",
      r: "redstone",
    });
    addShaped("dispenser", ["###", "#p#", "#r#"], {
      "#": "#forge:cobblestone",
      "p": "piston",
      "r": "redstone",
    });
  }
  replaceShaped("beacon", ["ggg", "gng", "ooo"], {
    g: "#forge:glass",
    n: "nether_star",
    o: "obsidian",
  });
}
if (
  feature("Make dispenser use tags") &&
  !feature("Remove crafting table recipes for devices")
) {
  removeRecipe({ id: "minecraft:dispenser" });
  addShaped("dispenser", ["###", "#p#", "#r#"], {
    "#": "#forge:cobblestone",
    "p": "bow",
    "r": "redstone",
  });
}
if (feature("Glass from stained glass")) {
  // addFluidTransomItem('glass', '#forge:stained_glass')
}
if (feature("Firecharge recipes")) {
  addShapeless("fire_charge", [
    "redstone",
    "redstone",
    "#forge:gunpowder",
    "#coals",
  ]);
}
if (feature("Revive dirt")) {
  addMixing("dirt", ["coarse_dirt", "#forge:fertilizer"]);
}
if (feature("Tnt recipes")) {
  addAltar("16x tnt", ["4x sand", "4x #forge:gunpowder", "8x #forge:dyes/red"]);
}
if (feature("Redstone recipes")) {
  // addFluidTransomItem('redstone', ['#forge:nuggets', '#forge:crops/nether_wart'], 'create:honey', 1)
  // addFluidTransomItem('redstone', ['32x #forge:nuggets/gold', '4x #forge:crops/nether_wart'])
  addCompacting("redstone", ["nether_wart_block", "#forge:dusts/mana"]);
}
if (feature("Kelp recipes")) {
  addInfusion("kelp", "4x sugar_cane");
  // addFluidTransomItem('kelp', '#forge:bushes', undefined, 0.25, 3);
}
if (feature("Bee duping flowers and saplings")) {
  let manaCost = 3000;
  Ingredient.of("#forge:regular_flowers").stacks.forEach((flower) => {
    flower = flower.id;
    addInfusion("2x " + flower, flower, manaCost, "bee_nest[honey_level=5]");
  });
  if (!feature("Remove saplings")) {
    Ingredient.of("#minecraft:saplings").stacks.forEach((sapling) => {
      sapling = sapling.id;
      addInfusion(
        "2x " + sapling,
        sapling,
        manaCost,
        "bee_nest[honey_level=5]"
      );
    });
  }
}
if (feature("prismarine_crystals removed from mobdrop")) {
  // <entitytype:minecraft:guardian>.addLootModifier("remove_prismarine_crystals_g", CommonLootModifiers.remove(<item:minecraft:prismarine_crystals>));
  // <entitytype:minecraft:elder_guardian>.addLootModifier("remove_prismarine_crystals_eg", CommonLootModifiers.remove(<item:minecraft:prismarine_crystals>));
  // addFluidTransomItem(['prismarine_crystals %5', 'blue_dye %2', 'light_blue_dye %1', 'cyan_dye %2'], '#forge:dusts/prismarine')
}
if (feature("Red sand")) {
  // addFluidTransomItem('red_sand', '#forge:sand/colorless', 'create:honey', 0.2)
}
if (feature("Diamond recipes")) {
  addCompacting(
    "diamond",
    "8x #forge:storage_blocks/coal",
    temperature.superHeated
  );
  addCompacting(
    "diamond",
    "64x #forge:storage_blocks/charcoal",
    temperature.superHeated
  );
}
if (feature("Obsidian recipes")) {
  // addFluidTransomItem('obsidian', '#forge:containers/lava')
}
if (feature("phantom_membrane")) {
  addAltar("phantom_membrane", ["#beds", "2x cake", "2x leather"]);
}
if (feature("Ghast tear")) {
  addMixing("4x ghast_tear", ["botania:rune_sloth", "botania:rune_air"]);
  addMixing("ghast_tear", "#forge:nuggets/gold", false, undefined, undefined, [
    "lava",
    "milk",
  ]);
}
if (feature("Netherrack and nether_brick")) {
  addCrushing(
    ["copper_ingot %40", "netherrack %25", "nether_wart %10"],
    "nether_brick"
  );
  // addBlockExplode('netherrack', 'red_nether_bricks')
}
if (feature("Uses for netherite")) {
  addShaped("beacon", ["ggg", "grg", "ono"], {
    g: "#forge:glass",
    r: "botania:terrasteel_ingot",
    o: "obsidian",
    n: "#forge:storage_blocks/netherite",
  });
}
if (feature("Dye from meat")) {
  addCrushing(["pink_dye %75", "red_dye %25"], "porkchop");
  addCrushing(["red_dye %75", "pink_dye %25"], "beef");
}
if (feature("Bone recipes")) {
  // addFluidTransomItem('bone', '8x #forge:meat', 'kubejs:acid', 0.1)//use kjs acid
}
if (feature("Bamboo recipes")) {
  addAlchemyRecipe("bamboo", "sugar_cane");
}

if (feature("Crying obsidian recipes")) {
  // addBlockAnvil('crying_obsidian', 'obsidian')
}
if (feature("Sponge recipes")) {
  addMixing(
    "sponge",
    ["#minecraft:leaves", "9x #forge:plastic"],
    temperature.heated,
    2000
  );
}

if (feature("Sticky pistons using bottle of honey")) {
  //instead of slime
  addShaped("sticky_piston", ["h", "p"], { p: "piston", h: "honey_bottle" });
}

if (feature("slime from honey and terrasteel")) {
  addItemApplication("slime_block", "honey_block", "botania:terrasteel_ingot");
  addCompacting(
    "slime_block",
    "12x botania:terrasteel_nugget",
    temperature.none,
    undefined,
    undefined,
    "750x create:honey"
  );
}

if (feature("Separate magma cream")) {
  addAssembly(
    [
      "slime_ball %90",
      "red_dye %1",
      "orange_dye %1",
      "yellow_dye %1",
      "blaze_powder %7",
    ],
    "magma_cream",
    [addCutting("slime_ball", "magma_cream")],
    2
  );
  addSandpaperPolishing("slime_ball %95", "magma_cream");
  addCrushing(
    ["slime_ball %50", "blaze_powder %25", "red_dye %4"],
    "magma_cream"
  );
}

if (feature("Netherrack from nether_wart_block")) {
  addItemApplication("netherrack", "nether_wart_block", "cobblestone");
  addItemApplication("netherrack", "cobblestone", "nether_wart_block");
}

if (feature("Netherwart to redstone")) {
  addSmelting("redstone %10", "#forge:crops/nether_wart");
}

if (feature("Redstone from quartz")) {
  addCrushing(["redstone %50", "quartz %25", "white_dye %25"], "quartz");
  addMilling(["redstone %70", "white_dye %5"], "quartz");
}

if (feature("Dirt to sand")) {
  addMilling("sand %20", "dirt");
  addCrushing(["sand %10", "clay %10"], "dirt");
}

if (feature("Enchanting table from amethyst")) {
  // addShaped('enchanting_table',[' a ','cdc','ddd'], {b:'book',c:'',d:'obsidian'})
}
if (feature("Calcite from quartz")) {
  addInfusion("calcite", "quartz_block", 500, "obsidian");
}

if (feature("Deepslate from livingwood")) {
  addAlchemyRecipe("deepslate", "botania:livingwood");
}

if (feature("Remove and replace shulker shell with purple dye")) {
  removeAndReplace("shulker_shell", "#forge:dyes/purple");
}

if (feature("kelp to sugar_cane")) {
  addInfusion("sugar_cane", "kelp");
}

if (feature("Hopper without wood")) {
  if (!feature("Remove crafting table recipes for devices")) {
    addShaped("hopper", ["i i", "iai", " i "], {
      i: "#forge:ingots/iron",
      a: "create:andesite_casing",
    });
    addShaped("2x hopper", ["i i", "iai", " i "], {
      i: "#forge:ingots/gold",
      a: "create:andesite_casing",
    });
    addShaped("2x hopper", ["# #", "#c#", " # "], {
      "#": "#forge:ingots/brass",
      "c": "#forge:chests",
    });
  }
}

if (feature("Remove vanilla andesite recipe")) {
  removeRecipe({ id: "minecraft:andesite" });
}

if (feature("Remove enchanting table")) {
  removeItems(["minecraft:enchanting_table"]);
}

if (feature("Remove end portal")) {
  removeItem("minecraft:end_portal_frame");
}

if (feature("Endstone from cheese")) {
  addCompacting("end_stone", "9x kubejs:fermented_blob", temperature.heated);
}

// if (feature("Item frame recipes")) {
//   removeRecipe({ id: "minecraft:item_frame" });
//   addShapeless("item_frame", ["stick", "stick", "stick", "#forge:canvasables"]);
// }

if (feature("Sugar recipe tweaks")) {
  removeRecipe({ id: "minecraft:sugar_from_sugar_cane" });
  removeRecipe({ id: "minecraft:sugar_from_honey_bottle" });
  removeRecipe({ id: "create:milling/sugar_cane" });
  addMilling("sugar %25", "sugar_cane");
  addCrushing(["sugar %10", "lime_dye %1"], "sugar_cane");
  addMixing(
    ["3x sugar", "3x sugar %50"],
    "250mb create:honey",
    temperature.heated
  );
}

if (feature("Magma block to lava")) {
  addBlockInteract("lava", "magma_block", "create:blaze_cake");
}

if (feature("Magma block more expensive")) {
  removeRecipe({ id: "minecraft:magma_block" });
  addShaped("magma_block", ["###", "###", "###"], { "#": "magma_cream" });
}

if (feature("Slime from magmablock")) {
  addItemApplication("slime_block", "magma_block", "lime_dye");
}

if (feature("Fertilizer into water and organic mass")) {
  addToTag("forge:squeezables/seeds", [
    "minecraft:wheat_seeds",
    "minecraft:melon_seeds",
    "minecraft:pumpkin_seeds",
    "minecraft:beetroot_seeds",
    // "minecraft:cactus",
    // "minecraft:bamboo",
  ]);
  addToTag("forge:squeezables/poor", [
    "quark:sugar_cane_block",
    "quark:bamboo_block",
    "quark:cactus_block",
  ]);
  addToTag("forge:squeezables/rich", [
    "quark:apple_crate",
    "quark:beetroot_crate",
    "quark:carrot_crate",
    "quark:potato_crate",
    "quark:chorus_fruit_block",
    "quark:berry_sack",
    "minecraft:pumpkin",
  ]);
  removeRecipe({ id: "createdieselgenerators:compacting/plant_oil" });
  addCompacting(
    ["50mb kubejs:organic_mass", "10mb createdieselgenerators:plant_oil"],
    "#forge:squeezables/seeds"
  );
  addCompacting(
    "50mb createdieselgenerators:plant_oil",
    "#forge:squeezables/seeds",
    temperature.heated
  );
  addCompacting("100mb kubejs:organic_mass", "minecraft:poisonous_potato");
  addCompacting("250mb kubejs:organic_mass", "#forge:squeezables/poor");
  addCompacting("500mb kubejs:organic_mass", "#forge:squeezables/rich");
  addDistillation(
    ["8mb water", "2mb createdieselgenerators:plant_oil"],
    "10mb kubejs:organic_mass"
  );

  addMixing(
    ["10mb create_enchantment_industry:experience"],
    ["200mb kubejs:organic_mass", "50mb milk"],
    temperature.heated,
    500
  );
}

if (feature("get dripstone")) {
  addInfusion("pointed_dripstone", "granite");
}

if (feature("Stone tools from livingrock")) {
  addShaped("stone_pickaxe", ["lll", " s ", " s "], {
    l: "botania:livingrock",
    s: "stick",
  });
  addShaped("stone_axe", ["ll ", "ls ", " s "], {
    l: "botania:livingrock",
    s: "stick",
  });
  addShaped("stone_shovel", [" l ", " s ", " s "], {
    l: "botania:livingrock",
    s: "stick",
  });
  addShaped("stone_sword", [" l ", " l ", " s "], {
    l: "botania:livingrock",
    s: "stick",
  });
  addShaped("stone_hoe", ["ll ", " s ", " s "], {
    l: "botania:livingrock",
    s: "stick",
  });
}

if (feature("Metal Trap door Recipe bigger")) {
  removeRecipe({ id: "minecraft:iron_trapdoor" });
  addStonecutting("3x iron_trapdoor", "iron_block");
}
if (feature("Soulsand from sand and brown")) {
  addBlockInteract("minecraft:soul_sand", "#forge:sand", "brown_dye");
}

if (feature("Choros fruit from bamboo")) {
  addAlchemyRecipe("chorus_fruit", "bamboo");
}

if (feature("Remove furnaces")) {
  //removeItem('furnace')
  removeItem("blast_furnace");
  removeItem("smoker");
}

if (feature("Choros flower from choros batch")) {
  addBlockInteractToItem(
    "chorus_flower",
    "quark:chorus_fruit_block",
    "bone_meal"
  );
}

if (feature("Replace sticks with forge:rods")) {
  replaceInputForRecipes("stick", "#forge:rods");
}

if (feature("Cactus from Choros fruite alchemy")) {
  addAlchemyRecipe("cactus", "quark:chorus_fruit_block");
}

if (feature("Elytra recipe")) {
  addShaped("elytra", ["lpl", "l l", "g g"], {
    l: "#forge:canvasables",
    p: "purple_dye",
    g: "gray_dye",
  });
}
if (feature("Bush from grassblock and bonemeal")) {
  addGrow(
    ["minecraft:grass", "minecraft:tall_grass"],
    "minecraft:grass_block",
    "bone_meal",
    true
  );
  addGrow("minecraft:tall_grass", "minecraft:grass", "bone_meal", true);
}

if (feature("Remove vanilla bonemeal from bones recipe")) {
  removeRecipe({ id: "minecraft:bone_meal" });
}
// if (feature('Nether brick from chocolate and black')) {
//     addAssembly('2x nether_brick', '#forge:ingots',[
//         addDeploying('stick','stick','#forge:nuggets'),
//         addFilling('stick', 'stick', '50x create:chocolate'),
//         addFilling('stick', 'stick', '50x create_enchantment_industry:ink')
//     ])
// }

if (feature("Rotten flesh purification")) {
  addFilling(
    "minecraft:leather",
    "rotten_flesh",
    Fluid.of("create:potion", 50, {
      Potion: "minecraft:regeneration",
    })
  );
}

if (feature("Gray dye into black dye")) {
  addSmelting("3x black_dye", "ptdye:gray_dye_block", 1, 400);
}

if (feature("Block of yellow to yellow")) {
  addShapeless("9x minecraft:gold_ingot", "minecraft:gold_block");
}

if (feature("Netherack with healing potion and cobblestone")) {
  addFilling(
    "minecraft:netherrack",
    "cobblestone",
    Fluid.of("create:potion", 5, {
      Potion: "minecraft:healing",
    })
  );
}

if (feature("Wax recipes")) {
  addMixing("minecraft:honeycomb", ["9x ae2:silicon", "yellow_dye"]);
  addMixing(
    "minecraft:honeycomb",
    ["3x ae2:silicon", "4x yellow_dye"],
    temperature.heated
  );
  addFilling("minecraft:honeycomb", "ae2:silicon", "750x create:honey");
}

if (feature("Book back into paper")) {
  addCutting("3x paper", "book");
}

if (feature("Spider eye with manapool")) {
  addInfusion("spider_eye", "red_dye", 1250, "minecraft:grass_block");
}

if (feature("Blaze rod production")) {
  addInfusion("blaze_rod", "stick", 20000, "minecraft:magma_block");
}

if (feature("Remove none oak boats")) {
  removeItems([
    "minecraft:acacia_boat",
    "minecraft:birch_boat",
    "minecraft:dark_oak_boat",
    "minecraft:jungle_boat",
    "minecraft:spruce_boat",
    "minecraft:mangrove_boat",
    "minecraft:acacia_chest_boat",
    "minecraft:birch_chest_boat",
    "minecraft:dark_oak_chest_boat",
    "minecraft:jungle_chest_boat",
    "minecraft:spruce_chest_boat",
    "minecraft:mangrove_chest_boat",
    "quark:blossom_boat",
    "quark:blossom_chest_boat",
  ]);
  removeRecipe({ id: "minecraft:oak_boat" });
  removeRecipe({
    id: "quark:tweaks/crafting/utility/chest_boat/direct_oak_chest_boat",
  });
  addShaped("oak_boat", ["# #", "###"], { "#": "#planks" });
  addShaped("oak_chest_boat", ["#c#", "###"], { "#": "#logs", "c": "chest" });
}

if (feature('Crushing or milling enchanted book gives experience')) {
  addMilling(['2x paper', 'create:experience_nugget %55'], Item.of('minecraft:enchanted_book').weakNBT())
  addCrushing(['paper %75','create:experience_nugget %75'], Item.of('minecraft:enchanted_book').weakNBT())
  //todo fix this not showing in EMI
}

if (feature('Netherite gear regular recipes')) {
  removeRecipe({ id: 'minecraft:netherite_helmet_smithing' })
  removeRecipe({ id: 'minecraft:netherite_chestplate_smithing' })
  removeRecipe({ id: 'minecraft:netherite_leggings_smithing' })
  removeRecipe({ id: 'minecraft:netherite_boots_smithing' })
  addShaped('netherite_helmet', ['nnn', 'n n'], { n: '#forge:ingots/netherite' })
  addShaped('netherite_chestplate', ['n n', 'nnn', 'nnn'], { n: '#forge:ingots/netherite' })
  addShaped('netherite_leggings', ['nnn', 'n n', 'n n'], { n: '#forge:ingots/netherite' })
  addShaped('netherite_boots', ['n n', 'n n'], { n: '#forge:ingots/netherite' })
  addShaped('netherite_sword', ['n', 'n', 's'], { n: '#forge:ingots/netherite', s: '#forge:rods' })
}