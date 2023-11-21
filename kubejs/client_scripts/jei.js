// priority: 0
// JEIEvents.hideCustom((event) => {
//   console.info(event.get("ae2:condenser"));
// });
JEIEvents.removeCategories((event) => {
  global.categoriesToHide.forEach((category) => {
    event.remove(category);
  });
  event.remove("minecraft:crafting");
});
JEIEvents.hideItems((event) => {
  //hide colored stuff
  global.colors.forEach((color) => {
    event.hide(`create:${color}_valve_handle`);
    if (color != "brown") event.hide(`create:${color}_toolbox`);
    if (color != "white") event.hide(`create:${color}_seat`);
    if (color != "white") event.hide(`minecraft:${color}_bed`);
    if (color != "white") event.hide(`supplementaries:flag_${color}`);
    if (color != "white") event.hide(`minecraft:${color}_banner`);
    if (color != "white") event.hide(`quark:${color}_stool`);
    event.hide(`minecraft:${color}_candle`);
    event.hide(`minecraft:${color}_shulker_box`);
    event.hide(`supplementaries:candle_holder_${color}`);
  });
});
