if (feature("Fix create copper scaffolding recipe")) {
  removeRecipe({ id: "create_things_and_misc:copper_scaffolding_craft" });
  addShaped("6x create:copper_scaffolding", ["csc", "c c", "c c"], {
    c: "#forge:ingots/copper",
    s: "#forge:ingots",
  });
}
// if (feature('Remove powdered_obsidian')) {
//     removeItem('create:powdered_obsidian')
//     removeRecipe({ id: 'create:mixing/chromatic_compound' })
//     addMixing('create:chromatic_compound', ['3x obsidian', '3x glowstone_dust', 'create:polished_rose_quartz'], temperature.superHeated)
//     addAltar('create:chromatic_compound', ['2x create:polished_rose_quartz', 'obsidian'], 7500)
// }
// if (feature("Remove tree fertilizer")) {
//   removeItem("create:tree_fertilizer");
// }
if (feature("Remove vanilla honey bottle recipe")) {
  removeRecipe({ id: "minecraft:honey_bottle" });
}

if (feature("Mechanical belt recipes")) {
  //kelp
  removeRecipe({ id: "create:crafting/kinetics/belt_connector" });
  //leather
  addShaped("2x create:belt_connector", ["lll", "lll"], {
    l: "#forge:canvasables",
  });
  //silicon
  //combined
  addShaped("4x create:belt_connector", ["lll", "sss", "kkk"], {
    l: "#forge:leather",
    s: "#forge:silicon",
    k: "minecraft:dried_kelp",
  });
  // addAssembly
}

if (feature("Simpler encased fan")) {
  removeItem("create:propeller");
  if (!feature("Remove crafting table recipes for devices"))
    addShaped("create:encased_fan", [" s ", "pcp", "pap"], {
      s: "create:shaft",
      p: "create:iron_sheet",
      c: "create:andesite_casing",
      a: "create:andesite_alloy",
    });
}

if (feature("Simpler mixer")) {
  removeItem("create:whisk");
  if (!feature("Remove crafting table recipes for devices"))
    addShaped("create:mechanical_mixer", ["aca", "pCp", "ppp"], {
      a: "create:andesite_alloy",
      c: "#forge:cogs",
      C: "create:andesite_casing",
      p: "create:iron_sheet",
    });
}

if (feature("Simpler deployer")) {
  removeItem("create:brass_hand");
  if (!feature("Remove crafting table recipes for devices"))
    addShaped("create:deployer", [" e ", "bcb", "bab"], {
      a: "create:andesite_alloy",
      c: "create:andesite_casing",
      e: "#forge:cogs",
      b: "create:iron_sheet",
    });
}

if (feature("Cogs")) {
  addShaped("2x create:cogwheel", [" w ", "wsw", " w "], {
    w: "#minecraft:planks",
    s: "create:shaft",
  });
  removeRecipe({ id: "create:crafting/kinetics/large_cogwheel" });
  removeRecipe({ id: "create:crafting/kinetics/cogwheel" });
  removeRecipe({ id: "create:crafting/kinetics/large_cogwheel_from_little" });
  replaceInputForRecipes("create:cogwheel", "#forge:cogs", {
    type: "minecraft:crafting_shaped",
  });
  replaceInputForRecipes("create:cogwheel", "#forge:cogs", {
    type: "minecraft:crafting_shapeless",
  });
  addShapeless("create:large_cogwheel", "create:cogwheel");
  addShapeless("create:cogwheel", "create:large_cogwheel");
  addStonecutting("create:cogwheel", "create:large_cogwheel");
  addStonecutting("create:large_cogwheel", "create:cogwheel");
}

if (feature("Application recipes")) {
  if (!feature("Remove crafting table recipes for devices"))
    addItemApplication(
      "create:adjustable_chain_gearshift",
      "create:encased_chain_drive",
      "create:polished_rose_quartz"
    );
}

if (feature("Replace golden sheet with brass one")) {
  replaceInputForRecipes("create:golden_sheet", "create:brass_sheet");
  removeRecipe({ id: "create:crafting/curiosities/brown_toolbox" });
  addShaped("create:brown_toolbox", [" c ", "pCp", " l "], {
    c: "#forge:cogs",
    p: "#forge:plates",
    l: "#forge:canvasables",
    C: "#forge:chests",
  });
  removeItem("create:golden_sheet");
  removeRecipe({ id: "create:crafting/kinetics/wrench" });
  addShaped("create:wrench", ["pp ", "pc ", " s "], {
    p: "#forge:plates",
    c: "#forge:cogs",
    s: "#forge:rods",
  });
  removeRecipe({ id: "create:crafting/kinetics/goggles" });
  addShaped("create:goggles", [" s ", "gpg"], {
    s: "#forge:string",
    g: "#forge:glass",
    p: "#forge:plates",
  });

  if (!feature("Remove crafting table recipes for devices")) {
    removeRecipe({ id: "create:crafting/kinetics/steam_engine" });
    addShaped("create:steam_engine", ["p", "a", "c"], {
      p: "#forge:plates",
      a: "create:andesite_alloy",
      c: "#forge:storage_blocks/copper",
    });
    removeRecipe({ id: "create:crafting/kinetics/weighted_ejector" });
    addShaped("create:weighted_ejector", ["p", "d", "c"], {
      p: "#forge:plates",
      d: "create:depot",
      c: "#forge:cogs",
    });
    removeRecipe({ id: "create:crafting/kinetics/steam_whistle" });
    addShapeless("create:steam_whistle", [
      "#forge:ingots/copper",
      "#forge:plates",
    ]);
  }
}
if (feature("Alternate precision mechanism")) {
  let p = "create:precision_mechanism";
  let b = "create:brass_sheet";
  addAssembly(
    [
      "create:precision_mechanism %80",
      "create:brass_sheet %5",
      "create:andesite_alloy %5",
      "create:cogwheel %5",
      "minecraft:clock %5",
    ],
    "create:brass_sheet",
    [
      addDeploying(p, b, "minecraft:gold_nugget"),
      addDeploying(p, b, "#forge:cogs"),
      addDeploying(p, b, "#forge:dyes"),
    ],
    4,
    "create:incomplete_precision_mechanism"
  );
}

if (feature("Funnels and tunnels with silicon and leather")) {
  if (!feature("Remove crafting table recipes for devices")) {
    addShaped("2x create:andesite_funnel", ["a", "l"], {
      a: "create:andesite_alloy",
      l: "#forge:canvasables",
    });
    addShaped("2x create:andesite_tunnel", ["aa", "ll"], {
      a: "create:andesite_alloy",
      l: "#forge:canvasables",
    });

    addShaped("2x create:brass_funnel", ["e", "a", "l"], {
      e: "create:polished_rose_quartz",
      a: "#forge:ingots/brass",
      l: "#forge:canvasables",
    });
  }
}

if (feature("Replace electron tube with polished quartz")) {
  removeAndReplace("create:electron_tube", "create:polished_rose_quartz");
  removeRecipe({ id: "create:crafting/materials/electron_tube" });
}
// if (feature('Experiment')) {
//     let out = Item.of('wares:delivery_agreement', '{ordered:10,paymentItems:[{Count:1,id:"minecraft:emerald"}],requestedItems:[{Count:384,id:"minecraft:baked_potato"}],title:\'{"text":"A Great Deal"}\'}')
//     addShapeless(out, 'paper')
//     addAssembly(out, 'minecraft:iron_nugget',[
//         addDeploying(out, 'minecraft:iron_nugget','minecraft:stone_axe'),
//     ],100)
// }
if (feature("Better cookie recipe")) {
  removeRecipe({ output: "minecraft:cookie" });
  addFilling("8x minecraft:cookie", "create:dough", "100x create:chocolate");
}

if (feature("Shaft without andesite")) {
  addShaped("10x create:shaft", ["i", "i", "i"], {
    i: "#forge:ingots/iron",
  });
}

if (feature("Crushing wheel in regular crafting")) {
  if (!feature("Remove crafting table recipes for devices")) {
    removeRecipe({ id: "create:mechanical_crafting/crushing_wheel" });
    addShaped("create:crushing_wheel", ["ipi", "prp", "ipi"], {
      i: "#forge:ingots/andesite_alloy",
      p: "#minecraft:planks",
      r: "create:shaft",
    });
  }
}

if (feature("nerf bonemeal from calcite")) {
  removeRecipe({ id: "create:milling/calcite" });
  addMilling(["bone_meal 40%"], "minecraft:calcite");
  addCrushing(
    ["bone_meal 20%", "cobblestone 20%", "quartz %5"],
    "minecraft:calcite"
  );
}

if (feature("piston pole and gantry shaft recipes")) {
  addShaped("8x create:piston_extension_pole", ["i", "s", "i"], {
    s: "stick",
    i: "#forge:nuggets/iron",
  });
  replaceShaped("8x create:gantry_shaft", ["i", "s", "i"], {
    s: "redstone",
    i: "#forge:ingots/iron",
  });
}
if (feature("Remove old cogwheel recipe")) {
  removeRecipe({ id: "create:deploying/large_cogwheel" });
}

if (feature("White ingot from raw white ") /*&& !feature('No More Ingots')*/) {
  addPressing(
    feature("Replace white ingot with white plate directly")
      ? "create:iron_sheet"
      : "minecraft:iron_ingot",
    ["raw_iron"]
  );
  addPressing("gold_ingot", ["raw_gold"]);
  addPressing("copper_ingot", ["raw_copper"]);
}

// if (feature('Fix water dupe with spout')) {
//     BlockEvents.rightClicked('cauldron')
// }

if (feature("Metal gridder no gray ingot")) {
  replaceShaped("32x create:metal_girder", ["ppp", "pdp"], {
    p: "#forge:plates/iron",
    d: "#forge:dyes/black",
  });
}

if (feature("Monorail track alternate recipe")) {
  removeRecipe({ id: "railways:sequenced_assembly/track_monorail" });
  addAssembly(
    ["32x railways:track_monorail"],
    "create:metal_girder",
    [
      addDeploying(
        "create:metal_girder",
        "create:metal_girder",
        "create:metal_girder"
      ),
    ],
    16,
    "create:incomplete_track"
  );
}
if (feature("Blaze is capturable")) {
  ServerEvents.tags("entity_type", (event) => {
    event.add("create:blaze_burner_capturable", ["more_babies:blaze"]);
  });
}

if (feature('Block of brass is made with plates instead of ingots')) {
  removeRecipe({ id: 'create:crafting/materials/brass_block_from_compacting' })
  addShaped('create:brass_block', ['ppp', 'ppp', 'ppp'], {
    p: '#forge:plates/brass'
  })
  addShapeless('9x create:brass_sheet', 'create:brass_block')
}

if (feature('Sugar to white dye')) {
  addMixing('white_dye', ['4x sugar'], temperature.none)
}

if (feature('Cheaper blaze cake')) {
  removeRecipe({ id: 'create:filling/blaze_cake' })
  addFilling('create:blaze_cake', 'create:blaze_cake_base', '10x lava')  
}