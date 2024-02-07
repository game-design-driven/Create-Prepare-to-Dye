StartupEvents.registry("item", (event) => {
    .create("ptdye:incomplete_rail", "create:sequenced_assembly")
    .unstackable();
  event
    .create("ptdye:incomplete_pancake", "create:sequenced_assembly")
    .food((food) => {
      food.hunger(2).saturation(1);
    })
    .unstackable();
  event
