BlockEvents.rightClicked("createdieselgenerators:diesel_engine", (event) => {
  if (
    (event.player.handSlots[0].id == "minecraft:milk_bucket" ||
    event.player.handSlots[0].id == "kubejs:fermented_goop_bucket" ||
      (event.player.handSlots[0].mod == "createdieselgenerators" &&
        event.player.handSlots[0].id.endsWith("_bucket"))) &&
    event.block.getEntityData().Tanks[0].Level.Value == 0
  ) {
    let fluid;
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

    event.block.mergeEntityData({
      Tanks: [
        {
          TankContent: {
            Amount: 1000,
            FluidName: fluid,
          },
        },
      ],
    });
    event.cancel();
  }
});
