if (feature("Remove crafting table")) {
  removeItem("minecraft:crafting_table");
}
if (feature("Harder casing recipes")) {
  removeRecipe({ id: "create:item_application/railway_casing" });
  removeRecipe({ id: "create:item_application/andesite_casing" });
  removeRecipe({ id: "create:item_application/copper_casing" });
  removeRecipe({ id: "create:item_application/brass_casing" });
  let casings = [
    {
      item: "red_stringed_device",
      base: "botania:livingrock",
      sheet: "minecraft:string",
      material: "minecraft:red_dye",
      amount: 2
    },
    {
      item: "sealed_device",
      base: "#forge:stripped_logs",
      sheet: "#forge:plates/copper",
      material: "#forge:silicon",
      amount: 4,
    },
    {
      item: "mechanical_device",
      base: "#forge:stripped_logs",
      sheet: "#forge:plates/iron",
      material: "create:andesite_alloy",
      amount: 4,
    },
    {
      item: "smart_device",
      base: "#forge:stripped_logs",
      sheet: "#forge:plates/brass",
      material: "create:polished_rose_quartz",
      amount: 4,
    },
    {
      item: "sturdy_device",
      base: "minecraft:cobblestone",
      sheet: "create:iron_sheet",
      amount: 4,
    },
    {
      item: "logic_device",
      base: "minecraft:smooth_stone",
      sheet: "#forge:plates/copper",
      material: "minecraft:redstone",
      amount: 8,
    },
    {
      item: "locomotive_device",
      base: "create:brass_sheet",
      sheet: "create:sturdy_sheet",
      material: "create:sturdy_sheet",
      amount: 4,
    },
  ];
  casings.forEach((casing) => {
    addAssembly(
      Item.of("ptdye:" + casing.item).withCount(casing.amount),
      "create:cogwheel",
      [
        casing.material
          ? addDeploying('stick', 'stick', casing.material)
          : null,
        addDeploying('stick', 'stick', casing.base),
        addDeploying('stick', 'stick', casing.sheet),
      ].filter((item) => {
        return item;
      }),
      1,
      "ptdye:incomplete_" + casing.item
    );
  });
}
if (feature("Remove crafting table recipes for devices")) {
  let andesiteBasedDevices = [
    "create:stressometer",
    "create:speedometer",
    "create:schematic_table",
    "create:vertical_gearbox",
    "create:andesite_tunnel",
    "create:andesite_funnel",
    "create:mechanical_plough",
    "create:mechanical_harvester",
    "create:radial_chassis",
    "create:linear_chassis",
    "create:mechanical_piston",
    "create:sticky_mechanical_piston",
    "create:weighted_ejector",
    "create:depot",
    "create:hand_crank",
    "create:turntable",
    "create:encased_fan",
    "create:adjustable_chain_gearshift",
    "create:encased_chain_drive",
    "create:gearshift",
    "create:clutch",
    "create:gearbox",
    "create:mechanical_mixer",
    "create:mechanical_press",
    "create:deployer",
    "create:mechanical_roller",
    "create:portable_storage_interface",
    "create:water_wheel",
    "create:mechanical_saw",
    "create:contraption_controls",
    "create:mechanical_drill",
    "create:schematicannon",
    "create:large_water_wheel",
    "create:gantry_carriage",
    "create:mechanical_bearing",
    "create:rope_pulley",
    "create:cart_assembler",
    "quark:pipe",
  ];
  // addToTag("forge:device/andesite", "ptdye:mechanical_device");
  addStonecutting("ptdye:mechanical_device","forge:device/andesite")
  addToTag("forge:device/andesite", andesiteBasedDevices);
  addCrushing(
    ["create:cogwheel %25", "create:iron_sheet %25"],
    "#forge:device/andesite"
  );

  removeFromTag("forge:device/andesite", "create:vertical_gearbox");
  removeFromTag("forge:device/andesite", "create:gearbox");
  addToTag("forge:device/andesite/gearbox", "create:vertical_gearbox");
  addToTag("forge:device/andesite/gearbox", "create:gearbox");
  addShaped("create:gearbox", ["a"], {
    a: "create:vertical_gearbox",
  });
  addShaped("create:vertical_gearbox", ["a"], {
    a: "create:gearbox",
  });

  removeRecipe({ id: "create:andesite_casing" });
  addStonecutting("4x create:andesite_casing", "ptdye:mechanical_device");

  addStonecutting("ptdye:mechanical_device", "#forge:device/andesite");
  addStonecutting("ptdye:mechanical_device", "#forge:device/andesite/gearbox");

  addShapeless("ptdye:mechanical_device", [
    "create:andesite_casing",
    "create:andesite_casing",
    "create:andesite_casing",
    "create:andesite_casing",
  ]);

  addShapeless("ptdye:mechanical_device", "#forge:device/andesite");
  andesiteBasedDevices.forEach((device) => {
    removeAllRecipesForItem(device);
    addStonecutting(device, "ptdye:mechanical_device")
    addStonecutting(
      device,
      Ingredient.of("#forge:device/andesite").or(
        "#forge:device/andesite/gearbox"
      ), true
    );
  });

  let cobblestoneBasedDevices = [
    "create:redstone_contact",
    "minecraft:stonecutter",
    "minecraft:cauldron",
    "minecraft:hopper",
    "minecraft:piston",
    "minecraft:sticky_piston",
    "minecraft:minecart",
    "quark:magnet",
    "minecraft:dropper",
    "minecraft:dispenser",
    "minecraft:observer",
    "create:basin",
    "createdieselgenerators:basin_lid",
    "create:chute",
    "create:windmill_bearing",
    "create:nozzle",
    "create:millstone",
    "create:crushing_wheel",
    "supplementaries:turn_table",
    "supplementaries:spring_launcher",
    "botania:apothecary_default",
    "quark:crate",
  ];
  // addToTag("forge:device/cobblestone", "ptdye:sturdy_device");
  addStonecutting("ptdye:sturdy_device","forge:device/cobblestone")
  addToTag("forge:device/cobblestone", cobblestoneBasedDevices);

  addStonecutting("ptdye:sturdy_device", "#forge:device/cobblestone");

  addShapeless("ptdye:sturdy_device", "#forge:device/cobblestone");
  cobblestoneBasedDevices.forEach((device) => {
    removeAllRecipesForItem(device);
    addStonecutting(device, "ptdye:sturdy_device");
    addStonecutting(device, "#forge:device/cobblestone", true);
  });

  let redstoneBasedDevices = [
    "create:powered_toggle_latch",
    "create:analog_lever",
    "minecraft:redstone_torch",
    "botania:hourglass",
    "supplementaries:hourglass",
    "minecraft:repeater",
    "create:pulse_repeater",
    "minecraft:comparator",
    "create:redstone_link",
    "quark:redstone_randomizer",
    "minecraft:lever",
    "minecraft:daylight_detector",
    "minecraft:tripwire_hook",
    "botania:animated_torch",
    "create:pulse_extender",
    "create:powered_latch",
  ];
  // addToTag("forge:device/redstone", "ptdye:logic_device");
  addStonecutting("ptdye:logic_device","forge:device/redstone")
  addToTag("forge:device/redstone", redstoneBasedDevices);

  addShapeless("ptdye:logic_device", "#forge:device/redstone");
  addCrushing("ptdye:logic_device", "#forge:device/redstone");

  redstoneBasedDevices.forEach((device) => {
    removeAllRecipesForItem(device);
    addStonecutting(device, "ptdye:logic_device");
    addStonecutting(device, "#forge:device/redstone", true);
  });

  let copperBasedDevices = [
    "create_enchantment_industry:printer",
    "create_enchantment_industry:disenchanter",
    "create:portable_fluid_interface",
    "create:steam_engine",
    "create:steam_whistle",
    "create:spout",
    "create:item_drain",
    "create:hose_pulley",
    "create:fluid_tank",
    "create:copper_valve_handle",
    "create:fluid_valve",
    "create:smart_fluid_pipe",
    "create:mechanical_pump",
    "supplementaries:copper_lantern",
  ];
  // addToTag("forge:device/copper", "ptdye:sealed_device");
  addStonecutting("ptdye:sealed_device","forge:device/copper")
  addToTag("forge:device/copper", copperBasedDevices);

  addStonecutting("ptdye:sealed_device", "#forge:device/copper");

  removeRecipe({ id: "create:andesite_casing" });
  addStonecutting("4x create:copper_casing", "#forge:device/copper");
  addShapeless("ptdye:sealed_device", [
    "4x create:copper_casing",
  ]);

  addStonecutting("4x create:fluid_pipe", "#forge:device/copper");
  addShapeless("ptdye:sealed_device", [
    "4x create:fluid_pipe",
  ]);
  addStonecutting(
    "4x createdieselgenerators:distillation_controller",
    "#forge:device/copper"
  );
  addShapeless("ptdye:sealed_device", [
    "4x createdieselgenerators:distillation_controller",
  ]);
  addShapeless("ptdye:sealed_device", "#forge:device/copper");
  addCrushing("ptdye:sealed_device", "#forge:device/copper");
  copperBasedDevices.forEach((device) => {
    removeAllRecipesForItem(device);
    addStonecutting(device, "ptdye:sealed_device");
    addStonecutting(device, "#forge:device/copper", true);
  });

  let brassBasedDevices = [
    "create:smart_chute",
    "create:elevator_pulley",
    "create:clockwork_bearing",
    "create:mechanical_crafter",
    "create:sequenced_gearshift",
    "create:mechanical_arm",
    "create:rotation_speed_controller",
    "create:content_observer",
    "create:stockpile_switch",
    "create:display_link",
    "create:brass_tunnel",
    "create:brass_funnel",
    "supplementaries:brass_lantern",
    "createdieselgenerators:diesel_engine",
    "storagedrawers:drawer_key",
    "storagedrawers:controller",
  ];
  // addToTag("forge:device/brass", "ptdye:smart_device");
  addStonecutting( "ptdye:smart_device","forge:device/brass")
  addToTag("forge:device/brass", brassBasedDevices);
  addShapeless("ptdye:smart_device", "#forge:device/brass");
  addCrushing("ptdye:smart_device", "#forge:device/brass");
  addStonecutting("ptdye:smart_device", "#forge:device/brass");

  removeRecipe({ id: "create:brass_casing" });
  addStonecutting("4x create:brass_casing", "#forge:device/brass");
  addShapeless("ptdye:smart_device", [
    "create:brass_casing",
    "create:brass_casing",
    "create:brass_casing",
    "create:brass_casing",
  ]);

  brassBasedDevices.forEach((device) => {
    removeAllRecipesForItem(device);
    addStonecutting(device, "ptdye:smart_device");
    addStonecutting(device, "#forge:device/brass", true);
  });

  let trainDevices = [
    "create:controls",
    "create:track_observer",
    "create:track_signal",
    "create:track_station",
    "railways:track_coupler",
    "railways:track_switch_brass",
    "railways:semaphore",
    "railways:track_switch_andesite",
  ];
  // addToTag("forge:device/train", "ptdye:locomotive_device");
  addStonecutting("ptdye:locomotive_device","forge:device/train")
  addToTag("forge:device/train", trainDevices);
  addShapeless("ptdye:locomotive_device", "#forge:device/train");
  addCrushing("ptdye:locomotive_device", "#forge:device/train");
  trainDevices.forEach((device) => {
    removeAllRecipesForItem(device);
    addStonecutting(device, "ptdye:locomotive_device");
    addStonecutting(device, "#forge:device/train", true);
  });

  let tracks = [
    "minecraft:activator_rail",
    "minecraft:powered_rail",
    "minecraft:detector_rail",
  ];
  // addToTag("forge:device/special_rail", "create:controller_rail");
  addStonecutting("create:controller_rail","forge:device/special_rail")
  addToTag("forge:device/special_rail", tracks);
  addShapeless("create:controller_rail", "#forge:device/special_rail");
  addCrushing("create:controller_rail", "#forge:device/special_rail");
  tracks.forEach((device) => {
    removeAllRecipesForItem(device);
    addStonecutting(device, "#forge:device/special_rail");
    addStonecutting(device, "create:controller_rail", true);
  });
  addToTag("forge:indestructible", "#forge:device");

  addStonecutting("ptdye:locomotive_device", "#forge:device/train");

  removeRecipe({ id: "create:railway_casing" });
  addStonecutting("4x create:railway_casing", "#forge:device/train");
  addShapeless("ptdye:locomotive_device", [
    "create:railway_casing",
    "create:railway_casing",
    "create:railway_casing",
    "create:railway_casing",
  ]);

  let createTracks = [
    "railways:track_create_andesite_wide",
    "railways:track_create_andesite_narrow",
    "create:track",
  ];
  addToTag("forge:device/big_tracks", createTracks);
  createTracks.forEach((device) => {
    removeAllRecipesForItem(device);
    addStonecutting(device, "ptdye:locomotive_device");
    addStonecutting(device, "#forge:device/big_tracks",true);
  });
  if (feature("better tracks")) {
    removeAllFromTag("create:sleepers");
    addToTag("create:sleepers", [
      "stone",
      "botania:livingrock",
      "gray_concrete",
      "light_gray_concrete",
      "black_concrete",
      "smooth_stone",
    ]);
    removeRecipe({ id: "create:sequenced_assembly/track" });
    addAssembly(
      ["32x create:track"],
      "#create:sleepers",
      [
        addDeploying(
          "create:track",
          "#create:sleepers",
          "botania:livingwood_planks"
        ),
        addDeploying(
          "create:track",
          "#create:sleepers",
          "botania:livingwood_planks"
        ),
        addDeploying("create:track", "#create:sleepers", "#forge:nuggets"),
        addPressing("create:track", "#create:sleepers"),
      ],
      undefined,
      "create:incomplete_track"
    );
    addAssembly(
      ["32x create:track"],
      "#create:sleepers",
      [
        addDeploying("create:track", "#create:sleepers", "#minecraft:logs"),
        addDeploying("create:track", "#create:sleepers", "#forge:nuggets"),
        addDeploying("create:track", "#create:sleepers", "#forge:nuggets"),
        addPressing("create:track", "#create:sleepers"),
      ],
      undefined,
      "create:incomplete_track"
    );

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

  let redStringedDevices = ['botania:red_string_container', 'botania:red_string_dispenser', 'botania:red_string_fertilizer', 'botania:red_string_comparator', 'botania:red_string_relay', 'botania:red_string_interceptor']
  addToTag("forge:device/red_string", "ptdye:red_stringed_device");
  addToTag("forge:device/red_string", redStringedDevices);
  addShapeless("ptdye:red_stringed_device", "#forge:device/red_string");
  addCrushing("ptdye:red_stringed_device", "#forge:device/red_string");
  redStringedDevices.forEach((device) => {
    removeAllRecipesForItem(device);
    addStonecutting(device,"ptdye:red_stringed_device");
    addStonecutting(device, "#forge:device/red_string", true);
  });
}
