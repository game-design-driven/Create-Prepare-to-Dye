ServerEvents.loaded(e => {
    if (e.server.persistentData.gameRulesInit) return
    e.server.persistentData.gameRulesInit = true

    e.server.gameRules.set("disableElytraMovementCheck", true)
    e.server.gameRules.set("drowningDamage", false)
    e.server.gameRules.set("fallDamage", false)
    e.server.gameRules.set("disableRaids", true)
    e.server.gameRules.set("doInsomnia", false)
    e.server.gameRules.set("reducedDebugInfo", false)
    e.server.gameRules.set("keepInventory", true)
    e.server.gameRules.set("doPatrolSpawning", false)
	e.server.gameRules.set("commandBlockOutput", false)
	e.server.gameRules.set("doTraderSpawning", false)
	e.server.gameRules.set("waterSourceConversion", false)
	e.server.gameRules.set("spawnRadius", 1)
})