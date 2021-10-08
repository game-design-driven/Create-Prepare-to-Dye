global.features = new Map();
global.functions = {}
global.feature = (name) => {
    if (features.has(name)) {
        return features.get(name);
    }
    return true //all features enabled by default
}
global.disableFeature = (name) => {
    features.set(name, false)
}
global.enableFeature = (name) => { //don't see why you do this as they are all enabled by default
    features.set(name, true)
}