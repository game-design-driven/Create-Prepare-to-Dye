const hammer_deviceMap = new Map([
  ["forge:devices/mechanical", "ptdye:mechanical_device"],
  ["forge:devices/sturdy", "ptdye:sturdy_device"],
  ["forge:devices/logic", "ptdye:logic_device"],
  ["forge:devices/sealed", "ptdye:sealed_device"],
  ["forge:devices/smart", "ptdye:smart_device"],
  ["forge:devices/locomotive", "ptdye:locomotive_device"],
  ["forge:devices/red_stringed", "ptdye:red_stringed_device"],
  ["forge:devices/furniture", "ptdye:furnished_device"],
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

function hammer_handleEvent(event, block) {
  if (block == null) block = event.target.block
  if (!block) return

  const isDevice = block.hasTag("forge:devices")
  const isGenericDevice = block.hasTag("forge:generics/devices")
  if (isDevice || isGenericDevice) {
    event.player.swing()
    // there should never be a block with devices tag that does not have a generic of the same type
    let generic = block.id
    if (isDevice) {
      let deviceTag = block.getTags().filter(
        tag => (tag + "").startsWith("forge:devices/")
      )[0]
      if (!deviceTag) return

      let deviceTagParts = (deviceTag + "").split("/")
      if (deviceTagParts.length < 2) return

      // Fraction-tagged devices (e.g. forge:devices/sealed/8) should not convert to full generics.
      if (deviceTagParts.length > 2) return

      let deviceType = deviceTagParts[1]
      let deviceCategory = `#forge:generics/devices/${deviceType}`
      let genericItems = Ingredient.of(deviceCategory).itemIds
      if (!genericItems || genericItems.length == 0) return
      generic = genericItems[0]
    }

    let {x, y, z} = block.getPos()
    
    event.level.runCommandSilent(`/playsound ptdye:hammer player @a[dx=1,dy=1,dz=1] ${x} ${y} ${z} 1 1 .3`)
    event.level.runCommandSilent(`/particle minecraft:wax_off ${x} ${y + 0.5} ${z} .25 .25 .25 .15 25`)
    
    hammer_breakBlock(block, generic, event.player)
    event.cancel()
  }
}

ItemEvents.rightClicked((event) => {
  if (event.item.id != "ptdye:hammer" || event.player.getOffHandItem() != "minecraft:air")
    return
  hammer_handleEvent(event)

})



BlockEvents.broken((event) => {
  if (event.player.getMainHandItem().id != "ptdye:hammer" || event.player.getOffHandItem() != "minecraft:air") return
  let block = event.block
  hammer_handleEvent(event, block)
})

if (feature('Hammer picks up broken blocks')) {
  BlockEvents.broken((event) => {
    if (event.player.getMainHandItem().id === 'ptdye:hammer' && !event.player.creative) {
      event.block.getDrops(event.player, event.item).forEach((item) => {
        event.player.give(item);
      });
      event.block.set('minecraft:air')
      event.cancel();
    }
  });
}
