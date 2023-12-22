// priority: -100

//write features.json
console.log("Writing features.json from all features used in scripts");
console.log(global.features.size);
let obj = {}
global.features.forEach((value, key)=>{
  obj[key]=value
})
JsonIO.write(
  "kubejs/features.json",
  obj
)