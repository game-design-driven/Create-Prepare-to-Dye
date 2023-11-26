function fillBattery(block, amount) {
  amount = amount || 2500;
  let currentEnergy = block.entityData.internalCurrentPower;
  // block.mergeEntityData({
  //   internalCurrentPower: currentEnergy + amount,
  // });
  // block.set("minecraft:air");
  block.level.runCommandSilent(
    `/setblock ${block.x} ${block.y} ${block.z} minecraft:air`
  );
  //200000.0
  block.level.runCommandSilent(
    `/setblock ${block.x} ${block.y} ${
      block.z
    } ae2:energy_cell[fullness=4]{ForgeCaps:{},internalCurrentPower:${
      currentEnergy + amount
    }}`
  );
}
CreateEvents.spoutHandler((event) => {
  let amount = 2500;
  event.add("fill_battery", "ae2:energy_cell", (block, fluid, simulate) => {
    if (
      fluid.id == "minecraft:milk" &&
      fluid.amount >= 1000 &&
      block.entityData.internalCurrentPower < 200000.0 - amount
    ) {
      if (!simulate) {
        console.log("filling battery");
        console.log(block.entityData);
        fillBattery(block, amount);
      }
      return 1000;
    }
    return 0;
  });
});
