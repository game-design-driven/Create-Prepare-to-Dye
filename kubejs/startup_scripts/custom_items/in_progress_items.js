StartupEvents.registry("item", (event) => {
  event
    .create("ptdye:incomplete_rail", "create:sequenced_assembly")
    .unstackable();
  event
    .create("ptdye:incomplete_pancake", "create:sequenced_assembly")
    .food((food) => {
      food.hunger(2).saturation(1);
    })
    .unstackable();
  event
    .create("ptdye:incomplete_pizza", "create:sequenced_assembly")
    .food((food) => {
      food.hunger(2).saturation(1);
    })
    .unstackable();
  event
  .create("ptdye:pizza_base", "create:sequenced_assembly")
  .food((food) => {
    food.hunger(1).saturation(1);
  })
  .unstackable();
});
