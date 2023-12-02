if (feature("Remove crafting table")) {
  removeItem("minecraft:crafting_table");
}
if (feature("Harder casing recipes")) {
  removeRecipe({ id: "create:item_application/copper_casing_from_wood" });
  removeRecipe({ id: "create:item_application/copper_casing_from_log" });

  removeRecipe({ id: "create:item_application/andesite_casing_from_wood" });
  removeRecipe({ id: "create:item_application/andesite_casing_from_log" });

  removeRecipe({ id: "create:item_application/brass_casing_from_wood" });
  removeRecipe({ id: "create:item_application/brass_casing_from_log" });

  let casings = [
    {
      item: "create:copper_casing",
      base: "#forge:stripped_logs",
      sheet: "create:copper_sheet",
      material: "#forge:silicon",
      amount: 2,
    },
    {
      item: "create:andesite_casing",
      base: "#forge:stripped_logs",
      sheet: "create:iron_sheet",
      material: "create:andesite_alloy",
      amount: 2,
    },
    {
      item: "create:brass_casing",
      base: "#forge:stripped_logs",
      sheet: "create:brass_sheet",
      material: "create:polished_rose_quartz",
      amount: 4,
    },
    {
      item: "ptdye:cobblestone_casing",
      base: "minecraft:cobblestone",
      sheet: "create:iron_sheet",
      amount: 4,
    },
    {
      item: "ptdye:redstone_casing",
      base: "minecraft:smooth_stone",
      sheet: "create:copper_sheet",
      material: "minecraft:redstone",
      amount: 8,
    },
  ];
  casings.forEach((casing) => {
    addAssembly(
      Item.of(casing.item).withCount(casing.amount),
      "create:cogwheel",
      [
        casing.material
          ? addDeploying(casing.item, "create:cogwheel", casing.material)
          : null,
        addDeploying(casing.item, "create:cogwheel", casing.base),
        addDeploying(casing.item, "create:cogwheel", casing.sheet),
      ].filter((item) => {
        return item;
      })
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
  ];
  addToTag("forge:device/andesite", "create:andesite_casing");
  addToTag("forge:device/andesite", andesiteBasedDevices);

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

  addShapeless("create:andesite_casing", "#forge:device/andesite");
  andesiteBasedDevices.forEach((device) => {
    removeAllRecipesForItem(device);
    addStonecutting(
      device,
      Ingredient.of("#forge:device/andesite").or(
        "#forge:device/andesite/gearbox"
      )
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
    'botania:apothecary_default'
  ];
  addToTag("forge:device/cobblestone", "ptdye:cobblestone_casing");
  addToTag("forge:device/cobblestone", cobblestoneBasedDevices);

  addShapeless('ptdye:cobblestone_casing', '#forge:device/cobblestone')
  addShapeless('minecraft:stonecutter', "ptdye:cobblestone_casing")
  cobblestoneBasedDevices.forEach((device) => {
    removeAllRecipesForItem(device);
    addStonecutting(device, "#forge:device/cobblestone");
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
  addToTag("forge:device/redstone", "ptdye:redstone_casing");
  addToTag("forge:device/redstone", redstoneBasedDevices);

  addShapeless('ptdye:redstone_casing', '#forge:device/redstone')
  redstoneBasedDevices.forEach((device) => {
    removeAllRecipesForItem(device);
    addStonecutting(device, "#forge:device/redstone");
  });

  let copperBasedDevices = [
    "quark:pipe",
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
    "create:fluid_pipe",
    "supplementaries:copper_lantern",
    'createdieselgenerators:distillation_controller'
  ];
  addToTag("forge:device/copper", "create:copper_casing");
  addToTag("forge:device/copper", copperBasedDevices);
addShapeless('create:copper_casing', '#forge:device/copper')
  copperBasedDevices.forEach((device) => {
    removeAllRecipesForItem(device);
    addStonecutting(device, "#forge:device/copper");
  });

  let brassBasedDevices = [
    "createdieselgenerators:huge_diesel_engine",
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
    'supplementaries:brass_lantern',
    "createdieselgenerators:diesel_engine",
  ];
  addToTag("forge:device/brass", "create:brass_casing");
  addToTag("forge:device/brass", brassBasedDevices);
  addShapeless('create:brass_casing', '#forge:device/brass')
  brassBasedDevices.forEach((device) => {
    removeAllRecipesForItem(device);
    addStonecutting(device, "#forge:device/brass");
  });

  let trainDevices = [
    "railways:track_monorail",
    "create:controls",
    "create:track_observer",
    "create:track_signal",
    "create:track_station",
    "railways:track_coupler",
    "railways:track_switch_brass",
    "railways:semaphore",
    "railways:track_switch_andesite",
  ];
  addToTag("forge:device/train", "create:railway_casing")
  addToTag("forge:device/train", trainDevices)
  addShapeless("create:railway_casing", "#forge:device/train");
  trainDevices.forEach((device) => {
    removeAllRecipesForItem(device);
    addStonecutting(device, "#forge:device/train");
  });

}
