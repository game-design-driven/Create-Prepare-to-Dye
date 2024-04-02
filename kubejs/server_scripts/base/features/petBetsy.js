if (feature("You can pet betsy")) {
  ItemEvents.entityInteracted("minecraft:air", (event) => {
    if (event.player.mainHandItem.empty) {
      if (event.player.persistentData.isEmpty()) return;
      else if (event.getTarget().getType() == "minecraft:cow") {
        event.player.swing();
        event.player.persistentData.put(
          "betsy_last_location_x",
          event.getTarget().x
        );
        event.player.persistentData.put(
          "betsy_last_location_z",
          event.getTarget().z
        );
        Utils.server.runCommandSilent(
          `/particle minecraft:heart ${event.target.x} ${
            event.target.y + 1.5
          } ${event.target.z} .25 .25 .25 .15 1`
        );
      }
    }
  });
}
if (feature("Command to teleport to Betsy")) {
  ServerEvents.commandRegistry((event) => {
    const {
      commands: Commands,
      arguments: Arguments,
    } = event;
    event.register(
      Commands.literal("backToBetsy").executes((context) => {
        let player = context.getSource().getPlayer();
        let betsyLastLocation_x = player.persistentData.get(
          "betsy_last_location_x"
        );
        let betsyLastLocation_z = player.persistentData.get(
          "betsy_last_location_z"
        );
        // console.info(`/tp ${player.displayName.getString()} ${betsyLastLocation_x} 300 ${parseInt(betsyLastLocation_z.toString())}`);
        if (betsyLastLocation_x && betsyLastLocation_z) {
          Utils.server.runCommandSilent(
            `/tp ${player.displayName.getString()} ${parseInt(
              betsyLastLocation_x
            )} 322 ${parseInt(betsyLastLocation_z)}`
          );
        } else {
          Utils.server.runCommandSilent(
            `/title ${player.displayName.getString()} actionbar "Need to pet Betsy first!"`
          );
        }
        return 0;
      })
    );
  });
}
