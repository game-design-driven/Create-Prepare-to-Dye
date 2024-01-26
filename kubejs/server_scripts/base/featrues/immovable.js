// For some reason, some blocks that aren't meant to be movable by create are.
// This is a work around to stop them from being moved by create.

addToTag("forge:relocation_not_supported", [
  "minecraft:bedrock",
  "minecraft:command_block",
  "minecraft:end_portal_frame",
  "minecraft:spawner",
  "minecraft:budding_amethyst",
  "minecraft:jigsaw",
  "minecraft:structure_block",
  "minecraft:structure_void",
])