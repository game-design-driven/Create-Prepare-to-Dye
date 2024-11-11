
if (feature('Spouts grow quartz buds')) {
  
  let growthStages = [
    "ae2:small_quartz_bud",
    "ae2:medium_quartz_bud",
    "ae2:large_quartz_bud",
    "ae2:quartz_cluster",
  ]
  
  CreateEvents.spoutHandler((event) => {
    event.add("grow_quartz_bud", /.*_quartz_bud$/, (block, fluid, simulate) => {
      if (fluid.id == "minecraft:water" && fluid.amount >= 1000 ) {
        if (!simulate) {
          Utils.server.runCommandSilent(
            `/setblock ${block.x} ${block.y} ${block.z} ${growthStages[growthStages.indexOf(block.id) + 1]}`
          );
        }
        return 1000;
      }
      return 0;
    });
  });
  
}
  
  
  
