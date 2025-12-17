if (feature("Hammer")) {
  StartupEvents.registry("item", (event) => {
    event
      .create("ptdye:hammer")
      .displayName(Text.translate("item.ptdye.hammer"))
      .texture("ptdye:item/hammer")
      .unstackable();
  });
}
