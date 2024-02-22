if (feature("Replace Quark Crate")) {
  // output, input
  addStonecutting("ptdyeplus:crate_barrel", "quark:crate")

  BlockEvents.placed("quark:crate", (event) => {
    event.block.set("ptdyeplus:crate_barrel")
    tellPlayer(event.getPlayer(), "text.ptdye.replacePlacedCrate")
  })

  ItemEvents.pickedUp("quark:crate", (event) => {
    tellPlayer(event.getPlayer(), Text.translate("text.ptdye.pickedUpOutofdate").append(" ").red().append(Text.translate("text.ptdye.outOfDate.QuarkCrate").white()))
  })

  BlockEvents.rightClicked("quark:crate", (event) => {
    tellPlayer(event.getPlayer(), "text.ptdye.outOfDate.QuarkCrate")
  })
}