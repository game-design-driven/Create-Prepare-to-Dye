// Welcome to your newly acquired automaton! Our new models can help you achieve your dreams!
//   The following describes important features you should know about before embarking on your new
//   and exciting extraterrestrial activities!

// The automaton is indestructible!
// The automaton has powerful arms that can break any block!
// The automaton does not eat, does not sleep, and does not break! (terms may apply, no warranty)
// The automaton can analyse blocks and devices using the patented J.A.D.E. system!
// The automaton index is used to lookup device interactions and machine processes!
// The patented S.U.M.M.A.R.Y. system is used to provide concise, research based,
//   up to date information about anything you may desire*!
//   (*Unless research was not done and submitted to our network)
// The new brass actuator legs will allow the automaton to jump mid-air twice!
//   100% more than last year's model!

const parrotAnimation = Java.loadClass('com.simibubi.create.foundation.ponder.element.ParrotElement')
const parrotAnimation_stillPose = parrotAnimation.DancePose
const parrotAnimation_poiPose = parrotAnimation.FacePointOfInterestPose
const parrotAnimation_cursorPose = parrotAnimation.FaceCursorPose

function scene_introduction(scene, util) {
  
  
}

function scene_jump(scene, util) {

}

var lastScene_text, lastTicks, lastPosition
function factory_text_idle(string, scene, ticks, position) {
  if (!scene) {
    scene = lastScene_text
    ticks = lastTicks
    position = lastPosition
  }

  scene.text(ticks, string, position)
    .colored("white")
    .placeNearTarget()
  scene.addLazyKeyframe()
  scene.idle(ticks+5)

  lastScene_text = scene
  lastTicks = ticks
  lastPosition = position
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

Ponder.registry((event) => {
  event
    .create("minecraft:cobblestone")
    .scene("introduction", "AUTOMATON 9000", (scene, _) => {
      scene.configureBasePlate(2,2,-1)
      scene.setSceneOffsetY(-1.0)
      scene.scaleSceneView(2)
      scene.showBasePlate()
      scene.idle(10)
      
      let pos = [1.5,1,1.5]
      let textPos = pos.slice() //copy pos array
      textPos[1] += 1
      let parrot = scene.special.createBirb(pos, () => new parrotAnimation_stillPose())
      factory_text_idle("Thank you for purchasing the AUTOMATON 9000", scene, 60, textPos)
      factory_text_idle("We hope it brings you many years of good use!")
      factory_text_idle("Version CQ1503 brings all new features!")
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
      factory_text_idle("Introducing Triple Jump", scene, 40, [4.5,5,.5])
      scene.addKeyframe()
      scene.idle(10)
      // smooth jump otherwise it looks like zigzagging in the air
      factory_parrotMove([-.15, .40,.15], 2, 1, scene, parrot) // @ 2 ticks
      jumpCloud([4.5,4.,.5], scene) // sleeps 1
      factory_parrotMove([-.15, .30, .15], 2) // @  4 ticks
      factory_parrotMove([-.15, .20, .15], 2) // @  6 ticks
      factory_parrotMove([-.15, .08, .15], 2) // @  8 ticks
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
      factory_parrotMove([ 0, .02, 0], 2) // @ 10 ticks
      factory_parrotMove([ 0, -.1, 0], 2) // @ 12 ticks
      factory_parrotMove([0,.4,0], 2, 1) // @  2 ticks
      jumpCloud([3.8,2,0.5], scene) // sleeps 1
      factory_parrotMove([ 0, .33, 0], 2) // @ 4 ticks
      factory_parrotMove([ 0, .23, 0], 2) // @ 6 ticks
      factory_parrotMove([ 0, .08, 0], 2) // @ 8 ticks
      factory_parrotMove([ 0, .06, 0], 2) // @ 10 ticks
      factory_parrotMove([ 0, -.1, 0], 2) // @ 12 ticks
      factory_parrotMove([0,.4,0], 2, 1) // @  2 ticks
      jumpCloud([3.8,3,0.5], scene) // sleeps 1
      factory_parrotMove([ 0, .33, 0], 2) // @ 4 ticks
      factory_parrotMove([ 0, .23, 0], 2) // @ 6 ticks
      factory_parrotMove([ 0.1, .08, 0], 2) // @ 8 ticks
      factory_parrotMove([ 0.15, .06, 0], 2) // @ 10 ticks
      factory_parrotMove([ 0.3, 0, 0], 2) // @ 10 ticks
      scene.addKeyframe()
      scene.special.changeBirbPose(parrot2, () => new parrotAnimation_cursorPose())
    })
    .scene("power", "Destruction", (scene, _) => {
      
    })
})