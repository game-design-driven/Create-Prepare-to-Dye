function fillBattery(block, amount) {
  let currentEnergy = block.entityData.internalCurrentPower;
  Utils.server.runCommandSilent(
    `/setblock ${block.x} ${block.y} ${block.z} minecraft:air`
  );
  Utils.server.runCommandSilent(
    `/setblock ${block.x} ${block.y} ${
      block.z
    } ae2:energy_cell[fullness=4]{ForgeCaps:{},internalCurrentPower:${
      currentEnergy + amount
    }}`
  );
}
CreateEvents.spoutHandler((event) => {
  let amount = 10000;
  event.add("fill_battery", "ae2:energy_cell", (block, fluid, simulate) => {
    if (
      fluid.id == "minecraft:milk" &&
      fluid.amount >= 1000 &&
      block.entityData.internalCurrentPower < 200000.0 - amount - 1
    ) {
      if (!simulate) {
        fillBattery(block, amount);
      }
      return 1000;
    }
    return 0;
  });
});
