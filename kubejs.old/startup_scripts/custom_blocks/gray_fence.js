StartupEvents.registry("block", (event) => {
  event.create("ptdye:gray_fence", "fence")
    .translationKey("block.ptdye.grayFence")
    .texture("texture", "quark:block/iron_plate")
    .material("metal")
})