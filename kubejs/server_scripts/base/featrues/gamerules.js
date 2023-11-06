ServerEvents.loaded(e => {
    if (e.server.persistentData.gameRules) return

    e.server.gameRules.set("disable_elytra_movement_check", true)
    e.server.gameRules.set("drowning_damage", false)
    e.server.gameRules.set("fall_damage", false)
    e.server.gameRules.set("disable_raids", true)
    e.server.gameRules.set("do_insomnia", false)
    e.server.gameRules.set("reduced_debug_info", false)

    e.server.persistentData.gameRules = true
})