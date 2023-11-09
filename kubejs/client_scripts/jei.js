// priority: 0
JEIEvents.hideItems((event) => {
  event.hide(global.hideManualList);
  event.hide(global.itemsToHide);
  //hide colored stuff
  global.colors.forEach((color) => {
    event.hide(`create:${color}_valve_handle`)
    if (color!='brown') event.hide(`create:${color}_toolbox`)
    if (color!='white') event.hide(`create:${color}_seat`)
    if (color!='white') event.hide(`minecraft:${color}_wool`)
    if (color!='white') event.hide(`minecraft:${color}_bed`)
    if (color!='white') event.hide(`supplementaries:flag_${color}`)
    if (color!='white') event.hide(`minecraft:${color}_concrete`)
    if (color!='white') event.hide(`minecraft:${color}_concrete_powder`)
    if (color!='white') event.hide(`minecraft:${color}_banner`)
    if (color!='white') event.hide(`quark:${color}_stool`)
    event.hide(`quark:${color}_shingles`)
    event.hide(`minecraft:${color}_candle`)
    event.hide(`minecraft:${color}_shulker_box`)
    event.hide(`minecraft:${color}_glazed_terracotta`)
    event.hide(`supplementaries:candle_holder_${color}`)
    event.hide(`minecraft:${color}_stained_glass`)
    event.hide(`quark:${color}_framed_glass`)
  })
});


