StartupEvents.registry("item", (event) => {
  event
    .create("ptdye:animation_anchor")
    .displayName(Text.translate("item.ptdye.animation_anchor"))
    .tooltip(Text.translate("item.ptdye.animation_anchor.desc"))
    .texture("ptdye:item/animation_anchor")
    .unstackable()

  event
    .create("ptdye:animation_anchor_set")
    .displayName(Text.translate("item.ptdye.animation_anchor"))
    .tooltip(Text.translate("item.ptdye.animation_anchor.desc"))
    .texture("ptdye:item/animation_anchor_set")
    .unstackable()
    .group(null)
    .glow(true)
});