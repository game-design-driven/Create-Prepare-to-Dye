// Change chicken egg generation from natural generation to being fed a seed

// Set egg cooldown to max on spawn
EntityEvents.spawned((event) => {
  if (event.getEntity().getType() == "minecraft:chicken") {
    event.getEntity().mergeNbt({ "EggLayTime": 2147483647 })
  }
});
