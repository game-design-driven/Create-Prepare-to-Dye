// priority: 100
global.features = new Map();
global.functions = {}
global.feature = (name) => {
    if (global.features.has(name)) {
        return global.features.get(name);
    }
    return true //all features enabled by default
}
global.disableFeature = (name) => {
    global.features.set(name, false)
}
global.enableFeature = (name) => { //don't see why you do this as they are all enabled by default
    global.features.set(name, true)
}

function feature(name) {
    return global.feature(name)
}
function disableFeature(name) {
    global.disableFeature(name)
}
function enableFeature(name) { //don't see why you do this as they are all enabled by default
    global.enableFeature(name, true)
}