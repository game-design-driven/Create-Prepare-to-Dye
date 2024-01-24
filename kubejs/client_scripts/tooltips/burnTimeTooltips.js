if (feature("Burn Time tooltips")) {
  ItemEvents.tooltip((event) => {
    //burn time tooltips
    event.addAdvanced(Ingredient.of(/.*/), (item, advanced, text) => {
      let burnTime = $ForgeHooks.getBurnTime(item, "minecraft:smelting");
      if (burnTime == 0) return;
      text.add(
        Text.darkGray("Burn Time").append(
          Text.gray(` ${Math.round((burnTime / 20) * 10) / 10} Seconds`)
        )
      );
    });
  });
}
