// priority: 100

const CREATE_GLUE_SELECTION_HELPER = Java.loadClass("com.simibubi.create.content.contraptions.glue.SuperGlueSelectionHelper")

/**
 * 
 * @param {Internal.BlockContainerJS} block 
 * @param {Internal.Direction} direction 
 * @returns {Internal.Set<BlockPos>}
 */
function animation_findGluedNeighbourInDirection(block, direction) {
  const blockPos = block.getPos()
  const neighbours = CREATE_GLUE_SELECTION_HELPER.searchGlueGroup(block.level, blockPos, blockPos.relative(direction), true)
  return neighbours && neighbours.size() > 2 ? neighbours : null
}
/**
 * 
 * @param {Internal.BlockContainerJS} block 
 * @returns {Array<Internal.Set<BlockPos>, Internal.Direction>}
 */
function animation_findGluedNeighbours(block) {
  let neighbours = null, direction = null
  // Find any glued blocks around target block
  for (const directionCandidate of [Direction.north, Direction.east, Direction.south, Direction.west]) {
    let neighboursCandidate = animation_findGluedNeighbourInDirection(block, directionCandidate)
    if (neighboursCandidate && 
      (neighbours == null || neighbours.size() < neighboursCandidate))
    {
      neighbours = neighboursCandidate
      direction = directionCandidate
    }
  }
  if (neighbours == null)
    return [null, null]
  
  const blockPos = block.getPos()

  // remove given block from set
  neighbours.removeIf((position) => position.x == blockPos.getX() && position.y == blockPos.getY() &&  position.z == blockPos.getZ())

  // Find direction of glued blocks
  for (const directionCandidate of [Direction.north, Direction.east, Direction.south, Direction.west]) {
    let candidate = blockPos.relative(directionCandidate)
    let contains = neighbours.some(
      (bp) => {
        return bp.getX() == candidate.getX() &&
               bp.getY() == candidate.getY() &&
               bp.getZ() == candidate.getZ()
      })
    if (contains)
      return [neighbours, directionCandidate]
  }
  // if it couldn't be found; return best guess
  return [neighbours, direction]
}

/**
 * 
 * @param {Internal.MinecraftServer} server 
 * @param {Internal.UUID} uuid 
 * @returns {Internal.Entity|null} Returns null if cannot be found
 */
function animation_getEntityByUUID(server, uuid) {
  if (!server || !uuid)
    return null;

  server.entities.forEach(entity => {
      if (entity.uuid.compareTo(uuid)) {
          return entity;
      }
  });
  return null;
}