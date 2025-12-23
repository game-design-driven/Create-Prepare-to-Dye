//priority: 0
//Create Prepare to Dye 2 - Player Login Events

function getExtraPlayerItems() {
  let amount = global.config_additionalPlayerDevices ? global.config_additionalPlayerDevices.get() : 8;
  return [
    Item.of("ptdye:mechanical_device", amount),
    Item.of("ptdye:smart_device", amount),
    Item.of("ptdye:sealed_device", amount),
    Item.of("ptdye:sturdy_device", amount),
    Item.of("ptdye:logic_device", amount),
  ];
}

function applyAutomatonAttributes(player) {
  let swimSpeed = global.config_swimSpeed ? global.config_swimSpeed.get() : 2.25;
  let reachDistance = global.config_reachDistance ? global.config_reachDistance.get() : 30;
  let attackRange = global.config_attackRange ? global.config_attackRange.get() : 30;
  let attackDamage = global.config_attackDamage ? global.config_attackDamage.get() : 3;

  player.setAttributeBaseValue("forge:swim_speed", swimSpeed);
  player.setAttributeBaseValue("forge:reach_distance", reachDistance);
  player.setAttributeBaseValue("forge:attack_range", attackRange);
  player.setAttributeBaseValue("minecraft:generic.attack_damage", attackDamage);

  Utils.server.runCommandSilent(
    `curios replace crafting_on_a_stick 0 ${player.displayName.getString()} with crafting_on_a_stick:stonecutter`
  );
  Utils.server.runCommandSilent(
    `curios replace charm 0 ${player.displayName.getString()} with botania:monocle`
  );
  Utils.server.runCommandSilent(
    `curios replace head 0 ${player.displayName.getString()} with create:goggles`
  );

  player.tell(
    Text.of("Use ")
      .aqua()
      .append(Text.of("V").red().append(Text.of(" to open your built-in Personal Assembler").aqua()))
  );
}

function disableRain() {
  Utils.server.runCommandSilent("weather clear");
  Utils.server.runCommandSilent("gamerule doWeatherCycle false");
}

PlayerEvents.loggedIn((event) => {
  applyAutomatonAttributes(event.player);
  disableRain();

  if (!event.player.persistentData.getBoolean("starter")) {
    event.player.give(Item.of("create:wrench", 1));
    event.player.give(Item.of("crafting_on_a_stick:stonecutter", 1));
    event.player.give(
      Item.of(
        "create:clipboard",
        '{Pages:[{Entries:[{Checked:0b,Text:\'{"text":"Pet Betsy"}\'},{Checked:1b,Text:\'{"text":"Engine safety checks"}\'},{Checked:0b,Text:\'{"text":"Landing systems safety checks"}\'},{Checked:1b,Text:\'{"text":"Make sure Pure Daisy is ready for landing (!!)"}\'},{Checked:0b,Text:\'{"text":"Don\\\'t crash"}\'},{Checked:0b,Text:\'{"text":"Ponder life"}\'},{Checked:1b,Text:\'{"text":"Fix wrench built in magnet"}\'},{Checked:0b,Text:\'{"text":"Check automated milking system (critical, can\\\'t automate without milk!)"}\'}]}],PreviouslyOpenedPage:0,Type:1}'
      )
    );
    event.player.persistentData.putBoolean("starter", true);

    if (event.server.persistentData.getBoolean("existing_world")) {
      getExtraPlayerItems().forEach((item) => {
        event.player.give(item);
      });
    }
    event.server.persistentData.putBoolean("existing_world", true);
  }
});

PlayerEvents.respawned((event) => {
  applyAutomatonAttributes(event.player);
});
