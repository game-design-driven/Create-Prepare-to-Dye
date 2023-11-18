ItemEvents.entityInteracted("minecraft:bucket", (event) => {
  if (event.getTarget().getType() == "minecraft:cow") {
  let currentTime = event.getTarget().level.getTime();
  console.info(event.getTarget().persistentData.get("lastMilked"));
  if (event.getTarget().persistentData.get("lastMilked")) {
    let lastMilked = event.getTarget().persistentData.getInt("lastMilked");
    let timeSinceLastMilked = currentTime - lastMilked;
    console.info(
      `current time: ${currentTime}, last milked: ${lastMilked}, time since last milked: ${timeSinceLastMilked}`
    );
    if (timeSinceLastMilked < 200) {
      console.log("cow milked too recently");
      event.getLevel().runCommandSilent("/particle angry_villager " + event.getTarget().getX() + " " + event.getTarget().getY() + " " + event.getTarget().getZ() + " 0.3 0.5 0.3 1 4");
      event.cancel();
    }else{
      event.getTarget().persistentData.put("lastMilked", currentTime);
    }
  }else{
      event.getTarget().persistentData.put("lastMilked", currentTime);
  }
}
});
