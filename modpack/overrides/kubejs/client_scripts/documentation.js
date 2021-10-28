// let formattedTooltip = (item, tooltip) => {
//     let limit = 20
//     let line = ''
//     tooltip.split(' ').forEach(word => {
//       line.length == 0 ? line = word : line += ` ${word}`
//       if(line.length > limit){
//         e.add(item, line)
//         line = ''
//       }
//     })
//     if(line.length >= 0) e.add(item, line)
//   }
onEvent('item.tooltip', event => {
    event.addAdvanced(Item.of('botania:blood_pendant', '{brewKey:"botania:strength"}'), (s, adv, text) => {
        text.add("should be only on the strength one")
    })
    Item.list.forEach(stack => {
        // if (stack.hasNBT()) return
        let key = 'tooltip.' + stack.id.replace(':', '.')
        let translated = text.translate(key)
        if (key != translated) { //means we found a tooltip
            console.log(stack.toString());
            console.log(stack.toJson());
            console.log(stack);
            event.addAdvanced(Item.of(stack, stack.getNbt()), (s, adv, text) => {
                if (event.shift) {
                    text.add(parseTooltip(translated))
                }
            })
        }
    });
})
function parseTooltip(tip) {
    let tooltipColor = '\u00A73';
    //some more operations go here in the future
    return tooltipColor + tip
}

// if ((tip + "").includes('_'))
//     if (tip.split('_'))
//         r.forEach(element => {
//             console.log('   ' + element);
//         });
// // onEvent('item.tooltip', event => {
//     event.addAdvanced('minecraft:book', (stack, advanced, text) => {
//         text.add('THIS IS ADDITIONAL')
//         if (event.shift) {
//         }
//     })
//     event.addAdvanced('create:controller_rail', (stack, advanced, text) => {
//         text.add('THIS IS ADDITIONAL')
//         if (event.shift) {
//         }
//     })
// })
