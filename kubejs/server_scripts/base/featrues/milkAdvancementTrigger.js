// Priority: 1
ItemEvents.entityInteracted("minecraft:bucket", (event) => {
    if (event.getTarget().getType() == "minecraft:cow") {
        if (event.player.persistentData.isEmpty()){ //this makes sure it's a deployer
            Utils.server.runCommandSilent(`advancement grant ${event.player.name.string} only ptd:milk`)
        }
    }
});
