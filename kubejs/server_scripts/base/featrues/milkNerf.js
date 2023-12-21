ItemEvents.entityInteracted("minecraft:bucket", (event) => {
    if (event.getTarget().getType() == "minecraft:cow") {
    let currentTime = event.getTarget().level.getTime();
    if (event.getTarget().persistentData.get("lastMilked")) {
      let lastMilked = event.getTarget().persistentData.getInt("lastMilked");
      let timeSinceLastMilked = currentTime - lastMilked;
      if (timeSinceLastMilked < 440) {
        
        event.getLevel().runCommandSilent("/particle angry_villager " + event.getTarget().getX() + " " + event.getTarget().getY() + " " + event.getTarget().getZ() + " 0.3 0.7 0.3 1 4");
        event.getLevel().runCommandSilent(`/title ${event.player.displayName.getString()} actionbar "Betsy needs a break"`);

        event.cancel();
      }else{
        event.getTarget().persistentData.put("lastMilked", currentTime);
      }
    }else{
        event.getTarget().persistentData.put("lastMilked", currentTime);
    }
  }
  });
  