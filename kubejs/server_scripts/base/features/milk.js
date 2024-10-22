// addPurify('white_concrete_powder', 'milk', 15)
addPurify('white_concrete_powder', 'ptdye:flowing_milk', 15)
ServerEvents.tags("fluid", (event) => {event.add("ptdye:flowing_milk", ["minecraft:flowing_milk"]);});
ServerEvents.tags("block", (event) => {event.add("ptdye:milk", ["minecraft:milk"]);});
modpackRecipes.push({//special hack to only work on flowing milk
    type: "botania:pure_daisy",
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
  modpackRecipes.push({
    type: "botania:pure_daisy",
    time: 1,
    input: {
      type: "compound",
      ingredients: [
        {
          type: "state",
          name: "minecraft:milk",
          properties: {
            displayName: "Flowing Milk",
            level: "7",
          },
        },
      ],
    },
    output: {
      name: "minecraft:white_concrete_powder",
    },
  });

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
  