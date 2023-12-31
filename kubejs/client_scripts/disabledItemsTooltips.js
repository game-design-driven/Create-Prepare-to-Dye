ItemEvents.tooltip((event) => {
  event.addAdvanced(Ingredient.of("#c:removed"), (item, advanced, text) => {
    text.add(
      Text.red(
        `This item was removed from the game. If you acquired it in Automation mode, please contact the Create: Prepare to Dye developers on Discord or Github`
      )
    );
  });
  event.addAdvanced(Ingredient.of("%food"), (item, advanced, text) => {
    if (!item.getFoodProperties(null)) return;
    let nutrition = item.getFoodProperties(null).getNutrition();
    let saturationModifier = item.getFoodProperties(
      Client.player
    ).saturationModifier;
    let saturation = Math.round(nutrition * saturationModifier * 2 * 10) / 10;
    text.add(Text.darkGreen('Saturation').append(Text.green(` ${saturation}`)));
    text.add(Text.darkGreen('Nutrition').append(Text.green(` ${nutrition}`)));
  });
});
