//priority: 0
// Automatic Assembly - consumes variant/device items when placing last block
// Commands: /AutoAssemble, /AutoAssembleGenericsOnly, /AutoAssembleNothing

function getInventoryItems(player) {
  return player.inventory.allItems.toArray();
}

function shouldAutoAssemble(event) {
  return (
    event.player &&
    !event.player.isCreative() &&
    event.player.mainHandItem.id === event.block.item.id &&
    event.player.mainHandItem.count === 1
  );
}

function getAutoAssembleMode(player) {
  if (player.persistentData.getBoolean("auto_assemble_nothing")) return "off";
  if (player.persistentData.getBoolean("auto_assemble_generic_only")) return "generics";
  if (player.persistentData.getBoolean("auto_assemble")) return "all";
  return "off"; // Default to off
}

function shareVariantOrDeviceTag(itemId1, itemId2) {
  var item1 = Item.of(itemId1);
  var item2 = Item.of(itemId2);

  var tags1 = item1.getTags().toArray();

  for (var i = 0; i < tags1.length; i++) {
    // Convert to JS string
    var tagStr = "" + tags1[i];

    // Extract tag from TagKey format: "TagKey[minecraft:item / ptd:devices/foo]"
    var slashIndex = tagStr.indexOf(" / ");
    if (slashIndex === -1) continue;

    var endIndex = tagStr.lastIndexOf("]");
    if (endIndex === -1) endIndex = tagStr.length;

    var cleanTag = tagStr.substring(slashIndex + 3, endIndex);

    if (cleanTag.indexOf("ptd:variant/") === 0) {
      if (item2.hasTag(cleanTag)) {
        return true;
      }
    }

    if (cleanTag.indexOf("ptd:devices/") === 0) {
      console.log("+++++++++++++++++++++++++++++++++++++++++++++");
      console.log(cleanTag);
      console.log("+++++++++++++++++++++++++++++++++++++++++++++");
      if (cleanTag !== "ptd:devices/generics" && item2.hasTag(cleanTag)) {
        console.log("-+++++++++++++++++++++++++++++++++++++++++++++");
        return true;
      }
    }
  }

  return false;
}

function findAssemblableInInventory(player, placedItemId) {
  var placedItem = Item.of(placedItemId);
  var mode = getAutoAssembleMode(player);

  if (mode === "off") return null;

  if (mode === "generics" && !placedItem.hasTag("ptd:devices/generics")) {
    return null;
  }

  var inventory = getInventoryItems(player);

  for (var i = 0; i < inventory.length; i++) {
    var invItem = inventory[i];
    if (invItem.isEmpty()) continue;
    if (invItem.id === placedItemId) continue;
    if (invItem.id === "quark:backpack") continue;

    if (shareVariantOrDeviceTag(invItem.id, placedItemId)) {
      return invItem;
    }
  }

  return null;
}

BlockEvents.placed(function(event) {
  if (!shouldAutoAssemble(event)) return;

  var variantItem = findAssemblableInInventory(event.player, event.block.item.id);
  if (!variantItem) return;

  variantItem.count--;
  var player = event.player;
  var block = event.block;

  Utils.server.scheduleInTicks(1, function() {
    var randomPitch = Math.random() + 1.0;
    Utils.server.runCommandSilent(
      "/playsound ui.stonecutter.take_result block @a " +
      block.pos.x + " " + block.pos.y + " " + block.pos.z +
      " 0.1 " + randomPitch
    );
    player.mainHandItem.count = 1;
  });
});

ServerEvents.commandRegistry(function(event) {
  var Commands = event.commands;

  event.register(
    Commands.literal("AutoAssemble").executes(function(ctx) {
      var player = ctx.source.player;
      player.persistentData.putBoolean("auto_assemble_nothing", false);
      player.persistentData.putBoolean("auto_assemble_generic_only", false);
      player.persistentData.putBoolean("auto_assemble", true);
      player.displayClientMessage("Auto Assemble All", true);
      return 1;
    })
  );

  event.register(
    Commands.literal("AutoAssembleGenericsOnly").executes(function(ctx) {
      var player = ctx.source.player;
      player.persistentData.putBoolean("auto_assemble_nothing", false);
      player.persistentData.putBoolean("auto_assemble_generic_only", true);
      player.persistentData.putBoolean("auto_assemble", false);
      player.displayClientMessage("Auto Assemble Generic Only", true);
      return 1;
    })
  );

  event.register(
    Commands.literal("AutoAssembleNothing").executes(function(ctx) {
      var player = ctx.source.player;
      player.persistentData.putBoolean("auto_assemble_nothing", true);
      player.persistentData.putBoolean("auto_assemble_generic_only", false);
      player.persistentData.putBoolean("auto_assemble", false);
      player.displayClientMessage("Auto Assemble Nothing", true);
      return 1;
    })
  );
});
