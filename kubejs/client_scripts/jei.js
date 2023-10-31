// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

JEIEvents.hideItems(event => {
	event.hide('minecraft:stone')	
	global.itemsToHide.forEach(item => {
		event.hide(item)
		console.log("hiding " + item);
	});
	
})
// onEvent('jei.remove.categories', event => {
// 	global.categoriesToHide.forEach(cat => {
// 		event.remove(cat)
// 	});
// })