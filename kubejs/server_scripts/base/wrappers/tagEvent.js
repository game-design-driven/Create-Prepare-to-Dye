//priority:10
function getIdOfTagEntry(entry) {
	ServerEvents.tags('item', event => {
		return event.getIdOfEntry(entry)
	})
}


function getTag(id) {
	ServerEvents.tags('item', event => {
		return event.get(id)
	})
}

function addToTag(tag, ids) {
	tag = tag.includes('#') ? tag.replace('#', '') : tag
	if (tag.includes('/')) {
		//should also add parent tag
		addToTag(tag.split('/')[0], ids)
	}
	ServerEvents.tags('item', event => {
		return event.add(tag, ids)
	})
    ServerEvents.tags('block', event => {
		return event.add(tag, ids)
	})
}
function addFluidToTag(tag, ids) {
	if (tag.includes('/')) {
		//should also add parent tag
		addFluidToTag(tag.split('/')[0], ids)
	}
	const t = tag.includes('#') ? tag.replace('#', '') : tag
	ServerEvents.tags("fluid", event => {
		event.add(tag, ids)
	})
}

function removeFromTag(tag, ids) {
	ServerEvents.tags('item', event => {
		return event.remove(tag, ids)
	})
}

function removeAllFromTag(tag) {
	ServerEvents.tags('item', event => {
		return event.removeAll(tag)
	})
}
