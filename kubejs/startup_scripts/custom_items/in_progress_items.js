StartupEvents.registry("item", (event) => {
    event
      .create("ptdye:incomplete_rail", "create:sequenced_assembly")
      .unstackable()
  });