let postage_stamp_transceiver_agreement = getAgreement(
    "postage_stamp_transceiver_agreement",{
      paymentItems: [
        Item.of(
          "ptdye:postage_stamp_transceiver",
        )
      ],
      requestedItems: [
        "31x quark:iron_plate",
        "12x create:metal_girder",
        "ptdye:furnished_device",
        "ptdye:mechanical_device",
        "9x botania:mana_glass"
      ],
      title: "Wrong place?",
      orderedAmount: 1,
      company: "United SPACE consumer union plus plus",
      message:
        "If you want to return your trading terminal so you can place it again somewhere else, weve got you covered!",
    });
if (feature('Postage stamp')) {
      
    BlockEvents.rightClicked("wares:delivery_table",(event) => {
        if (event.getHand().name() != "MAIN_HAND")
            return event.cancel();
        
        event.player.swing()
        if (event.player.mainHandItem.id !== 'ptdye:postage_stamp_transceiver') return;

        let delivery_table_platform = event.getLevel().getBlock(event.block.getPos().below())
        
        event.block.set('minecraft:air')
        if (delivery_table_platform.id === "minecraft:bedrock"){delivery_table_platform.set('minecraft:air')}
        
        event.player.mainHandItem.count = event.player.mainHandItem.count - 1

        let existing_platforms_x = Utils.server.persistentData.getIntArray("existing_platforms_x").slice();
        let existing_platforms_z = Utils.server.persistentData.getIntArray("existing_platforms_z").slice();
        for (let index = 0; index < existing_platforms_x.length; index++) {
            if (existing_platforms_x[index] == event.block.getPos().getX() && existing_platforms_z[index] - 1 == event.block.getPos().getZ()) {
            existing_platforms_x.splice(index, 1);
            existing_platforms_z.splice(index, 1);
            Utils.server.persistentData.putIntArray("existing_platforms_x", existing_platforms_x);
            Utils.server.persistentData.putIntArray("existing_platforms_z", existing_platforms_z);
            }else{
            //this was a pirated trading platform, insert funny thing here
            }
        }
        Utils.server.runCommandSilent(`/playsound minecraft:entity.enderman.teleport block @a ${event.block.getPos().getX()} ${event.block.getPos().getY()} ${event.block.getPos().getZ()} 1.0 2.0`);
        Utils.server.runCommandSilent(`/playsound minecraft:block.gilded_blackstone.break ambient @a ${event.block.getPos().getX()} ${event.block.getPos().getY()} ${event.block.getPos().getZ()} 1 1.2`);
        Utils.server.runCommandSilent(`/playsound minecraft:entity.enderman.teleport block @a ${event.block.getPos().getX()} ${event.block.getPos().getY()} ${event.block.getPos().getZ()} 1.0 2.0`);
        Utils.server.runCommandSilent(`/particle minecraft:portal ${event.block.getPos().getX()} ${event.block.getPos().getY()} ${event.block.getPos().getZ()} 0 -100 0 0.1 10000 force @a`);
        Utils.server.runCommandSilent(`/particle minecraft:portal ${event.block.getPos().getX()} ${event.block.getPos().getY()} ${event.block.getPos().getZ()} 0.1 0 0.1 0.1 1000 normal @a`);
        event.server.scheduleInTicks(50, callback => {
            event.block.popItem("ptdye:trading_transceiver");
        })
        event.cancel();
      
    });    
}
