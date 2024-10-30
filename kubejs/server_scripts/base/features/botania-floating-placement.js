if (feature("Botania flowers placable anywhere.")) {
  ServerEvents.tags("block", (event) => {
    event.add("kubejs:botania_flower_plantable", [
      "minecraft:dirt",
      "minecraft:coarse_dirt",
      "botania:scorched_grass",
      "minecraft:mycelium",
      "minecraft:rooted_dirt",
      "botania:mutated_grass",
      "botania:vivid_grass",
      "botania:dry_grass",
      "minecraft:moss_block",
      "minecraft:farmland",
      "botania:golden_grass",
      "botania:infused_grass",
      "minecraft:podzol",
      "minecraft:grass_block",
      "botania:golden_grass",
      "botania:infused_grass",
    ]);
  });

  BlockEvents.placed((event) => {
    if (!event.block.hasTag("botania:floating_flowers")) return;
    if (!event.block.down.hasTag("kubejs:botania_flower_plantable")) return;

    event.block.set(
      event.block.id.replace("floating_", ""),
      event.block.properties
    );
  });

  console.log("replacing non-floating flowers!")
  global.flowers_that_float.forEach((i) => {
    //replaceOutputForRecipes(i.replace("floating_", ""),i)
    console.log(`${i.replace("floating_", "")} -> ${i}`)
    removeAndReplace(i.replace("floating_",""),i)
    
    ServerEvents.blockLootTables((event) => {
      event.addSimpleBlock(i.replace("floating_", ""), i);
    });
  });
}
