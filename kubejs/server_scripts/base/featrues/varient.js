BlockEvents.placed((event) => {
  console.info(event.block);
  console.info(event.player.mainHandItem.id);
  console.info(shouldAssemble(event));
  if (shouldAssemble(event)) {
    let found = false;
    allStonecuttingRecipes.forEach((recipe) => {
      if (recipe.json["result"] == event.block.item.id && !found) {
        let ingredient = JSON.parse(recipe.json["ingredient"]);
        if (!Array.isArray(ingredient)) ingredient = [ingredient];
        ingredient.forEach((item) => {
          let x = event.player.inventory.allItems
            .toArray()
            .filter((inventoryItem) => {
              return inputPredicate(event.player, item, inventoryItem);
            });
          if (x.length > 0 && !found) {
            x[0].count = x[0].count - 1;
            Utils.server.scheduleInTicks(1, () => {
              Utils.server.runCommandSilent(
                `/item replace entity ${event.player.displayName.getString()} weapon.mainhand with ${
                  event.block.id
                } ${recipe.json["result"]["count"]}`
              );
            });
            found = true;
          }
        });
      }
    });
  }
});

function inputPredicate(player, item, inventoryItem) {
    console.log(inventoryItem.tags)
  if (player.persistentData.get("auto_assemble_nothing")==true) return false;
  if (
    player.persistentData.get("auto_assemble")==true ||
    (player.persistentData.get("auto_assemble_generic_only")==true &&
    Item.of(item).hasTag("forge:devices/generics"))
  ) {
    return (
      Ingredient.of(item.item).test(inventoryItem.id) ||
      Ingredient.of("#" + item.tag).test(inventoryItem.id)
    );
  }
}
function shouldAssemble(event) {
  return event.player.mainHandItem.count == 1 && !event.player.isCreative();
}

ServerEvents.commandRegistry((event) => {
  const { commands: Commands } = event;

  event.register(
    Commands.literal("AutoAssemble").executes((context) => {
      context.source.player.persistentData.put("auto_assemble_nothing", false);
      context.source.player.persistentData.put(
        "auto_assemble_generic_only",
        false
      );
      context.source.player.persistentData.put("auto_assemble", true);
      Utils.server.runCommandSilent(
        `/title ${context.source.player.displayName.getString()} actionbar "Auto Assemble All"`
      );
      return 0;
    })
  );
  event.register(
    Commands.literal("AutoAssembleNothing").executes((context) => {
      context.source.player.persistentData.put("auto_assemble_nothing", true);
      context.source.player.persistentData.put(
        "auto_assemble_generic_only",
        false
      );
      context.source.player.persistentData.put("auto_assemble", false);
      Utils.server.runCommandSilent(
        `/title ${context.source.player.displayName.getString()} actionbar "Auto Assemble Nothing"`
      );
      return 0;
    })
  );
  event.register(
    Commands.literal("AutoAssembleGenericsOnly").executes((context) => {
      context.source.player.persistentData.put("auto_assemble_nothing", false);
      context.source.player.persistentData.put(
        "auto_assemble_generic_only",
        true
      );
      context.source.player.persistentData.put("auto_assemble", false);
      Utils.server.runCommandSilent(
        `/title ${context.source.player.displayName.getString()} actionbar "Auto Assemble Generic Only"`
      );
      return 0;
    })
  );
});
