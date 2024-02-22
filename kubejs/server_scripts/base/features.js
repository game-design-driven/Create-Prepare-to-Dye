// priority: 100

//read features.json
console.log("Reading features.json and indexing all feature rules");
let featuresUserSettings = JsonIO.read(
  "kubejs/features.json"
)
if (featuresUserSettings !== null) {
    console.log("Features list found")
    featuresUserSettings.forEach((key, value) =>{
        global.features.set(key,value)
    })
}
function feature(name) {
    if (global.features.get(name) !== null){
        return global.features.get(name)
    }
    else{
        global.features.set(name, true)
        console.log('added missing feature '+name)
        return true
    }
}