
// ClientEvents.lang('en_us',event => { //attempt to support nbt, I think the create api just doesn't, sadge
//     // let stack = Item.of('botania:twig_wand', '{color1:0,color2:0}')
//     let stack = Item.of('minecraft:diamond')
//     let key = 'item.' + stack.id.replace(':', '.')
//     if (stack.nbt) {
    //         key = key + stack.getNbt().toString()   .replaceAll('"', "'")
    //     }
    //     key = key + '.tooltip.summary'
    //     console.log('Translation key of '+stack.item+'  with nbt is '+key)
    //     console.log('Translation of '+stack.item+'  with nbt is '+Text.translate(key).getString())
//     $TooltipModifier.REGISTRY.register(
    //         stack.item, new $ItemDescription(
        //             stack.item,
        //             $Palette.STANDARD_CREATE
        //         )
        //     )
        // });
        
const $ItemDescription = Java.loadClass('com.simibubi.create.foundation.item.ItemDescription$Modifier');
const $TooltipModifier = Java.loadClass('com.simibubi.create.foundation.item.TooltipModifier');
const $Palette = Java.loadClass('com.simibubi.create.foundation.item.TooltipHelper$Palette');
ClientEvents.lang('en_us',event => {
    global.itemTooltips.forEach(tooltipObject => {
        let [id, tooltip] = tooltipObject
        let item = Item.of(id)
        console.info(`adding ${tooltip} to ${item}`)
        event.add(`${item.getDescriptionId()}.tooltip.summary`, tooltip)
        global.itemTooltips = global.itemTooltips.filter(item => item !== tooltipObject)
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
