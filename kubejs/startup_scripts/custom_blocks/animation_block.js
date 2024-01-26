StartupEvents.registry("block", (event) => {
  event.create("ptdye:animation_block")
    .translationKey("block.ptdye.animation_block")
    .tag("forge:immovable")
    .material("stone")
    .soundType(SoundType.STONE)
    .hardness(-1)
    .item((blockItem) => {
      blockItem.rarity("epic")
      blockItem.tooltip(Text.translate("block.ptdye.animation_block.tooltip").gold())
      blockItem.group(null) // remove from creative tabs
    })
    .property(BlockProperties.HORIZONTAL_FACING)
    .property(BlockProperties.ATTACHED)
    .property(BlockProperties.TRIGGERED)
    .placementState((state) => {
      state.setValue(BlockProperties.HORIZONTAL_FACING, Direction.north)
      state.set(BlockProperties.TRIGGERED, false)
      state.set(BlockProperties.ATTACHED, false)
    })
    .blockEntity((entity) => {
      entity.enableSync()
      entity.initialData({
        name: "",
        min: [],
        max: [],
        color: 2651799,
      })
      entity.tick(2, 0, (blockEntity) => {
        const level = blockEntity.level
        const blockPos = blockEntity.getBlockPos()
        const block = level.getBlock(blockPos)
        const currentState = block.getBlockState()

        if (level.isClientSide()) { // isClient
          if (! currentState.getValue(BlockProperties.TRIGGERED) || ! currentState.getValue(BlockProperties.ATTACHED))
            return;

          const {x: bx, y: by, z:bz} = blockPos
          const min = blockEntity.data.getIntArray("min")
          const max = blockEntity.data.getIntArray("max")
          if (min.length >= 3 && max.length >= 3) {
            let [minX, minY, minZ] = min
            let [maxX, maxY, maxZ] = max
            minX += bx, maxX += bx
            minY += by, maxY += by
            minZ += bz, maxZ += bz
            global.create.CreateClient.OUTLINER.showAABB(blockEntity, AABB.of(maxX, maxY, maxZ, minX, minY, minZ), 6)
              .colored(blockEntity.data.getInt("color"))
              .withFaceTextures(global.create.SpecialTextures.SELECTION, global.create.SpecialTextures.CUTOUT_CHECKERED)
              .disableLineNormals()
              .disableCull()
              .lineWidth(0.08)
          }
          const anchor = blockEntity.data.getIntArray("anchor")
          if (anchor.length >= 3) {
            global.create.CreateClient.OUTLINER.showAABB({}, AABB.ofBlock(BlockPos(anchor[0], anchor[1], anchor[2])), 6)
              .colored(Color.rgba(255, 0, 255, 255).getRgbJS())
              .withFaceTextures(global.create.SpecialTextures.CUTOUT_CHECKERED, global.create.SpecialTextures.CUTOUT_CHECKERED)
              .disableLineNormals()
              .disableCull()
              .lineWidth(0.1)
          }
        } // isClient
        else { // isServer
          let [neighbours, direction] = animation_findGluedNeighbours(block)
          const newState = {
            facing: direction != null? direction : Direction.south,
            attached: direction != null,
            // unchanged values
            triggered: currentState.getValue(BlockProperties.TRIGGERED),
          }
          block.set(block.id, newState)
          if (neighbours == null)
            return;

          const min = { x: Number.MAX_VALUE, y: Number.MAX_VALUE, z: Number.MAX_VALUE }
          const max = { x:-Number.MAX_VALUE, y:-Number.MAX_VALUE, z:-Number.MAX_VALUE }
          for (const blockPosition of neighbours) {
            let { x: deltaX, y: deltaY, z: deltaZ } = blockPosition.subtract(blockPos)

            min.x = Math.min(min.x, deltaX)
            min.y = Math.min(min.y, deltaY)
            min.z = Math.min(min.z, deltaZ)

            max.x = Math.max(max.x, deltaX+1)
            max.y = Math.max(max.y, deltaY+1)
            max.z = Math.max(max.z, deltaZ+1)
          }

          const UtilsJS = global.kubejs.UtilsJS
          const minI = [UtilsJS.parseInt(min.x, 0), UtilsJS.parseInt(min.y, 0), UtilsJS.parseInt(min.z, 0)]
          const maxI = [UtilsJS.parseInt(max.x, 0), UtilsJS.parseInt(max.y, 0), UtilsJS.parseInt(max.z, 0)]

          blockEntity.data.putIntArray("min", minI)
          blockEntity.data.putIntArray("max", maxI)
          blockEntity.sync()

          //console.log(event, `Found an area of ${maxI[0]-minI[0]}, ${maxI[1]-minI[1]}, ${maxI[2]-minI[2]} made of ${neighbours.size()} glued blocks`)
        } // isServer
      })
    })
})
