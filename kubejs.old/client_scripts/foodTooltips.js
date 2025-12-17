if (feature("Tooltips for food nutrition and saturation")) {
  ItemEvents.tooltip((event) => {
    event.addAdvanced(Ingredient.of(/.*/), (item, advanced, text) => {
      if (!item.getFoodProperties(null)) return;
      let nutrition = item.getFoodProperties(null).getNutrition();
      let saturationModifier = item.getFoodProperties(
        Client.player
      ).saturationModifier;
      let saturation = Math.round(nutrition * saturationModifier * 2 * 10) / 10;
      text.add(
        Text.darkGreen("Saturation").append(Text.green(` ${saturation}`))
      );
      text.add(Text.darkGreen("Nutrition").append(Text.green(` ${nutrition}`)));
    });
  });
}
