/**
 * Get `ptdye:animation_anchor_set` with position set
 * @param {BlockPos} blockPos 
 * @returns {Internal.ItemStack}
 */
function animation_getAnchorAt(blockPos) {
  const {x, y, z} = blockPos;
  const pos = [UtilsJS.parseInt(x, 0), UtilsJS.parseInt(y, 0), Utils.parseInt(z, 0)]
  let item = Item.withNBT("ptdye:animation_anchor_set", {
    target: NBT.intArrayTag(pos)
  })
  item = item.withName(Text.translate("item.ptdye.animation_anchor_set", pos.join(', ')).italic(false))
  return item
}

ItemEvents.rightClicked("ptdye:animation_anchor", (event) => {
  if (event.getHand().name() != "MAIN_HAND")
    return event.cancel();

  event.player.swing()

  const block = event.target.block
  if (!block || block == Blocks.AIR || block.id == "ptdye:animation_block")
    return event.success()

  event.player.setMainHandItem(animation_getAnchorAt(block.getPos()))
  player.playNotifySound("minecraft:entity.player.levelup", "players", 1, 5)
  event.success()
})

ItemEvents.rightClicked("ptdye:animation_anchor_set", (event) => {
  if (event.getHand().name() != "MAIN_HAND")
    return event.cancel();

  event.player.swing()

  if (event.player.isShiftKeyDown())
    event.player.setMainHandItem("ptdye:animation_anchor")
  else {
    const block = event.target.block
    if (!block || block == Blocks.AIR || block.id == "ptdye:animation_block")
      return event.success()
    event.player.setMainHandItem(animation_getAnchorAt(block.getPos()))
  }
  player.playNotifySound("minecraft:entity.player.levelup", "players", 1, 5)
  event.success()
})
