//priority: 0
//Create Prepare to Dye 2 - Game Rules

ServerEvents.loaded((event) => {
  if (event.server.persistentData.gameRulesInit) return;
  event.server.persistentData.gameRulesInit = true;

  event.server.gameRules.set("disableElytraMovementCheck", true);
  event.server.gameRules.set("drowningDamage", global.config_drowningDamage.get());
  event.server.gameRules.set("fallDamage", global.config_fallDamage.get());
  event.server.gameRules.set("disableRaids", true);
  event.server.gameRules.set("doInsomnia", false);
  event.server.gameRules.set("reducedDebugInfo", false);
  event.server.gameRules.set("keepInventory", global.config_keepInventory.get());
  event.server.gameRules.set("doPatrolSpawning", false);
  event.server.gameRules.set("commandBlockOutput", false);
  event.server.gameRules.set("doTraderSpawning", false);
  event.server.gameRules.set("waterSourceConversion", false);
  event.server.gameRules.set("spawnRadius", 1);
});
