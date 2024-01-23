if (feature("Add direct filling recipes for potions instead of dynamic ones")) {
  let $Registry = Java.loadClass("net.minecraft.core.Registry");
  $Registry.POTION.entrySet().forEach((potion) => {
    let potion_id = String(potion.getKey().location());
    ["potion", "splash_potion", "lingering_potion", "tipped_arrow"].forEach(
      (type) => {
        if (Item.of(type, { Potion: potion_id }).isEmpty()) return;
        addFilling(
          Item.of(type, { Potion: potion_id }),
          type.includes("potion") ? "glass_bottle" : "arrow",
          Fluid.of("create:potion", type.includes("potion") ? 250 : 25, {
            Potion: potion_id,
            Bottle: type.replace("_potion", "").toUpperCase(),
          })
        );
      }
    );
  });
}
if (feature("Disable brewing stand")) {
  removeItem("minecraft:brewing_stand");
}
