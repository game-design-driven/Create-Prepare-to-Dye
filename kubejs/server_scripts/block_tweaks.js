//priority: 0
// Block Tweaks - block-related gameplay modifications

// Diamond tools have built-in silk touch
var SILKY_TOOLS = [
  "minecraft:diamond_pickaxe",
  "minecraft:diamond_axe",
  "minecraft:diamond_shovel",
  "minecraft:diamond_hoe",
  "minecraft:diamond_sword"
];

BlockEvents.broken(function(event) {
  var toolId = event.player.mainHandItem.id;

  var isSilkyTool = false;
  for (var i = 0; i < SILKY_TOOLS.length; i++) {
    if (SILKY_TOOLS[i] === toolId) {
      isSilkyTool = true;
      break;
    }
  }

  if (!isSilkyTool) return;
  if (Item.of(event.block.id).isEmpty()) return;

  event.block.popItem(event.block.id);
  event.block.set("air");
});

// Schematicannon requires no fuel (configurable)
BlockEvents.placed(function(event) {
  if (event.block.id !== "create:schematicannon") return;
  if (!global.config_schematicannonFreeFuel.get()) return;

  var data = event.block.entityData;
  data.putFloat("Fuel", 1);
  event.block.setEntityData(data);
});

// Glass bottles cannot be filled from water source blocks
ItemEvents.rightClicked("minecraft:glass_bottle", function(event) {
  if (event.target && event.target.block && event.target.block.id === "minecraft:water") {
    event.cancel();
  }
});

// Spaceship structure spawns on first world load
ServerEvents.loaded(function(event) {
  if (!event.server.persistentData.getBoolean("crashLanded")) {
    event.server.persistentData.putBoolean("crashLanded", true);
    event.server.runCommandSilent("place structure minecraft:spaceship_wreck_main 0 64 0");
  }
});
