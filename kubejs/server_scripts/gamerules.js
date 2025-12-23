//priority: 0
//Create Prepare to Dye 2 - Game Rules

ServerEvents.loaded((event) => {
  if (event.server.persistentData.gameRulesInit) return;
  event.server.persistentData.gameRulesInit = true;

  let fallDamage = global.config_fallDamage ? global.config_fallDamage.get() : false;
  let drowningDamage = global.config_drowningDamage ? global.config_drowningDamage.get() : false;
  let keepInventory = global.config_keepInventory ? global.config_keepInventory.get() : true;

  event.server.gameRules.set("disableElytraMovementCheck", true);
  event.server.gameRules.set("drowningDamage", drowningDamage);
  event.server.gameRules.set("fallDamage", fallDamage);
  event.server.gameRules.set("disableRaids", true);
  event.server.gameRules.set("doInsomnia", false);
  event.server.gameRules.set("reducedDebugInfo", false);
  event.server.gameRules.set("keepInventory", keepInventory);
  event.server.gameRules.set("doPatrolSpawning", false);
  event.server.gameRules.set("commandBlockOutput", false);
  event.server.gameRules.set("doTraderSpawning", false);
  event.server.gameRules.set("waterSourceConversion", false);
  event.server.gameRules.set("spawnRadius", 1);
});
