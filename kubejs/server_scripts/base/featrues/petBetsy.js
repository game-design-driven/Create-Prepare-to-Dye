if (feature('You can pet betsy')) {
    ItemEvents.entityInteracted("minecraft:air", (event) => {
        if (event.player.mainHandItem.empty){
            if (event.getTarget().getType() == "minecraft:cow") {
                event.player.swing()
                Utils.server.runCommandSilent(`/particle minecraft:heart ${event.target.x} ${event.target.y+1.5} ${event.target.z} .25 .25 .25 .15 1`);
            }
        }
    });
    
}