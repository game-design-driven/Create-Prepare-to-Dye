const CreateClient = Java.loadClass('com.simibubi.create.CreateClient')
const SpecialTextures = Java.loadClass('com.simibubi.create.AllSpecialTextures')

ClientEvents.tick((event) => {
  const item = event.player.getHeldItem("main_hand")
  if (item.id == "ptdye:animation_anchor_set") {
    const [x, y, z] = item.nbt.getIntArray("target")
    CreateClient.OUTLINER.showAABB(event.player, AABB.ofBlock(BlockPos(x, y, z)), 2)
      .colored(Color.rgba(255, 0, 255, 255).getRgbJS())
      .withFaceTextures(SpecialTextures.CUTOUT_CHECKERED, SpecialTextures.CUTOUT_CHECKERED)
      .disableLineNormals()
      .disableCull()
      .lineWidth(0.1)
  }
})