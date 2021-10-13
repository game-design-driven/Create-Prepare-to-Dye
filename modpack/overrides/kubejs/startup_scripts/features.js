global.features = new Map();
global.functions = {}
global.itemsToHide = []
global.itemsToRemove = []
global.feature = (name) => {
    if (global.features.has(name)) {
        return features.get(name);
    }
    return true //all features enabled by default //temp off
}
global.disableFeature = (name) => {
    global.features.set(name, false)
}
global.enableFeature = (name) => { //don't see why you do this as they are all enabled by default
    global.features.set(name, true)
}