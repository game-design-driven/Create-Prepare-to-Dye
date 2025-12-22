//priority: 0
// Bulk Recycle Command - compacts device items into generic forms
// Usage: /bulkrecycle (keep 1 of each), /bulkrecycle all (keep none)

var DEVICE_GENERICS = {
  "sturdy": "ptdye:sturdy_device",
  "mechanical": "ptdye:mechanical_device",
  "sealed": "ptdye:sealed_device",
  "smart": "ptdye:smart_device",
  "locomotive": "ptdye:locomotive_device",
  "logic": "ptdye:logic_device",
  "red_stringed": "ptdye:red_stringed_device",
  "furnished": "ptdye:furnished_device",
  "tools": "ptdye:tool_parts",
  "lamp": "minecraft:redstone_lamp",
  "cogs": "create:cogwheel"
};

function getDeviceType(item) {
  if (item.isEmpty()) return null;
  if (item.hasNBT()) return null;

  var tags = item.getTags().toArray();

  for (var i = 0; i < tags.length; i++) {
    var tagStr = "" + tags[i];

    var slashIndex = tagStr.indexOf(" / ");
    if (slashIndex === -1) continue;

    var endIndex = tagStr.lastIndexOf("]");
    if (endIndex === -1) continue;

    var cleanTag = tagStr.substring(slashIndex + 3, endIndex);

    if (cleanTag.indexOf("ptd:devices/") === 0) {
      var deviceType = cleanTag.substring(12);
      if (deviceType === "generics") continue;
      if (DEVICE_GENERICS[deviceType]) {
        return deviceType;
      }
    }
  }

  return null;
}

function compactItems(player, keepOne) {
  var limit = keepOne ? 1 : 0;
  var tallies = {};
  var inventory = player.inventory.allItems.toArray();

  for (var i = 0; i < inventory.length; i++) {
    var item = inventory[i];
    var deviceType = getDeviceType(item);

    if (deviceType) {
      if (!tallies[deviceType]) {
        tallies[deviceType] = { count: 0, items: [], usedItems: {} };
      }
      tallies[deviceType].count += item.count;
      tallies[deviceType].items.push(item);
    }
  }

  var anySucceeded = false;
  var types = Object.keys(tallies);

  for (var t = 0; t < types.length; t++) {
    var deviceType = types[t];
    var tally = tallies[deviceType];
    var usedItems = {};
    var totalDevices = 0;

    for (var j = 0; j < tally.items.length; j++) {
      var item = tally.items[j];
      var itemId = item.id;

      if (!usedItems[itemId]) {
        usedItems[itemId] = { count: 0, name: item.displayName };
      }

      var individualLimit = usedItems[itemId].count > 0 ? 0 : limit;
      var available = item.count - individualLimit;

      if (available > 0) {
        totalDevices += available;
        usedItems[itemId].count += available;
        item.count = individualLimit;
      }
    }

    if (totalDevices > 0) {
      var usedText = [Text.of("Used items:\n").gray()];
      var usedIds = Object.keys(usedItems);

      for (var u = 0; u < usedIds.length; u++) {
        var usedItem = usedItems[usedIds[u]];
        if (usedItem.count === 0) continue;
        usedText.push(Text.of(usedItem.name).yellow());
        usedText.push(Text.of(" x ").gold());
        usedText.push(Text.of(usedItem.count).yellow());
        usedText.push(Text.of("\n"));
      }

      player.tell(Text.of([
        Text.of(totalDevices).yellow(),
        Text.of("x ").gold(),
        Text.of(deviceType).yellow(),
        Text.of(" devices created! ").gold(),
        Text.of("(").darkGray(),
        Text.of("used").gray().hover(Text.of(usedText)),
        Text.of(")").darkGray()
      ]));

      player.give(Item.of(DEVICE_GENERICS[deviceType], totalDevices));
      anySucceeded = true;
    }
  }

  if (!anySucceeded) {
    player.displayClientMessage("Nothing to compact!", true);
  }
}

ServerEvents.commandRegistry(function(event) {
  var Commands = event.commands;

  event.register(
    Commands.literal("bulkrecycle")
      .executes(function(ctx) {
        try {
          compactItems(ctx.source.player, true);
        } catch (e) {
          console.log("[BulkRecycle] Error: " + e);
        }
        return 1;
      })
      .then(
        Commands.literal("all")
          .executes(function(ctx) {
            try {
              compactItems(ctx.source.player, false);
            } catch (e) {
              console.log("[BulkRecycle] Error: " + e);
            }
            return 1;
          })
      )
  );
});
