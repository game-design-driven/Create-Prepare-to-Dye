// addPurify('white_concrete_powder', 'milk', 15)
addPurify('white_concrete_powder', 'ptdye:flowing_milk', 15)
ServerEvents.tags("fluid", (event) => {event.add("ptdye:flowing_milk", ["minecraft:flowing_milk"]);});
ServerEvents.tags("block", (event) => {event.add("ptdye:milk", ["minecraft:milk"]);});
modpackRecipes.push({//special hack to only work on flowing milk
    type: "botania:pure_daisy",
    hidden: true,
    time: 15,
    input: {
      type: "tag_excluding",
      tag: "ptdye:milk",
      exclude: [
        {
          type: "state",
          name: "minecraft:milk",
          properties: {
            level: "0",
          },
        },
      ],
    },
    output: {
      name: "minecraft:white_concrete_powder",
    },
});

ItemEvents.entityInteracted("minecraft:bucket", (event) => {
    if (!event.getTarget().getType() == "minecraft:cow") return
    let currentTime = event.getTarget().level.getTime();
    event.player.swing();
    if (!event.getTarget().persistentData.get("lastMilked")) {
        event.getTarget().persistentData.put("lastMilked", currentTime) // first time milking
    }else{
        let lastMilked = event.getTarget().persistentData.getLong("lastMilked");
        let timeSinceLastMilked = currentTime - lastMilked;
        if (timeSinceLastMilked < 400) {
            event.getLevel().runCommandSilent("/particle angry_villager " + event.getTarget().getX() + " " + event.getTarget().getY() + " " + event.getTarget().getZ() + " 0.3 0.7 0.3 1 4");
            event.getLevel().runCommandSilent(`/title ${event.player.displayName.getString()} actionbar "Betsy needs a break"`);
            event.cancel();
        }else{
          event.getTarget().persistentData.put("lastMilked", currentTime)

          let pitch =  Math.random() + 0.8;
          Utils.server.runCommandSilent(`playsound minecraft:entity.cow.milk neutral @a ${event.getTarget().getX()} ${event.getTarget().getY()} ${event.getTarget().getZ()} 0.3 ${pitch}`)

          event.player.setMainHandItem("air");
          event.server.scheduleInTicks(1, () => {
            event.player.setMainHandItem("minecraft:milk_bucket");
          });
          event.cancel();
        }
    }
    
});
