if (feature('Remove crafting table')) {
  removeItem('minecraft:crafting_table')
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
      sheet: "create:copper_sheet",
      material: "#forge:silicon",
      amount: 2,
    },
    {
      item: "create:andesite_casing",
      sheet: "create:iron_sheet",
      material: "create:andesite_alloy",
      amount: 2,
    },
    {
      item: "create:brass_casing",
      sheet: "create:brass_sheet",
      material: "create:polished_rose_quartz",
      amount: 4,
    },
  ];
  casings.forEach((casing) => {
    addAssembly(
      Item.of(casing.item).withCount(casing.amount),
      "#forge:stripped_logs",
      [
        addDeploying(casing.item, "#forge:stripped_logs", casing.material),
        addDeploying(casing.item, "#forge:stripped_logs", "create:cogwheel"),
        addDeploying(casing.item, "#forge:stripped_logs", casing.sheet),
      ]
    );
  });
}
if (feature("Remove crafting table recipes for devices")) {
  let andesiteBasedDevices = [
    "create:basin",
    "createdieselgenerators:basin_lid",
    "create:stressometer",
    "create:speedometer",
    "create:schematic_table",
    "create:vertical_gearbox",
    "create:andesite_tunnel",
    "create:andesite_funnel",
    "create:mechanical_plough",
    "create:mechanical_harvester",
    "create:redstone_contact",
    "create:radial_chassis",
    "create:linear_chassis",
    "create:mechanical_piston",
    "create:chute",
    "create:weighted_ejector",
    "create:depot",
    "create:millstone",
    "create:hand_crank",
    "create:turntable",
    "create:nozzle",
    "create:encased_fan",
    "create:adjustable_chain_gearshift",
    "create:encased_chain_drive",
    "create:gearshift",
    "create:clutch",
    "create:gearbox",
    "minecraft:stonecutter",
    "minecraft:cauldron",
    "minecraft:hopper",
    "minecraft:piston",
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
    "create:crushing_wheel",
    "minecraft:minecart",
    "quark:magnet",
    "minecraft:dropper",
    "minecraft:dispenser",
    "minecraft:observer",
    "create:gantry_carriage",
    "create:gantry_shaft",
    "create:windmill_bearing",
    "create:mechanical_bearing",
    "create:rope_pulley",
    "create:cart_assembler",
  ];
  addToTag("forge:device/andesite", "create:andesite_casing");
  addToTag("forge:device/andesite", andesiteBasedDevices);

  removeFromTag("forge:device/andesite", "create:vertical_gearbox")
  removeFromTag("forge:device/andesite", "create:gearbox")

  addShapeless('minecraft:stonecutter', "create:andesite_casing")
  addShaped('create:gearbox',['a'], {
    a:"create:vertical_gearbox"
  })
  addShaped('create:vertical_gearbox', ['a'], {
    a:"create:gearbox"
  })
  
  addShapeless('create:andesite_casing', '#forge:device/andesite')
  andesiteBasedDevices.forEach((device) => {
    removeAllRecipesForItem(device);
    addStonecutting(device, "#forge:device/andesite");
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
}
