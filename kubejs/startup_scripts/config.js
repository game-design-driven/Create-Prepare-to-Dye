//priority: 100
// Create Prepare to Dye 2 - Configuration
// Uses ConfigJS to create user-configurable settings

ConfigsEvent.server((event) => {
  event.setName("create-prepare-to-dye-2");

  // =============================================================================
  // PLAYER SETTINGS
  // =============================================================================
  event.push("player");
  event.comment("Player attribute and survival settings");

  event.comment("Swim speed multiplier (default: 2.25)");
  global.config_swimSpeed = event.doubleValue("swimSpeed", 2.25, 0.1, 10.0);

  event.comment("Reach distance in blocks (default: 30)");
  global.config_reachDistance = event.intValue("reachDistance", 30, 1, 100);

  event.comment("Attack range in blocks (default: 30)");
  global.config_attackRange = event.intValue("attackRange", 30, 1, 100);

  event.comment("Base attack damage (default: 3)");
  global.config_attackDamage = event.intValue("attackDamage", 3, 0, 100);

  event.comment("Player invincibility - immune to all damage except void/kill (default: true)");
  global.config_invincibility = event.booleanValue("invincibility", true);

  event.comment("Enable fall damage (default: false)");
  global.config_fallDamage = event.booleanValue("fallDamage", false);

  event.comment("Enable drowning damage (default: false)");
  global.config_drowningDamage = event.booleanValue("drowningDamage", false);

  event.comment("Keep inventory on death (default: true)");
  global.config_keepInventory = event.booleanValue("keepInventory", true);

  event.pop();

  // =============================================================================
  // STARTER KIT
  // =============================================================================
  event.push("starterKit");
  event.comment("Starter kit settings for new players");

  event.comment("Number of each device type given to additional players joining an existing server (default: 8)");
  global.config_additionalPlayerDevices = event.intValue("additionalPlayerDevices", 8, 0, 64);

  event.pop();

  // =============================================================================
  // DEVICE ASSEMBLY QUANTITIES
  // =============================================================================
  event.push("deviceAssembly");
  event.comment("Output quantities for device sequenced assembly recipes");

  event.comment("Sturdy devices per assembly (default: 8)");
  global.config_deviceSturdy = event.intValue("sturdy", 8, 1, 64);

  event.comment("Mechanical devices per assembly (default: 10)");
  global.config_deviceMechanical = event.intValue("mechanical", 10, 1, 64);

  event.comment("Sealed devices per assembly (default: 16)");
  global.config_deviceSealed = event.intValue("sealed", 16, 1, 64);

  event.comment("Smart devices per assembly (default: 8)");
  global.config_deviceSmart = event.intValue("smart", 8, 1, 64);

  event.comment("Logic devices per assembly (default: 12)");
  global.config_deviceLogic = event.intValue("logic", 12, 1, 64);

  event.comment("Locomotive devices per assembly (default: 8)");
  global.config_deviceLocomotive = event.intValue("locomotive", 8, 1, 64);

  event.comment("Red stringed devices per assembly (default: 8)");
  global.config_deviceRedStringed = event.intValue("redStringed", 8, 1, 64);

  event.comment("Furnished devices per assembly (default: 8)");
  global.config_deviceFurnished = event.intValue("furnished", 8, 1, 64);

  event.pop();

  // =============================================================================
  // MANA POOL BURNER EFFICIENCY
  // =============================================================================
  event.push("manaPoolBurner");
  event.comment("Mana cost multipliers for blaze burner alchemy recipes");

  event.comment("Fading burner mana multiplier - lower = cheaper (default: 0.5)");
  global.config_fadingMultiplier = event.doubleValue("fadingMultiplier", 0.5, 0.1, 10.0);

  event.comment("Kindled burner mana multiplier - higher = more expensive (default: 2.0)");
  global.config_kindledMultiplier = event.doubleValue("kindledMultiplier", 2.0, 0.1, 10.0);

  event.pop();

  // =============================================================================
  // SCHEMATICANNON
  // =============================================================================
  event.push("schematicannon");
  event.comment("Schematicannon settings");

  event.comment("Schematicannon requires no fuel when placed (default: true)");
  global.config_schematicannonFreeFuel = event.booleanValue("freeFuel", true);

  event.pop();
});
