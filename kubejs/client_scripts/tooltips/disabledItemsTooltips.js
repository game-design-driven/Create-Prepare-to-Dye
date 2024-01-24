if (feature("Tooltips for disabled items")) {
  ItemEvents.tooltip((event) => {
    event.addAdvanced(Ingredient.of("#c:removed"), (item, advanced, text) => {
      text.add(
        Text.red(
          `This item was removed from the game. If you acquired it in Automation mode, please contact the Create: Prepare to Dye developers on Discord or Github`
        )
      );
    });
  });
}
