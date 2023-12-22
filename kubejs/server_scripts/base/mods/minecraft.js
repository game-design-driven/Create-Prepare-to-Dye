if (feature("Paper recipes")) {
  replaceShaped("paper", "###", { "#": "sugar_cane" }, true);
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
  if (!feature('Remove saplings')) {
    Ingredient.of("#minecraft:saplings").stacks.forEach((sapling) => {
      sapling = sapling.id;
      addInfusion("2x " + sapling, sapling, manaCost, "bee_nest[honey_level=5]");
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
    ["brick %50", "netherrack %25", "nether_wart %10"],
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

if (feature("Item frame recipes")) {
  removeRecipe({ id: "minecraft:item_frame" });
  addShapeless("item_frame", ["stick", "stick", "stick", "#forge:canvasables"]);
}

if (feature("Sugar recipe tweaks")) {
  removeRecipe({ id: "minecraft:sugar_from_sugar_cane" });
  removeRecipe({ id: "create:milling/sugar_cane" });
  addMilling("sugar %25", "sugar_cane");
  addCrushing(["sugar %10", "lime_dye %1"], "sugar_cane");
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

if (feature("Fertilizer into water")) {
  addToTag("forge:squeezables/1", [
    "minecraft:wheat_seeds",
    "minecraft:melon_seeds",
    "minecraft:pumpkin_seeds",
    "minecraft:beetroot_seeds",
    "minecraft:cactus",
    "minecraft:bamboo",
  ]);
  addToTag("forge:squeezables/2", [
    "minecraft:apple",
    "minecraft:beetroot",
    "minecraft:carrot",
    "minecraft:potato",
    "minecraft:chorus_fruit",
    "minecraft:sweet_berries",
    "minecraft:melon_slice",
  ]);
  addToTag("forge:squeezables/3", ["minecraft:pumpkin"]);
  removeRecipe({ id: "createdieselgenerators:compacting/plant_oil" });
  addCompacting("25mb kubejs:organic_mass", "#forge:squeezables/1");
  addCompacting("100mb kubejs:organic_mass", "#forge:squeezables/2");
  addCompacting("125mb kubejs:organic_mass", "minecraft:poisonous_potato");
  addCompacting("200mb kubejs:organic_mass", "#forge:squeezables/3");
  addDistillation(
    ["8mb water", "2mb createdieselgenerators:plant_oil"],
    "10mb kubejs:organic_mass"
  );

  addMixing(
    [
      "1mb create_enchantment_industry:experience",
      "create:experience_nugget %10",
    ],
    ["250mb kubejs:organic_mass", "250mb milk"],
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
  addShaped("2x iron_trapdoor", ["###", "###"], { "#": "#forge:plates/iron" });
}
if (feature("Soulsand from sand and brown")) {
  addBlockInteract("minecraft:soul_sand", "#forge:sand", "brown_dye");
}

if (feature("Choros fruit from bamboo")) {
  addAlchemyRecipe("chorus_fruit", "bamboo");
}
if (feature("Gold is 4 nuggets")) {
  removeRecipe({ id: "create:splashing/crushed_raw_gold" });
  addSplashing(
    ["4x gold_nugget", "ae2:large_quartz_bud %5"],
    "create:crushed_raw_gold"
  );

  removeRecipe({ id: "minecraft:gold_ingot_from_nuggets" });
  replaceShapeless("gold_ingot", ["4x minecraft:gold_nugget"]);

  removeRecipe({ id: "minecraft:gold_nugget" });
  addShapeless("4x minecraft:gold_nugget", "gold_ingot");

  removeRecipe({ id: "create:crushing/nether_gold_ore" });
  addCrushing(
    ["8x gold_nugget", "create:experience_nugget %75", "netherrack %10"],
    "nether_gold_ore"
  );
}

if (feature("Remove furnaces")) {
  //removeItem('furnace')
  removeItem("blast_furnace");
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
    l: Ingredient.of("leather").or("ae2:silicon").or("dried_kelp"),
    p: "purple_dye",
    g: "gray_dye",
  });
}
if (feature('Bush from grassblock and bonemeal')) {
  addGrow('minecraft:grass', 'minecraft:grass_block', 'bone_meal', true)
}

if (feature('Remove vanilla bonemeal from bones recipe')) {
  removeRecipe({ id: 'minecraft:bone_meal' })
}
// if (feature('Nether brick from chocolate and black')) {
//     addAssembly('2x nether_brick', '#forge:ingots',[
//         addDeploying('stick','stick','#forge:nuggets'),
//         addFilling('stick', 'stick', '50x create:chocolate'),
//         addFilling('stick', 'stick', '50x create_enchantment_industry:ink')
//     ])
// }

// if (feature('Grass from grass block with shears accessibility recipe')) {
// }
// if (feature('Replace slab with full')) {
//     forEachRecipe({ type: 'minecraft:crafting' }, recipe => {
//         let json = recipe.json;"
//         ""minecraft:any_of""
//         if (json.get('catalyst') === '{"type":"block","block":"botania:alchemy_catalyst"}') {
            
//             let ingredients = recipe.getOriginalRecipeIngredients();
//             if (ingredients.length != 1) return;
    
//             let resultId = recipe.getOriginalRecipeResult().getId();
//             let ingredientId = ingredients[0].getItemIds()[0];
            
//             if (global.itemsToRemove.includes(resultId) || global.itemsToRemove.includes(ingredientId)) return;

//             addAlchemyRecipe(recipe.getOriginalRecipeResult(), ingredients[0], parseInt(json.get('mana')))
//             recipe.remove()
//         }
//     })
// }
