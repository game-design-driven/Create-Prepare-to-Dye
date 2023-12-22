// Priority: 1
ItemEvents.entityInteracted("minecraft:bucket", (event) => {
    if (event.getTarget().getType() == "minecraft:cow") {
        if (event.player.persistentData.isEmpty()){
            Utils.server.runCommandSilent(`advancement grant ${event.player.name.string} only ptd:milk`)
        }
    }
});
