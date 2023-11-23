if (feature('starter items')) {
    PlayerEvents.loggedIn((event) => {
        event.server.runCommandSilent('effect give @a minecraft:health_boost 999999 99 true')
        event.server.runCommandSilent('effect give @a minecraft:regeneration 999999 99 true')
    })
}