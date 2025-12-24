if (feature("Botania flowers placable anywhere.")) {

  BlockEvents.placed((event) => {
    event.player.tell("hi")
    if (!event.block.hasTag("botania:floating_flowers")) return;
    if (!event.block.down.hasTag("kubejs:botania_flower_plantable")) return;

    event.block.set(
      event.block.id.replace("floating_", ""),
      event.block.properties
    );
  });
}
