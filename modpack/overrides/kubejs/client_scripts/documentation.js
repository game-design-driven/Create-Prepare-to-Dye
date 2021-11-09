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
let iteratedItems = []
onEvent('item.tooltip', event => {
    // Item.typeList.forEach(stack =>{ // doesn't seem to work
    Item.list.forEach(stack => {
        if (iteratedItems.includes(stack.id)) return
        iteratedItems.push(stack.id)
        event.addAdvanced(stack, (s, adv, tooltipText) => {
            let key = 'tooltip.' + stack.id.replace(':', '.')
            if (s.nbt) {
                key = key + s.getNbt().toString()   .replaceAll('"', "'")
            }
            let translated = text.translate(key)
            if (translated != key){
                console.log(s+" "+"The key is " + key + " " + " \n the translation is " + translated)
                tooltipText.add(parseTooltip(translated))
            }
        })

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
