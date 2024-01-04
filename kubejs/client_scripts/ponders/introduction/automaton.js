const parrotAnimation = Java.loadClass('com.simibubi.create.foundation.ponder.element.ParrotElement')
const parrotAnimation_stillPose = parrotAnimation.DancePose
const parrotAnimation_poiPose = parrotAnimation.FacePointOfInterestPose
const parrotAnimation_cursorPose = parrotAnimation.FaceCursorPose

var lastScene_text, lastTicks, lastPosition
function factory_text(string, scene, ticks, position) {
  if (!scene) {
    scene = lastScene_text
    ticks = lastTicks
    position = lastPosition
  }

  scene.text(ticks, string, position)
    .colored("white")
    .placeNearTarget()
  scene.addLazyKeyframe()

  lastScene_text = scene
  lastTicks = ticks
  lastPosition = position
}
function factory_text_idle(string, scene, ticks, position) {
  factory_text(string, scene, ticks, position)
  lastScene_text.idle(lastTicks+5) // last is current due to above function running first
}

var lastScene_parrotMove, lastParrot
function factory_parrotMove(deltaPos, ticks, idleTicks,  scene, parrot) {
  if (!scene) {
    scene = lastScene_parrotMove
    parrot = lastParrot
  }
  if (!idleTicks)
    idleTicks = ticks

  scene.special.moveParrot(parrot, deltaPos, ticks)
  scene.idle(idleTicks)
  
  lastScene_parrotMove = scene
  lastParrot = parrot
}

function jumpCloud(pos, scene){
  scene.particles.simple(3, "cloud", pos)
  scene.playSound("entity.rabbit.jump")
  scene.idle(1)
}

function fadeInSection(scene, selection, movingOffset, direction, idleTicks, particlePos) {
  let link = scene.world.showIndependentSection(selection, direction)
  scene.world.moveSection(link, movingOffset, 0)
  if (particlePos) {
    scene.showControls(idleTicks-2, particlePos, "down")
    .withItem("minecraft:barrier")
  }
  scene.idle(idleTicks)
  scene.world.hideIndependentSection(link, direction)
  scene.idle(idleTicks+3)
}

Ponder.registry((event) => {
  event
    .create("minecraft:cobblestone")
    .tag("ptdye:tutorial")
    .scene("introduction", "AUTOMATON CQ1503", (scene, _) => {
      scene.configureBasePlate(2,2,-1)
      scene.setSceneOffsetY(0)
      scene.scaleSceneView(2)
      scene.showBasePlate()
      scene.idle(10)
      
      let pos = [1.5,1,1.5]
      let textPos = pos.slice() //copy pos array
      textPos[1] += 1
      let parrot = scene.special.createBirb(pos, () => new parrotAnimation_stillPose())
      factory_text_idle("Thank you for purchasing the AUTOMATON CQ1503", scene, 60, textPos)
      factory_text_idle("We hope it brings you many years of good use!")
      factory_text_idle("Version CQ1503 brings all new features!")
      factory_text_idle("No need for maintenance, fuel, or down time! Made with indestructible materials", scene, 80, textPos)
    })
    .scene("jump", "Triple Jump", (scene, _) => {
      scene.configureBasePlate(0, 0, 5)
      scene.showBasePlate()
      scene.setSceneOffsetY(-1.5)
      scene.scaleSceneView(1.5)
      scene.world.setBlocks([4,1,0,4,3,0], "quark:iron_plate")
      scene.world.setBlocks([0,1,4,0,3,4], "quark:iron_plate")
      scene.showStructure()
      scene.idle(10)
      scene.special.movePointOfInterest([0,4,4])
      let parrot = scene.special.createBirb([4.5,4,.5], () => new parrotAnimation_poiPose())
      factory_text_idle("Introducing Triple Jump", scene, 30, [4.5,5,.5])
      scene.addKeyframe()
      // smooth jump otherwise it looks like zigzagging in the air
      factory_parrotMove([-.15, .40,.15], 2, 1, scene, parrot) // @ 2 ticks
      jumpCloud([4.5,4.,.5], scene) // sleeps 1
      factory_parrotMove([-.15, .30, .15], 2) // @  4 ticks
      factory_parrotMove([-.15, .20, .15], 2) // @  6 ticks
      factory_parrotMove([-.15, .08, .15], 2) // @  8 ticks
      factory_text("It can jump across wide gaps", scene, 40, [3,3,1])
      factory_parrotMove([-.15, .02, .15], 2) // @ 10 ticks
      factory_parrotMove([-.40,-.50, .40], 5) // @ 15 ticks
      factory_parrotMove([-.30,-.55, .30], 5) // @ 20 ticks
      factory_parrotMove([-.12, .40, .12], 2, 1) // @ 22ticks
      jumpCloud([2.8,3.8,2.5], scene) // sleeps 1
      factory_parrotMove([-.12, .30, .12], 2) // @ 24 ticks
      factory_parrotMove([-.12, .20, .12], 2) // @ 26 ticks
      factory_parrotMove([-.12, .08, .12], 2) // @ 28 ticks
      factory_parrotMove([-.12, .02, .12], 2) // @ 30 ticks
      factory_parrotMove([-.50,-.50, .50], 5) // @ 35 ticks
      factory_parrotMove([-.50,-.70, .50], 5, 4) // @ 40 ticks
      factory_parrotMove([-.15, .40, .15], 2, 1) // @ 42ticks
      jumpCloud([1.45,3.8,3.5], scene) // sleeps 1
      factory_parrotMove([-.15, .30, .15], 2) // @ 44 ticks
      factory_parrotMove([-.15, .20, .15], 2) // @ 46 ticks
      factory_parrotMove([-.15, .08, .15], 2) // @ 48 ticks
      factory_parrotMove([-.10, .02, .10], 2) // @ 50 ticks
      factory_parrotMove([-.10,-.30, .10], 5) // @ 55 ticks
      factory_parrotMove([-.10,-.40, .10], 5, 4) // @ 60 ticks

      scene.special.changeBirbPose(parrot, () => new parrotAnimation_cursorPose())
      scene.special.movePointOfInterest([5,4,0])
      scene.idle(3)
      scene.addLazyKeyframe()
      
      let parrot2 = scene.special.createBirb([3.8,1,0.5], () => new parrotAnimation_poiPose())
      scene.idle(10)
      factory_parrotMove([0,.4,0], 2, 1, scene, parrot2) // @  2 ticks
      jumpCloud([3.8,1,0.5], scene) // sleeps 1
      factory_parrotMove([ 0, .30, 0], 2) // @ 4 ticks
      factory_parrotMove([ 0, .20, 0], 2) // @ 6 ticks
      factory_parrotMove([ 0, .08, 0], 2) // @ 8 ticks
      factory_text("And up to high places", scene, 30, [3.8,3,0.5])
      factory_parrotMove([ 0, .02, 0], 2) // @ 10 ticks
      factory_parrotMove([ 0, -.1, 0], 2) // @ 12 ticks
      factory_parrotMove([0,.4,0], 2, 1) // @  14 ticks
      jumpCloud([3.8,2,0.5], scene) // sleeps 1
      factory_parrotMove([ 0, .33, 0], 2) // @ 16 ticks
      factory_parrotMove([ 0, .23, 0], 2) // @ 18 ticks
      factory_parrotMove([ 0, .08, 0], 2) // @ 20 ticks
      factory_parrotMove([ 0, .06, 0], 2) // @ 22 ticks
      factory_parrotMove([ 0, -.1, 0], 2) // @ 24 ticks
      factory_parrotMove([0,.4,0], 2, 1) // @  26 ticks
      jumpCloud([3.8,3,0.5], scene) // sleeps 1
      factory_parrotMove([ 0, .33, 0], 2) // @ 28 ticks
      factory_parrotMove([ 0, .23, 0], 2) // @ 30 ticks
      factory_parrotMove([ 0.1, .08, 0], 2) // @ 32 ticks
      factory_parrotMove([ 0.15, .06, 0], 2) // @ 34 ticks
      factory_parrotMove([ 0.3, 0, 0], 2) // @ 36 ticks
      scene.addKeyframe()
      scene.special.changeBirbPose(parrot2, () => new parrotAnimation_cursorPose())
    })
    .scene("tools", "Tool set", (scene, util) => {
      scene.world.setBlock([2,1,4], "minecraft:crafting_table", false)
      scene.world.setBlock([2,1,3], "minecraft:stonecutter", false)
      scene.world.setBlock([2,1,2], "minecraft:furnace", false)

      scene.world.setBlocks([3,1,0,3,1,4], "minecraft:obsidian", false)
      scene.world.setBlocks([3,2,0,3,2,4], "minecraft:light_blue_concrete", false)
      scene.setSceneOffsetY(-1.0)
      scene.scaleSceneView(2)
      scene.showBasePlate()
      scene.idle(10)
      scene.special.movePointOfInterest([3,1,2])
      let parrot = scene.special.createBirb([1.5, 1, 2.5], () => new parrotAnimation_poiPose)

      factory_text("The automaton comes with it's own Personal Assembler!", scene, 60, [1.5, 2, 2.5])
      scene.idle(15)
      for (let z = 4; z > 1; z--)
        fadeInSection(scene, [2,1,z], [0,0,-z+2], Direction.SOUTH, 10, [2.5,2,2.5])
      scene.showControls(40, [1.5,2.5,2.5], "down").withItem("crafting_on_a_stick:stonecutter")
      scene.text(40, "Open by pressing the V key", [1.5, 2, 2.5]).attachKeyFrame().placeNearTarget().colored("medium")
      scene.idle(42)
      scene.addLazyKeyframe()
      scene.idle(5)
      
      for (let y = 1; y < 3; y ++) {
        scene.idle(2)
        for (let z = 1; z < 4; z ++) {
          if (y == 2 && z == 1) {
            factory_text("The automaton is able to break and place any block from up to 30 metres away!", scene, 65, [4,1,5])
          }
          scene.special.movePointOfInterest([3,y,z])
          scene.idle(2)
          scene.world.showSection([3,y,z], Facing.DOWN)
          scene.playSound("block.stone.place")
          scene.idle(2)
        }
        if (y == 1)
          scene.special.movePointOfInterest([3,2,1])
        scene.idle(3)
      }
      scene.special.movePointOfInterest([3,1,3])
      scene.idle(2)
      for (let z = 3; z > 0; z --)
        for (let y = 1; y < 3; y ++) {
          scene.special.movePointOfInterest([3,y,z])
          scene.idle(4)
          for (let i = 0; i < 4; i ++) {
            scene.world.incrementBlockBreakingProgress([3,y,z])
            scene.world.incrementBlockBreakingProgress([3,y,z])
            scene.idle(1)
          }
          scene.world.destroyBlock([3,y,z])
          scene.playSound("block.stone.break")
          scene.world.createItemEntity([3,y,z], util.vector.of(0.02-(z%2+.5)/100, 0.4, (y%3+.3)/100), y == 1 ? "minecraft:obsidian" : "minecraft:light_blue_concrete")
          scene.idle(2)
        }
      scene.idle(3)
      scene.special.movePointOfInterest([3,1,2])
    })
    // .scene("ai", "Revolutionary AI systems", (scene, _) => {
    //   //scene.world.setBlock([4,1,1], "")
    //   scene.scaleSceneView(2)
    //   scene.showBasePlate()
    //   scene.idle(10)
    //   scene.special.movePointOfInterest([0,1,0])
    //   let parrot = scene.special.createBirb([2.5,1,2.5], () => new parrotAnimation_poiPose())
    //   scene.idle(10)
    //   factory_text_idle("Powered by our revolutionary AI systems that redefines the possibilities...", scene, 60, [2.5,2,2.5])
    //   //factory_text_idle("Let us look at what the automaton would see", scene, 40, [2.5, 2, 2.5])
    //   // analyse
    //   factory_text("The automaton can analyse blocks and devices using the patented J.A.D.E. system by scanning them with their visual camera")
    //   scene.showControls(120, [2.5,3,2.5], "down")
    //   // index
    //   // summary
    //   // ponder


    //   //factory_text("", scene, 50, [2.5,2,2.5])
    //   //factory_text("J.A.D.E systems works in tandem with the global P.O.N.D.E.R. system", scene, 50, [])
    //   //factory_text("Our S.U.M.M.A.R.Y. system gives concise information straight from our network")
    // })
    // .scene("PerAss", "Personal Assembler", (scene, _) => {

    // })
})