global.itemTooltips = []
const $ItemDescription = Java.loadClass('com.simibubi.create.foundation.item.ItemDescription$Modifier');
const $TooltipModifier = Java.loadClass('com.simibubi.create.foundation.item.TooltipModifier');
const $Palette = Java.loadClass('com.simibubi.create.foundation.item.TooltipHelper$Palette');
ClientEvents.lang('en_us',event => {
    global.itemTooltips.forEach(tooltipObject => {
        let [id, tooltip] = tooltipObject
        let item = Item.of(id)
        console.info(`adding ${tooltip} to ${item}`)
        event.add(`${item.getDescriptionId()}.tooltip.summary`, tooltip)
    });
    Ingredient.all.itemIds.forEach(id => {
        $TooltipModifier.REGISTRY.registerDeferred(
          id, (item) => new $ItemDescription(
              item,
              $Palette.STANDARD_CREATE
          )
        )
    });
});
