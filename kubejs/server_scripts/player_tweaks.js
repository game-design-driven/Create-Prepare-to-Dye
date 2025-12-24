//priority: 0
// Player Tweaks - player-related gameplay modifications

// Player invincibility - players cannot take damage except from void/kill
EntityEvents.hurt(function (event) {
  if (global.config_invincibility.get() && event.entity.player && !event.source.isBypassInvul()) {
    event.cancel();
  }
});

// =============================================================================
// HAND INTERACTIONS - Fill blocks directly with buckets
// =============================================================================

function fillBlockWithBucket(block, event) {
  var fluid;
  var amount = 1000;
  var heldItem = event.player.handSlots[0].id;

  if (heldItem === "minecraft:milk_bucket") {
    fluid = "minecraft:milk";
  } else {
    fluid = heldItem.replace("_bucket", "");
  }

  if (!event.player.isCreative()) {
    event.player.setMainHandItem("minecraft:bucket");
  }

  event.level.runCommandSilent(
    "playsound minecraft:item.bucket.empty block @a " +
      event.block.x + " " + event.block.y + " " + event.block.z + " 0.4 1.7"
  );

  block.mergeEntityData({
    Tanks: [
      {
        TankContent: {
          Amount: amount,
          FluidName: fluid,
        },
      },
    ],
  });
}

// Fill diesel engine with bucket
BlockEvents.rightClicked("createdieselgenerators:diesel_engine", function (event) {
  var heldItem = event.player.handSlots[0].id;
  if (
    heldItem.endsWith("_bucket") &&
    event.block.getEntityData().Tanks[0].Level.Value === 0
  ) {
    fillBlockWithBucket(event.block, event);
    event.cancel();
  }
});

// Fill huge diesel engine with bucket
BlockEvents.rightClicked("createdieselgenerators:huge_diesel_engine", function (event) {
  var heldItem = event.player.handSlots[0].id;
  if (
    heldItem.endsWith("_bucket") &&
    event.block.getEntityData().Tanks[0].Level.Value === 0
  ) {
    fillBlockWithBucket(event.block, event);
    event.cancel();
  }
});

// Fill spout with bucket
BlockEvents.rightClicked("create:spout", function (event) {
  var heldItem = event.player.handSlots[0].id;
  if (
    heldItem.endsWith("_bucket") &&
    event.block.getEntityData().Tanks[0].Level.Value === 0
  ) {
    var amount = 1000;
    var fluid = heldItem.replace("_bucket", "");
    event.player.swing();

    Utils.server.runCommandSilent(
      "setblock " + event.block.x + " " + event.block.y + " " + event.block.z + " air"
    );
    Utils.server.runCommandSilent(
      "setblock " + event.block.x + " " + event.block.y + " " + event.block.z +
      " create:spout{Tanks:[{TankContent:{Amount:" + amount + ",FluidName:\"" + fluid + "\"}}]}"
    );

    if (!event.player.isCreative()) {
      event.player.setMainHandItem("minecraft:bucket");
    }
    event.cancel();
  }
});
