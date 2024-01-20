if (feature("Combining enchanted books")) {
  var $Registry = Java.loadClass("net.minecraft.core.Registry");

  $Registry.ENCHANTMENT.entrySet().forEach((enchant) => {
    var enchant_id = String(enchant.getKey().location());
    var enchant_max_level = parseInt(
      enchant.getValue().getMaxLevel().toFixed(0)
    );
    let enchant_level = 2;
    while (enchant_level <= enchant_max_level) {
      addAssembly(
        Item.of("minecraft:enchanted_book", 1).enchant(
          enchant_id,
          enchant_level
        ),
        Item.of("minecraft:enchanted_book", 1)
          .enchant(enchant_id, enchant_level - 1)
          .strongNBT(),
        [
          addFilling(
            "stick",
            "stick",
            "1x create_enchantment_industry:experience"
          ),
          addDeploying(
            "stick",
            "stick",
            Item.of("minecraft:enchanted_book", 1)
              .enchant(enchant_id, enchant_level - 1)
              .strongNBT()
          ),
        ]
      );
      enchant_level++;
    }
  });
}
