// Priority: 1
const $UUIDUtil = Java.loadClass("net.minecraft.core.UUIDUtil");
ServerEvents.commandRegistry((event) => {
    const {
        commands: Commands,
        arguments: Arguments,
      } = event;
  event.register(
    Commands.literal("uuid").executes((context) => {
      let player = context.getSource().getPlayer();
      let playerUUID = player.uuid;
      let intArrays = $UUIDUtil.uuidToIntArray(playerUUID);
      player.tell(intArrays);
      return 0;
    })
  );
});

