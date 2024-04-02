if (feature("Hammer")) {
  StartupEvents.registry("item", (event) => {
    event
      .create("ptdye:hammer")
      .displayName(Text.translate("item.ptdye.hammer"))
      .tooltip(Text.translate("item.ptdye.hammer.desc"))
      .texture("ptdye:item/hammer")
      .unstackable();
  });
}
