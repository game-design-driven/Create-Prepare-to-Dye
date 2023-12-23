const hammer_deviceMap = new Map([
  ["forge:device/mechanical", "ptdye:mechanical_device"],
  ["forge:device/sturdy", "ptdye:sturdy_device"],
  ["forge:device/logic", "ptdye:logic_device"],
  ["forge:device/sealed", "ptdye:sealed_device"],
  ["forge:device/smart", "ptdye:smart_device"],
  ["forge:device/locomotive", "ptdye:locomotive_device"],
  ["forge:device/red_stringed", "ptdye:red_stringed_device"],
  ["forge:device/furniture", "ptdye:furnished_device"],
]);

function hammer_breakBlock(block, item, player){
  const drops = block.getDrops()
  if (drops.size() > 1) {
    drops.removeIf(drop => drop.is(block.id))
    for(const drop of drops) {
      player.give(drop)
    }
  }
  player.give(item)
  block.set("air")
}

ItemEvents.rightClicked((event) => {
  if (event.item.id != "ptdye:hammer" || event.player.getOffHandItem() != "minecraft:air")
    return
  
  event.player.swing()

  const block = event.target.block
  if (block) {
    for(const [tag, item] of hammer_deviceMap.entries()) {
      if (block.hasTag(tag)) {
        // Sound + Particles
        const {x, y, z} = block.getPos()
        event.level.runCommandSilent(`/playsound ptdye:hammer player @a[dx=1,dy=1,dz=1] ${x} ${y} ${z} 1 1 .3`)
        event.level.runCommandSilent(`/particle minecraft:wax_off ${x} ${y + 0.5} ${z} .25 .25 .25 .15 25`)
        // Breaking Block
        hammer_breakBlock(block, item, event.player)
        break
      }
    }
  }
})

