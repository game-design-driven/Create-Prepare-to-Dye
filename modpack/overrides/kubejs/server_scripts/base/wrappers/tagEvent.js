function getIdOfEntry(entry) {
	onEvent('item.tags', event => {
        return event.getIdOfEntry(entry)
    })
}


function get( id) {
	onEvent('item.tags', event => {
		return event.get(id)
	})
}

function addToTag (tag,  ids) {
	onEvent('item.tags', event => {
		return event.addToTag(tag,  ids)
	})	
}

function removeFromTag( tag, ids) {
	onEvent('item.tags', event => {
		return event.removeFromTag(tag,  ids)
	})		
}

function removeAllFromTag( tag) {
	onEvent('item.tags', event => {
		return event.removeAllFromTag(tag)
	})	
}

function removeAllTagsFrom( ids) {
	onEvent('item.tags', event => {
		return event.removeAllTagsFrom(ids)
	})
}
