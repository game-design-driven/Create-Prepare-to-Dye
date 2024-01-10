const CREATE_GLUE_ENTITY = Java.loadClass("com.simibubi.create.content.contraptions.glue.SuperGlueEntity")

const findGlue_distance = 50;


function findGlue(context, verbose){
  let player = context.getSource().getPlayer()
  let level = player.level

  let eye = player.eyePosition
  let aX = eye.x() - findGlue_distance, aY = eye.y() - findGlue_distance, aZ = eye.z() - findGlue_distance
  let bX = eye.x() + findGlue_distance, bY = eye.y() + findGlue_distance, bZ = eye.z() + findGlue_distance
  

  let entities = level.getEntitiesOfClass(CREATE_GLUE_ENTITY, AABB.of(aX,aY,aZ, bX,bY,bZ))
  player.tell("Found " + entities.size())
  if (verbose) {
    for (let i = 0; i < entities.size(); i ++) {
      let entity = entities[i];
      player.tell("   " + i + ": "+ entity.getBoundingBox())
    }
  }
  return 0;
}

ServerEvents.commandRegistry((event) => {
  const { commands: Commands, arguments: Arguments } = event;
    event.register(
      Commands.literal("findGlue")
      .executes((context) => {
          return findGlue(context, false)
        })
      .then(
        Commands.literal("verbose")
        .executes((context) => {
          return findGlue(context, true)
        }))
    );
})