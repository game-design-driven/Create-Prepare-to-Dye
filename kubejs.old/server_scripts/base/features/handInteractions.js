function fillBlockEntity(block, event) {

  let fluid;
  let amount = 1000;
  if (event.player.handSlots[0].id == "minecraft:milk_bucket") {
    fluid = "minecraft:milk";
  } else {
    fluid = event.player.handSlots[0].id.replace("_bucket", "");
  }
  if (!event.player.isCreative()) {
    event.player.setMainHandItem("minecraft:bucket");
  }
  event.level.runCommandSilent(
    `playsound minecraft:item.bucket.empty block @a ${event.block.x} ${event.block.y} ${event.block.z} 0.4 1.7`
  );
  block.mergeEntityData({
    Tanks: [
      {
        TankContent: {
          Amount: amount,
          FluidName: fluid,
        },
      },
    ],
  });
}

BlockEvents.rightClicked("createdieselgenerators:diesel_engine", (event) => {
  if (
    (event.player.handSlots[0].id.endsWith('_bucket')) &&
    event.block.getEntityData().Tanks[0].Level.Value == 0
  ) {
    fillBlockEntity(event.block, event)
    event.cancel();
  }
});
BlockEvents.rightClicked("create:spout", (event) => {
  if (
    event.player.handSlots[0].id.endsWith("_bucket") &&
    event.block.getEntityData().Tanks[0].Level.Value == 0
  ) {
    let amount = 1000;
    let fluid = event.player.handSlots[0].id.replace("_bucket", "")
    event.player.swing()
    Utils.server.runCommandSilent(`setblock ${event.block.x} ${event.block.y} ${event.block.z} air`);
    Utils.server.runCommandSilent(`setblock ${event.block.x} ${event.block.y} ${event.block.z} create:spout{Tanks:[{TankContent:{Amount:${amount},FluidName:"${fluid}"}}]}`);
    if (!event.player.isCreative()) {
      event.player.setMainHandItem("minecraft:bucket");
    }
    event.cancel();
  }
});
