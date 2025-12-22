//priority: 0
// Chicken Eggs - feeding seeds spawns eggs instead of breeding

// Disable natural egg laying
EntityEvents.spawned(function(event) {
  if (event.entity.type === "minecraft:chicken") {
    event.entity.mergeNbt({ EggLayTime: 2147483647 });
  }
});

// Feeding seeds spawns an egg instead of breeding
ItemEvents.entityInteracted(function(event) {
  if (event.target.type !== "minecraft:chicken") return;
  if (!event.item.hasTag("forge:seeds")) return;

  var egg = event.level.createEntity("minecraft:item");
  egg.item = "minecraft:egg";
  egg.x = event.target.x;
  egg.y = event.target.y + 0.2;
  egg.z = event.target.z;
  egg.setPickUpDelay(20);
  egg.setMotion(
    (-0.5 + Math.random()) / 8,
    0.2,
    (-0.5 + Math.random()) / 8
  );
  egg.spawn();

  event.server.runCommandSilent(
    "playsound minecraft:entity.chicken.egg neutral @a " +
    event.target.x + " " + event.target.y + " " + event.target.z + " 5"
  );

  event.player.swing();
  event.item.count--;
  event.cancel();
});
