StartupEvents.registry("block", (event) => {
  event.create("ptdye:gray_fence_gate", "fence_gate")
    .translationKey("block.ptdye.grayFenceGate")
    .texture("texture", "quark:block/iron_plate")
    .tagBoth("forge:fence_gates")
    .material("metal")
})