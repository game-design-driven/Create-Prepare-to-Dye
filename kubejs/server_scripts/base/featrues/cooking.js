if (feature("Tomato sauce recipes")) {
  addMixing(
    "50mb ptdye:tomato_sauce",
    ["ptdye:tomato", "salt:salt"],
    temperature.heated
  );
}
if (feature("Better dough recipes")) {
  removeRecipe({ id: "create:crafting/appliances/dough" });
  removeRecipe({ id: "create:mixing/dough_by_mixing" });
  addMixing("create:dough", ["create:wheat_flour", "50mb water"]);
}

if (feature("Better pancake recipe")) {
  addFluidToTag("ptdye:pancake_batter", [
    "create:chocolate",
    "create:honey",
    "milk",
  ]);
