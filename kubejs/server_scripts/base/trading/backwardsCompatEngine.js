// Priority: 100

global.revision = 1;
function isFirstLogin() {
  return !(
    Utils.server.persistentData.getBoolean("existing_world_compat_engine") ||
    Utils.server.persistentData.getBoolean("existing_world")
  );
}

function isTradeRevisionUpToDate() {
  return (
    Utils.server.persistentData.getInt(`tradeRevision`) &&
    Utils.server.persistentData.getInt(`tradeRevision`) === global.revision
  );
}
if (feature("Backwards compatibility engine for trades")) {
  PlayerEvents.loggedIn((event) => {
    let player = event.player;
    console.log("login");
    if (isFirstLogin()) {
      console.log("First login");
      Utils.server.persistentData.putBoolean(
        "existing_world_compat_engine",
        true
      );
      Utils.server.persistentData.putInt(`tradeRevision`, global.revision);
      Utils.server.persistentData.putInt(
        `tradeRevisionApplied`,
        global.revision
      );
    }

    if (isTradeRevisionUpToDate()) {
      console.log("trade is already up to date");
      return;
    }
    console.log("trade is not up to date");
    player.tell(
      Component.yellow(
        "The trading tree underwent significant updates and changes since you last played. Would you like to restart your trading journey? \nYes means you will get the starter trades again now and all old trades will be removed. No means you can keep playing but trade progression recipes will not show when checking uses (but will still work so check EMI index)"
      )
    );
    player.tell(
      Component.green("[Yes, restart trading tree]")
        .click({
          action: "run_command",
          value: "/tradingTreeRevisionUpgrade",
        })
        .hover(Text.of("Runs the command /tradingTreeRevisionUpgrade").yellow())
    );
    player.tell(
      Component.red("[No, leave me alone]")
        .click({
          action: "run_command",
          value: "/tradingTreeRevisionIgnore",
        })
        .hover(Text.of("Runs the command /tradingTreeRevisionIgnore").yellow())
    );
    player.tell(
      Component.red("[I want more Betsy]")
        .click({
          action: "open_url",
          value: "https://media1.tenor.com/m/9wGf-oOHKMsAAAAd/cow-cow-milk.gif",
        })
        .hover("I want more Betsy")
    );
  });

  ServerEvents.commandRegistry((event) => {
    const { commands: Commands, arguments: Arguments } = event;
    event.register(
      Commands.literal("tradingTreeRevisionUpgrade").executes((context) => {
        let player = context.getSource().getPlayer();
        if (
          Utils.server.persistentData.getInt("tradeRevisionApplied") &&
          Utils.server.persistentData.getInt("tradeRevisionApplied") ===
            global.revision
        ) {
          player.tell(
            Component.yellow("Cannot apply revision upgrade more than once")
          );
          return 1;
        }
        Utils.server.persistentData.putInt(`tradeRevision`, global.revision);
        Utils.server.persistentData.putInt(
          `tradeRevisionApplied`,
          global.revision
        );
        player.tell(Component.green("Applied revision upgrade"));
        player.inventory
          .getAllItems()
          .toArray()
          .forEach((item) => {
            if (!isItemAllowed(item, player)) {
              player.inventory.clear(Item.of(item).strongNBT());
              player.tell(
                Text.darkGray(
                  `removing item ${item.id} from inventory as it is not allowed in this revision`
                )
              );
            }
          });
        global.starterDeals.forEach((deal) => player.give(deal.item.copy()));
        return 1;
      })
    );
    event.register(
      Commands.literal("tradingTreeRevisionIgnore").executes((context) => {
        let player = context.getSource().getPlayer();
        if (
          Utils.server.persistentData.getInt(`tradeRevision`) == global.revision
        ) {
          player.tell(
            Component.yellow(
              "Cannot ignore revision after applying or ignoring it already"
            )
          );
          return 1;
        }
        Utils.server.persistentData.putInt(`tradeRevision`, global.revision);
        player.tell(Component.green("Ignoring revision " + global.revision));
        return 1;
      })
    );
  });

  PlayerEvents.inventoryChanged((event) => {
    let item = event.item;
    if (
      item.id !== "wares:delivery_agreement" &&
      item.id !== "wares:completed_delivery_agreement"
    )
      return;

    let player = event.player;
    let revision = item.nbt.getInt("revision");
    let serverRev = Utils.server.persistentData.getInt(`tradeRevisionApplied`);
    if (!isItemAllowed(Item.of(item))) {
      player.tell(
        Component.darkGray(
          `You picked up an item from revision ${revision} And you are on revision ${serverRev} This item will be removed from your inventory`
        )
      );
      player.inventory.clear(Item.of(item).strongNBT());
    }
  });
}

function isItemAllowed(item) {
  if (Utils.server.persistentData.getInt(`tradeRevisionApplied`) === 0)
    return true;
  item = Item.of(item);
  if (
    item.id !== "wares:delivery_agreement" &&
    item.id !== "wares:completed_delivery_agreement"
  )
    return true;
  let nbt = item.nbt;
  let revision = nbt.getInt("revision");
  let serverRev = Utils.server.persistentData.getInt(`tradeRevisionApplied`);
  return revision === serverRev;
}
