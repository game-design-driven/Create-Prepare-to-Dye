//priority:10
function getIdOfTagEntry(entry) {
	onEvent('item.tags', event => {
		return event.getIdOfEntry(entry)
	})
}


function getTag(id) {
	onEvent('item.tags', event => {
		return event.get(id)
	})
}

function addToTag(tag, ids) {
	if (tag.includes('/')) {
		//should also add parent tag
		addToTag(tag.split('/')[0], ids)
	}
	const t = tag.includes('#') ? tag.replace('#', '') : tag
	onEvent('item.tags', event => {
		return event.add(tag, ids)
	})
}

function removeFromTag(tag, ids) {
	onEvent('item.tags', event => {
		return event.remove(tag, ids)
	})
}

function removeAllFromTag(tag) {
	onEvent('item.tags', event => {
		return event.removeAll(tag)
	})
}

function removeAllTagsFrom(ids) {
	onEvent('item.tags', event => {
		return event.removeAllTagsFrom(ids)
	})
}
