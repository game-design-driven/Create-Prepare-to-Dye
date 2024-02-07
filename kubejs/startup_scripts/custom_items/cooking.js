if (feature("Tomato")) {
  StartupEvents.registry("item", (event) => {
    event
      .create("ptdye:tomato")
      .group("food")
      .food((food) => {
        food.hunger(3).saturation(1);
      });
  });
}

