if (feature('Tooltips for trades denoting amount of time they can be repeated')) {
  ItemEvents.tooltip((event) => {
    event.addAdvanced(Ingredient.of(/.*/), (item, advanced, text) => {
      if (!item.hasNBT()) return;
      if (item.mod != "wares") return;
      let nbt = item.nbt;
      let ordered = nbt.getInt("ordered");
      if (ordered != null) {
        if (ordered == 0){
          text.add(Text.darkGreen("Fixed rates contract."))
          text.add(Text.darkGreen("Can be repeated ").append(Text.green(`infinitely`)))
        }
        else{
          if (item.id == "wares:delivery_agreement"){
            text.add(Text.darkGreen("Contract can be repeated ").append(Text.green(`${ordered} times`)))
          }
          else{
            text.add(Text.darkGreen("Contract was repeated ").append(Text.green(`${ordered} times`)))
          }
        }
      }
    });
  });
}
