const UtilsJS = Java.loadClass('dev.latvian.mods.kubejs.util.UtilsJS');
const BlockEntityJS = Java.loadClass('dev.latvian.mods.kubejs.block.entity.BlockEntityJS')
const DyeItem = Java.loadClass('net.minecraft.world.item.DyeItem')
const StructureTemplate = Java.loadClass('net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate')

const ARMOR_STAND_Y_OFFSET = 0.8
const ARMOR_STAND_KILL_OFFSET = 0.1

/**
 * @param {Internal.BlockRightClickedEventJS} event 
 * @param {String} reason 
 * @param {boolean} isComponent 
 */
function animation_block_success(event, reason, isComponent) {
  let player = event.player
  if (reason != null)
    player.tell(Text.translate("block.ptdye.animation_block").append(": ").green().append(
  isComponent ? reason : Component.ofString(reason).white())
  )
  player.playNotifySound("minecraft:entity.player.levelup", "players", 1, 5)
  // consume event
  event.success()
}

/**
 * @param {Internal.BlockRightClickedEventJS} event 
 * @param {String} reason 
 * @param {boolean} isComponent 
 */
function animation_block_failure(event, reason, isComponent) {
  let player = event.player
  if (reason != null)
    player.tell(Text.translate("block.ptdye.animation_block").append(": ").red().append(
      isComponent ? reason : Component.ofString(reason).white())
    )
  player.playNotifySound("minecraft:block.note_block.basedrum", "players", 1, 1)
  player.playNotifySound("minecraft:block.note_block.cow_bell", "players", 1, 4)
  // consume event
  event.success()
}

/**
 * @param {Internal.MinecraftServer} server
 * @param {Internal.BlockPos} blockPosition
 */
function animation_block_killAmourStand(server, blockPosition) {
  let {x, y, z} = blockPosition
  server.runCommandSilent(`execute in minecraft:overworld run kill @e[type=minecraft:armor_stand,limit=1,sort=nearest,x=${x-ARMOR_STAND_KILL_OFFSET},y=${y+ARMOR_STAND_Y_OFFSET-ARMOR_STAND_KILL_OFFSET},z=${z-ARMOR_STAND_KILL_OFFSET},dx=${ARMOR_STAND_KILL_OFFSET*2},dy=${ARMOR_STAND_KILL_OFFSET*2},dz=${ARMOR_STAND_KILL_OFFSET*2}]`)
}

/**
 * @param {Internal.MinecraftServer} server
 * @param {Internal.BlockPos} blockPosition
 * @param {String} name 
 */
function animation_block_setAmourStandName(server, blockPosition, name) {
  animation_block_killAmourStand(server, blockPosition)
  let {x, y, z} = blockPosition;
  server.runCommandSilent(`execute in minecraft:overworld run summon minecraft:armor_stand ${x} ${y+ARMOR_STAND_Y_OFFSET} ${z} {NoGravity:1,CustomNameVisible:1,CustomName:'{"text":"${name}"}',Invulnerable:1,Invisible:1,Marker:1}`)
}

/**
 * 
 * @param {String} name 
 * @returns {boolean}
 */
function isValidName(name) {
  const regex = /[^a-zA-Z0-9_.\-\/]/
  return !regex.test(name)
}

/**
 * 
 * @param {String} filePath 
 * @returns {String}
 */
function getDirectoryPath(filePath) {
  const lastIndex = filePath.lastIndexOf("/")
  if (lastIndex !== -1) {
    return filePath.substring(0, lastIndex)
  }
  return filePath
}

BlockEvents.rightClicked("ptdye:animation_block", (event) => {
  const player = event.player
  /** @type {Internal.ItemStack} */
  const heldItem = player.handSlots[0]
  if(event.getHand().name() != "MAIN_HAND" || heldItem.isBlock())
    return event.cancel();
  event.player.swing()

  const block = event.block
  const blockPos = block.getPos()
  /** @type {Internal.BlockEntityJS} */
  const blockEntity = event.level.getBlockEntity(blockPos)
  if (!(blockEntity instanceof BlockEntityJS))
    return;

  if (heldItem.id == "minecraft:name_tag")
  { // rename animation
    if (!heldItem.hasCustomHoverName())
      return animation_block_failure(event, "Name tag has not been renamed!")
  
    const name = heldItem.getHoverName().getString()
    if(!isValidName(name))
      return animation_block_failure(event, "Given name can only contain the following characters: a-z A-Z 0-9 _ . \- \/")
    blockEntity.data.putString("name", name)
    blockEntity.sync()

    animation_block_setAmourStandName(event.server, blockEntity.getBlockPos(), name)
  
    return animation_block_success(event, Component.ofString("Name set to ").white().append(heldItem.getHoverName().italic()), true)
  }  else if (heldItem.getItem() instanceof DyeItem)
  { // Set outline color
    let color
    if (player.isShiftKeyDown())
      color = heldItem.getItem().getDyeColor().getTextColor()
    else
      color = heldItem.getItem().getDyeColor().getTextColor()
    blockEntity.data.putInt("color", color)
    return animation_block_success(event, `Color set to ${heldItem.getItem().getDyeColor().getName().toUpperCase()}`)
  } else if (heldItem.id.startsWith("ptdye:animation_anchor"))
  {
    if (heldItem.id == "ptdye:animation_anchor")
      return animation_block_failure(event, "Anchor has no target set")
    blockEntity.data.put("anchor", heldItem.nbt.get("target"))
    return animation_block_success(event, `Anchor set to [${heldItem.nbt.getIntArray("target").join(' ,')}]`)
  } else if(player.isShiftKeyDown())
  { // Schematic
    const name = blockEntity.data.getString("name")
    if (!name)
      return animation_block_failure(event, 
        Component.ofString('No name set! You must use a ')
                 .append(Component.of(Items.NAME_TAG.getName(Items.NAME_TAG)).aqua().underlined())
                 .append(Component.ofString(' before you can save the structure!'))
                 .white()
        , true)
    if(!isValidName(name))
      return animation_block_failure(event, "Set name can only contain the following characters: a-z A-Z 0-9 _ . \- \/")

    const min = blockEntity.data.getIntArray("min")
    const max = blockEntity.data.getIntArray("max")
    if (min.length < 3 && max.length < 3)
      return animation_block_failure(event, "Cannot create structure from nothing. Check that there is a glued structure on one of the cardinal faces.")
    let [minX, minY, minZ] = min
    let [maxX, maxY, maxZ] = max

    let anchor = block.getPos()
    const anchorArray = blockEntity.data.getIntArray("anchor")
    if (anchor.length >= 3)
      anchor = new BlockPos(anchorArray[0], anchorArray[1], anchorArray[2])
    else
      player.tell(Text.translate("block.ptdye.animation_block").append(": ").green().append(Component.ofString("No anchor set, using position of animation block").white()))

    const [neighbours] = animation_findGluedNeighbours(block)
    const nbt = Ptdye.utils.createContraptionNBTFrom(event.level, neighbours, anchor, AABB.of(minX, minY, minZ, maxX, maxY, maxZ))
    console.log(nbt)

    const filePath = CONTRAPTION_DIRECTORY + name + ".contraption"
    
    Ptdye.utils.createDirectory(getDirectoryPath(filePath))
    NBTIO.write(filePath, nbt)

    return animation_block_success(event, Component.ofString('Saved at ').append(Component.ofString(filePath).clickOpenFile(filePath).underlined().aqua()).white(), true)
  } else 
  { // Show outline
    const oldState = block.getBlockState()
    const newState = {
      triggered: !(oldState.getValue(BlockProperties.TRIGGERED)),
      // unchanged values
      facing: oldState.getValue(BlockProperties.HORIZONTAL_FACING),
      attached: oldState.getValue(BlockProperties.ATTACHED),
    }
    block.set(block.id, newState)
    if (oldState.getValue(BlockProperties.TRIGGERED))
      player.playNotifySound("minecraft:ui.toast.in", "players", 1, 3)
    else
      player.playNotifySound("minecraft:ui.toast.out", "players", 1, 10)
  }
})

BlockEvents.broken("ptdye:animation_block", (event) => {
  animation_block_killAmourStand(event.server, event.block.getPos())
})