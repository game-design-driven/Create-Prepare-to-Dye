/**
 *
 * @param {Internal.Player} player
 */
function getAllItems(player) {
  // if (player.chestArmorItem.id == "quark:backpack"){
  //   return player.chestArmorItem.nbt
  //     .get("Inventory")
  //     .concat(player.inventory.allItems.toArray());
  // }
  return player.inventory.allItems.toArray();
}

BlockEvents.placed((event) => {
  if (shouldAssemble(event)) {
    let found = false;
    allStonecuttingRecipes.forEach((recipe) => {
      let result = recipe["result"];
      if (result == event.block.item.id && !found) {
        let ingredient = JSON.parse(recipe["ingredient"]);
        if (!Array.isArray(ingredient)) ingredient = [ingredient];
        ingredient.forEach((item) => {
          let x = getAllItems(event.player).filter((inventoryItem) => {
            return inputPredicate(event.player, item, inventoryItem);
          });
          if (x.length > 0 && !found) {
            if (x[0].Count) x[0].Count = x[0].Count - 1;
            else x[0].count = x[0].count - 1;
            Utils.server.scheduleInTicks(1, () => {
              Utils.server.runCommandSilent(
                `/playsound ui.stonecutter.take_result block @a ${event.block.x} ${event.block.y} ${event.block.z} 0.4 1.3`
              );
              Utils.server.runCommandSilent(
                `/item replace entity ${event.player.displayName.getString()} weapon.mainhand with ${
                  event.block.id
                } ${result["count"]}`
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
  if (player.persistentData.get("auto_assemble_nothing") == true) return false;
  if (
    player.persistentData.get("auto_assemble") == true ||
    (player.persistentData.get("auto_assemble_generic_only") == true &&
      Item.of(item).hasTag("forge:devices/generics"))
  ) {
    if (inventoryItem.id=="quark:backpack") return false;
    // console.log(typeof inventoryItem)
    // if (inventoryItem){
    //   if (inventoryItem.nbt) {
    //     console.log(inventoryItem.nbt);
    //     return false
    //   }
    // }
    // if (inventoryItem.nbt || Item.of(inventoryItem).nbt) return false
    return (
      Ingredient.of(item.item).test(inventoryItem.id) ||
      Ingredient.of("#" + item.tag).test(inventoryItem.id)
    );
  }
}
function shouldAssemble(event) {
  return (
    event.player.mainHandItem.id == event.block.item.id &&
    event.player.mainHandItem.count == 1 &&
    !event.player.isCreative()
  );
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
