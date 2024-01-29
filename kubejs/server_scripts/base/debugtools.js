// Priority: 1
ServerEvents.commandRegistry((event) => {
    const {
        commands: Commands,
        arguments: Arguments,
      } = event;
  event.register(
    Commands.literal("uuid").executes((context) => {
      let player = context.getSource().getPlayer();
      let playerUUID = player.uuid;
      let intArrays = global.minecraft.UUIDUtil.uuidToIntArray(playerUUID);
      player.tell(intArrays);
      return 0;
    })
  );
});

