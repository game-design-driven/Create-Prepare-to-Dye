//priority:100
function feature(name) {
    return global.feature(name)
}
function disableFeature(name) {
    global.disableFeature(name)
}
function enableFeature(name) { //don't see why you do this as they are all enabled by default
    global.enableFeature(name, true)
}