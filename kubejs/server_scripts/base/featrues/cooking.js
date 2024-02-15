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

  removeRecipe({ id: "supplementaries:pancake" });

  ["200x create:chocolate", "200x create:honey", "200x milk"].forEach(
    (pancake_batter) => {
      addAssembly("4x supplementaries:pancake", "create:dough", [
        addFilling("stick", "stick", pancake_batter),
        addDeploying("stick", "stick", "egg"),
        addDeploying("stick", "stick", "sugar"),
        addPressing("stick", "stick"),
      ]);
    }
  );
}

if (feature("Pizza recipes")) {
  addPressing("ptdye:pizza_base", "create:dough");
  addAssembly("ptdye:pizza", "ptdye:pizza_base", [
    addFilling("ptdye:pizza", "ptdye:pizza_base", "ptdye:tomato_sauce"),
    addDeploying("ptdye:pizza", "ptdye:pizza_base", "kubejs:fermented_blob"),
  ]);
}
