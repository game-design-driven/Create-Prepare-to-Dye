if(feature("Armor, Tools and a few other pieces of equipment stack to 16")){
  addToTag("ptdye:stacks_to_16",[
    "#forge:tools",
    "#forge:armors",
    "#minecraft:boats",
    "minecraft:potion",
    "minecraft:potion",
    "minecraft:potion",
  ])
}

if(feature("Generic Devices stack to 128")){
  addToTag("ptdye:stacks_to_128",[
    "#forge:generics/devices",
  ])
}

if(feature("Building blocks stack to 512")){
  addToTag("ptdye:stacks_to_512",[
    "#forge:concrete",
    "#minecraft:terracotta",
    "#ptdye:decorative_block",
  ])
}

if(feature("Some trade inputs/outputs stack higher")){
  addToTag("ptdye:stacks_to_64",[
    "minecraft:cake",
  ])
}